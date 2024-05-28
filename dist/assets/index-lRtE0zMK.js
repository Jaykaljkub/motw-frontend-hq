(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function na(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const ce={},jn=[],ze=()=>{},Xf=()=>!1,gr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),sa=t=>t.startsWith("onUpdate:"),Te=Object.assign,ia=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zf=Object.prototype.hasOwnProperty,Q=(t,e)=>Zf.call(t,e),H=Array.isArray,qn=t=>mr(t)==="[object Map]",bu=t=>mr(t)==="[object Set]",j=t=>typeof t=="function",me=t=>typeof t=="string",On=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Tu=t=>(he(t)||j(t))&&j(t.then)&&j(t.catch),Su=Object.prototype.toString,mr=t=>Su.call(t),ep=t=>mr(t).slice(8,-1),Ru=t=>mr(t)==="[object Object]",ra=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ps=na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tp=/-(\w)/g,mt=vr(t=>t.replace(tp,(e,n)=>n?n.toUpperCase():"")),np=/\B([A-Z])/g,cs=vr(t=>t.replace(np,"-$1").toLowerCase()),yr=vr(t=>t.charAt(0).toUpperCase()+t.slice(1)),qr=vr(t=>t?`on${yr(t)}`:""),tn=(t,e)=>!Object.is(t,e),ki=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pu=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Eo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ml;const Au=()=>ml||(ml=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oa(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=me(s)?op(s):oa(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(me(t)||he(t))return t}const sp=/;(?![^(]*\))/g,ip=/:([^]+)/,rp=/\/\*[^]*?\*\//g;function op(t){const e={};return t.replace(rp,"").split(sp).forEach(n=>{if(n){const s=n.split(ip);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function aa(t){let e="";if(me(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=aa(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ap="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lp=na(ap);function Nu(t){return!!t||t===""}const As=t=>me(t)?t:t==null?"":H(t)||he(t)&&(t.toString===Su||!j(t.toString))?JSON.stringify(t,ku,2):String(t),ku=(t,e)=>e&&e.__v_isRef?ku(t,e.value):qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Gr(s,r)+" =>"]=i,n),{})}:bu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Gr(n))}:On(e)?Gr(e):he(e)&&!H(e)&&!Ru(e)?String(e):e,Gr=(t,e="")=>{var n;return On(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Je;class cp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Je,!e&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Je;try{return Je=this,e()}finally{Je=n}}}on(){Je=this}off(){Je=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function up(t,e=Je){e&&e.active&&e.effects.push(t)}function hp(){return Je}let In;class la{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,up(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,on();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(dp(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),an()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=zt,n=In;try{return zt=!0,In=this,this._runnings++,vl(this),this.fn()}finally{yl(this),this._runnings--,In=n,zt=e}}stop(){this.active&&(vl(this),yl(this),this.onStop&&this.onStop(),this.active=!1)}}function dp(t){return t.value}function vl(t){t._trackId++,t._depsLength=0}function yl(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ou(t.deps[e],t);t.deps.length=t._depsLength}}function Ou(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let zt=!0,wo=0;const xu=[];function on(){xu.push(zt),zt=!1}function an(){const t=xu.pop();zt=t===void 0?!0:t}function ca(){wo++}function ua(){for(wo--;!wo&&Io.length;)Io.shift()()}function Du(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Ou(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Io=[];function Mu(t,e,n){ca();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Io.push(s.scheduler)))}ua()}const Lu=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Co=new WeakMap,Cn=Symbol(""),bo=Symbol("");function Ve(t,e,n){if(zt&&In){let s=Co.get(t);s||Co.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Lu(()=>s.delete(n))),Du(In,i)}}function Tt(t,e,n,s,i,r){const o=Co.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!On(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?ra(n)&&a.push(o.get("length")):(a.push(o.get(Cn)),qn(t)&&a.push(o.get(bo)));break;case"delete":H(t)||(a.push(o.get(Cn)),qn(t)&&a.push(o.get(bo)));break;case"set":qn(t)&&a.push(o.get(Cn));break}ca();for(const l of a)l&&Mu(l,4);ua()}const fp=na("__proto__,__v_isRef,__isVue"),Fu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(On)),El=pp();function pp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let r=0,o=this.length;r<o;r++)Ve(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){on(),ca();const s=Z(this)[e].apply(this,n);return ua(),an(),s}}),t}function _p(t){On(t)||(t=String(t));const e=Z(this);return Ve(e,"has",t),e.hasOwnProperty(t)}class Uu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Pp:Bu:r?Hu:Wu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){if(o&&Q(El,n))return Reflect.get(El,n,s);if(n==="hasOwnProperty")return _p}const a=Reflect.get(e,n,s);return(On(n)?Fu.has(n):fp(n))||(i||Ve(e,"get",n),r)?a:je(a)?o&&ra(n)?a:a.value:he(a)?i?ju(a):wr(a):a}}class $u extends Uu{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Bs(r);if(!Vi(s)&&!Bs(s)&&(r=Z(r),s=Z(s)),!H(e)&&je(r)&&!je(s))return l?!1:(r.value=s,!0)}const o=H(e)&&ra(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,s,i);return e===Z(i)&&(o?tn(s,r)&&Tt(e,"set",n,s):Tt(e,"add",n,s)),a}deleteProperty(e,n){const s=Q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Tt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!On(n)||!Fu.has(n))&&Ve(e,"has",n),s}ownKeys(e){return Ve(e,"iterate",H(e)?"length":Cn),Reflect.ownKeys(e)}}class gp extends Uu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const mp=new $u,vp=new gp,yp=new $u(!0);const ha=t=>t,Er=t=>Reflect.getPrototypeOf(t);function Ii(t,e,n=!1,s=!1){t=t.__v_raw;const i=Z(t),r=Z(e);n||(tn(e,r)&&Ve(i,"get",e),Ve(i,"get",r));const{has:o}=Er(i),a=s?ha:n?pa:Vs;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ci(t,e=!1){const n=this.__v_raw,s=Z(n),i=Z(t);return e||(tn(t,i)&&Ve(s,"has",t),Ve(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function bi(t,e=!1){return t=t.__v_raw,!e&&Ve(Z(t),"iterate",Cn),Reflect.get(t,"size",t)}function wl(t){t=Z(t);const e=Z(this);return Er(e).has.call(e,t)||(e.add(t),Tt(e,"add",t,t)),this}function Il(t,e){e=Z(e);const n=Z(this),{has:s,get:i}=Er(n);let r=s.call(n,t);r||(t=Z(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?tn(e,o)&&Tt(n,"set",t,e):Tt(n,"add",t,e),this}function Cl(t){const e=Z(this),{has:n,get:s}=Er(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Tt(e,"delete",t,void 0),r}function bl(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&Tt(t,"clear",void 0,void 0),n}function Ti(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Z(o),l=e?ha:t?pa:Vs;return!t&&Ve(a,"iterate",Cn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Si(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=qn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ha:e?pa:Vs;return!e&&Ve(r,"iterate",l?bo:Cn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ft(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ep(){const t={get(r){return Ii(this,r)},get size(){return bi(this)},has:Ci,add:wl,set:Il,delete:Cl,clear:bl,forEach:Ti(!1,!1)},e={get(r){return Ii(this,r,!1,!0)},get size(){return bi(this)},has:Ci,add:wl,set:Il,delete:Cl,clear:bl,forEach:Ti(!1,!0)},n={get(r){return Ii(this,r,!0)},get size(){return bi(this,!0)},has(r){return Ci.call(this,r,!0)},add:Ft("add"),set:Ft("set"),delete:Ft("delete"),clear:Ft("clear"),forEach:Ti(!0,!1)},s={get(r){return Ii(this,r,!0,!0)},get size(){return bi(this,!0)},has(r){return Ci.call(this,r,!0)},add:Ft("add"),set:Ft("set"),delete:Ft("delete"),clear:Ft("clear"),forEach:Ti(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Si(r,!1,!1),n[r]=Si(r,!0,!1),e[r]=Si(r,!1,!0),s[r]=Si(r,!0,!0)}),[t,n,e,s]}const[wp,Ip,Cp,bp]=Ep();function da(t,e){const n=e?t?bp:Cp:t?Ip:wp;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const Tp={get:da(!1,!1)},Sp={get:da(!1,!0)},Rp={get:da(!0,!1)};const Wu=new WeakMap,Hu=new WeakMap,Bu=new WeakMap,Pp=new WeakMap;function Ap(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Np(t){return t.__v_skip||!Object.isExtensible(t)?0:Ap(ep(t))}function wr(t){return Bs(t)?t:fa(t,!1,mp,Tp,Wu)}function Vu(t){return fa(t,!1,yp,Sp,Hu)}function ju(t){return fa(t,!0,vp,Rp,Bu)}function fa(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Np(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Ns(t){return Bs(t)?Ns(t.__v_raw):!!(t&&t.__v_isReactive)}function Bs(t){return!!(t&&t.__v_isReadonly)}function Vi(t){return!!(t&&t.__v_isShallow)}function qu(t){return t?!!t.__v_raw:!1}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function kp(t){return Object.isExtensible(t)&&Pu(t,"__v_skip",!0),t}const Vs=t=>he(t)?wr(t):t,pa=t=>he(t)?ju(t):t;class Gu{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new la(()=>e(this._value),()=>Oi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Z(this);return(!e._cacheable||e.effect.dirty)&&tn(e._value,e._value=e.effect.run())&&Oi(e,4),Ku(e),e.effect._dirtyLevel>=2&&Oi(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Op(t,e,n=!1){let s,i;const r=j(t);return r?(s=t,i=ze):(s=t.get,i=t.set),new Gu(s,i,r||!i,n)}function Ku(t){var e;zt&&In&&(t=Z(t),Du(In,(e=t.dep)!=null?e:t.dep=Lu(()=>t.dep=void 0,t instanceof Gu?t:void 0)))}function Oi(t,e=4,n){t=Z(t);const s=t.dep;s&&Mu(s,e)}function je(t){return!!(t&&t.__v_isRef===!0)}function xp(t){return zu(t,!1)}function Dp(t){return zu(t,!0)}function zu(t,e){return je(t)?t:new Mp(t,e)}class Mp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:Vs(e)}get value(){return Ku(this),this._value}set value(e){const n=this.__v_isShallow||Vi(e)||Bs(e);e=n?e:Z(e),tn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Vs(e),Oi(this,4))}}function Gn(t){return je(t)?t.value:t}const Lp={get:(t,e,n)=>Gn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return je(i)&&!je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Yu(t){return Ns(t)?t:new Proxy(t,Lp)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yt(t,e,n,s){try{return s?t(...s):t()}catch(i){Ir(i,e,n)}}function st(t,e,n,s){if(j(t)){const i=Yt(t,e,n,s);return i&&Tu(i)&&i.catch(r=>{Ir(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(st(t[r],e,n,s));return i}}function Ir(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){on(),Yt(l,null,10,[t,o,a]),an();return}}Fp(t,n,i,s)}function Fp(t,e,n,s=!0){console.error(t)}let js=!1,To=!1;const Ne=[];let ft=0;const Kn=[];let Wt=null,vn=0;const Qu=Promise.resolve();let _a=null;function Ju(t){const e=_a||Qu;return t?e.then(this?t.bind(this):t):e}function Up(t){let e=ft+1,n=Ne.length;for(;e<n;){const s=e+n>>>1,i=Ne[s],r=qs(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function ga(t){(!Ne.length||!Ne.includes(t,js&&t.allowRecurse?ft+1:ft))&&(t.id==null?Ne.push(t):Ne.splice(Up(t.id),0,t),Xu())}function Xu(){!js&&!To&&(To=!0,_a=Qu.then(eh))}function $p(t){const e=Ne.indexOf(t);e>ft&&Ne.splice(e,1)}function Wp(t){H(t)?Kn.push(...t):(!Wt||!Wt.includes(t,t.allowRecurse?vn+1:vn))&&Kn.push(t),Xu()}function Tl(t,e,n=js?ft+1:0){for(;n<Ne.length;n++){const s=Ne[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ne.splice(n,1),n--,s()}}}function Zu(t){if(Kn.length){const e=[...new Set(Kn)].sort((n,s)=>qs(n)-qs(s));if(Kn.length=0,Wt){Wt.push(...e);return}for(Wt=e,vn=0;vn<Wt.length;vn++)Wt[vn]();Wt=null,vn=0}}const qs=t=>t.id==null?1/0:t.id,Hp=(t,e)=>{const n=qs(t)-qs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function eh(t){To=!1,js=!0,Ne.sort(Hp);try{for(ft=0;ft<Ne.length;ft++){const e=Ne[ft];e&&e.active!==!1&&Yt(e,null,14)}}finally{ft=0,Ne.length=0,Zu(),js=!1,_a=null,(Ne.length||Kn.length)&&eh()}}function Bp(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ce;d&&(i=n.map(_=>me(_)?_.trim():_)),h&&(i=n.map(Eo))}let a,l=s[a=qr(e)]||s[a=qr(mt(e))];!l&&r&&(l=s[a=qr(cs(e))]),l&&st(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,st(c,t,6,i)}}function th(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!j(t)){const l=c=>{const u=th(c,e,!0);u&&(a=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(he(t)&&s.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):Te(o,r),he(t)&&s.set(t,o),o)}function Cr(t,e){return!t||!gr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,cs(e))||Q(t,e))}let We=null,br=null;function ji(t){const e=We;return We=t,br=t&&t.type.__scopeId||null,e}function ln(t){br=t}function cn(){br=null}function Me(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ll(-1);const r=ji(e);let o;try{o=t(...i)}finally{ji(r),s._d&&Ll(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Kr(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:m,inheritAttrs:T}=t,x=ji(t);let k,O;try{if(n.shapeFlag&4){const Y=i||s,de=Y;k=dt(c.call(de,Y,u,h,_,d,m)),O=a}else{const Y=e;k=dt(Y.length>1?Y(h,{attrs:a,slots:o,emit:l}):Y(h,null)),O=e.props?a:Vp(a)}}catch(Y){xs.length=0,Ir(Y,t,1),k=re(bn)}let U=k;if(O&&T!==!1){const Y=Object.keys(O),{shapeFlag:de}=U;Y.length&&de&7&&(r&&Y.some(sa)&&(O=jp(O,r)),U=ts(U,O,!1,!0))}return n.dirs&&(U=ts(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),k=U,ji(x),k}const Vp=t=>{let e;for(const n in t)(n==="class"||n==="style"||gr(n))&&((e||(e={}))[n]=t[n]);return e},jp=(t,e)=>{const n={};for(const s in t)(!sa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function qp(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Sl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Cr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Sl(s,o,c):!0:!!o;return!1}function Sl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Cr(n,r))return!0}return!1}function Gp({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const nh="components";function Gs(t,e){return zp(nh,t,!0,e)||t}const Kp=Symbol.for("v-ndc");function zp(t,e,n=!0,s=!1){const i=We||ke;if(i){const r=i.type;if(t===nh){const a=V_(r,!1);if(a&&(a===e||a===mt(e)||a===yr(mt(e))))return r}const o=Rl(i[t]||r[t],e)||Rl(i.appContext[t],e);return!o&&s?r:o}}function Rl(t,e){return t&&(t[e]||t[mt(e)]||t[yr(mt(e))])}const Yp=t=>t.__isSuspense;function Qp(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Wp(t)}const Jp=Symbol.for("v-scx"),Xp=()=>St(Jp),Ri={};function xi(t,e,n){return sh(t,e,n)}function sh(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=ce){if(e&&r){const B=e;e=(...ve)=>{B(...ve),de()}}const l=ke,c=B=>s===!0?B:yn(B,s===!1?1:void 0);let u,h=!1,d=!1;if(je(t)?(u=()=>t.value,h=Vi(t)):Ns(t)?(u=()=>c(t),h=!0):H(t)?(d=!0,h=t.some(B=>Ns(B)||Vi(B)),u=()=>t.map(B=>{if(je(B))return B.value;if(Ns(B))return c(B);if(j(B))return Yt(B,l,2)})):j(t)?e?u=()=>Yt(t,l,2):u=()=>(_&&_(),st(t,l,3,[m])):u=ze,e&&s){const B=u;u=()=>yn(B())}let _,m=B=>{_=U.onStop=()=>{Yt(B,l,4),_=U.onStop=void 0}},T;if(Rr)if(m=ze,e?n&&st(e,l,3,[u(),d?[]:void 0,m]):u(),i==="sync"){const B=Xp();T=B.__watcherHandles||(B.__watcherHandles=[])}else return ze;let x=d?new Array(t.length).fill(Ri):Ri;const k=()=>{if(!(!U.active||!U.dirty))if(e){const B=U.run();(s||h||(d?B.some((ve,Fe)=>tn(ve,x[Fe])):tn(B,x)))&&(_&&_(),st(e,l,3,[B,x===Ri?void 0:d&&x[0]===Ri?[]:x,m]),x=B)}else U.run()};k.allowRecurse=!!e;let O;i==="sync"?O=k:i==="post"?O=()=>$e(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),O=()=>ga(k));const U=new la(u,ze,O),Y=hp(),de=()=>{U.stop(),Y&&ia(Y.effects,U)};return e?n?k():x=U.run():i==="post"?$e(U.run.bind(U),l&&l.suspense):U.run(),T&&T.push(de),de}function Zp(t,e,n){const s=this.proxy,i=me(t)?t.includes(".")?ih(s,t):()=>s[t]:t.bind(s,s);let r;j(e)?r=e:(r=e.handler,n=e);const o=li(this),a=sh(i,r.bind(s),n);return o(),a}function ih(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function yn(t,e=1/0,n){if(e<=0||!he(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,je(t))yn(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)yn(t[s],e,n);else if(bu(t)||qn(t))t.forEach(s=>{yn(s,e,n)});else if(Ru(t))for(const s in t)yn(t[s],e,n);return t}function zn(t,e){if(We===null)return t;const n=Pr(We)||We.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=ce]=e[i];r&&(j(r)&&(r={mounted:r,updated:r}),r.deep&&yn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function pn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(on(),st(l,n,8,[t.el,a,t,e]),an())}}/*! #__NO_SIDE_EFFECTS__ */function rh(t,e){return j(t)?Te({name:t.name},e,{setup:t}):t}const Di=t=>!!t.type.__asyncLoader,oh=t=>t.type.__isKeepAlive;function e_(t,e){ah(t,"a",e)}function t_(t,e){ah(t,"da",e)}function ah(t,e,n=ke){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Tr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)oh(i.parent.vnode)&&n_(s,e,n,i),i=i.parent}}function n_(t,e,n,s){const i=Tr(e,t,s,!0);lh(()=>{ia(s[e],i)},n)}function Tr(t,e,n=ke,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;on();const a=li(n),l=st(e,n,t,o);return a(),an(),l});return s?i.unshift(r):i.push(r),r}}const kt=t=>(e,n=ke)=>(!Rr||t==="sp")&&Tr(t,(...s)=>e(...s),n),s_=kt("bm"),i_=kt("m"),r_=kt("bu"),o_=kt("u"),a_=kt("bum"),lh=kt("um"),l_=kt("sp"),c_=kt("rtg"),u_=kt("rtc");function h_(t,e=ke){Tr("ec",t,e)}function d_(t,e,n,s){let i;const r=n;if(H(t)||me(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r)}}else i=[];return i}const So=t=>t?Ch(t)?Pr(t)||t.proxy:So(t.parent):null,ks=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>So(t.parent),$root:t=>So(t.root),$emit:t=>t.emit,$options:t=>ma(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ga(t.update)}),$nextTick:t=>t.n||(t.n=Ju.bind(t.proxy)),$watch:t=>Zp.bind(t)}),zr=(t,e)=>t!==ce&&!t.__isScriptSetup&&Q(t,e),f_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(zr(s,e))return o[e]=1,s[e];if(i!==ce&&Q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,r[e];if(n!==ce&&Q(n,e))return o[e]=4,n[e];Ro&&(o[e]=0)}}const u=ks[e];let h,d;if(u)return e==="$attrs"&&Ve(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ce&&Q(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return zr(i,e)?(i[e]=n,!0):s!==ce&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ce&&Q(t,o)||zr(e,o)||(a=r[0])&&Q(a,o)||Q(s,o)||Q(ks,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pl(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ro=!0;function p_(t){const e=ma(t),n=t.proxy,s=t.ctx;Ro=!1,e.beforeCreate&&Al(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:T,deactivated:x,beforeDestroy:k,beforeUnmount:O,destroyed:U,unmounted:Y,render:de,renderTracked:B,renderTriggered:ve,errorCaptured:Fe,serverPrefetch:Ye,expose:Ke,inheritAttrs:Mt,components:fn,directives:at,filters:ms}=e;if(c&&__(c,s,null),o)for(const ne in o){const X=o[ne];j(X)&&(s[ne]=X.bind(n))}if(i){const ne=i.call(n,n);he(ne)&&(t.data=wr(ne))}if(Ro=!0,r)for(const ne in r){const X=r[ne],yt=j(X)?X.bind(n,n):j(X.get)?X.get.bind(n,n):ze,Lt=!j(X)&&j(X.set)?X.set.bind(n):ze,lt=Xe({get:yt,set:Lt});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Ue=>lt.value=Ue})}if(a)for(const ne in a)ch(a[ne],s,n,ne);if(l){const ne=j(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(X=>{Mi(X,ne[X])})}u&&Al(u,t,"c");function ye(ne,X){H(X)?X.forEach(yt=>ne(yt.bind(n))):X&&ne(X.bind(n))}if(ye(s_,h),ye(i_,d),ye(r_,_),ye(o_,m),ye(e_,T),ye(t_,x),ye(h_,Fe),ye(u_,B),ye(c_,ve),ye(a_,O),ye(lh,Y),ye(l_,Ye),H(Ke))if(Ke.length){const ne=t.exposed||(t.exposed={});Ke.forEach(X=>{Object.defineProperty(ne,X,{get:()=>n[X],set:yt=>n[X]=yt})})}else t.exposed||(t.exposed={});de&&t.render===ze&&(t.render=de),Mt!=null&&(t.inheritAttrs=Mt),fn&&(t.components=fn),at&&(t.directives=at)}function __(t,e,n=ze){H(t)&&(t=Po(t));for(const s in t){const i=t[s];let r;he(i)?"default"in i?r=St(i.from||s,i.default,!0):r=St(i.from||s):r=St(i),je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Al(t,e,n){st(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ch(t,e,n,s){const i=s.includes(".")?ih(n,s):()=>n[s];if(me(t)){const r=e[t];j(r)&&xi(i,r)}else if(j(t))xi(i,t.bind(n));else if(he(t))if(H(t))t.forEach(r=>ch(r,e,n,s));else{const r=j(t.handler)?t.handler.bind(n):e[t.handler];j(r)&&xi(i,r,t)}}function ma(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>qi(l,c,o,!0)),qi(l,e,o)),he(e)&&r.set(e,l),l}function qi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qi(t,r,n,!0),i&&i.forEach(o=>qi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=g_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const g_={data:Nl,props:kl,emits:kl,methods:Ts,computed:Ts,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Ts,directives:Ts,watch:v_,provide:Nl,inject:m_};function Nl(t,e){return e?t?function(){return Te(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function m_(t,e){return Ts(Po(t),Po(e))}function Po(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function De(t,e){return t?[...new Set([].concat(t,e))]:e}function Ts(t,e){return t?Te(Object.create(null),t,e):e}function kl(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Te(Object.create(null),Pl(t),Pl(e??{})):e}function v_(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=De(t[s],e[s]);return n}function uh(){return{app:null,config:{isNativeTag:Xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let y_=0;function E_(t,e){return function(s,i=null){j(s)||(s=Te({},s)),i!=null&&!he(i)&&(i=null);const r=uh(),o=new WeakSet;let a=!1;const l=r.app={_uid:y_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:q_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...u)):j(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=re(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Pr(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Os;Os=l;try{return c()}finally{Os=u}}};return l}}let Os=null;function Mi(t,e){if(ke){let n=ke.provides;const s=ke.parent&&ke.parent.provides;s===n&&(n=ke.provides=Object.create(s)),n[t]=e}}function St(t,e,n=!1){const s=ke||We;if(s||Os){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Os._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&j(e)?e.call(s&&s.proxy):e}}const hh={},dh=()=>Object.create(hh),fh=t=>Object.getPrototypeOf(t)===hh;function w_(t,e,n,s=!1){const i={},r=dh();t.propsDefaults=Object.create(null),ph(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Vu(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function I_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Z(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Cr(t.emitsOptions,d))continue;const _=e[d];if(l)if(Q(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=mt(d);i[m]=Ao(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{ph(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Q(e,h)&&((u=cs(h))===h||!Q(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ao(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Q(e,h))&&(delete r[h],c=!0)}c&&Tt(t.attrs,"set","")}function ph(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ps(l))continue;const c=e[l];let u;i&&Q(i,u=mt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Cr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Z(n),c=a||ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ao(i,l,h,c[h],t,!Q(c,h))}}return o}function Ao(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=li(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===cs(n))&&(s=!0))}return s}function _h(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!j(t)){const u=h=>{l=!0;const[d,_]=_h(h,e,!0);Te(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return he(t)&&s.set(t,jn),jn;if(H(r))for(let u=0;u<r.length;u++){const h=mt(r[u]);Ol(h)&&(o[h]=ce)}else if(r)for(const u in r){const h=mt(u);if(Ol(h)){const d=r[u],_=o[h]=H(d)||j(d)?{type:d}:Te({},d);if(_){const m=Ml(Boolean,_.type),T=Ml(String,_.type);_[0]=m>-1,_[1]=T<0||m<T,(m>-1||Q(_,"default"))&&a.push(h)}}}const c=[o,a];return he(t)&&s.set(t,c),c}function Ol(t){return t[0]!=="$"&&!Ps(t)}function xl(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Dl(t,e){return xl(t)===xl(e)}function Ml(t,e){return H(e)?e.findIndex(n=>Dl(n,t)):j(e)&&Dl(e,t)?0:-1}const gh=t=>t[0]==="_"||t==="$stable",va=t=>H(t)?t.map(dt):[dt(t)],C_=(t,e,n)=>{if(e._n)return e;const s=Me((...i)=>va(e(...i)),n);return s._c=!1,s},mh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(gh(i))continue;const r=t[i];if(j(r))e[i]=C_(i,r,s);else if(r!=null){const o=va(r);e[i]=()=>o}}},vh=(t,e)=>{const n=va(e);t.slots.default=()=>n},b_=(t,e)=>{const n=t.slots=dh();if(t.vnode.shapeFlag&32){const s=e._;s?(Te(n,e),Pu(n,"_",s,!0)):mh(e,n)}else e&&vh(t,e)},T_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Te(i,e),!n&&a===1&&delete i._):(r=!e.$stable,mh(e,i)),o=e}else e&&(vh(t,e),o={default:1});if(r)for(const a in i)!gh(a)&&o[a]==null&&delete i[a]};function No(t,e,n,s,i=!1){if(H(t)){t.forEach((d,_)=>No(d,e&&(H(e)?e[_]:e),n,s,i));return}if(Di(s)&&!i)return;const r=s.shapeFlag&4?Pr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ce?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(me(c)?(u[c]=null,Q(h,c)&&(h[c]=null)):je(c)&&(c.value=null)),j(l))Yt(l,a,12,[o,u]);else{const d=me(l),_=je(l);if(d||_){const m=()=>{if(t.f){const T=d?Q(h,l)?h[l]:u[l]:l.value;i?H(T)&&ia(T,r):H(T)?T.includes(r)||T.push(r):d?(u[l]=[r],Q(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Q(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,$e(m,n)):m()}}}const $e=Qp;function S_(t){return R_(t)}function R_(t,e){const n=Au();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=ze,insertStaticContent:m}=t,T=(f,p,g,E=null,v=null,b=null,P=void 0,I=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!ys(f,p)&&(E=y(f),Ue(f,v,b,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:w,ref:N,shapeFlag:F}=p;switch(w){case Sr:x(f,p,g,E);break;case bn:k(f,p,g,E);break;case Qr:f==null&&O(p,g,E,P);break;case ht:fn(f,p,g,E,v,b,P,I,S);break;default:F&1?de(f,p,g,E,v,b,P,I,S):F&6?at(f,p,g,E,v,b,P,I,S):(F&64||F&128)&&w.process(f,p,g,E,v,b,P,I,S,D)}N!=null&&v&&No(N,f&&f.ref,b,p||f,!p)},x=(f,p,g,E)=>{if(f==null)s(p.el=a(p.children),g,E);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},k=(f,p,g,E)=>{f==null?s(p.el=l(p.children||""),g,E):p.el=f.el},O=(f,p,g,E)=>{[f.el,f.anchor]=m(f.children,p,g,E,f.el,f.anchor)},U=({el:f,anchor:p},g,E)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,E),f=v;s(p,g,E)},Y=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},de=(f,p,g,E,v,b,P,I,S)=>{p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),f==null?B(p,g,E,v,b,P,I,S):Ye(f,p,v,b,P,I,S)},B=(f,p,g,E,v,b,P,I)=>{let S,w;const{props:N,shapeFlag:F,transition:L,dirs:V}=f;if(S=f.el=o(f.type,b,N&&N.is,N),F&8?u(S,f.children):F&16&&Fe(f.children,S,null,E,v,Yr(f,b),P,I),V&&pn(f,null,E,"created"),ve(S,f,f.scopeId,P,E),N){for(const se in N)se!=="value"&&!Ps(se)&&r(S,se,null,N[se],b,f.children,E,v,Re);"value"in N&&r(S,"value",null,N.value,b),(w=N.onVnodeBeforeMount)&&ut(w,E,f)}V&&pn(f,null,E,"beforeMount");const K=P_(v,L);K&&L.beforeEnter(S),s(S,p,g),((w=N&&N.onVnodeMounted)||K||V)&&$e(()=>{w&&ut(w,E,f),K&&L.enter(S),V&&pn(f,null,E,"mounted")},v)},ve=(f,p,g,E,v)=>{if(g&&_(f,g),E)for(let b=0;b<E.length;b++)_(f,E[b]);if(v){let b=v.subTree;if(p===b){const P=v.vnode;ve(f,P,P.scopeId,P.slotScopeIds,v.parent)}}},Fe=(f,p,g,E,v,b,P,I,S=0)=>{for(let w=S;w<f.length;w++){const N=f[w]=I?Ht(f[w]):dt(f[w]);T(null,N,p,g,E,v,b,P,I)}},Ye=(f,p,g,E,v,b,P)=>{const I=p.el=f.el;let{patchFlag:S,dynamicChildren:w,dirs:N}=p;S|=f.patchFlag&16;const F=f.props||ce,L=p.props||ce;let V;if(g&&_n(g,!1),(V=L.onVnodeBeforeUpdate)&&ut(V,g,p,f),N&&pn(p,f,g,"beforeUpdate"),g&&_n(g,!0),w?Ke(f.dynamicChildren,w,I,g,E,Yr(p,v),b):P||X(f,p,I,null,g,E,Yr(p,v),b,!1),S>0){if(S&16)Mt(I,p,F,L,g,E,v);else if(S&2&&F.class!==L.class&&r(I,"class",null,L.class,v),S&4&&r(I,"style",F.style,L.style,v),S&8){const K=p.dynamicProps;for(let se=0;se<K.length;se++){const ue=K[se],Ee=F[ue],Qe=L[ue];(Qe!==Ee||ue==="value")&&r(I,ue,Ee,Qe,v,f.children,g,E,Re)}}S&1&&f.children!==p.children&&u(I,p.children)}else!P&&w==null&&Mt(I,p,F,L,g,E,v);((V=L.onVnodeUpdated)||N)&&$e(()=>{V&&ut(V,g,p,f),N&&pn(p,f,g,"updated")},E)},Ke=(f,p,g,E,v,b,P)=>{for(let I=0;I<p.length;I++){const S=f[I],w=p[I],N=S.el&&(S.type===ht||!ys(S,w)||S.shapeFlag&70)?h(S.el):g;T(S,w,N,null,E,v,b,P,!0)}},Mt=(f,p,g,E,v,b,P)=>{if(g!==E){if(g!==ce)for(const I in g)!Ps(I)&&!(I in E)&&r(f,I,g[I],null,P,p.children,v,b,Re);for(const I in E){if(Ps(I))continue;const S=E[I],w=g[I];S!==w&&I!=="value"&&r(f,I,w,S,P,p.children,v,b,Re)}"value"in E&&r(f,"value",g.value,E.value,P)}},fn=(f,p,g,E,v,b,P,I,S)=>{const w=p.el=f?f.el:a(""),N=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:L,slotScopeIds:V}=p;V&&(I=I?I.concat(V):V),f==null?(s(w,g,E),s(N,g,E),Fe(p.children||[],g,N,v,b,P,I,S)):F>0&&F&64&&L&&f.dynamicChildren?(Ke(f.dynamicChildren,L,g,v,b,P,I),(p.key!=null||v&&p===v.subTree)&&yh(f,p,!0)):X(f,p,g,N,v,b,P,I,S)},at=(f,p,g,E,v,b,P,I,S)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?v.ctx.activate(p,g,E,P,S):ms(p,g,E,v,b,P,S):Mn(f,p,S)},ms=(f,p,g,E,v,b,P)=>{const I=f.component=U_(f,E,v);if(oh(f)&&(I.ctx.renderer=D),$_(I),I.asyncDep){if(v&&v.registerDep(I,ye),!f.el){const S=I.subTree=re(bn);k(null,S,p,g)}}else ye(I,f,p,g,v,b,P)},Mn=(f,p,g)=>{const E=p.component=f.component;if(qp(f,p,g))if(E.asyncDep&&!E.asyncResolved){ne(E,p,g);return}else E.next=p,$p(E.update),E.effect.dirty=!0,E.update();else p.el=f.el,E.vnode=p},ye=(f,p,g,E,v,b,P)=>{const I=()=>{if(f.isMounted){let{next:N,bu:F,u:L,parent:V,vnode:K}=f;{const Un=Eh(f);if(Un){N&&(N.el=K.el,ne(f,N,P)),Un.asyncDep.then(()=>{f.isUnmounted||I()});return}}let se=N,ue;_n(f,!1),N?(N.el=K.el,ne(f,N,P)):N=K,F&&ki(F),(ue=N.props&&N.props.onVnodeBeforeUpdate)&&ut(ue,V,N,K),_n(f,!0);const Ee=Kr(f),Qe=f.subTree;f.subTree=Ee,T(Qe,Ee,h(Qe.el),y(Qe),f,v,b),N.el=Ee.el,se===null&&Gp(f,Ee.el),L&&$e(L,v),(ue=N.props&&N.props.onVnodeUpdated)&&$e(()=>ut(ue,V,N,K),v)}else{let N;const{el:F,props:L}=p,{bm:V,m:K,parent:se}=f,ue=Di(p);if(_n(f,!1),V&&ki(V),!ue&&(N=L&&L.onVnodeBeforeMount)&&ut(N,se,p),_n(f,!0),F&&fe){const Ee=()=>{f.subTree=Kr(f),fe(F,f.subTree,f,v,null)};ue?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ee()):Ee()}else{const Ee=f.subTree=Kr(f);T(null,Ee,g,E,f,v,b),p.el=Ee.el}if(K&&$e(K,v),!ue&&(N=L&&L.onVnodeMounted)){const Ee=p;$e(()=>ut(N,se,Ee),v)}(p.shapeFlag&256||se&&Di(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&$e(f.a,v),f.isMounted=!0,p=g=E=null}},S=f.effect=new la(I,ze,()=>ga(w),f.scope),w=f.update=()=>{S.dirty&&S.run()};w.id=f.uid,_n(f,!0),w()},ne=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,I_(f,p.props,E,g),T_(f,p.children,g),on(),Tl(f),an()},X=(f,p,g,E,v,b,P,I,S=!1)=>{const w=f&&f.children,N=f?f.shapeFlag:0,F=p.children,{patchFlag:L,shapeFlag:V}=p;if(L>0){if(L&128){Lt(w,F,g,E,v,b,P,I,S);return}else if(L&256){yt(w,F,g,E,v,b,P,I,S);return}}V&8?(N&16&&Re(w,v,b),F!==w&&u(g,F)):N&16?V&16?Lt(w,F,g,E,v,b,P,I,S):Re(w,v,b,!0):(N&8&&u(g,""),V&16&&Fe(F,g,E,v,b,P,I,S))},yt=(f,p,g,E,v,b,P,I,S)=>{f=f||jn,p=p||jn;const w=f.length,N=p.length,F=Math.min(w,N);let L;for(L=0;L<F;L++){const V=p[L]=S?Ht(p[L]):dt(p[L]);T(f[L],V,g,null,v,b,P,I,S)}w>N?Re(f,v,b,!0,!1,F):Fe(p,g,E,v,b,P,I,S,F)},Lt=(f,p,g,E,v,b,P,I,S)=>{let w=0;const N=p.length;let F=f.length-1,L=N-1;for(;w<=F&&w<=L;){const V=f[w],K=p[w]=S?Ht(p[w]):dt(p[w]);if(ys(V,K))T(V,K,g,null,v,b,P,I,S);else break;w++}for(;w<=F&&w<=L;){const V=f[F],K=p[L]=S?Ht(p[L]):dt(p[L]);if(ys(V,K))T(V,K,g,null,v,b,P,I,S);else break;F--,L--}if(w>F){if(w<=L){const V=L+1,K=V<N?p[V].el:E;for(;w<=L;)T(null,p[w]=S?Ht(p[w]):dt(p[w]),g,K,v,b,P,I,S),w++}}else if(w>L)for(;w<=F;)Ue(f[w],v,b,!0),w++;else{const V=w,K=w,se=new Map;for(w=K;w<=L;w++){const Ge=p[w]=S?Ht(p[w]):dt(p[w]);Ge.key!=null&&se.set(Ge.key,w)}let ue,Ee=0;const Qe=L-K+1;let Un=!1,pl=0;const vs=new Array(Qe);for(w=0;w<Qe;w++)vs[w]=0;for(w=V;w<=F;w++){const Ge=f[w];if(Ee>=Qe){Ue(Ge,v,b,!0);continue}let ct;if(Ge.key!=null)ct=se.get(Ge.key);else for(ue=K;ue<=L;ue++)if(vs[ue-K]===0&&ys(Ge,p[ue])){ct=ue;break}ct===void 0?Ue(Ge,v,b,!0):(vs[ct-K]=w+1,ct>=pl?pl=ct:Un=!0,T(Ge,p[ct],g,null,v,b,P,I,S),Ee++)}const _l=Un?A_(vs):jn;for(ue=_l.length-1,w=Qe-1;w>=0;w--){const Ge=K+w,ct=p[Ge],gl=Ge+1<N?p[Ge+1].el:E;vs[w]===0?T(null,ct,g,gl,v,b,P,I,S):Un&&(ue<0||w!==_l[ue]?lt(ct,g,gl,2):ue--)}}},lt=(f,p,g,E,v=null)=>{const{el:b,type:P,transition:I,children:S,shapeFlag:w}=f;if(w&6){lt(f.component.subTree,p,g,E);return}if(w&128){f.suspense.move(p,g,E);return}if(w&64){P.move(f,p,g,D);return}if(P===ht){s(b,p,g);for(let F=0;F<S.length;F++)lt(S[F],p,g,E);s(f.anchor,p,g);return}if(P===Qr){U(f,p,g);return}if(E!==2&&w&1&&I)if(E===0)I.beforeEnter(b),s(b,p,g),$e(()=>I.enter(b),v);else{const{leave:F,delayLeave:L,afterLeave:V}=I,K=()=>s(b,p,g),se=()=>{F(b,()=>{K(),V&&V()})};L?L(b,K,se):se()}else s(b,p,g)},Ue=(f,p,g,E=!1,v=!1)=>{const{type:b,props:P,ref:I,children:S,dynamicChildren:w,shapeFlag:N,patchFlag:F,dirs:L}=f;if(I!=null&&No(I,null,g,f,!0),N&256){p.ctx.deactivate(f);return}const V=N&1&&L,K=!Di(f);let se;if(K&&(se=P&&P.onVnodeBeforeUnmount)&&ut(se,p,f),N&6)wi(f.component,g,E);else{if(N&128){f.suspense.unmount(g,E);return}V&&pn(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,g,v,D,E):w&&(b!==ht||F>0&&F&64)?Re(w,p,g,!1,!0):(b===ht&&F&384||!v&&N&16)&&Re(S,p,g),E&&Ln(f)}(K&&(se=P&&P.onVnodeUnmounted)||V)&&$e(()=>{se&&ut(se,p,f),V&&pn(f,null,p,"unmounted")},g)},Ln=f=>{const{type:p,el:g,anchor:E,transition:v}=f;if(p===ht){Fn(g,E);return}if(p===Qr){Y(f);return}const b=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:I}=v,S=()=>P(g,b);I?I(f.el,b,S):S()}else b()},Fn=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},wi=(f,p,g)=>{const{bum:E,scope:v,update:b,subTree:P,um:I}=f;E&&ki(E),v.stop(),b&&(b.active=!1,Ue(P,f,p,g)),I&&$e(I,p),$e(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Re=(f,p,g,E=!1,v=!1,b=0)=>{for(let P=b;P<f.length;P++)Ue(f[P],p,g,E,v)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let A=!1;const R=(f,p,g)=>{f==null?p._vnode&&Ue(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,g),A||(A=!0,Tl(),Zu(),A=!1),p._vnode=f},D={p:T,um:Ue,m:lt,r:Ln,mt:ms,mc:Fe,pc:X,pbc:Ke,n:y,o:t};let ee,fe;return{render:R,hydrate:ee,createApp:E_(R,ee)}}function Yr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function P_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yh(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Ht(i[r]),a.el=o.el),n||yh(o,a)),a.type===Sr&&(a.el=o.el)}}function A_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Eh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Eh(e)}const N_=t=>t.__isTeleport,ht=Symbol.for("v-fgt"),Sr=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),Qr=Symbol.for("v-stc"),xs=[];let et=null;function Ce(t=!1){xs.push(et=t?null:[])}function k_(){xs.pop(),et=xs[xs.length-1]||null}let Ks=1;function Ll(t){Ks+=t}function wh(t){return t.dynamicChildren=Ks>0?et||jn:null,k_(),Ks>0&&et&&et.push(t),t}function Se(t,e,n,s,i,r){return wh(M(t,e,n,s,i,r,!0))}function O_(t,e,n,s,i){return wh(re(t,e,n,s,i,!0))}function ko(t){return t?t.__v_isVNode===!0:!1}function ys(t,e){return t.type===e.type&&t.key===e.key}const Ih=({key:t})=>t??null,Li=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||je(t)||j(t)?{i:We,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,s=0,i=null,r=t===ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ih(e),ref:e&&Li(e),scopeId:br,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return a?(ya(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),Ks>0&&!o&&et&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&et.push(l),l}const re=x_;function x_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Kp)&&(t=bn),ko(t)){const a=ts(t,e,!0);return n&&ya(a,n),Ks>0&&!r&&et&&(a.shapeFlag&6?et[et.indexOf(t)]=a:et.push(a)),a.patchFlag|=-2,a}if(j_(t)&&(t=t.__vccOpts),e){e=D_(e);let{class:a,style:l}=e;a&&!me(a)&&(e.class=aa(a)),he(l)&&(qu(l)&&!H(l)&&(l=Te({},l)),e.style=oa(l))}const o=me(t)?1:Yp(t)?128:N_(t)?64:he(t)?4:j(t)?2:0;return M(t,e,n,s,i,o,r,!0)}function D_(t){return t?qu(t)||fh(t)?Te({},t):t:null}function ts(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?M_(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ih(c),ref:e&&e.ref?n&&r?H(r)?r.concat(Li(e)):[r,Li(e)]:Li(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ts(t.ssContent),ssFallback:t.ssFallback&&ts(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&(u.transition=l.clone(u)),u}function Pe(t=" ",e=0){return re(Sr,null,t,e)}function Fl(t="",e=!1){return e?(Ce(),O_(bn,null,t)):re(bn,null,t)}function dt(t){return t==null||typeof t=="boolean"?re(bn):H(t)?re(ht,null,t.slice()):typeof t=="object"?Ht(t):re(Sr,null,String(t))}function Ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ts(t)}function ya(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ya(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!fh(e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[Pe(e)]):n=8);t.children=e,t.shapeFlag|=n}function M_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=aa([e.class,s.class]));else if(i==="style")e.style=oa([e.style,s.style]);else if(gr(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ut(t,e,n,s=null){st(t,e,7,[n,s])}const L_=uh();let F_=0;function U_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||L_,r={uid:F_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_h(s,i),emitsOptions:th(s,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Bp.bind(null,r),t.ce&&t.ce(r),r}let ke=null,Gi,Oo;{const t=Au(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Gi=e("__VUE_INSTANCE_SETTERS__",n=>ke=n),Oo=e("__VUE_SSR_SETTERS__",n=>Rr=n)}const li=t=>{const e=ke;return Gi(t),t.scope.on(),()=>{t.scope.off(),Gi(e)}},Ul=()=>{ke&&ke.scope.off(),Gi(null)};function Ch(t){return t.vnode.shapeFlag&4}let Rr=!1;function $_(t,e=!1){e&&Oo(e);const{props:n,children:s}=t.vnode,i=Ch(t);w_(t,n,i,e),b_(t,s);const r=i?W_(t,e):void 0;return e&&Oo(!1),r}function W_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,f_);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?B_(t):null,r=li(t);on();const o=Yt(s,t,0,[t.props,i]);if(an(),r(),Tu(o)){if(o.then(Ul,Ul),e)return o.then(a=>{$l(t,a,e)}).catch(a=>{Ir(a,t,0)});t.asyncDep=o}else $l(t,o,e)}else bh(t,e)}function $l(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Yu(e)),bh(t,n)}let Wl;function bh(t,e,n){const s=t.type;if(!t.render){if(!e&&Wl&&!s.render){const i=s.template||ma(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Te(Te({isCustomElement:r,delimiters:a},o),l);s.render=Wl(i,c)}}t.render=s.render||ze}{const i=li(t);on();try{p_(t)}finally{an(),i()}}}const H_={get(t,e){return Ve(t,"get",""),t[e]}};function B_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,H_),slots:t.slots,emit:t.emit,expose:e}}function Pr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yu(kp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ks)return ks[n](t)},has(e,n){return n in e||n in ks}}))}function V_(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function j_(t){return j(t)&&"__vccOpts"in t}const Xe=(t,e)=>Op(t,e,Rr);function Th(t,e,n){const s=arguments.length;return s===2?he(e)&&!H(e)?ko(e)?re(t,null,[e]):re(t,e):re(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ko(n)&&(n=[n]),re(t,e,n))}const q_="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const G_="http://www.w3.org/2000/svg",K_="http://www.w3.org/1998/Math/MathML",Bt=typeof document<"u"?document:null,Hl=Bt&&Bt.createElement("template"),z_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Bt.createElementNS(G_,t):e==="mathml"?Bt.createElementNS(K_,t):Bt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Bt.createTextNode(t),createComment:t=>Bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Hl.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Hl.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Y_=Symbol("_vtc");function Q_(t,e,n){const s=t[Y_];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bl=Symbol("_vod"),J_=Symbol("_vsh"),X_=Symbol(""),Z_=/(^|;)\s*display\s*:/;function eg(t,e,n){const s=t.style,i=me(n);let r=!1;if(n&&!i){if(e)if(me(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Fi(s,a,"")}else for(const o in e)n[o]==null&&Fi(s,o,"");for(const o in n)o==="display"&&(r=!0),Fi(s,o,n[o])}else if(i){if(e!==n){const o=s[X_];o&&(n+=";"+o),s.cssText=n,r=Z_.test(n)}}else e&&t.removeAttribute("style");Bl in t&&(t[Bl]=r?s.display:"",t[J_]&&(s.display="none"))}const Vl=/\s*!important$/;function Fi(t,e,n){if(H(n))n.forEach(s=>Fi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=tg(t,e);Vl.test(n)?t.setProperty(cs(s),n.replace(Vl,""),"important"):t[s]=n}}const jl=["Webkit","Moz","ms"],Jr={};function tg(t,e){const n=Jr[e];if(n)return n;let s=mt(e);if(s!=="filter"&&s in t)return Jr[e]=s;s=yr(s);for(let i=0;i<jl.length;i++){const r=jl[i]+s;if(r in t)return Jr[e]=r}return e}const ql="http://www.w3.org/1999/xlink";function ng(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ql,e.slice(6,e.length)):t.setAttributeNS(ql,e,n);else{const r=lp(e);n==null||r&&!Nu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function sg(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Nu(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Wn(t,e,n,s){t.addEventListener(e,n,s)}function ig(t,e,n,s){t.removeEventListener(e,n,s)}const Gl=Symbol("_vei");function rg(t,e,n,s,i=null){const r=t[Gl]||(t[Gl]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=og(e);if(s){const c=r[e]=cg(s,i);Wn(t,a,c,l)}else o&&(ig(t,a,o,l),r[e]=void 0)}}const Kl=/(?:Once|Passive|Capture)$/;function og(t){let e;if(Kl.test(t)){e={};let s;for(;s=t.match(Kl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let Xr=0;const ag=Promise.resolve(),lg=()=>Xr||(ag.then(()=>Xr=0),Xr=Date.now());function cg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;st(ug(s,n.value),e,5,[s])};return n.value=t,n.attached=lg(),n}function ug(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const zl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hg=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?Q_(t,s,c):e==="style"?eg(t,n,s):gr(e)?sa(e)||rg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dg(t,e,s,c))?sg(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ng(t,e,s,c))};function dg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&zl(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return zl(e)&&me(n)?!1:e in t}const Yl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>ki(e,n):e};function fg(t){t.target.composing=!0}function Ql(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zr=Symbol("_assign"),Yn={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Zr]=Yl(i);const r=s||i.props&&i.props.type==="number";Wn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Eo(a)),t[Zr](a)}),n&&Wn(t,"change",()=>{t.value=t.value.trim()}),e||(Wn(t,"compositionstart",fg),Wn(t,"compositionend",Ql),Wn(t,"change",Ql))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[Zr]=Yl(r),t.composing)return;const o=(i||t.type==="number")&&!/^0\d/.test(t.value)?Eo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},pg=["ctrl","shift","alt","meta"],_g={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>pg.some(n=>t[`${n}Key`]&&!e.includes(n))},Sh=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=_g[e[o]];if(a&&a(i,e))return}return t(i,...r)})},gg=Te({patchProp:hg},z_);let Jl;function mg(){return Jl||(Jl=S_(gg))}const vg=(...t)=>{const e=mg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Eg(s);if(!i)return;const r=e._component;!j(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,yg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function yg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Eg(t){return me(t)?document.querySelector(t):t}const Ot=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},wg={name:"App"},Ig={id:"app"},Cg=M("footer",null,[M("p",null,"© 2024 Monster of the Week Portal")],-1);function bg(t,e,n,s,i,r){const o=Gs("router-link"),a=Gs("router-view");return Ce(),Se("div",Ig,[M("header",null,[M("nav",null,[M("ul",null,[M("li",null,[re(o,{to:"/"},{default:Me(()=>[Pe("Home")]),_:1})]),M("li",null,[re(o,{to:"/case-files"},{default:Me(()=>[Pe("Case Files")]),_:1})]),M("li",null,[re(o,{to:"/knowledge-base"},{default:Me(()=>[Pe("Knowledge Base")]),_:1})]),M("li",null,[re(o,{to:"/acquisitions"},{default:Me(()=>[Pe("Acquisitions")]),_:1})]),M("li",null,[re(o,{to:"/inventory"},{default:Me(()=>[Pe("Inventory")]),_:1})]),M("li",null,[re(o,{to:"/profile"},{default:Me(()=>[Pe("Profile")]),_:1})]),M("li",null,[re(o,{to:"/login"},{default:Me(()=>[Pe("Login")]),_:1})])])])]),M("main",null,[re(a)]),Cg])}const Tg=Ot(wg,[["render",bg]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Hn=typeof document<"u";function Sg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function eo(t,e){const n={};for(const s in e){const i=e[s];n[s]=rt(i)?i.map(t):t(i)}return n}const Ds=()=>{},rt=Array.isArray,Rh=/#/g,Rg=/&/g,Pg=/\//g,Ag=/=/g,Ng=/\?/g,Ph=/\+/g,kg=/%5B/g,Og=/%5D/g,Ah=/%5E/g,xg=/%60/g,Nh=/%7B/g,Dg=/%7C/g,kh=/%7D/g,Mg=/%20/g;function Ea(t){return encodeURI(""+t).replace(Dg,"|").replace(kg,"[").replace(Og,"]")}function Lg(t){return Ea(t).replace(Nh,"{").replace(kh,"}").replace(Ah,"^")}function xo(t){return Ea(t).replace(Ph,"%2B").replace(Mg,"+").replace(Rh,"%23").replace(Rg,"%26").replace(xg,"`").replace(Nh,"{").replace(kh,"}").replace(Ah,"^")}function Fg(t){return xo(t).replace(Ag,"%3D")}function Ug(t){return Ea(t).replace(Rh,"%23").replace(Ng,"%3F")}function $g(t){return t==null?"":Ug(t).replace(Pg,"%2F")}function zs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Wg=/\/$/,Hg=t=>t.replace(Wg,"");function to(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=qg(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:zs(o)}}function Bg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Vg(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ns(e.matched[s],n.matched[i])&&Oh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Oh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jg(t[n],e[n]))return!1;return!0}function jg(t,e){return rt(t)?Zl(t,e):rt(e)?Zl(e,t):t===e}function Zl(t,e){return rt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function qg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}var Ys;(function(t){t.pop="pop",t.push="push"})(Ys||(Ys={}));var Ms;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ms||(Ms={}));function Gg(t){if(!t)if(Hn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Hg(t)}const Kg=/^[^#]+#/;function zg(t,e){return t.replace(Kg,"#")+e}function Yg(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ar=()=>({left:window.scrollX,top:window.scrollY});function Qg(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Yg(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ec(t,e){return(history.state?history.state.position-e:-1)+t}const Do=new Map;function Jg(t,e){Do.set(t,e)}function Xg(t){const e=Do.get(t);return Do.delete(t),e}let Zg=()=>location.protocol+"//"+location.host;function xh(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Xl(l,"")}return Xl(n,t)+s+i}function em(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=xh(t,location),m=n.value,T=e.value;let x=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}x=T?d.position-T.position:0}else s(_);i.forEach(k=>{k(n.value,m,{delta:x,type:Ys.pop,direction:x?x>0?Ms.forward:Ms.back:Ms.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(te({},d.state,{scroll:Ar()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function tc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ar():null}}function tm(t){const{history:e,location:n}=window,s={value:xh(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Zg()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=te({},e.state,tc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=te({},i.value,e.state,{forward:l,scroll:Ar()});r(u.current,u,!0);const h=te({},tc(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function nm(t){t=Gg(t);const e=tm(t),n=em(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:t,go:s,createHref:zg.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function sm(t){return typeof t=="string"||t&&typeof t=="object"}function Dh(t){return typeof t=="string"||typeof t=="symbol"}const Ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Mh=Symbol("");var nc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nc||(nc={}));function ss(t,e){return te(new Error,{type:t,[Mh]:!0},e)}function Et(t,e){return t instanceof Error&&Mh in t&&(e==null||!!(t.type&e))}const sc="[^/]+?",im={sensitive:!1,strict:!1,start:!0,end:!0},rm=/[.+*?^${}()[\]/\\]/g;function om(t,e){const n=te({},im,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(rm,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:T,optional:x,regexp:k}=d;r.push({name:m,repeatable:T,optional:x});const O=k||sc;if(O!==sc){_+=10;try{new RegExp(`(${O})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+Y.message)}}let U=T?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(U=x&&c.length<2?`(?:/${U})`:"/"+U),x&&(U+="?"),i+=U,_+=20,x&&(_+=-8),T&&(_+=-20),O===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:T,optional:x}=_,k=m in c?c[m]:"";if(rt(k)&&!T)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=rt(k)?k.join("/"):k;if(!O)if(x)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function am(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lm(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=am(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(ic(s))return 1;if(ic(i))return-1}return i.length-s.length}function ic(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cm={type:0,value:""},um=/[a-zA-Z0-9_]/;function hm(t){if(!t)return[[]];if(t==="/")return[[cm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:um.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function dm(t,e,n){const s=om(hm(t.path),n),i=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function fm(t,e){const n=[],s=new Map;e=ac({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,m=pm(u);m.aliasOf=d&&d.record;const T=ac(e,u),x=[m];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const Y of U)x.push(te({},m,{components:d?d.record.components:m.components,path:Y,aliasOf:d?d.record:m}))}let k,O;for(const U of x){const{path:Y}=U;if(h&&Y[0]!=="/"){const de=h.record.path,B=de[de.length-1]==="/"?"":"/";U.path=h.record.path+(Y&&B+Y)}if(k=dm(U,h,T),d?d.alias.push(k):(O=O||k,O!==k&&O.alias.push(k),_&&u.name&&!oc(k)&&o(u.name)),m.children){const de=m.children;for(let B=0;B<de.length;B++)r(de[B],k,d&&d.children[B])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&l(k)}return O?()=>{o(O)}:Ds}function o(u){if(Dh(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&lm(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Lh(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!oc(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},m,T;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ss(1,{location:u});T=d.record.name,_=te(rc(h.params,d.keys.filter(O=>!O.optional).concat(d.parent?d.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),u.params&&rc(u.params,d.keys.map(O=>O.name))),m=d.stringify(_)}else if(u.path!=null)m=u.path,d=n.find(O=>O.re.test(m)),d&&(_=d.parse(m),T=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw ss(1,{location:u,currentLocation:h});T=d.record.name,_=te({},h.params,u.params),m=d.stringify(_)}const x=[];let k=d;for(;k;)x.unshift(k.record),k=k.parent;return{name:T,path:m,params:_,matched:x,meta:gm(x)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function rc(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function pm(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_m(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _m(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function oc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gm(t){return t.reduce((e,n)=>te(e,n.meta),{})}function ac(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Lh(t,e){return e.children.some(n=>n===t||Lh(t,n))}function mm(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Ph," "),o=r.indexOf("="),a=zs(o<0?r:r.slice(0,o)),l=o<0?null:zs(r.slice(o+1));if(a in e){let c=e[a];rt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function lc(t){let e="";for(let n in t){const s=t[n];if(n=Fg(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(rt(s)?s.map(r=>r&&xo(r)):[s&&xo(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function vm(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=rt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const ym=Symbol(""),cc=Symbol(""),wa=Symbol(""),Fh=Symbol(""),Mo=Symbol("");function Es(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ss(4,{from:n,to:e})):d instanceof Error?l(d):sm(d)?l(ss(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function no(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Em(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Vt(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=Sg(u)?u.default:u;o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&Vt(_,n,s,o,a,i)()}))}}return r}function Em(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uc(t){const e=St(wa),n=St(Fh),s=Xe(()=>{const l=Gn(t.to);return e.resolve(l)}),i=Xe(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ns.bind(null,u));if(d>-1)return d;const _=hc(l[c-2]);return c>1&&hc(u)===_&&h[h.length-1].path!==_?h.findIndex(ns.bind(null,l[c-2])):d}),r=Xe(()=>i.value>-1&&bm(n.params,s.value.params)),o=Xe(()=>i.value>-1&&i.value===n.matched.length-1&&Oh(n.params,s.value.params));function a(l={}){return Cm(l)?e[Gn(t.replace)?"replace":"push"](Gn(t.to)).catch(Ds):Promise.resolve()}return{route:s,href:Xe(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const wm=rh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uc,setup(t,{slots:e}){const n=wr(uc(t)),{options:s}=St(wa),i=Xe(()=>({[dc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[dc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Th("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Im=wm;function Cm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bm(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!rt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function hc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dc=(t,e,n)=>t??e??n,Tm=rh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=St(Mo),i=Xe(()=>t.route||s.value),r=St(cc,0),o=Xe(()=>{let c=Gn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Xe(()=>i.value.matched[o.value]);Mi(cc,Xe(()=>o.value+1)),Mi(ym,a),Mi(Mo,i);const l=xp();return xi(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!ns(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return fc(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,x=Th(d,te({},m,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return fc(n.default,{Component:x,route:c})||x}}});function fc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sm=Tm;function Rm(t){const e=fm(t.routes,t),n=t.parseQuery||mm,s=t.stringifyQuery||lc,i=t.history,r=Es(),o=Es(),a=Es(),l=Dp(Ut);let c=Ut;Hn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=eo.bind(null,y=>""+y),h=eo.bind(null,$g),d=eo.bind(null,zs);function _(y,A){let R,D;return Dh(y)?(R=e.getRecordMatcher(y),D=A):D=y,e.addRoute(D,R)}function m(y){const A=e.getRecordMatcher(y);A&&e.removeRoute(A)}function T(){return e.getRoutes().map(y=>y.record)}function x(y){return!!e.getRecordMatcher(y)}function k(y,A){if(A=te({},A||l.value),typeof y=="string"){const p=to(n,y,A.path),g=e.resolve({path:p.path},A),E=i.createHref(p.fullPath);return te(p,g,{params:d(g.params),hash:zs(p.hash),redirectedFrom:void 0,href:E})}let R;if(y.path!=null)R=te({},y,{path:to(n,y.path,A.path).path});else{const p=te({},y.params);for(const g in p)p[g]==null&&delete p[g];R=te({},y,{params:h(p)}),A.params=h(A.params)}const D=e.resolve(R,A),ee=y.hash||"";D.params=u(d(D.params));const fe=Bg(s,te({},y,{hash:Lg(ee),path:D.path})),f=i.createHref(fe);return te({fullPath:fe,hash:ee,query:s===lc?vm(y.query):y.query||{}},D,{redirectedFrom:void 0,href:f})}function O(y){return typeof y=="string"?to(n,y,l.value.path):te({},y)}function U(y,A){if(c!==y)return ss(8,{from:A,to:y})}function Y(y){return ve(y)}function de(y){return Y(te(O(y),{replace:!0}))}function B(y){const A=y.matched[y.matched.length-1];if(A&&A.redirect){const{redirect:R}=A;let D=typeof R=="function"?R(y):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=O(D):{path:D},D.params={}),te({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function ve(y,A){const R=c=k(y),D=l.value,ee=y.state,fe=y.force,f=y.replace===!0,p=B(R);if(p)return ve(te(O(p),{state:typeof p=="object"?te({},ee,p.state):ee,force:fe,replace:f}),A||R);const g=R;g.redirectedFrom=A;let E;return!fe&&Vg(s,D,R)&&(E=ss(16,{to:g,from:D}),lt(D,D,!0,!1)),(E?Promise.resolve(E):Ke(g,D)).catch(v=>Et(v)?Et(v,2)?v:Lt(v):X(v,g,D)).then(v=>{if(v){if(Et(v,2))return ve(te({replace:f},O(v.to),{state:typeof v.to=="object"?te({},ee,v.to.state):ee,force:fe}),A||g)}else v=fn(g,D,!0,f,ee);return Mt(g,D,v),v})}function Fe(y,A){const R=U(y,A);return R?Promise.reject(R):Promise.resolve()}function Ye(y){const A=Fn.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(y):y()}function Ke(y,A){let R;const[D,ee,fe]=Pm(y,A);R=no(D.reverse(),"beforeRouteLeave",y,A);for(const p of D)p.leaveGuards.forEach(g=>{R.push(Vt(g,y,A))});const f=Fe.bind(null,y,A);return R.push(f),Re(R).then(()=>{R=[];for(const p of r.list())R.push(Vt(p,y,A));return R.push(f),Re(R)}).then(()=>{R=no(ee,"beforeRouteUpdate",y,A);for(const p of ee)p.updateGuards.forEach(g=>{R.push(Vt(g,y,A))});return R.push(f),Re(R)}).then(()=>{R=[];for(const p of fe)if(p.beforeEnter)if(rt(p.beforeEnter))for(const g of p.beforeEnter)R.push(Vt(g,y,A));else R.push(Vt(p.beforeEnter,y,A));return R.push(f),Re(R)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),R=no(fe,"beforeRouteEnter",y,A,Ye),R.push(f),Re(R))).then(()=>{R=[];for(const p of o.list())R.push(Vt(p,y,A));return R.push(f),Re(R)}).catch(p=>Et(p,8)?p:Promise.reject(p))}function Mt(y,A,R){a.list().forEach(D=>Ye(()=>D(y,A,R)))}function fn(y,A,R,D,ee){const fe=U(y,A);if(fe)return fe;const f=A===Ut,p=Hn?history.state:{};R&&(D||f?i.replace(y.fullPath,te({scroll:f&&p&&p.scroll},ee)):i.push(y.fullPath,ee)),l.value=y,lt(y,A,R,f),Lt()}let at;function ms(){at||(at=i.listen((y,A,R)=>{if(!wi.listening)return;const D=k(y),ee=B(D);if(ee){ve(te(ee,{replace:!0}),D).catch(Ds);return}c=D;const fe=l.value;Hn&&Jg(ec(fe.fullPath,R.delta),Ar()),Ke(D,fe).catch(f=>Et(f,12)?f:Et(f,2)?(ve(f.to,D).then(p=>{Et(p,20)&&!R.delta&&R.type===Ys.pop&&i.go(-1,!1)}).catch(Ds),Promise.reject()):(R.delta&&i.go(-R.delta,!1),X(f,D,fe))).then(f=>{f=f||fn(D,fe,!1),f&&(R.delta&&!Et(f,8)?i.go(-R.delta,!1):R.type===Ys.pop&&Et(f,20)&&i.go(-1,!1)),Mt(D,fe,f)}).catch(Ds)}))}let Mn=Es(),ye=Es(),ne;function X(y,A,R){Lt(y);const D=ye.list();return D.length?D.forEach(ee=>ee(y,A,R)):console.error(y),Promise.reject(y)}function yt(){return ne&&l.value!==Ut?Promise.resolve():new Promise((y,A)=>{Mn.add([y,A])})}function Lt(y){return ne||(ne=!y,ms(),Mn.list().forEach(([A,R])=>y?R(y):A()),Mn.reset()),y}function lt(y,A,R,D){const{scrollBehavior:ee}=t;if(!Hn||!ee)return Promise.resolve();const fe=!R&&Xg(ec(y.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return Ju().then(()=>ee(y,A,fe)).then(f=>f&&Qg(f)).catch(f=>X(f,y,A))}const Ue=y=>i.go(y);let Ln;const Fn=new Set,wi={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,hasRoute:x,getRoutes:T,resolve:k,options:t,push:Y,replace:de,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:yt,install(y){const A=this;y.component("RouterLink",Im),y.component("RouterView",Sm),y.config.globalProperties.$router=A,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Gn(l)}),Hn&&!Ln&&l.value===Ut&&(Ln=!0,Y(i.location).catch(ee=>{}));const R={};for(const ee in Ut)Object.defineProperty(R,ee,{get:()=>l.value[ee],enumerable:!0});y.provide(wa,A),y.provide(Fh,Vu(R)),y.provide(Mo,l);const D=y.unmount;Fn.add(y),y.unmount=function(){Fn.delete(y),Fn.size<1&&(c=Ut,at&&at(),at=null,l.value=Ut,Ln=!1,ne=!1),D()}}};function Re(y){return y.reduce((A,R)=>A.then(()=>Ye(R)),Promise.resolve())}return wi}function Pm(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ns(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ns(c,l))||i.push(l))}return[n,s,i]}const Am={name:"Home"},Nm=t=>(ln("data-v-94bdd772"),t=t(),cn(),t),km={class:"home"},Om=Nm(()=>M("h1",null,"Welcome to the Monster of the Week Portal",-1));function xm(t,e,n,s,i,r){const o=Gs("router-link");return Ce(),Se("div",km,[Om,re(o,{to:"/dashboard"},{default:Me(()=>[Pe("Go to Dashboard")]),_:1})])}const Dm=Ot(Am,[["render",xm],["__scopeId","data-v-94bdd772"]]);var pc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw us(e)},us=function(t){return new Error("Firebase Database ("+Uh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($h(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Lm;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wh=function(t){const e=$h(t);return Ia.encodeByteArray(e,!0)},Ki=function(t){return Wh(t).replace(/\./g,"")},zi=function(t){try{return Ia.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t){return Hh(void 0,t)}function Hh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Um(n)||(t[n]=Hh(t[n],e[n]));return t}function Um(t){return t!=="__proto__"}/**
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
 */function $m(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wm=()=>$m().__FIREBASE_DEFAULTS__,Hm=()=>{if(typeof process>"u"||typeof pc>"u")return;const t=pc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zi(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return Wm()||Hm()||Bm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bh=t=>{var e,n;return(n=(e=Ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vm=t=>{const e=Bh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Vh=()=>{var t;return(t=Ca())===null||t===void 0?void 0:t.config},jh=t=>{var e;return(e=Ca())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function jm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ki(JSON.stringify(n)),Ki(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ba(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function qm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gm(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gh(){return Uh.NODE_ADMIN===!0}function Km(){try{return typeof indexedDB=="object"}catch{return!1}}function zm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="FirebaseError";class un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ym,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ci.prototype.create)}}class ci{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Qm(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new un(i,a,s)}}function Qm(t,e){return t.replace(Jm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Jm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Qs(zi(r[0])||""),n=Qs(zi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Xm=function(t){const e=Kh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Zm=function(t){const e=Kh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function is(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Lo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Qi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(_c(r)&&_c(o)){if(!Qi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function _c(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ss(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function tv(t,e){const n=new nv(t,e);return n.subscribe.bind(n)}class nv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=so),i.error===void 0&&(i.error=so),i.complete===void 0&&(i.complete=so);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function so(){}function Ta(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function xe(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gn="[DEFAULT]";/**
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
 */class rv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Nr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(av(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ov(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ov(t){return t===gn?void 0:t}function av(t){return t.instantiationMode==="EAGER"}/**
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
 */class lv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const cv={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},uv=ie.INFO,hv={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},dv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=hv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sa{constructor(e){this.name=e,this._logLevel=uv,this._logHandler=dv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const fv=(t,e)=>e.some(n=>t instanceof n);let gc,mc;function pv(){return gc||(gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _v(){return mc||(mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zh=new WeakMap,Fo=new WeakMap,Yh=new WeakMap,io=new WeakMap,Ra=new WeakMap;function gv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Qt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zh.set(n,t)}).catch(()=>{}),Ra.set(e,t),e}function mv(t){if(Fo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Fo.set(t,e)}let Uo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vv(t){Uo=t(Uo)}function yv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ro(this),e,...n);return Yh.set(s,e.sort?e.sort():[e]),Qt(s)}:_v().includes(t)?function(...e){return t.apply(ro(this),e),Qt(zh.get(this))}:function(...e){return Qt(t.apply(ro(this),e))}}function Ev(t){return typeof t=="function"?yv(t):(t instanceof IDBTransaction&&mv(t),fv(t,pv())?new Proxy(t,Uo):t)}function Qt(t){if(t instanceof IDBRequest)return gv(t);if(io.has(t))return io.get(t);const e=Ev(t);return e!==t&&(io.set(t,e),Ra.set(e,t)),e}const ro=t=>Ra.get(t);function wv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Qt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Qt(o.result),l.oldVersion,l.newVersion,Qt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Iv=["get","getKey","getAll","getAllKeys","count"],Cv=["put","add","delete","clear"],oo=new Map;function vc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oo.get(e))return oo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Cv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Iv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return oo.set(e,r),r}vv(t=>({...t,get:(e,n,s)=>vc(e,n)||t.get(e,n,s),has:(e,n)=>!!vc(e,n)||t.has(e,n)}));/**
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
 */class bv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Tv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $o="@firebase/app",yc="0.10.5";/**
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
 */const Sn=new Sa("@firebase/app"),Sv="@firebase/app-compat",Rv="@firebase/analytics-compat",Pv="@firebase/analytics",Av="@firebase/app-check-compat",Nv="@firebase/app-check",kv="@firebase/auth",Ov="@firebase/auth-compat",xv="@firebase/database",Dv="@firebase/database-compat",Mv="@firebase/functions",Lv="@firebase/functions-compat",Fv="@firebase/installations",Uv="@firebase/installations-compat",$v="@firebase/messaging",Wv="@firebase/messaging-compat",Hv="@firebase/performance",Bv="@firebase/performance-compat",Vv="@firebase/remote-config",jv="@firebase/remote-config-compat",qv="@firebase/storage",Gv="@firebase/storage-compat",Kv="@firebase/firestore",zv="@firebase/vertexai-preview",Yv="@firebase/firestore-compat",Qv="firebase",Jv="10.12.2";/**
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
 */const Wo="[DEFAULT]",Xv={[$o]:"fire-core",[Sv]:"fire-core-compat",[Pv]:"fire-analytics",[Rv]:"fire-analytics-compat",[Nv]:"fire-app-check",[Av]:"fire-app-check-compat",[kv]:"fire-auth",[Ov]:"fire-auth-compat",[xv]:"fire-rtdb",[Dv]:"fire-rtdb-compat",[Mv]:"fire-fn",[Lv]:"fire-fn-compat",[Fv]:"fire-iid",[Uv]:"fire-iid-compat",[$v]:"fire-fcm",[Wv]:"fire-fcm-compat",[Hv]:"fire-perf",[Bv]:"fire-perf-compat",[Vv]:"fire-rc",[jv]:"fire-rc-compat",[qv]:"fire-gcs",[Gv]:"fire-gcs-compat",[Kv]:"fire-fst",[Yv]:"fire-fst-compat",[zv]:"fire-vertex","fire-js":"fire-js",[Qv]:"fire-js-all"};/**
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
 */const Ji=new Map,Zv=new Map,Ho=new Map;function Ec(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(Ho.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Ho.set(e,t);for(const n of Ji.values())Ec(n,t);for(const n of Zv.values())Ec(n,t);return!0}function Pa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pt(t){return t.settings!==void 0}/**
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
 */const ey={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jt=new ci("app","Firebase",ey);/**
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
 */class ty{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=Jv;function Qh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Jt.create("bad-app-name",{appName:String(i)});if(n||(n=Vh()),!n)throw Jt.create("no-options");const r=Ji.get(i);if(r){if(Qi(n,r.options)&&Qi(s,r.config))return r;throw Jt.create("duplicate-app",{appName:i})}const o=new lv(i);for(const l of Ho.values())o.addComponent(l);const a=new ty(n,s,o);return Ji.set(i,a),a}function Jh(t=Wo){const e=Ji.get(t);if(!e&&t===Wo&&Vh())return Qh();if(!e)throw Jt.create("no-app",{appName:t});return e}function Xt(t,e,n){var s;let i=(s=Xv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(a.join(" "));return}rs(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ny="firebase-heartbeat-database",sy=1,Js="firebase-heartbeat-store";let ao=null;function Xh(){return ao||(ao=wv(ny,sy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Js)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jt.create("idb-open",{originalErrorMessage:t.message})})),ao}async function iy(t){try{const n=(await Xh()).transaction(Js),s=await n.objectStore(Js).get(Zh(t));return await n.done,s}catch(e){if(e instanceof un)Sn.warn(e.message);else{const n=Jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function wc(t,e){try{const s=(await Xh()).transaction(Js,"readwrite");await s.objectStore(Js).put(e,Zh(t)),await s.done}catch(n){if(n instanceof un)Sn.warn(n.message);else{const s=Jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(s.message)}}}function Zh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ry=1024,oy=30*24*60*60*1e3;class ay{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ic();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=oy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ic(),{heartbeatsToSend:s,unsentEntries:i}=ly(this._heartbeatsCache.heartbeats),r=Ki(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ic(){return new Date().toISOString().substring(0,10)}function ly(t,e=ry){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Cc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Km()?zm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cc(t){return Ki(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uy(t){rs(new Tn("platform-logger",e=>new bv(e),"PRIVATE")),rs(new Tn("heartbeat",e=>new ay(e),"PRIVATE")),Xt($o,yc,t),Xt($o,yc,"esm2017"),Xt("fire-js","")}uy("");var hy="firebase",dy="10.12.2";/**
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
 */Xt(hy,dy,"app");function Aa(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ed(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fy=ed,td=new ci("auth","Firebase",ed());/**
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
 */const Xi=new Sa("@firebase/auth");function py(t,...e){Xi.logLevel<=ie.WARN&&Xi.warn(`Auth (${ds}): ${t}`,...e)}function Ui(t,...e){Xi.logLevel<=ie.ERROR&&Xi.error(`Auth (${ds}): ${t}`,...e)}/**
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
 */function ot(t,...e){throw Na(t,...e)}function _t(t,...e){return Na(t,...e)}function nd(t,e,n){const s=Object.assign(Object.assign({},fy()),{[e]:n});return new ci("auth","Firebase",s).create(e,{appName:t.name})}function Rt(t){return nd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Na(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return td.create(t,...e)}function W(t,e,...n){if(!t)throw Na(e,...n)}function wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ui(e),new Error(e)}function At(t,e){t||wt(e)}/**
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
 */function Bo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _y(){return bc()==="http:"||bc()==="https:"}function bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_y()||qm()||"connection"in navigator)?navigator.onLine:!0}function my(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,At(n>e,"Short delay should be less than long delay!"),this.isMobile=ba()||qh()}get(){return gy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ka(t,e){At(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yy=new ui(3e4,6e4);function hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dn(t,e,n,s,i={}){return id(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=hs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sd.fetch()(rd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function id(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},vy),e);try{const i=new wy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Pi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw nd(t,u,c);ot(t,u)}}catch(i){if(i instanceof un)throw i;ot(t,"network-request-failed",{message:String(i)})}}async function hi(t,e,n,s,i={}){const r=await dn(t,e,n,s,i);return"mfaPendingCredential"in r&&ot(t,"multi-factor-auth-required",{_serverResponse:r}),r}function rd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ka(t.config,i):`${t.config.apiScheme}://${i}`}function Ey(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(_t(this.auth,"network-request-failed")),yy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=_t(t,e,s);return i.customData._tokenResponse=n,i}function Tc(t){return t!==void 0&&t.enterprise!==void 0}class Iy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ey(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Cy(t,e){return dn(t,"GET","/v2/recaptchaConfig",hn(t,e))}/**
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
 */async function by(t,e){return dn(t,"POST","/v1/accounts:delete",e)}async function od(t,e){return dn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ty(t,e=!1){const n=xe(t),s=await n.getIdToken(e),i=Oa(s);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ls(lo(i.auth_time)),issuedAtTime:Ls(lo(i.iat)),expirationTime:Ls(lo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function lo(t){return Number(t)*1e3}function Oa(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const i=zi(n);return i?JSON.parse(i):(Ui("Failed to decode base64 JWT payload"),null)}catch(i){return Ui("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sc(t){const e=Oa(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof un&&Sy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Sy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ry{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zi(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Xs(t,od(n,{idToken:s}));W(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ad(r.providerUserInfo):[],a=Ay(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Vo(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Py(t){const e=xe(t);await Zi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ay(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function ad(t){return t.map(e=>{var{providerId:n}=e,s=Aa(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Ny(t,e){const n=await id(t,{},async()=>{const s=hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=rd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ky(t,e){return dn(t,"POST","/v2/accounts:revokeToken",hn(t,e))}/**
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
 */class Qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Sc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ny(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Qn;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qn,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
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
 */function $t(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class It{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Aa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ry(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Vo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Xs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ty(this,e)}reload(){return Py(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Zi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(Rt(this.auth));const e=await this.getIdToken();return await Xs(this,by(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:Y,isAnonymous:de,providerData:B,stsTokenManager:ve}=n;W(U&&ve,e,"internal-error");const Fe=Qn.fromJSON(this.name,ve);W(typeof U=="string",e,"internal-error"),$t(h,e.name),$t(d,e.name),W(typeof Y=="boolean",e,"internal-error"),W(typeof de=="boolean",e,"internal-error"),$t(_,e.name),$t(m,e.name),$t(T,e.name),$t(x,e.name),$t(k,e.name),$t(O,e.name);const Ye=new It({uid:U,auth:e,email:d,emailVerified:Y,displayName:h,isAnonymous:de,photoURL:m,phoneNumber:_,tenantId:T,stsTokenManager:Fe,createdAt:k,lastLoginAt:O});return B&&Array.isArray(B)&&(Ye.providerData=B.map(Ke=>Object.assign({},Ke))),x&&(Ye._redirectEventId=x),Ye}static async _fromIdTokenResponse(e,n,s=!1){const i=new Qn;i.updateFromServerResponse(n);const r=new It({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Zi(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];W(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?ad(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Qn;a.updateFromIdToken(s);const l=new It({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Vo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Rc=new Map;function Ct(t){At(t instanceof Function,"Expected a class definition");let e=Rc.get(t);return e?(At(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rc.set(t,e),e)}/**
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
 */class ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ld.type="NONE";const Pc=ld;/**
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
 */function $i(t,e,n){return`firebase:${t}:${e}:${n}`}class Jn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=$i(this.userKey,i.apiKey,r),this.fullPersistenceKey=$i("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?It._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Jn(Ct(Pc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ct(Pc);const o=$i(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=It._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Jn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Jn(r,e,s))}}/**
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
 */function Ac(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fd(e))return"Blackberry";if(pd(e))return"Webos";if(xa(e))return"Safari";if((e.includes("chrome/")||ud(e))&&!e.includes("edge/"))return"Chrome";if(dd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cd(t=Oe()){return/firefox\//i.test(t)}function xa(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ud(t=Oe()){return/crios\//i.test(t)}function hd(t=Oe()){return/iemobile/i.test(t)}function dd(t=Oe()){return/android/i.test(t)}function fd(t=Oe()){return/blackberry/i.test(t)}function pd(t=Oe()){return/webos/i.test(t)}function Or(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Oy(t=Oe()){var e;return Or(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xy(){return Gm()&&document.documentMode===10}function _d(t=Oe()){return Or(t)||dd(t)||pd(t)||fd(t)||/windows phone/i.test(t)||hd(t)}function Dy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gd(t,e=[]){let n;switch(t){case"Browser":n=Ac(Oe());break;case"Worker":n=`${Ac(Oe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${s}`}/**
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
 */class My{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Ly(t,e={}){return dn(t,"GET","/v2/passwordPolicy",hn(t,e))}/**
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
 */const Fy=6;class Uy{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Fy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class $y{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nc(this),this.idTokenSubscription=new Nc(this),this.beforeStateQueue=new My(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=td,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Jn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await od(this,{idToken:e}),s=await It._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=my()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(Rt(this));const n=e?xe(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ly(this),n=new Uy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ci("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await ky(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Jn.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&py(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xn(t){return xe(t)}class Nc{constructor(e){this.auth=e,this.observer=null,this.addObserver=tv(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wy(t){xr=t}function md(t){return xr.loadJS(t)}function Hy(){return xr.recaptchaEnterpriseScript}function By(){return xr.gapiScript}function Vy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jy="recaptcha-enterprise",qy="NO_RECAPTCHA";class Gy{constructor(e){this.type=jy,this.auth=xn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Cy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Iy(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Tc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(qy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Tc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Hy();l.length!==0&&(l+=a),md(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function kc(t,e,n,s=!1){const i=new Gy(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function jo(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await kc(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await kc(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
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
 */function Ky(t,e){const n=Pa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Qi(r,e??{}))return i;ot(i,"already-initialized")}return n.initialize({options:e})}function zy(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Yy(t,e,n){const s=xn(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=vd(e),{host:o,port:a}=Qy(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),Jy()}function vd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Qy(t){const e=vd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Oc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Oc(o)}}}function Oc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Jy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Da{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wt("not implemented")}_getIdTokenResponse(e){return wt("not implemented")}_linkToIdToken(e,n){return wt("not implemented")}_getReauthenticationResolver(e){return wt("not implemented")}}async function Xy(t,e){return dn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Zy(t,e){return hi(t,"POST","/v1/accounts:signInWithPassword",hn(t,e))}/**
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
 */async function eE(t,e){return hi(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}async function tE(t,e){return hi(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}/**
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
 */class Zs extends Da{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Zs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Zs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jo(e,n,"signInWithPassword",Zy);case"emailLink":return eE(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jo(e,s,"signUpPassword",Xy);case"emailLink":return tE(e,{idToken:n,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xn(t,e){return hi(t,"POST","/v1/accounts:signInWithIdp",hn(t,e))}/**
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
 */const nE="http://localhost";class Rn extends Da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Aa(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Rn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Xn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xn(e,n)}buildRequest(){const e={requestUri:nE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hs(n)}return e}}/**
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
 */function sE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iE(t){const e=Ss(Rs(t)).link,n=e?Ss(Rs(e)).deep_link_id:null,s=Ss(Rs(t)).deep_link_id;return(s?Ss(Rs(s)).link:null)||s||n||e||t}class Ma{constructor(e){var n,s,i,r,o,a;const l=Ss(Rs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=sE((i=l.mode)!==null&&i!==void 0?i:null);W(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=iE(e);try{return new Ma(n)}catch{return null}}}/**
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
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return Zs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ma.parseLink(n);return W(s,"argument-error"),Zs._fromEmailAndCode(e,s.code,s.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class di extends yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jt extends di{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
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
 */class qt extends di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qt.credential(n,s)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
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
 */class Gt extends di{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
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
 */class Kt extends di{constructor(){super("twitter.com")}static credential(e,n){return Rn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Kt.credential(n,s)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
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
 */async function rE(t,e){return hi(t,"POST","/v1/accounts:signUp",hn(t,e))}/**
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
 */class Pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await It._fromIdTokenResponse(e,s,i),o=xc(s);return new Pn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=xc(s);return new Pn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function xc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class er extends un{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,er.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new er(e,n,s,i)}}function Ed(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?er._fromErrorAndOperation(t,r,e,s):r})}async function oE(t,e,n=!1){const s=await Xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pn._forOperation(t,"link",s)}/**
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
 */async function aE(t,e,n=!1){const{auth:s}=t;if(pt(s.app))return Promise.reject(Rt(s));const i="reauthenticate";try{const r=await Xs(t,Ed(s,i,e,t),n);W(r.idToken,s,"internal-error");const o=Oa(r.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),Pn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ot(s,"user-mismatch"),r}}/**
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
 */async function wd(t,e,n=!1){if(pt(t.app))return Promise.reject(Rt(t));const s="signIn",i=await Ed(t,s,e),r=await Pn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function lE(t,e){return wd(xn(t),e)}/**
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
 */async function Id(t){const e=xn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cE(t,e,n){if(pt(t.app))return Promise.reject(Rt(t));const s=xn(t),o=await jo(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rE).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Id(t),l}),a=await Pn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function uE(t,e,n){return pt(t.app)?Promise.reject(Rt(t)):lE(xe(t),fs.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Id(t),s})}/**
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
 */function hE(t,e){return xe(t).setPersistence(e)}function dE(t,e,n,s){return xe(t).onIdTokenChanged(e,n,s)}function fE(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function pE(t,e,n,s){return xe(t).onAuthStateChanged(e,n,s)}function _E(t){return xe(t).signOut()}const tr="__sak";/**
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
 */class Cd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tr,"1"),this.storage.removeItem(tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gE(){const t=Oe();return xa(t)||Or(t)}const mE=1e3,vE=10;class bd extends Cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gE()&&Dy(),this.fallbackToPolling=_d(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);xy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},mE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bd.type="LOCAL";const Td=bd;/**
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
 */class Sd extends Cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sd.type="SESSION";const Rd=Sd;/**
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
 */function yE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Dr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await yE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dr.receivers=[];/**
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
 */function La(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class EE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=La("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gt(){return window}function wE(t){gt().location.href=t}/**
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
 */function Pd(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function IE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bE(){return Pd()?self:null}/**
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
 */const Ad="firebaseLocalStorageDb",TE=1,nr="firebaseLocalStorage",Nd="fbase_key";class fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mr(t,e){return t.transaction([nr],e?"readwrite":"readonly").objectStore(nr)}function SE(){const t=indexedDB.deleteDatabase(Ad);return new fi(t).toPromise()}function qo(){const t=indexedDB.open(Ad,TE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(nr,{keyPath:Nd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(nr)?e(s):(s.close(),await SE(),e(await qo()))})})}async function Dc(t,e,n){const s=Mr(t,!0).put({[Nd]:e,value:n});return new fi(s).toPromise()}async function RE(t,e){const n=Mr(t,!1).get(e),s=await new fi(n).toPromise();return s===void 0?null:s.value}function Mc(t,e){const n=Mr(t,!0).delete(e);return new fi(n).toPromise()}const PE=800,AE=3;class kd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>AE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dr._getInstance(bE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IE(),!this.activeServiceWorker)return;this.sender=new EE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qo();return await Dc(e,tr,"1"),await Mc(e,tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Dc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>RE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Mr(i,!1).getAll();return new fi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kd.type="LOCAL";const NE=kd;new ui(3e4,6e4);/**
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
 */function kE(t,e){return e?Ct(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fa extends Da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OE(t){return wd(t.auth,new Fa(t),t.bypassAuthState)}function xE(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),aE(n,new Fa(t),t.bypassAuthState)}async function DE(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),oE(n,new Fa(t),t.bypassAuthState)}/**
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
 */class Od{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OE;case"linkViaPopup":case"linkViaRedirect":return DE;case"reauthViaPopup":case"reauthViaRedirect":return xE;default:ot(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ME=new ui(2e3,1e4);class Bn extends Od{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=La();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ME.get())};e()}}Bn.currentPopupAction=null;/**
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
 */const LE="pendingRedirect",Wi=new Map;class FE extends Od{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const s=await UE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UE(t,e){const n=HE(e),s=WE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function $E(t,e){Wi.set(t._key(),e)}function WE(t){return Ct(t._redirectPersistence)}function HE(t){return $i(LE,t.config.apiKey,t.name)}async function BE(t,e,n=!1){if(pt(t.app))return Promise.reject(Rt(t));const s=xn(t),i=kE(s,e),o=await new FE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const VE=10*60*1e3;class jE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!xd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lc(e))}saveEventToCache(e){this.cachedEventUids.add(Lc(e)),this.lastProcessedEventTime=Date.now()}}function Lc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xd(t);default:return!1}}/**
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
 */async function GE(t,e={}){return dn(t,"GET","/v1/projects",e)}/**
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
 */const KE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zE=/^https?/;async function YE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GE(t);for(const n of e)try{if(QE(n))return}catch{}ot(t,"unauthorized-domain")}function QE(t){const e=Bo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zE.test(n))return!1;if(KE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const JE=new ui(3e4,6e4);function Fc(){const t=gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XE(t){return new Promise((e,n)=>{var s,i,r;function o(){Fc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fc(),n(_t(t,"network-request-failed"))},timeout:JE.get()})}if(!((i=(s=gt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=gt().gapi)===null||r===void 0)&&r.load)o();else{const a=Vy("iframefcb");return gt()[a]=()=>{gapi.load?o():n(_t(t,"network-request-failed"))},md(`${By()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Hi=null,e})}let Hi=null;function ZE(t){return Hi=Hi||XE(t),Hi}/**
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
 */const ew=new ui(5e3,15e3),tw="__/auth/iframe",nw="emulator/auth/iframe",sw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rw(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ka(e,nw):`https://${t.config.authDomain}/${tw}`,s={apiKey:e.apiKey,appName:t.name,v:ds},i=iw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${hs(s).slice(1)}`}async function ow(t){const e=await ZE(t),n=gt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:rw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),a=gt().setTimeout(()=>{r(o)},ew.get());function l(){gt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const aw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lw=500,cw=600,uw="_blank",hw="http://localhost";class Uc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dw(t,e,n,s=lw,i=cw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aw),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Oe().toLowerCase();n&&(a=ud(c)?uw:n),cd(c)&&(e=e||hw,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(Oy(c)&&a!=="_self")return fw(e||"",a),new Uc(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Uc(h)}function fw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const pw="__/auth/handler",_w="emulator/auth/handler",gw=encodeURIComponent("fac");async function $c(t,e,n,s,i,r){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ds,eventId:i};if(e instanceof yd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Lo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof di){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${gw}=${encodeURIComponent(l)}`:"";return`${mw(t)}?${hs(a).slice(1)}${c}`}function mw({config:t}){return t.emulator?ka(t,_w):`https://${t.authDomain}/${pw}`}/**
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
 */const co="webStorageSupport";class vw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rd,this._completeRedirectFn=BE,this._overrideRedirectResult=$E}async _openPopup(e,n,s,i){var r;At((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await $c(e,n,s,Bo(),i);return dw(e,o,La())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await $c(e,n,s,Bo(),i);return wE(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(At(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ow(e),s=new jE(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(co,{type:co},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[co];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _d()||xa()||Or()}}const yw=vw;var Wc="@firebase/auth",Hc="1.7.4";/**
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
 */class Ew{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ww(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Iw(t){rs(new Tn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gd(t)},c=new $y(s,i,r,l);return zy(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),rs(new Tn("auth-internal",e=>{const n=xn(e.getProvider("auth").getImmediate());return(s=>new Ew(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Wc,Hc,ww(t)),Xt(Wc,Hc,"esm2017")}/**
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
 */const Cw=5*60,bw=jh("authIdTokenMaxAge")||Cw;let Bc=null;const Tw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>bw)return;const i=n==null?void 0:n.token;Bc!==i&&(Bc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sw(t=Jh()){const e=Pa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ky(t,{popupRedirectResolver:yw,persistence:[NE,Td,Rd]}),s=jh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Tw(r.toString());fE(n,o,()=>o(n.currentUser)),dE(n,a=>o(a))}}const i=Bh("auth");return i&&Yy(n,`http://${i}`),n}function Rw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Wy({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=_t("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Rw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Iw("Browser");var Vc={};const jc="@firebase/database",qc="1.0.5";/**
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
 */let Dd="";function Pw(t){Dd=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Aw(e)}}catch{}return new Nw},En=Md("localStorage"),kw=Md("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Sa("@firebase/database"),Ow=function(){let t=1;return function(){return t++}}(),Ld=function(t){const e=iv(t),n=new ev;n.update(e);const s=n.digest();return Ia.encodeByteArray(s)},pi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=pi.apply(null,s):typeof s=="object"?e+=_e(s):e+=s,e+=" "}return e};let Fs=null,Gc=!0;const xw=function(t,e){C(!e,"Can't turn on custom loggers persistently."),Zn.logLevel=ie.VERBOSE,Fs=Zn.log.bind(Zn)},Ae=function(...t){if(Gc===!0&&(Gc=!1,Fs===null&&kw.get("logging_enabled")===!0&&xw()),Fs){const e=pi.apply(null,t);Fs(e)}},_i=function(t){return function(...e){Ae(t,...e)}},Go=function(...t){const e="FIREBASE INTERNAL ERROR: "+pi(...t);Zn.error(e)},Nt=function(...t){const e=`FIREBASE FATAL ERROR: ${pi(...t)}`;throw Zn.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+pi(...t);Zn.warn(e)},Dw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Mw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},os="[MIN_NAME]",An="[MAX_NAME]",ps=function(t,e){if(t===e)return 0;if(t===os||e===An)return-1;if(e===os||t===An)return 1;{const n=Kc(t),s=Kc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Lw=function(t,e){return t===e?0:t<e?-1:1},ws=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},Ua=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=_e(e[s]),n+=":",n+=Ua(t[e[s]]);return n+="}",n},Ud=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $d=function(t){C(!Fd(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Fw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Uw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $w(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Ww=new RegExp("^-?(0*)\\d{1,10}$"),Hw=-2147483648,Bw=2147483647,Kc=function(t){if(Ww.test(t)){const e=Number(t);if(e>=Hw&&e<=Bw)return e}return null},_s=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},Vw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Us=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class jw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class Bi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="5",Wd="v",Hd="s",Bd="r",Vd="f",jd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qd="ls",Gd="p",Ko="ac",Kd="websocket",zd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=En.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&En.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Gw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Qd(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===Kd)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===zd)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gw(t)&&(n.ns=t.namespace);const i=[];return qe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.counters_={}}incrementCounter(e,n=1){xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Fm(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo={},ho={};function Wa(t){const e=t.toString();return uo[e]||(uo[e]=new Kw),uo[e]}function zw(t,e){const n=t.toString();return ho[n]||(ho[n]=e()),ho[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&_s(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="start",Qw="close",Jw="pLPCommand",Xw="pRTLPCB",Jd="id",Xd="pw",Zd="ser",Zw="cb",eI="seg",tI="ts",nI="d",sI="dframe",ef=1870,tf=30,iI=ef-tf,rI=25e3,oI=3e4;class Vn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_i(e),this.stats_=Wa(n),this.urlFn=l=>(this.appCheckToken&&(l[Ko]=this.appCheckToken),Qd(n,zd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Yw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oI)),Mw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ha((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zc)this.id=a,this.password=l;else if(o===Qw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[zc]="t",s[Zd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Zw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Wd]=$a,this.transportSessionId&&(s[Hd]=this.transportSessionId),this.lastSessionId&&(s[qd]=this.lastSessionId),this.applicationId&&(s[Gd]=this.applicationId),this.appCheckToken&&(s[Ko]=this.appCheckToken),typeof location<"u"&&location.hostname&&jd.test(location.hostname)&&(s[Bd]=Vd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vn.forceAllow_=!0}static forceDisallow(){Vn.forceDisallow_=!0}static isAvailable(){return Vn.forceAllow_?!0:!Vn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Fw()&&!Uw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wh(n),i=Ud(s,iI);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[sI]="t",s[Jd]=e,s[Xd]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ha{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ow(),window[Jw+this.uniqueCallbackIdentifier]=e,window[Xw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ha.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ae("frame writing exception"),a.stack&&Ae(a.stack),Ae(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jd]=this.myID,e[Xd]=this.myPW,e[Zd]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tf+s.length<=ef;){const o=this.pendingSegs.shift();s=s+"&"+eI+i+"="+o.seg+"&"+tI+i+"="+o.ts+"&"+nI+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(rI)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=16384,lI=45e3;let sr=null;typeof MozWebSocket<"u"?sr=MozWebSocket:typeof WebSocket<"u"&&(sr=WebSocket);class Ze{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_i(this.connId),this.stats_=Wa(n),this.connURL=Ze.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Wd]=$a,typeof location<"u"&&location.hostname&&jd.test(location.hostname)&&(o[Bd]=Vd),n&&(o[Hd]=n),s&&(o[qd]=s),i&&(o[Ko]=i),r&&(o[Gd]=r),Qd(e,Kd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,En.set("previous_websocket_failure",!0);try{let s;Gh(),this.mySock=new sr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&sr!==null&&!Ze.forceDisallow_}static previouslyFailed(){return En.isInMemoryStorage||En.get("previous_websocket_failure")===!0}markConnectionHealthy(){En.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Qs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ud(n,aI);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Vn,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ze&&Ze.isAvailable();let s=n&&!Ze.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ze];else{const i=this.transports_=[];for(const r of ei.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ei.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ei.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=6e4,uI=5e3,hI=10*1024,dI=100*1024,fo="t",Yc="d",fI="s",Qc="r",pI="e",Jc="o",Xc="a",Zc="n",eu="p",_I="h";class gI{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_i("c:"+this.id+":"),this.transportManager_=new ei(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fo in e){const n=e[fo];n===Xc?this.upgradeIfSecondaryHealthy_():n===Qc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Jc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ws("t",e),s=ws("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:eu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ws("t",e),s=ws("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ws(fo,e);if(Yc in e){const s=e[Yc];if(n===_I){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Zc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fI?this.onConnectionShutdown_(s):n===Qc?this.onReset_(s):n===pI?Go("Server Error: "+s):n===Jc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Go("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$a!==s&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(cI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:eu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(En.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends sf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ba()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ir}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=32,nu=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new oe("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function nn(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function rf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function of(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function af(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function ge(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Le(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lf(t,e){if(nn(t)!==nn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(nn(t)>nn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class vI{constructor(e,n){this.errorPrefix_=n,this.parts_=of(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=kr(this.parts_[s]);cf(this)}}function yI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=kr(e),cf(t)}function EI(t){const e=t.parts_.pop();t.byteLength_-=kr(e),t.parts_.length>0&&(t.byteLength_-=1)}function cf(t){if(t.byteLength_>nu)throw new Error(t.errorPrefix_+"has a key path longer than "+nu+" bytes ("+t.byteLength_+").");if(t.parts_.length>tu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tu+") or object contains a cycle "+mn(t))}function mn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends sf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ba}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=1e3,wI=60*5*1e3,su=30*1e3,II=1.3,CI=3e4,bI="server_kill",iu=3;class Pt extends nf{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pt.nextPersistentConnectionId_++,this.log_=_i("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Is,this.maxReconnectDelay_=wI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Gh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ba.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ir.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(_e(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Nr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Pt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xt(e,"w")){const s=is(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Zm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=su)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Xm(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Go("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CI&&(this.reconnectDelay_=Is),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*II)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new gI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Be(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(bI)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Be(h),l())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Lo(this.interruptReasons_)&&(this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ua(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=iu&&(this.reconnectDelay_=su,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=iu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Dd.replace(/\./g,"-")]=1,ba()?e["framework.cordova"]=1:qh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ir.getInstance().currentlyOnline();return Lo(this.interruptReasons_)&&e}}Pt.nextPersistentConnectionId_=0;Pt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new q(os,e),i=new q(os,n);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai;class uf extends Lr{static get __EMPTY_NODE(){return Ai}static set __EMPTY_NODE(e){Ai=e}compare(e,n){return ps(e.name,n.name)}isDefinedOn(e){throw us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(An,Ai)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,Ai)}toString(){return".key"}}const es=new uf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=i??He.EMPTY_NODE,this.right=r??He.EMPTY_NODE}copy(e,n,s,i,r){return new Ie(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return He.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class TI{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class He{constructor(e,n=He.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new He(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new He(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ni(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ni(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ni(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ni(this.root_,null,this.comparator_,!0,e)}}He.EMPTY_NODE=new TI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t,e){return ps(t.name,e.name)}function Va(t,e){return ps(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo;function RI(t){zo=t}const hf=function(t){return typeof t=="number"?"number:"+$d(t):"string:"+t},df=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xt(e,".sv"),"Priority must be a string or number.")}else C(t===zo||t.isEmpty(),"priority of unexpected type.");C(t===zo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),df(this.priorityNode_)}static set __childrenNodeConstructor(e){ru=e}static get __childrenNodeConstructor(){return ru}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:z(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||nn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$d(this.value_):e+=this.value_,this.lazyHash_=Ld(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),r=we.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff,pf;function PI(t){ff=t}function AI(t){pf=t}class NI extends Lr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ps(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(An,new we("[PRIORITY-POST]",pf))}makePost(e,n){const s=ff(e);return new q(n,new we("[PRIORITY-POST]",s))}toString(){return".priority"}}const pe=new NI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=Math.log(2);class OI{constructor(e){const n=r=>parseInt(Math.log(r)/kI,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ie(d,h.node,Ie.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),T=i(_+1,c);return h=t[_],d=n?n(h):h,new Ie(d,h.node,Ie.BLACK,m,T)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,T){const x=h-m,k=h;h-=m;const O=i(x+1,k),U=t[x],Y=n?n(U):U;_(new Ie(Y,U.node,T,null,O))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const T=l.nextBitIsOne(),x=Math.pow(2,l.count-(m+1));T?d(x,Ie.BLACK):(d(x,Ie.BLACK),d(x,Ie.RED))}return u},o=new OI(t.length),a=r(o);return new He(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po;const $n={};class bt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C($n&&pe,"ChildrenNode.ts has not been loaded"),po=po||new bt({".priority":$n},{".priority":pe}),po}get(e){const n=is(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof He?n:null}hasIndex(e){return xt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==es,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=rr(s,e.getCompare()):a=$n;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new bt(u,c)}addToIndexes(e,n){const s=Yi(this.indexes_,(i,r)=>{const o=is(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===$n)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),rr(a,o.getCompare())}else return $n;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new bt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Yi(this.indexes_,i=>{if(i===$n)return i;{const r=n.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new bt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs;class ${constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&df(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Cs||(Cs=new $(new He(Va),null,bt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Cs}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Cs:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Cs:this.priorityNode_;return new $(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{C(z(e)!==".priority"||nn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(pe,(o,a)=>{n[o]=a.val(e),s++,r&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hf(this.getPriority().val())+":"),this.forEachChild(pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ld(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gi?-1:0}withIndex(e){if(e===es||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===es||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(pe),i=n.getIterator(pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===es?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xI extends ${constructor(){super(new He(Va),$.EMPTY_NODE,bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const gi=new xI;Object.defineProperties(q,{MIN:{value:new q(os,$.EMPTY_NODE)},MAX:{value:new q(An,gi)}});uf.__EMPTY_NODE=$.EMPTY_NODE;we.__childrenNodeConstructor=$;RI(gi);AI(gi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=!0;function be(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,be(e))}if(!(t instanceof Array)&&DI){const n=[];let s=!1;if(qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=be(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return $.EMPTY_NODE;const r=rr(n,SI,o=>o.name,Va);if(s){const o=rr(n,pe.getCompare());return new $(r,be(e),new bt({".priority":o},{".priority":pe}))}else return new $(r,be(e),bt.Default)}else{let n=$.EMPTY_NODE;return qe(t,(s,i)=>{if(xt(t,s)&&s.substring(0,1)!=="."){const r=be(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(be(e))}}PI(be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI extends Lr{constructor(e){super(),this.indexPath_=e,C(!G(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ps(e.name,n.name):r}makePost(e,n){const s=be(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,gi);return new q(An,e)}toString(){return of(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI extends Lr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ps(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const s=be(e);return new q(n,s)}toString(){return".value"}}const FI=new LI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t){return{type:"value",snapshotNode:t}}function as(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ti(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ni(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function UI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ti(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(as(n,s)):o.trackChildChange(ni(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(ti(i,r))}),n.isLeafNode()||n.forEachChild(pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ni(i,r,o))}else s.trackChildChange(as(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.indexedFilter_=new ja(e.getIndex()),this.index_=e.getIndex(),this.startPost_=si.getStartPost_(e),this.endPost_=si.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new q(n,s))||(s=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const r=this;return n.forEachChild(pe,(o,a)=>{r.matches(new q(o,a))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new si(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new q(n,s))||(s=$.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new q(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ni(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ti(n,h));const T=a.updateImmediateChild(n,$.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(as(d.name,d.node)),T.updateImmediateChild(d.name,d.node)):T}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ti(c.name,c.node)),r.trackChildChange(as(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,$.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:os}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:An}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new qa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function WI(t){return t.loadsAllData()?new ja(t.getIndex()):t.hasLimit()?new $I(t):new si(t)}function ou(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pe?n="$priority":t.index_===FI?n="$value":t.index_===es?n="$key":(C(t.index_ instanceof MI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=_e(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+_e(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=_e(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+_e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function au(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends nf{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=_i("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=or.getListenId_(e,s),a={};this.listens_[o]=a;const l=ou(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),is(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=or.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ou(e._queryParams),s=e._path.toString(),i=new Nr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qs(a.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){return{value:null,children:new Map}}function gf(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,ar());const i=t.children.get(s);e=ae(e),gf(i,e,n)}}function Yo(t,e,n){t.value!==null?n(e,t.value):BI(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);Yo(i,r,n)})}function BI(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=10*1e3,jI=30*1e3,qI=5*60*1e3;class GI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new VI(e);const s=lu+(jI-lu)*Math.random();Us(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;qe(e,(i,r)=>{r>0&&xt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Us(this.reportStats_.bind(this),Math.floor(Math.random()*2*qI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nt||(nt={}));function mf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ga(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ka(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=nt.ACK_USER_WRITE,this.source=mf()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new lr(J(),n,this.revert)}}else return C(z(this.path)===e,"operationForChild called for unrelated child."),new lr(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.source=e,this.path=n,this.type=nt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new ii(this.source,J()):new ii(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=nt.OVERWRITE}operationForChild(e){return G(this.path)?new Nn(this.source,J(),this.snap.getImmediateChild(e)):new Nn(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=nt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new Nn(this.source,J(),n.value):new ri(this.source,J(),n)}else return C(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ri(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zI(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(UI(o.childName,o.snapshotNode))}),bs(t,i,"child_removed",e,s,n),bs(t,i,"child_added",e,s,n),bs(t,i,"child_moved",r,s,n),bs(t,i,"child_changed",e,s,n),bs(t,i,"value",e,s,n),i}function bs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>QI(t,a,l)),o.forEach(a=>{const l=YI(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function YI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function QI(t,e,n){if(e.childName==null||n.childName==null)throw us("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){return{eventCache:t,serverCache:e}}function $s(t,e,n,s){return Fr(new sn(e,n,s),t.serverCache)}function vf(t,e,n,s){return Fr(t.eventCache,new sn(e,n,s))}function cr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function kn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;const JI=()=>(_o||(_o=new He(Lw)),_o);class le{constructor(e,n=JI()){this.value=e,this.children=n}static fromObject(e){let n=new le(null);return qe(e,(s,i)=>{n=n.set(new oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(G(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ae(e),n);return r!=null?{path:ge(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(ae(e)):new le(null)}}set(e,n){if(G(e))return new le(n,this.children);{const s=z(e),r=(this.children.get(s)||new le(null)).set(ae(e),n),o=this.children.insert(s,r);return new le(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new le(null):new le(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(ae(e)):null}}setTree(e,n){if(G(e))return n;{const s=z(e),r=(this.children.get(s)||new le(null)).setTree(ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new le(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ge(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(G(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(ae(e),ge(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(G(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(ae(e),ge(n,i),s):new le(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ge(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.writeTree_=e}static empty(){return new it(new le(null))}}function Ws(t,e,n){if(G(e))return new it(new le(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Le(i,e);return r=r.updateChild(o,n),new it(t.writeTree_.set(i,r))}else{const i=new le(n),r=t.writeTree_.setTree(e,i);return new it(r)}}}function cu(t,e,n){let s=t;return qe(n,(i,r)=>{s=Ws(s,ge(e,i),r)}),s}function uu(t,e){if(G(e))return it.empty();{const n=t.writeTree_.setTree(e,new le(null));return new it(n)}}function Qo(t,e){return Dn(t,e)!=null}function Dn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function hu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(s,i)=>{e.push(new q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function Zt(t,e){if(G(e))return t;{const n=Dn(t,e);return n!=null?new it(new le(n)):new it(t.writeTree_.subtree(e))}}function Jo(t){return t.writeTree_.isEmpty()}function ls(t,e){return yf(J(),t.writeTree_,e)}function yf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=yf(ge(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ge(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t,e){return Cf(e,t)}function XI(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ws(t.visibleWrites,e,n)),t.lastWriteId=s}function ZI(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function eC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&tC(a,s.path)?i=!1:tt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return nC(t),!0;if(s.snap)t.visibleWrites=uu(t.visibleWrites,s.path);else{const a=s.children;qe(a,l=>{t.visibleWrites=uu(t.visibleWrites,ge(s.path,l))})}return!0}else return!1}function tC(t,e){if(t.snap)return tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tt(ge(t.path,n),e))return!0;return!1}function nC(t){t.visibleWrites=Ef(t.allWrites,sC,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sC(t){return t.visible}function Ef(t,e,n){let s=it.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)tt(n,o)?(a=Le(n,o),s=Ws(s,a,r.snap)):tt(o,n)&&(a=Le(o,n),s=Ws(s,J(),r.snap.getChild(a)));else if(r.children){if(tt(n,o))a=Le(n,o),s=cu(s,a,r.children);else if(tt(o,n))if(a=Le(o,n),G(a))s=cu(s,J(),r.children);else{const l=is(r.children,z(a));if(l){const c=l.getChild(ae(a));s=Ws(s,J(),c)}}}else throw us("WriteRecord should have .snap or .children")}}return s}function wf(t,e,n,s,i){if(!s&&!i){const r=Dn(t.visibleWrites,e);if(r!=null)return r;{const o=Zt(t.visibleWrites,e);if(Jo(o))return n;if(n==null&&!Qo(o,J()))return null;{const a=n||$.EMPTY_NODE;return ls(o,a)}}}else{const r=Zt(t.visibleWrites,e);if(!i&&Jo(r))return n;if(!i&&n==null&&!Qo(r,J()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(tt(c.path,e)||tt(e,c.path))},a=Ef(t.allWrites,o,e),l=n||$.EMPTY_NODE;return ls(a,l)}}}function iC(t,e,n){let s=$.EMPTY_NODE;const i=Dn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Zt(t.visibleWrites,e);return n.forEachChild(pe,(o,a)=>{const l=ls(Zt(r,new oe(o)),a);s=s.updateImmediateChild(o,l)}),hu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Zt(t.visibleWrites,e);return hu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function rC(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ge(e,n);if(Qo(t.visibleWrites,r))return null;{const o=Zt(t.visibleWrites,r);return Jo(o)?i.getChild(n):ls(o,i.getChild(n))}}function oC(t,e,n,s){const i=ge(e,n),r=Dn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Zt(t.visibleWrites,i);return ls(o,s.getNode().getImmediateChild(n))}else return null}function aC(t,e){return Dn(t.visibleWrites,e)}function lC(t,e,n,s,i,r,o){let a;const l=Zt(t.visibleWrites,e),c=Dn(l,J());if(c!=null)a=c;else if(n!=null)a=ls(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function cC(){return{visibleWrites:it.empty(),allWrites:[],lastWriteId:-1}}function ur(t,e,n,s){return wf(t.writeTree,t.treePath,e,n,s)}function za(t,e){return iC(t.writeTree,t.treePath,e)}function du(t,e,n,s){return rC(t.writeTree,t.treePath,e,n,s)}function hr(t,e){return aC(t.writeTree,ge(t.treePath,e))}function uC(t,e,n,s,i,r){return lC(t.writeTree,t.treePath,e,n,s,i,r)}function Ya(t,e,n){return oC(t.writeTree,t.treePath,e,n)}function If(t,e){return Cf(ge(t.treePath,e),t.writeTree)}function Cf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ni(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ti(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,as(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ni(s,e.snapshotNode,i.oldSnap));else throw us("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const bf=new dC;class Qa{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new sn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ya(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kn(this.viewCache_),r=uC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){return{filter:t}}function pC(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _C(t,e,n,s,i){const r=new hC;let o,a;if(n.type===nt.OVERWRITE){const c=n;c.source.fromUser?o=Xo(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=dr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===nt.MERGE){const c=n;c.source.fromUser?o=mC(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Zo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===nt.ACK_USER_WRITE){const c=n;c.revert?o=EC(t,e,c.path,s,i,r):o=vC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===nt.LISTEN_COMPLETE)o=yC(t,e,n.path,s,r);else throw us("Unknown operation type: "+n.type);const l=r.getChanges();return gC(e,o,l),{viewCache:o,changes:l}}function gC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=cr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(_f(cr(e)))}}function Tf(t,e,n,s,i,r){const o=e.eventCache;if(hr(s,n)!=null)return e;{let a,l;if(G(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kn(e),u=c instanceof $?c:$.EMPTY_NODE,h=za(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ur(s,kn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(n);if(c===".priority"){C(nn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=du(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ae(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=du(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ya(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return $s(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function dr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=z(n);if(!l.isCompleteForPath(n)&&nn(n)>1)return e;const m=ae(n),x=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),_,x,m,bf,null)}const h=vf(e,c,l.isFullyInitialized()||G(n),u.filtersNodes()),d=new Qa(i,h,r);return Tf(t,h,n,i,d,a)}function Xo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Qa(i,e,r);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=$s(e,c,!0,t.filter.filtersNodes());else{const h=z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=$s(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ae(n),_=a.getNode().getImmediateChild(h);let m;if(G(d))m=s;else{const T=u.getCompleteChild(h);T!=null?rf(d)===".priority"&&T.getChild(af(d)).isEmpty()?m=T:m=T.updateChild(d,s):m=$.EMPTY_NODE}if(_.equals(m))l=e;else{const T=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=$s(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function fu(t,e){return t.eventCache.isCompleteForChild(e)}function mC(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ge(n,l);fu(e,z(u))&&(a=Xo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ge(n,l);fu(e,z(u))||(a=Xo(t,a,u,c,i,r,o))}),a}function pu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;G(n)?c=s:c=new le(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=pu(t,_,d);l=dr(t,l,new oe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),T=pu(t,m,d);l=dr(t,l,new oe(h),T,i,r,o,a)}}),l}function vC(t,e,n,s,i,r,o){if(hr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return dr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(G(n)){let c=new le(null);return l.getNode().forEachChild(es,(u,h)=>{c=c.set(new oe(u),h)}),Zo(t,e,n,c,i,r,a,o)}else return e}else{let c=new le(null);return s.foreach((u,h)=>{const d=ge(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Zo(t,e,n,c,i,r,a,o)}}function yC(t,e,n,s,i){const r=e.serverCache,o=vf(e,r.getNode(),r.isFullyInitialized()||G(n),r.isFiltered());return Tf(t,o,n,s,bf,i)}function EC(t,e,n,s,i,r){let o;if(hr(s,n)!=null)return e;{const a=new Qa(s,e,i),l=e.eventCache.getNode();let c;if(G(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ur(s,kn(e));else{const h=e.serverCache.getNode();C(h instanceof $,"serverChildren would be complete if leaf node"),u=za(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=z(n);let h=Ya(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ae(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,$.EMPTY_NODE,ae(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ur(s,kn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||hr(s,J())!=null,$s(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ja(s.getIndex()),r=WI(s);this.processor_=fC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode($.EMPTY_NODE,a.getNode(),null),u=new sn(l,o.isFullyInitialized(),i.filtersNodes()),h=new sn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Fr(h,u),this.eventGenerator_=new KI(this.query_)}get query(){return this.query_}}function IC(t){return t.viewCache_.serverCache.getNode()}function CC(t){return cr(t.viewCache_)}function bC(t,e){const n=kn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function _u(t){return t.eventRegistrations_.length===0}function TC(t,e){t.eventRegistrations_.push(e)}function gu(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function mu(t,e,n,s){e.type===nt.MERGE&&e.source.queryId!==null&&(C(kn(t.viewCache_),"We should always have a full cache before handling merges"),C(cr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=_C(t.processor_,i,e,n,s);return pC(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Sf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function SC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(r,o)=>{s.push(as(r,o))}),n.isFullyInitialized()&&s.push(_f(n.getNode())),Sf(t,s,n.getNode(),e)}function Sf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return zI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;class Rf{constructor(){this.views=new Map}}function RC(t){C(!fr,"__referenceConstructor has already been defined"),fr=t}function PC(){return C(fr,"Reference.ts has not been loaded"),fr}function AC(t){return t.views.size===0}function Ja(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),mu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(mu(o,e,n,s));return r}}function Pf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=ur(n,i?s:null),l=!1;a?l=!0:s instanceof $?(a=za(n,s),l=!1):(a=$.EMPTY_NODE,l=!1);const c=Fr(new sn(a,l,!1),new sn(s,i,!1));return new wC(e,c)}return o}function NC(t,e,n,s,i,r){const o=Pf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),TC(o,n),SC(o,n)}function kC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=rn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(gu(c,n,s)),_u(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(gu(l,n,s)),_u(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!rn(t)&&r.push(new(PC())(e._repo,e._path)),{removed:r,events:o}}function Af(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function en(t,e){let n=null;for(const s of t.views.values())n=n||bC(s,e);return n}function Nf(t,e){if(e._queryParams.loadsAllData())return $r(t);{const s=e._queryIdentifier;return t.views.get(s)}}function kf(t,e){return Nf(t,e)!=null}function rn(t){return $r(t)!=null}function $r(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr;function OC(t){C(!pr,"__referenceConstructor has already been defined"),pr=t}function xC(){return C(pr,"Reference.ts has not been loaded"),pr}let DC=1;class vu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=cC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Of(t,e,n,s,i){return XI(t.pendingWriteTree_,e,n,s,i),i?vi(t,new Nn(mf(),e,n)):[]}function wn(t,e,n=!1){const s=ZI(t.pendingWriteTree_,e);if(eC(t.pendingWriteTree_,e)){let r=new le(null);return s.snap!=null?r=r.set(J(),!0):qe(s.children,o=>{r=r.set(new oe(o),!0)}),vi(t,new lr(s.path,r,n))}else return[]}function mi(t,e,n){return vi(t,new Nn(Ga(),e,n))}function MC(t,e,n){const s=le.fromObject(n);return vi(t,new ri(Ga(),e,s))}function LC(t,e){return vi(t,new ii(Ga(),e))}function FC(t,e,n){const s=Za(t,n);if(s){const i=el(s),r=i.path,o=i.queryId,a=Le(r,e),l=new ii(Ka(o),a);return tl(t,r,l)}else return[]}function xf(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||kf(o,e))){const l=kC(o,e,n,s);AC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>rn(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=HC(d);for(let m=0;m<_.length;++m){const T=_[m],x=T.query,k=Ff(t,T);t.listenProvider_.startListening(Hs(x),oi(t,x),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Hs(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Wr(d));t.listenProvider_.stopListening(Hs(d),_)}))}BC(t,c)}return a}function Df(t,e,n,s){const i=Za(t,s);if(i!=null){const r=el(i),o=r.path,a=r.queryId,l=Le(o,e),c=new Nn(Ka(a),l,n);return tl(t,o,c)}else return[]}function UC(t,e,n,s){const i=Za(t,s);if(i){const r=el(i),o=r.path,a=r.queryId,l=Le(o,e),c=le.fromObject(n),u=new ri(Ka(a),l,c);return tl(t,o,u)}else return[]}function $C(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=Le(d,i);r=r||en(_,m),o=o||rn(_)});let a=t.syncPointTree_.get(i);a?(o=o||rn(a),r=r||en(a,J())):(a=new Rf,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const T=en(m,J());T&&(r=r.updateImmediateChild(_,T))}));const c=kf(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Wr(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=VC();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Ur(t.pendingWriteTree_,i);let h=NC(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Nf(a,e);h=h.concat(jC(t,e,d))}return h}function Xa(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Le(o,e),c=en(a,l);if(c)return c});return wf(i,e,r,n,!0)}function WC(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Le(c,n);s=s||en(u,h)});let i=t.syncPointTree_.get(n);i?s=s||en(i,J()):(i=new Rf,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new sn(s,!0,!1):null,a=Ur(t.pendingWriteTree_,e._path),l=Pf(i,e,a,r?o.getNode():$.EMPTY_NODE,r);return CC(l)}function vi(t,e){return Mf(e,t.syncPointTree_,null,Ur(t.pendingWriteTree_,J()))}function Mf(t,e,n,s){if(G(t.path))return Lf(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=en(i,J()));let r=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=If(s,o);r=r.concat(Mf(a,l,c,u))}return i&&(r=r.concat(Ja(i,t,s,n))),r}}function Lf(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=en(i,J()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=If(s,o),u=t.operationForChild(o);u&&(r=r.concat(Lf(u,a,l,c)))}),i&&(r=r.concat(Ja(i,t,s,n))),r}function Ff(t,e){const n=e.query,s=oi(t,n);return{hashFn:()=>(IC(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?FC(t,n._path,s):LC(t,n._path);{const r=$w(i,n);return xf(t,n,null,r)}}}}function oi(t,e){const n=Wr(e);return t.queryToTagMap.get(n)}function Wr(t){return t._path.toString()+"$"+t._queryIdentifier}function Za(t,e){return t.tagToQueryMap.get(e)}function el(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function tl(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=Ur(t.pendingWriteTree_,e);return Ja(s,n,i,null)}function HC(t){return t.fold((e,n,s)=>{if(n&&rn(n))return[$r(n)];{let i=[];return n&&(i=Af(n)),qe(s,(r,o)=>{i=i.concat(o)}),i}})}function Hs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(xC())(t._repo,t._path):t}function BC(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Wr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function VC(){return DC++}function jC(t,e,n){const s=e._path,i=oi(t,e),r=Ff(t,n),o=t.listenProvider_.startListening(Hs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!rn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!G(c)&&u&&rn(u))return[$r(u).query];{let d=[];return u&&(d=d.concat(Af(u).map(_=>_.query))),qe(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Hs(u),oi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nl(n)}node(){return this.node_}}class sl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new sl(this.syncTree_,n)}node(){return Xa(this.syncTree_,this.path_)}}const qC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yu=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return GC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return KC(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},GC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},KC=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},zC=function(t,e,n,s){return il(e,new sl(n,t),s)},Uf=function(t,e,n){return il(t,new nl(e),n)};function il(t,e,n){const s=t.getPriority().val(),i=yu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=yu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new we(a,be(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new we(i))),o.forEachChild(pe,(a,l)=>{const c=il(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ol(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=z(n);for(;i!==null;){const r=is(s.node.children,i)||{children:{},childCount:0};s=new rl(i,s,r),n=ae(n),i=z(n)}return s}function gs(t){return t.node.value}function $f(t,e){t.node.value=e,ea(t)}function Wf(t){return t.node.childCount>0}function YC(t){return gs(t)===void 0&&!Wf(t)}function Hr(t,e){qe(t.node.children,(n,s)=>{e(new rl(n,t,s))})}function Hf(t,e,n,s){n&&!s&&e(t),Hr(t,i=>{Hf(i,e,!0,s)}),n&&s&&e(t)}function QC(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function yi(t){return new oe(t.parent===null?t.name:yi(t.parent)+"/"+t.name)}function ea(t){t.parent!==null&&JC(t.parent,t.name,t)}function JC(t,e,n){const s=YC(n),i=xt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ea(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ea(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=/[\[\].#$\/\u0000-\u001F\u007F]/,ZC=/[\[\].#$\u0000-\u001F\u007F]/,go=10*1024*1024,Bf=function(t){return typeof t=="string"&&t.length!==0&&!XC.test(t)},Vf=function(t){return typeof t=="string"&&t.length!==0&&!ZC.test(t)},eb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vf(t)},tb=function(t,e,n,s){al(Ta(t,"value"),e,n)},al=function(t,e,n){const s=n instanceof oe?new vI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+mn(s));if(typeof e=="function")throw new Error(t+"contains a function "+mn(s)+" with contents = "+e.toString());if(Fd(e))throw new Error(t+"contains "+e.toString()+" "+mn(s));if(typeof e=="string"&&e.length>go/3&&kr(e)>go)throw new Error(t+"contains a string greater than "+go+" utf8 bytes "+mn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(qe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Bf(o)))throw new Error(t+" contains an invalid key ("+o+") "+mn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yI(s,o),al(t,a,s),EI(s)}),i&&r)throw new Error(t+' contains ".value" child '+mn(s)+" in addition to actual children.")}},jf=function(t,e,n,s){if(!Vf(n))throw new Error(Ta(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nb=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jf(t,e,n)},sb=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ib=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Bf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!eb(n))throw new Error(Ta(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qf(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!lf(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function vt(t,e,n){qf(t,n),ob(t,s=>tt(s,e)||tt(e,s))}function ob(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ab(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ab(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Fs&&Ae("event: "+n.toString()),_s(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="repo_interrupt",cb=25;class ub{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ar(),this.transactionQueueTree_=new rl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hb(t,e,n){if(t.stats_=Wa(t.repoInfo_),t.forceRestClient_||Vw())t.server_=new or(t.repoInfo_,(s,i,r,o)=>{Eu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Pt(t.repoInfo_,e,(s,i,r,o)=>{Eu(t,s,i,r,o)},s=>{wu(t,s)},s=>{fb(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=zw(t.repoInfo_,()=>new GI(t.stats_,t.server_)),t.infoData_=new HI,t.infoSyncTree_=new vu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=mi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cl(t,"connected",!1),t.serverSyncTree_=new vu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);vt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function db(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ll(t){return qC({timestamp:db(t)})}function Eu(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Yi(n,c=>be(c));o=UC(t.serverSyncTree_,r,l,i)}else{const l=be(n);o=Df(t.serverSyncTree_,r,l,i)}else if(s){const l=Yi(n,c=>be(c));o=MC(t.serverSyncTree_,r,l)}else{const l=be(n);o=mi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Vr(t,r)),vt(t.eventQueue_,a,o)}function wu(t,e){cl(t,"connected",e),e===!1&&gb(t)}function fb(t,e){qe(e,(n,s)=>{cl(t,n,s)})}function cl(t,e,n){const s=new oe("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(s,i);const r=mi(t.infoSyncTree_,s,i);vt(t.eventQueue_,s,r)}function Gf(t){return t.nextWriteId_++}function pb(t,e,n){const s=WC(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=be(i).withIndex(e._queryParams.getIndex());$C(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=mi(t.serverSyncTree_,e._path,r);else{const a=oi(t.serverSyncTree_,e);o=Df(t.serverSyncTree_,e._path,r,a)}return vt(t.eventQueue_,e._path,o),xf(t.serverSyncTree_,e,n,null,!0),r},i=>(Br(t,"get for query "+_e(e)+" failed: "+i),Promise.reject(new Error(i))))}function _b(t,e,n,s,i){Br(t,"set",{path:e.toString(),value:n,priority:s});const r=ll(t),o=be(n,s),a=Xa(t.serverSyncTree_,e),l=Uf(o,a,r),c=Gf(t),u=Of(t.serverSyncTree_,e,l,c,!0);qf(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||Be("set at "+e+" failed: "+d);const T=wn(t.serverSyncTree_,c,!m);vt(t.eventQueue_,e,T),vb(t,i,d,_)});const h=Jf(t,e);Vr(t,h),vt(t.eventQueue_,h,[])}function gb(t){Br(t,"onDisconnectEvents");const e=ll(t),n=ar();Yo(t.onDisconnect_,J(),(i,r)=>{const o=zC(i,r,t.serverSyncTree_,e);gf(n,i,o)});let s=[];Yo(n,J(),(i,r)=>{s=s.concat(mi(t.serverSyncTree_,i,r));const o=Jf(t,i);Vr(t,o)}),t.onDisconnect_=ar(),vt(t.eventQueue_,J(),s)}function mb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lb)}function Br(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function vb(t,e,n,s){e&&_s(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Kf(t,e,n){return Xa(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function ul(t,e=t.transactionQueueTree_){if(e||jr(t,e),gs(e)){const n=Yf(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&yb(t,yi(e),n)}else Wf(e)&&Hr(e,n=>{ul(t,n)})}function yb(t,e,n){const s=n.map(c=>c.currentWriteId),i=Kf(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Le(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Br(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(wn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();jr(t,ol(t.transactionQueueTree_,e)),ul(t,t.transactionQueueTree_),vt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)_s(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Be("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Vr(t,e)}},o)}function Vr(t,e){const n=zf(t,e),s=yi(n),i=Yf(t,n);return Eb(t,i,s),s}function Eb(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Le(n,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cb)u=!0,h="maxretry",i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Kf(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){al("transaction failed: Data returned ",_,l.path);let m=be(_);typeof _=="object"&&_!=null&&xt(_,".priority")||(m=m.updatePriority(d.getPriority()));const x=l.currentWriteId,k=ll(t),O=Uf(m,d,k);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=O,l.currentWriteId=Gf(t),o.splice(o.indexOf(x),1),i=i.concat(Of(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),i=i.concat(wn(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0))}vt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}jr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)_s(s[a]);ul(t,t.transactionQueueTree_)}function zf(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&gs(s)===void 0;)s=ol(s,n),e=ae(e),n=z(e);return s}function Yf(t,e){const n=[];return Qf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Qf(t,e,n){const s=gs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Hr(e,i=>{Qf(t,i,n)})}function jr(t,e){const n=gs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,$f(e,n.length>0?n:void 0)}Hr(e,s=>{jr(t,s)})}function Jf(t,e){const n=yi(zf(t,e)),s=ol(t.transactionQueueTree_,e);return QC(s,i=>{mo(t,i)}),mo(t,s),Hf(s,i=>{mo(t,i)}),n}function mo(t,e){const n=gs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$f(e,void 0):n.length=r+1,vt(t.eventQueue_,yi(e),i);for(let o=0;o<s.length;o++)_s(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ib(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Iu=function(t,e){const n=Cb(t),s=n.namespace;n.domain==="firebase.com"&&Nt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Dw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Yd(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},Cb=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=wb(t.substring(u,h)));const d=Ib(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class Tb{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class hl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:rf(this._path)}get ref(){return new Dt(this._repo,this._path)}get _queryIdentifier(){const e=au(this._queryParams),n=Ua(e);return n==="{}"?"default":n}get _queryObject(){return au(this._queryParams)}isEqual(e){if(e=xe(e),!(e instanceof hl))return!1;const n=this._repo===e._repo,s=lf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mI(this._path)}}class Dt extends hl{constructor(e,n){super(e,n,new qa,!1)}get parent(){const e=af(this._path);return e===null?null:new Dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ai{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),s=_r(this.ref,e);return new ai(this._node.getChild(n),s,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ai(i,_r(this.ref,s),pe)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vo(t,e){return t=xe(t),t._checkNotDeleted("ref"),e!==void 0?_r(t._root,e):t._root}function _r(t,e){return t=xe(t),z(t._path)===null?nb("child","path",e):jf("child","path",e),new Dt(t._repo,ge(t._path,e))}function Rb(t,e){t=xe(t),sb("set",t._path),tb("set",e,t._path);const n=new Nr;return _b(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Cu(t){t=xe(t);const e=new Sb(()=>{}),n=new dl(e);return pb(t._repo,t,n).then(s=>new ai(s,new Dt(t._repo,t._path),t._queryParams.getIndex()))}class dl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new bb("value",this,new ai(e.snapshotNode,new Dt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Tb(this,e,n):null}matches(e){return e instanceof dl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}RC(Dt);OC(Dt);/**
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
 */const Pb="FIREBASE_DATABASE_EMULATOR_HOST",ta={};let Ab=!1;function Nb(t,e,n,s){t.repoInfo_=new Yd(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function kb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Iu(r,i),a=o.repoInfo,l;typeof process<"u"&&Vc&&(l=Vc[Pb]),l?(r=`http://${l}?ns=${a.namespace}`,o=Iu(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new qw(t.name,t.options,e);ib("Invalid Firebase Database URL",o),G(o.path)||Nt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=xb(a,t,c,new jw(t.name,n));return new Db(u,t)}function Ob(t,e){const n=ta[e];(!n||n[t.key]!==t)&&Nt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mb(t),delete n[t.key]}function xb(t,e,n,s){let i=ta[e.name];i||(i={},ta[e.name]=i);let r=i[t.toURLString()];return r&&Nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ub(t,Ab,n,s),i[t.toURLString()]=r,r}class Db{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ob(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nt("Cannot call "+e+" on a deleted database.")}}function yo(t=Jh(),e){const n=Pa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Vm("database");s&&Mb(n,...s)}return n}function Mb(t,e,n,s={}){t=xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Nt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Bi(Bi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:jm(s.mockUserToken,t.app.options.projectId);r=new Bi(o)}Nb(i,e,n,r)}/**
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
 */function Lb(t){Pw(ds),rs(new Tn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return kb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Xt(jc,qc,t),Xt(jc,qc,"esm2017")}Pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Lb();const Fb={firebaseConfig:{apiKey:"AIzaSyC6OKfRLtntX1mzOgfPRGeQWlBQKakP8rI",authDomain:"motw-frontend-hq.firebaseapp.com",databaseURL:"https://motw-frontend-hq-default-rtdb.firebaseio.com",projectId:"motw-frontend-hq",storageBucket:"motw-frontend-hq.appspot.com",messagingSenderId:"607683384016",appId:"1:607683384016:web:334f0aa4548af6b1f884d5"}},Ub={data(){return{message:"We doin our best here",email:"",password:"",name:"",isLoggedIn:!1,userName:"",showRegister:!1,errorMessage:""}},created(){this.app=Qh(Fb.firebaseConfig),this.auth=Sw(this.app);const t=vo(yo(this.app));Cu(_r(t,"profiles/")).then(e=>{e.exists()?console.log(e.val()):console.log("No data available")}).catch(e=>{console.error(e)}),pE(this.auth,e=>{e?(this.isLoggedIn=!0,this.fetchUserName(e.uid)):(this.isLoggedIn=!1,this.userName="")})},methods:{setCookie(t,e,n){const s=new Date;s.setTime(s.getTime()+n*24*60*60*1e3);const i=`expires=${s.toUTCString()}`;document.cookie=`${t}=${e}; ${i}; path=/`},displayMessage(t){console.log(t)},registerUser(){cE(this.auth,this.email,this.password).then(t=>{const e=t.user,n={name:this.name,email:this.email,last_login:Date.now()},s=yo();Rb(vo(s,"profiles/"+e.uid),n),console.log("Created!"),this.isLoggedIn=!0,this.userName=this.name,this.errorMessage=""}).catch(t=>{this.errorMessage=t.message})},loginUser(){hE(this.auth,Td).then(()=>uE(this.auth,this.email,this.password)).then(t=>{console.log("Logged in"),this.isLoggedIn=!0,this.fetchUserName(t.user.uid),this.errorMessage=""}).catch(t=>{this.errorMessage=t.message})},logoutUser(){_E(this.auth).then(()=>{console.log("Signed Out!"),this.isLoggedIn=!1,this.userName=""}).catch(t=>{console.error(t)})},fetchUserName(t){const e=yo(),n=vo(e,"profiles/"+t);Cu(n).then(s=>{s.exists()?this.userName=s.val().name:console.log("No user data available")}).catch(s=>{console.error(s)})}}},fl=t=>(ln("data-v-0691f463"),t=t(),cn(),t),$b={key:0},Wb={key:0,class:"error"},Hb=fl(()=>M("label",{for:"email"},"Email:",-1)),Bb=fl(()=>M("label",{for:"password"},"Password:",-1)),Vb={key:1},jb=fl(()=>M("label",{for:"name"},"Name:",-1)),qb={key:2},Gb={key:3},Kb={key:1};function zb(t,e,n,s,i,r){return Ce(),Se("div",null,[M("h1",null,As(i.message),1),i.isLoggedIn?(Ce(),Se("div",Kb,[M("p",null,"Welcome, "+As(i.userName)+"!",1),M("button",{onClick:e[6]||(e[6]=(...o)=>r.logoutUser&&r.logoutUser(...o))},"Logout")])):(Ce(),Se("div",$b,[i.errorMessage?(Ce(),Se("div",Wb,As(i.errorMessage),1)):Fl("",!0),M("div",null,[Hb,zn(M("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),id:"email"},null,512),[[Yn,i.email]])]),M("div",null,[Bb,zn(M("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),id:"password"},null,512),[[Yn,i.password]])]),i.showRegister?(Ce(),Se("div",Vb,[jb,zn(M("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>i.name=o),id:"name"},null,512),[[Yn,i.name]])])):Fl("",!0),i.showRegister?(Ce(),Se("div",qb,[M("button",{onClick:e[3]||(e[3]=(...o)=>r.registerUser&&r.registerUser(...o))},"Register")])):(Ce(),Se("div",Gb,[M("button",{onClick:e[4]||(e[4]=(...o)=>r.loginUser&&r.loginUser(...o))},"Login"),M("p",null,[Pe("No account? "),M("a",{href:"#",onClick:e[5]||(e[5]=Sh(o=>i.showRegister=!0,["prevent"]))},"Click here to register")])]))]))])}const Yb=Ot(Ub,[["render",zb],["__scopeId","data-v-0691f463"]]),Qb={name:"Dashboard"},Jb=t=>(ln("data-v-49eafe61"),t=t(),cn(),t),Xb={class:"dashboard"},Zb=Jb(()=>M("h1",null,"Dashboard",-1));function eT(t,e,n,s,i,r){const o=Gs("router-link");return Ce(),Se("div",Xb,[Zb,M("ul",null,[M("li",null,[re(o,{to:"/case-files"},{default:Me(()=>[Pe("Case Files")]),_:1})]),M("li",null,[re(o,{to:"/knowledge-base"},{default:Me(()=>[Pe("Knowledge Base")]),_:1})]),M("li",null,[re(o,{to:"/acquisitions"},{default:Me(()=>[Pe("Acquisitions")]),_:1})]),M("li",null,[re(o,{to:"/inventory"},{default:Me(()=>[Pe("Inventory")]),_:1})]),M("li",null,[re(o,{to:"/profile"},{default:Me(()=>[Pe("Profile")]),_:1})])])])}const tT=Ot(Qb,[["render",eT],["__scopeId","data-v-49eafe61"]]),nT={name:"CaseFiles",data(){return{caseFiles:[]}},mounted(){fetch("/api/cases").then(t=>t.json()).then(t=>{this.caseFiles=t}).catch(t=>console.error("Error fetching cases:",t))}},sT=t=>(ln("data-v-2956c6d7"),t=t(),cn(),t),iT={class:"case-files"},rT=sT(()=>M("h1",null,"Case Files",-1));function oT(t,e,n,s,i,r){const o=Gs("router-link");return Ce(),Se("div",iT,[rT,M("ul",null,[(Ce(!0),Se(ht,null,d_(i.caseFiles,a=>(Ce(),Se("li",{key:a.id},[M("h2",null,As(a.title),1),M("p",null,As(a.summary),1),re(o,{to:"/case-files/"+a.id},{default:Me(()=>[Pe("Read more")]),_:2},1032,["to"])]))),128))])])}const aT=Ot(nT,[["render",oT],["__scopeId","data-v-2956c6d7"]]),lT={name:"KnowledgeBase"},cT=t=>(ln("data-v-c63d8655"),t=t(),cn(),t),uT={class:"knowledge-base"},hT=cT(()=>M("h1",null,"Knowledge Base",-1)),dT=[hT];function fT(t,e,n,s,i,r){return Ce(),Se("div",uT,dT)}const pT=Ot(lT,[["render",fT],["__scopeId","data-v-c63d8655"]]),_T={name:"Acquisitions"},gT=t=>(ln("data-v-25399de4"),t=t(),cn(),t),mT={class:"acquisitions"},vT=gT(()=>M("h1",null,"Acquisitions",-1)),yT=[vT];function ET(t,e,n,s,i,r){return Ce(),Se("div",mT,yT)}const wT=Ot(_T,[["render",ET],["__scopeId","data-v-25399de4"]]),IT={name:"Inventory"},CT=t=>(ln("data-v-46f62913"),t=t(),cn(),t),bT={class:"inventory"},TT=CT(()=>M("h1",null,"Inventory",-1)),ST=[TT];function RT(t,e,n,s,i,r){return Ce(),Se("div",bT,ST)}const PT=Ot(IT,[["render",RT],["__scopeId","data-v-46f62913"]]),AT={name:"Profile",data(){return{user:{username:"",email:""},password:""}},mounted(){fetch("/api/profile").then(t=>t.json()).then(t=>{this.user=t}).catch(t=>console.error("Error fetching profile:",t))},methods:{updateProfile(){const t={email:this.user.email,password:this.password};fetch("/api/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{console.log("Profile updated:",e),alert("Profile updated successfully")}).catch(e=>console.error("Error updating profile:",e))}}},Ei=t=>(ln("data-v-2da233e8"),t=t(),cn(),t),NT={class:"profile"},kT=Ei(()=>M("h1",null,"Profile",-1)),OT=Ei(()=>M("label",{for:"username"},"Username:",-1)),xT=Ei(()=>M("label",{for:"email"},"Email:",-1)),DT=Ei(()=>M("label",{for:"password"},"Password:",-1)),MT=Ei(()=>M("button",{type:"submit"},"Update Profile",-1));function LT(t,e,n,s,i,r){return Ce(),Se("div",NT,[kT,M("form",{onSubmit:e[3]||(e[3]=Sh((...o)=>r.updateProfile&&r.updateProfile(...o),["prevent"]))},[M("div",null,[OT,zn(M("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.user.username=o),id:"username",disabled:""},null,512),[[Yn,i.user.username]])]),M("div",null,[xT,zn(M("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=o=>i.user.email=o),id:"email"},null,512),[[Yn,i.user.email]])]),M("div",null,[DT,zn(M("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=o=>i.password=o),id:"password",placeholder:"New password"},null,512),[[Yn,i.password]])]),MT],32)])}const FT=Ot(AT,[["render",LT],["__scopeId","data-v-2da233e8"]]),UT=[{path:"/",name:"Home",component:Dm},{path:"/login",name:"Login",component:Yb},{path:"/dashboard",name:"Dashboard",component:tT},{path:"/case-files",name:"CaseFiles",component:aT},{path:"/knowledge-base",name:"KnowledgeBase",component:pT},{path:"/acquisitions",name:"Acquisitions",component:wT},{path:"/inventory",name:"Inventory",component:PT},{path:"/profile",name:"Profile",component:FT}],$T=Rm({history:nm(),routes:UT});vg(Tg).use($T).mount("#app");
