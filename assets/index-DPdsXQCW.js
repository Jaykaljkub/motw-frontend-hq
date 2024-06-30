(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ka(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const _e={},os=[],nt=()=>{},xp=()=>!1,Wr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Aa=t=>t.startsWith("onUpdate:"),Oe=Object.assign,Na=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dp=Object.prototype.hasOwnProperty,X=(t,e)=>Dp.call(t,e),B=Array.isArray,as=t=>Si(t)==="[object Map]",Vr=t=>Si(t)==="[object Set]",zl=t=>Si(t)==="[object Date]",G=t=>typeof t=="function",Ie=t=>typeof t=="string",Gt=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",nh=t=>(pe(t)||G(t))&&G(t.then)&&G(t.catch),sh=Object.prototype.toString,Si=t=>sh.call(t),Mp=t=>Si(t).slice(8,-1),ih=t=>Si(t)==="[object Object]",Oa=t=>Ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$r=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lp=/-(\w)/g,kt=$r(t=>t.replace(Lp,(e,n)=>n?n.toUpperCase():"")),Fp=/\B([A-Z])/g,Ts=$r(t=>t.replace(Fp,"-$1").toLowerCase()),Br=$r(t=>t.charAt(0).toUpperCase()+t.slice(1)),vo=$r(t=>t?`on${Br(t)}`:""),vn=(t,e)=>!Object.is(t,e),Ji=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},rh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},cr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yl;const oh=()=>Yl||(Yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xa(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ie(s)?$p(s):xa(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ie(t)||pe(t))return t}const Up=/;(?![^(]*\))/g,Wp=/:([^]+)/,Vp=/\/\*[^]*?\*\//g;function $p(t){const e={};return t.replace(Vp,"").split(Up).forEach(n=>{if(n){const s=n.split(Wp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Da(t){let e="";if(Ie(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Da(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hp=ka(Bp);function ah(t){return!!t||t===""}function jp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Hr(t[s],e[s]);return n}function Hr(t,e){if(t===e)return!0;let n=zl(t),s=zl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Gt(t),s=Gt(e),n||s)return t===e;if(n=B(t),s=B(e),n||s)return n&&s?jp(t,e):!1;if(n=pe(t),s=pe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Hr(t[o],e[o]))return!1}}return String(t)===String(e)}function qp(t,e){return t.findIndex(n=>Hr(n,e))}const te=t=>Ie(t)?t:t==null?"":B(t)||pe(t)&&(t.toString===sh||!G(t.toString))?JSON.stringify(t,lh,2):String(t),lh=(t,e)=>e&&e.__v_isRef?lh(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[wo(s,r)+" =>"]=i,n),{})}:Vr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wo(n))}:Gt(e)?wo(e):pe(e)&&!B(e)&&!ih(e)?String(e):e,wo=(t,e="")=>{var n;return Gt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let at;class Gp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=at;try{return at=this,e()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Kp(t,e=at){e&&e.active&&e.effects.push(t)}function zp(){return at}let Un;class Ma{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Kp(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,bn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Yp(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),In()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=dn,n=Un;try{return dn=!0,Un=this,this._runnings++,Ql(this),this.fn()}finally{Jl(this),this._runnings--,Un=n,dn=e}}stop(){this.active&&(Ql(this),Jl(this),this.onStop&&this.onStop(),this.active=!1)}}function Yp(t){return t.value}function Ql(t){t._trackId++,t._depsLength=0}function Jl(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ch(t.deps[e],t);t.deps.length=t._depsLength}}function ch(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let dn=!0,jo=0;const uh=[];function bn(){uh.push(dn),dn=!1}function In(){const t=uh.pop();dn=t===void 0?!0:t}function La(){jo++}function Fa(){for(jo--;!jo&&qo.length;)qo.shift()()}function hh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&ch(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const qo=[];function dh(t,e,n){La();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&qo.push(s.scheduler)))}Fa()}const fh=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Go=new WeakMap,Wn=Symbol(""),Ko=Symbol("");function Qe(t,e,n){if(dn&&Un){let s=Go.get(t);s||Go.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=fh(()=>s.delete(n))),hh(Un,i)}}function Bt(t,e,n,s,i,r){const o=Go.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Gt(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Oa(n)&&a.push(o.get("length")):(a.push(o.get(Wn)),as(t)&&a.push(o.get(Ko)));break;case"delete":B(t)||(a.push(o.get(Wn)),as(t)&&a.push(o.get(Ko)));break;case"set":as(t)&&a.push(o.get(Wn));break}La();for(const l of a)l&&dh(l,4);Fa()}const Qp=ka("__proto__,__v_isRef,__isVue"),ph=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gt)),Xl=Jp();function Jp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let r=0,o=this.length;r<o;r++)Qe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){bn(),La();const s=ie(this)[e].apply(this,n);return Fa(),In(),s}}),t}function Xp(t){Gt(t)||(t=String(t));const e=ie(this);return Qe(e,"has",t),e.hasOwnProperty(t)}class _h{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?h_:vh:r?yh:gh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=B(e);if(!i){if(o&&X(Xl,n))return Reflect.get(Xl,n,s);if(n==="hasOwnProperty")return Xp}const a=Reflect.get(e,n,s);return(Gt(n)?ph.has(n):Qp(n))||(i||Qe(e,"get",n),r)?a:Je(a)?o&&Oa(n)?a:a.value:pe(a)?i?Eh(a):Ti(a):a}}class mh extends _h{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=ri(r);if(!ur(s)&&!ri(s)&&(r=ie(r),s=ie(s)),!B(e)&&Je(r)&&!Je(s))return l?!1:(r.value=s,!0)}const o=B(e)&&Oa(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,s,i);return e===ie(i)&&(o?vn(s,r)&&Bt(e,"set",n,s):Bt(e,"add",n,s)),a}deleteProperty(e,n){const s=X(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Bt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Gt(n)||!ph.has(n))&&Qe(e,"has",n),s}ownKeys(e){return Qe(e,"iterate",B(e)?"length":Wn),Reflect.ownKeys(e)}}class Zp extends _h{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const e_=new mh,t_=new Zp,n_=new mh(!0);const Ua=t=>t,jr=t=>Reflect.getPrototypeOf(t);function Bi(t,e,n=!1,s=!1){t=t.__v_raw;const i=ie(t),r=ie(e);n||(vn(e,r)&&Qe(i,"get",e),Qe(i,"get",r));const{has:o}=jr(i),a=s?Ua:n?$a:oi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Hi(t,e=!1){const n=this.__v_raw,s=ie(n),i=ie(t);return e||(vn(t,i)&&Qe(s,"has",t),Qe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ji(t,e=!1){return t=t.__v_raw,!e&&Qe(ie(t),"iterate",Wn),Reflect.get(t,"size",t)}function Zl(t){t=ie(t);const e=ie(this);return jr(e).has.call(e,t)||(e.add(t),Bt(e,"add",t,t)),this}function ec(t,e){e=ie(e);const n=ie(this),{has:s,get:i}=jr(n);let r=s.call(n,t);r||(t=ie(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?vn(e,o)&&Bt(n,"set",t,e):Bt(n,"add",t,e),this}function tc(t){const e=ie(this),{has:n,get:s}=jr(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Bt(e,"delete",t,void 0),r}function nc(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Bt(t,"clear",void 0,void 0),n}function qi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ie(o),l=e?Ua:t?$a:oi;return!t&&Qe(a,"iterate",Wn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Gi(t,e,n){return function(...s){const i=this.__v_raw,r=ie(i),o=as(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ua:e?$a:oi;return!e&&Qe(r,"iterate",l?Ko:Wn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function s_(){const t={get(r){return Bi(this,r)},get size(){return ji(this)},has:Hi,add:Zl,set:ec,delete:tc,clear:nc,forEach:qi(!1,!1)},e={get(r){return Bi(this,r,!1,!0)},get size(){return ji(this)},has:Hi,add:Zl,set:ec,delete:tc,clear:nc,forEach:qi(!1,!0)},n={get(r){return Bi(this,r,!0)},get size(){return ji(this,!0)},has(r){return Hi.call(this,r,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:qi(!0,!1)},s={get(r){return Bi(this,r,!0,!0)},get size(){return ji(this,!0)},has(r){return Hi.call(this,r,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Gi(r,!1,!1),n[r]=Gi(r,!0,!1),e[r]=Gi(r,!1,!0),s[r]=Gi(r,!0,!0)}),[t,n,e,s]}const[i_,r_,o_,a_]=s_();function Wa(t,e){const n=e?t?a_:o_:t?r_:i_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const l_={get:Wa(!1,!1)},c_={get:Wa(!1,!0)},u_={get:Wa(!0,!1)};const gh=new WeakMap,yh=new WeakMap,vh=new WeakMap,h_=new WeakMap;function d_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function f_(t){return t.__v_skip||!Object.isExtensible(t)?0:d_(Mp(t))}function Ti(t){return ri(t)?t:Va(t,!1,e_,l_,gh)}function wh(t){return Va(t,!1,n_,c_,yh)}function Eh(t){return Va(t,!0,t_,u_,vh)}function Va(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=f_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Ks(t){return ri(t)?Ks(t.__v_raw):!!(t&&t.__v_isReactive)}function ri(t){return!!(t&&t.__v_isReadonly)}function ur(t){return!!(t&&t.__v_isShallow)}function Ch(t){return t?!!t.__v_raw:!1}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function p_(t){return Object.isExtensible(t)&&rh(t,"__v_skip",!0),t}const oi=t=>pe(t)?Ti(t):t,$a=t=>pe(t)?Eh(t):t;class bh{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ma(()=>e(this._value),()=>Xi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ie(this);return(!e._cacheable||e.effect.dirty)&&vn(e._value,e._value=e.effect.run())&&Xi(e,4),Ih(e),e.effect._dirtyLevel>=2&&Xi(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function __(t,e,n=!1){let s,i;const r=G(t);return r?(s=t,i=nt):(s=t.get,i=t.set),new bh(s,i,r||!i,n)}function Ih(t){var e;dn&&Un&&(t=ie(t),hh(Un,(e=t.dep)!=null?e:t.dep=fh(()=>t.dep=void 0,t instanceof bh?t:void 0)))}function Xi(t,e=4,n){t=ie(t);const s=t.dep;s&&dh(s,e)}function Je(t){return!!(t&&t.__v_isRef===!0)}function m_(t){return Sh(t,!1)}function g_(t){return Sh(t,!0)}function Sh(t,e){return Je(t)?t:new y_(t,e)}class y_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:oi(e)}get value(){return Ih(this),this._value}set value(e){const n=this.__v_isShallow||ur(e)||ri(e);e=n?e:ie(e),vn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:oi(e),Xi(this,4))}}function ls(t){return Je(t)?t.value:t}const v_={get:(t,e,n)=>ls(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Je(i)&&!Je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Th(t){return Ks(t)?t:new Proxy(t,v_)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fn(t,e,n,s){try{return s?t(...s):t()}catch(i){qr(i,e,n)}}function ft(t,e,n,s){if(G(t)){const i=fn(t,e,n,s);return i&&nh(i)&&i.catch(r=>{qr(r,e,n)}),i}if(B(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ft(t[r],e,n,s));return i}}function qr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){bn(),fn(l,null,10,[t,o,a]),In();return}}w_(t,n,i,s)}function w_(t,e,n,s=!0){console.error(t)}let ai=!1,zo=!1;const We=[];let St=0;const cs=[];let nn=null,Dn=0;const Rh=Promise.resolve();let Ba=null;function Ha(t){const e=Ba||Rh;return t?e.then(this?t.bind(this):t):e}function E_(t){let e=St+1,n=We.length;for(;e<n;){const s=e+n>>>1,i=We[s],r=li(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function ja(t){(!We.length||!We.includes(t,ai&&t.allowRecurse?St+1:St))&&(t.id==null?We.push(t):We.splice(E_(t.id),0,t),Ph())}function Ph(){!ai&&!zo&&(zo=!0,Ba=Rh.then(Ah))}function C_(t){const e=We.indexOf(t);e>St&&We.splice(e,1)}function b_(t){B(t)?cs.push(...t):(!nn||!nn.includes(t,t.allowRecurse?Dn+1:Dn))&&cs.push(t),Ph()}function sc(t,e,n=ai?St+1:0){for(;n<We.length;n++){const s=We[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;We.splice(n,1),n--,s()}}}function kh(t){if(cs.length){const e=[...new Set(cs)].sort((n,s)=>li(n)-li(s));if(cs.length=0,nn){nn.push(...e);return}for(nn=e,Dn=0;Dn<nn.length;Dn++)nn[Dn]();nn=null,Dn=0}}const li=t=>t.id==null?1/0:t.id,I_=(t,e)=>{const n=li(t)-li(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ah(t){zo=!1,ai=!0,We.sort(I_);try{for(St=0;St<We.length;St++){const e=We[St];e&&e.active!==!1&&fn(e,null,14)}}finally{St=0,We.length=0,kh(),ai=!1,Ba=null,(We.length||cs.length)&&Ah()}}function S_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||_e;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||_e;d&&(i=n.map(_=>Ie(_)?_.trim():_)),h&&(i=n.map(cr))}let a,l=s[a=vo(e)]||s[a=vo(kt(e))];!l&&r&&(l=s[a=vo(Ts(e))]),l&&ft(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(c,t,6,i)}}function Nh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Nh(c,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(pe(t)&&s.set(t,null),null):(B(r)?r.forEach(l=>o[l]=null):Oe(o,r),pe(t)&&s.set(t,o),o)}function Gr(t,e){return!t||!Wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,Ts(e))||X(t,e))}let ze=null,Kr=null;function hr(t){const e=ze;return ze=t,Kr=t&&t.type.__scopeId||null,e}function At(t){Kr=t}function Nt(){Kr=null}function Ze(t,e=ze,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&pc(-1);const r=hr(e);let o;try{o=t(...i)}finally{hr(r),s._d&&pc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Eo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:y,inheritAttrs:T}=t,D=hr(t);let O,x;try{if(n.shapeFlag&4){const J=i||s,ye=J;O=It(c.call(ye,J,u,h,_,d,y)),x=a}else{const J=e;O=It(J.length>1?J(h,{attrs:a,slots:o,emit:l}):J(h,null)),x=e.props?a:T_(a)}}catch(J){Qs.length=0,qr(J,t,1),O=se($n)}let V=O;if(x&&T!==!1){const J=Object.keys(x),{shapeFlag:ye}=V;J.length&&ye&7&&(r&&J.some(Aa)&&(x=R_(x,r)),V=ms(V,x,!1,!0))}return n.dirs&&(V=ms(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),O=V,hr(D),O}const T_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wr(n))&&((e||(e={}))[n]=t[n]);return e},R_=(t,e)=>{const n={};for(const s in t)(!Aa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function P_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ic(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Gr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ic(s,o,c):!0:!!o;return!1}function ic(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Gr(n,r))return!0}return!1}function k_({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Oh="components";function ut(t,e){return N_(Oh,t,!0,e)||t}const A_=Symbol.for("v-ndc");function N_(t,e,n=!0,s=!1){const i=ze||Ve;if(i){const r=i.type;if(t===Oh){const a=Im(r,!1);if(a&&(a===e||a===kt(e)||a===Br(kt(e))))return r}const o=rc(i[t]||r[t],e)||rc(i.appContext[t],e);return!o&&s?r:o}}function rc(t,e){return t&&(t[e]||t[kt(e)]||t[Br(kt(e))])}const O_=t=>t.__isSuspense;function x_(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):b_(t)}const D_=Symbol.for("v-scx"),M_=()=>Ht(D_),Ki={};function Zi(t,e,n){return xh(t,e,n)}function xh(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=_e){if(e&&r){const j=e;e=(...Se)=>{j(...Se),ye()}}const l=Ve,c=j=>s===!0?j:Ln(j,s===!1?1:void 0);let u,h=!1,d=!1;if(Je(t)?(u=()=>t.value,h=ur(t)):Ks(t)?(u=()=>c(t),h=!0):B(t)?(d=!0,h=t.some(j=>Ks(j)||ur(j)),u=()=>t.map(j=>{if(Je(j))return j.value;if(Ks(j))return c(j);if(G(j))return fn(j,l,2)})):G(t)?e?u=()=>fn(t,l,2):u=()=>(_&&_(),ft(t,l,3,[y])):u=nt,e&&s){const j=u;u=()=>Ln(j())}let _,y=j=>{_=V.onStop=()=>{fn(j,l,4),_=V.onStop=void 0}},T;if(Qr)if(y=nt,e?n&&ft(e,l,3,[u(),d?[]:void 0,y]):u(),i==="sync"){const j=M_();T=j.__watcherHandles||(j.__watcherHandles=[])}else return nt;let D=d?new Array(t.length).fill(Ki):Ki;const O=()=>{if(!(!V.active||!V.dirty))if(e){const j=V.run();(s||h||(d?j.some((Se,qe)=>vn(Se,D[qe])):vn(j,D)))&&(_&&_(),ft(e,l,3,[j,D===Ki?void 0:d&&D[0]===Ki?[]:D,y]),D=j)}else V.run()};O.allowRecurse=!!e;let x;i==="sync"?x=O:i==="post"?x=()=>Ke(O,l&&l.suspense):(O.pre=!0,l&&(O.id=l.uid),x=()=>ja(O));const V=new Ma(u,nt,x),J=zp(),ye=()=>{V.stop(),J&&Na(J.effects,V)};return e?n?O():D=V.run():i==="post"?Ke(V.run.bind(V),l&&l.suspense):V.run(),T&&T.push(ye),ye}function L_(t,e,n){const s=this.proxy,i=Ie(t)?t.includes(".")?Dh(s,t):()=>s[t]:t.bind(s,s);let r;G(e)?r=e:(r=e.handler,n=e);const o=Ri(this),a=xh(i,r.bind(s),n);return o(),a}function Dh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ln(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Ln(t.value,e,n);else if(B(t))for(let s=0;s<t.length;s++)Ln(t[s],e,n);else if(Vr(t)||as(t))t.forEach(s=>{Ln(s,e,n)});else if(ih(t))for(const s in t)Ln(t[s],e,n);return t}function ne(t,e){if(ze===null)return t;const n=Jr(ze)||ze.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=_e]=e[i];r&&(G(r)&&(r={mounted:r,updated:r}),r.deep&&Ln(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function An(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(bn(),ft(l,n,8,[t.el,a,t,e]),In())}}/*! #__NO_SIDE_EFFECTS__ */function Mh(t,e){return G(t)?Oe({name:t.name},e,{setup:t}):t}const er=t=>!!t.type.__asyncLoader,Lh=t=>t.type.__isKeepAlive;function F_(t,e){Fh(t,"a",e)}function U_(t,e){Fh(t,"da",e)}function Fh(t,e,n=Ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(zr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Lh(i.parent.vnode)&&W_(s,e,n,i),i=i.parent}}function W_(t,e,n,s){const i=zr(e,t,s,!0);Uh(()=>{Na(s[e],i)},n)}function zr(t,e,n=Ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;bn();const a=Ri(n),l=ft(e,n,t,o);return a(),In(),l});return s?i.unshift(r):i.push(r),r}}const Yt=t=>(e,n=Ve)=>(!Qr||t==="sp")&&zr(t,(...s)=>e(...s),n),V_=Yt("bm"),$_=Yt("m"),B_=Yt("bu"),H_=Yt("u"),j_=Yt("bum"),Uh=Yt("um"),q_=Yt("sp"),G_=Yt("rtg"),K_=Yt("rtc");function z_(t,e=Ve){zr("ec",t,e)}function Ft(t,e,n,s){let i;const r=n;if(B(t)||Ie(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r)}}else i=[];return i}const Yo=t=>t?ed(t)?Jr(t)||t.proxy:Yo(t.parent):null,zs=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yo(t.parent),$root:t=>Yo(t.root),$emit:t=>t.emit,$options:t=>qa(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ja(t.update)}),$nextTick:t=>t.n||(t.n=Ha.bind(t.proxy)),$watch:t=>L_.bind(t)}),Co=(t,e)=>t!==_e&&!t.__isScriptSetup&&X(t,e),Y_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Co(s,e))return o[e]=1,s[e];if(i!==_e&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==_e&&X(n,e))return o[e]=4,n[e];Qo&&(o[e]=0)}}const u=zs[e];let h,d;if(u)return e==="$attrs"&&Qe(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&X(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,X(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Co(i,e)?(i[e]=n,!0):s!==_e&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==_e&&X(t,o)||Co(e,o)||(a=r[0])&&X(a,o)||X(s,o)||X(zs,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function oc(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qo=!0;function Q_(t){const e=qa(t),n=t.proxy,s=t.ctx;Qo=!1,e.beforeCreate&&ac(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:y,activated:T,deactivated:D,beforeDestroy:O,beforeUnmount:x,destroyed:V,unmounted:J,render:ye,renderTracked:j,renderTriggered:Se,errorCaptured:qe,serverPrefetch:rt,expose:tt,inheritAttrs:Jt,components:kn,directives:wt,filters:Ms}=e;if(c&&J_(c,s,null),o)for(const le in o){const ee=o[le];G(ee)&&(s[le]=ee.bind(n))}if(i){const le=i.call(n,n);pe(le)&&(t.data=Ti(le))}if(Qo=!0,r)for(const le in r){const ee=r[le],Mt=G(ee)?ee.bind(n,n):G(ee.get)?ee.get.bind(n,n):nt,Xt=!G(ee)&&G(ee.set)?ee.set.bind(n):nt,Et=lt({get:Mt,set:Xt});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Ge=>Et.value=Ge})}if(a)for(const le in a)Wh(a[le],s,n,le);if(l){const le=G(l)?l.call(n):l;Reflect.ownKeys(le).forEach(ee=>{tr(ee,le[ee])})}u&&ac(u,t,"c");function Te(le,ee){B(ee)?ee.forEach(Mt=>le(Mt.bind(n))):ee&&le(ee.bind(n))}if(Te(V_,h),Te($_,d),Te(B_,_),Te(H_,y),Te(F_,T),Te(U_,D),Te(z_,qe),Te(K_,j),Te(G_,Se),Te(j_,x),Te(Uh,J),Te(q_,rt),B(tt))if(tt.length){const le=t.exposed||(t.exposed={});tt.forEach(ee=>{Object.defineProperty(le,ee,{get:()=>n[ee],set:Mt=>n[ee]=Mt})})}else t.exposed||(t.exposed={});ye&&t.render===nt&&(t.render=ye),Jt!=null&&(t.inheritAttrs=Jt),kn&&(t.components=kn),wt&&(t.directives=wt)}function J_(t,e,n=nt){B(t)&&(t=Jo(t));for(const s in t){const i=t[s];let r;pe(i)?"default"in i?r=Ht(i.from||s,i.default,!0):r=Ht(i.from||s):r=Ht(i),Je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ac(t,e,n){ft(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wh(t,e,n,s){const i=s.includes(".")?Dh(n,s):()=>n[s];if(Ie(t)){const r=e[t];G(r)&&Zi(i,r)}else if(G(t))Zi(i,t.bind(n));else if(pe(t))if(B(t))t.forEach(r=>Wh(r,e,n,s));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&Zi(i,r,t)}}function qa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>dr(l,c,o,!0)),dr(l,e,o)),pe(e)&&r.set(e,l),l}function dr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&dr(t,r,n,!0),i&&i.forEach(o=>dr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=X_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const X_={data:lc,props:cc,emits:cc,methods:Hs,computed:Hs,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Hs,directives:Hs,watch:em,provide:lc,inject:Z_};function lc(t,e){return e?t?function(){return Oe(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function Z_(t,e){return Hs(Jo(t),Jo(e))}function Jo(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Be(t,e){return t?[...new Set([].concat(t,e))]:e}function Hs(t,e){return t?Oe(Object.create(null),t,e):e}function cc(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:Oe(Object.create(null),oc(t),oc(e??{})):e}function em(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const s in e)n[s]=Be(t[s],e[s]);return n}function Vh(){return{app:null,config:{isNativeTag:xp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tm=0;function nm(t,e){return function(s,i=null){G(s)||(s=Oe({},s)),i!=null&&!pe(i)&&(i=null);const r=Vh(),o=new WeakSet;let a=!1;const l=r.app={_uid:tm++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Tm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=se(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Jr(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Ys;Ys=l;try{return c()}finally{Ys=u}}};return l}}let Ys=null;function tr(t,e){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[t]=e}}function Ht(t,e,n=!1){const s=Ve||ze;if(s||Ys){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ys._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(s&&s.proxy):e}}const $h={},Bh=()=>Object.create($h),Hh=t=>Object.getPrototypeOf(t)===$h;function sm(t,e,n,s=!1){const i={},r=Bh();t.propsDefaults=Object.create(null),jh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:wh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function im(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ie(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Gr(t.emitsOptions,d))continue;const _=e[d];if(l)if(X(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const y=kt(d);i[y]=Xo(l,a,y,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{jh(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=Ts(h))===h||!X(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Xo(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!X(e,h))&&(delete r[h],c=!0)}c&&Bt(t.attrs,"set","")}function jh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gs(l))continue;const c=e[l];let u;i&&X(i,u=kt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ie(n),c=a||_e;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Xo(i,l,h,c[h],t,!X(c,h))}}return o}function Xo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ri(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ts(n))&&(s=!0))}return s}function qh(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!G(t)){const u=h=>{l=!0;const[d,_]=qh(h,e,!0);Oe(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return pe(t)&&s.set(t,os),os;if(B(r))for(let u=0;u<r.length;u++){const h=kt(r[u]);uc(h)&&(o[h]=_e)}else if(r)for(const u in r){const h=kt(u);if(uc(h)){const d=r[u],_=o[h]=B(d)||G(d)?{type:d}:Oe({},d);if(_){const y=fc(Boolean,_.type),T=fc(String,_.type);_[0]=y>-1,_[1]=T<0||y<T,(y>-1||X(_,"default"))&&a.push(h)}}}const c=[o,a];return pe(t)&&s.set(t,c),c}function uc(t){return t[0]!=="$"&&!Gs(t)}function hc(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function dc(t,e){return hc(t)===hc(e)}function fc(t,e){return B(e)?e.findIndex(n=>dc(n,t)):G(e)&&dc(e,t)?0:-1}const Gh=t=>t[0]==="_"||t==="$stable",Ga=t=>B(t)?t.map(It):[It(t)],rm=(t,e,n)=>{if(e._n)return e;const s=Ze((...i)=>Ga(e(...i)),n);return s._c=!1,s},Kh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Gh(i))continue;const r=t[i];if(G(r))e[i]=rm(i,r,s);else if(r!=null){const o=Ga(r);e[i]=()=>o}}},zh=(t,e)=>{const n=Ga(e);t.slots.default=()=>n},om=(t,e)=>{const n=t.slots=Bh();if(t.vnode.shapeFlag&32){const s=e._;s?(Oe(n,e),rh(n,"_",s,!0)):Kh(e,n)}else e&&zh(t,e)},am=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=_e;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Oe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Kh(e,i)),o=e}else e&&(zh(t,e),o={default:1});if(r)for(const a in i)!Gh(a)&&o[a]==null&&delete i[a]};function Zo(t,e,n,s,i=!1){if(B(t)){t.forEach((d,_)=>Zo(d,e&&(B(e)?e[_]:e),n,s,i));return}if(er(s)&&!i)return;const r=s.shapeFlag&4?Jr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ie(c)?(u[c]=null,X(h,c)&&(h[c]=null)):Je(c)&&(c.value=null)),G(l))fn(l,a,12,[o,u]);else{const d=Ie(l),_=Je(l);if(d||_){const y=()=>{if(t.f){const T=d?X(h,l)?h[l]:u[l]:l.value;i?B(T)&&Na(T,r):B(T)?T.includes(r)||T.push(r):d?(u[l]=[r],X(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,X(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Ke(y,n)):y()}}}const Ke=x_;function lm(t){return cm(t)}function cm(t,e){const n=oh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=nt,insertStaticContent:y}=t,T=(f,p,g,E=null,v=null,S=null,k=void 0,I=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!Fs(f,p)&&(E=w(f),Ge(f,v,S,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:C,ref:N,shapeFlag:W}=p;switch(C){case Yr:D(f,p,g,E);break;case $n:O(f,p,g,E);break;case Io:f==null&&x(p,g,E,k);break;case Ae:kn(f,p,g,E,v,S,k,I,R);break;default:W&1?ye(f,p,g,E,v,S,k,I,R):W&6?wt(f,p,g,E,v,S,k,I,R):(W&64||W&128)&&C.process(f,p,g,E,v,S,k,I,R,M)}N!=null&&v&&Zo(N,f&&f.ref,S,p||f,!p)},D=(f,p,g,E)=>{if(f==null)s(p.el=a(p.children),g,E);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},O=(f,p,g,E)=>{f==null?s(p.el=l(p.children||""),g,E):p.el=f.el},x=(f,p,g,E)=>{[f.el,f.anchor]=y(f.children,p,g,E,f.el,f.anchor)},V=({el:f,anchor:p},g,E)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,E),f=v;s(p,g,E)},J=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},ye=(f,p,g,E,v,S,k,I,R)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),f==null?j(p,g,E,v,S,k,I,R):rt(f,p,v,S,k,I,R)},j=(f,p,g,E,v,S,k,I)=>{let R,C;const{props:N,shapeFlag:W,transition:U,dirs:q}=f;if(R=f.el=o(f.type,S,N&&N.is,N),W&8?u(R,f.children):W&16&&qe(f.children,R,null,E,v,bo(f,S),k,I),q&&An(f,null,E,"created"),Se(R,f,f.scopeId,k,E),N){for(const ce in N)ce!=="value"&&!Gs(ce)&&r(R,ce,null,N[ce],S,f.children,E,v,Le);"value"in N&&r(R,"value",null,N.value,S),(C=N.onVnodeBeforeMount)&&bt(C,E,f)}q&&An(f,null,E,"beforeMount");const Q=um(v,U);Q&&U.beforeEnter(R),s(R,p,g),((C=N&&N.onVnodeMounted)||Q||q)&&Ke(()=>{C&&bt(C,E,f),Q&&U.enter(R),q&&An(f,null,E,"mounted")},v)},Se=(f,p,g,E,v)=>{if(g&&_(f,g),E)for(let S=0;S<E.length;S++)_(f,E[S]);if(v){let S=v.subTree;if(p===S){const k=v.vnode;Se(f,k,k.scopeId,k.slotScopeIds,v.parent)}}},qe=(f,p,g,E,v,S,k,I,R=0)=>{for(let C=R;C<f.length;C++){const N=f[C]=I?sn(f[C]):It(f[C]);T(null,N,p,g,E,v,S,k,I)}},rt=(f,p,g,E,v,S,k)=>{const I=p.el=f.el;let{patchFlag:R,dynamicChildren:C,dirs:N}=p;R|=f.patchFlag&16;const W=f.props||_e,U=p.props||_e;let q;if(g&&Nn(g,!1),(q=U.onVnodeBeforeUpdate)&&bt(q,g,p,f),N&&An(p,f,g,"beforeUpdate"),g&&Nn(g,!0),C?tt(f.dynamicChildren,C,I,g,E,bo(p,v),S):k||ee(f,p,I,null,g,E,bo(p,v),S,!1),R>0){if(R&16)Jt(I,p,W,U,g,E,v);else if(R&2&&W.class!==U.class&&r(I,"class",null,U.class,v),R&4&&r(I,"style",W.style,U.style,v),R&8){const Q=p.dynamicProps;for(let ce=0;ce<Q.length;ce++){const me=Q[ce],Re=W[me],ot=U[me];(ot!==Re||me==="value")&&r(I,me,Re,ot,v,f.children,g,E,Le)}}R&1&&f.children!==p.children&&u(I,p.children)}else!k&&C==null&&Jt(I,p,W,U,g,E,v);((q=U.onVnodeUpdated)||N)&&Ke(()=>{q&&bt(q,g,p,f),N&&An(p,f,g,"updated")},E)},tt=(f,p,g,E,v,S,k)=>{for(let I=0;I<p.length;I++){const R=f[I],C=p[I],N=R.el&&(R.type===Ae||!Fs(R,C)||R.shapeFlag&70)?h(R.el):g;T(R,C,N,null,E,v,S,k,!0)}},Jt=(f,p,g,E,v,S,k)=>{if(g!==E){if(g!==_e)for(const I in g)!Gs(I)&&!(I in E)&&r(f,I,g[I],null,k,p.children,v,S,Le);for(const I in E){if(Gs(I))continue;const R=E[I],C=g[I];R!==C&&I!=="value"&&r(f,I,C,R,k,p.children,v,S,Le)}"value"in E&&r(f,"value",g.value,E.value,k)}},kn=(f,p,g,E,v,S,k,I,R)=>{const C=p.el=f?f.el:a(""),N=p.anchor=f?f.anchor:a("");let{patchFlag:W,dynamicChildren:U,slotScopeIds:q}=p;q&&(I=I?I.concat(q):q),f==null?(s(C,g,E),s(N,g,E),qe(p.children||[],g,N,v,S,k,I,R)):W>0&&W&64&&U&&f.dynamicChildren?(tt(f.dynamicChildren,U,g,v,S,k,I),(p.key!=null||v&&p===v.subTree)&&Yh(f,p,!0)):ee(f,p,g,N,v,S,k,I,R)},wt=(f,p,g,E,v,S,k,I,R)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?v.ctx.activate(p,g,E,k,R):Ms(p,g,E,v,S,k,R):Xn(f,p,R)},Ms=(f,p,g,E,v,S,k)=>{const I=f.component=vm(f,E,v);if(Lh(f)&&(I.ctx.renderer=M),wm(I),I.asyncDep){if(v&&v.registerDep(I,Te),!f.el){const R=I.subTree=se($n);O(null,R,p,g)}}else Te(I,f,p,g,v,S,k)},Xn=(f,p,g)=>{const E=p.component=f.component;if(P_(f,p,g))if(E.asyncDep&&!E.asyncResolved){le(E,p,g);return}else E.next=p,C_(E.update),E.effect.dirty=!0,E.update();else p.el=f.el,E.vnode=p},Te=(f,p,g,E,v,S,k)=>{const I=()=>{if(f.isMounted){let{next:N,bu:W,u:U,parent:q,vnode:Q}=f;{const ts=Qh(f);if(ts){N&&(N.el=Q.el,le(f,N,k)),ts.asyncDep.then(()=>{f.isUnmounted||I()});return}}let ce=N,me;Nn(f,!1),N?(N.el=Q.el,le(f,N,k)):N=Q,W&&Ji(W),(me=N.props&&N.props.onVnodeBeforeUpdate)&&bt(me,q,N,Q),Nn(f,!0);const Re=Eo(f),ot=f.subTree;f.subTree=Re,T(ot,Re,h(ot.el),w(ot),f,v,S),N.el=Re.el,ce===null&&k_(f,Re.el),U&&Ke(U,v),(me=N.props&&N.props.onVnodeUpdated)&&Ke(()=>bt(me,q,N,Q),v)}else{let N;const{el:W,props:U}=p,{bm:q,m:Q,parent:ce}=f,me=er(p);if(Nn(f,!1),q&&Ji(q),!me&&(N=U&&U.onVnodeBeforeMount)&&bt(N,ce,p),Nn(f,!0),W&&ve){const Re=()=>{f.subTree=Eo(f),ve(W,f.subTree,f,v,null)};me?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Re()):Re()}else{const Re=f.subTree=Eo(f);T(null,Re,g,E,f,v,S),p.el=Re.el}if(Q&&Ke(Q,v),!me&&(N=U&&U.onVnodeMounted)){const Re=p;Ke(()=>bt(N,ce,Re),v)}(p.shapeFlag&256||ce&&er(ce.vnode)&&ce.vnode.shapeFlag&256)&&f.a&&Ke(f.a,v),f.isMounted=!0,p=g=E=null}},R=f.effect=new Ma(I,nt,()=>ja(C),f.scope),C=f.update=()=>{R.dirty&&R.run()};C.id=f.uid,Nn(f,!0),C()},le=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,im(f,p.props,E,g),am(f,p.children,g),bn(),sc(f),In()},ee=(f,p,g,E,v,S,k,I,R=!1)=>{const C=f&&f.children,N=f?f.shapeFlag:0,W=p.children,{patchFlag:U,shapeFlag:q}=p;if(U>0){if(U&128){Xt(C,W,g,E,v,S,k,I,R);return}else if(U&256){Mt(C,W,g,E,v,S,k,I,R);return}}q&8?(N&16&&Le(C,v,S),W!==C&&u(g,W)):N&16?q&16?Xt(C,W,g,E,v,S,k,I,R):Le(C,v,S,!0):(N&8&&u(g,""),q&16&&qe(W,g,E,v,S,k,I,R))},Mt=(f,p,g,E,v,S,k,I,R)=>{f=f||os,p=p||os;const C=f.length,N=p.length,W=Math.min(C,N);let U;for(U=0;U<W;U++){const q=p[U]=R?sn(p[U]):It(p[U]);T(f[U],q,g,null,v,S,k,I,R)}C>N?Le(f,v,S,!0,!1,W):qe(p,g,E,v,S,k,I,R,W)},Xt=(f,p,g,E,v,S,k,I,R)=>{let C=0;const N=p.length;let W=f.length-1,U=N-1;for(;C<=W&&C<=U;){const q=f[C],Q=p[C]=R?sn(p[C]):It(p[C]);if(Fs(q,Q))T(q,Q,g,null,v,S,k,I,R);else break;C++}for(;C<=W&&C<=U;){const q=f[W],Q=p[U]=R?sn(p[U]):It(p[U]);if(Fs(q,Q))T(q,Q,g,null,v,S,k,I,R);else break;W--,U--}if(C>W){if(C<=U){const q=U+1,Q=q<N?p[q].el:E;for(;C<=U;)T(null,p[C]=R?sn(p[C]):It(p[C]),g,Q,v,S,k,I,R),C++}}else if(C>U)for(;C<=W;)Ge(f[C],v,S,!0),C++;else{const q=C,Q=C,ce=new Map;for(C=Q;C<=U;C++){const Xe=p[C]=R?sn(p[C]):It(p[C]);Xe.key!=null&&ce.set(Xe.key,C)}let me,Re=0;const ot=U-Q+1;let ts=!1,ql=0;const Ls=new Array(ot);for(C=0;C<ot;C++)Ls[C]=0;for(C=q;C<=W;C++){const Xe=f[C];if(Re>=ot){Ge(Xe,v,S,!0);continue}let Ct;if(Xe.key!=null)Ct=ce.get(Xe.key);else for(me=Q;me<=U;me++)if(Ls[me-Q]===0&&Fs(Xe,p[me])){Ct=me;break}Ct===void 0?Ge(Xe,v,S,!0):(Ls[Ct-Q]=C+1,Ct>=ql?ql=Ct:ts=!0,T(Xe,p[Ct],g,null,v,S,k,I,R),Re++)}const Gl=ts?hm(Ls):os;for(me=Gl.length-1,C=ot-1;C>=0;C--){const Xe=Q+C,Ct=p[Xe],Kl=Xe+1<N?p[Xe+1].el:E;Ls[C]===0?T(null,Ct,g,Kl,v,S,k,I,R):ts&&(me<0||C!==Gl[me]?Et(Ct,g,Kl,2):me--)}}},Et=(f,p,g,E,v=null)=>{const{el:S,type:k,transition:I,children:R,shapeFlag:C}=f;if(C&6){Et(f.component.subTree,p,g,E);return}if(C&128){f.suspense.move(p,g,E);return}if(C&64){k.move(f,p,g,M);return}if(k===Ae){s(S,p,g);for(let W=0;W<R.length;W++)Et(R[W],p,g,E);s(f.anchor,p,g);return}if(k===Io){V(f,p,g);return}if(E!==2&&C&1&&I)if(E===0)I.beforeEnter(S),s(S,p,g),Ke(()=>I.enter(S),v);else{const{leave:W,delayLeave:U,afterLeave:q}=I,Q=()=>s(S,p,g),ce=()=>{W(S,()=>{Q(),q&&q()})};U?U(S,Q,ce):ce()}else s(S,p,g)},Ge=(f,p,g,E=!1,v=!1)=>{const{type:S,props:k,ref:I,children:R,dynamicChildren:C,shapeFlag:N,patchFlag:W,dirs:U}=f;if(I!=null&&Zo(I,null,g,f,!0),N&256){p.ctx.deactivate(f);return}const q=N&1&&U,Q=!er(f);let ce;if(Q&&(ce=k&&k.onVnodeBeforeUnmount)&&bt(ce,p,f),N&6)$i(f.component,g,E);else{if(N&128){f.suspense.unmount(g,E);return}q&&An(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,g,v,M,E):C&&(S!==Ae||W>0&&W&64)?Le(C,p,g,!1,!0):(S===Ae&&W&384||!v&&N&16)&&Le(R,p,g),E&&Zn(f)}(Q&&(ce=k&&k.onVnodeUnmounted)||q)&&Ke(()=>{ce&&bt(ce,p,f),q&&An(f,null,p,"unmounted")},g)},Zn=f=>{const{type:p,el:g,anchor:E,transition:v}=f;if(p===Ae){es(g,E);return}if(p===Io){J(f);return}const S=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:I}=v,R=()=>k(g,S);I?I(f.el,S,R):R()}else S()},es=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},$i=(f,p,g)=>{const{bum:E,scope:v,update:S,subTree:k,um:I}=f;E&&Ji(E),v.stop(),S&&(S.active=!1,Ge(k,f,p,g)),I&&Ke(I,p),Ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Le=(f,p,g,E=!1,v=!1,S=0)=>{for(let k=S;k<f.length;k++)Ge(f[k],p,g,E,v)},w=f=>f.shapeFlag&6?w(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let A=!1;const P=(f,p,g)=>{f==null?p._vnode&&Ge(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,g),A||(A=!0,sc(),kh(),A=!1),p._vnode=f},M={p:T,um:Ge,m:Et,r:Zn,mt:Ms,mc:qe,pc:ee,pbc:tt,n:w,o:t};let re,ve;return{render:P,hydrate:re,createApp:nm(P,re)}}function bo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function um(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yh(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=sn(i[r]),a.el=o.el),n||Yh(o,a)),a.type===Yr&&(a.el=o.el)}}function hm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Qh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qh(e)}const dm=t=>t.__isTeleport,Ae=Symbol.for("v-fgt"),Yr=Symbol.for("v-txt"),$n=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),Qs=[];let ht=null;function L(t=!1){Qs.push(ht=t?null:[])}function fm(){Qs.pop(),ht=Qs[Qs.length-1]||null}let ci=1;function pc(t){ci+=t}function Jh(t){return t.dynamicChildren=ci>0?ht||os:null,fm(),ci>0&&ht&&ht.push(t),t}function F(t,e,n,s,i,r){return Jh(m(t,e,n,s,i,r,!0))}function Xh(t,e,n,s,i){return Jh(se(t,e,n,s,i,!0))}function ea(t){return t?t.__v_isVNode===!0:!1}function Fs(t,e){return t.type===e.type&&t.key===e.key}const Zh=({key:t})=>t??null,nr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ie(t)||Je(t)||G(t)?{i:ze,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,s=0,i=null,r=t===Ae?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zh(e),ref:e&&nr(e),scopeId:Kr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ze};return a?(Ka(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ie(n)?8:16),ci>0&&!o&&ht&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ht.push(l),l}const se=pm;function pm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===A_)&&(t=$n),ea(t)){const a=ms(t,e,!0);return n&&Ka(a,n),ci>0&&!r&&ht&&(a.shapeFlag&6?ht[ht.indexOf(t)]=a:ht.push(a)),a.patchFlag|=-2,a}if(Sm(t)&&(t=t.__vccOpts),e){e=_m(e);let{class:a,style:l}=e;a&&!Ie(a)&&(e.class=Da(a)),pe(l)&&(Ch(l)&&!B(l)&&(l=Oe({},l)),e.style=xa(l))}const o=Ie(t)?1:O_(t)?128:dm(t)?64:pe(t)?4:G(t)?2:0;return m(t,e,n,s,i,o,r,!0)}function _m(t){return t?Ch(t)||Hh(t)?Oe({},t):t:null}function ms(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?mm(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zh(c),ref:e&&e.ref?n&&r?B(r)?r.concat(nr(e)):[r,nr(e)]:nr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ae?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ms(t.ssContent),ssFallback:t.ssFallback&&ms(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&(u.transition=l.clone(u)),u}function Ue(t=" ",e=0){return se(Yr,null,t,e)}function ge(t="",e=!1){return e?(L(),Xh($n,null,t)):se($n,null,t)}function It(t){return t==null||typeof t=="boolean"?se($n):B(t)?se(Ae,null,t.slice()):typeof t=="object"?sn(t):se(Yr,null,String(t))}function sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ms(t)}function Ka(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ka(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Hh(e)?e._ctx=ze:i===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),s&64?(n=16,e=[Ue(e)]):n=8);t.children=e,t.shapeFlag|=n}function mm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Da([e.class,s.class]));else if(i==="style")e.style=xa([e.style,s.style]);else if(Wr(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function bt(t,e,n,s=null){ft(t,e,7,[n,s])}const gm=Vh();let ym=0;function vm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||gm,r={uid:ym++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qh(s,i),emitsOptions:Nh(s,i),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:s.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=S_.bind(null,r),t.ce&&t.ce(r),r}let Ve=null,fr,ta;{const t=oh(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};fr=e("__VUE_INSTANCE_SETTERS__",n=>Ve=n),ta=e("__VUE_SSR_SETTERS__",n=>Qr=n)}const Ri=t=>{const e=Ve;return fr(t),t.scope.on(),()=>{t.scope.off(),fr(e)}},_c=()=>{Ve&&Ve.scope.off(),fr(null)};function ed(t){return t.vnode.shapeFlag&4}let Qr=!1;function wm(t,e=!1){e&&ta(e);const{props:n,children:s}=t.vnode,i=ed(t);sm(t,n,i,e),om(t,s);const r=i?Em(t,e):void 0;return e&&ta(!1),r}function Em(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Y_);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?bm(t):null,r=Ri(t);bn();const o=fn(s,t,0,[t.props,i]);if(In(),r(),nh(o)){if(o.then(_c,_c),e)return o.then(a=>{mc(t,a,e)}).catch(a=>{qr(a,t,0)});t.asyncDep=o}else mc(t,o,e)}else td(t,e)}function mc(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Th(e)),td(t,n)}let gc;function td(t,e,n){const s=t.type;if(!t.render){if(!e&&gc&&!s.render){const i=s.template||qa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Oe(Oe({isCustomElement:r,delimiters:a},o),l);s.render=gc(i,c)}}t.render=s.render||nt}{const i=Ri(t);bn();try{Q_(t)}finally{In(),i()}}}const Cm={get(t,e){return Qe(t,"get",""),t[e]}};function bm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Cm),slots:t.slots,emit:t.emit,expose:e}}function Jr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Th(p_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zs)return zs[n](t)},has(e,n){return n in e||n in zs}}))}function Im(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function Sm(t){return G(t)&&"__vccOpts"in t}const lt=(t,e)=>__(t,e,Qr);function nd(t,e,n){const s=arguments.length;return s===2?pe(e)&&!B(e)?ea(e)?se(t,null,[e]):se(t,e):se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ea(n)&&(n=[n]),se(t,e,n))}const Tm="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Rm="http://www.w3.org/2000/svg",Pm="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,yc=rn&&rn.createElement("template"),km={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?rn.createElementNS(Rm,t):e==="mathml"?rn.createElementNS(Pm,t):rn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>rn.createTextNode(t),createComment:t=>rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{yc.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=yc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Am=Symbol("_vtc");function Nm(t,e,n){const s=t[Am];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vc=Symbol("_vod"),Om=Symbol("_vsh"),xm=Symbol(""),Dm=/(^|;)\s*display\s*:/;function Mm(t,e,n){const s=t.style,i=Ie(n);let r=!1;if(n&&!i){if(e)if(Ie(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&sr(s,a,"")}else for(const o in e)n[o]==null&&sr(s,o,"");for(const o in n)o==="display"&&(r=!0),sr(s,o,n[o])}else if(i){if(e!==n){const o=s[xm];o&&(n+=";"+o),s.cssText=n,r=Dm.test(n)}}else e&&t.removeAttribute("style");vc in t&&(t[vc]=r?s.display:"",t[Om]&&(s.display="none"))}const wc=/\s*!important$/;function sr(t,e,n){if(B(n))n.forEach(s=>sr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Lm(t,e);wc.test(n)?t.setProperty(Ts(s),n.replace(wc,""),"important"):t[s]=n}}const Ec=["Webkit","Moz","ms"],So={};function Lm(t,e){const n=So[e];if(n)return n;let s=kt(e);if(s!=="filter"&&s in t)return So[e]=s;s=Br(s);for(let i=0;i<Ec.length;i++){const r=Ec[i]+s;if(r in t)return So[e]=r}return e}const Cc="http://www.w3.org/1999/xlink";function Fm(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Cc,e.slice(6,e.length)):t.setAttributeNS(Cc,e,n);else{const r=Hp(e);n==null||r&&!ah(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Um(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ah(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Mn(t,e,n,s){t.addEventListener(e,n,s)}function Wm(t,e,n,s){t.removeEventListener(e,n,s)}const bc=Symbol("_vei");function Vm(t,e,n,s,i=null){const r=t[bc]||(t[bc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=$m(e);if(s){const c=r[e]=jm(s,i);Mn(t,a,c,l)}else o&&(Wm(t,a,o,l),r[e]=void 0)}}const Ic=/(?:Once|Passive|Capture)$/;function $m(t){let e;if(Ic.test(t)){e={};let s;for(;s=t.match(Ic);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ts(t.slice(2)),e]}let To=0;const Bm=Promise.resolve(),Hm=()=>To||(Bm.then(()=>To=0),To=Date.now());function jm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ft(qm(s,n.value),e,5,[s])};return n.value=t,n.attached=Hm(),n}function qm(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Sc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gm=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?Nm(t,s,c):e==="style"?Mm(t,n,s):Wr(e)?Aa(e)||Vm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Km(t,e,s,c))?Um(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Fm(t,e,s,c))};function Km(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sc(e)&&G(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Sc(e)&&Ie(n)?!1:e in t}const pr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Ji(e,n):e};function zm(t){t.target.composing=!0}function Tc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const us=Symbol("_assign"),ae={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[us]=pr(i);const r=s||i.props&&i.props.type==="number";Mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=cr(a)),t[us](a)}),n&&Mn(t,"change",()=>{t.value=t.value.trim()}),e||(Mn(t,"compositionstart",zm),Mn(t,"compositionend",Tc),Mn(t,"change",Tc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[us]=pr(r),t.composing)return;const o=(i||t.type==="number")&&!/^0\d/.test(t.value)?cr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},Ym={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Vr(e);Mn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?cr(_r(o)):_r(o));t[us](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Ha(()=>{t._assigning=!1})}),t[us]=pr(s)},mounted(t,{value:e,modifiers:{number:n}}){Rc(t,e)},beforeUpdate(t,e,n){t[us]=pr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Rc(t,e)}};function Rc(t,e,n){const s=t.multiple,i=B(e);if(!(s&&!i&&!Vr(e))){for(let r=0,o=t.options.length;r<o;r++){const a=t.options[r],l=_r(a);if(s)if(i){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(u=>String(u)===String(l)):a.selected=qp(e,l)>-1}else a.selected=e.has(l);else if(Hr(_r(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function _r(t){return"_value"in t?t._value:t.value}const Qm=["ctrl","shift","alt","meta"],Jm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qm.some(n=>t[`${n}Key`]&&!e.includes(n))},Vn=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Jm[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Xm=Oe({patchProp:Gm},km);let Pc;function Zm(){return Pc||(Pc=lm(Xm))}const eg=(...t)=>{const e=Zm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=ng(s);if(!i)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,tg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function tg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ng(t){return Ie(t)?document.querySelector(t):t}const Fe=Ti({isAuthenticated:!1,user:null,isAdmin:!1,login(t){this.isAuthenticated=!0,this.user=t,this.isAdmin=t.isAdmin||!1},logout(){this.isAuthenticated=!1,this.user=null,this.isAdmin=!1}});var kc={};/**
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
 */const sd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw Rs(e)},Rs=function(t){return new Error("Firebase Database ("+sd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const id=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(id(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new ig;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const y=c<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ig extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rd=function(t){const e=id(t);return za.encodeByteArray(e,!0)},mr=function(t){return rd(t).replace(/\./g,"")},gr=function(t){try{return za.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rg(t){return od(void 0,t)}function od(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!og(n)||(t[n]=od(t[n],e[n]));return t}function og(t){return t!=="__proto__"}/**
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
 */function ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lg=()=>ag().__FIREBASE_DEFAULTS__,cg=()=>{if(typeof process>"u"||typeof kc>"u")return;const t=kc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ug=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gr(t[1]);return e&&JSON.parse(e)},Ya=()=>{try{return lg()||cg()||ug()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ad=t=>{var e,n;return(n=(e=Ya())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hg=t=>{const e=ad(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ld=()=>{var t;return(t=Ya())===null||t===void 0?void 0:t.config},cd=t=>{var e;return(e=Ya())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Pi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function dg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mr(JSON.stringify(n)),mr(JSON.stringify(o)),""].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function fg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ud(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pg(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hd(){return sd.NODE_ADMIN===!0}function _g(){try{return typeof indexedDB=="object"}catch{return!1}}function mg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const gg="FirebaseError";class Sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=gg,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?yg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,a,s)}}function yg(t,e){return t.replace(vg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const vg=/\{\$([^}]+)}/g;/**
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
 */function ui(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
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
 */const dd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ui(gr(r[0])||""),n=ui(gr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},wg=function(t){const e=dd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Eg=function(t){const e=dd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ot(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function na(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ac(r)&&Ac(o)){if(!vr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ac(t){return t!==null&&typeof t=="object"}/**
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
 */function Ps(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Cg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function bg(t,e){const n=new Ig(t,e);return n.subscribe.bind(n)}class Ig{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Sg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ro),i.error===void 0&&(i.error=Ro),i.complete===void 0&&(i.complete=Ro);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ro(){}function Xr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Tg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const On="[DEFAULT]";/**
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
 */class Rg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Pi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kg(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Pg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pg(t){return t===On?void 0:t}function kg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ag{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Ng={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Og=ue.INFO,xg={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Dg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=xg[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ja{constructor(e){this.name=e,this._logLevel=Og,this._logHandler=Dg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ng[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Mg=(t,e)=>e.some(n=>t instanceof n);let Nc,Oc;function Lg(){return Nc||(Nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fg(){return Oc||(Oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fd=new WeakMap,sa=new WeakMap,pd=new WeakMap,Po=new WeakMap,Xa=new WeakMap;function Ug(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(pn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fd.set(n,t)}).catch(()=>{}),Xa.set(e,t),e}function Wg(t){if(sa.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});sa.set(t,e)}let ia={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vg(t){ia=t(ia)}function $g(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ko(this),e,...n);return pd.set(s,e.sort?e.sort():[e]),pn(s)}:Fg().includes(t)?function(...e){return t.apply(ko(this),e),pn(fd.get(this))}:function(...e){return pn(t.apply(ko(this),e))}}function Bg(t){return typeof t=="function"?$g(t):(t instanceof IDBTransaction&&Wg(t),Mg(t,Lg())?new Proxy(t,ia):t)}function pn(t){if(t instanceof IDBRequest)return Ug(t);if(Po.has(t))return Po.get(t);const e=Bg(t);return e!==t&&(Po.set(t,e),Xa.set(e,t)),e}const ko=t=>Xa.get(t);function Hg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=pn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(pn(o.result),l.oldVersion,l.newVersion,pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const jg=["get","getKey","getAll","getAllKeys","count"],qg=["put","add","delete","clear"],Ao=new Map;function xc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=qg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jg.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ao.set(e,r),r}Vg(t=>({...t,get:(e,n,s)=>xc(e,n)||t.get(e,n,s),has:(e,n)=>!!xc(e,n)||t.has(e,n)}));/**
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
 */class Gg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ra="@firebase/app",Dc="0.10.5";/**
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
 */const Hn=new Ja("@firebase/app"),zg="@firebase/app-compat",Yg="@firebase/analytics-compat",Qg="@firebase/analytics",Jg="@firebase/app-check-compat",Xg="@firebase/app-check",Zg="@firebase/auth",ey="@firebase/auth-compat",ty="@firebase/database",ny="@firebase/database-compat",sy="@firebase/functions",iy="@firebase/functions-compat",ry="@firebase/installations",oy="@firebase/installations-compat",ay="@firebase/messaging",ly="@firebase/messaging-compat",cy="@firebase/performance",uy="@firebase/performance-compat",hy="@firebase/remote-config",dy="@firebase/remote-config-compat",fy="@firebase/storage",py="@firebase/storage-compat",_y="@firebase/firestore",my="@firebase/vertexai-preview",gy="@firebase/firestore-compat",yy="firebase",vy="10.12.2";/**
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
 */const oa="[DEFAULT]",wy={[ra]:"fire-core",[zg]:"fire-core-compat",[Qg]:"fire-analytics",[Yg]:"fire-analytics-compat",[Xg]:"fire-app-check",[Jg]:"fire-app-check-compat",[Zg]:"fire-auth",[ey]:"fire-auth-compat",[ty]:"fire-rtdb",[ny]:"fire-rtdb-compat",[sy]:"fire-fn",[iy]:"fire-fn-compat",[ry]:"fire-iid",[oy]:"fire-iid-compat",[ay]:"fire-fcm",[ly]:"fire-fcm-compat",[cy]:"fire-perf",[uy]:"fire-perf-compat",[hy]:"fire-rc",[dy]:"fire-rc-compat",[fy]:"fire-gcs",[py]:"fire-gcs-compat",[_y]:"fire-fst",[gy]:"fire-fst-compat",[my]:"fire-vertex","fire-js":"fire-js",[yy]:"fire-js-all"};/**
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
 */const wr=new Map,Ey=new Map,aa=new Map;function Mc(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(aa.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;aa.set(e,t);for(const n of wr.values())Mc(n,t);for(const n of Ey.values())Mc(n,t);return!0}function Za(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tt(t){return t.settings!==void 0}/**
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
 */const Cy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new ki("app","Firebase",Cy);/**
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
 */class by{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=vy;function yt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(n||(n=ld()),!n)throw _n.create("no-options");const r=wr.get(i);if(r){if(vr(n,r.options)&&vr(s,r.config))return r;throw _n.create("duplicate-app",{appName:i})}const o=new Ag(i);for(const l of aa.values())o.addComponent(l);const a=new by(n,s,o);return wr.set(i,a),a}function _d(t=oa){const e=wr.get(t);if(!e&&t===oa&&ld())return yt();if(!e)throw _n.create("no-app",{appName:t});return e}function mn(t,e,n){var s;let i=(s=wy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(a.join(" "));return}ys(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Iy="firebase-heartbeat-database",Sy=1,hi="firebase-heartbeat-store";let No=null;function md(){return No||(No=Hg(Iy,Sy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),No}async function Ty(t){try{const n=(await md()).transaction(hi),s=await n.objectStore(hi).get(gd(t));return await n.done,s}catch(e){if(e instanceof Sn)Hn.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function Lc(t,e){try{const s=(await md()).transaction(hi,"readwrite");await s.objectStore(hi).put(e,gd(t)),await s.done}catch(n){if(n instanceof Sn)Hn.warn(n.message);else{const s=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(s.message)}}}function gd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ry=1024,Py=30*24*60*60*1e3;class ky{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ny(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Py}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fc(),{heartbeatsToSend:s,unsentEntries:i}=Ay(this._heartbeatsCache.heartbeats),r=mr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fc(){return new Date().toISOString().substring(0,10)}function Ay(t,e=Ry){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Uc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ny{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _g()?mg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ty(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uc(t){return mr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Oy(t){ys(new Bn("platform-logger",e=>new Gg(e),"PRIVATE")),ys(new Bn("heartbeat",e=>new ky(e),"PRIVATE")),mn(ra,Dc,t),mn(ra,Dc,"esm2017"),mn("fire-js","")}Oy("");function el(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function yd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xy=yd,vd=new ki("auth","Firebase",yd());/**
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
 */const Er=new Ja("@firebase/auth");function Dy(t,...e){Er.logLevel<=ue.WARN&&Er.warn(`Auth (${ks}): ${t}`,...e)}function ir(t,...e){Er.logLevel<=ue.ERROR&&Er.error(`Auth (${ks}): ${t}`,...e)}/**
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
 */function _t(t,...e){throw tl(t,...e)}function Rt(t,...e){return tl(t,...e)}function wd(t,e,n){const s=Object.assign(Object.assign({},xy()),{[e]:n});return new ki("auth","Firebase",s).create(e,{appName:t.name})}function jt(t){return wd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return vd.create(t,...e)}function H(t,e,...n){if(!t)throw tl(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ir(e),new Error(e)}function Kt(t,e){t||Ut(e)}/**
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
 */function la(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function My(){return Wc()==="http:"||Wc()==="https:"}function Wc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ly(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(My()||fg()||"connection"in navigator)?navigator.onLine:!0}function Fy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=Qa()||ud()}get(){return Ly()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nl(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ed{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Wy=new Ai(3e4,6e4);function Tn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,s,i={}){return Cd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ps(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ed.fetch()(bd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Cd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Uy),e);try{const i=new $y(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw wd(t,u,c);_t(t,u)}}catch(i){if(i instanceof Sn)throw i;_t(t,"network-request-failed",{message:String(i)})}}async function Ni(t,e,n,s,i={}){const r=await Rn(t,e,n,s,i);return"mfaPendingCredential"in r&&_t(t,"multi-factor-auth-required",{_serverResponse:r}),r}function bd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?nl(t.config,i):`${t.config.apiScheme}://${i}`}function Vy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $y{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rt(this.auth,"network-request-failed")),Wy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Rt(t,e,s);return i.customData._tokenResponse=n,i}function Vc(t){return t!==void 0&&t.enterprise!==void 0}class By{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Vy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Hy(t,e){return Rn(t,"GET","/v2/recaptchaConfig",Tn(t,e))}/**
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
 */async function jy(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function Id(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qy(t,e=!1){const n=Me(t),s=await n.getIdToken(e),i=sl(s);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Js(Oo(i.auth_time)),issuedAtTime:Js(Oo(i.iat)),expirationTime:Js(Oo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Oo(t){return Number(t)*1e3}function sl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ir("JWT malformed, contained fewer than 3 sections"),null;try{const i=gr(n);return i?JSON.parse(i):(ir("Failed to decode base64 JWT payload"),null)}catch(i){return ir("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $c(t){const e=sl(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Sn&&Gy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Gy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ky{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ca{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await di(t,Id(n,{idToken:s}));H(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Sd(r.providerUserInfo):[],a=Yy(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ca(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function zy(t){const e=Me(t);await Cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yy(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Sd(t){return t.map(e=>{var{providerId:n}=e,s=el(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Qy(t,e){const n=await Cd(t,{},async()=>{const s=Ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=bd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ed.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jy(t,e){return Rn(t,"POST","/v2/accounts:revokeToken",Tn(t,e))}/**
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
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$c(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=$c(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Qy(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new hs;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
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
 */function en(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=el(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ky(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ca(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qy(this,e)}reload(){return zy(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Cr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(jt(this.auth));const e=await this.getIdToken();return await di(this,jy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:J,isAnonymous:ye,providerData:j,stsTokenManager:Se}=n;H(V&&Se,e,"internal-error");const qe=hs.fromJSON(this.name,Se);H(typeof V=="string",e,"internal-error"),en(h,e.name),en(d,e.name),H(typeof J=="boolean",e,"internal-error"),H(typeof ye=="boolean",e,"internal-error"),en(_,e.name),en(y,e.name),en(T,e.name),en(D,e.name),en(O,e.name),en(x,e.name);const rt=new Wt({uid:V,auth:e,email:d,emailVerified:J,displayName:h,isAnonymous:ye,photoURL:y,phoneNumber:_,tenantId:T,stsTokenManager:qe,createdAt:O,lastLoginAt:x});return j&&Array.isArray(j)&&(rt.providerData=j.map(tt=>Object.assign({},tt))),D&&(rt._redirectEventId=D),rt}static async _fromIdTokenResponse(e,n,s=!1){const i=new hs;i.updateFromServerResponse(n);const r=new Wt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Cr(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Sd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new hs;a.updateFromIdToken(s);const l=new Wt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ca(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Bc=new Map;function Vt(t){Kt(t instanceof Function,"Expected a class definition");let e=Bc.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bc.set(t,e),e)}/**
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
 */class Td{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Td.type="NONE";const Hc=Td;/**
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
 */function rr(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=rr(this.userKey,i.apiKey,r),this.fullPersistenceKey=rr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ds(Vt(Hc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Vt(Hc);const o=rr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Wt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ds(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ds(r,e,s))}}/**
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
 */function jc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nd(e))return"Blackberry";if(Od(e))return"Webos";if(il(e))return"Safari";if((e.includes("chrome/")||Pd(e))&&!e.includes("edge/"))return"Chrome";if(Ad(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rd(t=$e()){return/firefox\//i.test(t)}function il(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pd(t=$e()){return/crios\//i.test(t)}function kd(t=$e()){return/iemobile/i.test(t)}function Ad(t=$e()){return/android/i.test(t)}function Nd(t=$e()){return/blackberry/i.test(t)}function Od(t=$e()){return/webos/i.test(t)}function eo(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xy(t=$e()){var e;return eo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zy(){return pg()&&document.documentMode===10}function xd(t=$e()){return eo(t)||Ad(t)||Od(t)||Nd(t)||/windows phone/i.test(t)||kd(t)}function ev(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Dd(t,e=[]){let n;switch(t){case"Browser":n=jc($e());break;case"Worker":n=`${jc($e())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${s}`}/**
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
 */class tv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function nv(t,e={}){return Rn(t,"GET","/v2/passwordPolicy",Tn(t,e))}/**
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
 */const sv=6;class iv{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class rv{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qc(this),this.idTokenSubscription=new qc(this),this.beforeStateQueue=new tv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Id(this,{idToken:e}),s=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(jt(this));const n=e?Me(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nv(this),n=new iv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Jy(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Dy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yn(t){return Me(t)}class qc{constructor(e){this.auth=e,this.observer=null,this.addObserver=bg(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let to={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ov(t){to=t}function Md(t){return to.loadJS(t)}function av(){return to.recaptchaEnterpriseScript}function lv(){return to.gapiScript}function cv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uv="recaptcha-enterprise",hv="NO_RECAPTCHA";class dv{constructor(e){this.type=uv,this.auth=Yn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Hy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new By(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Vc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(hv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Vc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=av();l.length!==0&&(l+=a),Md(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Gc(t,e,n,s=!1){const i=new dv(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ua(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Gc(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Gc(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
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
 */function fv(t,e){const n=Za(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(vr(r,e??{}))return i;_t(i,"already-initialized")}return n.initialize({options:e})}function pv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function _v(t,e,n){const s=Yn(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Ld(e),{host:o,port:a}=mv(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),gv()}function Ld(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mv(t){const e=Ld(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Kc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Kc(o)}}}function Kc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}async function yv(t,e){return Rn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vv(t,e){return Ni(t,"POST","/v1/accounts:signInWithPassword",Tn(t,e))}/**
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
 */async function wv(t,e){return Ni(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,e))}async function Ev(t,e){return Ni(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,e))}/**
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
 */class fi extends rl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new fi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new fi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ua(e,n,"signInWithPassword",vv);case"emailLink":return wv(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ua(e,s,"signUpPassword",yv);case"emailLink":return Ev(e,{idToken:n,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fs(t,e){return Ni(t,"POST","/v1/accounts:signInWithIdp",Tn(t,e))}/**
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
 */const Cv="http://localhost";class jn extends rl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=el(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new jn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:Cv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ps(n)}return e}}/**
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
 */function bv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Iv(t){const e=js(qs(t)).link,n=e?js(qs(e)).deep_link_id:null,s=js(qs(t)).deep_link_id;return(s?js(qs(s)).link:null)||s||n||e||t}class ol{constructor(e){var n,s,i,r,o,a;const l=js(qs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=bv((i=l.mode)!==null&&i!==void 0?i:null);H(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Iv(e);try{return new ol(n)}catch{return null}}}/**
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
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return fi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ol.parseLink(n);return H(s,"argument-error"),fi._fromEmailAndCode(e,s.code,s.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Fd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oi extends Fd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class an extends Oi{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
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
 */class ln extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
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
 */class cn extends Oi{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
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
 */class un extends Oi{constructor(){super("twitter.com")}static credential(e,n){return jn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return un.credential(n,s)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
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
 */async function Sv(t,e){return Ni(t,"POST","/v1/accounts:signUp",Tn(t,e))}/**
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
 */class qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Wt._fromIdTokenResponse(e,s,i),o=zc(s);return new qn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=zc(s);return new qn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function zc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class br extends Sn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,br.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new br(e,n,s,i)}}function Ud(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?br._fromErrorAndOperation(t,r,e,s):r})}async function Tv(t,e,n=!1){const s=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qn._forOperation(t,"link",s)}/**
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
 */async function Rv(t,e,n=!1){const{auth:s}=t;if(Tt(s.app))return Promise.reject(jt(s));const i="reauthenticate";try{const r=await di(t,Ud(s,i,e,t),n);H(r.idToken,s,"internal-error");const o=sl(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),qn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_t(s,"user-mismatch"),r}}/**
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
 */async function Wd(t,e,n=!1){if(Tt(t.app))return Promise.reject(jt(t));const s="signIn",i=await Ud(t,s,e),r=await qn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Pv(t,e){return Wd(Yn(t),e)}/**
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
 */async function Vd(t){const e=Yn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kv(t,e,n){if(Tt(t.app))return Promise.reject(jt(t));const s=Yn(t),o=await ua(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Vd(t),l}),a=await qn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Av(t,e,n){return Tt(t.app)?Promise.reject(jt(t)):Pv(Me(t),As.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Vd(t),s})}/**
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
 */function Nv(t,e){return Me(t).setPersistence(e)}function Ov(t,e,n,s){return Me(t).onIdTokenChanged(e,n,s)}function xv(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function Dv(t,e,n,s){return Me(t).onAuthStateChanged(e,n,s)}function $d(t){return Me(t).signOut()}const Ir="__sak";/**
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
 */class Bd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ir,"1"),this.storage.removeItem(Ir),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Mv(){const t=$e();return il(t)||eo(t)}const Lv=1e3,Fv=10;class Hd extends Bd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mv()&&ev(),this.fallbackToPolling=xd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Zy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Fv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Lv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hd.type="LOCAL";const jd=Hd;/**
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
 */class qd extends Bd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qd.type="SESSION";const Gd=qd;/**
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
 */function Uv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class no{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new no(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Uv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}no.receivers=[];/**
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
 */function al(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Wv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=al("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pt(){return window}function Vv(t){Pt().location.href=t}/**
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
 */function Kd(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function $v(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hv(){return Kd()?self:null}/**
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
 */const zd="firebaseLocalStorageDb",jv=1,Sr="firebaseLocalStorage",Yd="fbase_key";class xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function so(t,e){return t.transaction([Sr],e?"readwrite":"readonly").objectStore(Sr)}function qv(){const t=indexedDB.deleteDatabase(zd);return new xi(t).toPromise()}function ha(){const t=indexedDB.open(zd,jv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Sr,{keyPath:Yd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Sr)?e(s):(s.close(),await qv(),e(await ha()))})})}async function Yc(t,e,n){const s=so(t,!0).put({[Yd]:e,value:n});return new xi(s).toPromise()}async function Gv(t,e){const n=so(t,!1).get(e),s=await new xi(n).toPromise();return s===void 0?null:s.value}function Qc(t,e){const n=so(t,!0).delete(e);return new xi(n).toPromise()}const Kv=800,zv=3;class Qd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ha(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>zv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=no._getInstance(Hv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $v(),!this.activeServiceWorker)return;this.sender=new Wv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ha();return await Yc(e,Ir,"1"),await Qc(e,Ir),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Gv(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=so(i,!1).getAll();return new xi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qd.type="LOCAL";const Yv=Qd;new Ai(3e4,6e4);/**
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
 */function Qv(t,e){return e?Vt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ll extends rl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jv(t){return Wd(t.auth,new ll(t),t.bypassAuthState)}function Xv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Rv(n,new ll(t),t.bypassAuthState)}async function Zv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Tv(n,new ll(t),t.bypassAuthState)}/**
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
 */class Jd{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jv;case"linkViaPopup":case"linkViaRedirect":return Zv;case"reauthViaPopup":case"reauthViaRedirect":return Xv;default:_t(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ew=new Ai(2e3,1e4);class is extends Jd{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=al();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ew.get())};e()}}is.currentPopupAction=null;/**
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
 */const tw="pendingRedirect",or=new Map;class nw extends Jd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=or.get(this.auth._key());if(!e){try{const s=await sw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}or.set(this.auth._key(),e)}return this.bypassAuthState||or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sw(t,e){const n=ow(e),s=rw(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function iw(t,e){or.set(t._key(),e)}function rw(t){return Vt(t._redirectPersistence)}function ow(t){return rr(tw,t.config.apiKey,t.name)}async function aw(t,e,n=!1){if(Tt(t.app))return Promise.reject(jt(t));const s=Yn(t),i=Qv(s,e),o=await new nw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const lw=10*60*1e3;class cw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Xd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jc(e))}saveEventToCache(e){this.cachedEventUids.add(Jc(e)),this.lastProcessedEventTime=Date.now()}}function Jc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xd(t);default:return!1}}/**
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
 */async function hw(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
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
 */const dw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fw=/^https?/;async function pw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hw(t);for(const n of e)try{if(_w(n))return}catch{}_t(t,"unauthorized-domain")}function _w(t){const e=la(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!fw.test(n))return!1;if(dw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const mw=new Ai(3e4,6e4);function Xc(){const t=Pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gw(t){return new Promise((e,n)=>{var s,i,r;function o(){Xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xc(),n(Rt(t,"network-request-failed"))},timeout:mw.get()})}if(!((i=(s=Pt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Pt().gapi)===null||r===void 0)&&r.load)o();else{const a=cv("iframefcb");return Pt()[a]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},Md(`${lv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ar=null,e})}let ar=null;function yw(t){return ar=ar||gw(t),ar}/**
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
 */const vw=new Ai(5e3,15e3),ww="__/auth/iframe",Ew="emulator/auth/iframe",Cw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Iw(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nl(e,Ew):`https://${t.config.authDomain}/${ww}`,s={apiKey:e.apiKey,appName:t.name,v:ks},i=bw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ps(s).slice(1)}`}async function Sw(t){const e=await yw(t),n=Pt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:Iw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=Pt().setTimeout(()=>{r(o)},vw.get());function l(){Pt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Tw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rw=500,Pw=600,kw="_blank",Aw="http://localhost";class Zc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nw(t,e,n,s=Rw,i=Pw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Tw),{width:s.toString(),height:i.toString(),top:r,left:o}),c=$e().toLowerCase();n&&(a=Pd(c)?kw:n),Rd(c)&&(e=e||Aw,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,y])=>`${d}${_}=${y},`,"");if(Xy(c)&&a!=="_self")return Ow(e||"",a),new Zc(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Zc(h)}function Ow(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const xw="__/auth/handler",Dw="emulator/auth/handler",Mw=encodeURIComponent("fac");async function eu(t,e,n,s,i,r){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ks,eventId:i};if(e instanceof Fd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",na(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Oi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Mw}=${encodeURIComponent(l)}`:"";return`${Lw(t)}?${Ps(a).slice(1)}${c}`}function Lw({config:t}){return t.emulator?nl(t,Dw):`https://${t.authDomain}/${xw}`}/**
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
 */const xo="webStorageSupport";class Fw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gd,this._completeRedirectFn=aw,this._overrideRedirectResult=iw}async _openPopup(e,n,s,i){var r;Kt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await eu(e,n,s,la(),i);return Nw(e,o,al())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await eu(e,n,s,la(),i);return Vv(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Kt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Sw(e),s=new cw(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xo,{type:xo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[xo];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xd()||il()||eo()}}const Uw=Fw;var tu="@firebase/auth",nu="1.7.4";/**
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
 */class Ww{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $w(t){ys(new Bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dd(t)},c=new rv(s,i,r,l);return pv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ys(new Bn("auth-internal",e=>{const n=Yn(e.getProvider("auth").getImmediate());return(s=>new Ww(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(tu,nu,Vw(t)),mn(tu,nu,"esm2017")}/**
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
 */const Bw=5*60,Hw=cd("authIdTokenMaxAge")||Bw;let su=null;const jw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Hw)return;const i=n==null?void 0:n.token;su!==i&&(su=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zd(t=_d()){const e=Za(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fv(t,{popupRedirectResolver:Uw,persistence:[Yv,jd,Gd]}),s=cd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=jw(r.toString());xv(n,o,()=>o(n.currentUser)),Ov(n,a=>o(a))}}const i=ad("auth");return i&&_v(n,`http://${i}`),n}function qw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ov({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Rt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",qw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$w("Browser");const vt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Gw={name:"App",setup(){return{store:Fe}},methods:{logout(){Fe.logout(),this.$router.push("/"),$d(Zd(this.app)).then(()=>{Fe.logout()}).catch(t=>{console.error(t)})}}},Kw={id:"app"},zw={key:0},Yw={key:1},Qw={key:2},Jw={key:3},Xw={key:4},Zw={key:5};function eE(t,e,n,s,i,r){const o=ut("router-link"),a=ut("router-view");return L(),F("div",Kw,[m("nav",null,[m("ul",null,[m("li",null,[se(o,{to:"/"},{default:Ze(()=>[Ue("Home")]),_:1})]),s.store.isAuthenticated?(L(),F("li",zw,[se(o,{to:"/dashboard"},{default:Ze(()=>[Ue("Dashboard")]),_:1})])):ge("",!0),s.store.isAuthenticated?(L(),F("li",Yw,[se(o,{to:"/bestiary"},{default:Ze(()=>[Ue("Bestiary")]),_:1})])):ge("",!0),s.store.isAuthenticated?(L(),F("li",Qw,[se(o,{to:"/case-files"},{default:Ze(()=>[Ue("Case Files")]),_:1})])):ge("",!0),s.store.isAuthenticated?(L(),F("li",Jw,[se(o,{to:"/profile"},{default:Ze(()=>[Ue("Profile")]),_:1})])):ge("",!0),s.store.isAuthenticated?ge("",!0):(L(),F("li",Xw,[se(o,{to:"/login"},{default:Ze(()=>[Ue("Login")]),_:1})])),s.store.isAuthenticated?(L(),F("li",Zw,[m("a",{href:"#",onClick:e[0]||(e[0]=(...l)=>r.logout&&r.logout(...l))},"Logout")])):ge("",!0)])]),m("main",null,[se(a)])])}const tE=vt(Gw,[["render",eE],["__scopeId","data-v-b7c4979c"]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ss=typeof document<"u";function nE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function Do(t,e){const n={};for(const s in e){const i=e[s];n[s]=mt(i)?i.map(t):t(i)}return n}const Xs=()=>{},mt=Array.isArray,ef=/#/g,sE=/&/g,iE=/\//g,rE=/=/g,oE=/\?/g,tf=/\+/g,aE=/%5B/g,lE=/%5D/g,nf=/%5E/g,cE=/%60/g,sf=/%7B/g,uE=/%7C/g,rf=/%7D/g,hE=/%20/g;function cl(t){return encodeURI(""+t).replace(uE,"|").replace(aE,"[").replace(lE,"]")}function dE(t){return cl(t).replace(sf,"{").replace(rf,"}").replace(nf,"^")}function da(t){return cl(t).replace(tf,"%2B").replace(hE,"+").replace(ef,"%23").replace(sE,"%26").replace(cE,"`").replace(sf,"{").replace(rf,"}").replace(nf,"^")}function fE(t){return da(t).replace(rE,"%3D")}function pE(t){return cl(t).replace(ef,"%23").replace(oE,"%3F")}function _E(t){return t==null?"":pE(t).replace(iE,"%2F")}function pi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const mE=/\/$/,gE=t=>t.replace(mE,"");function Mo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=EE(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:pi(o)}}function yE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function iu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vE(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&vs(e.matched[s],n.matched[i])&&of(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function of(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wE(t[n],e[n]))return!1;return!0}function wE(t,e){return mt(t)?ru(t,e):mt(e)?ru(e,t):t===e}function ru(t,e){return mt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function EE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}var _i;(function(t){t.pop="pop",t.push="push"})(_i||(_i={}));var Zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zs||(Zs={}));function CE(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gE(t)}const bE=/^[^#]+#/;function IE(t,e){return t.replace(bE,"#")+e}function SE(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const io=()=>({left:window.scrollX,top:window.scrollY});function TE(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=SE(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ou(t,e){return(history.state?history.state.position-e:-1)+t}const fa=new Map;function RE(t,e){fa.set(t,e)}function PE(t){const e=fa.get(t);return fa.delete(t),e}let kE=()=>location.protocol+"//"+location.host;function af(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),iu(l,"")}return iu(n,t)+s+i}function AE(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=af(t,location),y=n.value,T=e.value;let D=0;if(d){if(n.value=_,e.value=d,o&&o===y){o=null;return}D=T?d.position-T.position:0}else s(_);i.forEach(O=>{O(n.value,y,{delta:D,type:_i.pop,direction:D?D>0?Zs.forward:Zs.back:Zs.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(oe({},d.state,{scroll:io()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function au(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?io():null}}function NE(t){const{history:e,location:n}=window,s={value:af(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:kE()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=oe({},e.state,au(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=oe({},i.value,e.state,{forward:l,scroll:io()});r(u.current,u,!0);const h=oe({},au(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function OE(t){t=CE(t);const e=NE(t),n=AE(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=oe({location:"",base:t,go:s,createHref:IE.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function xE(t){return typeof t=="string"||t&&typeof t=="object"}function lf(t){return typeof t=="string"||typeof t=="symbol"}const tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cf=Symbol("");var lu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lu||(lu={}));function ws(t,e){return oe(new Error,{type:t,[cf]:!0},e)}function Lt(t,e){return t instanceof Error&&cf in t&&(e==null||!!(t.type&e))}const cu="[^/]+?",DE={sensitive:!1,strict:!1,start:!0,end:!0},ME=/[.+*?^${}()[\]/\\]/g;function LE(t,e){const n=oe({},DE,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(ME,"\\$&"),_+=40;else if(d.type===1){const{value:y,repeatable:T,optional:D,regexp:O}=d;r.push({name:y,repeatable:T,optional:D});const x=O||cu;if(x!==cu){_+=10;try{new RegExp(`(${x})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+J.message)}}let V=T?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(V=D&&c.length<2?`(?:/${V})`:"/"+V),D&&(V+="?"),i+=V,_+=20,D&&(_+=-8),T&&(_+=-20),x===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",y=r[d-1];h[y.name]=_&&y.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:y,repeatable:T,optional:D}=_,O=y in c?c[y]:"";if(mt(O)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=mt(O)?O.join("/"):O;if(!x)if(D)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=x}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function FE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function UE(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=FE(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(uu(s))return 1;if(uu(i))return-1}return i.length-s.length}function uu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const WE={type:0,value:""},VE=/[a-zA-Z0-9_]/;function $E(t){if(!t)return[[]];if(t==="/")return[[WE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:VE.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function BE(t,e,n){const s=LE($E(t.path),n),i=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function HE(t,e){const n=[],s=new Map;e=fu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,y=jE(u);y.aliasOf=d&&d.record;const T=fu(e,u),D=[y];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const J of V)D.push(oe({},y,{components:d?d.record.components:y.components,path:J,aliasOf:d?d.record:y}))}let O,x;for(const V of D){const{path:J}=V;if(h&&J[0]!=="/"){const ye=h.record.path,j=ye[ye.length-1]==="/"?"":"/";V.path=h.record.path+(J&&j+J)}if(O=BE(V,h,T),d?d.alias.push(O):(x=x||O,x!==O&&x.alias.push(O),_&&u.name&&!du(O)&&o(u.name)),y.children){const ye=y.children;for(let j=0;j<ye.length;j++)r(ye[j],O,d&&d.children[j])}d=d||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&l(O)}return x?()=>{o(x)}:Xs}function o(u){if(lf(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&UE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!uf(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!du(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},y,T;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ws(1,{location:u});T=d.record.name,_=oe(hu(h.params,d.keys.filter(x=>!x.optional).concat(d.parent?d.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),u.params&&hu(u.params,d.keys.map(x=>x.name))),y=d.stringify(_)}else if(u.path!=null)y=u.path,d=n.find(x=>x.re.test(y)),d&&(_=d.parse(y),T=d.record.name);else{if(d=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw ws(1,{location:u,currentLocation:h});T=d.record.name,_=oe({},h.params,u.params),y=d.stringify(_)}const D=[];let O=d;for(;O;)D.unshift(O.record),O=O.parent;return{name:T,path:y,params:_,matched:D,meta:GE(D)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function hu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function jE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:qE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function qE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function du(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function GE(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function fu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function uf(t,e){return e.children.some(n=>n===t||uf(t,n))}function KE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(tf," "),o=r.indexOf("="),a=pi(o<0?r:r.slice(0,o)),l=o<0?null:pi(r.slice(o+1));if(a in e){let c=e[a];mt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function pu(t){let e="";for(let n in t){const s=t[n];if(n=fE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(mt(s)?s.map(r=>r&&da(r)):[s&&da(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function zE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=mt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const YE=Symbol(""),_u=Symbol(""),ul=Symbol(""),hf=Symbol(""),pa=Symbol("");function Us(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function on(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ws(4,{from:n,to:e})):d instanceof Error?l(d):xE(d)?l(ws(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Lo(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(QE(l)){const u=(l.__vccOpts||l)[e];u&&r.push(on(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=nE(u)?u.default:u;o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&on(_,n,s,o,a,i)()}))}}return r}function QE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mu(t){const e=Ht(ul),n=Ht(hf),s=lt(()=>{const l=ls(t.to);return e.resolve(l)}),i=lt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(vs.bind(null,u));if(d>-1)return d;const _=gu(l[c-2]);return c>1&&gu(u)===_&&h[h.length-1].path!==_?h.findIndex(vs.bind(null,l[c-2])):d}),r=lt(()=>i.value>-1&&eC(n.params,s.value.params)),o=lt(()=>i.value>-1&&i.value===n.matched.length-1&&of(n.params,s.value.params));function a(l={}){return ZE(l)?e[ls(t.replace)?"replace":"push"](ls(t.to)).catch(Xs):Promise.resolve()}return{route:s,href:lt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const JE=Mh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mu,setup(t,{slots:e}){const n=Ti(mu(t)),{options:s}=Ht(ul),i=lt(()=>({[yu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[yu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:nd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),XE=JE;function ZE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function eC(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!mt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function gu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yu=(t,e,n)=>t??e??n,tC=Mh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ht(pa),i=lt(()=>t.route||s.value),r=Ht(_u,0),o=lt(()=>{let c=ls(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=lt(()=>i.value.matched[o.value]);tr(_u,lt(()=>o.value+1)),tr(YE,a),tr(pa,i);const l=m_();return Zi(()=>[l.value,a.value,t.name],([c,u,h],[d,_,y])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!vs(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return vu(n.default,{Component:d,route:c});const _=h.props[u],y=_?_===!0?c.params:typeof _=="function"?_(c):_:null,D=nd(d,oe({},y,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return vu(n.default,{Component:D,route:c})||D}}});function vu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nC=tC;function sC(t){const e=HE(t.routes,t),n=t.parseQuery||KE,s=t.stringifyQuery||pu,i=t.history,r=Us(),o=Us(),a=Us(),l=g_(tn);let c=tn;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Do.bind(null,w=>""+w),h=Do.bind(null,_E),d=Do.bind(null,pi);function _(w,A){let P,M;return lf(w)?(P=e.getRecordMatcher(w),M=A):M=w,e.addRoute(M,P)}function y(w){const A=e.getRecordMatcher(w);A&&e.removeRoute(A)}function T(){return e.getRoutes().map(w=>w.record)}function D(w){return!!e.getRecordMatcher(w)}function O(w,A){if(A=oe({},A||l.value),typeof w=="string"){const p=Mo(n,w,A.path),g=e.resolve({path:p.path},A),E=i.createHref(p.fullPath);return oe(p,g,{params:d(g.params),hash:pi(p.hash),redirectedFrom:void 0,href:E})}let P;if(w.path!=null)P=oe({},w,{path:Mo(n,w.path,A.path).path});else{const p=oe({},w.params);for(const g in p)p[g]==null&&delete p[g];P=oe({},w,{params:h(p)}),A.params=h(A.params)}const M=e.resolve(P,A),re=w.hash||"";M.params=u(d(M.params));const ve=yE(s,oe({},w,{hash:dE(re),path:M.path})),f=i.createHref(ve);return oe({fullPath:ve,hash:re,query:s===pu?zE(w.query):w.query||{}},M,{redirectedFrom:void 0,href:f})}function x(w){return typeof w=="string"?Mo(n,w,l.value.path):oe({},w)}function V(w,A){if(c!==w)return ws(8,{from:A,to:w})}function J(w){return Se(w)}function ye(w){return J(oe(x(w),{replace:!0}))}function j(w){const A=w.matched[w.matched.length-1];if(A&&A.redirect){const{redirect:P}=A;let M=typeof P=="function"?P(w):P;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=x(M):{path:M},M.params={}),oe({query:w.query,hash:w.hash,params:M.path!=null?{}:w.params},M)}}function Se(w,A){const P=c=O(w),M=l.value,re=w.state,ve=w.force,f=w.replace===!0,p=j(P);if(p)return Se(oe(x(p),{state:typeof p=="object"?oe({},re,p.state):re,force:ve,replace:f}),A||P);const g=P;g.redirectedFrom=A;let E;return!ve&&vE(s,M,P)&&(E=ws(16,{to:g,from:M}),Et(M,M,!0,!1)),(E?Promise.resolve(E):tt(g,M)).catch(v=>Lt(v)?Lt(v,2)?v:Xt(v):ee(v,g,M)).then(v=>{if(v){if(Lt(v,2))return Se(oe({replace:f},x(v.to),{state:typeof v.to=="object"?oe({},re,v.to.state):re,force:ve}),A||g)}else v=kn(g,M,!0,f,re);return Jt(g,M,v),v})}function qe(w,A){const P=V(w,A);return P?Promise.reject(P):Promise.resolve()}function rt(w){const A=es.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(w):w()}function tt(w,A){let P;const[M,re,ve]=iC(w,A);P=Lo(M.reverse(),"beforeRouteLeave",w,A);for(const p of M)p.leaveGuards.forEach(g=>{P.push(on(g,w,A))});const f=qe.bind(null,w,A);return P.push(f),Le(P).then(()=>{P=[];for(const p of r.list())P.push(on(p,w,A));return P.push(f),Le(P)}).then(()=>{P=Lo(re,"beforeRouteUpdate",w,A);for(const p of re)p.updateGuards.forEach(g=>{P.push(on(g,w,A))});return P.push(f),Le(P)}).then(()=>{P=[];for(const p of ve)if(p.beforeEnter)if(mt(p.beforeEnter))for(const g of p.beforeEnter)P.push(on(g,w,A));else P.push(on(p.beforeEnter,w,A));return P.push(f),Le(P)}).then(()=>(w.matched.forEach(p=>p.enterCallbacks={}),P=Lo(ve,"beforeRouteEnter",w,A,rt),P.push(f),Le(P))).then(()=>{P=[];for(const p of o.list())P.push(on(p,w,A));return P.push(f),Le(P)}).catch(p=>Lt(p,8)?p:Promise.reject(p))}function Jt(w,A,P){a.list().forEach(M=>rt(()=>M(w,A,P)))}function kn(w,A,P,M,re){const ve=V(w,A);if(ve)return ve;const f=A===tn,p=ss?history.state:{};P&&(M||f?i.replace(w.fullPath,oe({scroll:f&&p&&p.scroll},re)):i.push(w.fullPath,re)),l.value=w,Et(w,A,P,f),Xt()}let wt;function Ms(){wt||(wt=i.listen((w,A,P)=>{if(!$i.listening)return;const M=O(w),re=j(M);if(re){Se(oe(re,{replace:!0}),M).catch(Xs);return}c=M;const ve=l.value;ss&&RE(ou(ve.fullPath,P.delta),io()),tt(M,ve).catch(f=>Lt(f,12)?f:Lt(f,2)?(Se(f.to,M).then(p=>{Lt(p,20)&&!P.delta&&P.type===_i.pop&&i.go(-1,!1)}).catch(Xs),Promise.reject()):(P.delta&&i.go(-P.delta,!1),ee(f,M,ve))).then(f=>{f=f||kn(M,ve,!1),f&&(P.delta&&!Lt(f,8)?i.go(-P.delta,!1):P.type===_i.pop&&Lt(f,20)&&i.go(-1,!1)),Jt(M,ve,f)}).catch(Xs)}))}let Xn=Us(),Te=Us(),le;function ee(w,A,P){Xt(w);const M=Te.list();return M.length?M.forEach(re=>re(w,A,P)):console.error(w),Promise.reject(w)}function Mt(){return le&&l.value!==tn?Promise.resolve():new Promise((w,A)=>{Xn.add([w,A])})}function Xt(w){return le||(le=!w,Ms(),Xn.list().forEach(([A,P])=>w?P(w):A()),Xn.reset()),w}function Et(w,A,P,M){const{scrollBehavior:re}=t;if(!ss||!re)return Promise.resolve();const ve=!P&&PE(ou(w.fullPath,0))||(M||!P)&&history.state&&history.state.scroll||null;return Ha().then(()=>re(w,A,ve)).then(f=>f&&TE(f)).catch(f=>ee(f,w,A))}const Ge=w=>i.go(w);let Zn;const es=new Set,$i={currentRoute:l,listening:!0,addRoute:_,removeRoute:y,hasRoute:D,getRoutes:T,resolve:O,options:t,push:J,replace:ye,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Te.add,isReady:Mt,install(w){const A=this;w.component("RouterLink",XE),w.component("RouterView",nC),w.config.globalProperties.$router=A,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ls(l)}),ss&&!Zn&&l.value===tn&&(Zn=!0,J(i.location).catch(re=>{}));const P={};for(const re in tn)Object.defineProperty(P,re,{get:()=>l.value[re],enumerable:!0});w.provide(ul,A),w.provide(hf,wh(P)),w.provide(pa,l);const M=w.unmount;es.add(w),w.unmount=function(){es.delete(w),es.size<1&&(c=tn,wt&&wt(),wt=null,l.value=tn,Zn=!1,le=!1),M()}}};function Le(w){return w.reduce((A,P)=>A.then(()=>rt(P)),Promise.resolve())}return $i}function iC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>vs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>vs(c,l))||i.push(l))}return[n,s,i]}const rC={name:"Home"},oC=t=>(At("data-v-217f1b2c"),t=t(),Nt(),t),aC={class:"home"},lC=oC(()=>m("h1",null,"Welcome to The Midnight Watch",-1));function cC(t,e,n,s,i,r){const o=ut("router-link");return L(),F("div",aC,[lC,se(o,{to:"/Login"},{default:Ze(()=>[Ue("Login")]),_:1})])}const uC=vt(rC,[["render",cC],["__scopeId","data-v-217f1b2c"]]);var hC="firebase",dC="10.12.2";/**
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
 */mn(hC,dC,"app");var wu={};const Eu="@firebase/database",Cu="1.0.5";/**
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
 */let df="";function fC(t){df=t}/**
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
 */class pC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ui(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class _C{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ot(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ff=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pC(e)}}catch{}return new _C},Fn=ff("localStorage"),mC=ff("sessionStorage");/**
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
 */const ps=new Ja("@firebase/database"),gC=function(){let t=1;return function(){return t++}}(),pf=function(t){const e=Tg(t),n=new Cg;n.update(e);const s=n.digest();return za.encodeByteArray(s)},Di=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Di.apply(null,s):typeof s=="object"?e+=be(s):e+=s,e+=" "}return e};let ei=null,bu=!0;const yC=function(t,e){b(!e,"Can't turn on custom loggers persistently."),ps.logLevel=ue.VERBOSE,ei=ps.log.bind(ps)},xe=function(...t){if(bu===!0&&(bu=!1,ei===null&&mC.get("logging_enabled")===!0&&yC()),ei){const e=Di.apply(null,t);ei(e)}},Mi=function(t){return function(...e){xe(t,...e)}},_a=function(...t){const e="FIREBASE INTERNAL ERROR: "+Di(...t);ps.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Di(...t)}`;throw ps.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+Di(...t);ps.warn(e)},vC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Es="[MIN_NAME]",Gn="[MAX_NAME]",Qn=function(t,e){if(t===e)return 0;if(t===Es||e===Gn)return-1;if(e===Es||t===Gn)return 1;{const n=Iu(t),s=Iu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},EC=function(t,e){return t===e?0:t<e?-1:1},Ws=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},dl=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=be(e[s]),n+=":",n+=dl(t[e[s]]);return n+="}",n},_f=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function De(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mf=function(t){b(!hl(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},CC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function IC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const SC=new RegExp("^-?(0*)\\d{1,10}$"),TC=-2147483648,RC=2147483647,Iu=function(t){if(SC.test(t)){const e=Number(t);if(e>=TC&&e<=RC)return e}return null},Ns=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},PC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ti=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class kC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class AC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class lr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}lr.OWNER="owner";/**
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
 */const fl="5",gf="v",yf="s",vf="r",wf="f",Ef=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cf="ls",bf="p",ma="ac",If="websocket",Sf="long_polling";/**
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
 */class Tf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function NC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Rf(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===If)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Sf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NC(t)&&(n.ns=t.namespace);const i=[];return De(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class OC{constructor(){this.counters_={}}incrementCounter(e,n=1){Ot(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return rg(this.counters_)}}/**
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
 */const Fo={},Uo={};function pl(t){const e=t.toString();return Fo[e]||(Fo[e]=new OC),Fo[e]}function xC(t,e){const n=t.toString();return Uo[n]||(Uo[n]=e()),Uo[n]}/**
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
 */class DC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ns(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Su="start",MC="close",LC="pLPCommand",FC="pRTLPCB",Pf="id",kf="pw",Af="ser",UC="cb",WC="seg",VC="ts",$C="d",BC="dframe",Nf=1870,Of=30,HC=Nf-Of,jC=25e3,qC=3e4;class rs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mi(e),this.stats_=pl(n),this.urlFn=l=>(this.appCheckToken&&(l[ma]=this.appCheckToken),Rf(n,Sf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new DC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qC)),wC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _l((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Su)this.id=a,this.password=l;else if(o===MC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Su]="t",s[Af]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[UC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[gf]=fl,this.transportSessionId&&(s[yf]=this.transportSessionId),this.lastSessionId&&(s[Cf]=this.lastSessionId),this.applicationId&&(s[bf]=this.applicationId),this.appCheckToken&&(s[ma]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ef.test(location.hostname)&&(s[vf]=wf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){rs.forceAllow_=!0}static forceDisallow(){rs.forceDisallow_=!0}static isAvailable(){return rs.forceAllow_?!0:!rs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CC()&&!bC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=rd(n),i=_f(s,HC);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[BC]="t",s[Pf]=e,s[kf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _l{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gC(),window[LC+this.uniqueCallbackIdentifier]=e,window[FC+this.uniqueCallbackIdentifier]=n,this.myIFrame=_l.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){xe("frame writing exception"),a.stack&&xe(a.stack),xe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Pf]=this.myID,e[kf]=this.myPW,e[Af]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Of+s.length<=Nf;){const o=this.pendingSegs.shift();s=s+"&"+WC+i+"="+o.seg+"&"+VC+i+"="+o.ts+"&"+$C+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(jC)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const GC=16384,KC=45e3;let Tr=null;typeof MozWebSocket<"u"?Tr=MozWebSocket:typeof WebSocket<"u"&&(Tr=WebSocket);class ct{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mi(this.connId),this.stats_=pl(n),this.connURL=ct.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[gf]=fl,typeof location<"u"&&location.hostname&&Ef.test(location.hostname)&&(o[vf]=wf),n&&(o[yf]=n),s&&(o[Cf]=s),i&&(o[ma]=i),r&&(o[bf]=r),Rf(e,If,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fn.set("previous_websocket_failure",!0);try{let s;hd(),this.mySock=new Tr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Tr!==null&&!ct.forceDisallow_}static previouslyFailed(){return Fn.isInMemoryStorage||Fn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ui(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_f(n,GC);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ct.responsesRequiredToBeHealthy=2;ct.healthyTimeout=3e4;/**
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
 */class mi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[rs,ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ct&&ct.isAvailable();let s=n&&!ct.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ct];else{const i=this.transports_=[];for(const r of mi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);mi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}mi.globalTransportInitialized_=!1;/**
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
 */const zC=6e4,YC=5e3,QC=10*1024,JC=100*1024,Wo="t",Tu="d",XC="s",Ru="r",ZC="e",Pu="o",ku="a",Au="n",Nu="p",eb="h";class tb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mi("c:"+this.id+":"),this.transportManager_=new mi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ti(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wo in e){const n=e[Wo];n===ku?this.upgradeIfSecondaryHealthy_():n===Ru?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ws("t",e),s=Ws("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ku,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Au,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ws("t",e),s=Ws("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ws(Wo,e);if(Tu in e){const s=e[Tu];if(n===eb){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Au){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===XC?this.onConnectionShutdown_(s):n===Ru?this.onReset_(s):n===ZC?_a("Server Error: "+s):n===Pu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_a("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fl!==s&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ti(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ti(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class xf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Df{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Rr extends Df{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Rr}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ou=32,xu=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new he("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function ml(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function nb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function gi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function we(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof he)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new he(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=K(t),s=K(e);if(n===null)return e;if(n===s)return He(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function sb(t,e){const n=gi(t,0),s=gi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Qn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function gl(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function st(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ib{constructor(e,n){this.errorPrefix_=n,this.parts_=gi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Zr(this.parts_[s]);Lf(this)}}function rb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zr(e),Lf(t)}function ob(t){const e=t.parts_.pop();t.byteLength_-=Zr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Lf(t){if(t.byteLength_>xu)throw new Error(t.errorPrefix_+"has a key path longer than "+xu+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ou)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ou+") or object contains a cycle "+xn(t))}function xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class yl extends Df{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new yl}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Vs=1e3,ab=60*5*1e3,Du=30*1e3,lb=1.3,cb=3e4,ub="server_kill",Mu=3;class qt extends xf{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qt.nextPersistentConnectionId_++,this.log_=Mi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vs,this.maxReconnectDelay_=ab,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!hd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(be(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Pi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;qt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ot(e,"w")){const s=gs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Eg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Du)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):_a("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cb&&(this.reconnectDelay_=Vs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new tb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{je(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(ub)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&je(h),l())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],na(this.interruptReasons_)&&(this.reconnectDelay_=Vs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>dl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new he(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mu&&(this.reconnectDelay_=Du,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+df.replace(/\./g,"-")]=1,Qa()?e["framework.cordova"]=1:ud()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rr.getInstance().currentlyOnline();return na(this.interruptReasons_)&&e}}qt.nextPersistentConnectionId_=0;qt.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class ro{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new z(Es,e),i=new z(Es,n);return this.compare(s,i)!==0}minPost(){return z.MIN}}/**
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
 */let Yi;class Ff extends ro{static get __EMPTY_NODE(){return Yi}static set __EMPTY_NODE(e){Yi=e}compare(e,n){return Qn(e.name,n.name)}isDefinedOn(e){throw Rs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Gn,Yi)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Yi)}toString(){return".key"}}const _s=new Ff;/**
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
 */class Qi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ke.RED,this.left=i??Ye.EMPTY_NODE,this.right=r??Ye.EMPTY_NODE}copy(e,n,s,i,r){return new ke(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class hb{copy(e,n,s,i,r){return this}insert(e,n,s){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,n=Ye.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ye(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qi(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new hb;/**
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
 */function db(t,e){return Qn(t.name,e.name)}function vl(t,e){return Qn(t,e)}/**
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
 */let ga;function fb(t){ga=t}const Uf=function(t){return typeof t=="number"?"number:"+mf(t):"string:"+t},Wf=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ot(e,".sv"),"Priority must be a string or number.")}else b(t===ga||t.isEmpty(),"priority of unexpected type.");b(t===ga||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Lu;class Pe{constructor(e,n=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wf(this.priorityNode_)}static set __childrenNodeConstructor(e){Lu=e}static get __childrenNodeConstructor(){return Lu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:K(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=K(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mf(this.value_):e+=this.value_,this.lazyHash_=pf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Pe.VALUE_TYPE_ORDER.indexOf(n),r=Pe.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Vf,$f;function pb(t){Vf=t}function _b(t){$f=t}class mb extends ro{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Qn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Gn,new Pe("[PRIORITY-POST]",$f))}makePost(e,n){const s=Vf(e);return new z(n,new Pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ee=new mb;/**
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
 */const gb=Math.log(2);class yb{constructor(e){const n=r=>parseInt(Math.log(r)/gb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ke(d,h.node,ke.BLACK,null,null);{const _=parseInt(u/2,10)+l,y=i(l,_),T=i(_+1,c);return h=t[_],d=n?n(h):h,new ke(d,h.node,ke.BLACK,y,T)}},r=function(l){let c=null,u=null,h=t.length;const d=function(y,T){const D=h-y,O=h;h-=y;const x=i(D+1,O),V=t[D],J=n?n(V):V;_(new ke(J,V.node,T,null,x))},_=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const T=l.nextBitIsOne(),D=Math.pow(2,l.count-(y+1));T?d(D,ke.BLACK):(d(D,ke.BLACK),d(D,ke.RED))}return u},o=new yb(t.length),a=r(o);return new Ye(s||e,a)};/**
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
 */let Vo;const ns={};class $t{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(ns&&Ee,"ChildrenNode.ts has not been loaded"),Vo=Vo||new $t({".priority":ns},{".priority":Ee}),Vo}get(e){const n=gs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ye?n:null}hasIndex(e){return Ot(this.indexSet_,e.toString())}addIndex(e,n){b(e!==_s,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Pr(s,e.getCompare()):a=ns;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new $t(u,c)}addToIndexes(e,n){const s=yr(this.indexes_,(i,r)=>{const o=gs(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===ns)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Pr(a,o.getCompare())}else return ns;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new $t(s,this.indexSet_)}removeFromIndexes(e,n){const s=yr(this.indexes_,i=>{if(i===ns)return i;{const r=n.get(e.name);return r?i.remove(new z(e.name,r)):i}});return new $t(s,this.indexSet_)}}/**
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
 */let $s;class ${constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Wf(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $s||($s=new $(new Ye(vl),null,$t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$s}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$s:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?$s:this.priorityNode_;return new $(i,o,r)}}updateChild(e,n){const s=K(e);if(s===null)return n;{b(K(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(fe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(e),s++,r&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uf(this.getPriority().val())+":"),this.forEachChild(Ee,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":pf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Li?-1:0}withIndex(e){if(e===_s||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_s||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ee),i=n.getIterator(Ee);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_s?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vb extends ${constructor(){super(new Ye(vl),$.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Li=new vb;Object.defineProperties(z,{MIN:{value:new z(Es,$.EMPTY_NODE)},MAX:{value:new z(Gn,Li)}});Ff.__EMPTY_NODE=$.EMPTY_NODE;Pe.__childrenNodeConstructor=$;fb(Li);_b(Li);/**
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
 */const wb=!0;function Ce(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pe(n,Ce(e))}if(!(t instanceof Array)&&wb){const n=[];let s=!1;if(De(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ce(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return $.EMPTY_NODE;const r=Pr(n,db,o=>o.name,vl);if(s){const o=Pr(n,Ee.getCompare());return new $(r,Ce(e),new $t({".priority":o},{".priority":Ee}))}else return new $(r,Ce(e),$t.Default)}else{let n=$.EMPTY_NODE;return De(t,(s,i)=>{if(Ot(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}pb(Ce);/**
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
 */class Eb extends ro{constructor(e){super(),this.indexPath_=e,b(!Y(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Qn(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,s);return new z(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Li);return new z(Gn,e)}toString(){return gi(this.indexPath_,0).join("/")}}/**
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
 */class Cb extends ro{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Qn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const s=Ce(e);return new z(n,s)}toString(){return".value"}}const bb=new Cb;/**
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
 */function Bf(t){return{type:"value",snapshotNode:t}}function Cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function yi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ib(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class wl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(yi(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Cs(n,s)):o.trackChildChange(vi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,r)=>{n.hasChild(i)||s.trackChildChange(yi(i,r))}),n.isLeafNode()||n.forEachChild(Ee,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(vi(i,r,o))}else s.trackChildChange(Cs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class wi{constructor(e){this.indexedFilter_=new wl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wi.getStartPost_(e),this.endPost_=wi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new z(n,s))||(s=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const r=this;return n.forEachChild(Ee,(o,a)=>{r.matches(new z(o,a))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Sb{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new wi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new z(n,s))||(s=$.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new z(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(vi(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(yi(n,h));const T=a.updateImmediateChild(n,$.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Cs(d.name,d.node)),T.updateImmediateChild(d.name,d.node)):T}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(yi(c.name,c.node)),r.trackChildChange(Cs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,$.EMPTY_NODE)):e}}/**
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
 */class El{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Es}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new El;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Tb(t){return t.loadsAllData()?new wl(t.getIndex()):t.hasLimit()?new Sb(t):new wi(t)}function Fu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===bb?n="$value":t.index_===_s?n="$key":(b(t.index_ instanceof Eb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=be(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+be(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=be(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Uu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
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
 */class kr extends xf{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Mi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=kr.getListenId_(e,s),a={};this.listens_[o]=a;const l=Fu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),gs(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=kr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Fu(e._queryParams),s=e._path.toString(),i=new Pi;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ps(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ui(a.responseText)}catch{je("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Rb{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ar(){return{value:null,children:new Map}}function Hf(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=K(e);t.children.has(s)||t.children.set(s,Ar());const i=t.children.get(s);e=fe(e),Hf(i,e,n)}}function ya(t,e,n){t.value!==null?n(e,t.value):Pb(t,(s,i)=>{const r=new he(e.toString()+"/"+s);ya(i,r,n)})}function Pb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class kb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&De(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Wu=10*1e3,Ab=30*1e3,Nb=5*60*1e3;class Ob{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kb(e);const s=Wu+(Ab-Wu)*Math.random();ti(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;De(e,(i,r)=>{r>0&&Ot(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ti(this.reportStats_.bind(this),Math.floor(Math.random()*2*Nb))}}/**
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
 */var dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dt||(dt={}));function Cl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Il(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Nr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=dt.ACK_USER_WRITE,this.source=Cl()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new Nr(Z(),n,this.revert)}}else return b(K(this.path)===e,"operationForChild called for unrelated child."),new Nr(fe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ei{constructor(e,n){this.source=e,this.path=n,this.type=dt.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new Ei(this.source,Z()):new Ei(this.source,fe(this.path))}}/**
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
 */class Kn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=dt.OVERWRITE}operationForChild(e){return Y(this.path)?new Kn(this.source,Z(),this.snap.getImmediateChild(e)):new Kn(this.source,fe(this.path),this.snap)}}/**
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
 */class bs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=dt.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new Kn(this.source,Z(),n.value):new bs(this.source,Z(),n)}else return b(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bs(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class En{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class xb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Db(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ib(o.childName,o.snapshotNode))}),Bs(t,i,"child_removed",e,s,n),Bs(t,i,"child_added",e,s,n),Bs(t,i,"child_moved",r,s,n),Bs(t,i,"child_changed",e,s,n),Bs(t,i,"value",e,s,n),i}function Bs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Lb(t,a,l)),o.forEach(a=>{const l=Mb(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Mb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Lb(t,e,n){if(e.childName==null||n.childName==null)throw Rs("Should only compare child_ events.");const s=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function oo(t,e){return{eventCache:t,serverCache:e}}function ni(t,e,n,s){return oo(new En(e,n,s),t.serverCache)}function jf(t,e,n,s){return oo(t.eventCache,new En(e,n,s))}function Or(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let $o;const Fb=()=>($o||($o=new Ye(EC)),$o);class de{constructor(e,n=Fb()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return De(e,(s,i)=>{n=n.set(new he(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(Y(e))return null;{const s=K(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(fe(e),n);return r!=null?{path:we(new he(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=K(e),s=this.children.get(n);return s!==null?s.subtree(fe(e)):new de(null)}}set(e,n){if(Y(e))return new de(n,this.children);{const s=K(e),r=(this.children.get(s)||new de(null)).set(fe(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=K(e),s=this.children.get(n);if(s){const i=s.remove(fe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(Y(e))return this.value;{const n=K(e),s=this.children.get(n);return s?s.get(fe(e)):null}}setTree(e,n){if(Y(e))return n;{const s=K(e),r=(this.children.get(s)||new de(null)).setTree(fe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(we(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Y(e))return null;{const r=K(e),o=this.children.get(r);return o?o.findOnPath_(fe(e),we(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(Y(e))return this;{this.value&&s(n,this.value);const i=K(e),r=this.children.get(i);return r?r.foreachOnPath_(fe(e),we(n,i),s):new de(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(we(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new de(null))}}function si(t,e,n){if(Y(e))return new pt(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=He(i,e);return r=r.updateChild(o,n),new pt(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new pt(r)}}}function va(t,e,n){let s=t;return De(n,(i,r)=>{s=si(s,we(e,i),r)}),s}function Vu(t,e){if(Y(e))return pt.empty();{const n=t.writeTree_.setTree(e,new de(null));return new pt(n)}}function wa(t,e){return Jn(t,e)!=null}function Jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function $u(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(s,i)=>{e.push(new z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new z(s,i.value))}),e}function gn(t,e){if(Y(e))return t;{const n=Jn(t,e);return n!=null?new pt(new de(n)):new pt(t.writeTree_.subtree(e))}}function Ea(t){return t.writeTree_.isEmpty()}function Is(t,e){return qf(Z(),t.writeTree_,e)}function qf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=qf(we(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(we(t,".priority"),s)),n}}/**
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
 */function ao(t,e){return Yf(e,t)}function Ub(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=si(t.visibleWrites,e,n)),t.lastWriteId=s}function Wb(t,e,n,s){b(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=va(t.visibleWrites,e,n),t.lastWriteId=s}function Vb(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function $b(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Bb(a,s.path)?i=!1:st(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Hb(t),!0;if(s.snap)t.visibleWrites=Vu(t.visibleWrites,s.path);else{const a=s.children;De(a,l=>{t.visibleWrites=Vu(t.visibleWrites,we(s.path,l))})}return!0}else return!1}function Bb(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(we(t.path,n),e))return!0;return!1}function Hb(t){t.visibleWrites=Gf(t.allWrites,jb,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jb(t){return t.visible}function Gf(t,e,n){let s=pt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)st(n,o)?(a=He(n,o),s=si(s,a,r.snap)):st(o,n)&&(a=He(o,n),s=si(s,Z(),r.snap.getChild(a)));else if(r.children){if(st(n,o))a=He(n,o),s=va(s,a,r.children);else if(st(o,n))if(a=He(o,n),Y(a))s=va(s,Z(),r.children);else{const l=gs(r.children,K(a));if(l){const c=l.getChild(fe(a));s=si(s,Z(),c)}}}else throw Rs("WriteRecord should have .snap or .children")}}return s}function Kf(t,e,n,s,i){if(!s&&!i){const r=Jn(t.visibleWrites,e);if(r!=null)return r;{const o=gn(t.visibleWrites,e);if(Ea(o))return n;if(n==null&&!wa(o,Z()))return null;{const a=n||$.EMPTY_NODE;return Is(o,a)}}}else{const r=gn(t.visibleWrites,e);if(!i&&Ea(r))return n;if(!i&&n==null&&!wa(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=Gf(t.allWrites,o,e),l=n||$.EMPTY_NODE;return Is(a,l)}}}function qb(t,e,n){let s=$.EMPTY_NODE;const i=Jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=gn(t.visibleWrites,e);return n.forEachChild(Ee,(o,a)=>{const l=Is(gn(r,new he(o)),a);s=s.updateImmediateChild(o,l)}),$u(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=gn(t.visibleWrites,e);return $u(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Gb(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=we(e,n);if(wa(t.visibleWrites,r))return null;{const o=gn(t.visibleWrites,r);return Ea(o)?i.getChild(n):Is(o,i.getChild(n))}}function Kb(t,e,n,s){const i=we(e,n),r=Jn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=gn(t.visibleWrites,i);return Is(o,s.getNode().getImmediateChild(n))}else return null}function zb(t,e){return Jn(t.visibleWrites,e)}function Yb(t,e,n,s,i,r,o){let a;const l=gn(t.visibleWrites,e),c=Jn(l,Z());if(c!=null)a=c;else if(n!=null)a=Is(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Qb(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function xr(t,e,n,s){return Kf(t.writeTree,t.treePath,e,n,s)}function Sl(t,e){return qb(t.writeTree,t.treePath,e)}function Bu(t,e,n,s){return Gb(t.writeTree,t.treePath,e,n,s)}function Dr(t,e){return zb(t.writeTree,we(t.treePath,e))}function Jb(t,e,n,s,i,r){return Yb(t.writeTree,t.treePath,e,n,s,i,r)}function Tl(t,e,n){return Kb(t.writeTree,t.treePath,e,n)}function zf(t,e){return Yf(we(t.treePath,e),t.writeTree)}function Yf(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Xb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,vi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,yi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Cs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,vi(s,e.snapshotNode,i.oldSnap));else throw Rs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Zb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Qf=new Zb;class Rl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new En(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zn(this.viewCache_),r=Jb(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function eI(t){return{filter:t}}function tI(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nI(t,e,n,s,i){const r=new Xb;let o,a;if(n.type===dt.OVERWRITE){const c=n;c.source.fromUser?o=Ca(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Y(c.path),o=Mr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===dt.MERGE){const c=n;c.source.fromUser?o=iI(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ba(t,e,c.path,c.children,s,i,a,r))}else if(n.type===dt.ACK_USER_WRITE){const c=n;c.revert?o=aI(t,e,c.path,s,i,r):o=rI(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===dt.LISTEN_COMPLETE)o=oI(t,e,n.path,s,r);else throw Rs("Unknown operation type: "+n.type);const l=r.getChanges();return sI(e,o,l),{viewCache:o,changes:l}}function sI(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Or(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Bf(Or(e)))}}function Jf(t,e,n,s,i,r){const o=e.eventCache;if(Dr(s,n)!=null)return e;{let a,l;if(Y(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=zn(e),u=c instanceof $?c:$.EMPTY_NODE,h=Sl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=xr(s,zn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=K(n);if(c===".priority"){b(wn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Bu(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=fe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Bu(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Tl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ni(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function Mr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Y(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=K(n);if(!l.isCompleteForPath(n)&&wn(n)>1)return e;const y=fe(n),D=l.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?c=u.updatePriority(l.getNode(),D):c=u.updateChild(l.getNode(),_,D,y,Qf,null)}const h=jf(e,c,l.isFullyInitialized()||Y(n),u.filtersNodes()),d=new Rl(i,h,r);return Jf(t,h,n,i,d,a)}function Ca(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Rl(i,e,r);if(Y(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ni(e,c,!0,t.filter.filtersNodes());else{const h=K(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ni(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=fe(n),_=a.getNode().getImmediateChild(h);let y;if(Y(d))y=s;else{const T=u.getCompleteChild(h);T!=null?ml(d)===".priority"&&T.getChild(Mf(d)).isEmpty()?y=T:y=T.updateChild(d,s):y=$.EMPTY_NODE}if(_.equals(y))l=e;else{const T=t.filter.updateChild(a.getNode(),h,y,d,u,o);l=ni(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Hu(t,e){return t.eventCache.isCompleteForChild(e)}function iI(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=we(n,l);Hu(e,K(u))&&(a=Ca(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=we(n,l);Hu(e,K(u))||(a=Ca(t,a,u,c,i,r,o))}),a}function ju(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ba(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Y(n)?c=s:c=new de(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),y=ju(t,_,d);l=Mr(t,l,new he(h),y,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const y=e.serverCache.getNode().getImmediateChild(h),T=ju(t,y,d);l=Mr(t,l,new he(h),T,i,r,o,a)}}),l}function rI(t,e,n,s,i,r,o){if(Dr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Mr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Y(n)){let c=new de(null);return l.getNode().forEachChild(_s,(u,h)=>{c=c.set(new he(u),h)}),ba(t,e,n,c,i,r,a,o)}else return e}else{let c=new de(null);return s.foreach((u,h)=>{const d=we(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ba(t,e,n,c,i,r,a,o)}}function oI(t,e,n,s,i){const r=e.serverCache,o=jf(e,r.getNode(),r.isFullyInitialized()||Y(n),r.isFiltered());return Jf(t,o,n,s,Qf,i)}function aI(t,e,n,s,i,r){let o;if(Dr(s,n)!=null)return e;{const a=new Rl(s,e,i),l=e.eventCache.getNode();let c;if(Y(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=xr(s,zn(e));else{const h=e.serverCache.getNode();b(h instanceof $,"serverChildren would be complete if leaf node"),u=Sl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=K(n);let h=Tl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,fe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,$.EMPTY_NODE,fe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xr(s,zn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Dr(s,Z())!=null,ni(e,c,o,t.filter.filtersNodes())}}/**
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
 */class lI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new wl(s.getIndex()),r=Tb(s);this.processor_=eI(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode($.EMPTY_NODE,a.getNode(),null),u=new En(l,o.isFullyInitialized(),i.filtersNodes()),h=new En(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=oo(h,u),this.eventGenerator_=new xb(this.query_)}get query(){return this.query_}}function cI(t){return t.viewCache_.serverCache.getNode()}function uI(t){return Or(t.viewCache_)}function hI(t,e){const n=zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function qu(t){return t.eventRegistrations_.length===0}function dI(t,e){t.eventRegistrations_.push(e)}function Gu(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ku(t,e,n,s){e.type===dt.MERGE&&e.source.queryId!==null&&(b(zn(t.viewCache_),"We should always have a full cache before handling merges"),b(Or(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=nI(t.processor_,i,e,n,s);return tI(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Xf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function fI(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(r,o)=>{s.push(Cs(r,o))}),n.isFullyInitialized()&&s.push(Bf(n.getNode())),Xf(t,s,n.getNode(),e)}function Xf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Db(t.eventGenerator_,e,n,i)}/**
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
 */let Lr;class Zf{constructor(){this.views=new Map}}function pI(t){b(!Lr,"__referenceConstructor has already been defined"),Lr=t}function _I(){return b(Lr,"Reference.ts has not been loaded"),Lr}function mI(t){return t.views.size===0}function Pl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Ku(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ku(o,e,n,s));return r}}function ep(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=xr(n,i?s:null),l=!1;a?l=!0:s instanceof $?(a=Sl(n,s),l=!1):(a=$.EMPTY_NODE,l=!1);const c=oo(new En(a,l,!1),new En(s,i,!1));return new lI(e,c)}return o}function gI(t,e,n,s,i,r){const o=ep(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),dI(o,n),fI(o,n)}function yI(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Cn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Gu(c,n,s)),qu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Gu(l,n,s)),qu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Cn(t)&&r.push(new(_I())(e._repo,e._path)),{removed:r,events:o}}function tp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yn(t,e){let n=null;for(const s of t.views.values())n=n||hI(s,e);return n}function np(t,e){if(e._queryParams.loadsAllData())return lo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function sp(t,e){return np(t,e)!=null}function Cn(t){return lo(t)!=null}function lo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Fr;function vI(t){b(!Fr,"__referenceConstructor has already been defined"),Fr=t}function wI(){return b(Fr,"Reference.ts has not been loaded"),Fr}let EI=1;class zu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=Qb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ip(t,e,n,s,i){return Ub(t.pendingWriteTree_,e,n,s,i),i?Os(t,new Kn(Cl(),e,n)):[]}function CI(t,e,n,s){Wb(t.pendingWriteTree_,e,n,s);const i=de.fromObject(n);return Os(t,new bs(Cl(),e,i))}function hn(t,e,n=!1){const s=Vb(t.pendingWriteTree_,e);if($b(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(Z(),!0):De(s.children,o=>{r=r.set(new he(o),!0)}),Os(t,new Nr(s.path,r,n))}else return[]}function Fi(t,e,n){return Os(t,new Kn(bl(),e,n))}function bI(t,e,n){const s=de.fromObject(n);return Os(t,new bs(bl(),e,s))}function II(t,e){return Os(t,new Ei(bl(),e))}function SI(t,e,n){const s=Al(t,n);if(s){const i=Nl(s),r=i.path,o=i.queryId,a=He(r,e),l=new Ei(Il(o),a);return Ol(t,r,l)}else return[]}function Ur(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||sp(o,e))){const l=yI(o,e,n,s);mI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Cn(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=PI(d);for(let y=0;y<_.length;++y){const T=_[y],D=T.query,O=lp(t,T);t.listenProvider_.startListening(ii(D),Ci(t,D),O.hashFn,O.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ii(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(co(d));t.listenProvider_.stopListening(ii(d),_)}))}kI(t,c)}return a}function rp(t,e,n,s){const i=Al(t,s);if(i!=null){const r=Nl(i),o=r.path,a=r.queryId,l=He(o,e),c=new Kn(Il(a),l,n);return Ol(t,o,c)}else return[]}function TI(t,e,n,s){const i=Al(t,s);if(i){const r=Nl(i),o=r.path,a=r.queryId,l=He(o,e),c=de.fromObject(n),u=new bs(Il(a),l,c);return Ol(t,o,u)}else return[]}function Ia(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const y=He(d,i);r=r||yn(_,y),o=o||Cn(_)});let a=t.syncPointTree_.get(i);a?(o=o||Cn(a),r=r||yn(a,Z())):(a=new Zf,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const T=yn(y,Z());T&&(r=r.updateImmediateChild(_,T))}));const c=sp(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=co(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=AI();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=ao(t.pendingWriteTree_,i);let h=gI(a,e,n,u,r,l);if(!c&&!o&&!s){const d=np(a,e);h=h.concat(NI(t,e,d))}return h}function kl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=He(o,e),c=yn(a,l);if(c)return c});return Kf(i,e,r,n,!0)}function RI(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=He(c,n);s=s||yn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||yn(i,Z()):(i=new Zf,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new En(s,!0,!1):null,a=ao(t.pendingWriteTree_,e._path),l=ep(i,e,a,r?o.getNode():$.EMPTY_NODE,r);return uI(l)}function Os(t,e){return op(e,t.syncPointTree_,null,ao(t.pendingWriteTree_,Z()))}function op(t,e,n,s){if(Y(t.path))return ap(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=yn(i,Z()));let r=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=zf(s,o);r=r.concat(op(a,l,c,u))}return i&&(r=r.concat(Pl(i,t,s,n))),r}}function ap(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=yn(i,Z()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=zf(s,o),u=t.operationForChild(o);u&&(r=r.concat(ap(u,a,l,c)))}),i&&(r=r.concat(Pl(i,t,s,n))),r}function lp(t,e){const n=e.query,s=Ci(t,n);return{hashFn:()=>(cI(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?SI(t,n._path,s):II(t,n._path);{const r=IC(i,n);return Ur(t,n,null,r)}}}}function Ci(t,e){const n=co(e);return t.queryToTagMap.get(n)}function co(t){return t._path.toString()+"$"+t._queryIdentifier}function Al(t,e){return t.tagToQueryMap.get(e)}function Nl(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function Ol(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=ao(t.pendingWriteTree_,e);return Pl(s,n,i,null)}function PI(t){return t.fold((e,n,s)=>{if(n&&Cn(n))return[lo(n)];{let i=[];return n&&(i=tp(n)),De(s,(r,o)=>{i=i.concat(o)}),i}})}function ii(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(wI())(t._repo,t._path):t}function kI(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=co(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function AI(){return EI++}function NI(t,e,n){const s=e._path,i=Ci(t,e),r=lp(t,n),o=t.listenProvider_.startListening(ii(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)b(!Cn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Y(c)&&u&&Cn(u))return[lo(u).query];{let d=[];return u&&(d=d.concat(tp(u).map(_=>_.query))),De(h,(_,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ii(u),Ci(t,u))}}return o}/**
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
 */class xl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xl(n)}node(){return this.node_}}class Dl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new Dl(this.syncTree_,n)}node(){return kl(this.syncTree_,this.path_)}}const OI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yu=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return DI(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},DI=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},cp=function(t,e,n,s){return Ml(e,new Dl(n,t),s)},up=function(t,e,n){return Ml(t,new xl(e),n)};function Ml(t,e,n){const s=t.getPriority().val(),i=Yu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Yu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Pe(a,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Pe(i))),o.forEachChild(Ee,(a,l)=>{const c=Ml(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Ll{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Fl(t,e){let n=e instanceof he?e:new he(e),s=t,i=K(n);for(;i!==null;){const r=gs(s.node.children,i)||{children:{},childCount:0};s=new Ll(i,s,r),n=fe(n),i=K(n)}return s}function xs(t){return t.node.value}function hp(t,e){t.node.value=e,Sa(t)}function dp(t){return t.node.childCount>0}function MI(t){return xs(t)===void 0&&!dp(t)}function uo(t,e){De(t.node.children,(n,s)=>{e(new Ll(n,t,s))})}function fp(t,e,n,s){n&&!s&&e(t),uo(t,i=>{fp(i,e,!0,s)}),n&&s&&e(t)}function LI(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ui(t){return new he(t.parent===null?t.name:Ui(t.parent)+"/"+t.name)}function Sa(t){t.parent!==null&&FI(t.parent,t.name,t)}function FI(t,e,n){const s=MI(n),i=Ot(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Sa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Sa(t))}/**
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
 */const UI=/[\[\].#$\/\u0000-\u001F\u007F]/,WI=/[\[\].#$\u0000-\u001F\u007F]/,Bo=10*1024*1024,Ul=function(t){return typeof t=="string"&&t.length!==0&&!UI.test(t)},pp=function(t){return typeof t=="string"&&t.length!==0&&!WI.test(t)},VI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pp(t)},$I=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!hl(t)||t&&typeof t=="object"&&Ot(t,".sv")},_p=function(t,e,n,s){s&&e===void 0||ho(Xr(t,"value"),e,n)},ho=function(t,e,n){const s=n instanceof he?new ib(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xn(s));if(typeof e=="function")throw new Error(t+"contains a function "+xn(s)+" with contents = "+e.toString());if(hl(e))throw new Error(t+"contains "+e.toString()+" "+xn(s));if(typeof e=="string"&&e.length>Bo/3&&Zr(e)>Bo)throw new Error(t+"contains a string greater than "+Bo+" utf8 bytes "+xn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(De(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ul(o)))throw new Error(t+" contains an invalid key ("+o+") "+xn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rb(s,o),ho(t,a,s),ob(s)}),i&&r)throw new Error(t+' contains ".value" child '+xn(s)+" in addition to actual children.")}},BI=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=gi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ul(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(sb);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&st(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},HI=function(t,e,n,s){const i=Xr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];De(e,(o,a)=>{const l=new he(o);if(ho(i,a,we(n,l)),ml(l)===".priority"&&!$I(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),BI(i,r)},mp=function(t,e,n,s){if(!pp(n))throw new Error(Xr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jI=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mp(t,e,n)},Wl=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},qI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ul(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VI(n))throw new Error(Xr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class GI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!gl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function gp(t,e,n){fo(t,n),yp(t,s=>gl(s,e))}function it(t,e,n){fo(t,n),yp(t,s=>st(s,e)||st(e,s))}function yp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(KI(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ei&&xe("event: "+n.toString()),Ns(s)}}}/**
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
 */const zI="repo_interrupt",YI=25;class QI{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new GI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ar(),this.transactionQueueTree_=new Ll,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JI(t,e,n){if(t.stats_=pl(t.repoInfo_),t.forceRestClient_||PC())t.server_=new kr(t.repoInfo_,(s,i,r,o)=>{Qu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ju(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new qt(t.repoInfo_,e,(s,i,r,o)=>{Qu(t,s,i,r,o)},s=>{Ju(t,s)},s=>{XI(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=xC(t.repoInfo_,()=>new Ob(t.stats_,t.server_)),t.infoData_=new Rb,t.infoSyncTree_=new zu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Fi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vl(t,"connected",!1),t.serverSyncTree_=new zu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);it(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function vp(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function po(t){return OI({timestamp:vp(t)})}function Qu(t,e,n,s,i){t.dataUpdateCount++;const r=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=yr(n,c=>Ce(c));o=TI(t.serverSyncTree_,r,l,i)}else{const l=Ce(n);o=rp(t.serverSyncTree_,r,l,i)}else if(s){const l=yr(n,c=>Ce(c));o=bI(t.serverSyncTree_,r,l)}else{const l=Ce(n);o=Fi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ss(t,r)),it(t.eventQueue_,a,o)}function Ju(t,e){Vl(t,"connected",e),e===!1&&nS(t)}function XI(t,e){De(e,(n,s)=>{Vl(t,n,s)})}function Vl(t,e,n){const s=new he("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=Fi(t.infoSyncTree_,s,i);it(t.eventQueue_,s,r)}function $l(t){return t.nextWriteId_++}function ZI(t,e,n){const s=RI(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ce(i).withIndex(e._queryParams.getIndex());Ia(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Fi(t.serverSyncTree_,e._path,r);else{const a=Ci(t.serverSyncTree_,e);o=rp(t.serverSyncTree_,e._path,r,a)}return it(t.eventQueue_,e._path,o),Ur(t.serverSyncTree_,e,n,null,!0),r},i=>(Wi(t,"get for query "+be(e)+" failed: "+i),Promise.reject(new Error(i))))}function eS(t,e,n,s,i){Wi(t,"set",{path:e.toString(),value:n,priority:s});const r=po(t),o=Ce(n,s),a=kl(t.serverSyncTree_,e),l=up(o,a,r),c=$l(t),u=ip(t.serverSyncTree_,e,l,c,!0);fo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const y=d==="ok";y||je("set at "+e+" failed: "+d);const T=hn(t.serverSyncTree_,c,!y);it(t.eventQueue_,e,T),Ta(t,i,d,_)});const h=Hl(t,e);Ss(t,h),it(t.eventQueue_,h,[])}function tS(t,e,n,s){Wi(t,"update",{path:e.toString(),value:n});let i=!0;const r=po(t),o={};if(De(n,(a,l)=>{i=!1,o[a]=cp(we(e,a),Ce(l),t.serverSyncTree_,r)}),i)xe("update() called with empty data.  Don't do anything."),Ta(t,s,"ok",void 0);else{const a=$l(t),l=CI(t.serverSyncTree_,e,o,a);fo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||je("update at "+e+" failed: "+c);const d=hn(t.serverSyncTree_,a,!h),_=d.length>0?Ss(t,e):e;it(t.eventQueue_,_,d),Ta(t,s,c,u)}),De(n,c=>{const u=Hl(t,we(e,c));Ss(t,u)}),it(t.eventQueue_,e,[])}}function nS(t){Wi(t,"onDisconnectEvents");const e=po(t),n=Ar();ya(t.onDisconnect_,Z(),(i,r)=>{const o=cp(i,r,t.serverSyncTree_,e);Hf(n,i,o)});let s=[];ya(n,Z(),(i,r)=>{s=s.concat(Fi(t.serverSyncTree_,i,r));const o=Hl(t,i);Ss(t,o)}),t.onDisconnect_=Ar(),it(t.eventQueue_,Z(),s)}function sS(t,e,n){let s;K(e._path)===".info"?s=Ia(t.infoSyncTree_,e,n):s=Ia(t.serverSyncTree_,e,n),gp(t.eventQueue_,e._path,s)}function Xu(t,e,n){let s;K(e._path)===".info"?s=Ur(t.infoSyncTree_,e,n):s=Ur(t.serverSyncTree_,e,n),gp(t.eventQueue_,e._path,s)}function iS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zI)}function Wi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xe(n,...e)}function Ta(t,e,n,s){e&&Ns(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function wp(t,e,n){return kl(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function Bl(t,e=t.transactionQueueTree_){if(e||_o(t,e),xs(e)){const n=Cp(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&rS(t,Ui(e),n)}else dp(e)&&uo(e,n=>{Bl(t,n)})}function rS(t,e,n){const s=n.map(c=>c.currentWriteId),i=wp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=He(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Wi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(hn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();_o(t,Fl(t.transactionQueueTree_,e)),Bl(t,t.transactionQueueTree_),it(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ns(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{je("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ss(t,e)}},o)}function Ss(t,e){const n=Ep(t,e),s=Ui(n),i=Cp(t,n);return oS(t,i,s),s}function oS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=He(n,l.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=YI)u=!0,h="maxretry",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=wp(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){ho("transaction failed: Data returned ",_,l.path);let y=Ce(_);typeof _=="object"&&_!=null&&Ot(_,".priority")||(y=y.updatePriority(d.getPriority()));const D=l.currentWriteId,O=po(t),x=up(y,d,O);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=x,l.currentWriteId=$l(t),o.splice(o.indexOf(D),1),i=i.concat(ip(t.serverSyncTree_,l.path,x,l.currentWriteId,l.applyLocally)),i=i.concat(hn(t.serverSyncTree_,D,!0))}else u=!0,h="nodata",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0))}it(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}_o(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ns(s[a]);Bl(t,t.transactionQueueTree_)}function Ep(t,e){let n,s=t.transactionQueueTree_;for(n=K(e);n!==null&&xs(s)===void 0;)s=Fl(s,n),e=fe(e),n=K(e);return s}function Cp(t,e){const n=[];return bp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function bp(t,e,n){const s=xs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);uo(e,i=>{bp(t,i,n)})}function _o(t,e){const n=xs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,hp(e,n.length>0?n:void 0)}uo(e,s=>{_o(t,s)})}function Hl(t,e){const n=Ui(Ep(t,e)),s=Fl(t.transactionQueueTree_,e);return LI(s,i=>{Ho(t,i)}),Ho(t,s),fp(s,i=>{Ho(t,i)}),n}function Ho(t,e){const n=xs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?hp(e,void 0):n.length=r+1,it(t.eventQueue_,Ui(e),i);for(let o=0;o<s.length;o++)Ns(s[o])}}/**
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
 */function aS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zu=function(t,e){const n=cS(t),s=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Tf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new he(n.pathString)}},cS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=aS(t.substring(u,h)));const d=lS(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const eh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",uS=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=eh.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=eh.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class hS{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class dS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ip{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class jl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Y(this._path)?null:ml(this._path)}get ref(){return new Qt(this._repo,this._path)}get _queryIdentifier(){const e=Uu(this._queryParams),n=dl(e);return n==="{}"?"default":n}get _queryObject(){return Uu(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof jl))return!1;const n=this._repo===e._repo,s=gl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+nb(this._path)}}class Qt extends jl{constructor(e,n){super(e,n,new El,!1)}get parent(){const e=Mf(this._path);return e===null?null:new Qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new he(e),s=Ii(this.ref,e);return new bi(this._node.getChild(n),s,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new bi(i,Ii(this.ref,s),Ee)))}hasChild(e){const n=new he(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ne(t,e){return t=Me(t),t._checkNotDeleted("ref"),e!==void 0?Ii(t._root,e):t._root}function Ii(t,e){return t=Me(t),K(t._path)===null?jI("child","path",e):mp("child","path",e),new Qt(t._repo,we(t._path,e))}function Ra(t,e){t=Me(t),Wl("push",t._path),_p("push",e,t._path,!0);const n=vp(t._repo),s=uS(n),i=Ii(t,s),r=Ii(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Sp(t){return Wl("remove",t._path),Vi(t,null)}function Vi(t,e){t=Me(t),Wl("set",t._path),_p("set",e,t._path,!1);const n=new Pi;return eS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Tp(t,e){HI("update",e,t._path);const n=new Pi;return tS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function mo(t){t=Me(t);const e=new Ip(()=>{}),n=new go(e);return ZI(t._repo,t,n).then(s=>new bi(s,new Qt(t._repo,t._path),t._queryParams.getIndex()))}class go{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new hS("value",this,new bi(e.snapshotNode,new Qt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dS(this,e,n):null}matches(e){return e instanceof go?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function fS(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Xu(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Ip(n,r||void 0),a=new go(o);return sS(t._repo,t,a),()=>Xu(t._repo,t,a)}function pS(t,e,n,s){return fS(t,"value",e,n,s)}pI(Qt);vI(Qt);/**
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
 */const _S="FIREBASE_DATABASE_EMULATOR_HOST",Pa={};let mS=!1;function gS(t,e,n,s){t.repoInfo_=new Tf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function yS(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zu(r,i),a=o.repoInfo,l;typeof process<"u"&&wu&&(l=wu[_S]),l?(r=`http://${l}?ns=${a.namespace}`,o=Zu(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new AC(t.name,t.options,e);qI("Invalid Firebase Database URL",o),Y(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=wS(a,t,c,new kC(t.name,n));return new ES(u,t)}function vS(t,e){const n=Pa[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),iS(t),delete n[t.key]}function wS(t,e,n,s){let i=Pa[e.name];i||(i={},Pa[e.name]=i);let r=i[t.toURLString()];return r&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new QI(t,mS,n,s),i[t.toURLString()]=r,r}class ES{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function gt(t=_d(),e){const n=Za(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=hg("database");s&&CS(n,...s)}return n}function CS(t,e,n,s={}){t=Me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new lr(lr.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:dg(s.mockUserToken,t.app.options.projectId);r=new lr(o)}gS(i,e,n,r)}/**
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
 */function bS(t){fC(ks),ys(new Bn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return yS(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),mn(Eu,Cu,t),mn(Eu,Cu,"esm2017")}qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bS();const xt={firebaseConfig:{apiKey:"AIzaSyC6OKfRLtntX1mzOgfPRGeQWlBQKakP8rI",authDomain:"motw-frontend-hq.firebaseapp.com",databaseURL:"https://motw-frontend-hq-default-rtdb.firebaseio.com",projectId:"motw-frontend-hq",storageBucket:"motw-frontend-hq.appspot.com",messagingSenderId:"607683384016",appId:"1:607683384016:web:334f0aa4548af6b1f884d5"}},IS={data(){return{message:"We doin our best here",email:"",password:"",name:"",showRegister:!1,errorMessage:""}},created(){this.app=yt(xt.firebaseConfig),this.auth=Zd(this.app),Dv(this.auth,t=>{t?(Fe.login({uid:t.uid}),this.fetchUserName(t.uid)):Fe.logout()})},methods:{setCookie(t,e,n){const s=new Date;s.setTime(s.getTime()+n*24*60*60*1e3);const i=`expires=${s.toUTCString()}`;document.cookie=`${t}=${e}; ${i}; path=/`},displayMessage(t){console.log(t)},registerUser(){kv(this.auth,this.email,this.password).then(t=>{const e=t.user,n={name:this.name,email:this.email,isAdmin:!1,last_login:Date.now()},s=gt();Vi(Ne(s,"profiles/"+e.uid),n),Fe.login({uid:e.uid,name:this.name,isAdmin:e.isAdmin}),this.errorMessage=""}).catch(t=>{this.errorMessage=t.message})},loginUser(){Nv(this.auth,jd).then(()=>Av(this.auth,this.email,this.password)).then(t=>{Fe.login({uid:t.user.uid}),this.fetchUserName(t.user.uid),this.errorMessage="",localStorage.setItem("motw-uid",t.user.uid),localStorage.setItem("motw-user",JSON.stringify(t.user))}).catch(t=>{this.errorMessage=t.message})},logoutUser(){$d(this.auth).then(()=>{Fe.logout(),localStorage.removeItem("motw-uid"),localStorage.removeItem("motw-user")}).catch(t=>{console.error(t)})},fetchUserName(t){console.log(128,"Fetch username");const e=gt(),n=Ne(e,"profiles/"+t);mo(n).then(s=>{s.exists()?(Fe.user.name=s.val().name,Fe.isAdmin=s.val().isAdmin):console.log("No user data available")}).catch(s=>{console.error(s)})}},computed:{store(){return Fe}}},yo=t=>(At("data-v-d849dea5"),t=t(),Nt(),t),SS={key:0,class:"input-container"},TS={key:0,class:"error"},RS=yo(()=>m("label",{for:"email"},"Email:",-1)),PS=yo(()=>m("label",{for:"password"},"Password:",-1)),kS={key:1},AS=yo(()=>m("label",{for:"name"},"Name:",-1)),NS={key:2},OS={key:3,class:"cta-container"},xS=yo(()=>m("br",null,null,-1)),DS={key:1};function MS(t,e,n,s,i,r){return L(),F("div",null,[m("h1",null,te(i.message),1),r.store.isAuthenticated?(L(),F("div",DS,[m("p",null,"Welcome, "+te(r.store.user.name)+"!",1),m("button",{onClick:e[6]||(e[6]=(...o)=>r.logoutUser&&r.logoutUser(...o))},"Logout")])):(L(),F("div",SS,[i.errorMessage?(L(),F("div",TS,te(i.errorMessage),1)):ge("",!0),m("div",null,[RS,ne(m("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),id:"email"},null,512),[[ae,i.email]])]),m("div",null,[PS,ne(m("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),id:"password"},null,512),[[ae,i.password]])]),i.showRegister?(L(),F("div",kS,[AS,ne(m("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>i.name=o),id:"name"},null,512),[[ae,i.name]])])):ge("",!0),i.showRegister?(L(),F("div",NS,[m("button",{onClick:e[3]||(e[3]=(...o)=>r.registerUser&&r.registerUser(...o))},"Register")])):(L(),F("div",OS,[m("button",{onClick:e[4]||(e[4]=(...o)=>r.loginUser&&r.loginUser(...o))},"Login"),m("p",null,[Ue("No account?"),xS,Ue(),m("a",{href:"#",onClick:e[5]||(e[5]=Vn(o=>i.showRegister=!0,["prevent"]))},"Click here to register")])]))]))])}const LS=vt(IS,[["render",MS],["__scopeId","data-v-d849dea5"]]),FS=yt(xt.firebaseConfig),US=gt(FS);function th(t,e){const n=t._path.pieces_.join("/"),s=Ne(US,n),i=e===void 0?null:e;return console.log("setClean",n,i),Vi(s,i)}const WS=yt(xt.firebaseConfig),VS=gt(WS);function Rp(t,e){const n=t._path.pieces_.join("/"),s=Ne(VS,n),i=e===void 0?null:e;return console.log("updateClean",n,i),Tp(s,i)}const $S={name:"EditCaseFiles",props:{caseToEdit:Object},data(){return{caseFile:{id:"",title:"",summary:"",details:"",status:"",objectives:"",password:"",enteredPassword:"",detailsVisible:!1,clues:[],locations:[],notes:[]},db:null}},watch:{caseToEdit:{handler(t){t&&(this.caseFile={...t},this.initializeCaseFile(this.caseFile))},immediate:!0}},created(){this.app=yt(xt.firebaseConfig),this.db=gt(this.app)},methods:{initializeCaseFile(t){t.id||(t.id=""),t.title||(t.title=""),t.summary||(t.summary=""),t.details||(t.details=""),t.password||(t.password="")},validateCaseFile(t){var e=["id","title","summary","details","password"];for(var n of e){if(!t.hasOwnProperty(n))return console.error(`Missing property: ${n}`),!1;if(typeof t[n]!="string")return console.error(`Incorrect type for property: ${n}`),!1}return!0},saveCaseFile(){if(!this.validateCaseFile(this.caseFile)){alert("Case file data is invalid. Please check the input fields.");return}if(this.caseFile.id){var t=Ne(this.db,"caseFiles/"+this.caseFile.id);Rp(t,this.caseFile).then(()=>{this.resetForm(),this.$emit("saved")}).catch(s=>{console.error("Error updating case:",s)})}else{var e=Ne(this.db,"caseFiles/"),n=Ra(e);console.log("New Case Ref Key:",n.key),console.log("caseFile:",this.caseFile),th(n,{...this.caseFile,id:n.key}).then(()=>{console.log("Data successfully written!"),this.resetForm(),this.$emit("saved")}).catch(s=>{console.error("Error adding case:",s),console.error("Error details:",s.message,s.stack)})}},saveCaseFileDebug(){var t=Ne(this.db,"casemiles/"),e=Ra(t);console.log("New Case Ref Key:",e.key),console.log("caseFile:",this.caseFile),th(e,{...this.caseFile,id:e.key}).then(()=>{console.log("Data successfully written!"),this.resetForm(),this.$emit("saved")}).catch(n=>{console.error("Error adding case:",n),console.error("Error details:",n.message,n.stack)})},resetForm(){this.caseFile={id:"",title:"",summary:"",details:"",password:""}}}},Ds=t=>(At("data-v-40fe5851"),t=t(),Nt(),t),BS={class:"edit-case-files"},HS={class:"form-group"},jS=Ds(()=>m("label",{for:"title"},"Title:",-1)),qS={class:"form-group"},GS=Ds(()=>m("label",{for:"summary"},"Summary:",-1)),KS={class:"form-group"},zS=Ds(()=>m("label",{for:"objectives"},"Objectives:",-1)),YS={class:"form-group"},QS=Ds(()=>m("label",{for:"status"},"Status:",-1)),JS={class:"form-group"},XS=Ds(()=>m("label",{for:"details"},"Details:",-1)),ZS={class:"form-group"},eT=Ds(()=>m("label",{for:"password"},"Password:",-1)),tT={type:"submit"};function nT(t,e,n,s,i,r){return L(),F("div",BS,[m("h1",null,te(i.caseFile.id?"Edit":"Add")+" Case File",1),m("form",{onSubmit:e[6]||(e[6]=Vn((...o)=>r.saveCaseFile&&r.saveCaseFile(...o),["prevent"]))},[m("div",HS,[jS,ne(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.caseFile.title=o),id:"title",autocomplete:"off",required:""},null,512),[[ae,i.caseFile.title]])]),m("div",qS,[GS,ne(m("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>i.caseFile.summary=o),id:"summary",required:""},null,512),[[ae,i.caseFile.summary]])]),m("div",KS,[zS,ne(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.caseFile.objectives=o),id:"objectives"},null,512),[[ae,i.caseFile.objectives]])]),m("div",YS,[QS,ne(m("textarea",{"onUpdate:modelValue":e[3]||(e[3]=o=>i.caseFile.status=o),id:"status"},null,512),[[ae,i.caseFile.status]])]),m("div",JS,[XS,ne(m("textarea",{"onUpdate:modelValue":e[4]||(e[4]=o=>i.caseFile.details=o),id:"details",required:""},null,512),[[ae,i.caseFile.details]])]),m("div",ZS,[eT,ne(m("input",{type:"password","onUpdate:modelValue":e[5]||(e[5]=o=>i.caseFile.password=o),id:"password",autocomplete:"off",required:""},null,512),[[ae,i.caseFile.password]])]),m("button",tT,te(i.caseFile.id?"Update":"Add")+" Case File",1)],32)])}const sT=vt($S,[["render",nT],["__scopeId","data-v-40fe5851"]]),iT=yt(xt.firebaseConfig),rT=gt(iT);function oT(t,e){const n=t._path.pieces_.join("/"),s=Ne(rT,n);return console.log("removeClean",n,null),Sp(s)}const aT={name:"CaseFiles",components:{EditCaseFiles:sT},data(){return{caseFiles:[],caseToEdit:null,isAdmin:Fe.isAdmin}},created(){this.app=yt(xt.firebaseConfig),this.db=gt(this.app),this.fetchCaseFiles()},methods:{fetchCaseFiles(){var t=Ne(this.db,"caseFiles");pS(t,e=>{var n=e.val();if(console.log("Fetched data:",n),n){let i=[];for(var s in n)n.hasOwnProperty(s)&&i.push({id:s,...n[s],enteredPassword:"",detailsVisible:!1});console.log("Processed caseFilesArray:",i),this.caseFiles=i}else this.caseFiles=[];console.log("Updated caseFiles:",this.caseFiles)},e=>{console.error("Error fetching case files:",e)})},editCaseFile(t){this.caseToEdit={...t}},deleteCaseFile(t){var e=Ne(this.db,"caseFiles/"+t);oT(e).catch(n=>console.error("Error deleting case:",n))},unlockDetails(t){t.enteredPassword===t.password?t.detailsVisible=!0:alert("Incorrect password")}}},lT=t=>(At("data-v-ba63da92"),t=t(),Nt(),t),cT={class:"case-files"},uT=lT(()=>m("h1",null,"Case Files",-1)),hT={key:0},dT=["onUpdate:modelValue"],fT=["onClick"],pT={key:0},_T={key:1},mT={key:0,class:"btn-container"},gT=["onClick"],yT=["onClick"];function vT(t,e,n,s,i,r){const o=ut("edit-case-files"),a=ut("router-link");return L(),F("div",cT,[uT,i.isAdmin?(L(),F("div",hT,[se(o,{caseToEdit:i.caseToEdit,onSaved:r.fetchCaseFiles},null,8,["caseToEdit","onSaved"])])):ge("",!0),m("ul",null,[(L(!0),F(Ae,null,Ft(i.caseFiles,l=>(L(),F("li",{class:"casefile-item",key:l.id},[m("h2",null,te(l.title),1),m("p",null,te(l.summary),1),m("div",null,[ne(m("input",{type:"password","onUpdate:modelValue":c=>l.enteredPassword=c,placeholder:"Enter password to view details"},null,8,dT),[[ae,l.enteredPassword]]),m("button",{onClick:c=>r.unlockDetails(l)},"Unlock Details",8,fT),l.detailsVisible?(L(),F("p",pT,te(l.status),1)):ge("",!0),l.detailsVisible?(L(),F("p",_T,te(l.details),1)):ge("",!0),l.detailsVisible?(L(),Xh(a,{key:2,to:"/case-files/"+l.id},{default:Ze(()=>[Ue("Read more")]),_:2},1032,["to"])):ge("",!0)]),i.isAdmin?(L(),F("div",mT,[m("button",{onClick:c=>r.editCaseFile(l)},"Edit",8,gT),m("button",{onClick:c=>r.deleteCaseFile(l.id)},"Delete",8,yT)])):ge("",!0)]))),128))])])}const Pp=vt(aT,[["render",vT],["__scopeId","data-v-ba63da92"]]),wT={name:"EditBeast",data(){return{beast:{name:"",image:"",description:"",stats:"",details:"",detailsPassword:"",entryPassword:""},db:null}},props:{beastToEdit:Object},watch:{beastToEdit:{handler(t){this.beast={...t}},immediate:!0}},created(){this.app=yt(xt.firebaseConfig),this.db=gt(this.app)},methods:{saveBeast(){if(this.beast.id){const t=Ne(this.db,"bestiary/"+this.beast.id);Tp(t,this.beast).then(()=>{this.resetForm(),this.$emit("saved")}).catch(e=>{console.error("Error updating beast:",e)})}else{const t=Ne(this.db,"bestiary"),e=Ra(t);Vi(e,this.beast).then(()=>{this.resetForm(),this.$emit("saved")}).catch(n=>{console.error("Error adding beast:",n)})}},resetForm(){this.beast={name:"",image:"",description:"",stats:"",details:"",detailsPassword:"",entryPassword:""}}}},Pn=t=>(At("data-v-fc2b3e68"),t=t(),Nt(),t),ET={class:"edit-beast"},CT={class:"form-group"},bT=Pn(()=>m("label",{for:"name"},"Name:",-1)),IT={class:"form-group"},ST=Pn(()=>m("label",{for:"image"},"Image URL:",-1)),TT={class:"form-group"},RT=Pn(()=>m("label",{for:"description"},"Description:",-1)),PT={class:"form-group"},kT=Pn(()=>m("label",{for:"stats"},"Stats:",-1)),AT={class:"form-group"},NT=Pn(()=>m("label",{for:"details"},"Details:",-1)),OT={class:"form-group"},xT=Pn(()=>m("label",{for:"detailsPassword"},"Details Password:",-1)),DT={class:"form-group"},MT=Pn(()=>m("label",{for:"entryPassword"},"Entry Password:",-1)),LT=Pn(()=>m("button",{type:"submit"},"Save Beast",-1));function FT(t,e,n,s,i,r){return L(),F("div",ET,[m("form",{onSubmit:e[7]||(e[7]=Vn((...o)=>r.saveBeast&&r.saveBeast(...o),["prevent"]))},[m("div",CT,[bT,ne(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.beast.name=o),id:"name",required:""},null,512),[[ae,i.beast.name]])]),m("div",IT,[ST,ne(m("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>i.beast.image=o),id:"image",required:""},null,512),[[ae,i.beast.image]])]),m("div",TT,[RT,ne(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.beast.description=o),id:"description",required:""},null,512),[[ae,i.beast.description]])]),m("div",PT,[kT,ne(m("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>i.beast.stats=o),id:"stats",required:""},null,512),[[ae,i.beast.stats]])]),m("div",AT,[NT,ne(m("textarea",{"onUpdate:modelValue":e[4]||(e[4]=o=>i.beast.details=o),id:"details"},null,512),[[ae,i.beast.details]])]),m("div",OT,[xT,ne(m("input",{type:"password","onUpdate:modelValue":e[5]||(e[5]=o=>i.beast.detailsPassword=o),id:"detailsPassword"},null,512),[[ae,i.beast.detailsPassword]])]),m("div",DT,[MT,ne(m("input",{type:"password","onUpdate:modelValue":e[6]||(e[6]=o=>i.beast.entryPassword=o),id:"entryPassword"},null,512),[[ae,i.beast.entryPassword]])]),LT],32)])}const UT=vt(wT,[["render",FT],["__scopeId","data-v-fc2b3e68"]]),WT={name:"Bestiary",components:{EditBeast:UT},data(){return{beasts:[],beastToEdit:null,db:null,isAdmin:Fe.isAdmin}},created(){this.app=yt(xt.firebaseConfig),this.db=gt(this.app),this.fetchBeasts(),this.checkAdmin()},methods:{fetchBeasts(){const t=Ne(this.db,"bestiary");mo(t).then(e=>{if(e.exists()){const n=e.val();this.beasts=Object.keys(n).map(s=>({id:s,...n[s],detailsVisible:!1,entryVisible:!n[s].entryPassword,entryPasswordInput:"",detailsPasswordInput:""}))}}).catch(e=>{console.error("Error fetching beasts:",e)})},editBeast(t){this.beastToEdit={...t}},deleteBeast(t){const e=Ne(this.db,"bestiary/"+t);Sp(e).then(()=>{this.fetchBeasts()}).catch(n=>{console.error("Error deleting beast:",n)})},checkAdmin(){console.log("Admin check",Fe.isAdmin),this.isAdmin=Fe.isAdmin},unlockEntry(t){t.entryPasswordInput===t.entryPassword||!t.entryPassword?t.entryVisible=!0:alert("Incorrect password!")},unlockDetails(t){t.detailsPasswordInput===t.detailsPassword||!t.detailsPassword?t.detailsVisible=!0:alert("Incorrect password!")}}},kp=t=>(At("data-v-7e5d0d1c"),t=t(),Nt(),t),VT={class:"bestiary"},$T=kp(()=>m("div",{class:"header"},[m("h1",null,"Bestiary")],-1)),BT={class:"content"},HT={key:0},jT={key:1},qT=kp(()=>m("h2",null,"Beasts",-1)),GT={key:0},KT=["onUpdate:modelValue"],zT=["onClick"],YT={key:1},QT=["src","alt"],JT={key:0},XT=["onUpdate:modelValue"],ZT=["onClick"],eR={key:1},tR={key:2},nR=["onClick"],sR=["onClick"];function iR(t,e,n,s,i,r){const o=ut("edit-beast");return L(),F("div",VT,[$T,m("div",BT,[i.isAdmin?(L(),F("div",HT,[se(o,{beastToEdit:i.beastToEdit,onSaved:r.fetchBeasts},null,8,["beastToEdit","onSaved"])])):ge("",!0),i.beasts.length?(L(),F("div",jT,[qT,m("ul",null,[(L(!0),F(Ae,null,Ft(i.beasts,a=>(L(),F("li",{key:a.id,class:"beast-item"},[a.entryVisible?ge("",!0):(L(),F("div",GT,[ne(m("input",{"onUpdate:modelValue":l=>a.entryPasswordInput=l,type:"password",placeholder:"Enter password to view beast"},null,8,KT),[[ae,a.entryPasswordInput]]),m("button",{onClick:l=>r.unlockEntry(a)},"Unlock Beast",8,zT)])),a.entryVisible?(L(),F("div",YT,[m("h3",null,te(a.name),1),m("img",{src:a.image,alt:a.name},null,8,QT),m("p",null,te(a.description),1),a.details&&!a.detailsVisible?(L(),F("div",JT,[ne(m("input",{"onUpdate:modelValue":l=>a.detailsPasswordInput=l,type:"password",placeholder:"Enter password to view details"},null,8,XT),[[ae,a.detailsPasswordInput]]),m("button",{onClick:l=>r.unlockDetails(a)},"Unlock Details",8,ZT)])):ge("",!0),a.detailsVisible?(L(),F("div",eR,[m("p",null,"Details: "+te(a.details),1)])):ge("",!0),m("p",null,"Stats: "+te(a.stats),1),i.isAdmin?(L(),F("div",tR,[m("button",{onClick:l=>r.editBeast(a)},"Edit",8,nR),m("button",{onClick:l=>r.deleteBeast(a.id)},"Delete",8,sR)])):ge("",!0)])):ge("",!0)]))),128))])])):ge("",!0)])])}const Ap=vt(WT,[["render",iR],["__scopeId","data-v-7e5d0d1c"]]),rR=[{name:"The Chosen",description:"Your birth was prophesied. You are the Chosen One, and with your abilities, you can save the world. If you fail, all will be destroyed. It all rests on you. Only you.",moves:[{name:"Destiny’s Plaything",description:"At the beginning of each mystery, roll +Weird to see what is revealed about your immediate future."},{name:"I’m Here For A Reason",description:"There’s something you are meant to do; work out the signs to find out what."},{name:"The Big Entrance",description:"When you make a showy entrance, roll +Charm."},{name:"Devastating",description:"When you inflict harm, you inflict +1 harm."},{name:"Dutiful",description:"You gain +1 ongoing while you follow a duty."},{name:"Invincible",description:"You always count as having 2-armour."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Protective gear worth 1-armour","Special weapon"],ratings:["Charm+2, Cool-1, Sharp+1, Tough+2, Weird-1","Charm-1, Cool+2, Sharp+1, Tough+2, Weird-1","Charm+1, Cool+2, Sharp+1, Tough+1, Weird-1","Charm-1, Cool+1, Sharp+2, Tough-1, Weird+2","Charm+1, Cool+2, Sharp-1, Tough-1, Weird+2"],special:"When you spend a point of Luck, the Keeper will bring your fate into play."},{name:"The Crooked",description:"“Yeah, I’ve been around the block. A bit of this, a bit of that. When I came across the secret underworld of monsters and magic… well… it wasn’t so different from the underworld I already knew. It was easy to find an angle, just like before.”",moves:[{name:"Hoodlum",description:"When you get into trouble, roll +Cool."},{name:"Burglar",description:"When you break into a secure location, roll +Cool."},{name:"Grifter",description:"When you try to dupe someone, roll +Charm."},{name:"Fixer",description:"When you need something, roll +Sharp."},{name:"Assassin",description:"When you attack from ambush, roll +Cool."},{name:"Charlatan",description:"When you try to lie to someone, roll +Charm."},{name:"Pickpocket",description:"When you try to steal something, roll +Cool."}],gear:[".22 revolver (1-harm close reload small)",".38 revolver (2-harm close reload loud)","9mm (2-harm close loud)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)","Big knife (1-harm hand)","Baseball bat (1-harm hand)","Submachinegun (2-harm close reload area)","Assault rifle (3-harm close/far area)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +1, Tough +2, Weird 0","Charm -1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird -1","Charm +2, Cool 0, Sharp +1, Tough -1, Weird +1"],special:"Whenever you spend a Luck point, someone from your past will re-appear in your life. Soon."},{name:"The Divine",description:"An agent of a higher power, sent to fight evil. You have a mission and heavenly powers to back you up.",moves:[{name:"Angel Wings",description:"You can go instantly to anywhere you’ve visited before, or to a person you know well. When you carry one or two people with you, roll +Weird."},{name:"Smite",description:"Your body and divine weapon always count as a weakness against the monsters you fight."},{name:"Soothe",description:"When you talk to someone for a few seconds in a quiet voice, you can calm them down, blocking any panic, anger, or other negative emotions."},{name:"What I Need, When I Need It",description:"You may store any useful item or piece of information somewhere close at hand."},{name:"Lay On Hands",description:"Your touch can heal injury and disease. When you lay your hands on someone hurt, roll +Cool."},{name:"Angel’s Call",description:"You can summon an angelic ally to assist you. Roll +Weird."}],gear:["Divine weapon (3-harm hand messy holy)","Holy armor (1-armour holy)"],ratings:["Charm +2, Cool +1, Sharp +0, Tough +2, Weird -1","Charm +1, Cool +2, Sharp +0, Tough +2, Weird -1","Charm +2, Cool +1, Sharp +1, Tough +0, Weird +1","Charm +0, Cool +1, Sharp +2, Tough +1, Weird -1","Charm +2, Cool +0, Sharp +1, Tough +2, Weird -1"],special:"When you spend a point of Luck, your higher power gives you a vision about the current mystery."},{name:"The Flake",description:"You see patterns that others don’t. You’re the one who connects the dots and sees the truth about the world.",moves:[{name:"Connect the Dots",description:"You see patterns that others don’t. You’re the one who connects the dots and sees the truth about the world."},{name:"Crazy Eyes",description:"When you use your sharp gaze to study something, roll +Sharp."},{name:"Net Friends",description:"When you contact your network of friends, roll +Charm."},{name:"Sneaky",description:"When you try to be sneaky, roll +Cool."},{name:"Suspicious Mind",description:"When you try to figure out if someone is lying, roll +Sharp."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Often Overlooked",description:"When you act all quiet and out of the way, roll +Cool."}],gear:["Hunting rifle (2-harm far loud)","Shotgun (3-harm close messy)","Big knife (1-harm hand)","Baseball bat (1-harm hand)"],ratings:["Charm +1, Cool +2, Sharp +1, Tough 0, Weird -1","Charm -1, Cool +2, Sharp +2, Tough 0, Weird 0","Charm +2, Cool +1, Sharp +2, Tough -1, Weird 0","Charm +1, Cool +1, Sharp +2, Tough 0, Weird +1"],special:"Whenever you spend a Luck point, you have a vision about the current mystery."},{name:"The Expert",description:"You have devoted your life to researching the supernatural and finding ways to deal with it. You have the knowledge and the tools to deal with these threats.",moves:[{name:"I’ve Read About This Sort of Thing",description:"You’ve read books, and you can use that knowledge."},{name:"Preparedness",description:"If you need something unusual, roll +Sharp."},{name:"Always the Victim",description:"When you’re attacked, roll +Cool."},{name:"Dark Past",description:"When you look into your past lives, roll +Weird."},{name:"Often Right",description:"When you’re right about something, gain +1 ongoing."},{name:"Soothe",description:"When you talk to someone for a few seconds, roll +Charm."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."}],gear:["Shotgun (3-harm close messy)","Big knife (1-harm hand)","Sword (3-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, something you have prepared comes in handy."},{name:"The Initiate",description:"You are part of an ancient secret order that fights against the darkness. You have access to their knowledge and resources.",moves:[{name:"Ancient Fighting Arts",description:"You have been trained to fight with ancient weapons. Roll +Tough."},{name:"Fortunes",description:"When you seek your order’s knowledge, roll +Weird."},{name:"Mentor",description:"You have a mentor who can help you. Roll +Charm."},{name:"Apprentice",description:"You are training someone. Roll +Sharp."},{name:"Sacred Oath",description:"You have sworn a sacred oath. Roll +Cool."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Big knife (1-harm hand)","Sword (2-harm hand)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your order provides you with valuable information or resources."},{name:"The Monstrous",description:"You are a creature of the night, but you fight for the good guys. You have supernatural abilities and a dark side.",moves:[{name:"Immortal",description:"You do not age, and you cannot die of old age. Roll +Weird."},{name:"Unholy Strength",description:"You have inhuman strength. Roll +Tough."},{name:"Preternatural Speed",description:"You have inhuman speed. Roll +Cool."},{name:"Dark Negotiator",description:"You can make deals with dark powers. Roll +Charm."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."},{name:"Natural Attack",description:"You have a natural attack. Roll +Tough."}],gear:["Claws (3-harm hand)","Fangs (2-harm intimate)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your dark side’s needs come to the fore."},{name:"The Mundane",description:"You are an ordinary person, caught up in the world of monsters and magic.",moves:[{name:"Always the Victim",description:"When you’re attacked, roll +Cool."},{name:"Don’t Worry, I’ll Check It Out",description:"When you go off alone to check out somewhere, roll +Cool."},{name:"Let’s Get Out of Here",description:"When you lead people out of danger, roll +Charm."},{name:"What Could Go Wrong?",description:"When you charge into immediate danger without hedging your bets, roll +Cool."},{name:"Trust Me",description:"When you tell a normal person the truth in order to protect them, roll +Charm."},{name:"Panic Button",description:"When you need to escape, roll +Cool."},{name:"The Power of Heart",description:"When fighting a monster, if you help someone, roll +Charm."}],gear:["Kitchen knife (1-harm hand)","Baseball bat (1-harm hand)","Fire axe (3-harm hand heavy)","Chainsaw (3-harm hand messy heavy)"],ratings:["Charm +2, Cool 0, Sharp +1, Tough 0, Weird -1","Charm +1, Cool +2, Sharp 0, Tough 0, Weird -1","Charm +2, Cool +1, Sharp 0, Tough -1, Weird 0","Charm +2, Cool 0, Sharp -1, Tough +1, Weird 0"],special:"Whenever you spend a Luck point, something goes terribly wrong."},{name:"The Professional",description:"You work for an organization that fights the supernatural. You have the training and resources to deal with these threats.",moves:[{name:"Battlefield Awareness",description:"You always know what’s happening around you. Roll +Sharp."},{name:"Tactical Genius",description:"When you plan a combat situation, roll +Sharp."},{name:"Heavy Weapons",description:"You are trained in the use of heavy weapons. Roll +Tough."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."},{name:"Cool Under Pressure",description:"You can take a moment to center yourself. Roll +Cool."}],gear:["Assault rifle (3-harm close/far area)","Submachinegun (2-harm close area)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)"],ratings:["Charm +1, Cool +2, Sharp +1, Tough 0, Weird -1","Charm -1, Cool +2, Sharp +2, Tough 0, Weird 0","Charm +2, Cool +1, Sharp +2, Tough -1, Weird 0","Charm +1, Cool +1, Sharp +2, Tough 0, Weird +1"],special:"Whenever you spend a Luck point, your organization provides you with valuable resources or support."},{name:"The Spooky",description:"You have psychic or supernatural abilities, but they come with a cost. Your powers are both a blessing and a curse.",moves:[{name:"Premonitions",description:"You get premonitions of danger. Roll +Weird."},{name:"The Big Whammy",description:"You can use your powers as a weapon. Roll +Weird."},{name:"Hex",description:"You can cast hexes. Roll +Weird."},{name:"The Sight",description:"You can see the invisible, especially spirits and magical influences. Roll +Weird."},{name:"Jinx",description:"You can encourage coincidences to occur, the way you want. Roll +Weird."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Protective amulet (1-armour)","Ancient weapon (2-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your powers backfire in a dangerous way."},{name:"The Wronged",description:"You have suffered at the hands of the supernatural, and now you seek revenge. You are driven by anger and a need for justice.",moves:[{name:"I Know My Prey",description:"You have learned about your prey through personal experience. Roll +Sharp."},{name:"Berserk",description:"When you are enraged, you can fight without any concern for your own safety. Roll +Tough."},{name:"NEVER AGAIN",description:"In combat, you may choose to protect someone without rolling. Roll +Tough."},{name:"What Does Not Kill Me…",description:"If you survive an injury, you gain +1 forward. Roll +Cool."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Hunting rifle (2-harm far loud)","Shotgun (3-harm close messy)","Big knife (1-harm hand)","Baseball bat (1-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, you are driven to a reckless course of action."}],oR={name:"Profile",data(){return{profile:{name:"",age:"",background:"",playbook:""},playbooks:rR,selectedPlaybook:null,db:null,userId:localStorage.getItem("motw-uid")}},created(){this.app=yt(xt.firebaseConfig),this.db=gt(this.app),this.fetchProfile()},methods:{fetchProfile(){const t=Ne(this.db,"profiles/"+this.userId);mo(t).then(e=>{e.exists()?(this.profile=e.val(),this.selectPlaybook()):console.log("No profile data available")}).catch(e=>{console.error("Error fetching profile:",e)})},saveProfile(){const t=Ne(this.db,"profiles/"+this.userId);Vi(t,this.profile).catch(e=>{console.error("Error saving profile:",e)})},selectPlaybook(){this.selectedPlaybook=this.playbooks.find(t=>t.name===this.profile.playbook)}}},Dt=t=>(At("data-v-4bd34038"),t=t(),Nt(),t),aR={class:"profile"},lR=Dt(()=>m("h1",null,"Hunter Profile",-1)),cR={class:"form-group"},uR=Dt(()=>m("label",{for:"name"},"Name:",-1)),hR={class:"form-group"},dR=Dt(()=>m("label",{for:"age"},"Age:",-1)),fR={class:"form-group"},pR=Dt(()=>m("label",{for:"background"},"Background:",-1)),_R={class:"form-group"},mR=Dt(()=>m("label",{for:"playbook"},"Playbook:",-1)),gR=["value"],yR={key:0},vR={class:"playbook-details"},wR=Dt(()=>m("h3",null,"Moves:",-1)),ER=Dt(()=>m("h3",null,"Gear:",-1)),CR=Dt(()=>m("h3",null,"Ratings:",-1)),bR=Dt(()=>m("h3",null,"Special:",-1)),IR=Dt(()=>m("button",{type:"submit"},"Save Profile",-1));function SR(t,e,n,s,i,r){return L(),F("div",aR,[lR,m("form",{onSubmit:e[5]||(e[5]=Vn((...o)=>r.saveProfile&&r.saveProfile(...o),["prevent"]))},[m("div",cR,[uR,ne(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.profile.name=o),id:"name",required:""},null,512),[[ae,i.profile.name]])]),m("div",hR,[dR,ne(m("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=o=>i.profile.age=o),id:"age",required:""},null,512),[[ae,i.profile.age]])]),m("div",fR,[pR,ne(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.profile.background=o),id:"background",required:""},null,512),[[ae,i.profile.background]])]),m("div",_R,[mR,ne(m("select",{"onUpdate:modelValue":e[3]||(e[3]=o=>i.profile.playbook=o),id:"playbook",onChange:e[4]||(e[4]=(...o)=>r.selectPlaybook&&r.selectPlaybook(...o))},[(L(!0),F(Ae,null,Ft(i.playbooks,o=>(L(),F("option",{key:o.name,value:o.name},te(o.name),9,gR))),128))],544),[[Ym,i.profile.playbook]])]),i.selectedPlaybook?(L(),F("div",yR,[m("div",vR,[m("h2",null,te(i.selectedPlaybook.name),1),m("p",null,te(i.selectedPlaybook.description),1),wR,m("ul",null,[(L(!0),F(Ae,null,Ft(i.selectedPlaybook.moves,o=>(L(),F("li",{key:o.name},[m("strong",null,te(o.name),1),Ue(": "+te(o.description),1)]))),128))]),ER,m("ul",null,[(L(!0),F(Ae,null,Ft(i.selectedPlaybook.gear,o=>(L(),F("li",{key:o},te(o),1))),128))]),CR,m("ul",null,[(L(!0),F(Ae,null,Ft(i.selectedPlaybook.ratings,o=>(L(),F("li",{key:o},te(o),1))),128))]),bR,m("p",null,te(i.selectedPlaybook.special),1)])])):ge("",!0),IR],32)])}const Np=vt(oR,[["render",SR],["__scopeId","data-v-4bd34038"]]),TR={name:"Dashboard",components:{CaseFiles:Pp,Bestiary:Ap,Profile:Np}},Op=t=>(At("data-v-9bef1e0a"),t=t(),Nt(),t),RR={class:"dashboard"},PR=Op(()=>m("div",{class:"header"},[m("h1",{class:"title"},"Dashboard")],-1)),kR={class:"menu"},AR={class:"dashboard-sections"},NR={class:"dashboard-section"},OR={class:"dashboard-section"},xR={class:"dashboard-section"},DR=Op(()=>m("div",{class:"footer"},[m("p",null,"© 2024 The Night Watch")],-1));function MR(t,e,n,s,i,r){const o=ut("router-link"),a=ut("case-files"),l=ut("profile"),c=ut("bestiary");return L(),F("div",RR,[PR,m("ul",kR,[m("li",null,[se(o,{to:"/case-files"},{default:Ze(()=>[Ue("Case Files")]),_:1})]),m("li",null,[se(o,{to:"/bestiary"},{default:Ze(()=>[Ue("Bestiary")]),_:1})]),m("li",null,[se(o,{to:"/profile"},{default:Ze(()=>[Ue("Profile")]),_:1})])]),m("main",null,[m("div",AR,[m("div",NR,[se(a)]),m("div",OR,[se(l)]),m("div",xR,[se(c)])])]),DR])}const LR=vt(TR,[["render",MR],["__scopeId","data-v-9bef1e0a"]]),FR={name:"CaseDetail",props:["id"],data(){return{caseFile:null,newNote:"",newClue:{summary:"",details:"",password:""},newLocation:{name:"",description:""},isAdmin:Fe.isAdmin}},created(){this.app=yt(xt.firebaseConfig),this.db=gt(this.app),this.fetchCaseFile()},methods:{fetchCaseFile(){var t=Ne(this.db,"caseFiles/"+this.id);mo(t).then(e=>{e.exists()?(this.caseFile=e.val(),this.caseFile.notes||(this.caseFile.notes=[]),this.caseFile.clues||(this.caseFile.clues=[]),this.caseFile.locations||(this.caseFile.locations=[])):console.log("No case data available")}).catch(e=>{console.error("Error fetching case:",e)})},addNote(){var t={content:this.newNote,timestamp:Date.now()};this.caseFile.notes.push(t),this.updateCaseFile(),this.newNote=""},addClue(){var t={id:Date.now().toString(),summary:this.newClue.summary,details:this.newClue.details,password:this.newClue.password,detailsVisible:!1,enteredPassword:""};this.caseFile.clues.push(t),this.updateCaseFile(),this.newClue={summary:"",details:"",password:""}},unlockClue(t){t.enteredPassword===t.password?t.detailsVisible=!0:alert("Incorrect password")},addLocation(){var t={name:this.newLocation.name,description:this.newLocation.description};this.caseFile.locations.push(t),this.updateCaseFile(),this.newLocation={name:"",description:""}},updateCaseFile(){var t=Ne(this.db,"caseFiles/"+this.id);Rp(t,this.caseFile).catch(e=>{console.error("Error updating case:",e)})}}},et=t=>(At("data-v-cacdfd12"),t=t(),Nt(),t),UR={key:0,class:"case-detail"},WR={class:"locations"},VR=et(()=>m("h2",null,"Locations",-1)),$R=et(()=>m("label",{for:"location-name"},"Location Name:",-1)),BR=et(()=>m("label",{for:"location-description"},"Location Description:",-1)),HR=et(()=>m("button",{type:"submit"},"Add Location",-1)),jR={class:"clues"},qR=et(()=>m("h2",null,"Clues",-1)),GR=["onUpdate:modelValue"],KR=["onClick"],zR={key:0},YR={key:0},QR=et(()=>m("h3",null,"Add a Clue",-1)),JR=et(()=>m("label",{for:"clue-summary"},"Clue Summary:",-1)),XR=et(()=>m("label",{for:"clue-details"},"Clue Details:",-1)),ZR=et(()=>m("label",{for:"clue-password"},"Clue Password:",-1)),e0=et(()=>m("button",{type:"submit"},"Add Clue",-1)),t0={class:"notes"},n0=et(()=>m("h2",null,"Notes",-1)),s0=et(()=>m("label",{for:"note"},"Add Note:",-1)),i0=et(()=>m("button",{type:"submit"},"Add Note",-1));function r0(t,e,n,s,i,r){const o=ut("router-link");return i.caseFile?(L(),F("div",UR,[m("h1",null,te(i.caseFile.title),1),m("p",null,te(i.caseFile.summary),1),m("p",null,te(i.caseFile.details),1),m("div",WR,[VR,m("ul",null,[(L(!0),F(Ae,null,Ft(i.caseFile.locations,a=>(L(),F("li",{key:a.name},[m("h3",null,te(a.name),1),m("p",null,te(a.description),1)]))),128))]),m("form",{onSubmit:e[2]||(e[2]=Vn((...a)=>r.addLocation&&r.addLocation(...a),["prevent"]))},[$R,ne(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>i.newLocation.name=a),id:"location-name",required:""},null,512),[[ae,i.newLocation.name]]),BR,ne(m("textarea",{"onUpdate:modelValue":e[1]||(e[1]=a=>i.newLocation.description=a),id:"location-description",required:""},null,512),[[ae,i.newLocation.description]]),HR],32)]),m("div",jR,[qR,m("ul",null,[(L(!0),F(Ae,null,Ft(i.caseFile.clues,a=>(L(),F("li",{class:"clue-item",key:a.id},[m("p",null,te(a.summary),1),ne(m("input",{type:"password","onUpdate:modelValue":l=>a.enteredPassword=l,placeholder:"Enter password to view clue"},null,8,GR),[[ae,a.enteredPassword]]),m("button",{onClick:l=>r.unlockClue(a)},"Unlock Clue",8,KR),a.detailsVisible?(L(),F("p",zR,te(a.details),1)):ge("",!0)]))),128))]),i.isAdmin?(L(),F("div",YR,[QR,m("form",{onSubmit:e[6]||(e[6]=Vn((...a)=>r.addClue&&r.addClue(...a),["prevent"]))},[JR,ne(m("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>i.newClue.summary=a),id:"clue-summary",required:""},null,512),[[ae,i.newClue.summary]]),XR,ne(m("textarea",{"onUpdate:modelValue":e[4]||(e[4]=a=>i.newClue.details=a),id:"clue-details",required:""},null,512),[[ae,i.newClue.details]]),ZR,ne(m("input",{type:"password","onUpdate:modelValue":e[5]||(e[5]=a=>i.newClue.password=a),id:"clue-password",required:""},null,512),[[ae,i.newClue.password]]),e0],32)])):ge("",!0)]),m("div",t0,[n0,m("ul",null,[(L(!0),F(Ae,null,Ft(i.caseFile.notes,a=>(L(),F("li",{key:a.timestamp},te(a.content)+" ("+te(new Date(a.timestamp).toLocaleString())+") ",1))),128))]),m("form",{onSubmit:e[8]||(e[8]=Vn((...a)=>r.addNote&&r.addNote(...a),["prevent"]))},[s0,ne(m("textarea",{"onUpdate:modelValue":e[7]||(e[7]=a=>i.newNote=a),id:"note",required:""},null,512),[[ae,i.newNote]]),i0],32)]),se(o,{to:"/case-files"},{default:Ze(()=>[Ue("Back to Case Files")]),_:1})])):ge("",!0)}const o0=vt(FR,[["render",r0],["__scopeId","data-v-cacdfd12"]]),a0={name:"Acquisitions"},l0=t=>(At("data-v-25399de4"),t=t(),Nt(),t),c0={class:"acquisitions"},u0=l0(()=>m("h1",null,"Acquisitions",-1)),h0=[u0];function d0(t,e,n,s,i,r){return L(),F("div",c0,h0)}const f0=vt(a0,[["render",d0],["__scopeId","data-v-25399de4"]]),p0=[{path:"/",name:"Home",component:uC},{path:"/login",name:"Login",component:LS},{path:"/dashboard",name:"Dashboard",component:LR},{path:"/case-files",name:"CaseFiles",component:Pp},{path:"/case-files/:id",name:"CaseDetail",component:o0,props:!0},{path:"/acquisitions",name:"Acquisitions",component:f0},{path:"/profile",name:"Profile",component:Np},{path:"/bestiary",name:"Bestiary",component:Ap}],_0=sC({history:OE(),routes:p0});eg(tE).use(_0).mount("#app");
