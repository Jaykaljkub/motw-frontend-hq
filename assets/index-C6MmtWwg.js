(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function La(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const de={},cs=[],st=()=>{},a_=()=>!1,Hr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ma=t=>t.startsWith("onUpdate:"),xe=Object.assign,Ua=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},l_=Object.prototype.hasOwnProperty,Q=(t,e)=>l_.call(t,e),W=Array.isArray,us=t=>Wr(t)==="[object Map]",mh=t=>Wr(t)==="[object Set]",q=t=>typeof t=="function",Ce=t=>typeof t=="string",Yn=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",yh=t=>(pe(t)||q(t))&&q(t.then)&&q(t.catch),vh=Object.prototype.toString,Wr=t=>vh.call(t),c_=t=>Wr(t).slice(8,-1),wh=t=>Wr(t)==="[object Object]",Fa=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=La(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},u_=/-(\w)/g,Pt=jr(t=>t.replace(u_,(e,n)=>n?n.toUpperCase():"")),h_=/\B([A-Z])/g,As=jr(t=>t.replace(h_,"-$1").toLowerCase()),qr=jr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Eo=jr(t=>t?`on${qr(t)}`:""),vn=(t,e)=>!Object.is(t,e),nr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Eh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Yo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ac;const bh=()=>ac||(ac=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ba(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ce(s)?__(s):Ba(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ce(t)||pe(t))return t}const d_=/;(?![^(]*\))/g,f_=/:([^]+)/,p_=/\/\*[^]*?\*\//g;function __(t){const e={};return t.replace(p_,"").split(d_).forEach(n=>{if(n){const s=n.split(f_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function $a(t){let e="";if(Ce(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=$a(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const g_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",m_=La(g_);function Ih(t){return!!t||t===""}const Fe=t=>Ce(t)?t:t==null?"":W(t)||pe(t)&&(t.toString===vh||!q(t.toString))?JSON.stringify(t,Ch,2):String(t),Ch=(t,e)=>e&&e.__v_isRef?Ch(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[bo(s,r)+" =>"]=i,n),{})}:mh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bo(n))}:Yn(e)?bo(e):pe(e)&&!W(e)&&!wh(e)?String(e):e,bo=(t,e="")=>{var n;return Yn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lt;class y_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=lt,!e&&lt&&(this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=lt;try{return lt=this,e()}finally{lt=n}}}on(){lt=this}off(){lt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function v_(t,e=lt){e&&e.active&&e.effects.push(t)}function w_(){return lt}let Un;class Va{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,v_(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Cn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(E_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Tn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=fn,n=Un;try{return fn=!0,Un=this,this._runnings++,lc(this),this.fn()}finally{cc(this),this._runnings--,Un=n,fn=e}}stop(){this.active&&(lc(this),cc(this),this.onStop&&this.onStop(),this.active=!1)}}function E_(t){return t.value}function lc(t){t._trackId++,t._depsLength=0}function cc(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Th(t.deps[e],t);t.deps.length=t._depsLength}}function Th(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let fn=!0,Qo=0;const Sh=[];function Cn(){Sh.push(fn),fn=!1}function Tn(){const t=Sh.pop();fn=t===void 0?!0:t}function Ha(){Qo++}function Wa(){for(Qo--;!Qo&&Jo.length;)Jo.shift()()}function Rh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Th(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Jo=[];function Ah(t,e,n){Ha();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Jo.push(s.scheduler)))}Wa()}const Ph=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Xo=new WeakMap,Fn=Symbol(""),Zo=Symbol("");function Xe(t,e,n){if(fn&&Un){let s=Xo.get(t);s||Xo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ph(()=>s.delete(n))),Rh(Un,i)}}function Bt(t,e,n,s,i,r){const o=Xo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Yn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Fa(n)&&a.push(o.get("length")):(a.push(o.get(Fn)),us(t)&&a.push(o.get(Zo)));break;case"delete":W(t)||(a.push(o.get(Fn)),us(t)&&a.push(o.get(Zo)));break;case"set":us(t)&&a.push(o.get(Fn));break}Ha();for(const l of a)l&&Ah(l,4);Wa()}const b_=La("__proto__,__v_isRef,__isVue"),kh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yn)),uc=I_();function I_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let r=0,o=this.length;r<o;r++)Xe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ne)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Cn(),Ha();const s=ne(this)[e].apply(this,n);return Wa(),Tn(),s}}),t}function C_(t){Yn(t)||(t=String(t));const e=ne(this);return Xe(e,"has",t),e.hasOwnProperty(t)}class Nh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?U_:Lh:r?Dh:xh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!i){if(o&&Q(uc,n))return Reflect.get(uc,n,s);if(n==="hasOwnProperty")return C_}const a=Reflect.get(e,n,s);return(Yn(n)?kh.has(n):b_(n))||(i||Xe(e,"get",n),r)?a:Ze(a)?o&&Fa(n)?a:a.value:pe(a)?i?Uh(a):Ai(a):a}}class Oh extends Nh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=li(r);if(!pr(s)&&!li(s)&&(r=ne(r),s=ne(s)),!W(e)&&Ze(r)&&!Ze(s))return l?!1:(r.value=s,!0)}const o=W(e)&&Fa(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,s,i);return e===ne(i)&&(o?vn(s,r)&&Bt(e,"set",n,s):Bt(e,"add",n,s)),a}deleteProperty(e,n){const s=Q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Bt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Yn(n)||!kh.has(n))&&Xe(e,"has",n),s}ownKeys(e){return Xe(e,"iterate",W(e)?"length":Fn),Reflect.ownKeys(e)}}class T_ extends Nh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const S_=new Oh,R_=new T_,A_=new Oh(!0);const ja=t=>t,Kr=t=>Reflect.getPrototypeOf(t);function qi(t,e,n=!1,s=!1){t=t.__v_raw;const i=ne(t),r=ne(e);n||(vn(e,r)&&Xe(i,"get",e),Xe(i,"get",r));const{has:o}=Kr(i),a=s?ja:n?Ga:ci;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ki(t,e=!1){const n=this.__v_raw,s=ne(n),i=ne(t);return e||(vn(t,i)&&Xe(s,"has",t),Xe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Gi(t,e=!1){return t=t.__v_raw,!e&&Xe(ne(t),"iterate",Fn),Reflect.get(t,"size",t)}function hc(t){t=ne(t);const e=ne(this);return Kr(e).has.call(e,t)||(e.add(t),Bt(e,"add",t,t)),this}function dc(t,e){e=ne(e);const n=ne(this),{has:s,get:i}=Kr(n);let r=s.call(n,t);r||(t=ne(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?vn(e,o)&&Bt(n,"set",t,e):Bt(n,"add",t,e),this}function fc(t){const e=ne(this),{has:n,get:s}=Kr(e);let i=n.call(e,t);i||(t=ne(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Bt(e,"delete",t,void 0),r}function pc(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&Bt(t,"clear",void 0,void 0),n}function zi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ne(o),l=e?ja:t?Ga:ci;return!t&&Xe(a,"iterate",Fn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Yi(t,e,n){return function(...s){const i=this.__v_raw,r=ne(i),o=us(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ja:e?Ga:ci;return!e&&Xe(r,"iterate",l?Zo:Fn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Xt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function P_(){const t={get(r){return qi(this,r)},get size(){return Gi(this)},has:Ki,add:hc,set:dc,delete:fc,clear:pc,forEach:zi(!1,!1)},e={get(r){return qi(this,r,!1,!0)},get size(){return Gi(this)},has:Ki,add:hc,set:dc,delete:fc,clear:pc,forEach:zi(!1,!0)},n={get(r){return qi(this,r,!0)},get size(){return Gi(this,!0)},has(r){return Ki.call(this,r,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:zi(!0,!1)},s={get(r){return qi(this,r,!0,!0)},get size(){return Gi(this,!0)},has(r){return Ki.call(this,r,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Yi(r,!1,!1),n[r]=Yi(r,!0,!1),e[r]=Yi(r,!1,!0),s[r]=Yi(r,!0,!0)}),[t,n,e,s]}const[k_,N_,O_,x_]=P_();function qa(t,e){const n=e?t?x_:O_:t?N_:k_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const D_={get:qa(!1,!1)},L_={get:qa(!1,!0)},M_={get:qa(!0,!1)};const xh=new WeakMap,Dh=new WeakMap,Lh=new WeakMap,U_=new WeakMap;function F_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B_(t){return t.__v_skip||!Object.isExtensible(t)?0:F_(c_(t))}function Ai(t){return li(t)?t:Ka(t,!1,S_,D_,xh)}function Mh(t){return Ka(t,!1,A_,L_,Dh)}function Uh(t){return Ka(t,!0,R_,M_,Lh)}function Ka(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=B_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Ys(t){return li(t)?Ys(t.__v_raw):!!(t&&t.__v_isReactive)}function li(t){return!!(t&&t.__v_isReadonly)}function pr(t){return!!(t&&t.__v_isShallow)}function Fh(t){return t?!!t.__v_raw:!1}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function $_(t){return Object.isExtensible(t)&&Eh(t,"__v_skip",!0),t}const ci=t=>pe(t)?Ai(t):t,Ga=t=>pe(t)?Uh(t):t;class Bh{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Va(()=>e(this._value),()=>sr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ne(this);return(!e._cacheable||e.effect.dirty)&&vn(e._value,e._value=e.effect.run())&&sr(e,4),$h(e),e.effect._dirtyLevel>=2&&sr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function V_(t,e,n=!1){let s,i;const r=q(t);return r?(s=t,i=st):(s=t.get,i=t.set),new Bh(s,i,r||!i,n)}function $h(t){var e;fn&&Un&&(t=ne(t),Rh(Un,(e=t.dep)!=null?e:t.dep=Ph(()=>t.dep=void 0,t instanceof Bh?t:void 0)))}function sr(t,e=4,n){t=ne(t);const s=t.dep;s&&Ah(s,e)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function H_(t){return Vh(t,!1)}function W_(t){return Vh(t,!0)}function Vh(t,e){return Ze(t)?t:new j_(t,e)}class j_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:ci(e)}get value(){return $h(this),this._value}set value(e){const n=this.__v_isShallow||pr(e)||li(e);e=n?e:ne(e),vn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ci(e),sr(this,4))}}function hs(t){return Ze(t)?t.value:t}const q_={get:(t,e,n)=>hs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ze(i)&&!Ze(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Hh(t){return Ys(t)?t:new Proxy(t,q_)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pn(t,e,n,s){try{return s?t(...s):t()}catch(i){Gr(i,e,n)}}function ft(t,e,n,s){if(q(t)){const i=pn(t,e,n,s);return i&&yh(i)&&i.catch(r=>{Gr(r,e,n)}),i}if(W(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ft(t[r],e,n,s));return i}}function Gr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Cn(),pn(l,null,10,[t,o,a]),Tn();return}}K_(t,n,i,s)}function K_(t,e,n,s=!0){console.error(t)}let ui=!1,ea=!1;const Be=[];let It=0;const ds=[];let tn=null,xn=0;const Wh=Promise.resolve();let za=null;function jh(t){const e=za||Wh;return t?e.then(this?t.bind(this):t):e}function G_(t){let e=It+1,n=Be.length;for(;e<n;){const s=e+n>>>1,i=Be[s],r=hi(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Ya(t){(!Be.length||!Be.includes(t,ui&&t.allowRecurse?It+1:It))&&(t.id==null?Be.push(t):Be.splice(G_(t.id),0,t),qh())}function qh(){!ui&&!ea&&(ea=!0,za=Wh.then(Gh))}function z_(t){const e=Be.indexOf(t);e>It&&Be.splice(e,1)}function Y_(t){W(t)?ds.push(...t):(!tn||!tn.includes(t,t.allowRecurse?xn+1:xn))&&ds.push(t),qh()}function _c(t,e,n=ui?It+1:0){for(;n<Be.length;n++){const s=Be[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Be.splice(n,1),n--,s()}}}function Kh(t){if(ds.length){const e=[...new Set(ds)].sort((n,s)=>hi(n)-hi(s));if(ds.length=0,tn){tn.push(...e);return}for(tn=e,xn=0;xn<tn.length;xn++)tn[xn]();tn=null,xn=0}}const hi=t=>t.id==null?1/0:t.id,Q_=(t,e)=>{const n=hi(t)-hi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gh(t){ea=!1,ui=!0,Be.sort(Q_);try{for(It=0;It<Be.length;It++){const e=Be[It];e&&e.active!==!1&&pn(e,null,14)}}finally{It=0,Be.length=0,Kh(),ui=!1,za=null,(Be.length||ds.length)&&Gh()}}function J_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||de;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||de;d&&(i=n.map(_=>Ce(_)?_.trim():_)),h&&(i=n.map(Yo))}let a,l=s[a=Eo(e)]||s[a=Eo(Pt(e))];!l&&r&&(l=s[a=Eo(As(e))]),l&&ft(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(c,t,6,i)}}function zh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!q(t)){const l=c=>{const u=zh(c,e,!0);u&&(a=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(pe(t)&&s.set(t,null),null):(W(r)?r.forEach(l=>o[l]=null):xe(o,r),pe(t)&&s.set(t,o),o)}function zr(t,e){return!t||!Hr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,As(e))||Q(t,e))}let Qe=null,Yr=null;function _r(t){const e=Qe;return Qe=t,Yr=t&&t.type.__scopeId||null,e}function qt(t){Yr=t}function Kt(){Yr=null}function De(t,e=Qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Sc(-1);const r=_r(e);let o;try{o=t(...i)}finally{_r(r),s._d&&Sc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Io(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:m,inheritAttrs:I}=t,A=_r(t);let N,O;try{if(n.shapeFlag&4){const B=i||s,re=B;N=bt(c.call(re,B,u,h,_,d,m)),O=a}else{const B=e;N=bt(B.length>1?B(h,{attrs:a,slots:o,emit:l}):B(h,null)),O=e.props?a:X_(a)}}catch(B){Xs.length=0,Gr(B,t,1),N=te($n)}let L=N;if(O&&I!==!1){const B=Object.keys(O),{shapeFlag:re}=L;B.length&&re&7&&(r&&B.some(Ma)&&(O=Z_(O,r)),L=vs(L,O,!1,!0))}return n.dirs&&(L=vs(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),N=L,_r(A),N}const X_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hr(n))&&((e||(e={}))[n]=t[n]);return e},Z_=(t,e)=>{const n={};for(const s in t)(!Ma(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function eg(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?gc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!zr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?gc(s,o,c):!0:!!o;return!1}function gc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!zr(n,r))return!0}return!1}function tg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Yh="components";function ys(t,e){return sg(Yh,t,!0,e)||t}const ng=Symbol.for("v-ndc");function sg(t,e,n=!0,s=!1){const i=Qe||$e;if(i){const r=i.type;if(t===Yh){const a=Jg(r,!1);if(a&&(a===e||a===Pt(e)||a===qr(Pt(e))))return r}const o=mc(i[t]||r[t],e)||mc(i.appContext[t],e);return!o&&s?r:o}}function mc(t,e){return t&&(t[e]||t[Pt(e)]||t[qr(Pt(e))])}const ig=t=>t.__isSuspense;function rg(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Y_(t)}const og=Symbol.for("v-scx"),ag=()=>$t(og),Qi={};function ir(t,e,n){return Qh(t,e,n)}function Qh(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=de){if(e&&r){const $=e;e=(...Ee)=>{$(...Ee),re()}}const l=$e,c=$=>s===!0?$:Dn($,s===!1?1:void 0);let u,h=!1,d=!1;if(Ze(t)?(u=()=>t.value,h=pr(t)):Ys(t)?(u=()=>c(t),h=!0):W(t)?(d=!0,h=t.some($=>Ys($)||pr($)),u=()=>t.map($=>{if(Ze($))return $.value;if(Ys($))return c($);if(q($))return pn($,l,2)})):q(t)?e?u=()=>pn(t,l,2):u=()=>(_&&_(),ft(t,l,3,[m])):u=st,e&&s){const $=u;u=()=>Dn($())}let _,m=$=>{_=L.onStop=()=>{pn($,l,4),_=L.onStop=void 0}},I;if(Xr)if(m=st,e?n&&ft(e,l,3,[u(),d?[]:void 0,m]):u(),i==="sync"){const $=ag();I=$.__watcherHandles||($.__watcherHandles=[])}else return st;let A=d?new Array(t.length).fill(Qi):Qi;const N=()=>{if(!(!L.active||!L.dirty))if(e){const $=L.run();(s||h||(d?$.some((Ee,Te)=>vn(Ee,A[Te])):vn($,A)))&&(_&&_(),ft(e,l,3,[$,A===Qi?void 0:d&&A[0]===Qi?[]:A,m]),A=$)}else L.run()};N.allowRecurse=!!e;let O;i==="sync"?O=N:i==="post"?O=()=>ze(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),O=()=>Ya(N));const L=new Va(u,st,O),B=w_(),re=()=>{L.stop(),B&&Ua(B.effects,L)};return e?n?N():A=L.run():i==="post"?ze(L.run.bind(L),l&&l.suspense):L.run(),I&&I.push(re),re}function lg(t,e,n){const s=this.proxy,i=Ce(t)?t.includes(".")?Jh(s,t):()=>s[t]:t.bind(s,s);let r;q(e)?r=e:(r=e.handler,n=e);const o=Pi(this),a=Qh(i,r.bind(s),n);return o(),a}function Jh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Dn(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ze(t))Dn(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)Dn(t[s],e,n);else if(mh(t)||us(t))t.forEach(s=>{Dn(s,e,n)});else if(wh(t))for(const s in t)Dn(t[s],e,n);return t}function Ne(t,e){if(Qe===null)return t;const n=Zr(Qe)||Qe.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=de]=e[i];r&&(q(r)&&(r={mounted:r,updated:r}),r.deep&&Dn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Pn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Cn(),ft(l,n,8,[t.el,a,t,e]),Tn())}}/*! #__NO_SIDE_EFFECTS__ */function Xh(t,e){return q(t)?xe({name:t.name},e,{setup:t}):t}const rr=t=>!!t.type.__asyncLoader,Zh=t=>t.type.__isKeepAlive;function cg(t,e){ed(t,"a",e)}function ug(t,e){ed(t,"da",e)}function ed(t,e,n=$e){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Qr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Zh(i.parent.vnode)&&hg(s,e,n,i),i=i.parent}}function hg(t,e,n,s){const i=Qr(e,t,s,!0);td(()=>{Ua(s[e],i)},n)}function Qr(t,e,n=$e,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Cn();const a=Pi(n),l=ft(e,n,t,o);return a(),Tn(),l});return s?i.unshift(r):i.push(r),r}}const Gt=t=>(e,n=$e)=>(!Xr||t==="sp")&&Qr(t,(...s)=>e(...s),n),dg=Gt("bm"),fg=Gt("m"),pg=Gt("bu"),_g=Gt("u"),gg=Gt("bum"),td=Gt("um"),mg=Gt("sp"),yg=Gt("rtg"),vg=Gt("rtc");function wg(t,e=$e){Qr("ec",t,e)}function js(t,e,n,s){let i;const r=n;if(W(t)||Ce(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r)}}else i=[];return i}const ta=t=>t?gd(t)?Zr(t)||t.proxy:ta(t.parent):null,Qs=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ta(t.parent),$root:t=>ta(t.root),$emit:t=>t.emit,$options:t=>Qa(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ya(t.update)}),$nextTick:t=>t.n||(t.n=jh.bind(t.proxy)),$watch:t=>lg.bind(t)}),Co=(t,e)=>t!==de&&!t.__isScriptSetup&&Q(t,e),Eg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Co(s,e))return o[e]=1,s[e];if(i!==de&&Q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,r[e];if(n!==de&&Q(n,e))return o[e]=4,n[e];na&&(o[e]=0)}}const u=Qs[e];let h,d;if(u)return e==="$attrs"&&Xe(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&Q(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Co(i,e)?(i[e]=n,!0):s!==de&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==de&&Q(t,o)||Co(e,o)||(a=r[0])&&Q(a,o)||Q(s,o)||Q(Qs,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yc(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let na=!0;function bg(t){const e=Qa(t),n=t.proxy,s=t.ctx;na=!1,e.beforeCreate&&vc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:I,deactivated:A,beforeDestroy:N,beforeUnmount:O,destroyed:L,unmounted:B,render:re,renderTracked:$,renderTriggered:Ee,errorCaptured:Te,serverPrefetch:ot,expose:nt,inheritAttrs:Qt,components:An,directives:mt,filters:Ls}=e;if(c&&Ig(c,s,null),o)for(const oe in o){const ee=o[oe];q(ee)&&(s[oe]=ee.bind(n))}if(i){const oe=i.call(n,n);pe(oe)&&(t.data=Ai(oe))}if(na=!0,r)for(const oe in r){const ee=r[oe],Ot=q(ee)?ee.bind(n,n):q(ee.get)?ee.get.bind(n,n):st,Jt=!q(ee)&&q(ee.set)?ee.set.bind(n):st,yt=ct({get:Ot,set:Jt});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>yt.value,set:Ge=>yt.value=Ge})}if(a)for(const oe in a)nd(a[oe],s,n,oe);if(l){const oe=q(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(ee=>{or(ee,oe[ee])})}u&&vc(u,t,"c");function Se(oe,ee){W(ee)?ee.forEach(Ot=>oe(Ot.bind(n))):ee&&oe(ee.bind(n))}if(Se(dg,h),Se(fg,d),Se(pg,_),Se(_g,m),Se(cg,I),Se(ug,A),Se(wg,Te),Se(vg,$),Se(yg,Ee),Se(gg,O),Se(td,B),Se(mg,ot),W(nt))if(nt.length){const oe=t.exposed||(t.exposed={});nt.forEach(ee=>{Object.defineProperty(oe,ee,{get:()=>n[ee],set:Ot=>n[ee]=Ot})})}else t.exposed||(t.exposed={});re&&t.render===st&&(t.render=re),Qt!=null&&(t.inheritAttrs=Qt),An&&(t.components=An),mt&&(t.directives=mt)}function Ig(t,e,n=st){W(t)&&(t=sa(t));for(const s in t){const i=t[s];let r;pe(i)?"default"in i?r=$t(i.from||s,i.default,!0):r=$t(i.from||s):r=$t(i),Ze(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function vc(t,e,n){ft(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function nd(t,e,n,s){const i=s.includes(".")?Jh(n,s):()=>n[s];if(Ce(t)){const r=e[t];q(r)&&ir(i,r)}else if(q(t))ir(i,t.bind(n));else if(pe(t))if(W(t))t.forEach(r=>nd(r,e,n,s));else{const r=q(t.handler)?t.handler.bind(n):e[t.handler];q(r)&&ir(i,r,t)}}function Qa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>gr(l,c,o,!0)),gr(l,e,o)),pe(e)&&r.set(e,l),l}function gr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&gr(t,r,n,!0),i&&i.forEach(o=>gr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Cg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cg={data:wc,props:Ec,emits:Ec,methods:qs,computed:qs,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:qs,directives:qs,watch:Sg,provide:wc,inject:Tg};function wc(t,e){return e?t?function(){return xe(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Tg(t,e){return qs(sa(t),sa(e))}function sa(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?xe(Object.create(null),t,e):e}function Ec(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:xe(Object.create(null),yc(t),yc(e??{})):e}function Sg(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=We(t[s],e[s]);return n}function sd(){return{app:null,config:{isNativeTag:a_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rg=0;function Ag(t,e){return function(s,i=null){q(s)||(s=xe({},s)),i!=null&&!pe(i)&&(i=null);const r=sd(),o=new WeakSet;let a=!1;const l=r.app={_uid:Rg++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Zg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&q(c.install)?(o.add(c),c.install(l,...u)):q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=te(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Zr(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Js;Js=l;try{return c()}finally{Js=u}}};return l}}let Js=null;function or(t,e){if($e){let n=$e.provides;const s=$e.parent&&$e.parent.provides;s===n&&(n=$e.provides=Object.create(s)),n[t]=e}}function $t(t,e,n=!1){const s=$e||Qe;if(s||Js){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Js._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&q(e)?e.call(s&&s.proxy):e}}const id={},rd=()=>Object.create(id),od=t=>Object.getPrototypeOf(t)===id;function Pg(t,e,n,s=!1){const i={},r=rd();t.propsDefaults=Object.create(null),ad(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Mh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function kg(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ne(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(zr(t.emitsOptions,d))continue;const _=e[d];if(l)if(Q(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=Pt(d);i[m]=ia(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{ad(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Q(e,h)&&((u=As(h))===h||!Q(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ia(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Q(e,h))&&(delete r[h],c=!0)}c&&Bt(t.attrs,"set","")}function ad(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(zs(l))continue;const c=e[l];let u;i&&Q(i,u=Pt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:zr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ne(n),c=a||de;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ia(i,l,h,c[h],t,!Q(c,h))}}return o}function ia(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&q(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Pi(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===As(n))&&(s=!0))}return s}function ld(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!q(t)){const u=h=>{l=!0;const[d,_]=ld(h,e,!0);xe(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return pe(t)&&s.set(t,cs),cs;if(W(r))for(let u=0;u<r.length;u++){const h=Pt(r[u]);bc(h)&&(o[h]=de)}else if(r)for(const u in r){const h=Pt(u);if(bc(h)){const d=r[u],_=o[h]=W(d)||q(d)?{type:d}:xe({},d);if(_){const m=Tc(Boolean,_.type),I=Tc(String,_.type);_[0]=m>-1,_[1]=I<0||m<I,(m>-1||Q(_,"default"))&&a.push(h)}}}const c=[o,a];return pe(t)&&s.set(t,c),c}function bc(t){return t[0]!=="$"&&!zs(t)}function Ic(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Cc(t,e){return Ic(t)===Ic(e)}function Tc(t,e){return W(e)?e.findIndex(n=>Cc(n,t)):q(e)&&Cc(e,t)?0:-1}const cd=t=>t[0]==="_"||t==="$stable",Ja=t=>W(t)?t.map(bt):[bt(t)],Ng=(t,e,n)=>{if(e._n)return e;const s=De((...i)=>Ja(e(...i)),n);return s._c=!1,s},ud=(t,e,n)=>{const s=t._ctx;for(const i in t){if(cd(i))continue;const r=t[i];if(q(r))e[i]=Ng(i,r,s);else if(r!=null){const o=Ja(r);e[i]=()=>o}}},hd=(t,e)=>{const n=Ja(e);t.slots.default=()=>n},Og=(t,e)=>{const n=t.slots=rd();if(t.vnode.shapeFlag&32){const s=e._;s?(xe(n,e),Eh(n,"_",s,!0)):ud(e,n)}else e&&hd(t,e)},xg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=de;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(xe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,ud(e,i)),o=e}else e&&(hd(t,e),o={default:1});if(r)for(const a in i)!cd(a)&&o[a]==null&&delete i[a]};function ra(t,e,n,s,i=!1){if(W(t)){t.forEach((d,_)=>ra(d,e&&(W(e)?e[_]:e),n,s,i));return}if(rr(s)&&!i)return;const r=s.shapeFlag&4?Zr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ce(c)?(u[c]=null,Q(h,c)&&(h[c]=null)):Ze(c)&&(c.value=null)),q(l))pn(l,a,12,[o,u]);else{const d=Ce(l),_=Ze(l);if(d||_){const m=()=>{if(t.f){const I=d?Q(h,l)?h[l]:u[l]:l.value;i?W(I)&&Ua(I,r):W(I)?I.includes(r)||I.push(r):d?(u[l]=[r],Q(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Q(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ze(m,n)):m()}}}const ze=rg;function Dg(t){return Lg(t)}function Lg(t,e){const n=bh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=st,insertStaticContent:m}=t,I=(f,p,g,E=null,v=null,S=null,k=void 0,T=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!Us(f,p)&&(E=w(f),Ge(f,v,S,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:b,ref:D,shapeFlag:F}=p;switch(b){case Jr:A(f,p,g,E);break;case $n:N(f,p,g,E);break;case So:f==null&&O(p,g,E,k);break;case Ye:An(f,p,g,E,v,S,k,T,R);break;default:F&1?re(f,p,g,E,v,S,k,T,R):F&6?mt(f,p,g,E,v,S,k,T,R):(F&64||F&128)&&b.process(f,p,g,E,v,S,k,T,R,M)}D!=null&&v&&ra(D,f&&f.ref,S,p||f,!p)},A=(f,p,g,E)=>{if(f==null)s(p.el=a(p.children),g,E);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},N=(f,p,g,E)=>{f==null?s(p.el=l(p.children||""),g,E):p.el=f.el},O=(f,p,g,E)=>{[f.el,f.anchor]=m(f.children,p,g,E,f.el,f.anchor)},L=({el:f,anchor:p},g,E)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,E),f=v;s(p,g,E)},B=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},re=(f,p,g,E,v,S,k,T,R)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),f==null?$(p,g,E,v,S,k,T,R):ot(f,p,v,S,k,T,R)},$=(f,p,g,E,v,S,k,T)=>{let R,b;const{props:D,shapeFlag:F,transition:U,dirs:j}=f;if(R=f.el=o(f.type,S,D&&D.is,D),F&8?u(R,f.children):F&16&&Te(f.children,R,null,E,v,To(f,S),k,T),j&&Pn(f,null,E,"created"),Ee(R,f,f.scopeId,k,E),D){for(const ae in D)ae!=="value"&&!zs(ae)&&r(R,ae,null,D[ae],S,f.children,E,v,Ue);"value"in D&&r(R,"value",null,D.value,S),(b=D.onVnodeBeforeMount)&&wt(b,E,f)}j&&Pn(f,null,E,"beforeMount");const Y=Mg(v,U);Y&&U.beforeEnter(R),s(R,p,g),((b=D&&D.onVnodeMounted)||Y||j)&&ze(()=>{b&&wt(b,E,f),Y&&U.enter(R),j&&Pn(f,null,E,"mounted")},v)},Ee=(f,p,g,E,v)=>{if(g&&_(f,g),E)for(let S=0;S<E.length;S++)_(f,E[S]);if(v){let S=v.subTree;if(p===S){const k=v.vnode;Ee(f,k,k.scopeId,k.slotScopeIds,v.parent)}}},Te=(f,p,g,E,v,S,k,T,R=0)=>{for(let b=R;b<f.length;b++){const D=f[b]=T?nn(f[b]):bt(f[b]);I(null,D,p,g,E,v,S,k,T)}},ot=(f,p,g,E,v,S,k)=>{const T=p.el=f.el;let{patchFlag:R,dynamicChildren:b,dirs:D}=p;R|=f.patchFlag&16;const F=f.props||de,U=p.props||de;let j;if(g&&kn(g,!1),(j=U.onVnodeBeforeUpdate)&&wt(j,g,p,f),D&&Pn(p,f,g,"beforeUpdate"),g&&kn(g,!0),b?nt(f.dynamicChildren,b,T,g,E,To(p,v),S):k||ee(f,p,T,null,g,E,To(p,v),S,!1),R>0){if(R&16)Qt(T,p,F,U,g,E,v);else if(R&2&&F.class!==U.class&&r(T,"class",null,U.class,v),R&4&&r(T,"style",F.style,U.style,v),R&8){const Y=p.dynamicProps;for(let ae=0;ae<Y.length;ae++){const fe=Y[ae],Re=F[fe],at=U[fe];(at!==Re||fe==="value")&&r(T,fe,Re,at,v,f.children,g,E,Ue)}}R&1&&f.children!==p.children&&u(T,p.children)}else!k&&b==null&&Qt(T,p,F,U,g,E,v);((j=U.onVnodeUpdated)||D)&&ze(()=>{j&&wt(j,g,p,f),D&&Pn(p,f,g,"updated")},E)},nt=(f,p,g,E,v,S,k)=>{for(let T=0;T<p.length;T++){const R=f[T],b=p[T],D=R.el&&(R.type===Ye||!Us(R,b)||R.shapeFlag&70)?h(R.el):g;I(R,b,D,null,E,v,S,k,!0)}},Qt=(f,p,g,E,v,S,k)=>{if(g!==E){if(g!==de)for(const T in g)!zs(T)&&!(T in E)&&r(f,T,g[T],null,k,p.children,v,S,Ue);for(const T in E){if(zs(T))continue;const R=E[T],b=g[T];R!==b&&T!=="value"&&r(f,T,b,R,k,p.children,v,S,Ue)}"value"in E&&r(f,"value",g.value,E.value,k)}},An=(f,p,g,E,v,S,k,T,R)=>{const b=p.el=f?f.el:a(""),D=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:U,slotScopeIds:j}=p;j&&(T=T?T.concat(j):j),f==null?(s(b,g,E),s(D,g,E),Te(p.children||[],g,D,v,S,k,T,R)):F>0&&F&64&&U&&f.dynamicChildren?(nt(f.dynamicChildren,U,g,v,S,k,T),(p.key!=null||v&&p===v.subTree)&&dd(f,p,!0)):ee(f,p,g,D,v,S,k,T,R)},mt=(f,p,g,E,v,S,k,T,R)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?v.ctx.activate(p,g,E,k,R):Ls(p,g,E,v,S,k,R):es(f,p,R)},Ls=(f,p,g,E,v,S,k)=>{const T=f.component=Kg(f,E,v);if(Zh(f)&&(T.ctx.renderer=M),Gg(T),T.asyncDep){if(v&&v.registerDep(T,Se),!f.el){const R=T.subTree=te($n);N(null,R,p,g)}}else Se(T,f,p,g,v,S,k)},es=(f,p,g)=>{const E=p.component=f.component;if(eg(f,p,g))if(E.asyncDep&&!E.asyncResolved){oe(E,p,g);return}else E.next=p,z_(E.update),E.effect.dirty=!0,E.update();else p.el=f.el,E.vnode=p},Se=(f,p,g,E,v,S,k)=>{const T=()=>{if(f.isMounted){let{next:D,bu:F,u:U,parent:j,vnode:Y}=f;{const ss=fd(f);if(ss){D&&(D.el=Y.el,oe(f,D,k)),ss.asyncDep.then(()=>{f.isUnmounted||T()});return}}let ae=D,fe;kn(f,!1),D?(D.el=Y.el,oe(f,D,k)):D=Y,F&&nr(F),(fe=D.props&&D.props.onVnodeBeforeUpdate)&&wt(fe,j,D,Y),kn(f,!0);const Re=Io(f),at=f.subTree;f.subTree=Re,I(at,Re,h(at.el),w(at),f,v,S),D.el=Re.el,ae===null&&tg(f,Re.el),U&&ze(U,v),(fe=D.props&&D.props.onVnodeUpdated)&&ze(()=>wt(fe,j,D,Y),v)}else{let D;const{el:F,props:U}=p,{bm:j,m:Y,parent:ae}=f,fe=rr(p);if(kn(f,!1),j&&nr(j),!fe&&(D=U&&U.onVnodeBeforeMount)&&wt(D,ae,p),kn(f,!0),F&&_e){const Re=()=>{f.subTree=Io(f),_e(F,f.subTree,f,v,null)};fe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Re()):Re()}else{const Re=f.subTree=Io(f);I(null,Re,g,E,f,v,S),p.el=Re.el}if(Y&&ze(Y,v),!fe&&(D=U&&U.onVnodeMounted)){const Re=p;ze(()=>wt(D,ae,Re),v)}(p.shapeFlag&256||ae&&rr(ae.vnode)&&ae.vnode.shapeFlag&256)&&f.a&&ze(f.a,v),f.isMounted=!0,p=g=E=null}},R=f.effect=new Va(T,st,()=>Ya(b),f.scope),b=f.update=()=>{R.dirty&&R.run()};b.id=f.uid,kn(f,!0),b()},oe=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,kg(f,p.props,E,g),xg(f,p.children,g),Cn(),_c(f),Tn()},ee=(f,p,g,E,v,S,k,T,R=!1)=>{const b=f&&f.children,D=f?f.shapeFlag:0,F=p.children,{patchFlag:U,shapeFlag:j}=p;if(U>0){if(U&128){Jt(b,F,g,E,v,S,k,T,R);return}else if(U&256){Ot(b,F,g,E,v,S,k,T,R);return}}j&8?(D&16&&Ue(b,v,S),F!==b&&u(g,F)):D&16?j&16?Jt(b,F,g,E,v,S,k,T,R):Ue(b,v,S,!0):(D&8&&u(g,""),j&16&&Te(F,g,E,v,S,k,T,R))},Ot=(f,p,g,E,v,S,k,T,R)=>{f=f||cs,p=p||cs;const b=f.length,D=p.length,F=Math.min(b,D);let U;for(U=0;U<F;U++){const j=p[U]=R?nn(p[U]):bt(p[U]);I(f[U],j,g,null,v,S,k,T,R)}b>D?Ue(f,v,S,!0,!1,F):Te(p,g,E,v,S,k,T,R,F)},Jt=(f,p,g,E,v,S,k,T,R)=>{let b=0;const D=p.length;let F=f.length-1,U=D-1;for(;b<=F&&b<=U;){const j=f[b],Y=p[b]=R?nn(p[b]):bt(p[b]);if(Us(j,Y))I(j,Y,g,null,v,S,k,T,R);else break;b++}for(;b<=F&&b<=U;){const j=f[F],Y=p[U]=R?nn(p[U]):bt(p[U]);if(Us(j,Y))I(j,Y,g,null,v,S,k,T,R);else break;F--,U--}if(b>F){if(b<=U){const j=U+1,Y=j<D?p[j].el:E;for(;b<=U;)I(null,p[b]=R?nn(p[b]):bt(p[b]),g,Y,v,S,k,T,R),b++}}else if(b>U)for(;b<=F;)Ge(f[b],v,S,!0),b++;else{const j=b,Y=b,ae=new Map;for(b=Y;b<=U;b++){const et=p[b]=R?nn(p[b]):bt(p[b]);et.key!=null&&ae.set(et.key,b)}let fe,Re=0;const at=U-Y+1;let ss=!1,ic=0;const Ms=new Array(at);for(b=0;b<at;b++)Ms[b]=0;for(b=j;b<=F;b++){const et=f[b];if(Re>=at){Ge(et,v,S,!0);continue}let vt;if(et.key!=null)vt=ae.get(et.key);else for(fe=Y;fe<=U;fe++)if(Ms[fe-Y]===0&&Us(et,p[fe])){vt=fe;break}vt===void 0?Ge(et,v,S,!0):(Ms[vt-Y]=b+1,vt>=ic?ic=vt:ss=!0,I(et,p[vt],g,null,v,S,k,T,R),Re++)}const rc=ss?Ug(Ms):cs;for(fe=rc.length-1,b=at-1;b>=0;b--){const et=Y+b,vt=p[et],oc=et+1<D?p[et+1].el:E;Ms[b]===0?I(null,vt,g,oc,v,S,k,T,R):ss&&(fe<0||b!==rc[fe]?yt(vt,g,oc,2):fe--)}}},yt=(f,p,g,E,v=null)=>{const{el:S,type:k,transition:T,children:R,shapeFlag:b}=f;if(b&6){yt(f.component.subTree,p,g,E);return}if(b&128){f.suspense.move(p,g,E);return}if(b&64){k.move(f,p,g,M);return}if(k===Ye){s(S,p,g);for(let F=0;F<R.length;F++)yt(R[F],p,g,E);s(f.anchor,p,g);return}if(k===So){L(f,p,g);return}if(E!==2&&b&1&&T)if(E===0)T.beforeEnter(S),s(S,p,g),ze(()=>T.enter(S),v);else{const{leave:F,delayLeave:U,afterLeave:j}=T,Y=()=>s(S,p,g),ae=()=>{F(S,()=>{Y(),j&&j()})};U?U(S,Y,ae):ae()}else s(S,p,g)},Ge=(f,p,g,E=!1,v=!1)=>{const{type:S,props:k,ref:T,children:R,dynamicChildren:b,shapeFlag:D,patchFlag:F,dirs:U}=f;if(T!=null&&ra(T,null,g,f,!0),D&256){p.ctx.deactivate(f);return}const j=D&1&&U,Y=!rr(f);let ae;if(Y&&(ae=k&&k.onVnodeBeforeUnmount)&&wt(ae,p,f),D&6)ji(f.component,g,E);else{if(D&128){f.suspense.unmount(g,E);return}j&&Pn(f,null,p,"beforeUnmount"),D&64?f.type.remove(f,p,g,v,M,E):b&&(S!==Ye||F>0&&F&64)?Ue(b,p,g,!1,!0):(S===Ye&&F&384||!v&&D&16)&&Ue(R,p,g),E&&ts(f)}(Y&&(ae=k&&k.onVnodeUnmounted)||j)&&ze(()=>{ae&&wt(ae,p,f),j&&Pn(f,null,p,"unmounted")},g)},ts=f=>{const{type:p,el:g,anchor:E,transition:v}=f;if(p===Ye){ns(g,E);return}if(p===So){B(f);return}const S=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:T}=v,R=()=>k(g,S);T?T(f.el,S,R):R()}else S()},ns=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},ji=(f,p,g)=>{const{bum:E,scope:v,update:S,subTree:k,um:T}=f;E&&nr(E),v.stop(),S&&(S.active=!1,Ge(k,f,p,g)),T&&ze(T,p),ze(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ue=(f,p,g,E=!1,v=!1,S=0)=>{for(let k=S;k<f.length;k++)Ge(f[k],p,g,E,v)},w=f=>f.shapeFlag&6?w(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let x=!1;const P=(f,p,g)=>{f==null?p._vnode&&Ge(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,g),x||(x=!0,_c(),Kh(),x=!1),p._vnode=f},M={p:I,um:Ge,m:yt,r:ts,mt:Ls,mc:Te,pc:ee,pbc:nt,n:w,o:t};let se,_e;return{render:P,hydrate:se,createApp:Ag(P,se)}}function To({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Mg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function dd(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=nn(i[r]),a.el=o.el),n||dd(o,a)),a.type===Jr&&(a.el=o.el)}}function Ug(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function fd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fd(e)}const Fg=t=>t.__isTeleport,Ye=Symbol.for("v-fgt"),Jr=Symbol.for("v-txt"),$n=Symbol.for("v-cmt"),So=Symbol.for("v-stc"),Xs=[];let ht=null;function J(t=!1){Xs.push(ht=t?null:[])}function Bg(){Xs.pop(),ht=Xs[Xs.length-1]||null}let di=1;function Sc(t){di+=t}function pd(t){return t.dynamicChildren=di>0?ht||cs:null,Bg(),di>0&&ht&&ht.push(t),t}function X(t,e,n,s,i,r){return pd(y(t,e,n,s,i,r,!0))}function $g(t,e,n,s,i){return pd(te(t,e,n,s,i,!0))}function oa(t){return t?t.__v_isVNode===!0:!1}function Us(t,e){return t.type===e.type&&t.key===e.key}const _d=({key:t})=>t??null,ar=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||Ze(t)||q(t)?{i:Qe,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,s=0,i=null,r=t===Ye?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_d(e),ref:e&&ar(e),scopeId:Yr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return a?(Xa(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ce(n)?8:16),di>0&&!o&&ht&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ht.push(l),l}const te=Vg;function Vg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ng)&&(t=$n),oa(t)){const a=vs(t,e,!0);return n&&Xa(a,n),di>0&&!r&&ht&&(a.shapeFlag&6?ht[ht.indexOf(t)]=a:ht.push(a)),a.patchFlag|=-2,a}if(Xg(t)&&(t=t.__vccOpts),e){e=Hg(e);let{class:a,style:l}=e;a&&!Ce(a)&&(e.class=$a(a)),pe(l)&&(Fh(l)&&!W(l)&&(l=xe({},l)),e.style=Ba(l))}const o=Ce(t)?1:ig(t)?128:Fg(t)?64:pe(t)?4:q(t)?2:0;return y(t,e,n,s,i,o,r,!0)}function Hg(t){return t?Fh(t)||od(t)?xe({},t):t:null}function vs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Wg(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&_d(c),ref:e&&e.ref?n&&r?W(r)?r.concat(ar(e)):[r,ar(e)]:ar(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vs(t.ssContent),ssFallback:t.ssFallback&&vs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&(u.transition=l.clone(u)),u}function Pe(t=" ",e=0){return te(Jr,null,t,e)}function Dt(t="",e=!1){return e?(J(),$g($n,null,t)):te($n,null,t)}function bt(t){return t==null||typeof t=="boolean"?te($n):W(t)?te(Ye,null,t.slice()):typeof t=="object"?nn(t):te(Jr,null,String(t))}function nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vs(t)}function Xa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Xa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!od(e)?e._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),s&64?(n=16,e=[Pe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=$a([e.class,s.class]));else if(i==="style")e.style=Ba([e.style,s.style]);else if(Hr(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function wt(t,e,n,s=null){ft(t,e,7,[n,s])}const jg=sd();let qg=0;function Kg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||jg,r={uid:qg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new y_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ld(s,i),emitsOptions:zh(s,i),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=J_.bind(null,r),t.ce&&t.ce(r),r}let $e=null,mr,aa;{const t=bh(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};mr=e("__VUE_INSTANCE_SETTERS__",n=>$e=n),aa=e("__VUE_SSR_SETTERS__",n=>Xr=n)}const Pi=t=>{const e=$e;return mr(t),t.scope.on(),()=>{t.scope.off(),mr(e)}},Rc=()=>{$e&&$e.scope.off(),mr(null)};function gd(t){return t.vnode.shapeFlag&4}let Xr=!1;function Gg(t,e=!1){e&&aa(e);const{props:n,children:s}=t.vnode,i=gd(t);Pg(t,n,i,e),Og(t,s);const r=i?zg(t,e):void 0;return e&&aa(!1),r}function zg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Eg);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Qg(t):null,r=Pi(t);Cn();const o=pn(s,t,0,[t.props,i]);if(Tn(),r(),yh(o)){if(o.then(Rc,Rc),e)return o.then(a=>{Ac(t,a,e)}).catch(a=>{Gr(a,t,0)});t.asyncDep=o}else Ac(t,o,e)}else md(t,e)}function Ac(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Hh(e)),md(t,n)}let Pc;function md(t,e,n){const s=t.type;if(!t.render){if(!e&&Pc&&!s.render){const i=s.template||Qa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=xe(xe({isCustomElement:r,delimiters:a},o),l);s.render=Pc(i,c)}}t.render=s.render||st}{const i=Pi(t);Cn();try{bg(t)}finally{Tn(),i()}}}const Yg={get(t,e){return Xe(t,"get",""),t[e]}};function Qg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Yg),slots:t.slots,emit:t.emit,expose:e}}function Zr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Hh($_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}}))}function Jg(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function Xg(t){return q(t)&&"__vccOpts"in t}const ct=(t,e)=>V_(t,e,Xr);function yd(t,e,n){const s=arguments.length;return s===2?pe(e)&&!W(e)?oa(e)?te(t,null,[e]):te(t,e):te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&oa(n)&&(n=[n]),te(t,e,n))}const Zg="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const em="http://www.w3.org/2000/svg",tm="http://www.w3.org/1998/Math/MathML",sn=typeof document<"u"?document:null,kc=sn&&sn.createElement("template"),nm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?sn.createElementNS(em,t):e==="mathml"?sn.createElementNS(tm,t):sn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>sn.createTextNode(t),createComment:t=>sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{kc.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=kc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},sm=Symbol("_vtc");function im(t,e,n){const s=t[sm];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Nc=Symbol("_vod"),rm=Symbol("_vsh"),om=Symbol(""),am=/(^|;)\s*display\s*:/;function lm(t,e,n){const s=t.style,i=Ce(n);let r=!1;if(n&&!i){if(e)if(Ce(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&lr(s,a,"")}else for(const o in e)n[o]==null&&lr(s,o,"");for(const o in n)o==="display"&&(r=!0),lr(s,o,n[o])}else if(i){if(e!==n){const o=s[om];o&&(n+=";"+o),s.cssText=n,r=am.test(n)}}else e&&t.removeAttribute("style");Nc in t&&(t[Nc]=r?s.display:"",t[rm]&&(s.display="none"))}const Oc=/\s*!important$/;function lr(t,e,n){if(W(n))n.forEach(s=>lr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=cm(t,e);Oc.test(n)?t.setProperty(As(s),n.replace(Oc,""),"important"):t[s]=n}}const xc=["Webkit","Moz","ms"],Ro={};function cm(t,e){const n=Ro[e];if(n)return n;let s=Pt(e);if(s!=="filter"&&s in t)return Ro[e]=s;s=qr(s);for(let i=0;i<xc.length;i++){const r=xc[i]+s;if(r in t)return Ro[e]=r}return e}const Dc="http://www.w3.org/1999/xlink";function um(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Dc,e.slice(6,e.length)):t.setAttributeNS(Dc,e,n);else{const r=m_(e);n==null||r&&!Ih(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function hm(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ih(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function rs(t,e,n,s){t.addEventListener(e,n,s)}function dm(t,e,n,s){t.removeEventListener(e,n,s)}const Lc=Symbol("_vei");function fm(t,e,n,s,i=null){const r=t[Lc]||(t[Lc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=pm(e);if(s){const c=r[e]=mm(s,i);rs(t,a,c,l)}else o&&(dm(t,a,o,l),r[e]=void 0)}}const Mc=/(?:Once|Passive|Capture)$/;function pm(t){let e;if(Mc.test(t)){e={};let s;for(;s=t.match(Mc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):As(t.slice(2)),e]}let Ao=0;const _m=Promise.resolve(),gm=()=>Ao||(_m.then(()=>Ao=0),Ao=Date.now());function mm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ft(ym(s,n.value),e,5,[s])};return n.value=t,n.attached=gm(),n}function ym(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Uc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vm=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?im(t,s,c):e==="style"?lm(t,n,s):Hr(e)?Ma(e)||fm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wm(t,e,s,c))?hm(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),um(t,e,s,c))};function wm(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Uc(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Uc(e)&&Ce(n)?!1:e in t}const Fc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>nr(e,n):e};function Em(t){t.target.composing=!0}function Bc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Po=Symbol("_assign"),Oe={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Po]=Fc(i);const r=s||i.props&&i.props.type==="number";rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Yo(a)),t[Po](a)}),n&&rs(t,"change",()=>{t.value=t.value.trim()}),e||(rs(t,"compositionstart",Em),rs(t,"compositionend",Bc),rs(t,"change",Bc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[Po]=Fc(r),t.composing)return;const o=(i||t.type==="number")&&!/^0\d/.test(t.value)?Yo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},bm=["ctrl","shift","alt","meta"],Im={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bm.some(n=>t[`${n}Key`]&&!e.includes(n))},Ln=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Im[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Cm=xe({patchProp:vm},nm);let $c;function Tm(){return $c||($c=Dg(Cm))}const Sm=(...t)=>{const e=Tm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Am(s);if(!i)return;const r=e._component;!q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Rm(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Rm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Am(t){return Ce(t)?document.querySelector(t):t}const Et=Ai({isAuthenticated:!1,user:null,login(t){this.isAuthenticated=!0,this.user=t},logout(){this.isAuthenticated=!1,this.user=null}});var Vc={};/**
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
 */const vd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw Ps(e)},Ps=function(t){return new Error("Firebase Database ("+vd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const wd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Pm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new km;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class km extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ed=function(t){const e=wd(t);return Za.encodeByteArray(e,!0)},yr=function(t){return Ed(t).replace(/\./g,"")},vr=function(t){try{return Za.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Nm(t){return bd(void 0,t)}function bd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Om(n)||(t[n]=bd(t[n],e[n]));return t}function Om(t){return t!=="__proto__"}/**
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
 */function xm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dm=()=>xm().__FIREBASE_DEFAULTS__,Lm=()=>{if(typeof process>"u"||typeof Vc>"u")return;const t=Vc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vr(t[1]);return e&&JSON.parse(e)},el=()=>{try{return Dm()||Lm()||Mm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Id=t=>{var e,n;return(n=(e=el())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cd=t=>{const e=Id(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Td=()=>{var t;return(t=el())===null||t===void 0?void 0:t.config},Sd=t=>{var e;return(e=el())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ki{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Rd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yr(JSON.stringify(n)),yr(JSON.stringify(o)),""].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Um(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ad(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fm(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pd(){return vd.NODE_ADMIN===!0}function Bm(){try{return typeof indexedDB=="object"}catch{return!1}}function $m(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Vm="FirebaseError";class zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Vm,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Hm(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zt(i,a,s)}}function Hm(t,e){return t.replace(Wm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Wm=/\{\$([^}]+)}/g;/**
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
 */function fi(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
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
 */const kd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=fi(vr(r[0])||""),n=fi(vr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},jm=function(t){const e=kd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qm=function(t){const e=kd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ws(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function la(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Er(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Hc(r)&&Hc(o)){if(!Er(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Hc(t){return t!==null&&typeof t=="object"}/**
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
 */function ks(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Km{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Gm(t,e){const n=new zm(t,e);return n.subscribe.bind(n)}class zm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ym(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ko),i.error===void 0&&(i.error=ko),i.complete===void 0&&(i.complete=ko);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ym(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ko(){}function eo(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Qm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},to=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nn="[DEFAULT]";/**
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
 */class Jm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ki;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zm(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xm(t){return t===Nn?void 0:t}function Zm(t){return t.instantiationMode==="EAGER"}/**
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
 */class ey{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const ty={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},ny=le.INFO,sy={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},iy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=sy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nl{constructor(e){this.name=e,this._logLevel=ny,this._logHandler=iy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ty[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const ry=(t,e)=>e.some(n=>t instanceof n);let Wc,jc;function oy(){return Wc||(Wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ay(){return jc||(jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nd=new WeakMap,ca=new WeakMap,Od=new WeakMap,No=new WeakMap,sl=new WeakMap;function ly(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(_n(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nd.set(n,t)}).catch(()=>{}),sl.set(e,t),e}function cy(t){if(ca.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ca.set(t,e)}let ua={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ca.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Od.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uy(t){ua=t(ua)}function hy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Oo(this),e,...n);return Od.set(s,e.sort?e.sort():[e]),_n(s)}:ay().includes(t)?function(...e){return t.apply(Oo(this),e),_n(Nd.get(this))}:function(...e){return _n(t.apply(Oo(this),e))}}function dy(t){return typeof t=="function"?hy(t):(t instanceof IDBTransaction&&cy(t),ry(t,oy())?new Proxy(t,ua):t)}function _n(t){if(t instanceof IDBRequest)return ly(t);if(No.has(t))return No.get(t);const e=dy(t);return e!==t&&(No.set(t,e),sl.set(e,t)),e}const Oo=t=>sl.get(t);function fy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",l=>{s(_n(o.result),l.oldVersion,l.newVersion,_n(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const py=["get","getKey","getAll","getAllKeys","count"],_y=["put","add","delete","clear"],xo=new Map;function qc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xo.get(e))return xo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=_y.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||py.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return xo.set(e,r),r}uy(t=>({...t,get:(e,n,s)=>qc(e,n)||t.get(e,n,s),has:(e,n)=>!!qc(e,n)||t.has(e,n)}));/**
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
 */class gy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(my(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function my(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",Kc="0.10.5";/**
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
 */const Vn=new nl("@firebase/app"),yy="@firebase/app-compat",vy="@firebase/analytics-compat",wy="@firebase/analytics",Ey="@firebase/app-check-compat",by="@firebase/app-check",Iy="@firebase/auth",Cy="@firebase/auth-compat",Ty="@firebase/database",Sy="@firebase/database-compat",Ry="@firebase/functions",Ay="@firebase/functions-compat",Py="@firebase/installations",ky="@firebase/installations-compat",Ny="@firebase/messaging",Oy="@firebase/messaging-compat",xy="@firebase/performance",Dy="@firebase/performance-compat",Ly="@firebase/remote-config",My="@firebase/remote-config-compat",Uy="@firebase/storage",Fy="@firebase/storage-compat",By="@firebase/firestore",$y="@firebase/vertexai-preview",Vy="@firebase/firestore-compat",Hy="firebase",Wy="10.12.2";/**
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
 */const da="[DEFAULT]",jy={[ha]:"fire-core",[yy]:"fire-core-compat",[wy]:"fire-analytics",[vy]:"fire-analytics-compat",[by]:"fire-app-check",[Ey]:"fire-app-check-compat",[Iy]:"fire-auth",[Cy]:"fire-auth-compat",[Ty]:"fire-rtdb",[Sy]:"fire-rtdb-compat",[Ry]:"fire-fn",[Ay]:"fire-fn-compat",[Py]:"fire-iid",[ky]:"fire-iid-compat",[Ny]:"fire-fcm",[Oy]:"fire-fcm-compat",[xy]:"fire-perf",[Dy]:"fire-perf-compat",[Ly]:"fire-rc",[My]:"fire-rc-compat",[Uy]:"fire-gcs",[Fy]:"fire-gcs-compat",[By]:"fire-fst",[Vy]:"fire-fst-compat",[$y]:"fire-vertex","fire-js":"fire-js",[Hy]:"fire-js-all"};/**
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
 */const br=new Map,qy=new Map,fa=new Map;function Gc(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hn(t){const e=t.name;if(fa.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;fa.set(e,t);for(const n of br.values())Gc(n,t);for(const n of qy.values())Gc(n,t);return!0}function no(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t.settings!==void 0}/**
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
 */const Ky={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gn=new Ni("app","Firebase",Ky);/**
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
 */class Gy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
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
 */const Qn=Wy;function so(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:da,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gn.create("bad-app-name",{appName:String(i)});if(n||(n=Td()),!n)throw gn.create("no-options");const r=br.get(i);if(r){if(Er(n,r.options)&&Er(s,r.config))return r;throw gn.create("duplicate-app",{appName:i})}const o=new ey(i);for(const l of fa.values())o.addComponent(l);const a=new Gy(n,s,o);return br.set(i,a),a}function il(t=da){const e=br.get(t);if(!e&&t===da&&Td())return so();if(!e)throw gn.create("no-app",{appName:t});return e}function St(t,e,n){var s;let i=(s=jy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(a.join(" "));return}Hn(new wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const zy="firebase-heartbeat-database",Yy=1,pi="firebase-heartbeat-store";let Do=null;function xd(){return Do||(Do=fy(zy,Yy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw gn.create("idb-open",{originalErrorMessage:t.message})})),Do}async function Qy(t){try{const n=(await xd()).transaction(pi),s=await n.objectStore(pi).get(Dd(t));return await n.done,s}catch(e){if(e instanceof zt)Vn.warn(e.message);else{const n=gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function zc(t,e){try{const s=(await xd()).transaction(pi,"readwrite");await s.objectStore(pi).put(e,Dd(t)),await s.done}catch(n){if(n instanceof zt)Vn.warn(n.message);else{const s=gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(s.message)}}}function Dd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Jy=1024,Xy=30*24*60*60*1e3;class Zy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Xy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yc(),{heartbeatsToSend:s,unsentEntries:i}=ev(this._heartbeatsCache.heartbeats),r=yr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yc(){return new Date().toISOString().substring(0,10)}function ev(t,e=Jy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Qc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class tv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bm()?$m().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qc(t){return yr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nv(t){Hn(new wn("platform-logger",e=>new gy(e),"PRIVATE")),Hn(new wn("heartbeat",e=>new Zy(e),"PRIVATE")),St(ha,Kc,t),St(ha,Kc,"esm2017"),St("fire-js","")}nv("");function rl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ld(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sv=Ld,Md=new Ni("auth","Firebase",Ld());/**
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
 */const Ir=new nl("@firebase/auth");function iv(t,...e){Ir.logLevel<=le.WARN&&Ir.warn(`Auth (${Qn}): ${t}`,...e)}function cr(t,...e){Ir.logLevel<=le.ERROR&&Ir.error(`Auth (${Qn}): ${t}`,...e)}/**
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
 */function _t(t,...e){throw ol(t,...e)}function Rt(t,...e){return ol(t,...e)}function Ud(t,e,n){const s=Object.assign(Object.assign({},sv()),{[e]:n});return new Ni("auth","Firebase",s).create(e,{appName:t.name})}function Vt(t){return Ud(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ol(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Md.create(t,...e)}function H(t,e,...n){if(!t)throw ol(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cr(e),new Error(e)}function Wt(t,e){t||Lt(e)}/**
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
 */function pa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rv(){return Jc()==="http:"||Jc()==="https:"}function Jc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ov(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rv()||Um()||"connection"in navigator)?navigator.onLine:!0}function av(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wt(n>e,"Short delay should be less than long delay!"),this.isMobile=tl()||Ad()}get(){return ov()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function al(t,e){Wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Fd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cv=new Oi(3e4,6e4);function Sn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,s,i={}){return Bd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ks(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Fd.fetch()($d(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Bd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},lv),e);try{const i=new hv(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ji(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ji(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ji(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ud(t,u,c);_t(t,u)}}catch(i){if(i instanceof zt)throw i;_t(t,"network-request-failed",{message:String(i)})}}async function xi(t,e,n,s,i={}){const r=await Rn(t,e,n,s,i);return"mfaPendingCredential"in r&&_t(t,"multi-factor-auth-required",{_serverResponse:r}),r}function $d(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?al(t.config,i):`${t.config.apiScheme}://${i}`}function uv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rt(this.auth,"network-request-failed")),cv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ji(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Rt(t,e,s);return i.customData._tokenResponse=n,i}function Xc(t){return t!==void 0&&t.enterprise!==void 0}class dv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fv(t,e){return Rn(t,"GET","/v2/recaptchaConfig",Sn(t,e))}/**
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
 */async function pv(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function Vd(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _v(t,e=!1){const n=we(t),s=await n.getIdToken(e),i=ll(s);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Zs(Lo(i.auth_time)),issuedAtTime:Zs(Lo(i.iat)),expirationTime:Zs(Lo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Lo(t){return Number(t)*1e3}function ll(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return cr("JWT malformed, contained fewer than 3 sections"),null;try{const i=vr(n);return i?JSON.parse(i):(cr("Failed to decode base64 JWT payload"),null)}catch(i){return cr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zc(t){const e=ll(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof zt&&gv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function gv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _a{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await _i(t,Vd(n,{idToken:s}));H(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Hd(r.providerUserInfo):[],a=vv(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new _a(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function yv(t){const e=we(t);await Cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vv(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Hd(t){return t.map(e=>{var{providerId:n}=e,s=rl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function wv(t,e){const n=await Bd(t,{},async()=>{const s=ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=$d(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ev(t,e){return Rn(t,"POST","/v2/accounts:revokeToken",Sn(t,e))}/**
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
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Zc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await wv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new fs;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
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
 */function Zt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new _a(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _v(this,e)}reload(){return yv(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Cr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await _i(this,pv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:B,isAnonymous:re,providerData:$,stsTokenManager:Ee}=n;H(L&&Ee,e,"internal-error");const Te=fs.fromJSON(this.name,Ee);H(typeof L=="string",e,"internal-error"),Zt(h,e.name),Zt(d,e.name),H(typeof B=="boolean",e,"internal-error"),H(typeof re=="boolean",e,"internal-error"),Zt(_,e.name),Zt(m,e.name),Zt(I,e.name),Zt(A,e.name),Zt(N,e.name),Zt(O,e.name);const ot=new Mt({uid:L,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:re,photoURL:m,phoneNumber:_,tenantId:I,stsTokenManager:Te,createdAt:N,lastLoginAt:O});return $&&Array.isArray($)&&(ot.providerData=$.map(nt=>Object.assign({},nt))),A&&(ot._redirectEventId=A),ot}static async _fromIdTokenResponse(e,n,s=!1){const i=new fs;i.updateFromServerResponse(n);const r=new Mt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Cr(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Hd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new fs;a.updateFromIdToken(s);const l=new Mt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new _a(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const eu=new Map;function Ut(t){Wt(t instanceof Function,"Expected a class definition");let e=eu.get(t);return e?(Wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,eu.set(t,e),e)}/**
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
 */class Wd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wd.type="NONE";const tu=Wd;/**
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
 */function ur(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ur(this.userKey,i.apiKey,r),this.fullPersistenceKey=ur("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ps(Ut(tu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ut(tu);const o=ur(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Mt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ps(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ps(r,e,s))}}/**
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
 */function nu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zd(e))return"Blackberry";if(Yd(e))return"Webos";if(cl(e))return"Safari";if((e.includes("chrome/")||qd(e))&&!e.includes("edge/"))return"Chrome";if(Gd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function jd(t=Ve()){return/firefox\//i.test(t)}function cl(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qd(t=Ve()){return/crios\//i.test(t)}function Kd(t=Ve()){return/iemobile/i.test(t)}function Gd(t=Ve()){return/android/i.test(t)}function zd(t=Ve()){return/blackberry/i.test(t)}function Yd(t=Ve()){return/webos/i.test(t)}function io(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bv(t=Ve()){var e;return io(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Iv(){return Fm()&&document.documentMode===10}function Qd(t=Ve()){return io(t)||Gd(t)||Yd(t)||zd(t)||/windows phone/i.test(t)||Kd(t)}function Cv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jd(t,e=[]){let n;switch(t){case"Browser":n=nu(Ve());break;case"Worker":n=`${nu(Ve())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qn}/${s}`}/**
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
 */class Tv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Sv(t,e={}){return Rn(t,"GET","/v2/passwordPolicy",Sn(t,e))}/**
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
 */const Rv=6;class Av{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Rv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Pv{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new su(this),this.idTokenSubscription=new su(this),this.beforeStateQueue=new Tv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Md,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vd(this,{idToken:e}),s=await Mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=av()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(Vt(this));const n=e?we(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sv(this),n=new Av(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ev(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jn(t){return we(t)}class su{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gm(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ro={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kv(t){ro=t}function Xd(t){return ro.loadJS(t)}function Nv(){return ro.recaptchaEnterpriseScript}function Ov(){return ro.gapiScript}function xv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Dv="recaptcha-enterprise",Lv="NO_RECAPTCHA";class Mv{constructor(e){this.type=Dv,this.auth=Jn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{fv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new dv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Xc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Lv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Xc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Nv();l.length!==0&&(l+=a),Xd(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function iu(t,e,n,s=!1){const i=new Mv(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ga(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await iu(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await iu(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
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
 */function Uv(t,e){const n=no(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Er(r,e??{}))return i;_t(i,"already-initialized")}return n.initialize({options:e})}function Fv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Bv(t,e,n){const s=Jn(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Zd(e),{host:o,port:a}=$v(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),Vv()}function Zd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $v(t){const e=Zd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ru(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ru(o)}}}function ru(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ul{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}async function Hv(t,e){return Rn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Wv(t,e){return xi(t,"POST","/v1/accounts:signInWithPassword",Sn(t,e))}/**
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
 */async function jv(t,e){return xi(t,"POST","/v1/accounts:signInWithEmailLink",Sn(t,e))}async function qv(t,e){return xi(t,"POST","/v1/accounts:signInWithEmailLink",Sn(t,e))}/**
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
 */class gi extends ul{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new gi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new gi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ga(e,n,"signInWithPassword",Wv);case"emailLink":return jv(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ga(e,s,"signUpPassword",Hv);case"emailLink":return qv(e,{idToken:n,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _s(t,e){return xi(t,"POST","/v1/accounts:signInWithIdp",Sn(t,e))}/**
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
 */const Kv="http://localhost";class Wn extends ul{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=rl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Wn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_s(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:Kv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ks(n)}return e}}/**
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
 */function Gv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zv(t){const e=Ks(Gs(t)).link,n=e?Ks(Gs(e)).deep_link_id:null,s=Ks(Gs(t)).deep_link_id;return(s?Ks(Gs(s)).link:null)||s||n||e||t}class hl{constructor(e){var n,s,i,r,o,a;const l=Ks(Gs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Gv((i=l.mode)!==null&&i!==void 0?i:null);H(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zv(e);try{return new hl(n)}catch{return null}}}/**
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
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=hl.parseLink(n);return H(s,"argument-error"),gi._fromEmailAndCode(e,s.code,s.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ef{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Di extends ef{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class on extends Di{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
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
 */class an extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return an.credential(n,s)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
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
 */class ln extends Di{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
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
 */class cn extends Di{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return cn.credential(n,s)}catch{return null}}}cn.TWITTER_SIGN_IN_METHOD="twitter.com";cn.PROVIDER_ID="twitter.com";/**
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
 */async function Yv(t,e){return xi(t,"POST","/v1/accounts:signUp",Sn(t,e))}/**
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
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Mt._fromIdTokenResponse(e,s,i),o=ou(s);return new jn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ou(s);return new jn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ou(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Tr extends zt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Tr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Tr(e,n,s,i)}}function tf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Tr._fromErrorAndOperation(t,r,e,s):r})}async function Qv(t,e,n=!1){const s=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",s)}/**
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
 */async function Jv(t,e,n=!1){const{auth:s}=t;if(Ct(s.app))return Promise.reject(Vt(s));const i="reauthenticate";try{const r=await _i(t,tf(s,i,e,t),n);H(r.idToken,s,"internal-error");const o=ll(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),jn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_t(s,"user-mismatch"),r}}/**
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
 */async function nf(t,e,n=!1){if(Ct(t.app))return Promise.reject(Vt(t));const s="signIn",i=await tf(t,s,e),r=await jn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Xv(t,e){return nf(Jn(t),e)}/**
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
 */async function sf(t){const e=Jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zv(t,e,n){if(Ct(t.app))return Promise.reject(Vt(t));const s=Jn(t),o=await ga(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&sf(t),l}),a=await jn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function ew(t,e,n){return Ct(t.app)?Promise.reject(Vt(t)):Xv(we(t),Ns.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&sf(t),s})}/**
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
 */function tw(t,e){return we(t).setPersistence(e)}function nw(t,e,n,s){return we(t).onIdTokenChanged(e,n,s)}function sw(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function iw(t,e,n,s){return we(t).onAuthStateChanged(e,n,s)}function rf(t){return we(t).signOut()}const Sr="__sak";/**
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
 */class of{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sr,"1"),this.storage.removeItem(Sr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function rw(){const t=Ve();return cl(t)||io(t)}const ow=1e3,aw=10;class af extends of{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rw()&&Cv(),this.fallbackToPolling=Qd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Iv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aw):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ow)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}af.type="LOCAL";const lf=af;/**
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
 */class cf extends of{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cf.type="SESSION";const uf=cf;/**
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
 */function lw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new oo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await lw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oo.receivers=[];/**
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
 */function dl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=dl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function At(){return window}function uw(t){At().location.href=t}/**
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
 */function hf(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function hw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fw(){return hf()?self:null}/**
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
 */const df="firebaseLocalStorageDb",pw=1,Rr="firebaseLocalStorage",ff="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ao(t,e){return t.transaction([Rr],e?"readwrite":"readonly").objectStore(Rr)}function _w(){const t=indexedDB.deleteDatabase(df);return new Li(t).toPromise()}function ma(){const t=indexedDB.open(df,pw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Rr,{keyPath:ff})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Rr)?e(s):(s.close(),await _w(),e(await ma()))})})}async function au(t,e,n){const s=ao(t,!0).put({[ff]:e,value:n});return new Li(s).toPromise()}async function gw(t,e){const n=ao(t,!1).get(e),s=await new Li(n).toPromise();return s===void 0?null:s.value}function lu(t,e){const n=ao(t,!0).delete(e);return new Li(n).toPromise()}const mw=800,yw=3;class pf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ma(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>yw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oo._getInstance(fw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hw(),!this.activeServiceWorker)return;this.sender=new cw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ma();return await au(e,Sr,"1"),await lu(e,Sr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>au(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>gw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ao(i,!1).getAll();return new Li(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pf.type="LOCAL";const vw=pf;new Oi(3e4,6e4);/**
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
 */function ww(t,e){return e?Ut(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fl extends ul{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ew(t){return nf(t.auth,new fl(t),t.bypassAuthState)}function bw(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Jv(n,new fl(t),t.bypassAuthState)}async function Iw(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Qv(n,new fl(t),t.bypassAuthState)}/**
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
 */class _f{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ew;case"linkViaPopup":case"linkViaRedirect":return Iw;case"reauthViaPopup":case"reauthViaRedirect":return bw;default:_t(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Cw=new Oi(2e3,1e4);class as extends _f{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=dl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cw.get())};e()}}as.currentPopupAction=null;/**
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
 */const Tw="pendingRedirect",hr=new Map;class Sw extends _f{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=hr.get(this.auth._key());if(!e){try{const s=await Rw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}hr.set(this.auth._key(),e)}return this.bypassAuthState||hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rw(t,e){const n=kw(e),s=Pw(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Aw(t,e){hr.set(t._key(),e)}function Pw(t){return Ut(t._redirectPersistence)}function kw(t){return ur(Tw,t.config.apiKey,t.name)}async function Nw(t,e,n=!1){if(Ct(t.app))return Promise.reject(Vt(t));const s=Jn(t),i=ww(s,e),o=await new Sw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Ow=10*60*1e3;class xw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!gf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ow&&this.cachedEventUids.clear(),this.cachedEventUids.has(cu(e))}saveEventToCache(e){this.cachedEventUids.add(cu(e)),this.lastProcessedEventTime=Date.now()}}function cu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gf(t);default:return!1}}/**
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
 */async function Lw(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
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
 */const Mw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uw=/^https?/;async function Fw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lw(t);for(const n of e)try{if(Bw(n))return}catch{}_t(t,"unauthorized-domain")}function Bw(t){const e=pa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Uw.test(n))return!1;if(Mw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const $w=new Oi(3e4,6e4);function uu(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vw(t){return new Promise((e,n)=>{var s,i,r;function o(){uu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uu(),n(Rt(t,"network-request-failed"))},timeout:$w.get()})}if(!((i=(s=At().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=At().gapi)===null||r===void 0)&&r.load)o();else{const a=xv("iframefcb");return At()[a]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},Xd(`${Ov()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw dr=null,e})}let dr=null;function Hw(t){return dr=dr||Vw(t),dr}/**
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
 */const Ww=new Oi(5e3,15e3),jw="__/auth/iframe",qw="emulator/auth/iframe",Kw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zw(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?al(e,qw):`https://${t.config.authDomain}/${jw}`,s={apiKey:e.apiKey,appName:t.name,v:Qn},i=Gw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ks(s).slice(1)}`}async function Yw(t){const e=await Hw(t),n=At().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:zw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=At().setTimeout(()=>{r(o)},Ww.get());function l(){At().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Qw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jw=500,Xw=600,Zw="_blank",eE="http://localhost";class hu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tE(t,e,n,s=Jw,i=Xw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Qw),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ve().toLowerCase();n&&(a=qd(c)?Zw:n),jd(c)&&(e=e||eE,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(bv(c)&&a!=="_self")return nE(e||"",a),new hu(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new hu(h)}function nE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const sE="__/auth/handler",iE="emulator/auth/handler",rE=encodeURIComponent("fac");async function du(t,e,n,s,i,r){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Qn,eventId:i};if(e instanceof ef){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",la(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Di){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${rE}=${encodeURIComponent(l)}`:"";return`${oE(t)}?${ks(a).slice(1)}${c}`}function oE({config:t}){return t.emulator?al(t,iE):`https://${t.authDomain}/${sE}`}/**
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
 */const Mo="webStorageSupport";class aE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uf,this._completeRedirectFn=Nw,this._overrideRedirectResult=Aw}async _openPopup(e,n,s,i){var r;Wt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await du(e,n,s,pa(),i);return tE(e,o,dl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await du(e,n,s,pa(),i);return uw(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Wt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Yw(e),s=new xw(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mo,{type:Mo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Mo];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qd()||cl()||io()}}const lE=aE;var fu="@firebase/auth",pu="1.7.4";/**
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
 */class cE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hE(t){Hn(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jd(t)},c=new Pv(s,i,r,l);return Fv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Hn(new wn("auth-internal",e=>{const n=Jn(e.getProvider("auth").getImmediate());return(s=>new cE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(fu,pu,uE(t)),St(fu,pu,"esm2017")}/**
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
 */const dE=5*60,fE=Sd("authIdTokenMaxAge")||dE;let _u=null;const pE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>fE)return;const i=n==null?void 0:n.token;_u!==i&&(_u=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mf(t=il()){const e=no(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Uv(t,{popupRedirectResolver:lE,persistence:[vw,lf,uf]}),s=Sd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=pE(r.toString());sw(n,o,()=>o(n.currentUser)),nw(n,a=>o(a))}}const i=Id("auth");return i&&Bv(n,`http://${i}`),n}function _E(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kv({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Rt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",_E().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hE("Browser");const Nt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},gE={name:"App",setup(){return{store:Et}},methods:{logout(){Et.logout(),this.$router.push("/"),rf(mf(this.app)).then(()=>{Et.logout()}).catch(t=>{console.error(t)})}}},mE={id:"app"},yE={key:0},vE={key:1},wE={key:2},EE={key:3},bE=y("footer",null,[y("p",null,"© 2024 Monster of the Week Portal")],-1);function IE(t,e,n,s,i,r){const o=ys("router-link"),a=ys("router-view");return J(),X("div",mE,[y("header",null,[y("nav",null,[y("ul",null,[y("li",null,[te(o,{to:"/"},{default:De(()=>[Pe("Home")]),_:1})]),y("li",null,[te(o,{to:"/dashboard"},{default:De(()=>[Pe("Dashboard")]),_:1})]),y("li",null,[te(o,{to:"/case-files"},{default:De(()=>[Pe("Case Files")]),_:1})]),y("li",null,[te(o,{to:"/knowledge-base"},{default:De(()=>[Pe("Knowledge Base")]),_:1})]),y("li",null,[te(o,{to:"/acquisitions"},{default:De(()=>[Pe("Acquisitions")]),_:1})]),s.store.isAuthenticated?(J(),X("li",yE,[te(o,{to:"/inventory"},{default:De(()=>[Pe("Inventory")]),_:1})])):Dt("",!0),s.store.isAuthenticated?(J(),X("li",vE,[te(o,{to:"/profile"},{default:De(()=>[Pe("Profile")]),_:1})])):Dt("",!0),s.store.isAuthenticated?Dt("",!0):(J(),X("li",wE,[te(o,{to:"/login"},{default:De(()=>[Pe("Login")]),_:1})])),s.store.isAuthenticated?(J(),X("li",EE,[y("a",{href:"#",onClick:e[0]||(e[0]=(...l)=>r.logout&&r.logout(...l))},"Logout")])):Dt("",!0)])])]),y("main",null,[te(a)]),bE])}const CE=Nt(gE,[["render",IE]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function TE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function Uo(t,e){const n={};for(const s in e){const i=e[s];n[s]=gt(i)?i.map(t):t(i)}return n}const ei=()=>{},gt=Array.isArray,yf=/#/g,SE=/&/g,RE=/\//g,AE=/=/g,PE=/\?/g,vf=/\+/g,kE=/%5B/g,NE=/%5D/g,wf=/%5E/g,OE=/%60/g,Ef=/%7B/g,xE=/%7C/g,bf=/%7D/g,DE=/%20/g;function pl(t){return encodeURI(""+t).replace(xE,"|").replace(kE,"[").replace(NE,"]")}function LE(t){return pl(t).replace(Ef,"{").replace(bf,"}").replace(wf,"^")}function ya(t){return pl(t).replace(vf,"%2B").replace(DE,"+").replace(yf,"%23").replace(SE,"%26").replace(OE,"`").replace(Ef,"{").replace(bf,"}").replace(wf,"^")}function ME(t){return ya(t).replace(AE,"%3D")}function UE(t){return pl(t).replace(yf,"%23").replace(PE,"%3F")}function FE(t){return t==null?"":UE(t).replace(RE,"%2F")}function mi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const BE=/\/$/,$E=t=>t.replace(BE,"");function Fo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=jE(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:mi(o)}}function VE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function HE(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Es(e.matched[s],n.matched[i])&&If(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function If(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!WE(t[n],e[n]))return!1;return!0}function WE(t,e){return gt(t)?mu(t,e):gt(e)?mu(e,t):t===e}function mu(t,e){return gt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function jE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}var yi;(function(t){t.pop="pop",t.push="push"})(yi||(yi={}));var ti;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ti||(ti={}));function qE(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$E(t)}const KE=/^[^#]+#/;function GE(t,e){return t.replace(KE,"#")+e}function zE(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const lo=()=>({left:window.scrollX,top:window.scrollY});function YE(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=zE(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function yu(t,e){return(history.state?history.state.position-e:-1)+t}const va=new Map;function QE(t,e){va.set(t,e)}function JE(t){const e=va.get(t);return va.delete(t),e}let XE=()=>location.protocol+"//"+location.host;function Cf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),gu(l,"")}return gu(n,t)+s+i}function ZE(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=Cf(t,location),m=n.value,I=e.value;let A=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}A=I?d.position-I.position:0}else s(_);i.forEach(N=>{N(n.value,m,{delta:A,type:yi.pop,direction:A?A>0?ti.forward:ti.back:ti.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(ie({},d.state,{scroll:lo()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function vu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?lo():null}}function eb(t){const{history:e,location:n}=window,s={value:Cf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:XE()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=ie({},e.state,vu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ie({},i.value,e.state,{forward:l,scroll:lo()});r(u.current,u,!0);const h=ie({},vu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function tb(t){t=qE(t);const e=eb(t),n=ZE(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ie({location:"",base:t,go:s,createHref:GE.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function nb(t){return typeof t=="string"||t&&typeof t=="object"}function Tf(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Sf=Symbol("");var wu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wu||(wu={}));function bs(t,e){return ie(new Error,{type:t,[Sf]:!0},e)}function xt(t,e){return t instanceof Error&&Sf in t&&(e==null||!!(t.type&e))}const Eu="[^/]+?",sb={sensitive:!1,strict:!1,start:!0,end:!0},ib=/[.+*?^${}()[\]/\\]/g;function rb(t,e){const n=ie({},sb,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(ib,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:I,optional:A,regexp:N}=d;r.push({name:m,repeatable:I,optional:A});const O=N||Eu;if(O!==Eu){_+=10;try{new RegExp(`(${O})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+B.message)}}let L=I?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(L=A&&c.length<2?`(?:/${L})`:"/"+L),A&&(L+="?"),i+=L,_+=20,A&&(_+=-8),I&&(_+=-20),O===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:I,optional:A}=_,N=m in c?c[m]:"";if(gt(N)&&!I)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=gt(N)?N.join("/"):N;if(!O)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function ob(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ab(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=ob(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(bu(s))return 1;if(bu(i))return-1}return i.length-s.length}function bu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lb={type:0,value:""},cb=/[a-zA-Z0-9_]/;function ub(t){if(!t)return[[]];if(t==="/")return[[lb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:cb.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function hb(t,e,n){const s=rb(ub(t.path),n),i=ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function db(t,e){const n=[],s=new Map;e=Tu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,m=fb(u);m.aliasOf=d&&d.record;const I=Tu(e,u),A=[m];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of L)A.push(ie({},m,{components:d?d.record.components:m.components,path:B,aliasOf:d?d.record:m}))}let N,O;for(const L of A){const{path:B}=L;if(h&&B[0]!=="/"){const re=h.record.path,$=re[re.length-1]==="/"?"":"/";L.path=h.record.path+(B&&$+B)}if(N=hb(L,h,I),d?d.alias.push(N):(O=O||N,O!==N&&O.alias.push(N),_&&u.name&&!Cu(N)&&o(u.name)),m.children){const re=m.children;for(let $=0;$<re.length;$++)r(re[$],N,d&&d.children[$])}d=d||N,(N.record.components&&Object.keys(N.record.components).length||N.record.name||N.record.redirect)&&l(N)}return O?()=>{o(O)}:ei}function o(u){if(Tf(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&ab(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Rf(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Cu(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},m,I;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw bs(1,{location:u});I=d.record.name,_=ie(Iu(h.params,d.keys.filter(O=>!O.optional).concat(d.parent?d.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),u.params&&Iu(u.params,d.keys.map(O=>O.name))),m=d.stringify(_)}else if(u.path!=null)m=u.path,d=n.find(O=>O.re.test(m)),d&&(_=d.parse(m),I=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw bs(1,{location:u,currentLocation:h});I=d.record.name,_=ie({},h.params,u.params),m=d.stringify(_)}const A=[];let N=d;for(;N;)A.unshift(N.record),N=N.parent;return{name:I,path:m,params:_,matched:A,meta:_b(A)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Iu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function fb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:pb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function pb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Cu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _b(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function Tu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Rf(t,e){return e.children.some(n=>n===t||Rf(t,n))}function gb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(vf," "),o=r.indexOf("="),a=mi(o<0?r:r.slice(0,o)),l=o<0?null:mi(r.slice(o+1));if(a in e){let c=e[a];gt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Su(t){let e="";for(let n in t){const s=t[n];if(n=ME(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(gt(s)?s.map(r=>r&&ya(r)):[s&&ya(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function mb(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=gt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const yb=Symbol(""),Ru=Symbol(""),_l=Symbol(""),Af=Symbol(""),wa=Symbol("");function Fs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(bs(4,{from:n,to:e})):d instanceof Error?l(d):nb(d)?l(bs(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Bo(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(vb(l)){const u=(l.__vccOpts||l)[e];u&&r.push(rn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=TE(u)?u.default:u;o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&rn(_,n,s,o,a,i)()}))}}return r}function vb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Au(t){const e=$t(_l),n=$t(Af),s=ct(()=>{const l=hs(t.to);return e.resolve(l)}),i=ct(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Es.bind(null,u));if(d>-1)return d;const _=Pu(l[c-2]);return c>1&&Pu(u)===_&&h[h.length-1].path!==_?h.findIndex(Es.bind(null,l[c-2])):d}),r=ct(()=>i.value>-1&&Ib(n.params,s.value.params)),o=ct(()=>i.value>-1&&i.value===n.matched.length-1&&If(n.params,s.value.params));function a(l={}){return bb(l)?e[hs(t.replace)?"replace":"push"](hs(t.to)).catch(ei):Promise.resolve()}return{route:s,href:ct(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const wb=Xh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Au,setup(t,{slots:e}){const n=Ai(Au(t)),{options:s}=$t(_l),i=ct(()=>({[ku(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ku(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:yd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Eb=wb;function bb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ib(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!gt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Pu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ku=(t,e,n)=>t??e??n,Cb=Xh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=$t(wa),i=ct(()=>t.route||s.value),r=$t(Ru,0),o=ct(()=>{let c=hs(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ct(()=>i.value.matched[o.value]);or(Ru,ct(()=>o.value+1)),or(yb,a),or(wa,i);const l=H_();return ir(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!Es(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Nu(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,A=yd(d,ie({},m,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Nu(n.default,{Component:A,route:c})||A}}});function Nu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Tb=Cb;function Sb(t){const e=db(t.routes,t),n=t.parseQuery||gb,s=t.stringifyQuery||Su,i=t.history,r=Fs(),o=Fs(),a=Fs(),l=W_(en);let c=en;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Uo.bind(null,w=>""+w),h=Uo.bind(null,FE),d=Uo.bind(null,mi);function _(w,x){let P,M;return Tf(w)?(P=e.getRecordMatcher(w),M=x):M=w,e.addRoute(M,P)}function m(w){const x=e.getRecordMatcher(w);x&&e.removeRoute(x)}function I(){return e.getRoutes().map(w=>w.record)}function A(w){return!!e.getRecordMatcher(w)}function N(w,x){if(x=ie({},x||l.value),typeof w=="string"){const p=Fo(n,w,x.path),g=e.resolve({path:p.path},x),E=i.createHref(p.fullPath);return ie(p,g,{params:d(g.params),hash:mi(p.hash),redirectedFrom:void 0,href:E})}let P;if(w.path!=null)P=ie({},w,{path:Fo(n,w.path,x.path).path});else{const p=ie({},w.params);for(const g in p)p[g]==null&&delete p[g];P=ie({},w,{params:h(p)}),x.params=h(x.params)}const M=e.resolve(P,x),se=w.hash||"";M.params=u(d(M.params));const _e=VE(s,ie({},w,{hash:LE(se),path:M.path})),f=i.createHref(_e);return ie({fullPath:_e,hash:se,query:s===Su?mb(w.query):w.query||{}},M,{redirectedFrom:void 0,href:f})}function O(w){return typeof w=="string"?Fo(n,w,l.value.path):ie({},w)}function L(w,x){if(c!==w)return bs(8,{from:x,to:w})}function B(w){return Ee(w)}function re(w){return B(ie(O(w),{replace:!0}))}function $(w){const x=w.matched[w.matched.length-1];if(x&&x.redirect){const{redirect:P}=x;let M=typeof P=="function"?P(w):P;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=O(M):{path:M},M.params={}),ie({query:w.query,hash:w.hash,params:M.path!=null?{}:w.params},M)}}function Ee(w,x){const P=c=N(w),M=l.value,se=w.state,_e=w.force,f=w.replace===!0,p=$(P);if(p)return Ee(ie(O(p),{state:typeof p=="object"?ie({},se,p.state):se,force:_e,replace:f}),x||P);const g=P;g.redirectedFrom=x;let E;return!_e&&HE(s,M,P)&&(E=bs(16,{to:g,from:M}),yt(M,M,!0,!1)),(E?Promise.resolve(E):nt(g,M)).catch(v=>xt(v)?xt(v,2)?v:Jt(v):ee(v,g,M)).then(v=>{if(v){if(xt(v,2))return Ee(ie({replace:f},O(v.to),{state:typeof v.to=="object"?ie({},se,v.to.state):se,force:_e}),x||g)}else v=An(g,M,!0,f,se);return Qt(g,M,v),v})}function Te(w,x){const P=L(w,x);return P?Promise.reject(P):Promise.resolve()}function ot(w){const x=ns.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(w):w()}function nt(w,x){let P;const[M,se,_e]=Rb(w,x);P=Bo(M.reverse(),"beforeRouteLeave",w,x);for(const p of M)p.leaveGuards.forEach(g=>{P.push(rn(g,w,x))});const f=Te.bind(null,w,x);return P.push(f),Ue(P).then(()=>{P=[];for(const p of r.list())P.push(rn(p,w,x));return P.push(f),Ue(P)}).then(()=>{P=Bo(se,"beforeRouteUpdate",w,x);for(const p of se)p.updateGuards.forEach(g=>{P.push(rn(g,w,x))});return P.push(f),Ue(P)}).then(()=>{P=[];for(const p of _e)if(p.beforeEnter)if(gt(p.beforeEnter))for(const g of p.beforeEnter)P.push(rn(g,w,x));else P.push(rn(p.beforeEnter,w,x));return P.push(f),Ue(P)}).then(()=>(w.matched.forEach(p=>p.enterCallbacks={}),P=Bo(_e,"beforeRouteEnter",w,x,ot),P.push(f),Ue(P))).then(()=>{P=[];for(const p of o.list())P.push(rn(p,w,x));return P.push(f),Ue(P)}).catch(p=>xt(p,8)?p:Promise.reject(p))}function Qt(w,x,P){a.list().forEach(M=>ot(()=>M(w,x,P)))}function An(w,x,P,M,se){const _e=L(w,x);if(_e)return _e;const f=x===en,p=os?history.state:{};P&&(M||f?i.replace(w.fullPath,ie({scroll:f&&p&&p.scroll},se)):i.push(w.fullPath,se)),l.value=w,yt(w,x,P,f),Jt()}let mt;function Ls(){mt||(mt=i.listen((w,x,P)=>{if(!ji.listening)return;const M=N(w),se=$(M);if(se){Ee(ie(se,{replace:!0}),M).catch(ei);return}c=M;const _e=l.value;os&&QE(yu(_e.fullPath,P.delta),lo()),nt(M,_e).catch(f=>xt(f,12)?f:xt(f,2)?(Ee(f.to,M).then(p=>{xt(p,20)&&!P.delta&&P.type===yi.pop&&i.go(-1,!1)}).catch(ei),Promise.reject()):(P.delta&&i.go(-P.delta,!1),ee(f,M,_e))).then(f=>{f=f||An(M,_e,!1),f&&(P.delta&&!xt(f,8)?i.go(-P.delta,!1):P.type===yi.pop&&xt(f,20)&&i.go(-1,!1)),Qt(M,_e,f)}).catch(ei)}))}let es=Fs(),Se=Fs(),oe;function ee(w,x,P){Jt(w);const M=Se.list();return M.length?M.forEach(se=>se(w,x,P)):console.error(w),Promise.reject(w)}function Ot(){return oe&&l.value!==en?Promise.resolve():new Promise((w,x)=>{es.add([w,x])})}function Jt(w){return oe||(oe=!w,Ls(),es.list().forEach(([x,P])=>w?P(w):x()),es.reset()),w}function yt(w,x,P,M){const{scrollBehavior:se}=t;if(!os||!se)return Promise.resolve();const _e=!P&&JE(yu(w.fullPath,0))||(M||!P)&&history.state&&history.state.scroll||null;return jh().then(()=>se(w,x,_e)).then(f=>f&&YE(f)).catch(f=>ee(f,w,x))}const Ge=w=>i.go(w);let ts;const ns=new Set,ji={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,hasRoute:A,getRoutes:I,resolve:N,options:t,push:B,replace:re,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Se.add,isReady:Ot,install(w){const x=this;w.component("RouterLink",Eb),w.component("RouterView",Tb),w.config.globalProperties.$router=x,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>hs(l)}),os&&!ts&&l.value===en&&(ts=!0,B(i.location).catch(se=>{}));const P={};for(const se in en)Object.defineProperty(P,se,{get:()=>l.value[se],enumerable:!0});w.provide(_l,x),w.provide(Af,Mh(P)),w.provide(wa,l);const M=w.unmount;ns.add(w),w.unmount=function(){ns.delete(w),ns.size<1&&(c=en,mt&&mt(),mt=null,l.value=en,ts=!1,oe=!1),M()}}};function Ue(w){return w.reduce((x,P)=>x.then(()=>ot(P)),Promise.resolve())}return ji}function Rb(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Es(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Es(c,l))||i.push(l))}return[n,s,i]}const Ab={name:"Home"},Pb=t=>(qt("data-v-94bdd772"),t=t(),Kt(),t),kb={class:"home"},Nb=Pb(()=>y("h1",null,"Welcome to the Monster of the Week Portal",-1));function Ob(t,e,n,s,i,r){const o=ys("router-link");return J(),X("div",kb,[Nb,te(o,{to:"/dashboard"},{default:De(()=>[Pe("Go to Dashboard")]),_:1})])}const xb=Nt(Ab,[["render",Ob],["__scopeId","data-v-94bdd772"]]);var Db="firebase",Lb="10.12.2";/**
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
 */St(Db,Lb,"app");var Ou={};const xu="@firebase/database",Du="1.0.5";/**
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
 */let Pf="";function Mb(t){Pf=t}/**
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
 */class Ub{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Fb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const kf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ub(e)}}catch{}return new Fb},Mn=kf("localStorage"),Bb=kf("sessionStorage");/**
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
 */const gs=new nl("@firebase/database"),$b=function(){let t=1;return function(){return t++}}(),Nf=function(t){const e=Qm(t),n=new Km;n.update(e);const s=n.digest();return Za.encodeByteArray(s)},Mi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Mi.apply(null,s):typeof s=="object"?e+=Ie(s):e+=s,e+=" "}return e};let ni=null,Lu=!0;const Vb=function(t,e){C(!e,"Can't turn on custom loggers persistently."),gs.logLevel=le.VERBOSE,ni=gs.log.bind(gs)},Le=function(...t){if(Lu===!0&&(Lu=!1,ni===null&&Bb.get("logging_enabled")===!0&&Vb()),ni){const e=Mi.apply(null,t);ni(e)}},Ui=function(t){return function(...e){Le(t,...e)}},Ea=function(...t){const e="FIREBASE INTERNAL ERROR: "+Mi(...t);gs.error(e)},jt=function(...t){const e=`FIREBASE FATAL ERROR: ${Mi(...t)}`;throw gs.error(e),new Error(e)},qe=function(...t){const e="FIREBASE WARNING: "+Mi(...t);gs.warn(e)},Hb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},gl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Wb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Is="[MIN_NAME]",qn="[MAX_NAME]",Xn=function(t,e){if(t===e)return 0;if(t===Is||e===qn)return-1;if(e===Is||t===qn)return 1;{const n=Mu(t),s=Mu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},jb=function(t,e){return t===e?0:t<e?-1:1},Bs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},ml=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ie(e[s]),n+=":",n+=ml(t[e[s]]);return n+="}",n},Of=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xf=function(t){C(!gl(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},qb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Kb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Gb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const zb=new RegExp("^-?(0*)\\d{1,10}$"),Yb=-2147483648,Qb=2147483647,Mu=function(t){if(zb.test(t)){const e=Number(t);if(e>=Yb&&e<=Qb)return e}return null},Os=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Jb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},si=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Xb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Zb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qe(e)}}class fr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fr.OWNER="owner";/**
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
 */const yl="5",Df="v",Lf="s",Mf="r",Uf="f",Ff=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bf="ls",$f="p",ba="ac",Vf="websocket",Hf="long_polling";/**
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
 */class Wf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jf(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===Vf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Hf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eI(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class tI{constructor(){this.counters_={}}incrementCounter(e,n=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Nm(this.counters_)}}/**
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
 */const $o={},Vo={};function vl(t){const e=t.toString();return $o[e]||($o[e]=new tI),$o[e]}function nI(t,e){const n=t.toString();return Vo[n]||(Vo[n]=e()),Vo[n]}/**
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
 */class sI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Os(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Uu="start",iI="close",rI="pLPCommand",oI="pRTLPCB",qf="id",Kf="pw",Gf="ser",aI="cb",lI="seg",cI="ts",uI="d",hI="dframe",zf=1870,Yf=30,dI=zf-Yf,fI=25e3,pI=3e4;class ls{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ui(e),this.stats_=vl(n),this.urlFn=l=>(this.appCheckToken&&(l[ba]=this.appCheckToken),jf(n,Hf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pI)),Wb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Uu)this.id=a,this.password=l;else if(o===iI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Uu]="t",s[Gf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[aI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Df]=yl,this.transportSessionId&&(s[Lf]=this.transportSessionId),this.lastSessionId&&(s[Bf]=this.lastSessionId),this.applicationId&&(s[$f]=this.applicationId),this.appCheckToken&&(s[ba]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ff.test(location.hostname)&&(s[Mf]=Uf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ls.forceAllow_=!0}static forceDisallow(){ls.forceDisallow_=!0}static isAvailable(){return ls.forceAllow_?!0:!ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qb()&&!Kb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ed(n),i=Of(s,dI);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[hI]="t",s[qf]=e,s[Kf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$b(),window[rI+this.uniqueCallbackIdentifier]=e,window[oI+this.uniqueCallbackIdentifier]=n,this.myIFrame=wl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qf]=this.myID,e[Kf]=this.myPW,e[Gf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yf+s.length<=zf;){const o=this.pendingSegs.shift();s=s+"&"+lI+i+"="+o.seg+"&"+cI+i+"="+o.ts+"&"+uI+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(fI)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const _I=16384,gI=45e3;let Ar=null;typeof MozWebSocket<"u"?Ar=MozWebSocket:typeof WebSocket<"u"&&(Ar=WebSocket);class ut{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ui(this.connId),this.stats_=vl(n),this.connURL=ut.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Df]=yl,typeof location<"u"&&location.hostname&&Ff.test(location.hostname)&&(o[Mf]=Uf),n&&(o[Lf]=n),s&&(o[Bf]=s),i&&(o[ba]=i),r&&(o[$f]=r),jf(e,Vf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mn.set("previous_websocket_failure",!0);try{let s;Pd(),this.mySock=new Ar(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ar!==null&&!ut.forceDisallow_}static previouslyFailed(){return Mn.isInMemoryStorage||Mn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=fi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Of(n,_I);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ut.responsesRequiredToBeHealthy=2;ut.healthyTimeout=3e4;/**
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
 */class vi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ls,ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ut&&ut.isAvailable();let s=n&&!ut.previouslyFailed();if(e.webSocketOnly&&(n||qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ut];else{const i=this.transports_=[];for(const r of vi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);vi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}vi.globalTransportInitialized_=!1;/**
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
 */const mI=6e4,yI=5e3,vI=10*1024,wI=100*1024,Ho="t",Fu="d",EI="s",Bu="r",bI="e",$u="o",Vu="a",Hu="n",Wu="p",II="h";class CI{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ui("c:"+this.id+":"),this.transportManager_=new vi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=si(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ho in e){const n=e[Ho];n===Vu?this.upgradeIfSecondaryHealthy_():n===Bu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$u&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Bs("t",e),s=Bs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Bs("t",e),s=Bs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Bs(Ho,e);if(Fu in e){const s=e[Fu];if(n===II){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Hu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===EI?this.onConnectionShutdown_(s):n===Bu?this.onReset_(s):n===bI?Ea("Server Error: "+s):n===$u?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ea("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),yl!==s&&qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),si(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):si(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Qf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Jf{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Pr extends Jf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pr}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ju=32,qu=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ce("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function En(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function El(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function TI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Xf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function ge(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ce(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=K(t),s=K(e);if(n===null)return e;if(n===s)return je(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function SI(t,e){const n=wi(t,0),s=wi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Xn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function bl(t,e){if(En(t)!==En(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function it(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(En(t)>En(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class RI{constructor(e,n){this.errorPrefix_=n,this.parts_=wi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=to(this.parts_[s]);Zf(this)}}function AI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=to(e),Zf(t)}function PI(t){const e=t.parts_.pop();t.byteLength_-=to(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zf(t){if(t.byteLength_>qu)throw new Error(t.errorPrefix_+"has a key path longer than "+qu+" bytes ("+t.byteLength_+").");if(t.parts_.length>ju)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ju+") or object contains a cycle "+On(t))}function On(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Il extends Jf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Il}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const $s=1e3,kI=60*5*1e3,Ku=30*1e3,NI=1.3,OI=3e4,xI="server_kill",Gu=3;class Ht extends Qf{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ht.nextPersistentConnectionId_++,this.log_=Ui("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$s,this.maxReconnectDelay_=kI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Pd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Il.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ie(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ki,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ht.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kt(e,"w")){const s=ws(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ku)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jm(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ea("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OI&&(this.reconnectDelay_=$s),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ht.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new CI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{qe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(xI)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qe(h),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],la(this.interruptReasons_)&&(this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ml(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ce(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gu&&(this.reconnectDelay_=Ku,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Pf.replace(/\./g,"-")]=1,tl()?e["framework.cordova"]=1:Ad()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pr.getInstance().currentlyOnline();return la(this.interruptReasons_)&&e}}Ht.nextPersistentConnectionId_=0;Ht.nextConnectionId_=0;/**
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
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
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
 */class co{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(Is,e),i=new G(Is,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
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
 */let Xi;class ep extends co{static get __EMPTY_NODE(){return Xi}static set __EMPTY_NODE(e){Xi=e}compare(e,n){return Xn(e.name,n.name)}isDefinedOn(e){throw Ps("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(qn,Xi)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Xi)}toString(){return".key"}}const ms=new ep;/**
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
 */class Zi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ke.RED,this.left=i??Je.EMPTY_NODE,this.right=r??Je.EMPTY_NODE}copy(e,n,s,i,r){return new ke(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class DI{copy(e,n,s,i,r){return this}insert(e,n,s){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zi(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new DI;/**
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
 */function LI(t,e){return Xn(t.name,e.name)}function Cl(t,e){return Xn(t,e)}/**
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
 */let Ia;function MI(t){Ia=t}const tp=function(t){return typeof t=="number"?"number:"+xf(t):"string:"+t},np=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else C(t===Ia||t.isEmpty(),"priority of unexpected type.");C(t===Ia||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let zu;class Ae{constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),np(this.priorityNode_)}static set __childrenNodeConstructor(e){zu=e}static get __childrenNodeConstructor(){return zu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:K(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=K(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||En(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xf(this.value_):e+=this.value_,this.lazyHash_=Nf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),r=Ae.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let sp,ip;function UI(t){sp=t}function FI(t){ip=t}class BI extends co{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Xn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(qn,new Ae("[PRIORITY-POST]",ip))}makePost(e,n){const s=sp(e);return new G(n,new Ae("[PRIORITY-POST]",s))}toString(){return".priority"}}const me=new BI;/**
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
 */const $I=Math.log(2);class VI{constructor(e){const n=r=>parseInt(Math.log(r)/$I,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ke(d,h.node,ke.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),I=i(_+1,c);return h=t[_],d=n?n(h):h,new ke(d,h.node,ke.BLACK,m,I)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,I){const A=h-m,N=h;h-=m;const O=i(A+1,N),L=t[A],B=n?n(L):L;_(new ke(B,L.node,I,null,O))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const I=l.nextBitIsOne(),A=Math.pow(2,l.count-(m+1));I?d(A,ke.BLACK):(d(A,ke.BLACK),d(A,ke.RED))}return u},o=new VI(t.length),a=r(o);return new Je(s||e,a)};/**
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
 */let Wo;const is={};class Ft{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(is&&me,"ChildrenNode.ts has not been loaded"),Wo=Wo||new Ft({".priority":is},{".priority":me}),Wo}get(e){const n=ws(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=kr(s,e.getCompare()):a=is;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ft(u,c)}addToIndexes(e,n){const s=wr(this.indexes_,(i,r)=>{const o=ws(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===is)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),kr(a,o.getCompare())}else return is;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new Ft(s,this.indexSet_)}removeFromIndexes(e,n){const s=wr(this.indexes_,i=>{if(i===is)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new Ft(s,this.indexSet_)}}/**
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
 */let Vs;class V{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&np(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Vs||(Vs=new V(new Je(Cl),null,Ft.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vs}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vs:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Vs:this.priorityNode_;return new V(i,o,r)}}updateChild(e,n){const s=K(e);if(s===null)return n;{C(K(e)!==".priority"||En(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(he(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(me,(o,a)=>{n[o]=a.val(e),s++,r&&V.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tp(this.getPriority().val())+":"),this.forEachChild(me,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Nf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fi?-1:0}withIndex(e){if(e===ms||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(me),i=n.getIterator(me);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ms?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class HI extends V{constructor(){super(new Je(Cl),V.EMPTY_NODE,Ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Fi=new HI;Object.defineProperties(G,{MIN:{value:new G(Is,V.EMPTY_NODE)},MAX:{value:new G(qn,Fi)}});ep.__EMPTY_NODE=V.EMPTY_NODE;Ae.__childrenNodeConstructor=V;MI(Fi);FI(Fi);/**
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
 */const WI=!0;function be(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,be(e))}if(!(t instanceof Array)&&WI){const n=[];let s=!1;if(Me(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=be(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new G(o,l)))}}),n.length===0)return V.EMPTY_NODE;const r=kr(n,LI,o=>o.name,Cl);if(s){const o=kr(n,me.getCompare());return new V(r,be(e),new Ft({".priority":o},{".priority":me}))}else return new V(r,be(e),Ft.Default)}else{let n=V.EMPTY_NODE;return Me(t,(s,i)=>{if(kt(t,s)&&s.substring(0,1)!=="."){const r=be(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(be(e))}}UI(be);/**
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
 */class jI extends co{constructor(e){super(),this.indexPath_=e,C(!z(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Xn(e.name,n.name):r}makePost(e,n){const s=be(e),i=V.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Fi);return new G(qn,e)}toString(){return wi(this.indexPath_,0).join("/")}}/**
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
 */class qI extends co{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Xn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=be(e);return new G(n,s)}toString(){return".value"}}const KI=new qI;/**
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
 */function rp(t){return{type:"value",snapshotNode:t}}function Cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ei(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function GI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Tl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ei(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Cs(n,s)):o.trackChildChange(bi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(me,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ei(i,r))}),n.isLeafNode()||n.forEachChild(me,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(bi(i,r,o))}else s.trackChildChange(Cs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ii{constructor(e){this.indexedFilter_=new Tl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ii.getStartPost_(e),this.endPost_=Ii.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=V.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(V.EMPTY_NODE);const r=this;return n.forEachChild(me,(o,a)=>{r.matches(new G(o,a))||(i=i.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class zI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ii(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=V.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=V.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(V.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new G(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(bi(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ei(n,h));const I=a.updateImmediateChild(n,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Cs(d.name,d.node)),I.updateImmediateChild(d.name,d.node)):I}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ei(c.name,c.node)),r.trackChildChange(Cs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
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
 */class Sl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Is}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Sl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function YI(t){return t.loadsAllData()?new Tl(t.getIndex()):t.hasLimit()?new zI(t):new Ii(t)}function Yu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===KI?n="$value":t.index_===ms?n="$key":(C(t.index_ instanceof jI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ie(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ie(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ie(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
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
 */class Nr extends Qf{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ui("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Nr.getListenId_(e,s),a={};this.listens_[o]=a;const l=Yu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ws(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Nr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Yu(e._queryParams),s=e._path.toString(),i=new ki;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ks(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fi(a.responseText)}catch{qe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&qe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class QI{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Or(){return{value:null,children:new Map}}function op(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=K(e);t.children.has(s)||t.children.set(s,Or());const i=t.children.get(s);e=he(e),op(i,e,n)}}function Ca(t,e,n){t.value!==null?n(e,t.value):JI(t,(s,i)=>{const r=new ce(e.toString()+"/"+s);Ca(i,r,n)})}function JI(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class XI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Ju=10*1e3,ZI=30*1e3,eC=5*60*1e3;class tC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new XI(e);const s=Ju+(ZI-Ju)*Math.random();si(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&kt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),si(this.reportStats_.bind(this),Math.floor(Math.random()*2*eC))}}/**
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
 */var dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dt||(dt={}));function Rl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Al(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class xr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=dt.ACK_USER_WRITE,this.source=Rl()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new xr(Z(),n,this.revert)}}else return C(K(this.path)===e,"operationForChild called for unrelated child."),new xr(he(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ci{constructor(e,n){this.source=e,this.path=n,this.type=dt.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Ci(this.source,Z()):new Ci(this.source,he(this.path))}}/**
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
 */class Kn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=dt.OVERWRITE}operationForChild(e){return z(this.path)?new Kn(this.source,Z(),this.snap.getImmediateChild(e)):new Kn(this.source,he(this.path),this.snap)}}/**
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
 */class Ts{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=dt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new Kn(this.source,Z(),n.value):new Ts(this.source,Z(),n)}else return C(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ts(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class bn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class nC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(GI(o.childName,o.snapshotNode))}),Hs(t,i,"child_removed",e,s,n),Hs(t,i,"child_added",e,s,n),Hs(t,i,"child_moved",r,s,n),Hs(t,i,"child_changed",e,s,n),Hs(t,i,"value",e,s,n),i}function Hs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>rC(t,a,l)),o.forEach(a=>{const l=iC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function iC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rC(t,e,n){if(e.childName==null||n.childName==null)throw Ps("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function uo(t,e){return{eventCache:t,serverCache:e}}function ii(t,e,n,s){return uo(new bn(e,n,s),t.serverCache)}function ap(t,e,n,s){return uo(t.eventCache,new bn(e,n,s))}function Dr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let jo;const oC=()=>(jo||(jo=new Je(jb)),jo);class ue{constructor(e,n=oC()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return Me(e,(s,i)=>{n=n.set(new ce(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(z(e))return null;{const s=K(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(he(e),n);return r!=null?{path:ge(new ce(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=K(e),s=this.children.get(n);return s!==null?s.subtree(he(e)):new ue(null)}}set(e,n){if(z(e))return new ue(n,this.children);{const s=K(e),r=(this.children.get(s)||new ue(null)).set(he(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=K(e),s=this.children.get(n);if(s){const i=s.remove(he(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=K(e),s=this.children.get(n);return s?s.get(he(e)):null}}setTree(e,n){if(z(e))return n;{const s=K(e),r=(this.children.get(s)||new ue(null)).setTree(he(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ge(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=K(e),o=this.children.get(r);return o?o.findOnPath_(he(e),ge(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=K(e),r=this.children.get(i);return r?r.foreachOnPath_(he(e),ge(n,i),s):new ue(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ge(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new ue(null))}}function ri(t,e,n){if(z(e))return new pt(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=je(i,e);return r=r.updateChild(o,n),new pt(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new pt(r)}}}function Ta(t,e,n){let s=t;return Me(n,(i,r)=>{s=ri(s,ge(e,i),r)}),s}function Xu(t,e){if(z(e))return pt.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new pt(n)}}function Sa(t,e){return Zn(t,e)!=null}function Zn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Zu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function mn(t,e){if(z(e))return t;{const n=Zn(t,e);return n!=null?new pt(new ue(n)):new pt(t.writeTree_.subtree(e))}}function Ra(t){return t.writeTree_.isEmpty()}function Ss(t,e){return lp(Z(),t.writeTree_,e)}function lp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=lp(ge(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ge(t,".priority"),s)),n}}/**
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
 */function ho(t,e){return dp(e,t)}function aC(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ri(t.visibleWrites,e,n)),t.lastWriteId=s}function lC(t,e,n,s){C(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Ta(t.visibleWrites,e,n),t.lastWriteId=s}function cC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function uC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&hC(a,s.path)?i=!1:it(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return dC(t),!0;if(s.snap)t.visibleWrites=Xu(t.visibleWrites,s.path);else{const a=s.children;Me(a,l=>{t.visibleWrites=Xu(t.visibleWrites,ge(s.path,l))})}return!0}else return!1}function hC(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(ge(t.path,n),e))return!0;return!1}function dC(t){t.visibleWrites=cp(t.allWrites,fC,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function fC(t){return t.visible}function cp(t,e,n){let s=pt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)it(n,o)?(a=je(n,o),s=ri(s,a,r.snap)):it(o,n)&&(a=je(o,n),s=ri(s,Z(),r.snap.getChild(a)));else if(r.children){if(it(n,o))a=je(n,o),s=Ta(s,a,r.children);else if(it(o,n))if(a=je(o,n),z(a))s=Ta(s,Z(),r.children);else{const l=ws(r.children,K(a));if(l){const c=l.getChild(he(a));s=ri(s,Z(),c)}}}else throw Ps("WriteRecord should have .snap or .children")}}return s}function up(t,e,n,s,i){if(!s&&!i){const r=Zn(t.visibleWrites,e);if(r!=null)return r;{const o=mn(t.visibleWrites,e);if(Ra(o))return n;if(n==null&&!Sa(o,Z()))return null;{const a=n||V.EMPTY_NODE;return Ss(o,a)}}}else{const r=mn(t.visibleWrites,e);if(!i&&Ra(r))return n;if(!i&&n==null&&!Sa(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(it(c.path,e)||it(e,c.path))},a=cp(t.allWrites,o,e),l=n||V.EMPTY_NODE;return Ss(a,l)}}}function pC(t,e,n){let s=V.EMPTY_NODE;const i=Zn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(me,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=mn(t.visibleWrites,e);return n.forEachChild(me,(o,a)=>{const l=Ss(mn(r,new ce(o)),a);s=s.updateImmediateChild(o,l)}),Zu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=mn(t.visibleWrites,e);return Zu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function _C(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ge(e,n);if(Sa(t.visibleWrites,r))return null;{const o=mn(t.visibleWrites,r);return Ra(o)?i.getChild(n):Ss(o,i.getChild(n))}}function gC(t,e,n,s){const i=ge(e,n),r=Zn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=mn(t.visibleWrites,i);return Ss(o,s.getNode().getImmediateChild(n))}else return null}function mC(t,e){return Zn(t.visibleWrites,e)}function yC(t,e,n,s,i,r,o){let a;const l=mn(t.visibleWrites,e),c=Zn(l,Z());if(c!=null)a=c;else if(n!=null)a=Ss(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function vC(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function Lr(t,e,n,s){return up(t.writeTree,t.treePath,e,n,s)}function kl(t,e){return pC(t.writeTree,t.treePath,e)}function eh(t,e,n,s){return _C(t.writeTree,t.treePath,e,n,s)}function Mr(t,e){return mC(t.writeTree,ge(t.treePath,e))}function wC(t,e,n,s,i,r){return yC(t.writeTree,t.treePath,e,n,s,i,r)}function Nl(t,e,n){return gC(t.writeTree,t.treePath,e,n)}function hp(t,e){return dp(ge(t.treePath,e),t.writeTree)}function dp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class EC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,bi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ei(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Cs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,bi(s,e.snapshotNode,i.oldSnap));else throw Ps("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class bC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const fp=new bC;class Ol{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new bn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gn(this.viewCache_),r=wC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function IC(t){return{filter:t}}function CC(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TC(t,e,n,s,i){const r=new EC;let o,a;if(n.type===dt.OVERWRITE){const c=n;c.source.fromUser?o=Aa(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=Ur(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===dt.MERGE){const c=n;c.source.fromUser?o=RC(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Pa(t,e,c.path,c.children,s,i,a,r))}else if(n.type===dt.ACK_USER_WRITE){const c=n;c.revert?o=kC(t,e,c.path,s,i,r):o=AC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===dt.LISTEN_COMPLETE)o=PC(t,e,n.path,s,r);else throw Ps("Unknown operation type: "+n.type);const l=r.getChanges();return SC(e,o,l),{viewCache:o,changes:l}}function SC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Dr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(rp(Dr(e)))}}function pp(t,e,n,s,i,r){const o=e.eventCache;if(Mr(s,n)!=null)return e;{let a,l;if(z(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gn(e),u=c instanceof V?c:V.EMPTY_NODE,h=kl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Lr(s,Gn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=K(n);if(c===".priority"){C(En(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=eh(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=he(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=eh(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Nl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ii(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Ur(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=K(n);if(!l.isCompleteForPath(n)&&En(n)>1)return e;const m=he(n),A=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),A):c=u.updateChild(l.getNode(),_,A,m,fp,null)}const h=ap(e,c,l.isFullyInitialized()||z(n),u.filtersNodes()),d=new Ol(i,h,r);return pp(t,h,n,i,d,a)}function Aa(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ol(i,e,r);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ii(e,c,!0,t.filter.filtersNodes());else{const h=K(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ii(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=he(n),_=a.getNode().getImmediateChild(h);let m;if(z(d))m=s;else{const I=u.getCompleteChild(h);I!=null?El(d)===".priority"&&I.getChild(Xf(d)).isEmpty()?m=I:m=I.updateChild(d,s):m=V.EMPTY_NODE}if(_.equals(m))l=e;else{const I=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=ii(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function th(t,e){return t.eventCache.isCompleteForChild(e)}function RC(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ge(n,l);th(e,K(u))&&(a=Aa(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ge(n,l);th(e,K(u))||(a=Aa(t,a,u,c,i,r,o))}),a}function nh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Pa(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;z(n)?c=s:c=new ue(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=nh(t,_,d);l=Ur(t,l,new ce(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),I=nh(t,m,d);l=Ur(t,l,new ce(h),I,i,r,o,a)}}),l}function AC(t,e,n,s,i,r,o){if(Mr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ur(t,e,n,l.getNode().getChild(n),i,r,a,o);if(z(n)){let c=new ue(null);return l.getNode().forEachChild(ms,(u,h)=>{c=c.set(new ce(u),h)}),Pa(t,e,n,c,i,r,a,o)}else return e}else{let c=new ue(null);return s.foreach((u,h)=>{const d=ge(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Pa(t,e,n,c,i,r,a,o)}}function PC(t,e,n,s,i){const r=e.serverCache,o=ap(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return pp(t,o,n,s,fp,i)}function kC(t,e,n,s,i,r){let o;if(Mr(s,n)!=null)return e;{const a=new Ol(s,e,i),l=e.eventCache.getNode();let c;if(z(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Lr(s,Gn(e));else{const h=e.serverCache.getNode();C(h instanceof V,"serverChildren would be complete if leaf node"),u=kl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=K(n);let h=Nl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,he(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,he(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Lr(s,Gn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Mr(s,Z())!=null,ii(e,c,o,t.filter.filtersNodes())}}/**
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
 */class NC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Tl(s.getIndex()),r=YI(s);this.processor_=IC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(V.EMPTY_NODE,a.getNode(),null),u=new bn(l,o.isFullyInitialized(),i.filtersNodes()),h=new bn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=uo(h,u),this.eventGenerator_=new nC(this.query_)}get query(){return this.query_}}function OC(t){return t.viewCache_.serverCache.getNode()}function xC(t){return Dr(t.viewCache_)}function DC(t,e){const n=Gn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function sh(t){return t.eventRegistrations_.length===0}function LC(t,e){t.eventRegistrations_.push(e)}function ih(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function rh(t,e,n,s){e.type===dt.MERGE&&e.source.queryId!==null&&(C(Gn(t.viewCache_),"We should always have a full cache before handling merges"),C(Dr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=TC(t.processor_,i,e,n,s);return CC(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,_p(t,r.changes,r.viewCache.eventCache.getNode(),null)}function MC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(r,o)=>{s.push(Cs(r,o))}),n.isFullyInitialized()&&s.push(rp(n.getNode())),_p(t,s,n.getNode(),e)}function _p(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return sC(t.eventGenerator_,e,n,i)}/**
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
 */let Fr;class gp{constructor(){this.views=new Map}}function UC(t){C(!Fr,"__referenceConstructor has already been defined"),Fr=t}function FC(){return C(Fr,"Reference.ts has not been loaded"),Fr}function BC(t){return t.views.size===0}function xl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),rh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(rh(o,e,n,s));return r}}function mp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Lr(n,i?s:null),l=!1;a?l=!0:s instanceof V?(a=kl(n,s),l=!1):(a=V.EMPTY_NODE,l=!1);const c=uo(new bn(a,l,!1),new bn(s,i,!1));return new NC(e,c)}return o}function $C(t,e,n,s,i,r){const o=mp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),LC(o,n),MC(o,n)}function VC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=In(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(ih(c,n,s)),sh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(ih(l,n,s)),sh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!In(t)&&r.push(new(FC())(e._repo,e._path)),{removed:r,events:o}}function yp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yn(t,e){let n=null;for(const s of t.views.values())n=n||DC(s,e);return n}function vp(t,e){if(e._queryParams.loadsAllData())return fo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function wp(t,e){return vp(t,e)!=null}function In(t){return fo(t)!=null}function fo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Br;function HC(t){C(!Br,"__referenceConstructor has already been defined"),Br=t}function WC(){return C(Br,"Reference.ts has not been loaded"),Br}let jC=1;class oh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=vC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ep(t,e,n,s,i){return aC(t.pendingWriteTree_,e,n,s,i),i?xs(t,new Kn(Rl(),e,n)):[]}function qC(t,e,n,s){lC(t.pendingWriteTree_,e,n,s);const i=ue.fromObject(n);return xs(t,new Ts(Rl(),e,i))}function hn(t,e,n=!1){const s=cC(t.pendingWriteTree_,e);if(uC(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(Z(),!0):Me(s.children,o=>{r=r.set(new ce(o),!0)}),xs(t,new xr(s.path,r,n))}else return[]}function Bi(t,e,n){return xs(t,new Kn(Al(),e,n))}function KC(t,e,n){const s=ue.fromObject(n);return xs(t,new Ts(Al(),e,s))}function GC(t,e){return xs(t,new Ci(Al(),e))}function zC(t,e,n){const s=Ll(t,n);if(s){const i=Ml(s),r=i.path,o=i.queryId,a=je(r,e),l=new Ci(Pl(o),a);return Ul(t,r,l)}else return[]}function $r(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||wp(o,e))){const l=VC(o,e,n,s);BC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>In(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=JC(d);for(let m=0;m<_.length;++m){const I=_[m],A=I.query,N=Tp(t,I);t.listenProvider_.startListening(oi(A),Ti(t,A),N.hashFn,N.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(oi(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(po(d));t.listenProvider_.stopListening(oi(d),_)}))}XC(t,c)}return a}function bp(t,e,n,s){const i=Ll(t,s);if(i!=null){const r=Ml(i),o=r.path,a=r.queryId,l=je(o,e),c=new Kn(Pl(a),l,n);return Ul(t,o,c)}else return[]}function YC(t,e,n,s){const i=Ll(t,s);if(i){const r=Ml(i),o=r.path,a=r.queryId,l=je(o,e),c=ue.fromObject(n),u=new Ts(Pl(a),l,c);return Ul(t,o,u)}else return[]}function ka(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=je(d,i);r=r||yn(_,m),o=o||In(_)});let a=t.syncPointTree_.get(i);a?(o=o||In(a),r=r||yn(a,Z())):(a=new gp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=V.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const I=yn(m,Z());I&&(r=r.updateImmediateChild(_,I))}));const c=wp(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=po(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=ZC();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=ho(t.pendingWriteTree_,i);let h=$C(a,e,n,u,r,l);if(!c&&!o&&!s){const d=vp(a,e);h=h.concat(eT(t,e,d))}return h}function Dl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=je(o,e),c=yn(a,l);if(c)return c});return up(i,e,r,n,!0)}function QC(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=je(c,n);s=s||yn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||yn(i,Z()):(i=new gp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new bn(s,!0,!1):null,a=ho(t.pendingWriteTree_,e._path),l=mp(i,e,a,r?o.getNode():V.EMPTY_NODE,r);return xC(l)}function xs(t,e){return Ip(e,t.syncPointTree_,null,ho(t.pendingWriteTree_,Z()))}function Ip(t,e,n,s){if(z(t.path))return Cp(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=yn(i,Z()));let r=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=hp(s,o);r=r.concat(Ip(a,l,c,u))}return i&&(r=r.concat(xl(i,t,s,n))),r}}function Cp(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=yn(i,Z()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=hp(s,o),u=t.operationForChild(o);u&&(r=r.concat(Cp(u,a,l,c)))}),i&&(r=r.concat(xl(i,t,s,n))),r}function Tp(t,e){const n=e.query,s=Ti(t,n);return{hashFn:()=>(OC(e)||V.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?zC(t,n._path,s):GC(t,n._path);{const r=Gb(i,n);return $r(t,n,null,r)}}}}function Ti(t,e){const n=po(e);return t.queryToTagMap.get(n)}function po(t){return t._path.toString()+"$"+t._queryIdentifier}function Ll(t,e){return t.tagToQueryMap.get(e)}function Ml(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function Ul(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=ho(t.pendingWriteTree_,e);return xl(s,n,i,null)}function JC(t){return t.fold((e,n,s)=>{if(n&&In(n))return[fo(n)];{let i=[];return n&&(i=yp(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function oi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(WC())(t._repo,t._path):t}function XC(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=po(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function ZC(){return jC++}function eT(t,e,n){const s=e._path,i=Ti(t,e),r=Tp(t,n),o=t.listenProvider_.startListening(oi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!In(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!z(c)&&u&&In(u))return[fo(u).query];{let d=[];return u&&(d=d.concat(yp(u).map(_=>_.query))),Me(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(oi(u),Ti(t,u))}}return o}/**
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
 */class Fl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fl(n)}node(){return this.node_}}class Bl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new Bl(this.syncTree_,n)}node(){return Dl(this.syncTree_,this.path_)}}const tT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ah=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sT(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},sT=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Sp=function(t,e,n,s){return $l(e,new Bl(n,t),s)},Rp=function(t,e,n){return $l(t,new Fl(e),n)};function $l(t,e,n){const s=t.getPriority().val(),i=ah(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ah(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ae(a,be(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ae(i))),o.forEachChild(me,(a,l)=>{const c=$l(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Vl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Hl(t,e){let n=e instanceof ce?e:new ce(e),s=t,i=K(n);for(;i!==null;){const r=ws(s.node.children,i)||{children:{},childCount:0};s=new Vl(i,s,r),n=he(n),i=K(n)}return s}function Ds(t){return t.node.value}function Ap(t,e){t.node.value=e,Na(t)}function Pp(t){return t.node.childCount>0}function iT(t){return Ds(t)===void 0&&!Pp(t)}function _o(t,e){Me(t.node.children,(n,s)=>{e(new Vl(n,t,s))})}function kp(t,e,n,s){n&&!s&&e(t),_o(t,i=>{kp(i,e,!0,s)}),n&&s&&e(t)}function rT(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function $i(t){return new ce(t.parent===null?t.name:$i(t.parent)+"/"+t.name)}function Na(t){t.parent!==null&&oT(t.parent,t.name,t)}function oT(t,e,n){const s=iT(n),i=kt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Na(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Na(t))}/**
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
 */const aT=/[\[\].#$\/\u0000-\u001F\u007F]/,lT=/[\[\].#$\u0000-\u001F\u007F]/,qo=10*1024*1024,Wl=function(t){return typeof t=="string"&&t.length!==0&&!aT.test(t)},Np=function(t){return typeof t=="string"&&t.length!==0&&!lT.test(t)},cT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Np(t)},uT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!gl(t)||t&&typeof t=="object"&&kt(t,".sv")},Op=function(t,e,n,s){s&&e===void 0||go(eo(t,"value"),e,n)},go=function(t,e,n){const s=n instanceof ce?new RI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+On(s));if(typeof e=="function")throw new Error(t+"contains a function "+On(s)+" with contents = "+e.toString());if(gl(e))throw new Error(t+"contains "+e.toString()+" "+On(s));if(typeof e=="string"&&e.length>qo/3&&to(e)>qo)throw new Error(t+"contains a string greater than "+qo+" utf8 bytes "+On(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Wl(o)))throw new Error(t+" contains an invalid key ("+o+") "+On(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AI(s,o),go(t,a,s),PI(s)}),i&&r)throw new Error(t+' contains ".value" child '+On(s)+" in addition to actual children.")}},hT=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=wi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Wl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(SI);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&it(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},dT=function(t,e,n,s){const i=eo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Me(e,(o,a)=>{const l=new ce(o);if(go(i,a,ge(n,l)),El(l)===".priority"&&!uT(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),hT(i,r)},xp=function(t,e,n,s){if(!Np(n))throw new Error(eo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fT=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xp(t,e,n)},jl=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},pT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!cT(n))throw new Error(eo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class _T{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!bl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Dp(t,e,n){mo(t,n),Lp(t,s=>bl(s,e))}function rt(t,e,n){mo(t,n),Lp(t,s=>it(s,e)||it(e,s))}function Lp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(gT(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ni&&Le("event: "+n.toString()),Os(s)}}}/**
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
 */const mT="repo_interrupt",yT=25;class vT{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _T,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Or(),this.transactionQueueTree_=new Vl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wT(t,e,n){if(t.stats_=vl(t.repoInfo_),t.forceRestClient_||Jb())t.server_=new Nr(t.repoInfo_,(s,i,r,o)=>{lh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ch(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ht(t.repoInfo_,e,(s,i,r,o)=>{lh(t,s,i,r,o)},s=>{ch(t,s)},s=>{ET(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=nI(t.repoInfo_,()=>new tC(t.stats_,t.server_)),t.infoData_=new QI,t.infoSyncTree_=new oh({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Bi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ql(t,"connected",!1),t.serverSyncTree_=new oh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);rt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Mp(t){const n=t.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yo(t){return tT({timestamp:Mp(t)})}function lh(t,e,n,s,i){t.dataUpdateCount++;const r=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=wr(n,c=>be(c));o=YC(t.serverSyncTree_,r,l,i)}else{const l=be(n);o=bp(t.serverSyncTree_,r,l,i)}else if(s){const l=wr(n,c=>be(c));o=KC(t.serverSyncTree_,r,l)}else{const l=be(n);o=Bi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Rs(t,r)),rt(t.eventQueue_,a,o)}function ch(t,e){ql(t,"connected",e),e===!1&&TT(t)}function ET(t,e){Me(e,(n,s)=>{ql(t,n,s)})}function ql(t,e,n){const s=new ce("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(s,i);const r=Bi(t.infoSyncTree_,s,i);rt(t.eventQueue_,s,r)}function Kl(t){return t.nextWriteId_++}function bT(t,e,n){const s=QC(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=be(i).withIndex(e._queryParams.getIndex());ka(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Bi(t.serverSyncTree_,e._path,r);else{const a=Ti(t.serverSyncTree_,e);o=bp(t.serverSyncTree_,e._path,r,a)}return rt(t.eventQueue_,e._path,o),$r(t.serverSyncTree_,e,n,null,!0),r},i=>(Vi(t,"get for query "+Ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function IT(t,e,n,s,i){Vi(t,"set",{path:e.toString(),value:n,priority:s});const r=yo(t),o=be(n,s),a=Dl(t.serverSyncTree_,e),l=Rp(o,a,r),c=Kl(t),u=Ep(t.serverSyncTree_,e,l,c,!0);mo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||qe("set at "+e+" failed: "+d);const I=hn(t.serverSyncTree_,c,!m);rt(t.eventQueue_,e,I),Oa(t,i,d,_)});const h=zl(t,e);Rs(t,h),rt(t.eventQueue_,h,[])}function CT(t,e,n,s){Vi(t,"update",{path:e.toString(),value:n});let i=!0;const r=yo(t),o={};if(Me(n,(a,l)=>{i=!1,o[a]=Sp(ge(e,a),be(l),t.serverSyncTree_,r)}),i)Le("update() called with empty data.  Don't do anything."),Oa(t,s,"ok",void 0);else{const a=Kl(t),l=qC(t.serverSyncTree_,e,o,a);mo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||qe("update at "+e+" failed: "+c);const d=hn(t.serverSyncTree_,a,!h),_=d.length>0?Rs(t,e):e;rt(t.eventQueue_,_,d),Oa(t,s,c,u)}),Me(n,c=>{const u=zl(t,ge(e,c));Rs(t,u)}),rt(t.eventQueue_,e,[])}}function TT(t){Vi(t,"onDisconnectEvents");const e=yo(t),n=Or();Ca(t.onDisconnect_,Z(),(i,r)=>{const o=Sp(i,r,t.serverSyncTree_,e);op(n,i,o)});let s=[];Ca(n,Z(),(i,r)=>{s=s.concat(Bi(t.serverSyncTree_,i,r));const o=zl(t,i);Rs(t,o)}),t.onDisconnect_=Or(),rt(t.eventQueue_,Z(),s)}function ST(t,e,n){let s;K(e._path)===".info"?s=ka(t.infoSyncTree_,e,n):s=ka(t.serverSyncTree_,e,n),Dp(t.eventQueue_,e._path,s)}function RT(t,e,n){let s;K(e._path)===".info"?s=$r(t.infoSyncTree_,e,n):s=$r(t.serverSyncTree_,e,n),Dp(t.eventQueue_,e._path,s)}function AT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(mT)}function Vi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function Oa(t,e,n,s){e&&Os(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Up(t,e,n){return Dl(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function Gl(t,e=t.transactionQueueTree_){if(e||vo(t,e),Ds(e)){const n=Bp(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&PT(t,$i(e),n)}else Pp(e)&&_o(e,n=>{Gl(t,n)})}function PT(t,e,n){const s=n.map(c=>c.currentWriteId),i=Up(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=je(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Vi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(hn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();vo(t,Hl(t.transactionQueueTree_,e)),Gl(t,t.transactionQueueTree_),rt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Os(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Rs(t,e)}},o)}function Rs(t,e){const n=Fp(t,e),s=$i(n),i=Bp(t,n);return kT(t,i,s),s}function kT(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=je(n,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=yT)u=!0,h="maxretry",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Up(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){go("transaction failed: Data returned ",_,l.path);let m=be(_);typeof _=="object"&&_!=null&&kt(_,".priority")||(m=m.updatePriority(d.getPriority()));const A=l.currentWriteId,N=yo(t),O=Rp(m,d,N);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=O,l.currentWriteId=Kl(t),o.splice(o.indexOf(A),1),i=i.concat(Ep(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),i=i.concat(hn(t.serverSyncTree_,A,!0))}else u=!0,h="nodata",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0))}rt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}vo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Os(s[a]);Gl(t,t.transactionQueueTree_)}function Fp(t,e){let n,s=t.transactionQueueTree_;for(n=K(e);n!==null&&Ds(s)===void 0;)s=Hl(s,n),e=he(e),n=K(e);return s}function Bp(t,e){const n=[];return $p(t,e,n),n.sort((s,i)=>s.order-i.order),n}function $p(t,e,n){const s=Ds(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);_o(e,i=>{$p(t,i,n)})}function vo(t,e){const n=Ds(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ap(e,n.length>0?n:void 0)}_o(e,s=>{vo(t,s)})}function zl(t,e){const n=$i(Fp(t,e)),s=Hl(t.transactionQueueTree_,e);return rT(s,i=>{Ko(t,i)}),Ko(t,s),kp(s,i=>{Ko(t,i)}),n}function Ko(t,e){const n=Ds(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ap(e,void 0):n.length=r+1,rt(t.eventQueue_,$i(e),i);for(let o=0;o<s.length;o++)Os(s[o])}}/**
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
 */function NT(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function OT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const uh=function(t,e){const n=xT(t),s=n.namespace;n.domain==="firebase.com"&&jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Hb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ce(n.pathString)}},xT=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=NT(t.substring(u,h)));const d=OT(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const hh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",DT=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=hh.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=hh.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class LT{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class MT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Vp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Yl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:El(this._path)}get ref(){return new Yt(this._repo,this._path)}get _queryIdentifier(){const e=Qu(this._queryParams),n=ml(e);return n==="{}"?"default":n}get _queryObject(){return Qu(this._queryParams)}isEqual(e){if(e=we(e),!(e instanceof Yl))return!1;const n=this._repo===e._repo,s=bl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+TI(this._path)}}class Yt extends Yl{constructor(e,n){super(e,n,new Sl,!1)}get parent(){const e=Xf(this._path);return e===null?null:new Yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Si{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),s=Ri(this.ref,e);return new Si(this._node.getChild(n),s,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Si(i,Ri(this.ref,s),me)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dn(t,e){return t=we(t),t._checkNotDeleted("ref"),e!==void 0?Ri(t._root,e):t._root}function Ri(t,e){return t=we(t),K(t._path)===null?fT("child","path",e):xp("child","path",e),new Yt(t._repo,ge(t._path,e))}function UT(t,e){t=we(t),jl("push",t._path),Op("push",e,t._path,!0);const n=Mp(t._repo),s=DT(n),i=Ri(t,s),r=Ri(t,s);let o;return e!=null?o=Ql(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function FT(t){return jl("remove",t._path),Ql(t,null)}function Ql(t,e){t=we(t),jl("set",t._path),Op("set",e,t._path,!1);const n=new ki;return IT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Hp(t,e){dT("update",e,t._path);const n=new ki;return CT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Wp(t){t=we(t);const e=new Vp(()=>{}),n=new wo(e);return bT(t._repo,t,n).then(s=>new Si(s,new Yt(t._repo,t._path),t._queryParams.getIndex()))}class wo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new LT("value",this,new Si(e.snapshotNode,new Yt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new MT(this,e,n):null}matches(e){return e instanceof wo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function BT(t,e,n,s,i){const r=new Vp(n,void 0),o=new wo(r);return ST(t._repo,t,o),()=>RT(t._repo,t,o)}function $T(t,e,n,s){return BT(t,"value",e)}UC(Yt);HC(Yt);/**
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
 */const VT="FIREBASE_DATABASE_EMULATOR_HOST",xa={};let HT=!1;function WT(t,e,n,s){t.repoInfo_=new Wf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function jT(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=uh(r,i),a=o.repoInfo,l;typeof process<"u"&&Ou&&(l=Ou[VT]),l?(r=`http://${l}?ns=${a.namespace}`,o=uh(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Zb(t.name,t.options,e);pT("Invalid Firebase Database URL",o),z(o.path)||jt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=KT(a,t,c,new Xb(t.name,n));return new GT(u,t)}function qT(t,e){const n=xa[e];(!n||n[t.key]!==t)&&jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),AT(t),delete n[t.key]}function KT(t,e,n,s){let i=xa[e.name];i||(i={},xa[e.name]=i);let r=i[t.toURLString()];return r&&jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vT(t,HT,n,s),i[t.toURLString()]=r,r}class GT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jt("Cannot call "+e+" on a deleted database.")}}function Vr(t=il(),e){const n=no(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Cd("database");s&&zT(n,...s)}return n}function zT(t,e,n,s={}){t=we(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&jt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new fr(fr.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Rd(s.mockUserToken,t.app.options.projectId);r=new fr(o)}WT(i,e,n,r)}/**
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
 */function YT(t){Mb(Qn),Hn(new wn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return jT(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),St(xu,Du,t),St(xu,Du,"esm2017")}Ht.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ht.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};YT();const Jl={firebaseConfig:{apiKey:"AIzaSyC6OKfRLtntX1mzOgfPRGeQWlBQKakP8rI",authDomain:"motw-frontend-hq.firebaseapp.com",databaseURL:"https://motw-frontend-hq-default-rtdb.firebaseio.com",projectId:"motw-frontend-hq",storageBucket:"motw-frontend-hq.appspot.com",messagingSenderId:"607683384016",appId:"1:607683384016:web:334f0aa4548af6b1f884d5"}},QT={data(){return{message:"We doin our best here",email:"",password:"",name:"",showRegister:!1,errorMessage:""}},created(){this.app=so(Jl.firebaseConfig),this.auth=mf(this.app),iw(this.auth,t=>{t?(Et.login({uid:t.uid}),this.fetchUserName(t.uid)):Et.logout()})},methods:{setCookie(t,e,n){const s=new Date;s.setTime(s.getTime()+n*24*60*60*1e3);const i=`expires=${s.toUTCString()}`;document.cookie=`${t}=${e}; ${i}; path=/`},displayMessage(t){console.log(t)},registerUser(){Zv(this.auth,this.email,this.password).then(t=>{const e=t.user,n={name:this.name,email:this.email,last_login:Date.now()},s=Vr();Ql(dn(s,"profiles/"+e.uid),n),Et.login({uid:e.uid,name:this.name}),this.errorMessage=""}).catch(t=>{this.errorMessage=t.message})},loginUser(){tw(this.auth,lf).then(()=>ew(this.auth,this.email,this.password)).then(t=>{Et.login({uid:t.user.uid}),this.fetchUserName(t.user.uid),this.errorMessage=""}).catch(t=>{this.errorMessage=t.message})},logoutUser(){rf(this.auth).then(()=>{Et.logout()}).catch(t=>{console.error(t)})},fetchUserName(t){const e=Vr(),n=dn(e,"profiles/"+t);Wp(n).then(s=>{s.exists()?Et.user.name=s.val().name:console.log("No user data available")}).catch(s=>{console.error(s)})}},computed:{store(){return Et}}},Xl=t=>(qt("data-v-6a497722"),t=t(),Kt(),t),JT={key:0},XT={key:0,class:"error"},ZT=Xl(()=>y("label",{for:"email"},"Email:",-1)),eS=Xl(()=>y("label",{for:"password"},"Password:",-1)),tS={key:1},nS=Xl(()=>y("label",{for:"name"},"Name:",-1)),sS={key:2},iS={key:3},rS={key:1};function oS(t,e,n,s,i,r){return J(),X("div",null,[y("h1",null,Fe(i.message),1),r.store.isAuthenticated?(J(),X("div",rS,[y("p",null,"Welcome, "+Fe(r.store.userName)+"!",1),y("button",{onClick:e[6]||(e[6]=(...o)=>r.logoutUser&&r.logoutUser(...o))},"Logout")])):(J(),X("div",JT,[i.errorMessage?(J(),X("div",XT,Fe(i.errorMessage),1)):Dt("",!0),y("div",null,[ZT,Ne(y("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),id:"email"},null,512),[[Oe,i.email]])]),y("div",null,[eS,Ne(y("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),id:"password"},null,512),[[Oe,i.password]])]),i.showRegister?(J(),X("div",tS,[nS,Ne(y("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>i.name=o),id:"name"},null,512),[[Oe,i.name]])])):Dt("",!0),i.showRegister?(J(),X("div",sS,[y("button",{onClick:e[3]||(e[3]=(...o)=>r.registerUser&&r.registerUser(...o))},"Register")])):(J(),X("div",iS,[y("button",{onClick:e[4]||(e[4]=(...o)=>r.loginUser&&r.loginUser(...o))},"Login"),y("p",null,[Pe("No account? "),y("a",{href:"#",onClick:e[5]||(e[5]=Ln(o=>i.showRegister=!0,["prevent"]))},"Click here to register")])]))]))])}const aS=Nt(QT,[["render",oS],["__scopeId","data-v-6a497722"]]),lS={name:"Dashboard"},cS=t=>(qt("data-v-49eafe61"),t=t(),Kt(),t),uS={class:"dashboard"},hS=cS(()=>y("h1",null,"Dashboard",-1));function dS(t,e,n,s,i,r){const o=ys("router-link");return J(),X("div",uS,[hS,y("ul",null,[y("li",null,[te(o,{to:"/case-files"},{default:De(()=>[Pe("Case Files")]),_:1})]),y("li",null,[te(o,{to:"/knowledge-base"},{default:De(()=>[Pe("Knowledge Base")]),_:1})]),y("li",null,[te(o,{to:"/acquisitions"},{default:De(()=>[Pe("Acquisitions")]),_:1})]),y("li",null,[te(o,{to:"/inventory"},{default:De(()=>[Pe("Inventory")]),_:1})]),y("li",null,[te(o,{to:"/profile"},{default:De(()=>[Pe("Profile")]),_:1})])])])}const fS=Nt(lS,[["render",dS],["__scopeId","data-v-49eafe61"]]),pS={name:"CaseFiles",data(){return{caseFiles:[],newCase:{title:"",summary:"",details:"",password:""},editingCase:null}},created(){this.app=so(Jl.firebaseConfig),this.db=Vr(this.app);const t=dn(this.db,"caseFiles");$T(t,e=>{const n=e.val();n?this.caseFiles=Object.keys(n).map(s=>({id:s,...n[s],enteredPassword:"",detailsVisible:!1})):this.caseFiles=[]})},methods:{addCaseFile(){const t=dn(this.db,"caseFiles");if(this.editingCase){const e=dn(this.db,"caseFiles/"+this.editingCase.id);Hp(e,this.newCase).then(()=>{this.newCase={title:"",summary:"",details:"",password:""},this.editingCase=null}).catch(n=>console.error("Error updating case:",n))}else UT(t,this.newCase).then(()=>{this.newCase={title:"",summary:"",details:"",password:""}}).catch(e=>console.error("Error adding case:",e))},editCaseFile(t){this.newCase={title:t.title,summary:t.summary,details:t.details,password:t.password},this.editingCase=t},deleteCaseFile(t){const e=dn(this.db,"caseFiles/"+t);FT(e).catch(n=>console.error("Error deleting case:",n))},unlockDetails(t){t.enteredPassword===t.password?t.detailsVisible=!0:alert("Incorrect password")}}},Hi=t=>(qt("data-v-bced83d0"),t=t(),Kt(),t),_S={class:"case-files"},gS=Hi(()=>y("h1",null,"Case Files",-1)),mS=Hi(()=>y("label",{for:"title"},"Title:",-1)),yS=Hi(()=>y("label",{for:"summary"},"Summary:",-1)),vS=Hi(()=>y("label",{for:"details"},"Details:",-1)),wS=Hi(()=>y("label",{for:"password"},"Password:",-1)),ES={type:"submit"},bS=["onUpdate:modelValue"],IS=["onClick"],CS={key:0},TS=["onClick"],SS=["onClick"];function RS(t,e,n,s,i,r){const o=ys("router-link");return J(),X("div",_S,[gS,y("form",{onSubmit:e[4]||(e[4]=Ln((...a)=>r.addCaseFile&&r.addCaseFile(...a),["prevent"]))},[y("div",null,[mS,Ne(y("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>i.newCase.title=a),id:"title",required:""},null,512),[[Oe,i.newCase.title]])]),y("div",null,[yS,Ne(y("textarea",{"onUpdate:modelValue":e[1]||(e[1]=a=>i.newCase.summary=a),id:"summary",required:""},null,512),[[Oe,i.newCase.summary]])]),y("div",null,[vS,Ne(y("textarea",{"onUpdate:modelValue":e[2]||(e[2]=a=>i.newCase.details=a),id:"details",required:""},null,512),[[Oe,i.newCase.details]])]),y("div",null,[wS,Ne(y("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=a=>i.newCase.password=a),id:"password",required:""},null,512),[[Oe,i.newCase.password]])]),y("button",ES,Fe(i.editingCase?"Update":"Add")+" Case File",1)],32),y("ul",null,[(J(!0),X(Ye,null,js(i.caseFiles,a=>(J(),X("li",{key:a.id},[y("h2",null,Fe(a.title),1),y("p",null,Fe(a.summary),1),y("div",null,[Ne(y("input",{type:"password","onUpdate:modelValue":l=>a.enteredPassword=l,placeholder:"Enter password to view details"},null,8,bS),[[Oe,a.enteredPassword]]),y("button",{onClick:l=>r.unlockDetails(a)},"Unlock Details",8,IS),a.detailsVisible?(J(),X("p",CS,Fe(a.details),1)):Dt("",!0)]),y("button",{onClick:l=>r.editCaseFile(a)},"Edit",8,TS),y("button",{onClick:l=>r.deleteCaseFile(a.id)},"Delete",8,SS),te(o,{to:"/case-files/"+a.id},{default:De(()=>[Pe("Read more")]),_:2},1032,["to"])]))),128))])])}const AS=Nt(pS,[["render",RS],["__scopeId","data-v-bced83d0"]]);/**
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
 */const jp="firebasestorage.googleapis.com",qp="storageBucket",PS=2*60*1e3,kS=10*60*1e3;/**
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
 */class ve extends zt{constructor(e,n,s=0){super(Go(e),`Firebase Storage: ${n} (${Go(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Go(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ye;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ye||(ye={}));function Go(t){return"storage/"+t}function Zl(){const t="An unknown error occurred, please check the error payload for server response.";return new ve(ye.UNKNOWN,t)}function NS(t){return new ve(ye.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function OS(t){return new ve(ye.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ve(ye.UNAUTHENTICATED,t)}function DS(){return new ve(ye.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LS(t){return new ve(ye.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function MS(){return new ve(ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function US(){return new ve(ye.CANCELED,"User canceled the upload/download.")}function FS(t){return new ve(ye.INVALID_URL,"Invalid URL '"+t+"'.")}function BS(t){return new ve(ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $S(){return new ve(ye.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qp+"' property when initializing the app?")}function VS(){return new ve(ye.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function HS(){return new ve(ye.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function WS(t){return new ve(ye.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Da(t){return new ve(ye.INVALID_ARGUMENT,t)}function Kp(){return new ve(ye.APP_DELETED,"The Firebase app was deleted.")}function jS(t){return new ve(ye.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ai(t,e){return new ve(ye.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ws(t){throw new ve(ye.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=tt.makeFromUrl(e,n)}catch{return new tt(e,"")}if(s.path==="")return s;throw BS(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},I=n===jp?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",N=new RegExp(`^https?://${I}/${i}/${A}`,"i"),L=[{regex:a,indices:l,postModify:r},{regex:_,indices:m,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let B=0;B<L.length;B++){const re=L[B],$=re.regex.exec(e);if($){const Ee=$[re.indices.bucket];let Te=$[re.indices.path];Te||(Te=""),s=new tt(Ee,Te),re.postModify(s);break}}if(s==null)throw FS(e);return s}}class qS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function KS(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...A){c||(c=!0,e.apply(null,A))}function h(A){i=setTimeout(()=>{i=null,t(_,l())},A)}function d(){r&&clearTimeout(r)}function _(A,...N){if(c){d();return}if(A){d(),u.call(null,A,...N);return}if(l()||o){d(),u.call(null,A,...N);return}s<64&&(s*=2);let L;a===1?(a=2,L=0):L=(s+Math.random())*1e3,h(L)}let m=!1;function I(A){m||(m=!0,d(),!c&&(i!==null?(A||(a=2),clearTimeout(i),h(0)):A||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,I(!0)},n),I}function GS(t){t(!1)}/**
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
 */function zS(t){return t!==void 0}function YS(t){return typeof t=="object"&&!Array.isArray(t)}function ec(t){return typeof t=="string"||t instanceof String}function dh(t){return tc()&&t instanceof Blob}function tc(){return typeof Blob<"u"}function fh(t,e,n,s){if(s<e)throw Da(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Da(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function nc(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Gp(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Bn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bn||(Bn={}));/**
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
 */function QS(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class JS{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,m)=>{this.resolve_=_,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new er(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Bn.NO_ERROR,l=r.getStatus();if(!a||QS(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Bn.ABORT;s(!1,new er(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new er(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());zS(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Zl();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Kp():US();o(l)}else{const l=MS();o(l)}};this.canceled_?n(!1,new er(!1,null,!0)):this.backoffId_=KS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class er{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function XS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ZS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nR(t,e,n,s,i,r,o=!0){const a=Gp(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return eR(c,e),XS(c,n),ZS(c,r),tR(c,s),new JS(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function sR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function iR(...t){const e=sR();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(tc())return new Blob(t);throw new ve(ye.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function oR(t){if(typeof atob>"u")throw WS("base-64");return atob(t)}/**
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
 */const Tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zo{constructor(e,n){this.data=e,this.contentType=n||null}}function aR(t,e){switch(t){case Tt.RAW:return new zo(zp(e));case Tt.BASE64:case Tt.BASE64URL:return new zo(Yp(t,e));case Tt.DATA_URL:return new zo(cR(e),uR(e))}throw Zl()}function zp(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function lR(t){let e;try{e=decodeURIComponent(t)}catch{throw ai(Tt.DATA_URL,"Malformed data URL.")}return zp(e)}function Yp(t,e){switch(t){case Tt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw ai(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Tt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw ai(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oR(e)}catch(i){throw i.message.includes("polyfill")?i:ai(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Qp{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ai(Tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=hR(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function cR(t){const e=new Qp(t);return e.base64?Yp(Tt.BASE64,e.rest):lR(e.rest)}function uR(t){return new Qp(t).contentType}function hR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class un{constructor(e,n){let s=0,i="";dh(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(dh(this.data_)){const s=this.data_,i=rR(s,e,n);return i===null?null:new un(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new un(s,!0)}}static getBlob(...e){if(tc()){const n=e.map(s=>s instanceof un?s.data_:s);return new un(iR.apply(null,n))}else{const n=e.map(o=>ec(o)?aR(Tt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new un(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Jp(t){let e;try{e=JSON.parse(t)}catch{return null}return YS(e)?e:null}/**
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
 */function dR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fR(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Xp(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function pR(t,e){return e}class He{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||pR}}let tr=null;function _R(t){return!ec(t)||t.length<2?t:Xp(t)}function Zp(){if(tr)return tr;const t=[];t.push(new He("bucket")),t.push(new He("generation")),t.push(new He("metageneration")),t.push(new He("name","fullPath",!0));function e(r,o){return _R(o)}const n=new He("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new He("size");return i.xform=s,t.push(i),t.push(new He("timeCreated")),t.push(new He("updated")),t.push(new He("md5Hash",null,!0)),t.push(new He("cacheControl",null,!0)),t.push(new He("contentDisposition",null,!0)),t.push(new He("contentEncoding",null,!0)),t.push(new He("contentLanguage",null,!0)),t.push(new He("contentType",null,!0)),t.push(new He("metadata","customMetadata",!0)),tr=t,tr}function gR(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new tt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function mR(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return gR(s,t),s}function e_(t,e,n){const s=Jp(e);return s===null?null:mR(t,s,n)}function yR(t,e,n,s){const i=Jp(e);if(i===null||!ec(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),_=nc(d,n,s),m=Gp({alt:"media",token:c});return _+m})[0]}function vR(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class t_{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function n_(t){if(!t)throw Zl()}function wR(t,e){function n(s,i){const r=e_(t,i,e);return n_(r!==null),r}return n}function ER(t,e){function n(s,i){const r=e_(t,i,e);return n_(r!==null),yR(r,i,t.host,t._protocol)}return n}function s_(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=DS():i=xS():n.getStatus()===402?i=OS(t.bucket):n.getStatus()===403?i=LS(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function bR(t){const e=s_(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=NS(t.path)),r.serverResponse=i.serverResponse,r}return n}function IR(t,e,n){const s=e.fullServerUrl(),i=nc(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new t_(i,r,ER(t,n),o);return a.errorHandler=bR(e),a}function CR(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function TR(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=CR(null,e)),s}function SR(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let L="";for(let B=0;B<2;B++)L=L+Math.random().toString().slice(2);return L}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=TR(e,s,i),u=vR(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",_=un.getBlob(h,s,d);if(_===null)throw VS();const m={name:c.fullPath},I=nc(r,t.host,t._protocol),A="POST",N=t.maxUploadRetryTime,O=new t_(I,A,wR(t,n),N);return O.urlParams=m,O.headers=o,O.body=_.uploadData(),O.errorHandler=s_(e),O}class RR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Ws("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ws("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ws("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ws("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ws("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AR extends RR{initXhr(){this.xhr_.responseType="text"}}function i_(){return new AR}/**
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
 */class zn{constructor(e,n){this._service=e,n instanceof tt?this._location=n:this._location=tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zn(e,n)}get root(){const e=new tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xp(this._location.path)}get storage(){return this._service}get parent(){const e=dR(this._location.path);if(e===null)return null;const n=new tt(this._location.bucket,e);return new zn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jS(e)}}function PR(t,e,n){t._throwIfRoot("uploadBytes");const s=SR(t.storage,t._location,Zp(),new un(e,!0),n);return t.storage.makeRequestWithTokens(s,i_).then(i=>({metadata:i,ref:t}))}function kR(t){t._throwIfRoot("getDownloadURL");const e=IR(t.storage,t._location,Zp());return t.storage.makeRequestWithTokens(e,i_).then(n=>{if(n===null)throw HS();return n})}function NR(t,e){const n=fR(t._location.path,e),s=new tt(t._location.bucket,n);return new zn(t.storage,s)}/**
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
 */function OR(t){return/^[A-Za-z]+:\/\//.test(t)}function xR(t,e){return new zn(t,e)}function r_(t,e){if(t instanceof sc){const n=t;if(n._bucket==null)throw $S();const s=new zn(n,n._bucket);return e!=null?r_(s,e):s}else return e!==void 0?NR(t,e):t}function DR(t,e){if(e&&OR(e)){if(t instanceof sc)return xR(t,e);throw Da("To use ref(service, url), the first argument must be a Storage instance.")}else return r_(t,e)}function ph(t,e){const n=e==null?void 0:e[qp];return n==null?null:tt.makeFromBucketSpec(n,t)}function LR(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Rd(i,t.app.options.projectId))}class sc{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=jp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PS,this._maxUploadRetryTime=kS,this._requests=new Set,i!=null?this._bucket=tt.makeFromBucketSpec(i,this._host):this._bucket=ph(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,e):this._bucket=ph(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zn(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new qS(Kp());{const o=nR(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const _h="@firebase/storage",gh="0.12.5";/**
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
 */const o_="storage";function MR(t,e,n){return t=we(t),PR(t,e,n)}function UR(t){return t=we(t),kR(t)}function FR(t,e){return t=we(t),DR(t,e)}function BR(t=il(),e){t=we(t);const s=no(t,o_).getImmediate({identifier:e}),i=Cd("storage");return i&&$R(s,...i),s}function $R(t,e,n,s={}){LR(t,e,n,s)}function VR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new sc(n,s,i,e,Qn)}function HR(){Hn(new wn(o_,VR,"PUBLIC").setMultipleInstances(!0)),St(_h,gh,""),St(_h,gh,"esm2017")}HR();const WR={name:"CaseDetail",props:["id"],data(){return{caseFile:null,newNote:"",selectedImage:null,newClue:{summary:"",details:"",password:""},newLocation:{name:"",description:""}}},created(){this.app=so(Jl.firebaseConfig),this.db=Vr(this.app),this.storage=BR(this.app),this.fetchCaseFile()},methods:{fetchCaseFile(){const t=dn(this.db,"caseFiles/"+this.id);Wp(t).then(e=>{e.exists()?(this.caseFile=e.val(),this.caseFile.notes||(this.caseFile.notes=[]),this.caseFile.images||(this.caseFile.images=[]),this.caseFile.clues||(this.caseFile.clues=[]),this.caseFile.locations||(this.caseFile.locations=[])):console.log("No case data available")}).catch(e=>{console.error("Error fetching case:",e)})},addNote(){const t={content:this.newNote,timestamp:Date.now()};this.caseFile.notes.push(t),this.updateCaseFile(),this.newNote=""},onImageChange(t){this.selectedImage=t.target.files[0]},uploadImage(){if(!this.selectedImage)return;const t=FR(this.storage,`images/${this.id}/${this.selectedImage.name}`);MR(t,this.selectedImage).then(e=>{UR(e.ref).then(n=>{const s={name:this.selectedImage.name,url:n};this.caseFile.images.push(s),this.updateCaseFile(),this.selectedImage=null}).catch(n=>{console.error("Error getting image URL:",n)})}).catch(e=>{console.error("Error uploading image:",e)})},addClue(){const t={id:Date.now().toString(),summary:this.newClue.summary,details:this.newClue.details,password:this.newClue.password,detailsVisible:!1,enteredPassword:""};this.caseFile.clues.push(t),this.updateCaseFile(),this.newClue={summary:"",details:"",password:""}},unlockClue(t){t.enteredPassword===t.password?t.detailsVisible=!0:alert("Incorrect password")},addLocation(){const t={name:this.newLocation.name,description:this.newLocation.description};this.caseFile.locations.push(t),this.updateCaseFile(),this.newLocation={name:"",description:""}},updateCaseFile(){const t=dn(this.db,"caseFiles/"+this.id);Hp(t,this.caseFile).catch(e=>{console.error("Error updating case:",e)})}}},Ke=t=>(qt("data-v-ef234281"),t=t(),Kt(),t),jR={key:0,class:"case-detail"},qR={class:"images"},KR=Ke(()=>y("h2",null,"Images",-1)),GR=["src","alt"],zR=Ke(()=>y("label",{for:"image"},"Upload Image:",-1)),YR=Ke(()=>y("button",{type:"submit"},"Upload Image",-1)),QR={class:"notes"},JR=Ke(()=>y("h2",null,"Notes",-1)),XR=Ke(()=>y("label",{for:"note"},"Add Note:",-1)),ZR=Ke(()=>y("button",{type:"submit"},"Add Note",-1)),e0={class:"clues"},t0=Ke(()=>y("h2",null,"Clues",-1)),n0=["onUpdate:modelValue"],s0=["onClick"],i0={key:0},r0=Ke(()=>y("label",{for:"clue-summary"},"Clue Summary:",-1)),o0=Ke(()=>y("label",{for:"clue-details"},"Clue Details:",-1)),a0=Ke(()=>y("label",{for:"clue-password"},"Clue Password:",-1)),l0=Ke(()=>y("button",{type:"submit"},"Add Clue",-1)),c0={class:"locations"},u0=Ke(()=>y("h2",null,"Locations",-1)),h0=Ke(()=>y("label",{for:"location-name"},"Location Name:",-1)),d0=Ke(()=>y("label",{for:"location-description"},"Location Description:",-1)),f0=Ke(()=>y("button",{type:"submit"},"Add Location",-1));function p0(t,e,n,s,i,r){const o=ys("router-link");return i.caseFile?(J(),X("div",jR,[y("h1",null,Fe(i.caseFile.title),1),y("p",null,Fe(i.caseFile.summary),1),y("p",null,Fe(i.caseFile.details),1),y("div",qR,[KR,y("ul",null,[(J(!0),X(Ye,null,js(i.caseFile.images,a=>(J(),X("li",{key:a.url},[y("img",{src:a.url,alt:a.name},null,8,GR)]))),128))]),y("form",{onSubmit:e[1]||(e[1]=Ln((...a)=>r.uploadImage&&r.uploadImage(...a),["prevent"]))},[zR,y("input",{type:"file",onChange:e[0]||(e[0]=(...a)=>r.onImageChange&&r.onImageChange(...a)),required:""},null,32),YR],32)]),y("div",QR,[JR,y("ul",null,[(J(!0),X(Ye,null,js(i.caseFile.notes,a=>(J(),X("li",{key:a.timestamp},Fe(a.content)+" ("+Fe(new Date(a.timestamp).toLocaleString())+") ",1))),128))]),y("form",{onSubmit:e[3]||(e[3]=Ln((...a)=>r.addNote&&r.addNote(...a),["prevent"]))},[XR,Ne(y("textarea",{"onUpdate:modelValue":e[2]||(e[2]=a=>i.newNote=a),id:"note",required:""},null,512),[[Oe,i.newNote]]),ZR],32)]),y("div",e0,[t0,y("ul",null,[(J(!0),X(Ye,null,js(i.caseFile.clues,a=>(J(),X("li",{key:a.id},[y("p",null,Fe(a.summary),1),Ne(y("input",{type:"password","onUpdate:modelValue":l=>a.enteredPassword=l,placeholder:"Enter password to view clue"},null,8,n0),[[Oe,a.enteredPassword]]),y("button",{onClick:l=>r.unlockClue(a)},"Unlock Clue",8,s0),a.detailsVisible?(J(),X("p",i0,Fe(a.details),1)):Dt("",!0)]))),128))]),y("form",{onSubmit:e[7]||(e[7]=Ln((...a)=>r.addClue&&r.addClue(...a),["prevent"]))},[r0,Ne(y("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=a=>i.newClue.summary=a),id:"clue-summary",required:""},null,512),[[Oe,i.newClue.summary]]),o0,Ne(y("textarea",{"onUpdate:modelValue":e[5]||(e[5]=a=>i.newClue.details=a),id:"clue-details",required:""},null,512),[[Oe,i.newClue.details]]),a0,Ne(y("input",{type:"password","onUpdate:modelValue":e[6]||(e[6]=a=>i.newClue.password=a),id:"clue-password",required:""},null,512),[[Oe,i.newClue.password]]),l0],32)]),y("div",c0,[u0,y("ul",null,[(J(!0),X(Ye,null,js(i.caseFile.locations,a=>(J(),X("li",{key:a.name},[y("h3",null,Fe(a.name),1),y("p",null,Fe(a.description),1)]))),128))]),y("form",{onSubmit:e[10]||(e[10]=Ln((...a)=>r.addLocation&&r.addLocation(...a),["prevent"]))},[h0,Ne(y("input",{type:"text","onUpdate:modelValue":e[8]||(e[8]=a=>i.newLocation.name=a),id:"location-name",required:""},null,512),[[Oe,i.newLocation.name]]),d0,Ne(y("textarea",{"onUpdate:modelValue":e[9]||(e[9]=a=>i.newLocation.description=a),id:"location-description",required:""},null,512),[[Oe,i.newLocation.description]]),f0],32)]),te(o,{to:"/case-files"},{default:De(()=>[Pe("Back to Case Files")]),_:1})])):Dt("",!0)}const _0=Nt(WR,[["render",p0],["__scopeId","data-v-ef234281"]]),g0={name:"KnowledgeBase"},m0=t=>(qt("data-v-c63d8655"),t=t(),Kt(),t),y0={class:"knowledge-base"},v0=m0(()=>y("h1",null,"Knowledge Base",-1)),w0=[v0];function E0(t,e,n,s,i,r){return J(),X("div",y0,w0)}const b0=Nt(g0,[["render",E0],["__scopeId","data-v-c63d8655"]]),I0={name:"Acquisitions"},C0=t=>(qt("data-v-25399de4"),t=t(),Kt(),t),T0={class:"acquisitions"},S0=C0(()=>y("h1",null,"Acquisitions",-1)),R0=[S0];function A0(t,e,n,s,i,r){return J(),X("div",T0,R0)}const P0=Nt(I0,[["render",A0],["__scopeId","data-v-25399de4"]]),k0={name:"Inventory"},N0=t=>(qt("data-v-46f62913"),t=t(),Kt(),t),O0={class:"inventory"},x0=N0(()=>y("h1",null,"Inventory",-1)),D0=[x0];function L0(t,e,n,s,i,r){return J(),X("div",O0,D0)}const M0=Nt(k0,[["render",L0],["__scopeId","data-v-46f62913"]]),U0={name:"Profile",data(){return{user:{username:"",email:""},password:""}},mounted(){fetch("/api/profile").then(t=>t.json()).then(t=>{this.user=t}).catch(t=>console.error("Error fetching profile:",t))},methods:{updateProfile(){const t={email:this.user.email,password:this.password};fetch("/api/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{console.log("Profile updated:",e),alert("Profile updated successfully")}).catch(e=>console.error("Error updating profile:",e))}}},Wi=t=>(qt("data-v-2da233e8"),t=t(),Kt(),t),F0={class:"profile"},B0=Wi(()=>y("h1",null,"Profile",-1)),$0=Wi(()=>y("label",{for:"username"},"Username:",-1)),V0=Wi(()=>y("label",{for:"email"},"Email:",-1)),H0=Wi(()=>y("label",{for:"password"},"Password:",-1)),W0=Wi(()=>y("button",{type:"submit"},"Update Profile",-1));function j0(t,e,n,s,i,r){return J(),X("div",F0,[B0,y("form",{onSubmit:e[3]||(e[3]=Ln((...o)=>r.updateProfile&&r.updateProfile(...o),["prevent"]))},[y("div",null,[$0,Ne(y("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.user.username=o),id:"username",disabled:""},null,512),[[Oe,i.user.username]])]),y("div",null,[V0,Ne(y("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=o=>i.user.email=o),id:"email"},null,512),[[Oe,i.user.email]])]),y("div",null,[H0,Ne(y("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=o=>i.password=o),id:"password",placeholder:"New password"},null,512),[[Oe,i.password]])]),W0],32)])}const q0=Nt(U0,[["render",j0],["__scopeId","data-v-2da233e8"]]),K0=[{path:"/",name:"Home",component:xb},{path:"/login",name:"Login",component:aS},{path:"/dashboard",name:"Dashboard",component:fS},{path:"/case-files",name:"CaseFiles",component:AS},{path:"/case-files/:id",name:"CaseDetail",component:_0,props:!0},{path:"/knowledge-base",name:"KnowledgeBase",component:b0},{path:"/acquisitions",name:"Acquisitions",component:P0},{path:"/inventory",name:"Inventory",component:M0},{path:"/profile",name:"Profile",component:q0}],G0=Sb({history:tb(),routes:K0});Sm(CE).use(G0).mount("#app");
