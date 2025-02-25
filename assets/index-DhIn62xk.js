(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qa(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const Ee={},ms=[],lt=()=>{},c_=()=>!1,Qr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ga=t=>t.startsWith("onUpdate:"),Ae=Object.assign,Ka=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},u_=Object.prototype.hasOwnProperty,te=(t,e)=>u_.call(t,e),$=Array.isArray,gs=t=>Di(t)==="[object Map]",Jr=t=>Di(t)==="[object Set]",pc=t=>Di(t)==="[object Date]",Y=t=>typeof t=="function",Pe=t=>typeof t=="string",Jt=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",kh=t=>(ve(t)||Y(t))&&Y(t.then)&&Y(t.catch),Ph=Object.prototype.toString,Di=t=>Ph.call(t),h_=t=>Di(t).slice(8,-1),Ah=t=>Di(t)==="[object Object]",za=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ei=qa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},d_=/-(\w)/g,Ot=Xr(t=>t.replace(d_,(e,n)=>n?n.toUpperCase():"")),f_=/\B([A-Z])/g,Ms=Xr(t=>t.replace(f_,"-$1").toLowerCase()),Zr=Xr(t=>t.charAt(0).toUpperCase()+t.slice(1)),No=Xr(t=>t?`on${Zr(t)}`:""),Rn=(t,e)=>!Object.is(t,e),ar=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Nh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},vr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},p_=t=>{const e=Pe(t)?Number(t):NaN;return isNaN(e)?t:e};let _c;const Oh=()=>_c||(_c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ya(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Pe(s)?y_(s):Ya(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Pe(t)||ve(t))return t}const __=/;(?![^(]*\))/g,m_=/:([^]+)/,g_=/\/\*[^]*?\*\//g;function y_(t){const e={};return t.replace(g_,"").split(__).forEach(n=>{if(n){const s=n.split(m_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Qa(t){let e="";if(Pe(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Qa(t[n]);s&&(e+=s+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const v_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",w_=qa(v_);function xh(t){return!!t||t===""}function C_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=eo(t[s],e[s]);return n}function eo(t,e){if(t===e)return!0;let n=pc(t),s=pc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Jt(t),s=Jt(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?C_(t,e):!1;if(n=ve(t),s=ve(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!eo(t[o],e[o]))return!1}}return String(t)===String(e)}function E_(t,e){return t.findIndex(n=>eo(n,e))}const ne=t=>Pe(t)?t:t==null?"":$(t)||ve(t)&&(t.toString===Ph||!Y(t.toString))?JSON.stringify(t,Dh,2):String(t),Dh=(t,e)=>e&&e.__v_isRef?Dh(t,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Oo(s,r)+" =>"]=i,n),{})}:Jr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Oo(n))}:Jt(e)?Oo(e):ve(e)&&!$(e)&&!Ah(e)?String(e):e,Oo=(t,e="")=>{var n;return Jt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pt;class b_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pt,!e&&pt&&(this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=pt;try{return pt=this,e()}finally{pt=n}}}on(){pt=this}off(){pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function I_(t,e=pt){e&&e.active&&e.effects.push(t)}function S_(){return pt}let Qn;class Ja{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,I_(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,On();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(T_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),xn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=wn,n=Qn;try{return wn=!0,Qn=this,this._runnings++,mc(this),this.fn()}finally{gc(this),this._runnings--,Qn=n,wn=e}}stop(){this.active&&(mc(this),gc(this),this.onStop&&this.onStop(),this.active=!1)}}function T_(t){return t.value}function mc(t){t._trackId++,t._depsLength=0}function gc(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Mh(t.deps[e],t);t.deps.length=t._depsLength}}function Mh(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let wn=!0,ia=0;const Lh=[];function On(){Lh.push(wn),wn=!1}function xn(){const t=Lh.pop();wn=t===void 0?!0:t}function Xa(){ia++}function Za(){for(ia--;!ia&&ra.length;)ra.shift()()}function Fh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Mh(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ra=[];function Uh(t,e,n){Xa();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&ra.push(s.scheduler)))}Za()}const Wh=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},oa=new WeakMap,Jn=Symbol(""),aa=Symbol("");function st(t,e,n){if(wn&&Qn){let s=oa.get(t);s||oa.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Wh(()=>s.delete(n))),Fh(Qn,i)}}function Kt(t,e,n,s,i,r){const o=oa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Jt(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?za(n)&&a.push(o.get("length")):(a.push(o.get(Jn)),gs(t)&&a.push(o.get(aa)));break;case"delete":$(t)||(a.push(o.get(Jn)),gs(t)&&a.push(o.get(aa)));break;case"set":gs(t)&&a.push(o.get(Jn));break}Xa();for(const l of a)l&&Uh(l,4);Za()}const R_=qa("__proto__,__v_isRef,__isVue"),Vh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jt)),yc=k_();function k_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let r=0,o=this.length;r<o;r++)st(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){On(),Xa();const s=re(this)[e].apply(this,n);return Za(),xn(),s}}),t}function P_(t){Jt(t)||(t=String(t));const e=re(this);return st(e,"has",t),e.hasOwnProperty(t)}class $h{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?B_:qh:r?jh:Hh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=$(e);if(!i){if(o&&te(yc,n))return Reflect.get(yc,n,s);if(n==="hasOwnProperty")return P_}const a=Reflect.get(e,n,s);return(Jt(n)?Vh.has(n):R_(n))||(i||st(e,"get",n),r)?a:it(a)?o&&za(n)?a:a.value:ve(a)?i?Kh(a):Mi(a):a}}class Bh extends $h{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=fi(r);if(!wr(s)&&!fi(s)&&(r=re(r),s=re(s)),!$(e)&&it(r)&&!it(s))return l?!1:(r.value=s,!0)}const o=$(e)&&za(n)?Number(n)<e.length:te(e,n),a=Reflect.set(e,n,s,i);return e===re(i)&&(o?Rn(s,r)&&Kt(e,"set",n,s):Kt(e,"add",n,s)),a}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Kt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Jt(n)||!Vh.has(n))&&st(e,"has",n),s}ownKeys(e){return st(e,"iterate",$(e)?"length":Jn),Reflect.ownKeys(e)}}class A_ extends $h{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const N_=new Bh,O_=new A_,x_=new Bh(!0);const el=t=>t,to=t=>Reflect.getPrototypeOf(t);function Ji(t,e,n=!1,s=!1){t=t.__v_raw;const i=re(t),r=re(e);n||(Rn(e,r)&&st(i,"get",e),st(i,"get",r));const{has:o}=to(i),a=s?el:n?sl:pi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Xi(t,e=!1){const n=this.__v_raw,s=re(n),i=re(t);return e||(Rn(t,i)&&st(s,"has",t),st(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Zi(t,e=!1){return t=t.__v_raw,!e&&st(re(t),"iterate",Jn),Reflect.get(t,"size",t)}function vc(t){t=re(t);const e=re(this);return to(e).has.call(e,t)||(e.add(t),Kt(e,"add",t,t)),this}function wc(t,e){e=re(e);const n=re(this),{has:s,get:i}=to(n);let r=s.call(n,t);r||(t=re(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Rn(e,o)&&Kt(n,"set",t,e):Kt(n,"add",t,e),this}function Cc(t){const e=re(this),{has:n,get:s}=to(e);let i=n.call(e,t);i||(t=re(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Kt(e,"delete",t,void 0),r}function Ec(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Kt(t,"clear",void 0,void 0),n}function er(t,e){return function(s,i){const r=this,o=r.__v_raw,a=re(o),l=e?el:t?sl:pi;return!t&&st(a,"iterate",Jn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function tr(t,e,n){return function(...s){const i=this.__v_raw,r=re(i),o=gs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?el:e?sl:pi;return!e&&st(r,"iterate",l?aa:Jn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function rn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function D_(){const t={get(r){return Ji(this,r)},get size(){return Zi(this)},has:Xi,add:vc,set:wc,delete:Cc,clear:Ec,forEach:er(!1,!1)},e={get(r){return Ji(this,r,!1,!0)},get size(){return Zi(this)},has:Xi,add:vc,set:wc,delete:Cc,clear:Ec,forEach:er(!1,!0)},n={get(r){return Ji(this,r,!0)},get size(){return Zi(this,!0)},has(r){return Xi.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:er(!0,!1)},s={get(r){return Ji(this,r,!0,!0)},get size(){return Zi(this,!0)},has(r){return Xi.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=tr(r,!1,!1),n[r]=tr(r,!0,!1),e[r]=tr(r,!1,!0),s[r]=tr(r,!0,!0)}),[t,n,e,s]}const[M_,L_,F_,U_]=D_();function tl(t,e){const n=e?t?U_:F_:t?L_:M_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const W_={get:tl(!1,!1)},V_={get:tl(!1,!0)},$_={get:tl(!0,!1)};const Hh=new WeakMap,jh=new WeakMap,qh=new WeakMap,B_=new WeakMap;function H_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function j_(t){return t.__v_skip||!Object.isExtensible(t)?0:H_(h_(t))}function Mi(t){return fi(t)?t:nl(t,!1,N_,W_,Hh)}function Gh(t){return nl(t,!1,x_,V_,jh)}function Kh(t){return nl(t,!0,O_,$_,qh)}function nl(t,e,n,s,i){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=j_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ti(t){return fi(t)?ti(t.__v_raw):!!(t&&t.__v_isReactive)}function fi(t){return!!(t&&t.__v_isReadonly)}function wr(t){return!!(t&&t.__v_isShallow)}function zh(t){return t?!!t.__v_raw:!1}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function q_(t){return Object.isExtensible(t)&&Nh(t,"__v_skip",!0),t}const pi=t=>ve(t)?Mi(t):t,sl=t=>ve(t)?Kh(t):t;class Yh{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ja(()=>e(this._value),()=>lr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=re(this);return(!e._cacheable||e.effect.dirty)&&Rn(e._value,e._value=e.effect.run())&&lr(e,4),Qh(e),e.effect._dirtyLevel>=2&&lr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function G_(t,e,n=!1){let s,i;const r=Y(t);return r?(s=t,i=lt):(s=t.get,i=t.set),new Yh(s,i,r||!i,n)}function Qh(t){var e;wn&&Qn&&(t=re(t),Fh(Qn,(e=t.dep)!=null?e:t.dep=Wh(()=>t.dep=void 0,t instanceof Yh?t:void 0)))}function lr(t,e=4,n){t=re(t);const s=t.dep;s&&Uh(s,e)}function it(t){return!!(t&&t.__v_isRef===!0)}function K_(t){return Jh(t,!1)}function z_(t){return Jh(t,!0)}function Jh(t,e){return it(t)?t:new Y_(t,e)}class Y_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:pi(e)}get value(){return Qh(this),this._value}set value(e){const n=this.__v_isShallow||wr(e)||fi(e);e=n?e:re(e),Rn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pi(e),lr(this,4))}}function ys(t){return it(t)?t.value:t}const Q_={get:(t,e,n)=>ys(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return it(i)&&!it(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Xh(t){return ti(t)?t:new Proxy(t,Q_)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cn(t,e,n,s){try{return s?t(...s):t()}catch(i){no(i,e,n)}}function ht(t,e,n,s){if(Y(t)){const i=Cn(t,e,n,s);return i&&kh(i)&&i.catch(r=>{no(r,e,n)}),i}if($(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ht(t[r],e,n,s));return i}}function no(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){On(),Cn(l,null,10,[t,o,a]),xn();return}}J_(t,n,i,s)}function J_(t,e,n,s=!0){console.error(t)}let _i=!1,la=!1;const Ge=[];let kt=0;const vs=[];let un=null,jn=0;const Zh=Promise.resolve();let il=null;function rl(t){const e=il||Zh;return t?e.then(this?t.bind(this):t):e}function X_(t){let e=kt+1,n=Ge.length;for(;e<n;){const s=e+n>>>1,i=Ge[s],r=mi(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function ol(t){(!Ge.length||!Ge.includes(t,_i&&t.allowRecurse?kt+1:kt))&&(t.id==null?Ge.push(t):Ge.splice(X_(t.id),0,t),ed())}function ed(){!_i&&!la&&(la=!0,il=Zh.then(nd))}function Z_(t){const e=Ge.indexOf(t);e>kt&&Ge.splice(e,1)}function em(t){$(t)?vs.push(...t):(!un||!un.includes(t,t.allowRecurse?jn+1:jn))&&vs.push(t),ed()}function bc(t,e,n=_i?kt+1:0){for(;n<Ge.length;n++){const s=Ge[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ge.splice(n,1),n--,s()}}}function td(t){if(vs.length){const e=[...new Set(vs)].sort((n,s)=>mi(n)-mi(s));if(vs.length=0,un){un.push(...e);return}for(un=e,jn=0;jn<un.length;jn++)un[jn]();un=null,jn=0}}const mi=t=>t.id==null?1/0:t.id,tm=(t,e)=>{const n=mi(t)-mi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nd(t){la=!1,_i=!0,Ge.sort(tm);try{for(kt=0;kt<Ge.length;kt++){const e=Ge[kt];e&&e.active!==!1&&Cn(e,null,14)}}finally{kt=0,Ge.length=0,td(),_i=!1,il=null,(Ge.length||vs.length)&&nd()}}function nm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ee;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ee;d&&(i=n.map(_=>Pe(_)?_.trim():_)),h&&(i=n.map(vr))}let a,l=s[a=No(e)]||s[a=No(Ot(e))];!l&&r&&(l=s[a=No(Ms(e))]),l&&ht(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ht(c,t,6,i)}}function sd(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=sd(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ve(t)&&s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):Ae(o,r),ve(t)&&s.set(t,o),o)}function so(t,e){return!t||!Qr(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,Ms(e))||te(t,e))}let Je=null,io=null;function Cr(t){const e=Je;return Je=t,io=t&&t.type.__scopeId||null,e}function Dt(t){io=t}function Mt(){io=null}function Qe(t,e=Je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Mc(-1);const r=Cr(e);let o;try{o=t(...i)}finally{Cr(r),s._d&&Mc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:y,inheritAttrs:b}=t,x=Cr(t);let A,D;try{if(n.shapeFlag&4){const z=i||s,ee=z;A=Rt(c.call(ee,z,u,h,_,d,y)),D=a}else{const z=e;A=Rt(z.length>1?z(h,{attrs:a,slots:o,emit:l}):z(h,null)),D=e.props?a:sm(a)}}catch(z){ii.length=0,no(z,t,1),A=ie(ct)}let W=A;if(D&&b!==!1){const z=Object.keys(D),{shapeFlag:ee}=W;z.length&&ee&7&&(r&&z.some(Ga)&&(D=im(D,r)),W=kn(W,D,!1,!0))}return n.dirs&&(W=kn(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),A=W,Cr(x),A}const sm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qr(n))&&((e||(e={}))[n]=t[n]);return e},im=(t,e)=>{const n={};for(const s in t)(!Ga(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rm(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ic(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!so(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ic(s,o,c):!0:!!o;return!1}function Ic(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!so(n,r))return!0}return!1}function om({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const al="components";function gt(t,e){return rd(al,t,!0,e)||t}const id=Symbol.for("v-ndc");function am(t){return Pe(t)?rd(al,t,!1)||t:t||id}function rd(t,e,n=!0,s=!1){const i=Je||Ve;if(i){const r=i.type;if(t===al){const a=ng(r,!1);if(a&&(a===e||a===Ot(e)||a===Zr(Ot(e))))return r}const o=Sc(i[t]||r[t],e)||Sc(i.appContext[t],e);return!o&&s?r:o}}function Sc(t,e){return t&&(t[e]||t[Ot(e)]||t[Zr(Ot(e))])}const lm=t=>t.__isSuspense;function cm(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):em(t)}const um=Symbol.for("v-scx"),hm=()=>zt(um),nr={};function cr(t,e,n){return od(t,e,n)}function od(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=Ee){if(e&&r){const H=e;e=(...be)=>{H(...be),ee()}}const l=Ve,c=H=>s===!0?H:zn(H,s===!1?1:void 0);let u,h=!1,d=!1;if(it(t)?(u=()=>t.value,h=wr(t)):ti(t)?(u=()=>c(t),h=!0):$(t)?(d=!0,h=t.some(H=>ti(H)||wr(H)),u=()=>t.map(H=>{if(it(H))return H.value;if(ti(H))return c(H);if(Y(H))return Cn(H,l,2)})):Y(t)?e?u=()=>Cn(t,l,2):u=()=>(_&&_(),ht(t,l,3,[y])):u=lt,e&&s){const H=u;u=()=>zn(H())}let _,y=H=>{_=W.onStop=()=>{Cn(H,l,4),_=W.onStop=void 0}},b;if(lo)if(y=lt,e?n&&ht(e,l,3,[u(),d?[]:void 0,y]):u(),i==="sync"){const H=hm();b=H.__watcherHandles||(H.__watcherHandles=[])}else return lt;let x=d?new Array(t.length).fill(nr):nr;const A=()=>{if(!(!W.active||!W.dirty))if(e){const H=W.run();(s||h||(d?H.some((be,G)=>Rn(be,x[G])):Rn(H,x)))&&(_&&_(),ht(e,l,3,[H,x===nr?void 0:d&&x[0]===nr?[]:x,y]),x=H)}else W.run()};A.allowRecurse=!!e;let D;i==="sync"?D=A:i==="post"?D=()=>tt(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),D=()=>ol(A));const W=new Ja(u,lt,D),z=S_(),ee=()=>{W.stop(),z&&Ka(z.effects,W)};return e?n?A():x=W.run():i==="post"?tt(W.run.bind(W),l&&l.suspense):W.run(),b&&b.push(ee),ee}function dm(t,e,n){const s=this.proxy,i=Pe(t)?t.includes(".")?ad(s,t):()=>s[t]:t.bind(s,s);let r;Y(e)?r=e:(r=e.handler,n=e);const o=Li(this),a=od(i,r.bind(s),n);return o(),a}function ad(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function zn(t,e=1/0,n){if(e<=0||!ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,it(t))zn(t.value,e,n);else if($(t))for(let s=0;s<t.length;s++)zn(t[s],e,n);else if(Jr(t)||gs(t))t.forEach(s=>{zn(s,e,n)});else if(Ah(t))for(const s in t)zn(t[s],e,n);return t}function ce(t,e){if(Je===null)return t;const n=co(Je)||Je.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=Ee]=e[i];r&&(Y(r)&&(r={mounted:r,updated:r}),r.deep&&zn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Un(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(On(),ht(l,n,8,[t.el,a,t,e]),xn())}}const hn=Symbol("_leaveCb"),sr=Symbol("_enterCb");function fm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fd(()=>{t.isMounted=!0}),pd(()=>{t.isUnmounting=!0}),t}const at=[Function,Array],ld={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:at,onEnter:at,onAfterEnter:at,onEnterCancelled:at,onBeforeLeave:at,onLeave:at,onAfterLeave:at,onLeaveCancelled:at,onBeforeAppear:at,onAppear:at,onAfterAppear:at,onAppearCancelled:at},pm={name:"BaseTransition",props:ld,setup(t,{slots:e}){const n=Jm(),s=fm();return()=>{const i=e.default&&ud(e.default(),!0);if(!i||!i.length)return;let r=i[0];if(i.length>1){for(const d of i)if(d.type!==ct){r=d;break}}const o=re(t),{mode:a}=o;if(s.isLeaving)return Do(r);const l=Tc(r);if(!l)return Do(r);const c=ca(l,o,s,n);ua(l,c);const u=n.subTree,h=u&&Tc(u);if(h&&h.type!==ct&&!qn(l,h)){const d=ca(h,o,s,n);if(ua(h,d),a==="out-in"&&l.type!==ct)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Do(r);a==="in-out"&&l.type!==ct&&(d.delayLeave=(_,y,b)=>{const x=cd(s,h);x[String(h.key)]=h,_[hn]=()=>{y(),_[hn]=void 0,delete c.delayedLeave},c.delayedLeave=b})}return r}}},_m=pm;function cd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ca(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:y,onBeforeAppear:b,onAppear:x,onAfterAppear:A,onAppearCancelled:D}=e,W=String(t.key),z=cd(n,t),ee=(G,oe)=>{G&&ht(G,s,9,oe)},H=(G,oe)=>{const ae=oe[1];ee(G,oe),$(G)?G.every(Ne=>Ne.length<=1)&&ae():G.length<=1&&ae()},be={mode:r,persisted:o,beforeEnter(G){let oe=a;if(!n.isMounted)if(i)oe=b||a;else return;G[hn]&&G[hn](!0);const ae=z[W];ae&&qn(t,ae)&&ae.el[hn]&&ae.el[hn](),ee(oe,[G])},enter(G){let oe=l,ae=c,Ne=u;if(!n.isMounted)if(i)oe=x||l,ae=A||c,Ne=D||u;else return;let F=!1;const ue=G[sr]=ze=>{F||(F=!0,ze?ee(Ne,[G]):ee(ae,[G]),be.delayedLeave&&be.delayedLeave(),G[sr]=void 0)};oe?H(oe,[G,ue]):ue()},leave(G,oe){const ae=String(t.key);if(G[sr]&&G[sr](!0),n.isUnmounting)return oe();ee(h,[G]);let Ne=!1;const F=G[hn]=ue=>{Ne||(Ne=!0,oe(),ue?ee(y,[G]):ee(_,[G]),G[hn]=void 0,z[ae]===t&&delete z[ae])};z[ae]=t,d?H(d,[G,F]):F()},clone(G){return ca(G,e,n,s)}};return be}function Do(t){if(ro(t))return t=kn(t),t.children=null,t}function Tc(t){if(!ro(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Y(n.default))return n.default()}}function ua(t,e){t.shapeFlag&6&&t.component?ua(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ud(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Oe?(o.patchFlag&128&&i++,s=s.concat(ud(o.children,e,a))):(e||o.type!==ct)&&s.push(a!=null?kn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function hd(t,e){return Y(t)?Ae({name:t.name},e,{setup:t}):t}const ur=t=>!!t.type.__asyncLoader,ro=t=>t.type.__isKeepAlive;function mm(t,e){dd(t,"a",e)}function gm(t,e){dd(t,"da",e)}function dd(t,e,n=Ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(oo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ro(i.parent.vnode)&&ym(s,e,n,i),i=i.parent}}function ym(t,e,n,s){const i=oo(e,t,s,!0);_d(()=>{Ka(s[e],i)},n)}function oo(t,e,n=Ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;On();const a=Li(n),l=ht(e,n,t,o);return a(),xn(),l});return s?i.unshift(r):i.push(r),r}}const en=t=>(e,n=Ve)=>(!lo||t==="sp")&&oo(t,(...s)=>e(...s),n),vm=en("bm"),fd=en("m"),wm=en("bu"),Cm=en("u"),pd=en("bum"),_d=en("um"),Em=en("sp"),bm=en("rtg"),Im=en("rtc");function Sm(t,e=Ve){oo("ec",t,e)}function Bt(t,e,n,s){let i;const r=n;if($(t)||Pe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(ve(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r)}}else i=[];return i}const ha=t=>t?Ad(t)?co(t)||t.proxy:ha(t.parent):null,ni=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ha(t.parent),$root:t=>ha(t.root),$emit:t=>t.emit,$options:t=>ll(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ol(t.update)}),$nextTick:t=>t.n||(t.n=rl.bind(t.proxy)),$watch:t=>dm.bind(t)}),Mo=(t,e)=>t!==Ee&&!t.__isScriptSetup&&te(t,e),Tm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Mo(s,e))return o[e]=1,s[e];if(i!==Ee&&te(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&te(c,e))return o[e]=3,r[e];if(n!==Ee&&te(n,e))return o[e]=4,n[e];da&&(o[e]=0)}}const u=ni[e];let h,d;if(u)return e==="$attrs"&&st(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ee&&te(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,te(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Mo(i,e)?(i[e]=n,!0):s!==Ee&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ee&&te(t,o)||Mo(e,o)||(a=r[0])&&te(a,o)||te(s,o)||te(ni,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rc(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let da=!0;function Rm(t){const e=ll(t),n=t.proxy,s=t.ctx;da=!1,e.beforeCreate&&kc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:y,activated:b,deactivated:x,beforeDestroy:A,beforeUnmount:D,destroyed:W,unmounted:z,render:ee,renderTracked:H,renderTriggered:be,errorCaptured:G,serverPrefetch:oe,expose:ae,inheritAttrs:Ne,components:F,directives:ue,filters:ze}=e;if(c&&km(c,s,null),o)for(const _e in o){const le=o[_e];Y(le)&&(s[_e]=le.bind(n))}if(i){const _e=i.call(n,n);ve(_e)&&(t.data=Mi(_e))}if(da=!0,r)for(const _e in r){const le=r[_e],Vt=Y(le)?le.bind(n,n):Y(le.get)?le.get.bind(n,n):lt,sn=!Y(le)&&Y(le.set)?le.set.bind(n):lt,It=_t({get:Vt,set:sn});Object.defineProperty(s,_e,{enumerable:!0,configurable:!0,get:()=>It.value,set:et=>It.value=et})}if(a)for(const _e in a)md(a[_e],s,n,_e);if(l){const _e=Y(l)?l.call(n):l;Reflect.ownKeys(_e).forEach(le=>{hr(le,_e[le])})}u&&kc(u,t,"c");function ke(_e,le){$(le)?le.forEach(Vt=>_e(Vt.bind(n))):le&&_e(le.bind(n))}if(ke(vm,h),ke(fd,d),ke(wm,_),ke(Cm,y),ke(mm,b),ke(gm,x),ke(Sm,G),ke(Im,H),ke(bm,be),ke(pd,D),ke(_d,z),ke(Em,oe),$(ae))if(ae.length){const _e=t.exposed||(t.exposed={});ae.forEach(le=>{Object.defineProperty(_e,le,{get:()=>n[le],set:Vt=>n[le]=Vt})})}else t.exposed||(t.exposed={});ee&&t.render===lt&&(t.render=ee),Ne!=null&&(t.inheritAttrs=Ne),F&&(t.components=F),ue&&(t.directives=ue)}function km(t,e,n=lt){$(t)&&(t=fa(t));for(const s in t){const i=t[s];let r;ve(i)?"default"in i?r=zt(i.from||s,i.default,!0):r=zt(i.from||s):r=zt(i),it(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function kc(t,e,n){ht($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function md(t,e,n,s){const i=s.includes(".")?ad(n,s):()=>n[s];if(Pe(t)){const r=e[t];Y(r)&&cr(i,r)}else if(Y(t))cr(i,t.bind(n));else if(ve(t))if($(t))t.forEach(r=>md(r,e,n,s));else{const r=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(r)&&cr(i,r,t)}}function ll(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Er(l,c,o,!0)),Er(l,e,o)),ve(e)&&r.set(e,l),l}function Er(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Er(t,r,n,!0),i&&i.forEach(o=>Er(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Pm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Pm={data:Pc,props:Ac,emits:Ac,methods:Js,computed:Js,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Js,directives:Js,watch:Nm,provide:Pc,inject:Am};function Pc(t,e){return e?t?function(){return Ae(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Am(t,e){return Js(fa(t),fa(e))}function fa(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?Ae(Object.create(null),t,e):e}function Ac(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:Ae(Object.create(null),Rc(t),Rc(e??{})):e}function Nm(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const s in e)n[s]=Ye(t[s],e[s]);return n}function gd(){return{app:null,config:{isNativeTag:c_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Om=0;function xm(t,e){return function(s,i=null){Y(s)||(s=Ae({},s)),i!=null&&!ve(i)&&(i=null);const r=gd(),o=new WeakSet;let a=!1;const l=r.app={_uid:Om++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ig,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=ie(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,co(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=si;si=l;try{return c()}finally{si=u}}};return l}}let si=null;function hr(t,e){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[t]=e}}function zt(t,e,n=!1){const s=Ve||Je;if(s||si){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:si._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}const yd={},vd=()=>Object.create(yd),wd=t=>Object.getPrototypeOf(t)===yd;function Dm(t,e,n,s=!1){const i={},r=vd();t.propsDefaults=Object.create(null),Cd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Gh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Mm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=re(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(so(t.emitsOptions,d))continue;const _=e[d];if(l)if(te(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const y=Ot(d);i[y]=pa(l,a,y,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Cd(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!te(e,h)&&((u=Ms(h))===h||!te(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=pa(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!te(e,h))&&(delete r[h],c=!0)}c&&Kt(t.attrs,"set","")}function Cd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ei(l))continue;const c=e[l];let u;i&&te(i,u=Ot(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:so(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=re(n),c=a||Ee;for(let u=0;u<r.length;u++){const h=r[u];n[h]=pa(i,l,h,c[h],t,!te(c,h))}}return o}function pa(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Li(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ms(n))&&(s=!0))}return s}function Ed(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=h=>{l=!0;const[d,_]=Ed(h,e,!0);Ae(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ve(t)&&s.set(t,ms),ms;if($(r))for(let u=0;u<r.length;u++){const h=Ot(r[u]);Nc(h)&&(o[h]=Ee)}else if(r)for(const u in r){const h=Ot(u);if(Nc(h)){const d=r[u],_=o[h]=$(d)||Y(d)?{type:d}:Ae({},d);if(_){const y=Dc(Boolean,_.type),b=Dc(String,_.type);_[0]=y>-1,_[1]=b<0||y<b,(y>-1||te(_,"default"))&&a.push(h)}}}const c=[o,a];return ve(t)&&s.set(t,c),c}function Nc(t){return t[0]!=="$"&&!ei(t)}function Oc(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function xc(t,e){return Oc(t)===Oc(e)}function Dc(t,e){return $(e)?e.findIndex(n=>xc(n,t)):Y(e)&&xc(e,t)?0:-1}const bd=t=>t[0]==="_"||t==="$stable",cl=t=>$(t)?t.map(Rt):[Rt(t)],Lm=(t,e,n)=>{if(e._n)return e;const s=Qe((...i)=>cl(e(...i)),n);return s._c=!1,s},Id=(t,e,n)=>{const s=t._ctx;for(const i in t){if(bd(i))continue;const r=t[i];if(Y(r))e[i]=Lm(i,r,s);else if(r!=null){const o=cl(r);e[i]=()=>o}}},Sd=(t,e)=>{const n=cl(e);t.slots.default=()=>n},Fm=(t,e)=>{const n=t.slots=vd();if(t.vnode.shapeFlag&32){const s=e._;s?(Ae(n,e),Nh(n,"_",s,!0)):Id(e,n)}else e&&Sd(t,e)},Um=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ee;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ae(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Id(e,i)),o=e}else e&&(Sd(t,e),o={default:1});if(r)for(const a in i)!bd(a)&&o[a]==null&&delete i[a]};function _a(t,e,n,s,i=!1){if($(t)){t.forEach((d,_)=>_a(d,e&&($(e)?e[_]:e),n,s,i));return}if(ur(s)&&!i)return;const r=s.shapeFlag&4?co(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Pe(c)?(u[c]=null,te(h,c)&&(h[c]=null)):it(c)&&(c.value=null)),Y(l))Cn(l,a,12,[o,u]);else{const d=Pe(l),_=it(l);if(d||_){const y=()=>{if(t.f){const b=d?te(h,l)?h[l]:u[l]:l.value;i?$(b)&&Ka(b,r):$(b)?b.includes(r)||b.push(r):d?(u[l]=[r],te(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,te(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,tt(y,n)):y()}}}const tt=cm;function Wm(t){return Vm(t)}function Vm(t,e){const n=Oh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=lt,insertStaticContent:y}=t,b=(f,p,g,C=null,v=null,T=null,P=void 0,S=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!qn(f,p)&&(C=w(f),et(f,v,T,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:E,ref:O,shapeFlag:B}=p;switch(E){case ao:x(f,p,g,C);break;case ct:A(f,p,g,C);break;case Fo:f==null&&D(p,g,C,P);break;case Oe:F(f,p,g,C,v,T,P,S,R);break;default:B&1?ee(f,p,g,C,v,T,P,S,R):B&6?ue(f,p,g,C,v,T,P,S,R):(B&64||B&128)&&E.process(f,p,g,C,v,T,P,S,R,U)}O!=null&&v&&_a(O,f&&f.ref,T,p||f,!p)},x=(f,p,g,C)=>{if(f==null)s(p.el=a(p.children),g,C);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},A=(f,p,g,C)=>{f==null?s(p.el=l(p.children||""),g,C):p.el=f.el},D=(f,p,g,C)=>{[f.el,f.anchor]=y(f.children,p,g,C,f.el,f.anchor)},W=({el:f,anchor:p},g,C)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,C),f=v;s(p,g,C)},z=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},ee=(f,p,g,C,v,T,P,S,R)=>{p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),f==null?H(p,g,C,v,T,P,S,R):oe(f,p,v,T,P,S,R)},H=(f,p,g,C,v,T,P,S)=>{let R,E;const{props:O,shapeFlag:B,transition:V,dirs:K}=f;if(R=f.el=o(f.type,T,O&&O.is,O),B&8?u(R,f.children):B&16&&G(f.children,R,null,C,v,Lo(f,T),P,S),K&&Un(f,null,C,"created"),be(R,f,f.scopeId,P,C),O){for(const me in O)me!=="value"&&!ei(me)&&r(R,me,null,O[me],T,f.children,C,v,je);"value"in O&&r(R,"value",null,O.value,T),(E=O.onVnodeBeforeMount)&&Tt(E,C,f)}K&&Un(f,null,C,"beforeMount");const Z=$m(v,V);Z&&V.beforeEnter(R),s(R,p,g),((E=O&&O.onVnodeMounted)||Z||K)&&tt(()=>{E&&Tt(E,C,f),Z&&V.enter(R),K&&Un(f,null,C,"mounted")},v)},be=(f,p,g,C,v)=>{if(g&&_(f,g),C)for(let T=0;T<C.length;T++)_(f,C[T]);if(v){let T=v.subTree;if(p===T){const P=v.vnode;be(f,P,P.scopeId,P.slotScopeIds,v.parent)}}},G=(f,p,g,C,v,T,P,S,R=0)=>{for(let E=R;E<f.length;E++){const O=f[E]=S?dn(f[E]):Rt(f[E]);b(null,O,p,g,C,v,T,P,S)}},oe=(f,p,g,C,v,T,P)=>{const S=p.el=f.el;let{patchFlag:R,dynamicChildren:E,dirs:O}=p;R|=f.patchFlag&16;const B=f.props||Ee,V=p.props||Ee;let K;if(g&&Wn(g,!1),(K=V.onVnodeBeforeUpdate)&&Tt(K,g,p,f),O&&Un(p,f,g,"beforeUpdate"),g&&Wn(g,!0),E?ae(f.dynamicChildren,E,S,g,C,Lo(p,v),T):P||le(f,p,S,null,g,C,Lo(p,v),T,!1),R>0){if(R&16)Ne(S,p,B,V,g,C,v);else if(R&2&&B.class!==V.class&&r(S,"class",null,V.class,v),R&4&&r(S,"style",B.style,V.style,v),R&8){const Z=p.dynamicProps;for(let me=0;me<Z.length;me++){const Ie=Z[me],Le=B[Ie],ft=V[Ie];(ft!==Le||Ie==="value")&&r(S,Ie,Le,ft,v,f.children,g,C,je)}}R&1&&f.children!==p.children&&u(S,p.children)}else!P&&E==null&&Ne(S,p,B,V,g,C,v);((K=V.onVnodeUpdated)||O)&&tt(()=>{K&&Tt(K,g,p,f),O&&Un(p,f,g,"updated")},C)},ae=(f,p,g,C,v,T,P)=>{for(let S=0;S<p.length;S++){const R=f[S],E=p[S],O=R.el&&(R.type===Oe||!qn(R,E)||R.shapeFlag&70)?h(R.el):g;b(R,E,O,null,C,v,T,P,!0)}},Ne=(f,p,g,C,v,T,P)=>{if(g!==C){if(g!==Ee)for(const S in g)!ei(S)&&!(S in C)&&r(f,S,g[S],null,P,p.children,v,T,je);for(const S in C){if(ei(S))continue;const R=C[S],E=g[S];R!==E&&S!=="value"&&r(f,S,E,R,P,p.children,v,T,je)}"value"in C&&r(f,"value",g.value,C.value,P)}},F=(f,p,g,C,v,T,P,S,R)=>{const E=p.el=f?f.el:a(""),O=p.anchor=f?f.anchor:a("");let{patchFlag:B,dynamicChildren:V,slotScopeIds:K}=p;K&&(S=S?S.concat(K):K),f==null?(s(E,g,C),s(O,g,C),G(p.children||[],g,O,v,T,P,S,R)):B>0&&B&64&&V&&f.dynamicChildren?(ae(f.dynamicChildren,V,g,v,T,P,S),(p.key!=null||v&&p===v.subTree)&&Td(f,p,!0)):le(f,p,g,O,v,T,P,S,R)},ue=(f,p,g,C,v,T,P,S,R)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?v.ctx.activate(p,g,C,P,R):ze(p,g,C,v,T,P,R):Wt(f,p,R)},ze=(f,p,g,C,v,T,P)=>{const S=f.component=Qm(f,C,v);if(ro(f)&&(S.ctx.renderer=U),Xm(S),S.asyncDep){if(v&&v.registerDep(S,ke),!f.el){const R=S.subTree=ie(ct);A(null,R,p,g)}}else ke(S,f,p,g,v,T,P)},Wt=(f,p,g)=>{const C=p.component=f.component;if(rm(f,p,g))if(C.asyncDep&&!C.asyncResolved){_e(C,p,g);return}else C.next=p,Z_(C.update),C.effect.dirty=!0,C.update();else p.el=f.el,C.vnode=p},ke=(f,p,g,C,v,T,P)=>{const S=()=>{if(f.isMounted){let{next:O,bu:B,u:V,parent:K,vnode:Z}=f;{const hs=Rd(f);if(hs){O&&(O.el=Z.el,_e(f,O,P)),hs.asyncDep.then(()=>{f.isUnmounted||S()});return}}let me=O,Ie;Wn(f,!1),O?(O.el=Z.el,_e(f,O,P)):O=Z,B&&ar(B),(Ie=O.props&&O.props.onVnodeBeforeUpdate)&&Tt(Ie,K,O,Z),Wn(f,!0);const Le=xo(f),ft=f.subTree;f.subTree=Le,b(ft,Le,h(ft.el),w(ft),f,v,T),O.el=Le.el,me===null&&om(f,Le.el),V&&tt(V,v),(Ie=O.props&&O.props.onVnodeUpdated)&&tt(()=>Tt(Ie,K,O,Z),v)}else{let O;const{el:B,props:V}=p,{bm:K,m:Z,parent:me}=f,Ie=ur(p);if(Wn(f,!1),K&&ar(K),!Ie&&(O=V&&V.onVnodeBeforeMount)&&Tt(O,me,p),Wn(f,!0),B&&Se){const Le=()=>{f.subTree=xo(f),Se(B,f.subTree,f,v,null)};Ie?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Le()):Le()}else{const Le=f.subTree=xo(f);b(null,Le,g,C,f,v,T),p.el=Le.el}if(Z&&tt(Z,v),!Ie&&(O=V&&V.onVnodeMounted)){const Le=p;tt(()=>Tt(O,me,Le),v)}(p.shapeFlag&256||me&&ur(me.vnode)&&me.vnode.shapeFlag&256)&&f.a&&tt(f.a,v),f.isMounted=!0,p=g=C=null}},R=f.effect=new Ja(S,lt,()=>ol(E),f.scope),E=f.update=()=>{R.dirty&&R.run()};E.id=f.uid,Wn(f,!0),E()},_e=(f,p,g)=>{p.component=f;const C=f.vnode.props;f.vnode=p,f.next=null,Mm(f,p.props,C,g),Um(f,p.children,g),On(),bc(f),xn()},le=(f,p,g,C,v,T,P,S,R=!1)=>{const E=f&&f.children,O=f?f.shapeFlag:0,B=p.children,{patchFlag:V,shapeFlag:K}=p;if(V>0){if(V&128){sn(E,B,g,C,v,T,P,S,R);return}else if(V&256){Vt(E,B,g,C,v,T,P,S,R);return}}K&8?(O&16&&je(E,v,T),B!==E&&u(g,B)):O&16?K&16?sn(E,B,g,C,v,T,P,S,R):je(E,v,T,!0):(O&8&&u(g,""),K&16&&G(B,g,C,v,T,P,S,R))},Vt=(f,p,g,C,v,T,P,S,R)=>{f=f||ms,p=p||ms;const E=f.length,O=p.length,B=Math.min(E,O);let V;for(V=0;V<B;V++){const K=p[V]=R?dn(p[V]):Rt(p[V]);b(f[V],K,g,null,v,T,P,S,R)}E>O?je(f,v,T,!0,!1,B):G(p,g,C,v,T,P,S,R,B)},sn=(f,p,g,C,v,T,P,S,R)=>{let E=0;const O=p.length;let B=f.length-1,V=O-1;for(;E<=B&&E<=V;){const K=f[E],Z=p[E]=R?dn(p[E]):Rt(p[E]);if(qn(K,Z))b(K,Z,g,null,v,T,P,S,R);else break;E++}for(;E<=B&&E<=V;){const K=f[B],Z=p[V]=R?dn(p[V]):Rt(p[V]);if(qn(K,Z))b(K,Z,g,null,v,T,P,S,R);else break;B--,V--}if(E>B){if(E<=V){const K=V+1,Z=K<O?p[K].el:C;for(;E<=V;)b(null,p[E]=R?dn(p[E]):Rt(p[E]),g,Z,v,T,P,S,R),E++}}else if(E>V)for(;E<=B;)et(f[E],v,T,!0),E++;else{const K=E,Z=E,me=new Map;for(E=Z;E<=V;E++){const rt=p[E]=R?dn(p[E]):Rt(p[E]);rt.key!=null&&me.set(rt.key,E)}let Ie,Le=0;const ft=V-Z+1;let hs=!1,hc=0;const js=new Array(ft);for(E=0;E<ft;E++)js[E]=0;for(E=K;E<=B;E++){const rt=f[E];if(Le>=ft){et(rt,v,T,!0);continue}let St;if(rt.key!=null)St=me.get(rt.key);else for(Ie=Z;Ie<=V;Ie++)if(js[Ie-Z]===0&&qn(rt,p[Ie])){St=Ie;break}St===void 0?et(rt,v,T,!0):(js[St-Z]=E+1,St>=hc?hc=St:hs=!0,b(rt,p[St],g,null,v,T,P,S,R),Le++)}const dc=hs?Bm(js):ms;for(Ie=dc.length-1,E=ft-1;E>=0;E--){const rt=Z+E,St=p[rt],fc=rt+1<O?p[rt+1].el:C;js[E]===0?b(null,St,g,fc,v,T,P,S,R):hs&&(Ie<0||E!==dc[Ie]?It(St,g,fc,2):Ie--)}}},It=(f,p,g,C,v=null)=>{const{el:T,type:P,transition:S,children:R,shapeFlag:E}=f;if(E&6){It(f.component.subTree,p,g,C);return}if(E&128){f.suspense.move(p,g,C);return}if(E&64){P.move(f,p,g,U);return}if(P===Oe){s(T,p,g);for(let B=0;B<R.length;B++)It(R[B],p,g,C);s(f.anchor,p,g);return}if(P===Fo){W(f,p,g);return}if(C!==2&&E&1&&S)if(C===0)S.beforeEnter(T),s(T,p,g),tt(()=>S.enter(T),v);else{const{leave:B,delayLeave:V,afterLeave:K}=S,Z=()=>s(T,p,g),me=()=>{B(T,()=>{Z(),K&&K()})};V?V(T,Z,me):me()}else s(T,p,g)},et=(f,p,g,C=!1,v=!1)=>{const{type:T,props:P,ref:S,children:R,dynamicChildren:E,shapeFlag:O,patchFlag:B,dirs:V}=f;if(S!=null&&_a(S,null,g,f,!0),O&256){p.ctx.deactivate(f);return}const K=O&1&&V,Z=!ur(f);let me;if(Z&&(me=P&&P.onVnodeBeforeUnmount)&&Tt(me,p,f),O&6)Qi(f.component,g,C);else{if(O&128){f.suspense.unmount(g,C);return}K&&Un(f,null,p,"beforeUnmount"),O&64?f.type.remove(f,p,g,v,U,C):E&&(T!==Oe||B>0&&B&64)?je(E,p,g,!1,!0):(T===Oe&&B&384||!v&&O&16)&&je(R,p,g),C&&cs(f)}(Z&&(me=P&&P.onVnodeUnmounted)||K)&&tt(()=>{me&&Tt(me,p,f),K&&Un(f,null,p,"unmounted")},g)},cs=f=>{const{type:p,el:g,anchor:C,transition:v}=f;if(p===Oe){us(g,C);return}if(p===Fo){z(f);return}const T=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:S}=v,R=()=>P(g,T);S?S(f.el,T,R):R()}else T()},us=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Qi=(f,p,g)=>{const{bum:C,scope:v,update:T,subTree:P,um:S}=f;C&&ar(C),v.stop(),T&&(T.active=!1,et(P,f,p,g)),S&&tt(S,p),tt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},je=(f,p,g,C=!1,v=!1,T=0)=>{for(let P=T;P<f.length;P++)et(f[P],p,g,C,v)},w=f=>f.shapeFlag&6?w(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let N=!1;const k=(f,p,g)=>{f==null?p._vnode&&et(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,g),N||(N=!0,bc(),td(),N=!1),p._vnode=f},U={p:b,um:et,m:It,r:cs,mt:ze,mc:G,pc:le,pbc:ae,n:w,o:t};let he,Se;return{render:k,hydrate:he,createApp:xm(k,he)}}function Lo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function $m(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Td(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=dn(i[r]),a.el=o.el),n||Td(o,a)),a.type===ao&&(a.el=o.el)}}function Bm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Rd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rd(e)}const Hm=t=>t.__isTeleport,Oe=Symbol.for("v-fgt"),ao=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),Fo=Symbol.for("v-stc"),ii=[];let yt=null;function M(t=!1){ii.push(yt=t?null:[])}function jm(){ii.pop(),yt=ii[ii.length-1]||null}let gi=1;function Mc(t){gi+=t}function kd(t){return t.dynamicChildren=gi>0?yt||ms:null,jm(),gi>0&&yt&&yt.push(t),t}function L(t,e,n,s,i,r){return kd(m(t,e,n,s,i,r,!0))}function ul(t,e,n,s,i){return kd(ie(t,e,n,s,i,!0))}function ma(t){return t?t.__v_isVNode===!0:!1}function qn(t,e){return t.type===e.type&&t.key===e.key}const Pd=({key:t})=>t??null,dr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pe(t)||it(t)||Y(t)?{i:Je,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,s=0,i=null,r=t===Oe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pd(e),ref:e&&dr(e),scopeId:io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Je};return a?(hl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Pe(n)?8:16),gi>0&&!o&&yt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&yt.push(l),l}const ie=qm;function qm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===id)&&(t=ct),ma(t)){const a=kn(t,e,!0);return n&&hl(a,n),gi>0&&!r&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if(sg(t)&&(t=t.__vccOpts),e){e=Gm(e);let{class:a,style:l}=e;a&&!Pe(a)&&(e.class=Qa(a)),ve(l)&&(zh(l)&&!$(l)&&(l=Ae({},l)),e.style=Ya(l))}const o=Pe(t)?1:lm(t)?128:Hm(t)?64:ve(t)?4:Y(t)?2:0;return m(t,e,n,s,i,o,r,!0)}function Gm(t){return t?zh(t)||wd(t)?Ae({},t):t:null}function kn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Km(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Pd(c),ref:e&&e.ref?n&&r?$(r)?r.concat(dr(e)):[r,dr(e)]:dr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&(u.transition=l.clone(u)),u}function xe(t=" ",e=0){return ie(ao,null,t,e)}function fe(t="",e=!1){return e?(M(),ul(ct,null,t)):ie(ct,null,t)}function Rt(t){return t==null||typeof t=="boolean"?ie(ct):$(t)?ie(Oe,null,t.slice()):typeof t=="object"?dn(t):ie(ao,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kn(t)}function hl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),hl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!wd(e)?e._ctx=Je:i===3&&Je&&(Je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Je},n=32):(e=String(e),s&64?(n=16,e=[xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Km(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Qa([e.class,s.class]));else if(i==="style")e.style=Ya([e.style,s.style]);else if(Qr(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Tt(t,e,n,s=null){ht(t,e,7,[n,s])}const zm=gd();let Ym=0;function Qm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||zm,r={uid:Ym++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new b_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ed(s,i),emitsOptions:sd(s,i),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:s.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nm.bind(null,r),t.ce&&t.ce(r),r}let Ve=null;const Jm=()=>Ve||Je;let br,ga;{const t=Oh(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};br=e("__VUE_INSTANCE_SETTERS__",n=>Ve=n),ga=e("__VUE_SSR_SETTERS__",n=>lo=n)}const Li=t=>{const e=Ve;return br(t),t.scope.on(),()=>{t.scope.off(),br(e)}},Lc=()=>{Ve&&Ve.scope.off(),br(null)};function Ad(t){return t.vnode.shapeFlag&4}let lo=!1;function Xm(t,e=!1){e&&ga(e);const{props:n,children:s}=t.vnode,i=Ad(t);Dm(t,n,i,e),Fm(t,s);const r=i?Zm(t,e):void 0;return e&&ga(!1),r}function Zm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Tm);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?tg(t):null,r=Li(t);On();const o=Cn(s,t,0,[t.props,i]);if(xn(),r(),kh(o)){if(o.then(Lc,Lc),e)return o.then(a=>{Fc(t,a,e)}).catch(a=>{no(a,t,0)});t.asyncDep=o}else Fc(t,o,e)}else Nd(t,e)}function Fc(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=Xh(e)),Nd(t,n)}let Uc;function Nd(t,e,n){const s=t.type;if(!t.render){if(!e&&Uc&&!s.render){const i=s.template||ll(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ae(Ae({isCustomElement:r,delimiters:a},o),l);s.render=Uc(i,c)}}t.render=s.render||lt}{const i=Li(t);On();try{Rm(t)}finally{xn(),i()}}}const eg={get(t,e){return st(t,"get",""),t[e]}};function tg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,eg),slots:t.slots,emit:t.emit,expose:e}}function co(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xh(q_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ni)return ni[n](t)},has(e,n){return n in e||n in ni}}))}function ng(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function sg(t){return Y(t)&&"__vccOpts"in t}const _t=(t,e)=>G_(t,e,lo);function dl(t,e,n){const s=arguments.length;return s===2?ve(e)&&!$(e)?ma(e)?ie(t,null,[e]):ie(t,e):ie(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ma(n)&&(n=[n]),ie(t,e,n))}const ig="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const rg="http://www.w3.org/2000/svg",og="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,Wc=fn&&fn.createElement("template"),ag={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?fn.createElementNS(rg,t):e==="mathml"?fn.createElementNS(og,t):fn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Wc.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Wc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},on="transition",qs="animation",yi=Symbol("_vtc"),fl=(t,{slots:e})=>dl(_m,lg(t),e);fl.displayName="Transition";const Od={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};fl.props=Ae({},ld,Od);const Vn=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},Vc=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function lg(t){const e={};for(const F in t)F in Od||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,y=cg(i),b=y&&y[0],x=y&&y[1],{onBeforeEnter:A,onEnter:D,onEnterCancelled:W,onLeave:z,onLeaveCancelled:ee,onBeforeAppear:H=A,onAppear:be=D,onAppearCancelled:G=W}=e,oe=(F,ue,ze)=>{$n(F,ue?u:a),$n(F,ue?c:o),ze&&ze()},ae=(F,ue)=>{F._isLeaving=!1,$n(F,h),$n(F,_),$n(F,d),ue&&ue()},Ne=F=>(ue,ze)=>{const Wt=F?be:D,ke=()=>oe(ue,F,ze);Vn(Wt,[ue,ke]),$c(()=>{$n(ue,F?l:r),an(ue,F?u:a),Vc(Wt)||Bc(ue,s,b,ke)})};return Ae(e,{onBeforeEnter(F){Vn(A,[F]),an(F,r),an(F,o)},onBeforeAppear(F){Vn(H,[F]),an(F,l),an(F,c)},onEnter:Ne(!1),onAppear:Ne(!0),onLeave(F,ue){F._isLeaving=!0;const ze=()=>ae(F,ue);an(F,h),an(F,d),dg(),$c(()=>{F._isLeaving&&($n(F,h),an(F,_),Vc(z)||Bc(F,s,x,ze))}),Vn(z,[F,ze])},onEnterCancelled(F){oe(F,!1),Vn(W,[F])},onAppearCancelled(F){oe(F,!0),Vn(G,[F])},onLeaveCancelled(F){ae(F),Vn(ee,[F])}})}function cg(t){if(t==null)return null;if(ve(t))return[Uo(t.enter),Uo(t.leave)];{const e=Uo(t);return[e,e]}}function Uo(t){return p_(t)}function an(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[yi]||(t[yi]=new Set)).add(e)}function $n(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[yi];n&&(n.delete(e),n.size||(t[yi]=void 0))}function $c(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ug=0;function Bc(t,e,n,s){const i=t._endId=++ug,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=hg(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=_=>{_.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function hg(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),i=s(`${on}Delay`),r=s(`${on}Duration`),o=Hc(i,r),a=s(`${qs}Delay`),l=s(`${qs}Duration`),c=Hc(a,l);let u=null,h=0,d=0;e===on?o>0&&(u=on,h=o,d=r.length):e===qs?c>0&&(u=qs,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?on:qs:null,d=u?u===on?r.length:l.length:0);const _=u===on&&/\b(transform|all)(,|$)/.test(s(`${on}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:_}}function Hc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>jc(n)+jc(t[s])))}function jc(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function dg(){return document.body.offsetHeight}function fg(t,e,n){const s=t[yi];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qc=Symbol("_vod"),pg=Symbol("_vsh"),_g=Symbol(""),mg=/(^|;)\s*display\s*:/;function gg(t,e,n){const s=t.style,i=Pe(n);let r=!1;if(n&&!i){if(e)if(Pe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&fr(s,a,"")}else for(const o in e)n[o]==null&&fr(s,o,"");for(const o in n)o==="display"&&(r=!0),fr(s,o,n[o])}else if(i){if(e!==n){const o=s[_g];o&&(n+=";"+o),s.cssText=n,r=mg.test(n)}}else e&&t.removeAttribute("style");qc in t&&(t[qc]=r?s.display:"",t[pg]&&(s.display="none"))}const Gc=/\s*!important$/;function fr(t,e,n){if($(n))n.forEach(s=>fr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=yg(t,e);Gc.test(n)?t.setProperty(Ms(s),n.replace(Gc,""),"important"):t[s]=n}}const Kc=["Webkit","Moz","ms"],Wo={};function yg(t,e){const n=Wo[e];if(n)return n;let s=Ot(e);if(s!=="filter"&&s in t)return Wo[e]=s;s=Zr(s);for(let i=0;i<Kc.length;i++){const r=Kc[i]+s;if(r in t)return Wo[e]=r}return e}const zc="http://www.w3.org/1999/xlink";function vg(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zc,e.slice(6,e.length)):t.setAttributeNS(zc,e,n);else{const r=w_(e);n==null||r&&!xh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function wg(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=xh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Gn(t,e,n,s){t.addEventListener(e,n,s)}function Cg(t,e,n,s){t.removeEventListener(e,n,s)}const Yc=Symbol("_vei");function Eg(t,e,n,s,i=null){const r=t[Yc]||(t[Yc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=bg(e);if(s){const c=r[e]=Tg(s,i);Gn(t,a,c,l)}else o&&(Cg(t,a,o,l),r[e]=void 0)}}const Qc=/(?:Once|Passive|Capture)$/;function bg(t){let e;if(Qc.test(t)){e={};let s;for(;s=t.match(Qc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ms(t.slice(2)),e]}let Vo=0;const Ig=Promise.resolve(),Sg=()=>Vo||(Ig.then(()=>Vo=0),Vo=Date.now());function Tg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ht(Rg(s,n.value),e,5,[s])};return n.value=t,n.attached=Sg(),n}function Rg(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Jc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,kg=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?fg(t,s,c):e==="style"?gg(t,n,s):Qr(e)?Ga(e)||Eg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pg(t,e,s,c))?wg(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),vg(t,e,s,c))};function Pg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jc(e)&&Y(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Jc(e)&&Pe(n)?!1:e in t}const Ir=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>ar(e,n):e};function Ag(t){t.target.composing=!0}function Xc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ws=Symbol("_assign"),pe={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[ws]=Ir(i);const r=s||i.props&&i.props.type==="number";Gn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=vr(a)),t[ws](a)}),n&&Gn(t,"change",()=>{t.value=t.value.trim()}),e||(Gn(t,"compositionstart",Ag),Gn(t,"compositionend",Xc),Gn(t,"change",Xc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[ws]=Ir(r),t.composing)return;const o=(i||t.type==="number")&&!/^0\d/.test(t.value)?vr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},Ng={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Jr(e);Gn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?vr(Sr(o)):Sr(o));t[ws](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,rl(()=>{t._assigning=!1})}),t[ws]=Ir(s)},mounted(t,{value:e,modifiers:{number:n}}){Zc(t,e)},beforeUpdate(t,e,n){t[ws]=Ir(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Zc(t,e)}};function Zc(t,e,n){const s=t.multiple,i=$(e);if(!(s&&!i&&!Jr(e))){for(let r=0,o=t.options.length;r<o;r++){const a=t.options[r],l=Sr(a);if(s)if(i){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(u=>String(u)===String(l)):a.selected=E_(e,l)>-1}else a.selected=e.has(l);else if(eo(Sr(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Sr(t){return"_value"in t?t._value:t.value}const Og=["ctrl","shift","alt","meta"],xg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Og.some(n=>t[`${n}Key`]&&!e.includes(n))},Xn=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=xg[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Dg=Ae({patchProp:kg},ag);let eu;function Mg(){return eu||(eu=Wm(Dg))}const Lg=(...t)=>{const e=Mg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ug(s);if(!i)return;const r=e._component;!Y(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Fg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Fg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ug(t){return Pe(t)?document.querySelector(t):t}const qe=Mi({isAuthenticated:!1,user:null,isAdmin:!1,login(t){this.isAuthenticated=!0,this.user=t,this.isAdmin=t.isAdmin||!1},logout(){this.isAuthenticated=!1,this.user=null,this.isAdmin=!1}});var tu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Ls(e)},Ls=function(t){return new Error("Firebase Database ("+xd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Vg;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const y=c<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Md=function(t){const e=Dd(t);return pl.encodeByteArray(e,!0)},Tr=function(t){return Md(t).replace(/\./g,"")},Rr=function(t){try{return pl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){return Ld(void 0,t)}function Ld(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Bg(n)||(t[n]=Ld(t[n],e[n]));return t}function Bg(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=()=>Hg().__FIREBASE_DEFAULTS__,qg=()=>{if(typeof process>"u"||typeof tu>"u")return;const t=tu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rr(t[1]);return e&&JSON.parse(e)},_l=()=>{try{return jg()||qg()||Gg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fd=t=>{var e,n;return(n=(e=_l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kg=t=>{const e=Fd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ud=()=>{var t;return(t=_l())===null||t===void 0?void 0:t.config},Wd=t=>{var e;return(e=_l())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Tr(JSON.stringify(n)),Tr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ml(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function Yg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qg(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $d(){return xd.NODE_ADMIN===!0}function Jg(){try{return typeof indexedDB=="object"}catch{return!1}}function Xg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="FirebaseError";class Dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zg,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ey(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,a,s)}}function ey(t,e){return t.replace(ty,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ty=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=vi(Rr(r[0])||""),n=vi(Rr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ny=function(t){const e=Bd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sy=function(t){const e=Bd(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ts(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ya(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(nu(r)&&nu(o)){if(!Pr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function nu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ry(t,e){const n=new oy(t,e);return n.subscribe.bind(n)}class oy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ay(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=$o),i.error===void 0&&(i.error=$o),i.complete===void 0&&(i.complete=$o);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ay(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $o(){}function uo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ho=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hy(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uy(t){return t===Bn?void 0:t}function hy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const fy={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},py=ge.INFO,_y={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},my=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=_y[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gl{constructor(e){this.name=e,this._logLevel=py,this._logHandler=my,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const gy=(t,e)=>e.some(n=>t instanceof n);let su,iu;function yy(){return su||(su=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vy(){return iu||(iu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hd=new WeakMap,va=new WeakMap,jd=new WeakMap,Bo=new WeakMap,yl=new WeakMap;function wy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(En(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hd.set(n,t)}).catch(()=>{}),yl.set(e,t),e}function Cy(t){if(va.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});va.set(t,e)}let wa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return va.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ey(t){wa=t(wa)}function by(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ho(this),e,...n);return jd.set(s,e.sort?e.sort():[e]),En(s)}:vy().includes(t)?function(...e){return t.apply(Ho(this),e),En(Hd.get(this))}:function(...e){return En(t.apply(Ho(this),e))}}function Iy(t){return typeof t=="function"?by(t):(t instanceof IDBTransaction&&Cy(t),gy(t,yy())?new Proxy(t,wa):t)}function En(t){if(t instanceof IDBRequest)return wy(t);if(Bo.has(t))return Bo.get(t);const e=Iy(t);return e!==t&&(Bo.set(t,e),yl.set(e,t)),e}const Ho=t=>yl.get(t);function Sy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=En(o);return s&&o.addEventListener("upgradeneeded",l=>{s(En(o.result),l.oldVersion,l.newVersion,En(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ty=["get","getKey","getAll","getAllKeys","count"],Ry=["put","add","delete","clear"],jo=new Map;function ru(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jo.get(e))return jo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ry.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ty.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return jo.set(e,r),r}Ey(t=>({...t,get:(e,n,s)=>ru(e,n)||t.get(e,n,s),has:(e,n)=>!!ru(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Py(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Py(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ca="@firebase/app",ou="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new gl("@firebase/app"),Ay="@firebase/app-compat",Ny="@firebase/analytics-compat",Oy="@firebase/analytics",xy="@firebase/app-check-compat",Dy="@firebase/app-check",My="@firebase/auth",Ly="@firebase/auth-compat",Fy="@firebase/database",Uy="@firebase/database-compat",Wy="@firebase/functions",Vy="@firebase/functions-compat",$y="@firebase/installations",By="@firebase/installations-compat",Hy="@firebase/messaging",jy="@firebase/messaging-compat",qy="@firebase/performance",Gy="@firebase/performance-compat",Ky="@firebase/remote-config",zy="@firebase/remote-config-compat",Yy="@firebase/storage",Qy="@firebase/storage-compat",Jy="@firebase/firestore",Xy="@firebase/vertexai-preview",Zy="@firebase/firestore-compat",ev="firebase",tv="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="[DEFAULT]",nv={[Ca]:"fire-core",[Ay]:"fire-core-compat",[Oy]:"fire-analytics",[Ny]:"fire-analytics-compat",[Dy]:"fire-app-check",[xy]:"fire-app-check-compat",[My]:"fire-auth",[Ly]:"fire-auth-compat",[Fy]:"fire-rtdb",[Uy]:"fire-rtdb-compat",[Wy]:"fire-fn",[Vy]:"fire-fn-compat",[$y]:"fire-iid",[By]:"fire-iid-compat",[Hy]:"fire-fcm",[jy]:"fire-fcm-compat",[qy]:"fire-perf",[Gy]:"fire-perf-compat",[Ky]:"fire-rc",[zy]:"fire-rc-compat",[Yy]:"fire-gcs",[Qy]:"fire-gcs-compat",[Jy]:"fire-fst",[Zy]:"fire-fst-compat",[Xy]:"fire-vertex","fire-js":"fire-js",[ev]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map,sv=new Map,ba=new Map;function au(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rs(t){const e=t.name;if(ba.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;ba.set(e,t);for(const n of Ar.values())au(n,t);for(const n of sv.values())au(n,t);return!0}function vl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new Ui("app","Firebase",iv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=tv;function Ft(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ea,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=Ud()),!n)throw bn.create("no-options");const r=Ar.get(i);if(r){if(Pr(n,r.options)&&Pr(s,r.config))return r;throw bn.create("duplicate-app",{appName:i})}const o=new dy(i);for(const l of ba.values())o.addComponent(l);const a=new rv(n,s,o);return Ar.set(i,a),a}function qd(t=Ea){const e=Ar.get(t);if(!e&&t===Ea&&Ud())return Ft();if(!e)throw bn.create("no-app",{appName:t});return e}function In(t,e,n){var s;let i=(s=nv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}Rs(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="firebase-heartbeat-database",av=1,wi="firebase-heartbeat-store";let qo=null;function Gd(){return qo||(qo=Sy(ov,av,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),qo}async function lv(t){try{const n=(await Gd()).transaction(wi),s=await n.objectStore(wi).get(Kd(t));return await n.done,s}catch(e){if(e instanceof Dn)es.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function lu(t,e){try{const s=(await Gd()).transaction(wi,"readwrite");await s.objectStore(wi).put(e,Kd(t)),await s.done}catch(n){if(n instanceof Dn)es.warn(n.message);else{const s=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(s.message)}}}function Kd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=1024,uv=30*24*60*60*1e3;class hv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cu();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=uv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cu(),{heartbeatsToSend:s,unsentEntries:i}=dv(this._heartbeatsCache.heartbeats),r=Tr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function cu(){return new Date().toISOString().substring(0,10)}function dv(t,e=cv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),uu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jg()?Xg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function uu(t){return Tr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){Rs(new Zn("platform-logger",e=>new ky(e),"PRIVATE")),Rs(new Zn("heartbeat",e=>new hv(e),"PRIVATE")),In(Ca,ou,t),In(Ca,ou,"esm2017"),In("fire-js","")}pv("");function wl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function zd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _v=zd,Yd=new Ui("auth","Firebase",zd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new gl("@firebase/auth");function mv(t,...e){Nr.logLevel<=ge.WARN&&Nr.warn(`Auth (${Us}): ${t}`,...e)}function pr(t,...e){Nr.logLevel<=ge.ERROR&&Nr.error(`Auth (${Us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw Cl(t,...e)}function At(t,...e){return Cl(t,...e)}function Qd(t,e,n){const s=Object.assign(Object.assign({},_v()),{[e]:n});return new Ui("auth","Firebase",s).create(e,{appName:t.name})}function Yt(t){return Qd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Yd.create(t,...e)}function q(t,e,...n){if(!t)throw Cl(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pr(e),new Error(e)}function Xt(t,e){t||Ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gv(){return hu()==="http:"||hu()==="https:"}function hu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gv()||Yg()||"connection"in navigator)?navigator.onLine:!0}function vv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=ml()||Vd()}get(){return yv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=new Wi(3e4,6e4);function Mn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ln(t,e,n,s,i={}){return Xd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Fs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jd.fetch()(Zd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Xd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},wv),e);try{const i=new bv(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ir(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ir(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ir(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ir(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qd(t,u,c);Ct(t,u)}}catch(i){if(i instanceof Dn)throw i;Ct(t,"network-request-failed",{message:String(i)})}}async function Vi(t,e,n,s,i={}){const r=await Ln(t,e,n,s,i);return"mfaPendingCredential"in r&&Ct(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Zd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?El(t.config,i):`${t.config.apiScheme}://${i}`}function Ev(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(At(this.auth,"network-request-failed")),Cv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ir(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=At(t,e,s);return i.customData._tokenResponse=n,i}function du(t){return t!==void 0&&t.enterprise!==void 0}class Iv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ev(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Sv(t,e){return Ln(t,"GET","/v2/recaptchaConfig",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tv(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function ef(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rv(t,e=!1){const n=He(t),s=await n.getIdToken(e),i=bl(s);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ri(Go(i.auth_time)),issuedAtTime:ri(Go(i.iat)),expirationTime:ri(Go(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Go(t){return Number(t)*1e3}function bl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return pr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rr(n);return i?JSON.parse(i):(pr("Failed to decode base64 JWT payload"),null)}catch(i){return pr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fu(t){const e=bl(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dn&&kv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function kv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ci(t,ef(n,{idToken:s}));q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?tf(r.providerUserInfo):[],a=Nv(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Sa(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Av(t){const e=He(t);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nv(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function tf(t){return t.map(e=>{var{providerId:n}=e,s=wl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(t,e){const n=await Xd(t,{},async()=>{const s=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Zd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xv(t,e){return Ln(t,"POST","/v2/accounts:revokeToken",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=fu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ov(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Cs;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=wl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Sa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ci(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rv(this,e)}reload(){return Av(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Or(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(Yt(this.auth));const e=await this.getIdToken();return await Ci(this,Tv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:W,emailVerified:z,isAnonymous:ee,providerData:H,stsTokenManager:be}=n;q(W&&be,e,"internal-error");const G=Cs.fromJSON(this.name,be);q(typeof W=="string",e,"internal-error"),ln(h,e.name),ln(d,e.name),q(typeof z=="boolean",e,"internal-error"),q(typeof ee=="boolean",e,"internal-error"),ln(_,e.name),ln(y,e.name),ln(b,e.name),ln(x,e.name),ln(A,e.name),ln(D,e.name);const oe=new jt({uid:W,auth:e,email:d,emailVerified:z,displayName:h,isAnonymous:ee,photoURL:y,phoneNumber:_,tenantId:b,stsTokenManager:G,createdAt:A,lastLoginAt:D});return H&&Array.isArray(H)&&(oe.providerData=H.map(ae=>Object.assign({},ae))),x&&(oe._redirectEventId=x),oe}static async _fromIdTokenResponse(e,n,s=!1){const i=new Cs;i.updateFromServerResponse(n);const r=new jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Or(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];q(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?tf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Cs;a.updateFromIdToken(s);const l=new jt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Sa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=new Map;function qt(t){Xt(t instanceof Function,"Expected a class definition");let e=pu.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nf.type="NONE";const _u=nf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=_r(this.userKey,i.apiKey,r),this.fullPersistenceKey=_r("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Es(qt(_u),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||qt(_u);const o=_r(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=jt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Es(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Es(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(of(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lf(e))return"Blackberry";if(cf(e))return"Webos";if(Il(e))return"Safari";if((e.includes("chrome/")||rf(e))&&!e.includes("edge/"))return"Chrome";if(af(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function sf(t=Ke()){return/firefox\//i.test(t)}function Il(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rf(t=Ke()){return/crios\//i.test(t)}function of(t=Ke()){return/iemobile/i.test(t)}function af(t=Ke()){return/android/i.test(t)}function lf(t=Ke()){return/blackberry/i.test(t)}function cf(t=Ke()){return/webos/i.test(t)}function fo(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Dv(t=Ke()){var e;return fo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mv(){return Qg()&&document.documentMode===10}function uf(t=Ke()){return fo(t)||af(t)||cf(t)||lf(t)||/windows phone/i.test(t)||of(t)}function Lv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t,e=[]){let n;switch(t){case"Browser":n=mu(Ke());break;case"Worker":n=`${mu(Ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(t,e={}){return Ln(t,"GET","/v2/passwordPolicy",Mn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=6;class Vv{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Wv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gu(this),this.idTokenSubscription=new gu(this),this.beforeStateQueue=new Fv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ef(this,{idToken:e}),s=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Or(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(Yt(this));const n=e?He(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(Yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(Yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Uv(this),n=new Vv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await xv(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function os(t){return He(t)}class gu{constructor(e){this.auth=e,this.observer=null,this.addObserver=ry(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bv(t){po=t}function df(t){return po.loadJS(t)}function Hv(){return po.recaptchaEnterpriseScript}function jv(){return po.gapiScript}function qv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Gv="recaptcha-enterprise",Kv="NO_RECAPTCHA";class zv{constructor(e){this.type=Gv,this.auth=os(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Sv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Iv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;du(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Kv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&du(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Hv();l.length!==0&&(l+=a),df(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function yu(t,e,n,s=!1){const i=new zv(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ta(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await yu(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yu(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t,e){const n=vl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Pr(r,e??{}))return i;Ct(i,"already-initialized")}return n.initialize({options:e})}function Qv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Jv(t,e,n){const s=os(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=ff(e),{host:o,port:a}=Xv(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),Zv()}function ff(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Xv(t){const e=ff(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:vu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:vu(o)}}}function vu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function ew(t,e){return Ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(t,e){return Vi(t,"POST","/v1/accounts:signInWithPassword",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(t,e){return Vi(t,"POST","/v1/accounts:signInWithEmailLink",Mn(t,e))}async function sw(t,e){return Vi(t,"POST","/v1/accounts:signInWithEmailLink",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Sl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ei(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ei(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ta(e,n,"signInWithPassword",tw);case"emailLink":return nw(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ta(e,s,"signUpPassword",ew);case"emailLink":return sw(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e){return Vi(t,"POST","/v1/accounts:signInWithIdp",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="http://localhost";class ts extends Sl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=wl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ts(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,bs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:iw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ow(t){const e=Xs(Zs(t)).link,n=e?Xs(Zs(e)).deep_link_id:null,s=Xs(Zs(t)).deep_link_id;return(s?Xs(Zs(s)).link:null)||s||n||e||t}class Tl{constructor(e){var n,s,i,r,o,a;const l=Xs(Zs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=rw((i=l.mode)!==null&&i!==void 0?i:null);q(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ow(e);try{return new Tl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return Ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Tl.parseLink(n);return q(s,"argument-error"),Ei._fromEmailAndCode(e,s.code,s.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends pf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends $i{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return mn.credential(n,s)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends $i{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends $i{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(t,e){return Vi(t,"POST","/v1/accounts:signUp",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await jt._fromIdTokenResponse(e,s,i),o=wu(s);return new ns({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=wu(s);return new ns({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function wu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Dn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,xr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new xr(e,n,s,i)}}function _f(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?xr._fromErrorAndOperation(t,r,e,s):r})}async function lw(t,e,n=!1){const s=await Ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(t,e,n=!1){const{auth:s}=t;if(Pt(s.app))return Promise.reject(Yt(s));const i="reauthenticate";try{const r=await Ci(t,_f(s,i,e,t),n);q(r.idToken,s,"internal-error");const o=bl(r.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),ns._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ct(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(t,e,n=!1){if(Pt(t.app))return Promise.reject(Yt(t));const s="signIn",i=await _f(t,s,e),r=await ns._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function uw(t,e){return mf(os(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(t){const e=os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hw(t,e,n){if(Pt(t.app))return Promise.reject(Yt(t));const s=os(t),o=await Ta(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",aw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gf(t),l}),a=await ns._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function dw(t,e,n){return Pt(t.app)?Promise.reject(Yt(t)):uw(He(t),Ws.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&gf(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t,e){return He(t).setPersistence(e)}function pw(t,e,n,s){return He(t).onIdTokenChanged(e,n,s)}function _w(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function mw(t,e,n,s){return He(t).onAuthStateChanged(e,n,s)}function yf(t){return He(t).signOut()}const Dr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(){const t=Ke();return Il(t)||fo(t)}const yw=1e3,vw=10;class wf extends vf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gw()&&Lv(),this.fallbackToPolling=uf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Mv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vw):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},yw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wf.type="LOCAL";const Cf=wf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends vf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ef.type="SESSION";const bf=Ef;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new _o(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await ww(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_o.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Rl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function Ew(t){Nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function bw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Iw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sw(){return If()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="firebaseLocalStorageDb",Tw=1,Mr="firebaseLocalStorage",Tf="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mo(t,e){return t.transaction([Mr],e?"readwrite":"readonly").objectStore(Mr)}function Rw(){const t=indexedDB.deleteDatabase(Sf);return new Bi(t).toPromise()}function Ra(){const t=indexedDB.open(Sf,Tw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Mr,{keyPath:Tf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Mr)?e(s):(s.close(),await Rw(),e(await Ra()))})})}async function Cu(t,e,n){const s=mo(t,!0).put({[Tf]:e,value:n});return new Bi(s).toPromise()}async function kw(t,e){const n=mo(t,!1).get(e),s=await new Bi(n).toPromise();return s===void 0?null:s.value}function Eu(t,e){const n=mo(t,!0).delete(e);return new Bi(n).toPromise()}const Pw=800,Aw=3;class Rf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ra(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Aw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return If()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_o._getInstance(Sw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bw(),!this.activeServiceWorker)return;this.sender=new Cw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Iw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ra();return await Cu(e,Dr,"1"),await Eu(e,Dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>kw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Eu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=mo(i,!1).getAll();return new Bi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rf.type="LOCAL";const Nw=Rf;new Wi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t,e){return e?qt(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends Sl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xw(t){return mf(t.auth,new kl(t),t.bypassAuthState)}function Dw(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),cw(n,new kl(t),t.bypassAuthState)}async function Mw(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),lw(n,new kl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xw;case"linkViaPopup":case"linkViaRedirect":return Mw;case"reauthViaPopup":case"reauthViaRedirect":return Dw;default:Ct(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new Wi(2e3,1e4);class ps extends kf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=Rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lw.get())};e()}}ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="pendingRedirect",mr=new Map;class Uw extends kf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const s=await Ww(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ww(t,e){const n=Bw(e),s=$w(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Vw(t,e){mr.set(t._key(),e)}function $w(t){return qt(t._redirectPersistence)}function Bw(t){return _r(Fw,t.config.apiKey,t.name)}async function Hw(t,e,n=!1){if(Pt(t.app))return Promise.reject(Yt(t));const s=os(t),i=Ow(s,e),o=await new Uw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=10*60*1e3;class qw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Pf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jw&&this.cachedEventUids.clear(),this.cachedEventUids.has(bu(e))}saveEventToCache(e){this.cachedEventUids.add(bu(e)),this.lastProcessedEventTime=Date.now()}}function bu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yw=/^https?/;async function Qw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kw(t);for(const n of e)try{if(Jw(n))return}catch{}Ct(t,"unauthorized-domain")}function Jw(t){const e=Ia(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Yw.test(n))return!1;if(zw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=new Wi(3e4,6e4);function Iu(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Zw(t){return new Promise((e,n)=>{var s,i,r;function o(){Iu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iu(),n(At(t,"network-request-failed"))},timeout:Xw.get()})}if(!((i=(s=Nt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Nt().gapi)===null||r===void 0)&&r.load)o();else{const a=qv("iframefcb");return Nt()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},df(`${jv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw gr=null,e})}let gr=null;function eC(t){return gr=gr||Zw(t),gr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=new Wi(5e3,15e3),nC="__/auth/iframe",sC="emulator/auth/iframe",iC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oC(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?El(e,sC):`https://${t.config.authDomain}/${nC}`,s={apiKey:e.apiKey,appName:t.name,v:Us},i=rC.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Fs(s).slice(1)}`}async function aC(t){const e=await eC(t),n=Nt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:oC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iC,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=Nt().setTimeout(()=>{r(o)},tC.get());function l(){Nt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cC=500,uC=600,hC="_blank",dC="http://localhost";class Su{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fC(t,e,n,s=cC,i=uC){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lC),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ke().toLowerCase();n&&(a=rf(c)?hC:n),sf(c)&&(e=e||dC,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,y])=>`${d}${_}=${y},`,"");if(Dv(c)&&a!=="_self")return pC(e||"",a),new Su(null);const h=window.open(e||"",a,u);q(h,t,"popup-blocked");try{h.focus()}catch{}return new Su(h)}function pC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C="__/auth/handler",mC="emulator/auth/handler",gC=encodeURIComponent("fac");async function Tu(t,e,n,s,i,r){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Us,eventId:i};if(e instanceof pf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ya(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof $i){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${gC}=${encodeURIComponent(l)}`:"";return`${yC(t)}?${Fs(a).slice(1)}${c}`}function yC({config:t}){return t.emulator?El(t,mC):`https://${t.authDomain}/${_C}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="webStorageSupport";class vC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bf,this._completeRedirectFn=Hw,this._overrideRedirectResult=Vw}async _openPopup(e,n,s,i){var r;Xt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Tu(e,n,s,Ia(),i);return fC(e,o,Rl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Tu(e,n,s,Ia(),i);return Ew(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Xt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await aC(e),s=new qw(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ko,{type:Ko},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ko];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uf()||Il()||fo()}}const wC=vC;var Ru="@firebase/auth",ku="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bC(t){Rs(new Zn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hf(t)},c=new $v(s,i,r,l);return Qv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Rs(new Zn("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(s=>new CC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Ru,ku,EC(t)),In(Ru,ku,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=5*60,SC=Wd("authIdTokenMaxAge")||IC;let Pu=null;const TC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>SC)return;const i=n==null?void 0:n.token;Pu!==i&&(Pu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Af(t=qd()){const e=vl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Yv(t,{popupRedirectResolver:wC,persistence:[Nw,Cf,bf]}),s=Wd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=TC(r.toString());_w(n,o,()=>o(n.currentUser)),pw(n,a=>o(a))}}const i=Fd("auth");return i&&Jv(n,`http://${i}`),n}function RC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Bv({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=At("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",RC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bC("Browser");const bt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},kC={name:"App",setup(){return{store:qe}},methods:{logout(){qe.logout(),this.$router.push("/"),yf(Af(this.app)).then(()=>{qe.logout()}).catch(t=>{console.error(t)})}}},PC={id:"app"},AC={key:0},NC={key:1},OC={key:2},xC={key:3},DC={key:4},MC={key:5};function LC(t,e,n,s,i,r){const o=gt("router-link"),a=gt("router-view");return M(),L("div",PC,[m("nav",null,[m("ul",null,[m("li",null,[ie(o,{to:"/"},{default:Qe(()=>[xe("Home")]),_:1})]),s.store.isAuthenticated?(M(),L("li",AC,[ie(o,{to:"/dashboard"},{default:Qe(()=>[xe("Dashboard")]),_:1})])):fe("",!0),s.store.isAuthenticated?(M(),L("li",NC,[ie(o,{to:"/bestiary"},{default:Qe(()=>[xe("Bestiary")]),_:1})])):fe("",!0),s.store.isAuthenticated?(M(),L("li",OC,[ie(o,{to:"/case-files"},{default:Qe(()=>[xe("Case Files")]),_:1})])):fe("",!0),s.store.isAuthenticated?(M(),L("li",xC,[ie(o,{to:"/profile"},{default:Qe(()=>[xe("Profile")]),_:1})])):fe("",!0),s.store.isAuthenticated?fe("",!0):(M(),L("li",DC,[ie(o,{to:"/login"},{default:Qe(()=>[xe("Login")]),_:1})])),s.store.isAuthenticated?(M(),L("li",MC,[m("a",{href:"#",onClick:e[0]||(e[0]=(...l)=>r.logout&&r.logout(...l))},"Logout")])):fe("",!0)])]),m("main",null,[ie(a,null,{default:Qe(({Component:l})=>[ie(fl,{name:"slide-fade"},{default:Qe(()=>[(M(),ul(am(l)))]),_:2},1024)]),_:1})])])}const FC=bt(kC,[["render",LC],["__scopeId","data-v-08b1dfca"]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof document<"u";function UC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const de=Object.assign;function zo(t,e){const n={};for(const s in e){const i=e[s];n[s]=Et(i)?i.map(t):t(i)}return n}const oi=()=>{},Et=Array.isArray,Nf=/#/g,WC=/&/g,VC=/\//g,$C=/=/g,BC=/\?/g,Of=/\+/g,HC=/%5B/g,jC=/%5D/g,xf=/%5E/g,qC=/%60/g,Df=/%7B/g,GC=/%7C/g,Mf=/%7D/g,KC=/%20/g;function Pl(t){return encodeURI(""+t).replace(GC,"|").replace(HC,"[").replace(jC,"]")}function zC(t){return Pl(t).replace(Df,"{").replace(Mf,"}").replace(xf,"^")}function ka(t){return Pl(t).replace(Of,"%2B").replace(KC,"+").replace(Nf,"%23").replace(WC,"%26").replace(qC,"`").replace(Df,"{").replace(Mf,"}").replace(xf,"^")}function YC(t){return ka(t).replace($C,"%3D")}function QC(t){return Pl(t).replace(Nf,"%23").replace(BC,"%3F")}function JC(t){return t==null?"":QC(t).replace(VC,"%2F")}function bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const XC=/\/$/,ZC=t=>t.replace(XC,"");function Yo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=sE(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:bi(o)}}function eE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Au(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tE(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ks(e.matched[s],n.matched[i])&&Lf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nE(t[n],e[n]))return!1;return!0}function nE(t,e){return Et(t)?Nu(t,e):Et(e)?Nu(e,t):t===e}function Nu(t,e){return Et(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function sE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}var Ii;(function(t){t.pop="pop",t.push="push"})(Ii||(Ii={}));var ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ai||(ai={}));function iE(t){if(!t)if(fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZC(t)}const rE=/^[^#]+#/;function oE(t,e){return t.replace(rE,"#")+e}function aE(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const go=()=>({left:window.scrollX,top:window.scrollY});function lE(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=aE(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ou(t,e){return(history.state?history.state.position-e:-1)+t}const Pa=new Map;function cE(t,e){Pa.set(t,e)}function uE(t){const e=Pa.get(t);return Pa.delete(t),e}let hE=()=>location.protocol+"//"+location.host;function Ff(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Au(l,"")}return Au(n,t)+s+i}function dE(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=Ff(t,location),y=n.value,b=e.value;let x=0;if(d){if(n.value=_,e.value=d,o&&o===y){o=null;return}x=b?d.position-b.position:0}else s(_);i.forEach(A=>{A(n.value,y,{delta:x,type:Ii.pop,direction:x?x>0?ai.forward:ai.back:ai.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(de({},d.state,{scroll:go()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function xu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?go():null}}function fE(t){const{history:e,location:n}=window,s={value:Ff(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:hE()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=de({},e.state,xu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=de({},i.value,e.state,{forward:l,scroll:go()});r(u.current,u,!0);const h=de({},xu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function pE(t){t=iE(t);const e=fE(t),n=dE(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=de({location:"",base:t,go:s,createHref:oE.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function _E(t){return typeof t=="string"||t&&typeof t=="object"}function Uf(t){return typeof t=="string"||typeof t=="symbol"}const cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wf=Symbol("");var Du;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Du||(Du={}));function Ps(t,e){return de(new Error,{type:t,[Wf]:!0},e)}function $t(t,e){return t instanceof Error&&Wf in t&&(e==null||!!(t.type&e))}const Mu="[^/]+?",mE={sensitive:!1,strict:!1,start:!0,end:!0},gE=/[.+*?^${}()[\]/\\]/g;function yE(t,e){const n=de({},mE,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(gE,"\\$&"),_+=40;else if(d.type===1){const{value:y,repeatable:b,optional:x,regexp:A}=d;r.push({name:y,repeatable:b,optional:x});const D=A||Mu;if(D!==Mu){_+=10;try{new RegExp(`(${D})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${y}" (${D}): `+z.message)}}let W=b?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(W=x&&c.length<2?`(?:/${W})`:"/"+W),x&&(W+="?"),i+=W,_+=20,x&&(_+=-8),b&&(_+=-20),D===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",y=r[d-1];h[y.name]=_&&y.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:y,repeatable:b,optional:x}=_,A=y in c?c[y]:"";if(Et(A)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const D=Et(A)?A.join("/"):A;if(!D)if(x)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=D}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function vE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function wE(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=vE(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Lu(s))return 1;if(Lu(i))return-1}return i.length-s.length}function Lu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const CE={type:0,value:""},EE=/[a-zA-Z0-9_]/;function bE(t){if(!t)return[[]];if(t==="/")return[[CE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:EE.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function IE(t,e,n){const s=yE(bE(t.path),n),i=de(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function SE(t,e){const n=[],s=new Map;e=Wu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,y=TE(u);y.aliasOf=d&&d.record;const b=Wu(e,u),x=[y];if("alias"in u){const W=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of W)x.push(de({},y,{components:d?d.record.components:y.components,path:z,aliasOf:d?d.record:y}))}let A,D;for(const W of x){const{path:z}=W;if(h&&z[0]!=="/"){const ee=h.record.path,H=ee[ee.length-1]==="/"?"":"/";W.path=h.record.path+(z&&H+z)}if(A=IE(W,h,b),d?d.alias.push(A):(D=D||A,D!==A&&D.alias.push(A),_&&u.name&&!Uu(A)&&o(u.name)),y.children){const ee=y.children;for(let H=0;H<ee.length;H++)r(ee[H],A,d&&d.children[H])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return D?()=>{o(D)}:oi}function o(u){if(Uf(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&wE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Vf(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Uu(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},y,b;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Ps(1,{location:u});b=d.record.name,_=de(Fu(h.params,d.keys.filter(D=>!D.optional).concat(d.parent?d.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),u.params&&Fu(u.params,d.keys.map(D=>D.name))),y=d.stringify(_)}else if(u.path!=null)y=u.path,d=n.find(D=>D.re.test(y)),d&&(_=d.parse(y),b=d.record.name);else{if(d=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw Ps(1,{location:u,currentLocation:h});b=d.record.name,_=de({},h.params,u.params),y=d.stringify(_)}const x=[];let A=d;for(;A;)x.unshift(A.record),A=A.parent;return{name:b,path:y,params:_,matched:x,meta:kE(x)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Fu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function TE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:RE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function RE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Uu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function kE(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Wu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Vf(t,e){return e.children.some(n=>n===t||Vf(t,n))}function PE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Of," "),o=r.indexOf("="),a=bi(o<0?r:r.slice(0,o)),l=o<0?null:bi(r.slice(o+1));if(a in e){let c=e[a];Et(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Vu(t){let e="";for(let n in t){const s=t[n];if(n=YC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Et(s)?s.map(r=>r&&ka(r)):[s&&ka(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function AE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Et(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const NE=Symbol(""),$u=Symbol(""),Al=Symbol(""),$f=Symbol(""),Aa=Symbol("");function Gs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Ps(4,{from:n,to:e})):d instanceof Error?l(d):_E(d)?l(Ps(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Qo(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(OE(l)){const u=(l.__vccOpts||l)[e];u&&r.push(pn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=UC(u)?u.default:u;o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&pn(_,n,s,o,a,i)()}))}}return r}function OE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bu(t){const e=zt(Al),n=zt($f),s=_t(()=>{const l=ys(t.to);return e.resolve(l)}),i=_t(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ks.bind(null,u));if(d>-1)return d;const _=Hu(l[c-2]);return c>1&&Hu(u)===_&&h[h.length-1].path!==_?h.findIndex(ks.bind(null,l[c-2])):d}),r=_t(()=>i.value>-1&&LE(n.params,s.value.params)),o=_t(()=>i.value>-1&&i.value===n.matched.length-1&&Lf(n.params,s.value.params));function a(l={}){return ME(l)?e[ys(t.replace)?"replace":"push"](ys(t.to)).catch(oi):Promise.resolve()}return{route:s,href:_t(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const xE=hd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bu,setup(t,{slots:e}){const n=Mi(Bu(t)),{options:s}=zt(Al),i=_t(()=>({[ju(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ju(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:dl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),DE=xE;function ME(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function LE(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Et(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Hu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ju=(t,e,n)=>t??e??n,FE=hd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=zt(Aa),i=_t(()=>t.route||s.value),r=zt($u,0),o=_t(()=>{let c=ys(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=_t(()=>i.value.matched[o.value]);hr($u,_t(()=>o.value+1)),hr(NE,a),hr(Aa,i);const l=K_();return cr(()=>[l.value,a.value,t.name],([c,u,h],[d,_,y])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!ks(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return qu(n.default,{Component:d,route:c});const _=h.props[u],y=_?_===!0?c.params:typeof _=="function"?_(c):_:null,x=dl(d,de({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return qu(n.default,{Component:x,route:c})||x}}});function qu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const UE=FE;function WE(t){const e=SE(t.routes,t),n=t.parseQuery||PE,s=t.stringifyQuery||Vu,i=t.history,r=Gs(),o=Gs(),a=Gs(),l=z_(cn);let c=cn;fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zo.bind(null,w=>""+w),h=zo.bind(null,JC),d=zo.bind(null,bi);function _(w,N){let k,U;return Uf(w)?(k=e.getRecordMatcher(w),U=N):U=w,e.addRoute(U,k)}function y(w){const N=e.getRecordMatcher(w);N&&e.removeRoute(N)}function b(){return e.getRoutes().map(w=>w.record)}function x(w){return!!e.getRecordMatcher(w)}function A(w,N){if(N=de({},N||l.value),typeof w=="string"){const p=Yo(n,w,N.path),g=e.resolve({path:p.path},N),C=i.createHref(p.fullPath);return de(p,g,{params:d(g.params),hash:bi(p.hash),redirectedFrom:void 0,href:C})}let k;if(w.path!=null)k=de({},w,{path:Yo(n,w.path,N.path).path});else{const p=de({},w.params);for(const g in p)p[g]==null&&delete p[g];k=de({},w,{params:h(p)}),N.params=h(N.params)}const U=e.resolve(k,N),he=w.hash||"";U.params=u(d(U.params));const Se=eE(s,de({},w,{hash:zC(he),path:U.path})),f=i.createHref(Se);return de({fullPath:Se,hash:he,query:s===Vu?AE(w.query):w.query||{}},U,{redirectedFrom:void 0,href:f})}function D(w){return typeof w=="string"?Yo(n,w,l.value.path):de({},w)}function W(w,N){if(c!==w)return Ps(8,{from:N,to:w})}function z(w){return be(w)}function ee(w){return z(de(D(w),{replace:!0}))}function H(w){const N=w.matched[w.matched.length-1];if(N&&N.redirect){const{redirect:k}=N;let U=typeof k=="function"?k(w):k;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=D(U):{path:U},U.params={}),de({query:w.query,hash:w.hash,params:U.path!=null?{}:w.params},U)}}function be(w,N){const k=c=A(w),U=l.value,he=w.state,Se=w.force,f=w.replace===!0,p=H(k);if(p)return be(de(D(p),{state:typeof p=="object"?de({},he,p.state):he,force:Se,replace:f}),N||k);const g=k;g.redirectedFrom=N;let C;return!Se&&tE(s,U,k)&&(C=Ps(16,{to:g,from:U}),It(U,U,!0,!1)),(C?Promise.resolve(C):ae(g,U)).catch(v=>$t(v)?$t(v,2)?v:sn(v):le(v,g,U)).then(v=>{if(v){if($t(v,2))return be(de({replace:f},D(v.to),{state:typeof v.to=="object"?de({},he,v.to.state):he,force:Se}),N||g)}else v=F(g,U,!0,f,he);return Ne(g,U,v),v})}function G(w,N){const k=W(w,N);return k?Promise.reject(k):Promise.resolve()}function oe(w){const N=us.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(w):w()}function ae(w,N){let k;const[U,he,Se]=VE(w,N);k=Qo(U.reverse(),"beforeRouteLeave",w,N);for(const p of U)p.leaveGuards.forEach(g=>{k.push(pn(g,w,N))});const f=G.bind(null,w,N);return k.push(f),je(k).then(()=>{k=[];for(const p of r.list())k.push(pn(p,w,N));return k.push(f),je(k)}).then(()=>{k=Qo(he,"beforeRouteUpdate",w,N);for(const p of he)p.updateGuards.forEach(g=>{k.push(pn(g,w,N))});return k.push(f),je(k)}).then(()=>{k=[];for(const p of Se)if(p.beforeEnter)if(Et(p.beforeEnter))for(const g of p.beforeEnter)k.push(pn(g,w,N));else k.push(pn(p.beforeEnter,w,N));return k.push(f),je(k)}).then(()=>(w.matched.forEach(p=>p.enterCallbacks={}),k=Qo(Se,"beforeRouteEnter",w,N,oe),k.push(f),je(k))).then(()=>{k=[];for(const p of o.list())k.push(pn(p,w,N));return k.push(f),je(k)}).catch(p=>$t(p,8)?p:Promise.reject(p))}function Ne(w,N,k){a.list().forEach(U=>oe(()=>U(w,N,k)))}function F(w,N,k,U,he){const Se=W(w,N);if(Se)return Se;const f=N===cn,p=fs?history.state:{};k&&(U||f?i.replace(w.fullPath,de({scroll:f&&p&&p.scroll},he)):i.push(w.fullPath,he)),l.value=w,It(w,N,k,f),sn()}let ue;function ze(){ue||(ue=i.listen((w,N,k)=>{if(!Qi.listening)return;const U=A(w),he=H(U);if(he){be(de(he,{replace:!0}),U).catch(oi);return}c=U;const Se=l.value;fs&&cE(Ou(Se.fullPath,k.delta),go()),ae(U,Se).catch(f=>$t(f,12)?f:$t(f,2)?(be(f.to,U).then(p=>{$t(p,20)&&!k.delta&&k.type===Ii.pop&&i.go(-1,!1)}).catch(oi),Promise.reject()):(k.delta&&i.go(-k.delta,!1),le(f,U,Se))).then(f=>{f=f||F(U,Se,!1),f&&(k.delta&&!$t(f,8)?i.go(-k.delta,!1):k.type===Ii.pop&&$t(f,20)&&i.go(-1,!1)),Ne(U,Se,f)}).catch(oi)}))}let Wt=Gs(),ke=Gs(),_e;function le(w,N,k){sn(w);const U=ke.list();return U.length?U.forEach(he=>he(w,N,k)):console.error(w),Promise.reject(w)}function Vt(){return _e&&l.value!==cn?Promise.resolve():new Promise((w,N)=>{Wt.add([w,N])})}function sn(w){return _e||(_e=!w,ze(),Wt.list().forEach(([N,k])=>w?k(w):N()),Wt.reset()),w}function It(w,N,k,U){const{scrollBehavior:he}=t;if(!fs||!he)return Promise.resolve();const Se=!k&&uE(Ou(w.fullPath,0))||(U||!k)&&history.state&&history.state.scroll||null;return rl().then(()=>he(w,N,Se)).then(f=>f&&lE(f)).catch(f=>le(f,w,N))}const et=w=>i.go(w);let cs;const us=new Set,Qi={currentRoute:l,listening:!0,addRoute:_,removeRoute:y,hasRoute:x,getRoutes:b,resolve:A,options:t,push:z,replace:ee,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ke.add,isReady:Vt,install(w){const N=this;w.component("RouterLink",DE),w.component("RouterView",UE),w.config.globalProperties.$router=N,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ys(l)}),fs&&!cs&&l.value===cn&&(cs=!0,z(i.location).catch(he=>{}));const k={};for(const he in cn)Object.defineProperty(k,he,{get:()=>l.value[he],enumerable:!0});w.provide(Al,N),w.provide($f,Gh(k)),w.provide(Aa,l);const U=w.unmount;us.add(w),w.unmount=function(){us.delete(w),us.size<1&&(c=cn,ue&&ue(),ue=null,l.value=cn,cs=!1,_e=!1),U()}}};function je(w){return w.reduce((N,k)=>N.then(()=>oe(k)),Promise.resolve())}return Qi}function VE(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ks(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ks(c,l))||i.push(l))}return[n,s,i]}const $E={name:"Home"},BE=t=>(Dt("data-v-4ed4013e"),t=t(),Mt(),t),HE={class:"home"},jE=BE(()=>m("h1",null,"Welcome to The Midnight Watch",-1));function qE(t,e,n,s,i,r){const o=gt("router-link");return M(),L("div",HE,[jE,ie(o,{to:"/Login"},{default:Qe(()=>[xe("Login")]),_:1})])}const GE=bt($E,[["render",qE],["__scopeId","data-v-4ed4013e"]]);var KE="firebase",zE="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(KE,zE,"app");var Gu={};const Ku="@firebase/database",zu="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bf="";function YE(t){Bf=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new QE(e)}}catch{}return new JE},Yn=Hf("localStorage"),XE=Hf("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new gl("@firebase/database"),ZE=function(){let t=1;return function(){return t++}}(),jf=function(t){const e=ly(t),n=new iy;n.update(e);const s=n.digest();return pl.encodeByteArray(s)},Hi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Hi.apply(null,s):typeof s=="object"?e+=Me(s):e+=s,e+=" "}return e};let li=null,Yu=!0;const eb=function(t,e){I(!e,"Can't turn on custom loggers persistently."),Is.logLevel=ge.VERBOSE,li=Is.log.bind(Is)},We=function(...t){if(Yu===!0&&(Yu=!1,li===null&&XE.get("logging_enabled")===!0&&eb()),li){const e=Hi.apply(null,t);li(e)}},ji=function(t){return function(...e){We(t,...e)}},Na=function(...t){const e="FIREBASE INTERNAL ERROR: "+Hi(...t);Is.error(e)},Zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Hi(...t)}`;throw Is.error(e),new Error(e)},Ze=function(...t){const e="FIREBASE WARNING: "+Hi(...t);Is.warn(e)},tb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},nb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},As="[MIN_NAME]",ss="[MAX_NAME]",as=function(t,e){if(t===e)return 0;if(t===As||e===ss)return-1;if(e===As||t===ss)return 1;{const n=Qu(t),s=Qu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},sb=function(t,e){return t===e?0:t<e?-1:1},Ks=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},Ol=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Me(e[s]),n+=":",n+=Ol(t[e[s]]);return n+="}",n},qf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gf=function(t){I(!Nl(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ib=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ob(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const ab=new RegExp("^-?(0*)\\d{1,10}$"),lb=-2147483648,cb=2147483647,Qu=function(t){if(ab.test(t)){const e=Number(t);if(e>=lb&&e<=cb)return e}return null},Vs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},ub=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ci=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(We("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ze(e)}}class yr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="5",Kf="v",zf="s",Yf="r",Qf="f",Jf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xf="ls",Zf="p",Oa="ac",ep="websocket",tp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function sp(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===ep)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===tp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fb(t)&&(n.ns=t.namespace);const i=[];return Be(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(){this.counters_={}}incrementCounter(e,n=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $g(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo={},Xo={};function Dl(t){const e=t.toString();return Jo[e]||(Jo[e]=new pb),Jo[e]}function _b(t,e){const n=t.toString();return Xo[n]||(Xo[n]=e()),Xo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Vs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="start",gb="close",yb="pLPCommand",vb="pRTLPCB",ip="id",rp="pw",op="ser",wb="cb",Cb="seg",Eb="ts",bb="d",Ib="dframe",ap=1870,lp=30,Sb=ap-lp,Tb=25e3,Rb=3e4;class _s{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ji(e),this.stats_=Dl(n),this.urlFn=l=>(this.appCheckToken&&(l[Oa]=this.appCheckToken),sp(n,tp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Rb)),nb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ml((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ju)this.id=a,this.password=l;else if(o===gb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ju]="t",s[op]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[wb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kf]=xl,this.transportSessionId&&(s[zf]=this.transportSessionId),this.lastSessionId&&(s[Xf]=this.lastSessionId),this.applicationId&&(s[Zf]=this.applicationId),this.appCheckToken&&(s[Oa]=this.appCheckToken),typeof location<"u"&&location.hostname&&Jf.test(location.hostname)&&(s[Yf]=Qf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_s.forceAllow_=!0}static forceDisallow(){_s.forceDisallow_=!0}static isAvailable(){return _s.forceAllow_?!0:!_s.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ib()&&!rb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Md(n),i=qf(s,Sb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ib]="t",s[ip]=e,s[rp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ml{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ZE(),window[yb+this.uniqueCallbackIdentifier]=e,window[vb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ml.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){We("frame writing exception"),a.stack&&We(a.stack),We(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||We("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ip]=this.myID,e[rp]=this.myPW,e[op]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lp+s.length<=ap;){const o=this.pendingSegs.shift();s=s+"&"+Cb+i+"="+o.seg+"&"+Eb+i+"="+o.ts+"&"+bb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Tb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{We("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=16384,Pb=45e3;let Lr=null;typeof MozWebSocket<"u"?Lr=MozWebSocket:typeof WebSocket<"u"&&(Lr=WebSocket);class mt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ji(this.connId),this.stats_=Dl(n),this.connURL=mt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Kf]=xl,typeof location<"u"&&location.hostname&&Jf.test(location.hostname)&&(o[Yf]=Qf),n&&(o[zf]=n),s&&(o[Xf]=s),i&&(o[Oa]=i),r&&(o[Zf]=r),sp(e,ep,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yn.set("previous_websocket_failure",!0);try{let s;$d(),this.mySock=new Lr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Lr!==null&&!mt.forceDisallow_}static previouslyFailed(){return Yn.isInMemoryStorage||Yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=vi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qf(n,kb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Pb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_s,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mt&&mt.isAvailable();let s=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||Ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[mt];else{const i=this.transports_=[];for(const r of Si.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Si.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Si.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=6e4,Nb=5e3,Ob=10*1024,xb=100*1024,Zo="t",Xu="d",Db="s",Zu="r",Mb="e",eh="o",th="a",nh="n",sh="p",Lb="h";class Fb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ji("c:"+this.id+":"),this.transportManager_=new Si(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ci(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ob?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zo in e){const n=e[Zo];n===th?this.upgradeIfSecondaryHealthy_():n===Zu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===eh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ks("t",e),s=Ks("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:th,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ks("t",e),s=Ks("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ks(Zo,e);if(Xu in e){const s=e[Xu];if(n===Lb){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===nh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Db?this.onConnectionShutdown_(s):n===Zu?this.onReset_(s):n===Mb?Na("Server Error: "+s):n===eh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Na("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xl!==s&&Ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ci(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ab))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ci(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Nb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends up{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ml()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fr}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=32,rh=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function se(){return new ye("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pn(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function Ll(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ub(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ti(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function Te(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ye)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ye(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function Xe(t,e){const n=Q(t),s=Q(e);if(n===null)return e;if(n===s)return Xe(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Wb(t,e){const n=Ti(t,0),s=Ti(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=as(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Fl(t,e){if(Pn(t)!==Pn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ut(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Pn(t)>Pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Vb{constructor(e,n){this.errorPrefix_=n,this.parts_=Ti(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ho(this.parts_[s]);dp(this)}}function $b(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ho(e),dp(t)}function Bb(t){const e=t.parts_.pop();t.byteLength_-=ho(e),t.parts_.length>0&&(t.byteLength_-=1)}function dp(t){if(t.byteLength_>rh)throw new Error(t.errorPrefix_+"has a key path longer than "+rh+" bytes ("+t.byteLength_+").");if(t.parts_.length>ih)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ih+") or object contains a cycle "+Hn(t))}function Hn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends up{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ul}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=1e3,Hb=60*5*1e3,oh=30*1e3,jb=1.3,qb=3e4,Gb="server_kill",ah=3;class Qt extends cp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qt.nextPersistentConnectionId_++,this.log_=ji("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zs,this.maxReconnectDelay_=Hb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!$d())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ul.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Me(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Fi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Qt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Lt(e,"w")){const s=Ts(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=oh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ny(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Na("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qb&&(this.reconnectDelay_=zs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Qt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?We("getToken() completed but was canceled"):(We("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Fb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ze(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gb)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ze(h),l())}}}interrupt(e){We("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){We("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ya(this.interruptReasons_)&&(this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ol(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ye(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){We("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ah&&(this.reconnectDelay_=oh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){We("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ah&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Bf.replace(/\./g,"-")]=1,ml()?e["framework.cordova"]=1:Vd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fr.getInstance().currentlyOnline();return ya(this.interruptReasons_)&&e}}Qt.nextPersistentConnectionId_=0;Qt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new J(As,e),i=new J(As,n);return this.compare(s,i)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr;class fp extends yo{static get __EMPTY_NODE(){return rr}static set __EMPTY_NODE(e){rr=e}compare(e,n){return as(e.name,n.name)}isDefinedOn(e){throw Ls("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(ss,rr)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,rr)}toString(){return".key"}}const Ss=new fp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ue.RED,this.left=i??nt.EMPTY_NODE,this.right=r??nt.EMPTY_NODE}copy(e,n,s,i,r){return new Ue(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class Kb{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nt{constructor(e,n=nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new or(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new or(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new or(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new or(this.root_,null,this.comparator_,!0,e)}}nt.EMPTY_NODE=new Kb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t,e){return as(t.name,e.name)}function Wl(t,e){return as(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa;function Yb(t){xa=t}const pp=function(t){return typeof t=="number"?"number:"+Gf(t):"string:"+t},_p=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else I(t===xa||t.isEmpty(),"priority of unexpected type.");I(t===xa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_p(this.priorityNode_)}static set __childrenNodeConstructor(e){lh=e}static get __childrenNodeConstructor(){return lh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:Q(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||Pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gf(this.value_):e+=this.value_,this.lazyHash_=jf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),r=Fe.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mp,gp;function Qb(t){mp=t}function Jb(t){gp=t}class Xb extends yo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?as(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(ss,new Fe("[PRIORITY-POST]",gp))}makePost(e,n){const s=mp(e);return new J(n,new Fe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Re=new Xb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=Math.log(2);class eI{constructor(e){const n=r=>parseInt(Math.log(r)/Zb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ur=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ue(d,h.node,Ue.BLACK,null,null);{const _=parseInt(u/2,10)+l,y=i(l,_),b=i(_+1,c);return h=t[_],d=n?n(h):h,new Ue(d,h.node,Ue.BLACK,y,b)}},r=function(l){let c=null,u=null,h=t.length;const d=function(y,b){const x=h-y,A=h;h-=y;const D=i(x+1,A),W=t[x],z=n?n(W):W;_(new Ue(z,W.node,b,null,D))},_=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const b=l.nextBitIsOne(),x=Math.pow(2,l.count-(y+1));b?d(x,Ue.BLACK):(d(x,Ue.BLACK),d(x,Ue.RED))}return u},o=new eI(t.length),a=r(o);return new nt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;const ds={};class Gt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(ds&&Re,"ChildrenNode.ts has not been loaded"),ea=ea||new Gt({".priority":ds},{".priority":Re}),ea}get(e){const n=Ts(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nt?n:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(J.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ur(s,e.getCompare()):a=ds;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Gt(u,c)}addToIndexes(e,n){const s=kr(this.indexes_,(i,r)=>{const o=Ts(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===ds)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(J.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ur(a,o.getCompare())}else return ds;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new J(e.name,a))),l.insert(e,e.node)}});return new Gt(s,this.indexSet_)}removeFromIndexes(e,n){const s=kr(this.indexes_,i=>{if(i===ds)return i;{const r=n.get(e.name);return r?i.remove(new J(e.name,r)):i}});return new Gt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys;class j{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&_p(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ys||(Ys=new j(new nt(Wl),null,Gt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ys}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ys:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new J(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ys:this.priorityNode_;return new j(i,o,r)}}updateChild(e,n){const s=Q(e);if(s===null)return n;{I(Q(e)!==".priority"||Pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Re,(o,a)=>{n[o]=a.val(e),s++,r&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pp(this.getPriority().val())+":"),this.forEachChild(Re,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":jf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new J(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,J.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qi?-1:0}withIndex(e){if(e===Ss||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Re),i=n.getIterator(Re);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ss?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tI extends j{constructor(){super(new nt(Wl),j.EMPTY_NODE,Gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const qi=new tI;Object.defineProperties(J,{MIN:{value:new J(As,j.EMPTY_NODE)},MAX:{value:new J(ss,qi)}});fp.__EMPTY_NODE=j.EMPTY_NODE;Fe.__childrenNodeConstructor=j;Yb(qi);Jb(qi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=!0;function De(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,De(e))}if(!(t instanceof Array)&&nI){const n=[];let s=!1;if(Be(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=De(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new J(o,l)))}}),n.length===0)return j.EMPTY_NODE;const r=Ur(n,zb,o=>o.name,Wl);if(s){const o=Ur(n,Re.getCompare());return new j(r,De(e),new Gt({".priority":o},{".priority":Re}))}else return new j(r,De(e),Gt.Default)}else{let n=j.EMPTY_NODE;return Be(t,(s,i)=>{if(Lt(t,s)&&s.substring(0,1)!=="."){const r=De(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(De(e))}}Qb(De);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI extends yo{constructor(e){super(),this.indexPath_=e,I(!X(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?as(e.name,n.name):r}makePost(e,n){const s=De(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,s);return new J(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,qi);return new J(ss,e)}toString(){return Ti(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI extends yo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?as(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const s=De(e);return new J(n,s)}toString(){return".value"}}const rI=new iI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t){return{type:"value",snapshotNode:t}}function Ns(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ri(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ki(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function oI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ri(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ns(n,s)):o.trackChildChange(ki(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Re,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ri(i,r))}),n.isLeafNode()||n.forEachChild(Re,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ki(i,r,o))}else s.trackChildChange(Ns(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.indexedFilter_=new Vl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pi.getStartPost_(e),this.endPost_=Pi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new J(n,s))||(s=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const r=this;return n.forEachChild(Re,(o,a)=>{r.matches(new J(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Pi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new J(n,s))||(s=j.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new J(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ki(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ri(n,h));const b=a.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ns(d.name,d.node)),b.updateImmediateChild(d.name,d.node)):b}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ri(c.name,c.node)),r.trackChildChange(Ns(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:As}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ss}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new $l;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lI(t){return t.loadsAllData()?new Vl(t.getIndex()):t.hasLimit()?new aI(t):new Pi(t)}function ch(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Re?n="$priority":t.index_===rI?n="$value":t.index_===Ss?n="$key":(I(t.index_ instanceof sI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function uh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Re&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends cp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ji("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Wr.getListenId_(e,s),a={};this.listens_[o]=a;const l=ch(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ts(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Wr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ch(e._queryParams),s=e._path.toString(),i=new Fi;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=vi(a.responseText)}catch{Ze("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ze("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(){return{value:null,children:new Map}}function vp(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Q(e);t.children.has(s)||t.children.set(s,Vr());const i=t.children.get(s);e=Ce(e),vp(i,e,n)}}function Da(t,e,n){t.value!==null?n(e,t.value):uI(t,(s,i)=>{const r=new ye(e.toString()+"/"+s);Da(i,r,n)})}function uI(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=10*1e3,dI=30*1e3,fI=5*60*1e3;class pI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hI(e);const s=hh+(dI-hh)*Math.random();ci(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Be(e,(i,r)=>{r>0&&Lt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ci(this.reportStats_.bind(this),Math.floor(Math.random()*2*fI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vt||(vt={}));function Bl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=vt.ACK_USER_WRITE,this.source=Bl()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new $r(se(),n,this.revert)}}else return I(Q(this.path)===e,"operationForChild called for unrelated child."),new $r(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.source=e,this.path=n,this.type=vt.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new Ai(this.source,se()):new Ai(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=vt.OVERWRITE}operationForChild(e){return X(this.path)?new is(this.source,se(),this.snap.getImmediateChild(e)):new is(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=vt.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new is(this.source,se(),n.value):new Os(this.source,se(),n)}else return I(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Os(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mI(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(oI(o.childName,o.snapshotNode))}),Qs(t,i,"child_removed",e,s,n),Qs(t,i,"child_added",e,s,n),Qs(t,i,"child_moved",r,s,n),Qs(t,i,"child_changed",e,s,n),Qs(t,i,"value",e,s,n),i}function Qs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>yI(t,a,l)),o.forEach(a=>{const l=gI(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function gI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yI(t,e,n){if(e.childName==null||n.childName==null)throw Ls("Should only compare child_ events.");const s=new J(e.childName,e.snapshotNode),i=new J(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e){return{eventCache:t,serverCache:e}}function ui(t,e,n,s){return vo(new An(e,n,s),t.serverCache)}function wp(t,e,n,s){return vo(t.eventCache,new An(e,n,s))}function Br(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;const vI=()=>(ta||(ta=new nt(sb)),ta);class we{constructor(e,n=vI()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return Be(e,(s,i)=>{n=n.set(new ye(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:se(),value:this.value};if(X(e))return null;{const s=Q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ce(e),n);return r!=null?{path:Te(new ye(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=Q(e),s=this.children.get(n);return s!==null?s.subtree(Ce(e)):new we(null)}}set(e,n){if(X(e))return new we(n,this.children);{const s=Q(e),r=(this.children.get(s)||new we(null)).set(Ce(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=Q(e),s=this.children.get(n);if(s){const i=s.remove(Ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(X(e))return this.value;{const n=Q(e),s=this.children.get(n);return s?s.get(Ce(e)):null}}setTree(e,n){if(X(e))return n;{const s=Q(e),r=(this.children.get(s)||new we(null)).setTree(Ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(se(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Te(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,se(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(X(e))return null;{const r=Q(e),o=this.children.get(r);return o?o.findOnPath_(Ce(e),Te(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,se(),n)}foreachOnPath_(e,n,s){if(X(e))return this;{this.value&&s(n,this.value);const i=Q(e),r=this.children.get(i);return r?r.foreachOnPath_(Ce(e),Te(n,i),s):new we(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Te(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new we(null))}}function hi(t,e,n){if(X(e))return new wt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Xe(i,e);return r=r.updateChild(o,n),new wt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new wt(r)}}}function Ma(t,e,n){let s=t;return Be(n,(i,r)=>{s=hi(s,Te(e,i),r)}),s}function dh(t,e){if(X(e))return wt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new wt(n)}}function La(t,e){return ls(t,e)!=null}function ls(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Xe(n.path,e)):null}function fh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Re,(s,i)=>{e.push(new J(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new J(s,i.value))}),e}function Sn(t,e){if(X(e))return t;{const n=ls(t,e);return n!=null?new wt(new we(n)):new wt(t.writeTree_.subtree(e))}}function Fa(t){return t.writeTree_.isEmpty()}function xs(t,e){return Cp(se(),t.writeTree_,e)}function Cp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Cp(Te(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Te(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t,e){return Sp(e,t)}function wI(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=hi(t.visibleWrites,e,n)),t.lastWriteId=s}function CI(t,e,n,s){I(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Ma(t.visibleWrites,e,n),t.lastWriteId=s}function EI(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function bI(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&II(a,s.path)?i=!1:ut(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return SI(t),!0;if(s.snap)t.visibleWrites=dh(t.visibleWrites,s.path);else{const a=s.children;Be(a,l=>{t.visibleWrites=dh(t.visibleWrites,Te(s.path,l))})}return!0}else return!1}function II(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(Te(t.path,n),e))return!0;return!1}function SI(t){t.visibleWrites=Ep(t.allWrites,TI,se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function TI(t){return t.visible}function Ep(t,e,n){let s=wt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ut(n,o)?(a=Xe(n,o),s=hi(s,a,r.snap)):ut(o,n)&&(a=Xe(o,n),s=hi(s,se(),r.snap.getChild(a)));else if(r.children){if(ut(n,o))a=Xe(n,o),s=Ma(s,a,r.children);else if(ut(o,n))if(a=Xe(o,n),X(a))s=Ma(s,se(),r.children);else{const l=Ts(r.children,Q(a));if(l){const c=l.getChild(Ce(a));s=hi(s,se(),c)}}}else throw Ls("WriteRecord should have .snap or .children")}}return s}function bp(t,e,n,s,i){if(!s&&!i){const r=ls(t.visibleWrites,e);if(r!=null)return r;{const o=Sn(t.visibleWrites,e);if(Fa(o))return n;if(n==null&&!La(o,se()))return null;{const a=n||j.EMPTY_NODE;return xs(o,a)}}}else{const r=Sn(t.visibleWrites,e);if(!i&&Fa(r))return n;if(!i&&n==null&&!La(r,se()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ut(c.path,e)||ut(e,c.path))},a=Ep(t.allWrites,o,e),l=n||j.EMPTY_NODE;return xs(a,l)}}}function RI(t,e,n){let s=j.EMPTY_NODE;const i=ls(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Re,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Sn(t.visibleWrites,e);return n.forEachChild(Re,(o,a)=>{const l=xs(Sn(r,new ye(o)),a);s=s.updateImmediateChild(o,l)}),fh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Sn(t.visibleWrites,e);return fh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function kI(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Te(e,n);if(La(t.visibleWrites,r))return null;{const o=Sn(t.visibleWrites,r);return Fa(o)?i.getChild(n):xs(o,i.getChild(n))}}function PI(t,e,n,s){const i=Te(e,n),r=ls(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Sn(t.visibleWrites,i);return xs(o,s.getNode().getImmediateChild(n))}else return null}function AI(t,e){return ls(t.visibleWrites,e)}function NI(t,e,n,s,i,r,o){let a;const l=Sn(t.visibleWrites,e),c=ls(l,se());if(c!=null)a=c;else if(n!=null)a=xs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function OI(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function Hr(t,e,n,s){return bp(t.writeTree,t.treePath,e,n,s)}function ql(t,e){return RI(t.writeTree,t.treePath,e)}function ph(t,e,n,s){return kI(t.writeTree,t.treePath,e,n,s)}function jr(t,e){return AI(t.writeTree,Te(t.treePath,e))}function xI(t,e,n,s,i,r){return NI(t.writeTree,t.treePath,e,n,s,i,r)}function Gl(t,e,n){return PI(t.writeTree,t.treePath,e,n)}function Ip(t,e){return Sp(Te(t.treePath,e),t.writeTree)}function Sp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ki(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ri(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ns(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ki(s,e.snapshotNode,i.oldSnap));else throw Ls("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Tp=new MI;class Kl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new An(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rs(this.viewCache_),r=xI(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){return{filter:t}}function FI(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function UI(t,e,n,s,i){const r=new DI;let o,a;if(n.type===vt.OVERWRITE){const c=n;c.source.fromUser?o=Ua(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=qr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===vt.MERGE){const c=n;c.source.fromUser?o=VI(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Wa(t,e,c.path,c.children,s,i,a,r))}else if(n.type===vt.ACK_USER_WRITE){const c=n;c.revert?o=HI(t,e,c.path,s,i,r):o=$I(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===vt.LISTEN_COMPLETE)o=BI(t,e,n.path,s,r);else throw Ls("Unknown operation type: "+n.type);const l=r.getChanges();return WI(e,o,l),{viewCache:o,changes:l}}function WI(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Br(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(yp(Br(e)))}}function Rp(t,e,n,s,i,r){const o=e.eventCache;if(jr(s,n)!=null)return e;{let a,l;if(X(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=rs(e),u=c instanceof j?c:j.EMPTY_NODE,h=ql(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Hr(s,rs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Q(n);if(c===".priority"){I(Pn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ph(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ce(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ph(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Gl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ui(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function qr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=Q(n);if(!l.isCompleteForPath(n)&&Pn(n)>1)return e;const y=Ce(n),x=l.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),_,x,y,Tp,null)}const h=wp(e,c,l.isFullyInitialized()||X(n),u.filtersNodes()),d=new Kl(i,h,r);return Rp(t,h,n,i,d,a)}function Ua(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Kl(i,e,r);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ui(e,c,!0,t.filter.filtersNodes());else{const h=Q(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ui(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ce(n),_=a.getNode().getImmediateChild(h);let y;if(X(d))y=s;else{const b=u.getCompleteChild(h);b!=null?Ll(d)===".priority"&&b.getChild(hp(d)).isEmpty()?y=b:y=b.updateChild(d,s):y=j.EMPTY_NODE}if(_.equals(y))l=e;else{const b=t.filter.updateChild(a.getNode(),h,y,d,u,o);l=ui(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function _h(t,e){return t.eventCache.isCompleteForChild(e)}function VI(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Te(n,l);_h(e,Q(u))&&(a=Ua(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Te(n,l);_h(e,Q(u))||(a=Ua(t,a,u,c,i,r,o))}),a}function mh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Wa(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;X(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),y=mh(t,_,d);l=qr(t,l,new ye(h),y,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const y=e.serverCache.getNode().getImmediateChild(h),b=mh(t,y,d);l=qr(t,l,new ye(h),b,i,r,o,a)}}),l}function $I(t,e,n,s,i,r,o){if(jr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return qr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(X(n)){let c=new we(null);return l.getNode().forEachChild(Ss,(u,h)=>{c=c.set(new ye(u),h)}),Wa(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,h)=>{const d=Te(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Wa(t,e,n,c,i,r,a,o)}}function BI(t,e,n,s,i){const r=e.serverCache,o=wp(e,r.getNode(),r.isFullyInitialized()||X(n),r.isFiltered());return Rp(t,o,n,s,Tp,i)}function HI(t,e,n,s,i,r){let o;if(jr(s,n)!=null)return e;{const a=new Kl(s,e,i),l=e.eventCache.getNode();let c;if(X(n)||Q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Hr(s,rs(e));else{const h=e.serverCache.getNode();I(h instanceof j,"serverChildren would be complete if leaf node"),u=ql(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Q(n);let h=Gl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,Ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hr(s,rs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||jr(s,se())!=null,ui(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Vl(s.getIndex()),r=lI(s);this.processor_=LI(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new An(l,o.isFullyInitialized(),i.filtersNodes()),h=new An(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=vo(h,u),this.eventGenerator_=new _I(this.query_)}get query(){return this.query_}}function qI(t){return t.viewCache_.serverCache.getNode()}function GI(t){return Br(t.viewCache_)}function KI(t,e){const n=rs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function gh(t){return t.eventRegistrations_.length===0}function zI(t,e){t.eventRegistrations_.push(e)}function yh(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function vh(t,e,n,s){e.type===vt.MERGE&&e.source.queryId!==null&&(I(rs(t.viewCache_),"We should always have a full cache before handling merges"),I(Br(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=UI(t.processor_,i,e,n,s);return FI(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,kp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function YI(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Re,(r,o)=>{s.push(Ns(r,o))}),n.isFullyInitialized()&&s.push(yp(n.getNode())),kp(t,s,n.getNode(),e)}function kp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return mI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;class Pp{constructor(){this.views=new Map}}function QI(t){I(!Gr,"__referenceConstructor has already been defined"),Gr=t}function JI(){return I(Gr,"Reference.ts has not been loaded"),Gr}function XI(t){return t.views.size===0}function zl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),vh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(vh(o,e,n,s));return r}}function Ap(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Hr(n,i?s:null),l=!1;a?l=!0:s instanceof j?(a=ql(n,s),l=!1):(a=j.EMPTY_NODE,l=!1);const c=vo(new An(a,l,!1),new An(s,i,!1));return new jI(e,c)}return o}function ZI(t,e,n,s,i,r){const o=Ap(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),zI(o,n),YI(o,n)}function eS(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Nn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(yh(c,n,s)),gh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(yh(l,n,s)),gh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Nn(t)&&r.push(new(JI())(e._repo,e._path)),{removed:r,events:o}}function Np(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Tn(t,e){let n=null;for(const s of t.views.values())n=n||KI(s,e);return n}function Op(t,e){if(e._queryParams.loadsAllData())return Co(t);{const s=e._queryIdentifier;return t.views.get(s)}}function xp(t,e){return Op(t,e)!=null}function Nn(t){return Co(t)!=null}function Co(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr;function tS(t){I(!Kr,"__referenceConstructor has already been defined"),Kr=t}function nS(){return I(Kr,"Reference.ts has not been loaded"),Kr}let sS=1;class wh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=OI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Dp(t,e,n,s,i){return wI(t.pendingWriteTree_,e,n,s,i),i?$s(t,new is(Bl(),e,n)):[]}function iS(t,e,n,s){CI(t.pendingWriteTree_,e,n,s);const i=we.fromObject(n);return $s(t,new Os(Bl(),e,i))}function vn(t,e,n=!1){const s=EI(t.pendingWriteTree_,e);if(bI(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(se(),!0):Be(s.children,o=>{r=r.set(new ye(o),!0)}),$s(t,new $r(s.path,r,n))}else return[]}function Gi(t,e,n){return $s(t,new is(Hl(),e,n))}function rS(t,e,n){const s=we.fromObject(n);return $s(t,new Os(Hl(),e,s))}function oS(t,e){return $s(t,new Ai(Hl(),e))}function aS(t,e,n){const s=Ql(t,n);if(s){const i=Jl(s),r=i.path,o=i.queryId,a=Xe(r,e),l=new Ai(jl(o),a);return Xl(t,r,l)}else return[]}function zr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||xp(o,e))){const l=eS(o,e,n,s);XI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Nn(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=uS(d);for(let y=0;y<_.length;++y){const b=_[y],x=b.query,A=Up(t,b);t.listenProvider_.startListening(di(x),Ni(t,x),A.hashFn,A.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(di(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Eo(d));t.listenProvider_.stopListening(di(d),_)}))}hS(t,c)}return a}function Mp(t,e,n,s){const i=Ql(t,s);if(i!=null){const r=Jl(i),o=r.path,a=r.queryId,l=Xe(o,e),c=new is(jl(a),l,n);return Xl(t,o,c)}else return[]}function lS(t,e,n,s){const i=Ql(t,s);if(i){const r=Jl(i),o=r.path,a=r.queryId,l=Xe(o,e),c=we.fromObject(n),u=new Os(jl(a),l,c);return Xl(t,o,u)}else return[]}function Va(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const y=Xe(d,i);r=r||Tn(_,y),o=o||Nn(_)});let a=t.syncPointTree_.get(i);a?(o=o||Nn(a),r=r||Tn(a,se())):(a=new Pp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const b=Tn(y,se());b&&(r=r.updateImmediateChild(_,b))}));const c=xp(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Eo(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=dS();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=wo(t.pendingWriteTree_,i);let h=ZI(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Op(a,e);h=h.concat(fS(t,e,d))}return h}function Yl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Xe(o,e),c=Tn(a,l);if(c)return c});return bp(i,e,r,n,!0)}function cS(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Xe(c,n);s=s||Tn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Tn(i,se()):(i=new Pp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new An(s,!0,!1):null,a=wo(t.pendingWriteTree_,e._path),l=Ap(i,e,a,r?o.getNode():j.EMPTY_NODE,r);return GI(l)}function $s(t,e){return Lp(e,t.syncPointTree_,null,wo(t.pendingWriteTree_,se()))}function Lp(t,e,n,s){if(X(t.path))return Fp(t,e,n,s);{const i=e.get(se());n==null&&i!=null&&(n=Tn(i,se()));let r=[];const o=Q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ip(s,o);r=r.concat(Lp(a,l,c,u))}return i&&(r=r.concat(zl(i,t,s,n))),r}}function Fp(t,e,n,s){const i=e.get(se());n==null&&i!=null&&(n=Tn(i,se()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ip(s,o),u=t.operationForChild(o);u&&(r=r.concat(Fp(u,a,l,c)))}),i&&(r=r.concat(zl(i,t,s,n))),r}function Up(t,e){const n=e.query,s=Ni(t,n);return{hashFn:()=>(qI(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?aS(t,n._path,s):oS(t,n._path);{const r=ob(i,n);return zr(t,n,null,r)}}}}function Ni(t,e){const n=Eo(e);return t.queryToTagMap.get(n)}function Eo(t){return t._path.toString()+"$"+t._queryIdentifier}function Ql(t,e){return t.tagToQueryMap.get(e)}function Jl(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function Xl(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=wo(t.pendingWriteTree_,e);return zl(s,n,i,null)}function uS(t){return t.fold((e,n,s)=>{if(n&&Nn(n))return[Co(n)];{let i=[];return n&&(i=Np(n)),Be(s,(r,o)=>{i=i.concat(o)}),i}})}function di(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nS())(t._repo,t._path):t}function hS(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Eo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function dS(){return sS++}function fS(t,e,n){const s=e._path,i=Ni(t,e),r=Up(t,n),o=t.listenProvider_.startListening(di(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)I(!Nn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!X(c)&&u&&Nn(u))return[Co(u).query];{let d=[];return u&&(d=d.concat(Np(u).map(_=>_.query))),Be(h,(_,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(di(u),Ni(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zl(n)}node(){return this.node_}}class ec{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Te(this.path_,e);return new ec(this.syncTree_,n)}node(){return Yl(this.syncTree_,this.path_)}}const pS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ch=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _S(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mS(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_S=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},mS=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Wp=function(t,e,n,s){return tc(e,new ec(n,t),s)},Vp=function(t,e,n){return tc(t,new Zl(e),n)};function tc(t,e,n){const s=t.getPriority().val(),i=Ch(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ch(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,De(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Fe(i))),o.forEachChild(Re,(a,l)=>{const c=tc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function sc(t,e){let n=e instanceof ye?e:new ye(e),s=t,i=Q(n);for(;i!==null;){const r=Ts(s.node.children,i)||{children:{},childCount:0};s=new nc(i,s,r),n=Ce(n),i=Q(n)}return s}function Bs(t){return t.node.value}function $p(t,e){t.node.value=e,$a(t)}function Bp(t){return t.node.childCount>0}function gS(t){return Bs(t)===void 0&&!Bp(t)}function bo(t,e){Be(t.node.children,(n,s)=>{e(new nc(n,t,s))})}function Hp(t,e,n,s){n&&!s&&e(t),bo(t,i=>{Hp(i,e,!0,s)}),n&&s&&e(t)}function yS(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ki(t){return new ye(t.parent===null?t.name:Ki(t.parent)+"/"+t.name)}function $a(t){t.parent!==null&&vS(t.parent,t.name,t)}function vS(t,e,n){const s=gS(n),i=Lt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,$a(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,$a(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=/[\[\].#$\/\u0000-\u001F\u007F]/,CS=/[\[\].#$\u0000-\u001F\u007F]/,na=10*1024*1024,ic=function(t){return typeof t=="string"&&t.length!==0&&!wS.test(t)},jp=function(t){return typeof t=="string"&&t.length!==0&&!CS.test(t)},ES=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jp(t)},bS=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Nl(t)||t&&typeof t=="object"&&Lt(t,".sv")},qp=function(t,e,n,s){s&&e===void 0||Io(uo(t,"value"),e,n)},Io=function(t,e,n){const s=n instanceof ye?new Vb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Hn(s)+" with contents = "+e.toString());if(Nl(e))throw new Error(t+"contains "+e.toString()+" "+Hn(s));if(typeof e=="string"&&e.length>na/3&&ho(e)>na)throw new Error(t+"contains a string greater than "+na+" utf8 bytes "+Hn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Be(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ic(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$b(s,o),Io(t,a,s),Bb(s)}),i&&r)throw new Error(t+' contains ".value" child '+Hn(s)+" in addition to actual children.")}},IS=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Ti(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ic(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Wb);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&ut(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},SS=function(t,e,n,s){const i=uo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Be(e,(o,a)=>{const l=new ye(o);if(Io(i,a,Te(n,l)),Ll(l)===".priority"&&!bS(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),IS(i,r)},Gp=function(t,e,n,s){if(!jp(n))throw new Error(uo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TS=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gp(t,e,n)},rc=function(t,e){if(Q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},RS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ic(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ES(n))throw new Error(uo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function So(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Fl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Kp(t,e,n){So(t,n),zp(t,s=>Fl(s,e))}function dt(t,e,n){So(t,n),zp(t,s=>ut(s,e)||ut(e,s))}function zp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(PS(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();li&&We("event: "+n.toString()),Vs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="repo_interrupt",NS=25;class OS{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vr(),this.transactionQueueTree_=new nc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xS(t,e,n){if(t.stats_=Dl(t.repoInfo_),t.forceRestClient_||ub())t.server_=new Wr(t.repoInfo_,(s,i,r,o)=>{Eh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>bh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Qt(t.repoInfo_,e,(s,i,r,o)=>{Eh(t,s,i,r,o)},s=>{bh(t,s)},s=>{DS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=_b(t.repoInfo_,()=>new pI(t.stats_,t.server_)),t.infoData_=new cI,t.infoSyncTree_=new wh({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Gi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),oc(t,"connected",!1),t.serverSyncTree_=new wh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);dt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Yp(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function To(t){return pS({timestamp:Yp(t)})}function Eh(t,e,n,s,i){t.dataUpdateCount++;const r=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=kr(n,c=>De(c));o=lS(t.serverSyncTree_,r,l,i)}else{const l=De(n);o=Mp(t.serverSyncTree_,r,l,i)}else if(s){const l=kr(n,c=>De(c));o=rS(t.serverSyncTree_,r,l)}else{const l=De(n);o=Gi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ds(t,r)),dt(t.eventQueue_,a,o)}function bh(t,e){oc(t,"connected",e),e===!1&&US(t)}function DS(t,e){Be(e,(n,s)=>{oc(t,n,s)})}function oc(t,e,n){const s=new ye("/.info/"+e),i=De(n);t.infoData_.updateSnapshot(s,i);const r=Gi(t.infoSyncTree_,s,i);dt(t.eventQueue_,s,r)}function ac(t){return t.nextWriteId_++}function MS(t,e,n){const s=cS(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=De(i).withIndex(e._queryParams.getIndex());Va(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Gi(t.serverSyncTree_,e._path,r);else{const a=Ni(t.serverSyncTree_,e);o=Mp(t.serverSyncTree_,e._path,r,a)}return dt(t.eventQueue_,e._path,o),zr(t.serverSyncTree_,e,n,null,!0),r},i=>(zi(t,"get for query "+Me(e)+" failed: "+i),Promise.reject(new Error(i))))}function LS(t,e,n,s,i){zi(t,"set",{path:e.toString(),value:n,priority:s});const r=To(t),o=De(n,s),a=Yl(t.serverSyncTree_,e),l=Vp(o,a,r),c=ac(t),u=Dp(t.serverSyncTree_,e,l,c,!0);So(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const y=d==="ok";y||Ze("set at "+e+" failed: "+d);const b=vn(t.serverSyncTree_,c,!y);dt(t.eventQueue_,e,b),Ba(t,i,d,_)});const h=cc(t,e);Ds(t,h),dt(t.eventQueue_,h,[])}function FS(t,e,n,s){zi(t,"update",{path:e.toString(),value:n});let i=!0;const r=To(t),o={};if(Be(n,(a,l)=>{i=!1,o[a]=Wp(Te(e,a),De(l),t.serverSyncTree_,r)}),i)We("update() called with empty data.  Don't do anything."),Ba(t,s,"ok",void 0);else{const a=ac(t),l=iS(t.serverSyncTree_,e,o,a);So(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||Ze("update at "+e+" failed: "+c);const d=vn(t.serverSyncTree_,a,!h),_=d.length>0?Ds(t,e):e;dt(t.eventQueue_,_,d),Ba(t,s,c,u)}),Be(n,c=>{const u=cc(t,Te(e,c));Ds(t,u)}),dt(t.eventQueue_,e,[])}}function US(t){zi(t,"onDisconnectEvents");const e=To(t),n=Vr();Da(t.onDisconnect_,se(),(i,r)=>{const o=Wp(i,r,t.serverSyncTree_,e);vp(n,i,o)});let s=[];Da(n,se(),(i,r)=>{s=s.concat(Gi(t.serverSyncTree_,i,r));const o=cc(t,i);Ds(t,o)}),t.onDisconnect_=Vr(),dt(t.eventQueue_,se(),s)}function WS(t,e,n){let s;Q(e._path)===".info"?s=Va(t.infoSyncTree_,e,n):s=Va(t.serverSyncTree_,e,n),Kp(t.eventQueue_,e._path,s)}function Ih(t,e,n){let s;Q(e._path)===".info"?s=zr(t.infoSyncTree_,e,n):s=zr(t.serverSyncTree_,e,n),Kp(t.eventQueue_,e._path,s)}function VS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(AS)}function zi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),We(n,...e)}function Ba(t,e,n,s){e&&Vs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Qp(t,e,n){return Yl(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function lc(t,e=t.transactionQueueTree_){if(e||Ro(t,e),Bs(e)){const n=Xp(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$S(t,Ki(e),n)}else Bp(e)&&bo(e,n=>{lc(t,n)})}function $S(t,e,n){const s=n.map(c=>c.currentWriteId),i=Qp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Xe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{zi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(vn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ro(t,sc(t.transactionQueueTree_,e)),lc(t,t.transactionQueueTree_),dt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Vs(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ze("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ds(t,e)}},o)}function Ds(t,e){const n=Jp(t,e),s=Ki(n),i=Xp(t,n);return BS(t,i,s),s}function BS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Xe(n,l.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=NS)u=!0,h="maxretry",i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Qp(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Io("transaction failed: Data returned ",_,l.path);let y=De(_);typeof _=="object"&&_!=null&&Lt(_,".priority")||(y=y.updatePriority(d.getPriority()));const x=l.currentWriteId,A=To(t),D=Vp(y,d,A);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=D,l.currentWriteId=ac(t),o.splice(o.indexOf(x),1),i=i.concat(Dp(t.serverSyncTree_,l.path,D,l.currentWriteId,l.applyLocally)),i=i.concat(vn(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ro(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Vs(s[a]);lc(t,t.transactionQueueTree_)}function Jp(t,e){let n,s=t.transactionQueueTree_;for(n=Q(e);n!==null&&Bs(s)===void 0;)s=sc(s,n),e=Ce(e),n=Q(e);return s}function Xp(t,e){const n=[];return Zp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Zp(t,e,n){const s=Bs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);bo(e,i=>{Zp(t,i,n)})}function Ro(t,e){const n=Bs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,$p(e,n.length>0?n:void 0)}bo(e,s=>{Ro(t,s)})}function cc(t,e){const n=Ki(Jp(t,e)),s=sc(t.transactionQueueTree_,e);return yS(s,i=>{sa(t,i)}),sa(t,s),Hp(s,i=>{sa(t,i)}),n}function sa(t,e){const n=Bs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$p(e,void 0):n.length=r+1,dt(t.eventQueue_,Ki(e),i);for(let o=0;o<s.length;o++)Vs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sh=function(t,e){const n=qS(t),s=n.namespace;n.domain==="firebase.com"&&Zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new np(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ye(n.pathString)}},qS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=HS(t.substring(u,h)));const d=jS(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",GS=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Th.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Th.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class zS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return X(this._path)?null:Ll(this._path)}get ref(){return new tn(this._repo,this._path)}get _queryIdentifier(){const e=uh(this._queryParams),n=Ol(e);return n==="{}"?"default":n}get _queryObject(){return uh(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof uc))return!1;const n=this._repo===e._repo,s=Fl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ub(this._path)}}class tn extends uc{constructor(e,n){super(e,n,new $l,!1)}get parent(){const e=hp(this._path);return e===null?null:new tn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Oi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),s=xi(this.ref,e);return new Oi(this._node.getChild(n),s,Re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Oi(i,xi(this.ref,s),Re)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $e(t,e){return t=He(t),t._checkNotDeleted("ref"),e!==void 0?xi(t._root,e):t._root}function xi(t,e){return t=He(t),Q(t._path)===null?TS("child","path",e):Gp("child","path",e),new tn(t._repo,Te(t._path,e))}function Ha(t,e){t=He(t),rc("push",t._path),qp("push",e,t._path,!0);const n=Yp(t._repo),s=GS(n),i=xi(t,s),r=xi(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function t_(t){return rc("remove",t._path),Yi(t,null)}function Yi(t,e){t=He(t),rc("set",t._path),qp("set",e,t._path,!1);const n=new Fi;return LS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function n_(t,e){SS("update",e,t._path);const n=new Fi;return FS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ko(t){t=He(t);const e=new e_(()=>{}),n=new Po(e);return MS(t._repo,t,n).then(s=>new Oi(s,new tn(t._repo,t._path),t._queryParams.getIndex()))}class Po{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new KS("value",this,new Oi(e.snapshotNode,new tn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zS(this,e,n):null}matches(e){return e instanceof Po?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function YS(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Ih(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new e_(n,r||void 0),a=new Po(o);return WS(t._repo,t,a),()=>Ih(t._repo,t,a)}function QS(t,e,n,s){return YS(t,"value",e,n,s)}QI(tn);tS(tn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="FIREBASE_DATABASE_EMULATOR_HOST",ja={};let XS=!1;function ZS(t,e,n,s){t.repoInfo_=new np(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function eT(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),We("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sh(r,i),a=o.repoInfo,l;typeof process<"u"&&Gu&&(l=Gu[JS]),l?(r=`http://${l}?ns=${a.namespace}`,o=Sh(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new db(t.name,t.options,e);RS("Invalid Firebase Database URL",o),X(o.path)||Zt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=nT(a,t,c,new hb(t.name,n));return new sT(u,t)}function tT(t,e){const n=ja[e];(!n||n[t.key]!==t)&&Zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),VS(t),delete n[t.key]}function nT(t,e,n,s){let i=ja[e.name];i||(i={},ja[e.name]=i);let r=i[t.toURLString()];return r&&Zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new OS(t,XS,n,s),i[t.toURLString()]=r,r}class sT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tn(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zt("Cannot call "+e+" on a deleted database.")}}function xt(t=qd(),e){const n=vl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Kg("database");s&&iT(n,...s)}return n}function iT(t,e,n,s={}){t=He(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new yr(yr.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:zg(s.mockUserToken,t.app.options.projectId);r=new yr(o)}ZS(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){YE(Us),Rs(new Zn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return eT(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),In(Ku,zu,t),In(Ku,zu,"esm2017")}Qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rT();const nn={firebaseConfig:{apiKey:"AIzaSyC6OKfRLtntX1mzOgfPRGeQWlBQKakP8rI",authDomain:"motw-frontend-hq.firebaseapp.com",databaseURL:"https://motw-frontend-hq-default-rtdb.firebaseio.com",projectId:"motw-frontend-hq",storageBucket:"motw-frontend-hq.appspot.com",messagingSenderId:"607683384016",appId:"1:607683384016:web:334f0aa4548af6b1f884d5"}},oT={data(){return{message:"We doin our best here",email:"",password:"",name:"",showRegister:!1,errorMessage:""}},created(){this.app=Ft(nn.firebaseConfig),this.auth=Af(this.app),mw(this.auth,t=>{t?(qe.login({uid:t.uid}),this.fetchUserName(t.uid)):qe.logout()})},methods:{setCookie(t,e,n){const s=new Date;s.setTime(s.getTime()+n*24*60*60*1e3);const i=`expires=${s.toUTCString()}`;document.cookie=`${t}=${e}; ${i}; path=/`},displayMessage(t){console.log(t)},registerUser(){hw(this.auth,this.email,this.password).then(t=>{const e=t.user,n={name:this.name,email:this.email,isAdmin:!1,last_login:Date.now()},s=xt();Yi($e(s,"profiles/"+e.uid),n),qe.login({uid:e.uid,name:this.name,isAdmin:e.isAdmin}),this.errorMessage=""}).catch(t=>{this.errorMessage=t.message})},loginUser(){fw(this.auth,Cf).then(()=>dw(this.auth,this.email,this.password)).then(t=>{qe.login({uid:t.user.uid}),this.fetchUserName(t.user.uid),this.errorMessage="",localStorage.setItem("motw-uid",t.user.uid),localStorage.setItem("motw-user",JSON.stringify(t.user))}).catch(t=>{this.errorMessage=t.message})},logoutUser(){yf(this.auth).then(()=>{qe.logout(),localStorage.removeItem("motw-uid"),localStorage.removeItem("motw-user")}).catch(t=>{console.error(t)})},fetchUserName(t){console.log(128,"Fetch username");const e=xt(),n=$e(e,"profiles/"+t);ko(n).then(s=>{s.exists()?(qe.user.name=s.val().name,qe.isAdmin=s.val().isAdmin):console.log("No user data available")}).catch(s=>{console.error(s)})}},computed:{store(){return qe}}},Ao=t=>(Dt("data-v-2ca3e870"),t=t(),Mt(),t),aT={key:0,class:"input-container"},lT={key:0,class:"error"},cT=Ao(()=>m("label",{for:"email"},"Email:",-1)),uT=Ao(()=>m("label",{for:"password"},"Password:",-1)),hT={key:1},dT=Ao(()=>m("label",{for:"name"},"Name:",-1)),fT={key:2},pT={key:3,class:"cta-container"},_T=Ao(()=>m("br",null,null,-1)),mT={key:1};function gT(t,e,n,s,i,r){return M(),L("div",null,[m("h1",null,ne(i.message),1),r.store.isAuthenticated?(M(),L("div",mT,[m("p",null,"Welcome, "+ne(r.store.user.name)+"!",1),m("button",{onClick:e[6]||(e[6]=(...o)=>r.logoutUser&&r.logoutUser(...o))},"Logout")])):(M(),L("div",aT,[i.errorMessage?(M(),L("div",lT,ne(i.errorMessage),1)):fe("",!0),m("div",null,[cT,ce(m("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),id:"email"},null,512),[[pe,i.email]])]),m("div",null,[uT,ce(m("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),id:"password"},null,512),[[pe,i.password]])]),i.showRegister?(M(),L("div",hT,[dT,ce(m("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>i.name=o),id:"name"},null,512),[[pe,i.name]])])):fe("",!0),i.showRegister?(M(),L("div",fT,[m("button",{onClick:e[3]||(e[3]=(...o)=>r.registerUser&&r.registerUser(...o))},"Register")])):(M(),L("div",pT,[m("button",{onClick:e[4]||(e[4]=(...o)=>r.loginUser&&r.loginUser(...o))},"Login"),m("p",null,[xe("No account?"),_T,xe(),m("a",{href:"#",onClick:e[5]||(e[5]=Xn(o=>i.showRegister=!0,["prevent"]))},"Click here to register")])]))]))])}const yT=bt(oT,[["render",gT],["__scopeId","data-v-2ca3e870"]]),vT=Ft(nn.firebaseConfig),wT=xt(vT);function Rh(t,e){const n=t._path.pieces_.join("/"),s=$e(wT,n),i=e===void 0?null:e;return console.log("setClean",n,i),Yi(s,i)}const CT=Ft(nn.firebaseConfig),ET=xt(CT);function s_(t,e){const n=t._path.pieces_.join("/"),s=$e(ET,n),i=e===void 0?null:e;return console.log("updateClean",n,i),n_(s,i)}const bT={name:"EditCaseFiles",props:{caseToEdit:Object},data(){return{caseFile:{id:"",title:"",summary:"",details:"",status:"",objectives:"",password:"",enteredPassword:"",detailsVisible:!1,clues:[],locations:[],notes:[]},db:null}},watch:{caseToEdit:{handler(t){t&&(this.caseFile={...t},this.initializeCaseFile(this.caseFile))},immediate:!0}},created(){this.app=Ft(nn.firebaseConfig),this.db=xt(this.app)},methods:{initializeCaseFile(t){t.id||(t.id=""),t.title||(t.title=""),t.summary||(t.summary=""),t.details||(t.details=""),t.password||(t.password="")},validateCaseFile(t){var e=["id","title","summary","details","password"];for(var n of e){if(!t.hasOwnProperty(n))return console.error(`Missing property: ${n}`),!1;if(typeof t[n]!="string")return console.error(`Incorrect type for property: ${n}`),!1}return!0},saveCaseFile(){if(!this.validateCaseFile(this.caseFile)){alert("Case file data is invalid. Please check the input fields.");return}if(this.caseFile.id){var t=$e(this.db,"caseFiles/"+this.caseFile.id);s_(t,this.caseFile).then(()=>{this.resetForm(),this.$emit("saved")}).catch(s=>{console.error("Error updating case:",s)})}else{var e=$e(this.db,"caseFiles/"),n=Ha(e);console.log("New Case Ref Key:",n.key),console.log("caseFile:",this.caseFile),Rh(n,{...this.caseFile,id:n.key}).then(()=>{console.log("Data successfully written!"),this.resetForm(),this.$emit("saved")}).catch(s=>{console.error("Error adding case:",s),console.error("Error details:",s.message,s.stack)})}},saveCaseFileDebug(){var t=$e(this.db,"casemiles/"),e=Ha(t);console.log("New Case Ref Key:",e.key),console.log("caseFile:",this.caseFile),Rh(e,{...this.caseFile,id:e.key}).then(()=>{console.log("Data successfully written!"),this.resetForm(),this.$emit("saved")}).catch(n=>{console.error("Error adding case:",n),console.error("Error details:",n.message,n.stack)})},resetForm(){this.caseFile={id:"",title:"",summary:"",details:"",password:""}}}},Hs=t=>(Dt("data-v-2b517d8b"),t=t(),Mt(),t),IT={class:"edit-case-files"},ST={class:"form-group"},TT=Hs(()=>m("label",{for:"title"},"Title:",-1)),RT={class:"form-group"},kT=Hs(()=>m("label",{for:"summary"},"Summary:",-1)),PT={class:"form-group"},AT=Hs(()=>m("label",{for:"objectives"},"Objectives:",-1)),NT={class:"form-group"},OT=Hs(()=>m("label",{for:"status"},"Status:",-1)),xT={class:"form-group"},DT=Hs(()=>m("label",{for:"details"},"Details:",-1)),MT={class:"form-group"},LT=Hs(()=>m("label",{for:"password"},"Password:",-1)),FT={type:"submit"};function UT(t,e,n,s,i,r){return M(),L("div",IT,[m("h1",null,ne(i.caseFile.id?"Edit":"Add")+" Case File",1),m("form",{onSubmit:e[6]||(e[6]=Xn((...o)=>r.saveCaseFile&&r.saveCaseFile(...o),["prevent"]))},[m("div",ST,[TT,ce(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.caseFile.title=o),id:"title",autocomplete:"off",required:""},null,512),[[pe,i.caseFile.title]])]),m("div",RT,[kT,ce(m("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>i.caseFile.summary=o),id:"summary",required:""},null,512),[[pe,i.caseFile.summary]])]),m("div",PT,[AT,ce(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.caseFile.objectives=o),id:"objectives"},null,512),[[pe,i.caseFile.objectives]])]),m("div",NT,[OT,ce(m("textarea",{"onUpdate:modelValue":e[3]||(e[3]=o=>i.caseFile.status=o),id:"status"},null,512),[[pe,i.caseFile.status]])]),m("div",xT,[DT,ce(m("textarea",{"onUpdate:modelValue":e[4]||(e[4]=o=>i.caseFile.details=o),id:"details",required:""},null,512),[[pe,i.caseFile.details]])]),m("div",MT,[LT,ce(m("input",{type:"password","onUpdate:modelValue":e[5]||(e[5]=o=>i.caseFile.password=o),id:"password",autocomplete:"off",required:""},null,512),[[pe,i.caseFile.password]])]),m("button",FT,ne(i.caseFile.id?"Update":"Add")+" Case File",1)],32)])}const WT=bt(bT,[["render",UT],["__scopeId","data-v-2b517d8b"]]),Yr=(t,e,n)=>{const s=new Date;s.setTime(s.getTime()+n*24*60*60*1e3);const i=`expires=${s.toUTCString()}`;document.cookie=`${t}=${e}; ${i}; path=/`},Kn=t=>{var e=document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return e?e[2]:null},VT={name:"CaseFiles",components:{EditCaseFiles:WT},data(){return{caseFiles:[],caseToEdit:null,isAdmin:qe.isAdmin}},created(){this.app=Ft(nn.firebaseConfig),this.db=xt(this.app),this.fetchCaseFiles()},methods:{fetchCaseFiles(){var t=$e(this.db,"caseFiles");QS(t,e=>{var n=e.val();if(console.log("Fetched data:",n),n){let i=[];for(var s in n)n.hasOwnProperty(s)&&i.push({id:s,...n[s],enteredPassword:"",detailsVisible:!1});console.log("Processed caseFilesArray:",i),this.caseFiles=i}else this.caseFiles=[];console.log("Updated caseFiles:",this.caseFiles)},e=>{console.error("Error fetching case files:",e)})},editCaseFile(t){this.caseToEdit={...t}},deleteCaseFile(t){var e=$e(this.db,"caseFiles/"+t);t_(e).catch(n=>console.error("Error deleting case:",n))},unlockDetails(t){t.enteredPassword===t.password?(t.detailsVisible=!0,Yr(t.id,"detailsVisible = true")):alert("Incorrect password")},checkVisibility(t){var e=Kn(t.id);e!==null&&e.indexOf("detailsVisible")>-1&&(t.detailsVisible=!0)}}},$T=t=>(Dt("data-v-32efd8ea"),t=t(),Mt(),t),BT={class:"case-files"},HT=$T(()=>m("h1",null,"Case Files",-1)),jT={key:0},qT=["onUpdate:modelValue"],GT=["onClick"],KT={key:2},zT={key:3},YT={key:0,class:"btn-container"},QT=["onClick"],JT=["onClick"];function XT(t,e,n,s,i,r){const o=gt("edit-case-files"),a=gt("router-link");return M(),L("div",BT,[HT,i.isAdmin?(M(),L("div",jT,[ie(o,{caseToEdit:i.caseToEdit,onSaved:r.fetchCaseFiles},null,8,["caseToEdit","onSaved"])])):fe("",!0),m("ul",null,[(M(!0),L(Oe,null,Bt(i.caseFiles,l=>(M(),L("li",{class:"casefile-item",key:l.id},[xe(ne(r.checkVisibility(l))+" ",1),m("h2",null,ne(l.title),1),m("p",null,"Summary: "+ne(l.summary),1),m("div",null,[l.detailsVisible?fe("",!0):ce((M(),L("input",{key:0,type:"password","onUpdate:modelValue":c=>l.enteredPassword=c,placeholder:"Enter password to view details"},null,8,qT)),[[pe,l.enteredPassword]]),l.detailsVisible?fe("",!0):(M(),L("button",{key:1,onClick:c=>r.unlockDetails(l)},"Unlock Details",8,GT)),l.detailsVisible?(M(),L("p",KT,"Status: "+ne(l.status),1)):fe("",!0),l.detailsVisible?(M(),L("p",zT,"Details: "+ne(l.details),1)):fe("",!0),l.detailsVisible?(M(),ul(a,{key:4,to:"/case-files/"+l.id},{default:Qe(()=>[xe("Read more")]),_:2},1032,["to"])):fe("",!0)]),i.isAdmin?(M(),L("div",YT,[m("button",{onClick:c=>r.editCaseFile(l)},"Edit",8,QT),m("button",{onClick:c=>r.deleteCaseFile(l.id)},"Delete",8,JT)])):fe("",!0)]))),128))])])}const i_=bt(VT,[["render",XT],["__scopeId","data-v-32efd8ea"]]),ZT={name:"EditBeast",data(){return{beast:{name:"",image:"",description:"",stats:"",details:"",detailsPassword:"",entryPassword:""},db:null}},props:{beastToEdit:Object},watch:{beastToEdit:{handler(t){this.beast={...t}},immediate:!0}},created(){this.app=Ft(nn.firebaseConfig),this.db=xt(this.app)},methods:{saveBeast(){if(this.beast.id){const t=$e(this.db,"bestiary/"+this.beast.id);n_(t,this.beast).then(()=>{this.resetForm(),this.$emit("saved")}).catch(e=>{console.error("Error updating beast:",e)})}else{const t=$e(this.db,"bestiary"),e=Ha(t);Yi(e,this.beast).then(()=>{this.resetForm(),this.$emit("saved")}).catch(n=>{console.error("Error adding beast:",n)})}},resetForm(){this.beast={name:"",image:"",description:"",stats:"",details:"",detailsPassword:"",entryPassword:""}}}},Fn=t=>(Dt("data-v-8db04495"),t=t(),Mt(),t),eR={class:"edit-beast"},tR={class:"form-group"},nR=Fn(()=>m("label",{for:"name"},"Name:",-1)),sR={class:"form-group"},iR=Fn(()=>m("label",{for:"image"},"Image URL:",-1)),rR={class:"form-group"},oR=Fn(()=>m("label",{for:"description"},"Description:",-1)),aR={class:"form-group"},lR=Fn(()=>m("label",{for:"stats"},"Stats:",-1)),cR={class:"form-group"},uR=Fn(()=>m("label",{for:"details"},"Details:",-1)),hR={class:"form-group"},dR=Fn(()=>m("label",{for:"detailsPassword"},"Details Password:",-1)),fR={class:"form-group"},pR=Fn(()=>m("label",{for:"entryPassword"},"Entry Password:",-1)),_R=Fn(()=>m("button",{type:"submit"},"Save Beast",-1));function mR(t,e,n,s,i,r){return M(),L("div",eR,[m("form",{onSubmit:e[7]||(e[7]=Xn((...o)=>r.saveBeast&&r.saveBeast(...o),["prevent"]))},[m("div",tR,[nR,ce(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.beast.name=o),id:"name",required:""},null,512),[[pe,i.beast.name]])]),m("div",sR,[iR,ce(m("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>i.beast.image=o),id:"image",required:""},null,512),[[pe,i.beast.image]])]),m("div",rR,[oR,ce(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.beast.description=o),id:"description",required:""},null,512),[[pe,i.beast.description]])]),m("div",aR,[lR,ce(m("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>i.beast.stats=o),id:"stats",required:""},null,512),[[pe,i.beast.stats]])]),m("div",cR,[uR,ce(m("textarea",{"onUpdate:modelValue":e[4]||(e[4]=o=>i.beast.details=o),id:"details"},null,512),[[pe,i.beast.details]])]),m("div",hR,[dR,ce(m("input",{type:"password","onUpdate:modelValue":e[5]||(e[5]=o=>i.beast.detailsPassword=o),id:"detailsPassword"},null,512),[[pe,i.beast.detailsPassword]])]),m("div",fR,[pR,ce(m("input",{type:"password","onUpdate:modelValue":e[6]||(e[6]=o=>i.beast.entryPassword=o),id:"entryPassword"},null,512),[[pe,i.beast.entryPassword]])]),_R],32)])}const gR=bt(ZT,[["render",mR],["__scopeId","data-v-8db04495"]]),yR={name:"Bestiary",components:{EditBeast:gR},data(){return{beasts:[],beastToEdit:null,db:null,isAdmin:qe.isAdmin}},created(){this.app=Ft(nn.firebaseConfig),this.db=xt(this.app),this.fetchBeasts(),this.checkAdmin()},methods:{fetchBeasts(){const t=$e(this.db,"bestiary");ko(t).then(e=>{if(e.exists()){const n=e.val();this.beasts=Object.keys(n).map(s=>({id:s,...n[s],detailsVisible:!1,entryVisible:!n[s].entryPassword,entryPasswordInput:"",detailsPasswordInput:""}))}}).catch(e=>{console.error("Error fetching beasts:",e)})},editBeast(t){this.beastToEdit={...t}},deleteBeast(t){const e=$e(this.db,"bestiary/"+t);t_(e).then(()=>{this.fetchBeasts()}).catch(n=>{console.error("Error deleting beast:",n)})},checkAdmin(){console.log("Admin check",qe.isAdmin),this.isAdmin=qe.isAdmin},checkVisibility(t){Kn(t.id),console.log(Kn(t.id)),Kn(t.id)!=null&&(Kn(t.id).indexOf("detailsVisible")>-1?(t.entryVisible=!0,t.detailsVisible=!0):Kn(t.id).indexOf("entryVisible")>-1&&(t.entryVisible=!0))},unlockEntry(t){t.entryPasswordInput===t.entryPassword||!t.entryPassword?(t.entryVisible=!0,Yr(t.id,"entryVisible = true")):alert("Incorrect password!")},unlockDetails(t){t.detailsPasswordInput===t.detailsPassword||!t.detailsPassword?(t.detailsVisible=!0,Yr(t.id,"detailsVisible = true")):alert("Incorrect password!")}}},r_=t=>(Dt("data-v-a9d7ee9a"),t=t(),Mt(),t),vR={class:"bestiary"},wR=r_(()=>m("div",{class:"header"},[m("h1",null,"Bestiary")],-1)),CR={class:"content"},ER={key:0},bR={key:1},IR=r_(()=>m("h2",null,"Beasts",-1)),SR={key:0},TR=["onUpdate:modelValue"],RR=["onClick"],kR={key:1},PR=["src","alt"],AR={key:0},NR=["onUpdate:modelValue"],OR=["onClick"],xR={key:1},DR={key:2},MR={key:3},LR=["onClick"],FR=["onClick"];function UR(t,e,n,s,i,r){const o=gt("edit-beast");return M(),L("div",vR,[wR,m("div",CR,[i.isAdmin?(M(),L("div",ER,[ie(o,{beastToEdit:i.beastToEdit,onSaved:r.fetchBeasts},null,8,["beastToEdit","onSaved"])])):fe("",!0),i.beasts.length?(M(),L("div",bR,[IR,m("ul",null,[(M(!0),L(Oe,null,Bt(i.beasts,a=>(M(),L("li",{key:a.id,class:"beast-item"},[xe(ne(r.checkVisibility(a))+" ",1),a.entryVisible?fe("",!0):(M(),L("div",SR,[ce(m("input",{"onUpdate:modelValue":l=>a.entryPasswordInput=l,type:"password",placeholder:"Enter password to view beast"},null,8,TR),[[pe,a.entryPasswordInput]]),m("button",{onClick:l=>r.unlockEntry(a)},"Unlock Beast",8,RR)])),a.entryVisible?(M(),L("div",kR,[m("h3",null,ne(a.name),1),m("img",{src:a.image,alt:a.name},null,8,PR),m("p",null,ne(a.description),1),a.details&&!a.detailsVisible?(M(),L("div",AR,[ce(m("input",{"onUpdate:modelValue":l=>a.detailsPasswordInput=l,type:"password",placeholder:"Enter password to view details"},null,8,NR),[[pe,a.detailsPasswordInput]]),m("button",{onClick:l=>r.unlockDetails(a)},"Unlock Details",8,OR)])):fe("",!0),a.detailsVisible?(M(),L("div",xR,[m("p",null,"Details: "+ne(a.details),1)])):fe("",!0),a.detailsVisible?(M(),L("p",DR,"Stats: "+ne(a.stats),1)):fe("",!0),i.isAdmin?(M(),L("div",MR,[m("button",{onClick:l=>r.editBeast(a)},"Edit",8,LR),m("button",{onClick:l=>r.deleteBeast(a.id)},"Delete",8,FR)])):fe("",!0)])):fe("",!0)]))),128))])])):fe("",!0)])])}const o_=bt(yR,[["render",UR],["__scopeId","data-v-a9d7ee9a"]]),WR=[{name:"The Chosen",description:"Your birth was prophesied. You are the Chosen One, and with your abilities, you can save the world. If you fail, all will be destroyed. It all rests on you. Only you.",moves:[{name:"Destiny’s Plaything",description:"At the beginning of each mystery, roll +Weird to see what is revealed about your immediate future."},{name:"I’m Here For A Reason",description:"There’s something you are meant to do; work out the signs to find out what."},{name:"The Big Entrance",description:"When you make a showy entrance, roll +Charm."},{name:"Devastating",description:"When you inflict harm, you inflict +1 harm."},{name:"Dutiful",description:"You gain +1 ongoing while you follow a duty."},{name:"Invincible",description:"You always count as having 2-armour."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Protective gear worth 1-armour","Special weapon"],ratings:["Charm+2, Cool-1, Sharp+1, Tough+2, Weird-1","Charm-1, Cool+2, Sharp+1, Tough+2, Weird-1","Charm+1, Cool+2, Sharp+1, Tough+1, Weird-1","Charm-1, Cool+1, Sharp+2, Tough-1, Weird+2","Charm+1, Cool+2, Sharp-1, Tough-1, Weird+2"],special:"When you spend a point of Luck, the Keeper will bring your fate into play."},{name:"The Crooked",description:"“Yeah, I’ve been around the block. A bit of this, a bit of that. When I came across the secret underworld of monsters and magic… well… it wasn’t so different from the underworld I already knew. It was easy to find an angle, just like before.”",moves:[{name:"Hoodlum",description:"When you get into trouble, roll +Cool."},{name:"Burglar",description:"When you break into a secure location, roll +Cool."},{name:"Grifter",description:"When you try to dupe someone, roll +Charm."},{name:"Fixer",description:"When you need something, roll +Sharp."},{name:"Assassin",description:"When you attack from ambush, roll +Cool."},{name:"Charlatan",description:"When you try to lie to someone, roll +Charm."},{name:"Pickpocket",description:"When you try to steal something, roll +Cool."}],gear:[".22 revolver (1-harm close reload small)",".38 revolver (2-harm close reload loud)","9mm (2-harm close loud)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)","Big knife (1-harm hand)","Baseball bat (1-harm hand)","Submachinegun (2-harm close reload area)","Assault rifle (3-harm close/far area)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +1, Tough +2, Weird 0","Charm -1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird -1","Charm +2, Cool 0, Sharp +1, Tough -1, Weird +1"],special:"Whenever you spend a Luck point, someone from your past will re-appear in your life. Soon."},{name:"The Divine",description:"An agent of a higher power, sent to fight evil. You have a mission and heavenly powers to back you up.",moves:[{name:"Angel Wings",description:"You can go instantly to anywhere you’ve visited before, or to a person you know well. When you carry one or two people with you, roll +Weird."},{name:"Smite",description:"Your body and divine weapon always count as a weakness against the monsters you fight."},{name:"Soothe",description:"When you talk to someone for a few seconds in a quiet voice, you can calm them down, blocking any panic, anger, or other negative emotions."},{name:"What I Need, When I Need It",description:"You may store any useful item or piece of information somewhere close at hand."},{name:"Lay On Hands",description:"Your touch can heal injury and disease. When you lay your hands on someone hurt, roll +Cool."},{name:"Angel’s Call",description:"You can summon an angelic ally to assist you. Roll +Weird."}],gear:["Divine weapon (3-harm hand messy holy)","Holy armor (1-armour holy)"],ratings:["Charm +2, Cool +1, Sharp +0, Tough +2, Weird -1","Charm +1, Cool +2, Sharp +0, Tough +2, Weird -1","Charm +2, Cool +1, Sharp +1, Tough +0, Weird +1","Charm +0, Cool +1, Sharp +2, Tough +1, Weird -1","Charm +2, Cool +0, Sharp +1, Tough +2, Weird -1"],special:"When you spend a point of Luck, your higher power gives you a vision about the current mystery."},{name:"The Flake",description:"You see patterns that others don’t. You’re the one who connects the dots and sees the truth about the world.",moves:[{name:"Connect the Dots",description:"You see patterns that others don’t. You’re the one who connects the dots and sees the truth about the world."},{name:"Crazy Eyes",description:"When you use your sharp gaze to study something, roll +Sharp."},{name:"Net Friends",description:"When you contact your network of friends, roll +Charm."},{name:"Sneaky",description:"When you try to be sneaky, roll +Cool."},{name:"Suspicious Mind",description:"When you try to figure out if someone is lying, roll +Sharp."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Often Overlooked",description:"When you act all quiet and out of the way, roll +Cool."}],gear:["Hunting rifle (2-harm far loud)","Shotgun (3-harm close messy)","Big knife (1-harm hand)","Baseball bat (1-harm hand)"],ratings:["Charm +1, Cool +2, Sharp +1, Tough 0, Weird -1","Charm -1, Cool +2, Sharp +2, Tough 0, Weird 0","Charm +2, Cool +1, Sharp +2, Tough -1, Weird 0","Charm +1, Cool +1, Sharp +2, Tough 0, Weird +1"],special:"Whenever you spend a Luck point, you have a vision about the current mystery."},{name:"The Expert",description:"You have devoted your life to researching the supernatural and finding ways to deal with it. You have the knowledge and the tools to deal with these threats.",moves:[{name:"I’ve Read About This Sort of Thing",description:"You’ve read books, and you can use that knowledge."},{name:"Preparedness",description:"If you need something unusual, roll +Sharp."},{name:"Always the Victim",description:"When you’re attacked, roll +Cool."},{name:"Dark Past",description:"When you look into your past lives, roll +Weird."},{name:"Often Right",description:"When you’re right about something, gain +1 ongoing."},{name:"Soothe",description:"When you talk to someone for a few seconds, roll +Charm."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."}],gear:["Shotgun (3-harm close messy)","Big knife (1-harm hand)","Sword (3-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, something you have prepared comes in handy."},{name:"The Initiate",description:"You are part of an ancient secret order that fights against the darkness. You have access to their knowledge and resources.",moves:[{name:"Ancient Fighting Arts",description:"You have been trained to fight with ancient weapons. Roll +Tough."},{name:"Fortunes",description:"When you seek your order’s knowledge, roll +Weird."},{name:"Mentor",description:"You have a mentor who can help you. Roll +Charm."},{name:"Apprentice",description:"You are training someone. Roll +Sharp."},{name:"Sacred Oath",description:"You have sworn a sacred oath. Roll +Cool."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Big knife (1-harm hand)","Sword (2-harm hand)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your order provides you with valuable information or resources."},{name:"The Monstrous",description:"You are a creature of the night, but you fight for the good guys. You have supernatural abilities and a dark side.",moves:[{name:"Immortal",description:"You do not age, and you cannot die of old age. Roll +Weird."},{name:"Unholy Strength",description:"You have inhuman strength. Roll +Tough."},{name:"Preternatural Speed",description:"You have inhuman speed. Roll +Cool."},{name:"Dark Negotiator",description:"You can make deals with dark powers. Roll +Charm."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."},{name:"Natural Attack",description:"You have a natural attack. Roll +Tough."}],gear:["Claws (3-harm hand)","Fangs (2-harm intimate)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your dark side’s needs come to the fore."},{name:"The Mundane",description:"You are an ordinary person, caught up in the world of monsters and magic.",moves:[{name:"Always the Victim",description:"When you’re attacked, roll +Cool."},{name:"Don’t Worry, I’ll Check It Out",description:"When you go off alone to check out somewhere, roll +Cool."},{name:"Let’s Get Out of Here",description:"When you lead people out of danger, roll +Charm."},{name:"What Could Go Wrong?",description:"When you charge into immediate danger without hedging your bets, roll +Cool."},{name:"Trust Me",description:"When you tell a normal person the truth in order to protect them, roll +Charm."},{name:"Panic Button",description:"When you need to escape, roll +Cool."},{name:"The Power of Heart",description:"When fighting a monster, if you help someone, roll +Charm."}],gear:["Kitchen knife (1-harm hand)","Baseball bat (1-harm hand)","Fire axe (3-harm hand heavy)","Chainsaw (3-harm hand messy heavy)"],ratings:["Charm +2, Cool 0, Sharp +1, Tough 0, Weird -1","Charm +1, Cool +2, Sharp 0, Tough 0, Weird -1","Charm +2, Cool +1, Sharp 0, Tough -1, Weird 0","Charm +2, Cool 0, Sharp -1, Tough +1, Weird 0"],special:"Whenever you spend a Luck point, something goes terribly wrong."},{name:"The Professional",description:"You work for an organization that fights the supernatural. You have the training and resources to deal with these threats.",moves:[{name:"Battlefield Awareness",description:"You always know what’s happening around you. Roll +Sharp."},{name:"Tactical Genius",description:"When you plan a combat situation, roll +Sharp."},{name:"Heavy Weapons",description:"You are trained in the use of heavy weapons. Roll +Tough."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."},{name:"Cool Under Pressure",description:"You can take a moment to center yourself. Roll +Cool."}],gear:["Assault rifle (3-harm close/far area)","Submachinegun (2-harm close area)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)"],ratings:["Charm +1, Cool +2, Sharp +1, Tough 0, Weird -1","Charm -1, Cool +2, Sharp +2, Tough 0, Weird 0","Charm +2, Cool +1, Sharp +2, Tough -1, Weird 0","Charm +1, Cool +1, Sharp +2, Tough 0, Weird +1"],special:"Whenever you spend a Luck point, your organization provides you with valuable resources or support."},{name:"The Spooky",description:"You have psychic or supernatural abilities, but they come with a cost. Your powers are both a blessing and a curse.",moves:[{name:"Premonitions",description:"You get premonitions of danger. Roll +Weird."},{name:"The Big Whammy",description:"You can use your powers as a weapon. Roll +Weird."},{name:"Hex",description:"You can cast hexes. Roll +Weird."},{name:"The Sight",description:"You can see the invisible, especially spirits and magical influences. Roll +Weird."},{name:"Jinx",description:"You can encourage coincidences to occur, the way you want. Roll +Weird."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Protective amulet (1-armour)","Ancient weapon (2-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your powers backfire in a dangerous way."},{name:"The Wronged",description:"You have suffered at the hands of the supernatural, and now you seek revenge. You are driven by anger and a need for justice.",moves:[{name:"I Know My Prey",description:"You have learned about your prey through personal experience. Roll +Sharp."},{name:"Berserk",description:"When you are enraged, you can fight without any concern for your own safety. Roll +Tough."},{name:"NEVER AGAIN",description:"In combat, you may choose to protect someone without rolling. Roll +Tough."},{name:"What Does Not Kill Me…",description:"If you survive an injury, you gain +1 forward. Roll +Cool."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Hunting rifle (2-harm far loud)","Shotgun (3-harm close messy)","Big knife (1-harm hand)","Baseball bat (1-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, you are driven to a reckless course of action."}],VR={name:"Profile",data(){return{profile:{name:"",age:"",background:"",playbook:""},playbooks:WR,selectedPlaybook:null,db:null,userId:localStorage.getItem("motw-uid")}},created(){this.app=Ft(nn.firebaseConfig),this.db=xt(this.app),this.fetchProfile()},methods:{fetchProfile(){const t=$e(this.db,"profiles/"+this.userId);ko(t).then(e=>{e.exists()?(this.profile=e.val(),this.selectPlaybook()):console.log("No profile data available")}).catch(e=>{console.error("Error fetching profile:",e)})},saveProfile(){const t=$e(this.db,"profiles/"+this.userId);Yi(t,this.profile).catch(e=>{console.error("Error saving profile:",e)})},selectPlaybook(){this.selectedPlaybook=this.playbooks.find(t=>t.name===this.profile.playbook)}}},Ut=t=>(Dt("data-v-0a6d1889"),t=t(),Mt(),t),$R={class:"profile"},BR=Ut(()=>m("h1",null,"Hunter Profile",-1)),HR={class:"form-group"},jR=Ut(()=>m("label",{for:"name"},"Name:",-1)),qR={class:"form-group"},GR=Ut(()=>m("label",{for:"age"},"Age:",-1)),KR={class:"form-group"},zR=Ut(()=>m("label",{for:"background"},"Background:",-1)),YR={class:"form-group"},QR=Ut(()=>m("label",{for:"playbook"},"Playbook:",-1)),JR=["value"],XR={key:0},ZR={class:"playbook-details"},e0=Ut(()=>m("h3",null,"Moves:",-1)),t0=Ut(()=>m("h3",null,"Gear:",-1)),n0=Ut(()=>m("h3",null,"Ratings:",-1)),s0=Ut(()=>m("h3",null,"Special:",-1)),i0=Ut(()=>m("button",{type:"submit"},"Save Profile",-1));function r0(t,e,n,s,i,r){return M(),L("div",$R,[BR,m("form",{onSubmit:e[5]||(e[5]=Xn((...o)=>r.saveProfile&&r.saveProfile(...o),["prevent"]))},[m("div",HR,[jR,ce(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.profile.name=o),id:"name",required:""},null,512),[[pe,i.profile.name]])]),m("div",qR,[GR,ce(m("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=o=>i.profile.age=o),id:"age",required:""},null,512),[[pe,i.profile.age]])]),m("div",KR,[zR,ce(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.profile.background=o),id:"background",required:""},null,512),[[pe,i.profile.background]])]),m("div",YR,[QR,ce(m("select",{"onUpdate:modelValue":e[3]||(e[3]=o=>i.profile.playbook=o),id:"playbook",onChange:e[4]||(e[4]=(...o)=>r.selectPlaybook&&r.selectPlaybook(...o))},[(M(!0),L(Oe,null,Bt(i.playbooks,o=>(M(),L("option",{key:o.name,value:o.name},ne(o.name),9,JR))),128))],544),[[Ng,i.profile.playbook]])]),i.selectedPlaybook?(M(),L("div",XR,[m("div",ZR,[m("h2",null,ne(i.selectedPlaybook.name),1),m("p",null,ne(i.selectedPlaybook.description),1),e0,m("ul",null,[(M(!0),L(Oe,null,Bt(i.selectedPlaybook.moves,o=>(M(),L("li",{key:o.name},[m("strong",null,ne(o.name),1),xe(": "+ne(o.description),1)]))),128))]),t0,m("ul",null,[(M(!0),L(Oe,null,Bt(i.selectedPlaybook.gear,o=>(M(),L("li",{key:o},ne(o),1))),128))]),n0,m("ul",null,[(M(!0),L(Oe,null,Bt(i.selectedPlaybook.ratings,o=>(M(),L("li",{key:o},ne(o),1))),128))]),s0,m("p",null,ne(i.selectedPlaybook.special),1)])])):fe("",!0),i0],32)])}const a_=bt(VR,[["render",r0],["__scopeId","data-v-0a6d1889"]]),o0={name:"Dashboard",components:{CaseFiles:i_,Bestiary:o_,Profile:a_}},l_=t=>(Dt("data-v-6888b0ce"),t=t(),Mt(),t),a0={class:"dashboard"},l0=l_(()=>m("div",{class:"header"},[m("h1",{class:"title"},"Dashboard")],-1)),c0={class:"menu"},u0={class:"dashboard-sections"},h0={class:"dashboard-section"},d0={class:"dashboard-section"},f0={class:"dashboard-section"},p0=l_(()=>m("div",{class:"footer"},[m("p",null,"© 2024 The Night Watch")],-1));function _0(t,e,n,s,i,r){const o=gt("router-link"),a=gt("case-files"),l=gt("profile"),c=gt("bestiary");return M(),L("div",a0,[l0,m("ul",c0,[m("li",null,[ie(o,{to:"/case-files"},{default:Qe(()=>[xe("Case Files")]),_:1})]),m("li",null,[ie(o,{to:"/bestiary"},{default:Qe(()=>[xe("Bestiary")]),_:1})]),m("li",null,[ie(o,{to:"/profile"},{default:Qe(()=>[xe("Profile")]),_:1})])]),m("main",null,[m("div",u0,[m("div",h0,[ie(a)]),m("div",d0,[ie(l)]),m("div",f0,[ie(c)])])]),p0])}const m0=bt(o0,[["render",_0],["__scopeId","data-v-6888b0ce"]]),g0={name:"CaseDetail",props:["id"],data(){return{caseFile:null,newNote:"",newClue:{summary:"",details:"",password:""},newLocation:{name:"",description:""},isAdmin:qe.isAdmin}},created(){this.app=Ft(nn.firebaseConfig),this.db=xt(this.app),this.fetchCaseFile()},methods:{fetchCaseFile(){var t=$e(this.db,"caseFiles/"+this.id);ko(t).then(e=>{e.exists()?(this.caseFile=e.val(),this.caseFile.notes||(this.caseFile.notes=[]),this.caseFile.clues||(this.caseFile.clues=[]),this.caseFile.locations||(this.caseFile.locations=[])):console.log("No case data available")}).catch(e=>{console.error("Error fetching case:",e)})},addNote(){var t={content:this.newNote,timestamp:Date.now()};this.caseFile.notes.push(t),this.updateCaseFile(),this.newNote=""},addClue(){var t={id:Date.now().toString(),summary:this.newClue.summary,details:this.newClue.details,password:this.newClue.password,detailsVisible:!1,enteredPassword:""};this.caseFile.clues.push(t),this.updateCaseFile(),this.newClue={summary:"",details:"",password:""}},unlockClue(t){t.enteredPassword===t.password?(t.detailsVisible=!0,Yr(t.id,"detailsVisible = true")):alert("Incorrect password")},addLocation(){var t={name:this.newLocation.name,description:this.newLocation.description};this.caseFile.locations.push(t),this.updateCaseFile(),this.newLocation={name:"",description:""}},updateCaseFile(){var t=$e(this.db,"caseFiles/"+this.id);s_(t,this.caseFile).catch(e=>{console.error("Error updating case:",e)})},checkVisibility(t){var e=Kn(t.id);e!==null&&e.indexOf("detailsVisible")>-1&&(t.detailsVisible=!0)}}},ot=t=>(Dt("data-v-91c9c25c"),t=t(),Mt(),t),y0={key:0,class:"case-detail"},v0={class:"locations"},w0=ot(()=>m("h2",null,"Locations",-1)),C0=ot(()=>m("label",{for:"location-name"},"Location Name:",-1)),E0=ot(()=>m("label",{for:"location-description"},"Location Description:",-1)),b0=ot(()=>m("button",{type:"submit"},"Add Location",-1)),I0={class:"clues"},S0=ot(()=>m("h2",null,"Clues",-1)),T0=["onUpdate:modelValue"],R0=["onClick"],k0={key:2},P0={key:0},A0=ot(()=>m("h3",null,"Add a Clue",-1)),N0=ot(()=>m("label",{for:"clue-summary"},"Clue Summary:",-1)),O0=ot(()=>m("label",{for:"clue-details"},"Clue Details:",-1)),x0=ot(()=>m("label",{for:"clue-password"},"Clue Password:",-1)),D0=ot(()=>m("button",{type:"submit"},"Add Clue",-1)),M0={class:"notes"},L0=ot(()=>m("h2",null,"Notes",-1)),F0=ot(()=>m("label",{for:"note"},"Add Note:",-1)),U0=ot(()=>m("button",{type:"submit"},"Add Note",-1));function W0(t,e,n,s,i,r){const o=gt("router-link");return i.caseFile?(M(),L("div",y0,[m("h1",null,ne(i.caseFile.title),1),m("p",null,ne(i.caseFile.summary),1),m("p",null,ne(i.caseFile.details),1),m("div",v0,[w0,m("ul",null,[(M(!0),L(Oe,null,Bt(i.caseFile.locations,a=>(M(),L("li",{key:a.name},[m("h3",null,ne(a.name),1),m("p",null,ne(a.description),1)]))),128))]),m("form",{onSubmit:e[2]||(e[2]=Xn((...a)=>r.addLocation&&r.addLocation(...a),["prevent"]))},[C0,ce(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>i.newLocation.name=a),id:"location-name",required:""},null,512),[[pe,i.newLocation.name]]),E0,ce(m("textarea",{"onUpdate:modelValue":e[1]||(e[1]=a=>i.newLocation.description=a),id:"location-description",required:""},null,512),[[pe,i.newLocation.description]]),b0],32)]),m("div",I0,[S0,m("ul",null,[(M(!0),L(Oe,null,Bt(i.caseFile.clues,a=>(M(),L("li",{class:"clue-item",key:a.id},[xe(ne(r.checkVisibility(a))+" ",1),m("p",null,ne(a.summary),1),a.detailsVisible?fe("",!0):ce((M(),L("input",{key:0,type:"password","onUpdate:modelValue":l=>a.enteredPassword=l,placeholder:"Enter password to view clue"},null,8,T0)),[[pe,a.enteredPassword]]),a.detailsVisible?fe("",!0):(M(),L("button",{key:1,onClick:l=>r.unlockClue(a)},"Unlock Clue",8,R0)),a.detailsVisible?(M(),L("p",k0,ne(a.details),1)):fe("",!0)]))),128))]),i.isAdmin?(M(),L("div",P0,[A0,m("form",{onSubmit:e[6]||(e[6]=Xn((...a)=>r.addClue&&r.addClue(...a),["prevent"]))},[N0,ce(m("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>i.newClue.summary=a),id:"clue-summary",required:""},null,512),[[pe,i.newClue.summary]]),O0,ce(m("textarea",{"onUpdate:modelValue":e[4]||(e[4]=a=>i.newClue.details=a),id:"clue-details",required:""},null,512),[[pe,i.newClue.details]]),x0,ce(m("input",{type:"password","onUpdate:modelValue":e[5]||(e[5]=a=>i.newClue.password=a),id:"clue-password",required:""},null,512),[[pe,i.newClue.password]]),D0],32)])):fe("",!0)]),m("div",M0,[L0,m("ul",null,[(M(!0),L(Oe,null,Bt(i.caseFile.notes,a=>(M(),L("li",{key:a.timestamp},ne(a.content)+" ("+ne(new Date(a.timestamp).toLocaleString())+") ",1))),128))]),m("form",{onSubmit:e[8]||(e[8]=Xn((...a)=>r.addNote&&r.addNote(...a),["prevent"]))},[F0,ce(m("textarea",{"onUpdate:modelValue":e[7]||(e[7]=a=>i.newNote=a),id:"note",required:""},null,512),[[pe,i.newNote]]),U0],32)]),ie(o,{to:"/case-files"},{default:Qe(()=>[xe("Back to Case Files")]),_:1})])):fe("",!0)}const V0=bt(g0,[["render",W0],["__scopeId","data-v-91c9c25c"]]),$0={name:"Acquisitions"},B0=t=>(Dt("data-v-db5bbd25"),t=t(),Mt(),t),H0={class:"acquisitions"},j0=B0(()=>m("h1",null,"Acquisitions",-1)),q0=[j0];function G0(t,e,n,s,i,r){return M(),L("div",H0,q0)}const K0=bt($0,[["render",G0],["__scopeId","data-v-db5bbd25"]]),z0=[{path:"/",redirect:"/home"},{path:"/motw-frontend-hq",redirect:"/home"},{path:"/home",name:"Home",component:GE},{path:"/login",name:"Login",component:yT},{path:"/dashboard",name:"Dashboard",component:m0},{path:"/case-files",name:"CaseFiles",component:i_},{path:"/case-files/:id",name:"CaseDetail",component:V0,props:!0},{path:"/acquisitions",name:"Acquisitions",component:K0},{path:"/profile",name:"Profile",component:a_},{path:"/bestiary",name:"Bestiary",component:o_}],Y0=WE({history:pE(),routes:z0});Lg(FC).use(Y0).mount("#app");
