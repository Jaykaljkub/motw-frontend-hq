<template>
  <section class="profile" v-if="uid">
    <section v-if="!loading">
      <header class="profile__header">
        <div class="header__title">
          <h1>Operative Profile</h1>
          <p class="muted">Dynamic playbooks: loads from JSON URL or Firebase Realtime DB</p>
        </div>
        <div class="header__controls" v-if="characters.length">
          <select v-model="activeId">
            <option v-for="c in characters" :key="c.id" :value="c.id">{{ c.name || 'Untitled' }} — {{ displaySystem(c.system) }} / {{ c.playbook || 'Playbook' }}</option>
          </select>
          <button class="btn" @click="duplicateCharacter" :disabled="!active">Duplicate</button>
          <button class="btn btn--danger" @click="deleteCharacter" :disabled="!active">Delete</button>
        </div>
        <div class="header__controls">
          <button class="btn" @click="addCharacter">New</button>
          <button class="btn btn--ghost" @click="refreshSystems" :disabled="systemsLoading">{{ systemsLoading ? 'Refreshing…' : 'Refresh Playbooks' }}</button>
        </div>
      </header>

      <div v-if="active" class="profile__grid">
        <!-- System & Basics -->
        <section class="card basics">
          <h2>Basics</h2>
          <div class="field-grid">
            <label>
              <span>System</span>
              <select v-model="draft.system" @change="onSystemChange">
                <option v-for="(cfg, key) in SYSTEMS" :key="key" :value="key">{{ cfg.name }}</option>
              </select>
            </label>
            <label>
              <span>Playbook / Archetype</span>
              <select v-model.trim="draft.playbook">
                <option value="" disabled>Choose…</option>
                <option v-for="p in currentPlaybooks" :key="p" :value="p">{{ p }}</option>
              </select>
            </label>
            <label><span>Name</span><input v-model.trim="draft.name" /></label>
            <label><span>Codename</span><input v-model.trim="draft.codename" /></label>
            <label class="col-span-2"><span>Look</span><input v-model.trim="draft.look" /></label>
            <label class="col-span-2"><span>Background / Notes</span><textarea v-model.trim="draft.background" rows="3" /></label>
          </div>
          <p class="muted" v-if="systemsSource">Loaded playbooks from: <code>{{ systemsSource }}</code></p>
        </section>

        <!-- Stats / Tracks (system aware) -->
        <section class="card stats">
          <h2>Stats</h2>
          <div class="stats__grid">
            <div class="stat" v-for="s in statKeys" :key="s">
              <label>{{ s }}</label>
              <input type="number" :min="statBounds.min" :max="statBounds.max" v-model.number="draft.stats[s]" />
            </div>
          </div>
          <div class="tracks">
            <div class="track"><label>Harm</label><input type="range" min="0" max="7" v-model.number="draft.harm" /><span>{{ draft.harm }} / 7</span></div>
            <div v-if="isMotW" class="track"><label>Luck</label><input type="range" min="0" max="7" v-model.number="draft.luck" /><span>{{ draft.luck }} / 7</span></div>
            <div v-else class="track"><label>Corruption</label><input type="range" min="0" max="5" v-model.number="draft.corruption" /><span>{{ draft.corruption }} / 5</span></div>
            <div class="track"><label>{{ isMotW ? 'Experience' : 'Advances' }}</label><input type="range" min="0" max="5" v-model.number="draft.xp" /><span>{{ draft.xp }} / 5</span></div>
          </div>
        </section>

        <!-- Urban Shadows-only seed -->
        <section v-if="isUS" class="card debts">
          <h2>Factions & Debts (US)</h2>
          <div class="field-grid">
            <label><span>Factions</span><input v-model.trim="draft.usFactions" placeholder="Mortality, Night, Power, Wild" /></label>
            <label class="col-span-2"><span>Debts</span><textarea v-model.trim="draft.usDebts" rows="3" /></label>
          </div>
        </section>

        <!-- Moves -->
        <section class="card moves">
          <h2>Moves</h2>
          <ul class="list">
            <li v-for="(m, i) in draft.moves" :key="m.id" class="list__row">
              <input class="list__title" v-model.trim="m.name" placeholder="Move name" />
              <textarea class="list__notes" v-model.trim="m.text" placeholder="What it does / when it triggers" />
              <button class="icon danger" @click="removeAt(draft.moves, i)">✕</button>
            </li>
          </ul>
          <button class="btn" @click="addMove">Add Move</button>
        </section>

        <!-- Spells / Powers -->
        <section class="card spells">
          <h2>{{ isMotW ? 'Spells' : 'Powers / Magic' }}</h2>
          <ul class="list">
            <li v-for="(sp, i) in draft.spells" :key="sp.id" class="list__row">
              <input class="list__title" v-model.trim="sp.name" :placeholder="isMotW ? 'Spell name' : 'Power / Ritual'" />
              <div class="row">
                <label><span>{{ isMotW ? 'Rating' : 'Circle/Scope' }}</span><input type="number" :min="statBounds.min" :max="statBounds.max" v-model.number="sp.rating" /></label>
                <label><span>Cost</span><input v-model.trim="sp.cost" placeholder="components / corruption / tags" /></label>
              </div>
              <textarea class="list__notes" v-model.trim="sp.effect" />
              <button class="icon danger" @click="removeAt(draft.spells, i)">✕</button>
            </li>
          </ul>
          <button class="btn" @click="addSpell">Add {{ isMotW ? 'Spell' : 'Power' }}</button>
        </section>

        <!-- Inventory / Gear -->
        <section class="card inventory">
          <h2>{{ isMotW ? 'Inventory' : 'Gear / Assets' }}</h2>
          <ul class="list">
            <li v-for="(it, i) in draft.inventory" :key="it.id" class="list__row">
              <input class="list__title" v-model.trim="it.name" placeholder="Item name" />
              <div class="row">
                <label><span>Qty</span><input type="number" min="0" v-model.number="it.qty" /></label>
                <label><span>Tags</span><input v-model.trim="it.tags" placeholder="e.g., 2-harm, close / subtle, valuable" /></label>
              </div>
              <textarea class="list__notes" v-model.trim="it.notes" />
              <button class="icon danger" @click="removeAt(draft.inventory, i)">✕</button>
            </li>
          </ul>
          <button class="btn" @click="addItem">Add Item</button>
        </section>

        <!-- Utilities -->
        <section class="card utils">
          <h2>Utilities</h2>
          <div class="btn-row">
            <button class="btn" @click="hardSave" :disabled="!draft.id">Save Now</button>
            <button class="btn btn--ghost" @click="resetDraft" :disabled="!active">Reset Draft</button>
          </div>
          <p class="muted">Autosaves to Realtime Database after you stop typing.</p>
        </section>
      </div>

      <p v-else class="empty">No characters yet. Create one to begin.</p>
    </section>
    <section v-else class="empty">Loading profile…</section>
  </section>

  <section v-else class="empty">
    Missing UID. Set <code>localStorage.motw-uid</code> before using Profiles.
  </section>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue'
import { getDatabase, ref as dbRef, set, get, child, push, update, remove, onValue } from 'firebase/database'

// ——— Where to load systems/playbooks from ———
// Priority: localStorage override > Vite env > Firebase Realtime DB > built-in seed
const LOCAL_URL_KEY = 'motw-systems-url'
const REMOTE_SYSTEMS_URL = localStorage.getItem(LOCAL_URL_KEY) || (import.meta?.env?.VITE_SYSTEMS_URL || '')

// ——— Built-in seed fallback ———
const SYSTEMS = reactive({
  'monster-of-the-week': {
    key: 'monster-of-the-week', name: 'Monster of the Week',
    stats: ['Charm','Cool','Sharp','Tough','Weird'],
    playbooks: ['The Chosen','The Crooked','The Divine','The Expert','The Flake','The Initiate','The Monstrous','The Mundane','The Professional','The Spell-Slinger','The Spooky','The Wronged'],
    statBounds: { min: -2, max: 3 }
  },
  'urban-shadows': {
    key: 'urban-shadows', name: 'Urban Shadows (seed)',
    stats: ['Blood','Heart','Mind','Spirit'],
    playbooks: ['Aware','Hunter','Veteran','Vampire','Wolf','Spectre','Wizard','Oracle','Fae','Tainted'],
    statBounds: { min: -1, max: 3 }
  }
})

// Expected remote JSON shape:
// {
//   "monster-of-the-week": { name, stats: [...], playbooks: [...], statBounds: {min,max} },
//   "urban-shadows": { name, stats: [...], playbooks: [...], statBounds: {min,max} },
//   "<your-system>": { ... }
// }

// ——— Config ———
const uid = localStorage.getItem('motw-uid')
const db = getDatabase()
const path = uid ? `users/${uid}/characters` : null

// Optional Firebase systems path (global)
const systemsPath = 'config/systems' // you can change this to per-user if desired

// ——— State ———
const loading = ref(true)
const systemsLoading = ref(false)
const systemsSource = ref('seed')

const characters = reactive([])
const activeId = ref('')
const active = computed(() => characters.find(c => c.id === activeId.value) || null)

const isMotW = computed(() => draft.system === 'monster-of-the-week')
const isUS   = computed(() => draft.system === 'urban-shadows')
const currentPlaybooks = computed(() => (SYSTEMS[draft.system]?.playbooks) || [])
const statKeys = computed(() => (SYSTEMS[draft.system]?.stats) || [])
const statBounds = computed(() => (SYSTEMS[draft.system]?.statBounds) || { min: -2, max: 3 })

const DEFAULT_STATS = { Charm: 0, Cool: 0, Sharp: 0, Tough: 0, Weird: 0 }
const DEFAULT_US_STATS = { Blood: 0, Heart: 0, Mind: 0, Spirit: 0 }

const draft = reactive({
  id: '', system: 'monster-of-the-week',
  name: '', codename: '', playbook: '', look: '', background: '',
  stats: { ...DEFAULT_STATS }, harm: 0, luck: 0, corruption: 0, xp: 0,
  usFactions: 'Mortality, Night, Power, Wild', usDebts: '',
  moves: [], spells: [], inventory: []
})

function genId(prefix = 'id') { return `${prefix}_${Math.random().toString(36).slice(2,9)}` }
function displaySystem(key) { return SYSTEMS[key]?.name || 'Unknown' }

// ——— Load systems from remote or Firebase (with localStorage cache) ———
async function refreshSystems() {
  systemsLoading.value = true
  try {
    // 1) Try remote URL if provided
    if (REMOTE_SYSTEMS_URL) {
      const res = await fetch(REMOTE_SYSTEMS_URL, { cache: 'no-store' })
      if (res.ok) {
        const json = await res.json()
        mergeSystems(json)
        localStorage.setItem('motw-systems-cache', JSON.stringify({ t: Date.now(), data: json, src: REMOTE_SYSTEMS_URL }))
        systemsSource.value = REMOTE_SYSTEMS_URL
        systemsLoading.value = false
        ensureDraftConsistency()
        return
      }
    }
    // 2) Try Firebase Realtime DB at config/systems
    const snap = await get(dbRef(db, systemsPath))
    if (snap.exists()) {
      const data = snap.val()
      mergeSystems(data)
      localStorage.setItem('motw-systems-cache', JSON.stringify({ t: Date.now(), data, src: `rtdb://${systemsPath}` }))
      systemsSource.value = `rtdb://${systemsPath}`
      systemsLoading.value = false
      ensureDraftConsistency()
      return
    }
  } catch (e) {
    console.warn('refreshSystems error', e)
  }
  // 3) Fallback: seed stays, but set source label
  systemsSource.value = 'seed'
  systemsLoading.value = false
  ensureDraftConsistency()
}

function mergeSystems(remote) {
  // Replace or extend top-level systems by key, but keep unknown local keys
  for (const k of Object.keys(remote || {})) {
    SYSTEMS[k] = { ...(SYSTEMS[k] || {}), ...remote[k] }
  }
}

function tryLoadCachedSystems() {
  try {
    const cached = JSON.parse(localStorage.getItem('motw-systems-cache') || 'null')
    if (cached && cached.data && (Date.now() - cached.t) < 1000 * 60 * 60 * 24) { // < 24h
      mergeSystems(cached.data)
      systemsSource.value = cached.src || 'cache'
      return true
    }
  } catch {}
  return false
}

function ensureDraftConsistency() {
  // when systems list changes, make sure current selection still valid
  if (!SYSTEMS[draft.system]) draft.system = Object.keys(SYSTEMS)[0]
  if (!currentPlaybooks.value.includes(draft.playbook)) draft.playbook = ''
  // remap stats shape
  if (isMotW.value) {
    draft.stats = { ...DEFAULT_STATS, ...draft.stats }
  } else if (isUS.value) {
    draft.stats = { ...DEFAULT_US_STATS, ...draft.stats }
  }
}

// Load systems at start
if (!tryLoadCachedSystems()) {
  refreshSystems()
} else {
  // Cached; also kick a background refresh (non-blocking)
  refreshSystems()
}

// ——— Live characters subscription ———
if (path) {
  const listRef = dbRef(db, path)
  onValue(listRef, (snap) => {
    const data = snap.val() || {}
    const list = Object.keys(data).map(id => ({ id, ...data[id] }))
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
    characters.splice(0, characters.length, ...list)
    if (!activeId.value && list.length) activeId.value = list[0].id
    loading.value = false
  }, () => { loading.value = false })
} else {
  loading.value = false
}

// ——— Draft sync + autosave ———
function loadDraft() { if (active.value) Object.assign(draft, JSON.parse(JSON.stringify(active.value))) }
watch(active, () => { loadDraft(); ensureDraftConsistency() }, { immediate: true })

let t = null
watch(draft, () => {
  if (!draft.id || !path) return
  if (t) clearTimeout(t)
  t = setTimeout(() => saveCharacter(draft), 600)
}, { deep: true })

// ——— CRUD ———
function makeCharacter() {
  const now = Date.now()
  return {
    system: 'monster-of-the-week',
    name: '', codename: '', playbook: '', look: '', background: '',
    stats: { ...DEFAULT_STATS }, harm: 0, luck: 0, corruption: 0, xp: 0,
    usFactions: 'Mortality, Night, Power, Wild', usDebts: '',
    moves: [], spells: [], inventory: [],
    createdAt: now, updatedAt: now,
  }
}

async function addCharacter() {
  if (!path) return
  const payload = makeCharacter()
  const newRef = push(dbRef(db, path))
  await set(newRef, payload)
  activeId.value = newRef.key
}

async function duplicateCharacter() {
  if (!active.value || !path) return
  const copy = JSON.parse(JSON.stringify(active.value))
  delete copy.id
  copy.name = `${copy.name || 'Untitled'} (Copy)`
  copy.moves = (copy.moves || []).map(m => ({ ...m, id: genId('move') }))
  copy.spells = (copy.spells || []).map(s => ({ ...s, id: genId('spell') }))
  copy.inventory = (copy.inventory || []).map(i => ({ ...i, id: genId('item') }))
  copy.createdAt = Date.now(); copy.updatedAt = Date.now()
  const newRef = push(dbRef(db, path))
  await set(newRef, copy)
  activeId.value = newRef.key
}

async function deleteCharacter() {
  if (!active.value || !path) return
  await remove(dbRef(db, `${path}/${active.value.id}`))
  if (activeId.value === active.value.id) activeId.value = characters[0]?.id || ''
}

async function saveCharacter(c) {
  if (!path) return
  const { id, ...rest } = c
  await update(dbRef(db, `${path}/${id}`), { ...rest, updatedAt: Date.now() })
}

// ——— UI helpers ———
function removeAt(arr, i) { arr.splice(i, 1) }
function addMove() { draft.moves.push({ id: genId('move'), name: '', text: '' }) }
function addSpell() { draft.spells.push({ id: genId('spell'), name: '', rating: 0, cost: '', effect: '' }) }
function addItem() { draft.inventory.push({ id: genId('item'), name: '', qty: 1, tags: '', notes: '' }) }

function hardSave() { if (draft.id) saveCharacter(draft) }
function resetDraft() { loadDraft() }
</script>

<style scoped>
:root { --gold:#B9943D; --ink:#0b1220; --slate:#101826; --line:#23324a; --text:#ecf0f1; }
.profile { color: var(--text); }
.profile__header { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px; margin-bottom:16px; }
.header__title h1 { margin:0; font-size:1.4rem; }
.muted { opacity:.7; margin:2px 0 0; font-size:.9rem; }
.header__controls { display:flex; gap:8px; align-items:center; }
.profile__grid { display:grid; grid-template-columns: repeat(12, 1fr); gap:12px; }
.card { background: linear-gradient(180deg, var(--slate), #0a1320); border:1px solid var(--line); border-radius:12px; padding:12px; box-shadow: 0 4px 20px rgba(0,0,0,.25); }
.card h2 { margin:0 0 8px; font-size:1.1rem; color:var(--gold); }
.basics { grid-column: span 12; }
.stats { grid-column: span 12; }
.moves { grid-column: span 6; }
.spells { grid-column: span 6; }
.inventory { grid-column: span 8; }
.debts { grid-column: span 4; }
.utils { grid-column: span 4; }
@media (max-width: 900px) {
  .profile__grid { grid-template-columns: 1fr; }
  .basics, .stats, .moves, .spells, .inventory, .debts, .utils { grid-column: 1 / -1; }
}
.field-grid { display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:8px; }
.field-grid .col-span-2 { grid-column: span 2; }
.field-grid input, .field-grid textarea, .field-grid select { width:100%; }
.stats__grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(120px,1fr)); gap:8px; margin-bottom:8px; }
.stat label { display:block; font-size:.85rem; opacity:.9; }
.stat input { width:100%; text-align:center; }
.tracks { display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:10px; }
.track { display:flex; align-items:center; gap:8px; }
.track label { min-width:96px; }
.track span { opacity:.8; font-variant-numeric: tabular-nums; }
.list { display:flex; flex-direction:column; gap:8px; }
.list__row { position:relative; display:flex; flex-direction:column; gap:6px; padding:8px; border:1px dashed var(--line); border-radius:8px; }
.list__title { font-weight:600; }
.row { display:flex; gap:8px; }
.row > label { display:flex; flex-direction:column; gap:4px; flex:1; }
.list__notes { min-height:60px; }
.icon { position:absolute; top:8px; right:8px; border:none; background:transparent; cursor:pointer; font-size:1rem; }
.icon.danger { color:#e57373; }
.btn-row { display:flex; gap:8px; flex-wrap:wrap; }
.btn { appearance:none; border:1px solid var(--gold); background:transparent; color:var(--gold); padding:6px 10px; border-radius:8px; cursor:pointer; font-weight:600; }
.btn:disabled { opacity:.5; cursor:not-allowed; }
.btn--danger { border-color:#e57373; color:#e57373; }
.btn--ghost { border-color:var(--line); color:#9fb3c8; }
input, textarea, select { background:#0c1626; border:1px solid var(--line); color:#ecf0f1; border-radius:8px; padding:6px 8px; }
input:focus, textarea:focus, select:focus { outline:1px solid var(--gold); border-color:var(--gold); }
.empty { opacity:.7; padding:24px; text-align:center; }
.sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
</style>
