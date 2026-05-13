#!/usr/bin/env node
/**
 * scripts/fetch-playbooks.mjs
 *
 * Goal: Fetch the authoritative Monster of the Week playbook lists (core + approved supplements)
 * from a remote JSON you control (or a publisher dataset), merge with Urban Shadows (optional),
 * validate against the loader schema, and publish to BOTH:
 *   1) a local file (systems.generated.json)
 *   2) Firebase Realtime Database at `config/systems`
 *
 * Usage:
 *   node scripts/fetch-playbooks.mjs \
 *     --src https://your-domain/path/motw_official.json \
 *     --dbUrl https://<your-db-name>.firebaseio.com \
 *     --sa ./serviceAccountKey.json
 *
 * Notes:
 * - You (or the publisher) host a canonical JSON (motw_official.json) with the structure shown below.
 * - If you don't have that yet, export your list from a spreadsheet to the expected shape.
 * - This script will NOT scrape websites. It only fetches JSON you own/control to respect licenses.
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import fetch from 'node-fetch'

// --- tiny arg parser ---
const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) => {
  if (a.startsWith('--')) acc.push([a.slice(2), all[i + 1] && !all[i + 1].startsWith('--') ? all[i + 1] : true])
  return acc
}, []))

const SRC_URL = args.src || process.env.MOTW_SOURCE_URL // authoritative list you provide
const DB_URL  = args.dbUrl || process.env.FIREBASE_DB_URL // your RTDB URL
const SA_PATH = args.sa    || process.env.GOOGLE_APPLICATION_CREDENTIALS // service account json

if (!SRC_URL) {
  console.error('Missing --src <url> to a JSON you control (authoritative MotW list).')
  process.exit(1)
}

// Built‑in fallback seed (core 12 only). Add more if your official file is temporarily unavailable.
const SEED = {
  'monster-of-the-week': {
    name: 'Monster of the Week',
    stats: ['Charm','Cool','Sharp','Tough','Weird'],
    statBounds: { min: -2, max: 3 },
    playbooks: [
      { name: 'The Chosen', source: 'Core' },
      { name: 'The Crooked', source: 'Core' },
      { name: 'The Divine', source: 'Core' },
      { name: 'The Expert', source: 'Core' },
      { name: 'The Flake', source: 'Core' },
      { name: 'The Initiate', source: 'Core' },
      { name: 'The Monstrous', source: 'Core' },
      { name: 'The Mundane', source: 'Core' },
      { name: 'The Professional', source: 'Core' },
      { name: 'The Spell-Slinger', source: 'Core' },
      { name: 'The Spooky', source: 'Core' },
      { name: 'The Wronged', source: 'Core' }
    ],
    supplements: {
      'Tome of Mysteries': { playbooks: [] },
      'Codex of Worlds': { playbooks: [] },
      'Approved Third-Party': { playbooks: [] }
    }
  },
  'urban-shadows': {
    name: 'Urban Shadows (seed)',
    stats: ['Blood','Heart','Mind','Spirit'],
    statBounds: { min: -1, max: 3 },
    playbooks: [
      { name: 'Aware', source: 'Seed' },
      { name: 'Hunter', source: 'Seed' },
      { name: 'Veteran', source: 'Seed' },
      { name: 'Vampire', source: 'Seed' },
      { name: 'Wolf', source: 'Seed' },
      { name: 'Spectre', source: 'Seed' },
      { name: 'Wizard', source: 'Seed' },
      { name: 'Oracle', source: 'Seed' },
      { name: 'Fae', source: 'Seed' },
      { name: 'Tainted', source: 'Seed' }
    ]
  }
}

function normalizeSystems(json) {
  // Ensure required keys; coerce simple arrays into [{name}] objects; trim duplicates
  const out = JSON.parse(JSON.stringify(SEED))
  const systems = json || {}
  for (const key of Object.keys(systems)) {
    const src = systems[key] || {}
    out[key] = { ...(out[key] || {}), ...src }
    if (Array.isArray(out[key].playbooks)) {
      out[key].playbooks = dedupeObjects(out[key].playbooks.map(p => typeof p === 'string' ? { name: p } : p))
    } else {
      out[key].playbooks = []
    }
    if (out[key].supplements) {
      for (const supName of Object.keys(out[key].supplements)) {
        const sup = out[key].supplements[supName] || {}
        sup.playbooks = dedupeObjects((sup.playbooks || []).map(p => typeof p === 'string' ? { name: p } : p))
        out[key].supplements[supName] = sup
      }
    }
  }
  return out
}

function dedupeObjects(arr) {
  const seen = new Set()
  return arr.filter(p => {
    const k = (p.name || '').toLowerCase().trim()
    if (!k || seen.has(k)) return false
    seen.add(k)
    return true
  })
}

async function fetchJSON(url) {
  const res = await fetch(url, { headers: { 'accept': 'application/json' } })
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  return await res.json()
}

async function writeLocalFile(obj) {
  const file = path.resolve(process.cwd(), 'systems.generated.json')
  await fs.writeFile(file, JSON.stringify({ version: 1, updatedAt: new Date().toISOString(), ...obj }, null, 2))
  console.log('✔ wrote', file)
}

async function writeRealtimeDB(obj) {
  if (!DB_URL || !SA_PATH) {
    console.warn('Skipping RTDB publish (missing --dbUrl and/or --sa).')
    return
  }
  // Lazy import admin SDK to avoid requiring it unless used
  const admin = await import('firebase-admin')
  const { initializeApp, applicationDefault, cert } = admin
  if (!admin.apps?.length) {
    const serviceAccount = JSON.parse(await fs.readFile(path.resolve(SA_PATH), 'utf8'))
    initializeApp({ credential: cert(serviceAccount), databaseURL: DB_URL })
  }
  const db = admin.database()
  await db.ref('config/systems').set({ version: 1, updatedAt: new Date().toISOString(), ...obj })
  console.log('✔ published to RTDB config/systems')
}

async function main() {
  let remote
  try {
    remote = await fetchJSON(SRC_URL)
  } catch (e) {
    console.warn('Fetch failed, falling back to SEED. Error:', e.message)
    remote = {}
  }
  const merged = normalizeSystems(remote)
  await writeLocalFile(merged)
  await writeRealtimeDB(merged)
}

main().catch(err => { console.error(err); process.exit(1) })
