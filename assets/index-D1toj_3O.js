(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ha(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const me={},ms=[],ot=()=>{},v_=()=>!1,Yr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ja=t=>t.startsWith("onUpdate:"),Le=Object.assign,qa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},w_=Object.prototype.hasOwnProperty,X=(t,e)=>w_.call(t,e),j=Array.isArray,gs=t=>Di(t)==="[object Map]",Qr=t=>Di(t)==="[object Set]",_c=t=>Di(t)==="[object Date]",K=t=>typeof t=="function",Ae=t=>typeof t=="string",Yt=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Sh=t=>(_e(t)||K(t))&&K(t.then)&&K(t.catch),Rh=Object.prototype.toString,Di=t=>Rh.call(t),b_=t=>Di(t).slice(8,-1),kh=t=>Di(t)==="[object Object]",Ga=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ei=Ha(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},E_=/-(\w)/g,Dt=Jr(t=>t.replace(E_,(e,n)=>n?n.toUpperCase():"")),C_=/\B([A-Z])/g,Ls=Jr(t=>t.replace(C_,"-$1").toLowerCase()),Xr=Jr(t=>t.charAt(0).toUpperCase()+t.slice(1)),No=Jr(t=>t?`on${Xr(t)}`:""),In=(t,e)=>!Object.is(t,e),ar=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ah=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},vr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mc;const Ph=()=>mc||(mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ka(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ae(s)?R_(s):Ka(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ae(t)||_e(t))return t}const I_=/;(?![^(]*\))/g,T_=/:([^]+)/,S_=/\/\*[^]*?\*\//g;function R_(t){const e={};return t.replace(S_,"").split(I_).forEach(n=>{if(n){const s=n.split(T_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function za(t){let e="";if(Ae(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=za(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const k_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",A_=Ha(k_);function Nh(t){return!!t||t===""}function P_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Zr(t[s],e[s]);return n}function Zr(t,e){if(t===e)return!0;let n=_c(t),s=_c(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Yt(t),s=Yt(e),n||s)return t===e;if(n=j(t),s=j(e),n||s)return n&&s?P_(t,e):!1;if(n=_e(t),s=_e(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Zr(t[o],e[o]))return!1}}return String(t)===String(e)}function N_(t,e){return t.findIndex(n=>Zr(n,e))}const re=t=>Ae(t)?t:t==null?"":j(t)||_e(t)&&(t.toString===Rh||!K(t.toString))?JSON.stringify(t,Oh,2):String(t),Oh=(t,e)=>e&&e.__v_isRef?Oh(t,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Oo(s,r)+" =>"]=i,n),{})}:Qr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Oo(n))}:Yt(e)?Oo(e):_e(e)&&!j(e)&&!kh(e)?String(e):e,Oo=(t,e="")=>{var n;return Yt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ht;class O_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ht,!e&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){ht=this}off(){ht=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function x_(t,e=ht){e&&e.active&&e.effects.push(t)}function D_(){return ht}let qn;class Ya{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,x_(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Pn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(L_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Nn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=yn,n=qn;try{return yn=!0,qn=this,this._runnings++,gc(this),this.fn()}finally{yc(this),this._runnings--,qn=n,yn=e}}stop(){this.active&&(gc(this),yc(this),this.onStop&&this.onStop(),this.active=!1)}}function L_(t){return t.value}function gc(t){t._trackId++,t._depsLength=0}function yc(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)xh(t.deps[e],t);t.deps.length=t._depsLength}}function xh(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let yn=!0,ia=0;const Dh=[];function Pn(){Dh.push(yn),yn=!1}function Nn(){const t=Dh.pop();yn=t===void 0?!0:t}function Qa(){ia++}function Ja(){for(ia--;!ia&&ra.length;)ra.shift()()}function Lh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&xh(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ra=[];function Mh(t,e,n){Qa();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&ra.push(s.scheduler)))}Ja()}const Fh=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},oa=new WeakMap,Gn=Symbol(""),aa=Symbol("");function Ze(t,e,n){if(yn&&qn){let s=oa.get(t);s||oa.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Fh(()=>s.delete(n))),Lh(qn,i)}}function qt(t,e,n,s,i,r){const o=oa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Yt(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?Ga(n)&&a.push(o.get("length")):(a.push(o.get(Gn)),gs(t)&&a.push(o.get(aa)));break;case"delete":j(t)||(a.push(o.get(Gn)),gs(t)&&a.push(o.get(aa)));break;case"set":gs(t)&&a.push(o.get(Gn));break}Qa();for(const l of a)l&&Mh(l,4);Ja()}const M_=Ha("__proto__,__v_isRef,__isVue"),Uh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yt)),vc=F_();function F_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let r=0,o=this.length;r<o;r++)Ze(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ne)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pn(),Qa();const s=ne(this)[e].apply(this,n);return Ja(),Nn(),s}}),t}function U_(t){Yt(t)||(t=String(t));const e=ne(this);return Ze(e,"has",t),e.hasOwnProperty(t)}class Wh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?J_:Hh:r?$h:Vh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=j(e);if(!i){if(o&&X(vc,n))return Reflect.get(vc,n,s);if(n==="hasOwnProperty")return U_}const a=Reflect.get(e,n,s);return(Yt(n)?Uh.has(n):M_(n))||(i||Ze(e,"get",n),r)?a:et(a)?o&&Ga(n)?a:a.value:_e(a)?i?qh(a):Li(a):a}}class Bh extends Wh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=pi(r);if(!wr(s)&&!pi(s)&&(r=ne(r),s=ne(s)),!j(e)&&et(r)&&!et(s))return l?!1:(r.value=s,!0)}const o=j(e)&&Ga(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,s,i);return e===ne(i)&&(o?In(s,r)&&qt(e,"set",n,s):qt(e,"add",n,s)),a}deleteProperty(e,n){const s=X(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&qt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Yt(n)||!Uh.has(n))&&Ze(e,"has",n),s}ownKeys(e){return Ze(e,"iterate",j(e)?"length":Gn),Reflect.ownKeys(e)}}class W_ extends Wh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const B_=new Bh,V_=new W_,$_=new Bh(!0);const Xa=t=>t,eo=t=>Reflect.getPrototypeOf(t);function Qi(t,e,n=!1,s=!1){t=t.__v_raw;const i=ne(t),r=ne(e);n||(In(e,r)&&Ze(i,"get",e),Ze(i,"get",r));const{has:o}=eo(i),a=s?Xa:n?tl:_i;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ji(t,e=!1){const n=this.__v_raw,s=ne(n),i=ne(t);return e||(In(t,i)&&Ze(s,"has",t),Ze(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Xi(t,e=!1){return t=t.__v_raw,!e&&Ze(ne(t),"iterate",Gn),Reflect.get(t,"size",t)}function wc(t){t=ne(t);const e=ne(this);return eo(e).has.call(e,t)||(e.add(t),qt(e,"add",t,t)),this}function bc(t,e){e=ne(e);const n=ne(this),{has:s,get:i}=eo(n);let r=s.call(n,t);r||(t=ne(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?In(e,o)&&qt(n,"set",t,e):qt(n,"add",t,e),this}function Ec(t){const e=ne(this),{has:n,get:s}=eo(e);let i=n.call(e,t);i||(t=ne(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&qt(e,"delete",t,void 0),r}function Cc(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&qt(t,"clear",void 0,void 0),n}function Zi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ne(o),l=e?Xa:t?tl:_i;return!t&&Ze(a,"iterate",Gn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function er(t,e,n){return function(...s){const i=this.__v_raw,r=ne(i),o=gs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Xa:e?tl:_i;return!e&&Ze(r,"iterate",l?aa:Gn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function sn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function H_(){const t={get(r){return Qi(this,r)},get size(){return Xi(this)},has:Ji,add:wc,set:bc,delete:Ec,clear:Cc,forEach:Zi(!1,!1)},e={get(r){return Qi(this,r,!1,!0)},get size(){return Xi(this)},has:Ji,add:wc,set:bc,delete:Ec,clear:Cc,forEach:Zi(!1,!0)},n={get(r){return Qi(this,r,!0)},get size(){return Xi(this,!0)},has(r){return Ji.call(this,r,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Zi(!0,!1)},s={get(r){return Qi(this,r,!0,!0)},get size(){return Xi(this,!0)},has(r){return Ji.call(this,r,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=er(r,!1,!1),n[r]=er(r,!0,!1),e[r]=er(r,!1,!0),s[r]=er(r,!0,!0)}),[t,n,e,s]}const[j_,q_,G_,K_]=H_();function Za(t,e){const n=e?t?K_:G_:t?q_:j_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const z_={get:Za(!1,!1)},Y_={get:Za(!1,!0)},Q_={get:Za(!0,!1)};const Vh=new WeakMap,$h=new WeakMap,Hh=new WeakMap,J_=new WeakMap;function X_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Z_(t){return t.__v_skip||!Object.isExtensible(t)?0:X_(b_(t))}function Li(t){return pi(t)?t:el(t,!1,B_,z_,Vh)}function jh(t){return el(t,!1,$_,Y_,$h)}function qh(t){return el(t,!0,V_,Q_,Hh)}function el(t,e,n,s,i){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Z_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ti(t){return pi(t)?ti(t.__v_raw):!!(t&&t.__v_isReactive)}function pi(t){return!!(t&&t.__v_isReadonly)}function wr(t){return!!(t&&t.__v_isShallow)}function Gh(t){return t?!!t.__v_raw:!1}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function em(t){return Object.isExtensible(t)&&Ah(t,"__v_skip",!0),t}const _i=t=>_e(t)?Li(t):t,tl=t=>_e(t)?qh(t):t;class Kh{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ya(()=>e(this._value),()=>lr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ne(this);return(!e._cacheable||e.effect.dirty)&&In(e._value,e._value=e.effect.run())&&lr(e,4),zh(e),e.effect._dirtyLevel>=2&&lr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function tm(t,e,n=!1){let s,i;const r=K(t);return r?(s=t,i=ot):(s=t.get,i=t.set),new Kh(s,i,r||!i,n)}function zh(t){var e;yn&&qn&&(t=ne(t),Lh(qn,(e=t.dep)!=null?e:t.dep=Fh(()=>t.dep=void 0,t instanceof Kh?t:void 0)))}function lr(t,e=4,n){t=ne(t);const s=t.dep;s&&Mh(s,e)}function et(t){return!!(t&&t.__v_isRef===!0)}function nm(t){return Yh(t,!1)}function sm(t){return Yh(t,!0)}function Yh(t,e){return et(t)?t:new im(t,e)}class im{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:_i(e)}get value(){return zh(this),this._value}set value(e){const n=this.__v_isShallow||wr(e)||pi(e);e=n?e:ne(e),In(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_i(e),lr(this,4))}}function ys(t){return et(t)?t.value:t}const rm={get:(t,e,n)=>ys(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return et(i)&&!et(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Qh(t){return ti(t)?t:new Proxy(t,rm)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vn(t,e,n,s){try{return s?t(...s):t()}catch(i){to(i,e,n)}}function gt(t,e,n,s){if(K(t)){const i=vn(t,e,n,s);return i&&Sh(i)&&i.catch(r=>{to(r,e,n)}),i}if(j(t)){const i=[];for(let r=0;r<t.length;r++)i.push(gt(t[r],e,n,s));return i}}function to(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Pn(),vn(l,null,10,[t,o,a]),Nn();return}}om(t,n,i,s)}function om(t,e,n,s=!0){console.error(t)}let mi=!1,la=!1;const Be=[];let Rt=0;const vs=[];let an=null,Vn=0;const Jh=Promise.resolve();let nl=null;function sl(t){const e=nl||Jh;return t?e.then(this?t.bind(this):t):e}function am(t){let e=Rt+1,n=Be.length;for(;e<n;){const s=e+n>>>1,i=Be[s],r=gi(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function il(t){(!Be.length||!Be.includes(t,mi&&t.allowRecurse?Rt+1:Rt))&&(t.id==null?Be.push(t):Be.splice(am(t.id),0,t),Xh())}function Xh(){!mi&&!la&&(la=!0,nl=Jh.then(ed))}function lm(t){const e=Be.indexOf(t);e>Rt&&Be.splice(e,1)}function cm(t){j(t)?vs.push(...t):(!an||!an.includes(t,t.allowRecurse?Vn+1:Vn))&&vs.push(t),Xh()}function Ic(t,e,n=mi?Rt+1:0){for(;n<Be.length;n++){const s=Be[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Be.splice(n,1),n--,s()}}}function Zh(t){if(vs.length){const e=[...new Set(vs)].sort((n,s)=>gi(n)-gi(s));if(vs.length=0,an){an.push(...e);return}for(an=e,Vn=0;Vn<an.length;Vn++)an[Vn]();an=null,Vn=0}}const gi=t=>t.id==null?1/0:t.id,um=(t,e)=>{const n=gi(t)-gi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ed(t){la=!1,mi=!0,Be.sort(um);try{for(Rt=0;Rt<Be.length;Rt++){const e=Be[Rt];e&&e.active!==!1&&vn(e,null,14)}}finally{Rt=0,Be.length=0,Zh(),mi=!1,nl=null,(Be.length||vs.length)&&ed()}}function hm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||me;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||me;d&&(i=n.map(_=>Ae(_)?_.trim():_)),h&&(i=n.map(vr))}let a,l=s[a=No(e)]||s[a=No(Dt(e))];!l&&r&&(l=s[a=No(Ls(e))]),l&&gt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(c,t,6,i)}}function td(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=td(c,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(_e(t)&&s.set(t,null),null):(j(r)?r.forEach(l=>o[l]=null):Le(o,r),_e(t)&&s.set(t,o),o)}function no(t,e){return!t||!Yr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,Ls(e))||X(t,e))}let Je=null,so=null;function br(t){const e=Je;return Je=t,so=t&&t.type.__scopeId||null,e}function Lt(t){so=t}function Mt(){so=null}function st(t,e=Je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Lc(-1);const r=br(e);let o;try{o=t(...i)}finally{br(r),s._d&&Lc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:y,inheritAttrs:C}=t,k=br(t);let N,O;try{if(n.shapeFlag&4){const V=i||s,oe=V;N=St(c.call(oe,V,u,h,_,d,y)),O=a}else{const V=e;N=St(V.length>1?V(h,{attrs:a,slots:o,emit:l}):V(h,null)),O=e.props?a:dm(a)}}catch(V){ii.length=0,to(V,t,1),N=ee(zn)}let L=N;if(O&&C!==!1){const V=Object.keys(O),{shapeFlag:oe}=L;V.length&&oe&7&&(r&&V.some(ja)&&(O=fm(O,r)),L=Ss(L,O,!1,!0))}return n.dirs&&(L=Ss(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),N=L,br(k),N}const dm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yr(n))&&((e||(e={}))[n]=t[n]);return e},fm=(t,e)=>{const n={};for(const s in t)(!ja(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function pm(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Tc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!no(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Tc(s,o,c):!0:!!o;return!1}function Tc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!no(n,r))return!0}return!1}function _m({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const nd="components";function pt(t,e){return gm(nd,t,!0,e)||t}const mm=Symbol.for("v-ndc");function gm(t,e,n=!0,s=!1){const i=Je||Ve;if(i){const r=i.type;if(t===nd){const a=hg(r,!1);if(a&&(a===e||a===Dt(e)||a===Xr(Dt(e))))return r}const o=Sc(i[t]||r[t],e)||Sc(i.appContext[t],e);return!o&&s?r:o}}function Sc(t,e){return t&&(t[e]||t[Dt(e)]||t[Xr(Dt(e))])}const ym=t=>t.__isSuspense;function vm(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):cm(t)}const wm=Symbol.for("v-scx"),bm=()=>Gt(wm),tr={};function cr(t,e,n){return sd(t,e,n)}function sd(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=me){if(e&&r){const $=e;e=(...Te)=>{$(...Te),oe()}}const l=Ve,c=$=>s===!0?$:Hn($,s===!1?1:void 0);let u,h=!1,d=!1;if(et(t)?(u=()=>t.value,h=wr(t)):ti(t)?(u=()=>c(t),h=!0):j(t)?(d=!0,h=t.some($=>ti($)||wr($)),u=()=>t.map($=>{if(et($))return $.value;if(ti($))return c($);if(K($))return vn($,l,2)})):K(t)?e?u=()=>vn(t,l,2):u=()=>(_&&_(),gt(t,l,3,[y])):u=ot,e&&s){const $=u;u=()=>Hn($())}let _,y=$=>{_=L.onStop=()=>{vn($,l,4),_=L.onStop=void 0}},C;if(oo)if(y=ot,e?n&&gt(e,l,3,[u(),d?[]:void 0,y]):u(),i==="sync"){const $=bm();C=$.__watcherHandles||($.__watcherHandles=[])}else return ot;let k=d?new Array(t.length).fill(tr):tr;const N=()=>{if(!(!L.active||!L.dirty))if(e){const $=L.run();(s||h||(d?$.some((Te,Pe)=>In(Te,k[Pe])):In($,k)))&&(_&&_(),gt(e,l,3,[$,k===tr?void 0:d&&k[0]===tr?[]:k,y]),k=$)}else L.run()};N.allowRecurse=!!e;let O;i==="sync"?O=N:i==="post"?O=()=>Qe(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),O=()=>il(N));const L=new Ya(u,ot,O),V=D_(),oe=()=>{L.stop(),V&&qa(V.effects,L)};return e?n?N():k=L.run():i==="post"?Qe(L.run.bind(L),l&&l.suspense):L.run(),C&&C.push(oe),oe}function Em(t,e,n){const s=this.proxy,i=Ae(t)?t.includes(".")?id(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=Mi(this),a=sd(i,r.bind(s),n);return o(),a}function id(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Hn(t,e=1/0,n){if(e<=0||!_e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,et(t))Hn(t.value,e,n);else if(j(t))for(let s=0;s<t.length;s++)Hn(t[s],e,n);else if(Qr(t)||gs(t))t.forEach(s=>{Hn(s,e,n)});else if(kh(t))for(const s in t)Hn(t[s],e,n);return t}function ue(t,e){if(Je===null)return t;const n=ao(Je)||Je.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=me]=e[i];r&&(K(r)&&(r={mounted:r,updated:r}),r.deep&&Hn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Fn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Pn(),gt(l,n,8,[t.el,a,t,e]),Nn())}}/*! #__NO_SIDE_EFFECTS__ */function rd(t,e){return K(t)?Le({name:t.name},e,{setup:t}):t}const ur=t=>!!t.type.__asyncLoader,od=t=>t.type.__isKeepAlive;function Cm(t,e){ad(t,"a",e)}function Im(t,e){ad(t,"da",e)}function ad(t,e,n=Ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(io(e,s,n),n){let i=n.parent;for(;i&&i.parent;)od(i.parent.vnode)&&Tm(s,e,n,i),i=i.parent}}function Tm(t,e,n,s){const i=io(e,t,s,!0);ld(()=>{qa(s[e],i)},n)}function io(t,e,n=Ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pn();const a=Mi(n),l=gt(e,n,t,o);return a(),Nn(),l});return s?i.unshift(r):i.push(r),r}}const Xt=t=>(e,n=Ve)=>(!oo||t==="sp")&&io(t,(...s)=>e(...s),n),Sm=Xt("bm"),Rm=Xt("m"),km=Xt("bu"),Am=Xt("u"),Pm=Xt("bum"),ld=Xt("um"),Nm=Xt("sp"),Om=Xt("rtg"),xm=Xt("rtc");function Dm(t,e=Ve){io("ec",t,e)}function kt(t,e,n,s){let i;const r=n;if(j(t)||Ae(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(_e(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r)}}else i=[];return i}const ca=t=>t?Cd(t)?ao(t)||t.proxy:ca(t.parent):null,ni=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ca(t.parent),$root:t=>ca(t.root),$emit:t=>t.emit,$options:t=>rl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,il(t.update)}),$nextTick:t=>t.n||(t.n=sl.bind(t.proxy)),$watch:t=>Em.bind(t)}),Do=(t,e)=>t!==me&&!t.__isScriptSetup&&X(t,e),Lm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Do(s,e))return o[e]=1,s[e];if(i!==me&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==me&&X(n,e))return o[e]=4,n[e];ua&&(o[e]=0)}}const u=ni[e];let h,d;if(u)return e==="$attrs"&&Ze(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==me&&X(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,X(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Do(i,e)?(i[e]=n,!0):s!==me&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==me&&X(t,o)||Do(e,o)||(a=r[0])&&X(a,o)||X(s,o)||X(ni,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rc(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ua=!0;function Mm(t){const e=rl(t),n=t.proxy,s=t.ctx;ua=!1,e.beforeCreate&&kc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:y,activated:C,deactivated:k,beforeDestroy:N,beforeUnmount:O,destroyed:L,unmounted:V,render:oe,renderTracked:$,renderTriggered:Te,errorCaptured:Pe,serverPrefetch:ct,expose:rt,inheritAttrs:tn,components:Mn,directives:Et,filters:$s}=e;if(c&&Fm(c,s,null),o)for(const ae in o){const te=o[ae];K(te)&&(s[ae]=te.bind(n))}if(i){const ae=i.call(n,n);_e(ae)&&(t.data=Li(ae))}if(ua=!0,r)for(const ae in r){const te=r[ae],Wt=K(te)?te.bind(n,n):K(te.get)?te.get.bind(n,n):ot,nn=!K(te)&&K(te.set)?te.set.bind(n):ot,Ct=dt({get:Wt,set:nn});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Ye=>Ct.value=Ye})}if(a)for(const ae in a)cd(a[ae],s,n,ae);if(l){const ae=K(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(te=>{hr(te,ae[te])})}u&&kc(u,t,"c");function Ne(ae,te){j(te)?te.forEach(Wt=>ae(Wt.bind(n))):te&&ae(te.bind(n))}if(Ne(Sm,h),Ne(Rm,d),Ne(km,_),Ne(Am,y),Ne(Cm,C),Ne(Im,k),Ne(Dm,Pe),Ne(xm,$),Ne(Om,Te),Ne(Pm,O),Ne(ld,V),Ne(Nm,ct),j(rt))if(rt.length){const ae=t.exposed||(t.exposed={});rt.forEach(te=>{Object.defineProperty(ae,te,{get:()=>n[te],set:Wt=>n[te]=Wt})})}else t.exposed||(t.exposed={});oe&&t.render===ot&&(t.render=oe),tn!=null&&(t.inheritAttrs=tn),Mn&&(t.components=Mn),Et&&(t.directives=Et)}function Fm(t,e,n=ot){j(t)&&(t=ha(t));for(const s in t){const i=t[s];let r;_e(i)?"default"in i?r=Gt(i.from||s,i.default,!0):r=Gt(i.from||s):r=Gt(i),et(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function kc(t,e,n){gt(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function cd(t,e,n,s){const i=s.includes(".")?id(n,s):()=>n[s];if(Ae(t)){const r=e[t];K(r)&&cr(i,r)}else if(K(t))cr(i,t.bind(n));else if(_e(t))if(j(t))t.forEach(r=>cd(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&cr(i,r,t)}}function rl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Er(l,c,o,!0)),Er(l,e,o)),_e(e)&&r.set(e,l),l}function Er(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Er(t,r,n,!0),i&&i.forEach(o=>Er(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Um[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Um={data:Ac,props:Pc,emits:Pc,methods:Js,computed:Js,beforeCreate:qe,created:qe,beforeMount:qe,mounted:qe,beforeUpdate:qe,updated:qe,beforeDestroy:qe,beforeUnmount:qe,destroyed:qe,unmounted:qe,activated:qe,deactivated:qe,errorCaptured:qe,serverPrefetch:qe,components:Js,directives:Js,watch:Bm,provide:Ac,inject:Wm};function Ac(t,e){return e?t?function(){return Le(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Wm(t,e){return Js(ha(t),ha(e))}function ha(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function qe(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?Le(Object.create(null),t,e):e}function Pc(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:Le(Object.create(null),Rc(t),Rc(e??{})):e}function Bm(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const s in e)n[s]=qe(t[s],e[s]);return n}function ud(){return{app:null,config:{isNativeTag:v_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vm=0;function $m(t,e){return function(s,i=null){K(s)||(s=Le({},s)),i!=null&&!_e(i)&&(i=null);const r=ud(),o=new WeakSet;let a=!1;const l=r.app={_uid:Vm++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:fg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(l,...u)):K(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=ee(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ao(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=si;si=l;try{return c()}finally{si=u}}};return l}}let si=null;function hr(t,e){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[t]=e}}function Gt(t,e,n=!1){const s=Ve||Je;if(s||si){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:si._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}const hd={},dd=()=>Object.create(hd),fd=t=>Object.getPrototypeOf(t)===hd;function Hm(t,e,n,s=!1){const i={},r=dd();t.propsDefaults=Object.create(null),pd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:jh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function jm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ne(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(no(t.emitsOptions,d))continue;const _=e[d];if(l)if(X(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const y=Dt(d);i[y]=da(l,a,y,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{pd(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=Ls(h))===h||!X(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=da(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!X(e,h))&&(delete r[h],c=!0)}c&&qt(t.attrs,"set","")}function pd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ei(l))continue;const c=e[l];let u;i&&X(i,u=Dt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:no(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ne(n),c=a||me;for(let u=0;u<r.length;u++){const h=r[u];n[h]=da(i,l,h,c[h],t,!X(c,h))}}return o}function da(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Mi(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ls(n))&&(s=!0))}return s}function _d(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!K(t)){const u=h=>{l=!0;const[d,_]=_d(h,e,!0);Le(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return _e(t)&&s.set(t,ms),ms;if(j(r))for(let u=0;u<r.length;u++){const h=Dt(r[u]);Nc(h)&&(o[h]=me)}else if(r)for(const u in r){const h=Dt(u);if(Nc(h)){const d=r[u],_=o[h]=j(d)||K(d)?{type:d}:Le({},d);if(_){const y=Dc(Boolean,_.type),C=Dc(String,_.type);_[0]=y>-1,_[1]=C<0||y<C,(y>-1||X(_,"default"))&&a.push(h)}}}const c=[o,a];return _e(t)&&s.set(t,c),c}function Nc(t){return t[0]!=="$"&&!ei(t)}function Oc(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function xc(t,e){return Oc(t)===Oc(e)}function Dc(t,e){return j(e)?e.findIndex(n=>xc(n,t)):K(e)&&xc(e,t)?0:-1}const md=t=>t[0]==="_"||t==="$stable",ol=t=>j(t)?t.map(St):[St(t)],qm=(t,e,n)=>{if(e._n)return e;const s=st((...i)=>ol(e(...i)),n);return s._c=!1,s},gd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(md(i))continue;const r=t[i];if(K(r))e[i]=qm(i,r,s);else if(r!=null){const o=ol(r);e[i]=()=>o}}},yd=(t,e)=>{const n=ol(e);t.slots.default=()=>n},Gm=(t,e)=>{const n=t.slots=dd();if(t.vnode.shapeFlag&32){const s=e._;s?(Le(n,e),Ah(n,"_",s,!0)):gd(e,n)}else e&&yd(t,e)},Km=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Le(i,e),!n&&a===1&&delete i._):(r=!e.$stable,gd(e,i)),o=e}else e&&(yd(t,e),o={default:1});if(r)for(const a in i)!md(a)&&o[a]==null&&delete i[a]};function fa(t,e,n,s,i=!1){if(j(t)){t.forEach((d,_)=>fa(d,e&&(j(e)?e[_]:e),n,s,i));return}if(ur(s)&&!i)return;const r=s.shapeFlag&4?ao(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===me?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ae(c)?(u[c]=null,X(h,c)&&(h[c]=null)):et(c)&&(c.value=null)),K(l))vn(l,a,12,[o,u]);else{const d=Ae(l),_=et(l);if(d||_){const y=()=>{if(t.f){const C=d?X(h,l)?h[l]:u[l]:l.value;i?j(C)&&qa(C,r):j(C)?C.includes(r)||C.push(r):d?(u[l]=[r],X(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,X(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Qe(y,n)):y()}}}const Qe=vm;function zm(t){return Ym(t)}function Ym(t,e){const n=Ph();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=ot,insertStaticContent:y}=t,C=(f,p,g,b=null,v=null,S=null,P=void 0,T=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!js(f,p)&&(b=w(f),Ye(f,v,S,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:E,ref:D,shapeFlag:B}=p;switch(E){case ro:k(f,p,g,b);break;case zn:N(f,p,g,b);break;case Mo:f==null&&O(p,g,b,P);break;case Se:Mn(f,p,g,b,v,S,P,T,R);break;default:B&1?oe(f,p,g,b,v,S,P,T,R):B&6?Et(f,p,g,b,v,S,P,T,R):(B&64||B&128)&&E.process(f,p,g,b,v,S,P,T,R,M)}D!=null&&v&&fa(D,f&&f.ref,S,p||f,!p)},k=(f,p,g,b)=>{if(f==null)s(p.el=a(p.children),g,b);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},N=(f,p,g,b)=>{f==null?s(p.el=l(p.children||""),g,b):p.el=f.el},O=(f,p,g,b)=>{[f.el,f.anchor]=y(f.children,p,g,b,f.el,f.anchor)},L=({el:f,anchor:p},g,b)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,b),f=v;s(p,g,b)},V=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},oe=(f,p,g,b,v,S,P,T,R)=>{p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),f==null?$(p,g,b,v,S,P,T,R):ct(f,p,v,S,P,T,R)},$=(f,p,g,b,v,S,P,T)=>{let R,E;const{props:D,shapeFlag:B,transition:W,dirs:G}=f;if(R=f.el=o(f.type,S,D&&D.is,D),B&8?u(R,f.children):B&16&&Pe(f.children,R,null,b,v,Lo(f,S),P,T),G&&Fn(f,null,b,"created"),Te(R,f,f.scopeId,P,b),D){for(const le in D)le!=="value"&&!ei(le)&&r(R,le,null,D[le],S,f.children,b,v,Ue);"value"in D&&r(R,"value",null,D.value,S),(E=D.onVnodeBeforeMount)&&Tt(E,b,f)}G&&Fn(f,null,b,"beforeMount");const J=Qm(v,W);J&&W.beforeEnter(R),s(R,p,g),((E=D&&D.onVnodeMounted)||J||G)&&Qe(()=>{E&&Tt(E,b,f),J&&W.enter(R),G&&Fn(f,null,b,"mounted")},v)},Te=(f,p,g,b,v)=>{if(g&&_(f,g),b)for(let S=0;S<b.length;S++)_(f,b[S]);if(v){let S=v.subTree;if(p===S){const P=v.vnode;Te(f,P,P.scopeId,P.slotScopeIds,v.parent)}}},Pe=(f,p,g,b,v,S,P,T,R=0)=>{for(let E=R;E<f.length;E++){const D=f[E]=T?ln(f[E]):St(f[E]);C(null,D,p,g,b,v,S,P,T)}},ct=(f,p,g,b,v,S,P)=>{const T=p.el=f.el;let{patchFlag:R,dynamicChildren:E,dirs:D}=p;R|=f.patchFlag&16;const B=f.props||me,W=p.props||me;let G;if(g&&Un(g,!1),(G=W.onVnodeBeforeUpdate)&&Tt(G,g,p,f),D&&Fn(p,f,g,"beforeUpdate"),g&&Un(g,!0),E?rt(f.dynamicChildren,E,T,g,b,Lo(p,v),S):P||te(f,p,T,null,g,b,Lo(p,v),S,!1),R>0){if(R&16)tn(T,p,B,W,g,b,v);else if(R&2&&B.class!==W.class&&r(T,"class",null,W.class,v),R&4&&r(T,"style",B.style,W.style,v),R&8){const J=p.dynamicProps;for(let le=0;le<J.length;le++){const ge=J[le],Oe=B[ge],ut=W[ge];(ut!==Oe||ge==="value")&&r(T,ge,Oe,ut,v,f.children,g,b,Ue)}}R&1&&f.children!==p.children&&u(T,p.children)}else!P&&E==null&&tn(T,p,B,W,g,b,v);((G=W.onVnodeUpdated)||D)&&Qe(()=>{G&&Tt(G,g,p,f),D&&Fn(p,f,g,"updated")},b)},rt=(f,p,g,b,v,S,P)=>{for(let T=0;T<p.length;T++){const R=f[T],E=p[T],D=R.el&&(R.type===Se||!js(R,E)||R.shapeFlag&70)?h(R.el):g;C(R,E,D,null,b,v,S,P,!0)}},tn=(f,p,g,b,v,S,P)=>{if(g!==b){if(g!==me)for(const T in g)!ei(T)&&!(T in b)&&r(f,T,g[T],null,P,p.children,v,S,Ue);for(const T in b){if(ei(T))continue;const R=b[T],E=g[T];R!==E&&T!=="value"&&r(f,T,E,R,P,p.children,v,S,Ue)}"value"in b&&r(f,"value",g.value,b.value,P)}},Mn=(f,p,g,b,v,S,P,T,R)=>{const E=p.el=f?f.el:a(""),D=p.anchor=f?f.anchor:a("");let{patchFlag:B,dynamicChildren:W,slotScopeIds:G}=p;G&&(T=T?T.concat(G):G),f==null?(s(E,g,b),s(D,g,b),Pe(p.children||[],g,D,v,S,P,T,R)):B>0&&B&64&&W&&f.dynamicChildren?(rt(f.dynamicChildren,W,g,v,S,P,T),(p.key!=null||v&&p===v.subTree)&&vd(f,p,!0)):te(f,p,g,D,v,S,P,T,R)},Et=(f,p,g,b,v,S,P,T,R)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?v.ctx.activate(p,g,b,P,R):$s(p,g,b,v,S,P,R):ls(f,p,R)},$s=(f,p,g,b,v,S,P)=>{const T=f.component=og(f,b,v);if(od(f)&&(T.ctx.renderer=M),ag(T),T.asyncDep){if(v&&v.registerDep(T,Ne),!f.el){const R=T.subTree=ee(zn);N(null,R,p,g)}}else Ne(T,f,p,g,v,S,P)},ls=(f,p,g)=>{const b=p.component=f.component;if(pm(f,p,g))if(b.asyncDep&&!b.asyncResolved){ae(b,p,g);return}else b.next=p,lm(b.update),b.effect.dirty=!0,b.update();else p.el=f.el,b.vnode=p},Ne=(f,p,g,b,v,S,P)=>{const T=()=>{if(f.isMounted){let{next:D,bu:B,u:W,parent:G,vnode:J}=f;{const hs=wd(f);if(hs){D&&(D.el=J.el,ae(f,D,P)),hs.asyncDep.then(()=>{f.isUnmounted||T()});return}}let le=D,ge;Un(f,!1),D?(D.el=J.el,ae(f,D,P)):D=J,B&&ar(B),(ge=D.props&&D.props.onVnodeBeforeUpdate)&&Tt(ge,G,D,J),Un(f,!0);const Oe=xo(f),ut=f.subTree;f.subTree=Oe,C(ut,Oe,h(ut.el),w(ut),f,v,S),D.el=Oe.el,le===null&&_m(f,Oe.el),W&&Qe(W,v),(ge=D.props&&D.props.onVnodeUpdated)&&Qe(()=>Tt(ge,G,D,J),v)}else{let D;const{el:B,props:W}=p,{bm:G,m:J,parent:le}=f,ge=ur(p);if(Un(f,!1),G&&ar(G),!ge&&(D=W&&W.onVnodeBeforeMount)&&Tt(D,le,p),Un(f,!0),B&&ye){const Oe=()=>{f.subTree=xo(f),ye(B,f.subTree,f,v,null)};ge?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Oe()):Oe()}else{const Oe=f.subTree=xo(f);C(null,Oe,g,b,f,v,S),p.el=Oe.el}if(J&&Qe(J,v),!ge&&(D=W&&W.onVnodeMounted)){const Oe=p;Qe(()=>Tt(D,le,Oe),v)}(p.shapeFlag&256||le&&ur(le.vnode)&&le.vnode.shapeFlag&256)&&f.a&&Qe(f.a,v),f.isMounted=!0,p=g=b=null}},R=f.effect=new Ya(T,ot,()=>il(E),f.scope),E=f.update=()=>{R.dirty&&R.run()};E.id=f.uid,Un(f,!0),E()},ae=(f,p,g)=>{p.component=f;const b=f.vnode.props;f.vnode=p,f.next=null,jm(f,p.props,b,g),Km(f,p.children,g),Pn(),Ic(f),Nn()},te=(f,p,g,b,v,S,P,T,R=!1)=>{const E=f&&f.children,D=f?f.shapeFlag:0,B=p.children,{patchFlag:W,shapeFlag:G}=p;if(W>0){if(W&128){nn(E,B,g,b,v,S,P,T,R);return}else if(W&256){Wt(E,B,g,b,v,S,P,T,R);return}}G&8?(D&16&&Ue(E,v,S),B!==E&&u(g,B)):D&16?G&16?nn(E,B,g,b,v,S,P,T,R):Ue(E,v,S,!0):(D&8&&u(g,""),G&16&&Pe(B,g,b,v,S,P,T,R))},Wt=(f,p,g,b,v,S,P,T,R)=>{f=f||ms,p=p||ms;const E=f.length,D=p.length,B=Math.min(E,D);let W;for(W=0;W<B;W++){const G=p[W]=R?ln(p[W]):St(p[W]);C(f[W],G,g,null,v,S,P,T,R)}E>D?Ue(f,v,S,!0,!1,B):Pe(p,g,b,v,S,P,T,R,B)},nn=(f,p,g,b,v,S,P,T,R)=>{let E=0;const D=p.length;let B=f.length-1,W=D-1;for(;E<=B&&E<=W;){const G=f[E],J=p[E]=R?ln(p[E]):St(p[E]);if(js(G,J))C(G,J,g,null,v,S,P,T,R);else break;E++}for(;E<=B&&E<=W;){const G=f[B],J=p[W]=R?ln(p[W]):St(p[W]);if(js(G,J))C(G,J,g,null,v,S,P,T,R);else break;B--,W--}if(E>B){if(E<=W){const G=W+1,J=G<D?p[G].el:b;for(;E<=W;)C(null,p[E]=R?ln(p[E]):St(p[E]),g,J,v,S,P,T,R),E++}}else if(E>W)for(;E<=B;)Ye(f[E],v,S,!0),E++;else{const G=E,J=E,le=new Map;for(E=J;E<=W;E++){const nt=p[E]=R?ln(p[E]):St(p[E]);nt.key!=null&&le.set(nt.key,E)}let ge,Oe=0;const ut=W-J+1;let hs=!1,dc=0;const Hs=new Array(ut);for(E=0;E<ut;E++)Hs[E]=0;for(E=G;E<=B;E++){const nt=f[E];if(Oe>=ut){Ye(nt,v,S,!0);continue}let It;if(nt.key!=null)It=le.get(nt.key);else for(ge=J;ge<=W;ge++)if(Hs[ge-J]===0&&js(nt,p[ge])){It=ge;break}It===void 0?Ye(nt,v,S,!0):(Hs[It-J]=E+1,It>=dc?dc=It:hs=!0,C(nt,p[It],g,null,v,S,P,T,R),Oe++)}const fc=hs?Jm(Hs):ms;for(ge=fc.length-1,E=ut-1;E>=0;E--){const nt=J+E,It=p[nt],pc=nt+1<D?p[nt+1].el:b;Hs[E]===0?C(null,It,g,pc,v,S,P,T,R):hs&&(ge<0||E!==fc[ge]?Ct(It,g,pc,2):ge--)}}},Ct=(f,p,g,b,v=null)=>{const{el:S,type:P,transition:T,children:R,shapeFlag:E}=f;if(E&6){Ct(f.component.subTree,p,g,b);return}if(E&128){f.suspense.move(p,g,b);return}if(E&64){P.move(f,p,g,M);return}if(P===Se){s(S,p,g);for(let B=0;B<R.length;B++)Ct(R[B],p,g,b);s(f.anchor,p,g);return}if(P===Mo){L(f,p,g);return}if(b!==2&&E&1&&T)if(b===0)T.beforeEnter(S),s(S,p,g),Qe(()=>T.enter(S),v);else{const{leave:B,delayLeave:W,afterLeave:G}=T,J=()=>s(S,p,g),le=()=>{B(S,()=>{J(),G&&G()})};W?W(S,J,le):le()}else s(S,p,g)},Ye=(f,p,g,b=!1,v=!1)=>{const{type:S,props:P,ref:T,children:R,dynamicChildren:E,shapeFlag:D,patchFlag:B,dirs:W}=f;if(T!=null&&fa(T,null,g,f,!0),D&256){p.ctx.deactivate(f);return}const G=D&1&&W,J=!ur(f);let le;if(J&&(le=P&&P.onVnodeBeforeUnmount)&&Tt(le,p,f),D&6)Yi(f.component,g,b);else{if(D&128){f.suspense.unmount(g,b);return}G&&Fn(f,null,p,"beforeUnmount"),D&64?f.type.remove(f,p,g,v,M,b):E&&(S!==Se||B>0&&B&64)?Ue(E,p,g,!1,!0):(S===Se&&B&384||!v&&D&16)&&Ue(R,p,g),b&&cs(f)}(J&&(le=P&&P.onVnodeUnmounted)||G)&&Qe(()=>{le&&Tt(le,p,f),G&&Fn(f,null,p,"unmounted")},g)},cs=f=>{const{type:p,el:g,anchor:b,transition:v}=f;if(p===Se){us(g,b);return}if(p===Mo){V(f);return}const S=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:T}=v,R=()=>P(g,S);T?T(f.el,S,R):R()}else S()},us=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Yi=(f,p,g)=>{const{bum:b,scope:v,update:S,subTree:P,um:T}=f;b&&ar(b),v.stop(),S&&(S.active=!1,Ye(P,f,p,g)),T&&Qe(T,p),Qe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ue=(f,p,g,b=!1,v=!1,S=0)=>{for(let P=S;P<f.length;P++)Ye(f[P],p,g,b,v)},w=f=>f.shapeFlag&6?w(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let x=!1;const A=(f,p,g)=>{f==null?p._vnode&&Ye(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,g),x||(x=!0,Ic(),Zh(),x=!1),p._vnode=f},M={p:C,um:Ye,m:Ct,r:cs,mt:$s,mc:Pe,pc:te,pbc:rt,n:w,o:t};let se,ye;return{render:A,hydrate:se,createApp:$m(A,se)}}function Lo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Qm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vd(t,e,n=!1){const s=t.children,i=e.children;if(j(s)&&j(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=ln(i[r]),a.el=o.el),n||vd(o,a)),a.type===ro&&(a.el=o.el)}}function Jm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function wd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wd(e)}const Xm=t=>t.__isTeleport,Se=Symbol.for("v-fgt"),ro=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),Mo=Symbol.for("v-stc"),ii=[];let _t=null;function F(t=!1){ii.push(_t=t?null:[])}function Zm(){ii.pop(),_t=ii[ii.length-1]||null}let yi=1;function Lc(t){yi+=t}function bd(t){return t.dynamicChildren=yi>0?_t||ms:null,Zm(),yi>0&&_t&&_t.push(t),t}function U(t,e,n,s,i,r){return bd(m(t,e,n,s,i,r,!0))}function eg(t,e,n,s,i){return bd(ee(t,e,n,s,i,!0))}function pa(t){return t?t.__v_isVNode===!0:!1}function js(t,e){return t.type===e.type&&t.key===e.key}const Ed=({key:t})=>t??null,dr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ae(t)||et(t)||K(t)?{i:Je,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,s=0,i=null,r=t===Se?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ed(e),ref:e&&dr(e),scopeId:so,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Je};return a?(al(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ae(n)?8:16),yi>0&&!o&&_t&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&_t.push(l),l}const ee=tg;function tg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===mm)&&(t=zn),pa(t)){const a=Ss(t,e,!0);return n&&al(a,n),yi>0&&!r&&_t&&(a.shapeFlag&6?_t[_t.indexOf(t)]=a:_t.push(a)),a.patchFlag|=-2,a}if(dg(t)&&(t=t.__vccOpts),e){e=ng(e);let{class:a,style:l}=e;a&&!Ae(a)&&(e.class=za(a)),_e(l)&&(Gh(l)&&!j(l)&&(l=Le({},l)),e.style=Ka(l))}const o=Ae(t)?1:ym(t)?128:Xm(t)?64:_e(t)?4:K(t)?2:0;return m(t,e,n,s,i,o,r,!0)}function ng(t){return t?Gh(t)||fd(t)?Le({},t):t:null}function Ss(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?sg(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ed(c),ref:e&&e.ref?n&&r?j(r)?r.concat(dr(e)):[r,dr(e)]:dr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ss(t.ssContent),ssFallback:t.ssFallback&&Ss(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&(u.transition=l.clone(u)),u}function Ge(t=" ",e=0){return ee(ro,null,t,e)}function ve(t="",e=!1){return e?(F(),eg(zn,null,t)):ee(zn,null,t)}function St(t){return t==null||typeof t=="boolean"?ee(zn):j(t)?ee(Se,null,t.slice()):typeof t=="object"?ln(t):ee(ro,null,String(t))}function ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ss(t)}function al(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),al(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!fd(e)?e._ctx=Je:i===3&&Je&&(Je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:Je},n=32):(e=String(e),s&64?(n=16,e=[Ge(e)]):n=8);t.children=e,t.shapeFlag|=n}function sg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=za([e.class,s.class]));else if(i==="style")e.style=Ka([e.style,s.style]);else if(Yr(i)){const r=e[i],o=s[i];o&&r!==o&&!(j(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Tt(t,e,n,s=null){gt(t,e,7,[n,s])}const ig=ud();let rg=0;function og(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ig,r={uid:rg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new O_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_d(s,i),emitsOptions:td(s,i),emit:null,emitted:null,propsDefaults:me,inheritAttrs:s.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=hm.bind(null,r),t.ce&&t.ce(r),r}let Ve=null,Cr,_a;{const t=Ph(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Cr=e("__VUE_INSTANCE_SETTERS__",n=>Ve=n),_a=e("__VUE_SSR_SETTERS__",n=>oo=n)}const Mi=t=>{const e=Ve;return Cr(t),t.scope.on(),()=>{t.scope.off(),Cr(e)}},Mc=()=>{Ve&&Ve.scope.off(),Cr(null)};function Cd(t){return t.vnode.shapeFlag&4}let oo=!1;function ag(t,e=!1){e&&_a(e);const{props:n,children:s}=t.vnode,i=Cd(t);Hm(t,n,i,e),Gm(t,s);const r=i?lg(t,e):void 0;return e&&_a(!1),r}function lg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Lm);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?ug(t):null,r=Mi(t);Pn();const o=vn(s,t,0,[t.props,i]);if(Nn(),r(),Sh(o)){if(o.then(Mc,Mc),e)return o.then(a=>{Fc(t,a,e)}).catch(a=>{to(a,t,0)});t.asyncDep=o}else Fc(t,o,e)}else Id(t,e)}function Fc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=Qh(e)),Id(t,n)}let Uc;function Id(t,e,n){const s=t.type;if(!t.render){if(!e&&Uc&&!s.render){const i=s.template||rl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Le(Le({isCustomElement:r,delimiters:a},o),l);s.render=Uc(i,c)}}t.render=s.render||ot}{const i=Mi(t);Pn();try{Mm(t)}finally{Nn(),i()}}}const cg={get(t,e){return Ze(t,"get",""),t[e]}};function ug(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cg),slots:t.slots,emit:t.emit,expose:e}}function ao(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qh(em(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ni)return ni[n](t)},has(e,n){return n in e||n in ni}}))}function hg(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function dg(t){return K(t)&&"__vccOpts"in t}const dt=(t,e)=>tm(t,e,oo);function Td(t,e,n){const s=arguments.length;return s===2?_e(e)&&!j(e)?pa(e)?ee(t,null,[e]):ee(t,e):ee(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&pa(n)&&(n=[n]),ee(t,e,n))}const fg="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const pg="http://www.w3.org/2000/svg",_g="http://www.w3.org/1998/Math/MathML",cn=typeof document<"u"?document:null,Wc=cn&&cn.createElement("template"),mg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?cn.createElementNS(pg,t):e==="mathml"?cn.createElementNS(_g,t):cn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>cn.createTextNode(t),createComment:t=>cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Wc.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Wc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gg=Symbol("_vtc");function yg(t,e,n){const s=t[gg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bc=Symbol("_vod"),vg=Symbol("_vsh"),wg=Symbol(""),bg=/(^|;)\s*display\s*:/;function Eg(t,e,n){const s=t.style,i=Ae(n);let r=!1;if(n&&!i){if(e)if(Ae(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&fr(s,a,"")}else for(const o in e)n[o]==null&&fr(s,o,"");for(const o in n)o==="display"&&(r=!0),fr(s,o,n[o])}else if(i){if(e!==n){const o=s[wg];o&&(n+=";"+o),s.cssText=n,r=bg.test(n)}}else e&&t.removeAttribute("style");Bc in t&&(t[Bc]=r?s.display:"",t[vg]&&(s.display="none"))}const Vc=/\s*!important$/;function fr(t,e,n){if(j(n))n.forEach(s=>fr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Cg(t,e);Vc.test(n)?t.setProperty(Ls(s),n.replace(Vc,""),"important"):t[s]=n}}const $c=["Webkit","Moz","ms"],Fo={};function Cg(t,e){const n=Fo[e];if(n)return n;let s=Dt(e);if(s!=="filter"&&s in t)return Fo[e]=s;s=Xr(s);for(let i=0;i<$c.length;i++){const r=$c[i]+s;if(r in t)return Fo[e]=r}return e}const Hc="http://www.w3.org/1999/xlink";function Ig(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Hc,e.slice(6,e.length)):t.setAttributeNS(Hc,e,n);else{const r=A_(e);n==null||r&&!Nh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Tg(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Nh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function $n(t,e,n,s){t.addEventListener(e,n,s)}function Sg(t,e,n,s){t.removeEventListener(e,n,s)}const jc=Symbol("_vei");function Rg(t,e,n,s,i=null){const r=t[jc]||(t[jc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=kg(e);if(s){const c=r[e]=Ng(s,i);$n(t,a,c,l)}else o&&(Sg(t,a,o,l),r[e]=void 0)}}const qc=/(?:Once|Passive|Capture)$/;function kg(t){let e;if(qc.test(t)){e={};let s;for(;s=t.match(qc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ls(t.slice(2)),e]}let Uo=0;const Ag=Promise.resolve(),Pg=()=>Uo||(Ag.then(()=>Uo=0),Uo=Date.now());function Ng(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;gt(Og(s,n.value),e,5,[s])};return n.value=t,n.attached=Pg(),n}function Og(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Gc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xg=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?yg(t,s,c):e==="style"?Eg(t,n,s):Yr(e)?ja(e)||Rg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dg(t,e,s,c))?Tg(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ig(t,e,s,c))};function Dg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gc(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Gc(e)&&Ae(n)?!1:e in t}const Ir=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>ar(e,n):e};function Lg(t){t.target.composing=!0}function Kc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ws=Symbol("_assign"),de={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[ws]=Ir(i);const r=s||i.props&&i.props.type==="number";$n(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=vr(a)),t[ws](a)}),n&&$n(t,"change",()=>{t.value=t.value.trim()}),e||($n(t,"compositionstart",Lg),$n(t,"compositionend",Kc),$n(t,"change",Kc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[ws]=Ir(r),t.composing)return;const o=(i||t.type==="number")&&!/^0\d/.test(t.value)?vr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},Mg={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Qr(e);$n(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?vr(Tr(o)):Tr(o));t[ws](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,sl(()=>{t._assigning=!1})}),t[ws]=Ir(s)},mounted(t,{value:e,modifiers:{number:n}}){zc(t,e)},beforeUpdate(t,e,n){t[ws]=Ir(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||zc(t,e)}};function zc(t,e,n){const s=t.multiple,i=j(e);if(!(s&&!i&&!Qr(e))){for(let r=0,o=t.options.length;r<o;r++){const a=t.options[r],l=Tr(a);if(s)if(i){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(u=>String(u)===String(l)):a.selected=N_(e,l)>-1}else a.selected=e.has(l);else if(Zr(Tr(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Tr(t){return"_value"in t?t._value:t.value}const Fg=["ctrl","shift","alt","meta"],Ug={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Fg.some(n=>t[`${n}Key`]&&!e.includes(n))},mn=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Ug[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Wg=Le({patchProp:xg},mg);let Yc;function Bg(){return Yc||(Yc=zm(Wg))}const Vg=(...t)=>{const e=Bg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Hg(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,$g(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $g(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Hg(t){return Ae(t)?document.querySelector(t):t}const We=Li({isAuthenticated:!1,user:null,isAdmin:!1,login(t){this.isAuthenticated=!0,this.user=t,this.isAdmin=t.isAdmin||!1,console.log(12,this)},logout(){this.isAuthenticated=!1,this.user=null,this.isAdmin=!1,console.log(18,this)}});var Qc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Ms(e)},Ms=function(t){return new Error("Firebase Database ("+Sd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new qg;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const y=c<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kd=function(t){const e=Rd(t);return ll.encodeByteArray(e,!0)},Sr=function(t){return kd(t).replace(/\./g,"")},Rr=function(t){try{return ll.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t){return Ad(void 0,t)}function Ad(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Kg(n)||(t[n]=Ad(t[n],e[n]));return t}function Kg(t){return t!=="__proto__"}/**
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
 */function zg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yg=()=>zg().__FIREBASE_DEFAULTS__,Qg=()=>{if(typeof process>"u"||typeof Qc>"u")return;const t=Qc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rr(t[1]);return e&&JSON.parse(e)},cl=()=>{try{return Yg()||Qg()||Jg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pd=t=>{var e,n;return(n=(e=cl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Nd=t=>{const e=Pd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Od=()=>{var t;return(t=cl())===null||t===void 0?void 0:t.config},xd=t=>{var e;return(e=cl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Dd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sr(JSON.stringify(n)),Sr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ul(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Xg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zg(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Md(){return Sd.NODE_ADMIN===!0}function ey(){try{return typeof indexedDB=="object"}catch{return!1}}function ty(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="FirebaseError";class Zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ny,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?sy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,a,s)}}function sy(t,e){return t.replace(iy,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const iy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=vi(Rr(r[0])||""),n=vi(Rr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ry=function(t){const e=Fd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},oy=function(t){const e=Fd(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Rs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ma(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ar(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Jc(r)&&Jc(o)){if(!Ar(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Jc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ay{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ly(t,e){const n=new cy(t,e);return n.subscribe.bind(n)}class cy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");uy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Wo),i.error===void 0&&(i.error=Wo),i.complete===void 0&&(i.complete=Wo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wo(){}function lo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},co=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wn="[DEFAULT]";/**
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
 */class dy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(py(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fy(t){return t===Wn?void 0:t}function py(t){return t.instantiationMode==="EAGER"}/**
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
 */class _y{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const my={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},gy=ce.INFO,yy={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},vy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=yy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=gy,this._logHandler=vy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?my[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const wy=(t,e)=>e.some(n=>t instanceof n);let Xc,Zc;function by(){return Xc||(Xc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ey(){return Zc||(Zc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ud=new WeakMap,ga=new WeakMap,Wd=new WeakMap,Bo=new WeakMap,dl=new WeakMap;function Cy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(wn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ud.set(n,t)}).catch(()=>{}),dl.set(e,t),e}function Iy(t){if(ga.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ga.set(t,e)}let ya={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ga.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ty(t){ya=t(ya)}function Sy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vo(this),e,...n);return Wd.set(s,e.sort?e.sort():[e]),wn(s)}:Ey().includes(t)?function(...e){return t.apply(Vo(this),e),wn(Ud.get(this))}:function(...e){return wn(t.apply(Vo(this),e))}}function Ry(t){return typeof t=="function"?Sy(t):(t instanceof IDBTransaction&&Iy(t),wy(t,by())?new Proxy(t,ya):t)}function wn(t){if(t instanceof IDBRequest)return Cy(t);if(Bo.has(t))return Bo.get(t);const e=Ry(t);return e!==t&&(Bo.set(t,e),dl.set(e,t)),e}const Vo=t=>dl.get(t);function ky(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=wn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(wn(o.result),l.oldVersion,l.newVersion,wn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ay=["get","getKey","getAll","getAllKeys","count"],Py=["put","add","delete","clear"],$o=new Map;function eu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Py.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ay.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return $o.set(e,r),r}Ty(t=>({...t,get:(e,n,s)=>eu(e,n)||t.get(e,n,s),has:(e,n)=>!!eu(e,n)||t.has(e,n)}));/**
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
 */class Ny{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Oy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Oy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const va="@firebase/app",tu="0.10.5";/**
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
 */const Yn=new hl("@firebase/app"),xy="@firebase/app-compat",Dy="@firebase/analytics-compat",Ly="@firebase/analytics",My="@firebase/app-check-compat",Fy="@firebase/app-check",Uy="@firebase/auth",Wy="@firebase/auth-compat",By="@firebase/database",Vy="@firebase/database-compat",$y="@firebase/functions",Hy="@firebase/functions-compat",jy="@firebase/installations",qy="@firebase/installations-compat",Gy="@firebase/messaging",Ky="@firebase/messaging-compat",zy="@firebase/performance",Yy="@firebase/performance-compat",Qy="@firebase/remote-config",Jy="@firebase/remote-config-compat",Xy="@firebase/storage",Zy="@firebase/storage-compat",ev="@firebase/firestore",tv="@firebase/vertexai-preview",nv="@firebase/firestore-compat",sv="firebase",iv="10.12.2";/**
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
 */const wa="[DEFAULT]",rv={[va]:"fire-core",[xy]:"fire-core-compat",[Ly]:"fire-analytics",[Dy]:"fire-analytics-compat",[Fy]:"fire-app-check",[My]:"fire-app-check-compat",[Uy]:"fire-auth",[Wy]:"fire-auth-compat",[By]:"fire-rtdb",[Vy]:"fire-rtdb-compat",[$y]:"fire-fn",[Hy]:"fire-fn-compat",[jy]:"fire-iid",[qy]:"fire-iid-compat",[Gy]:"fire-fcm",[Ky]:"fire-fcm-compat",[zy]:"fire-perf",[Yy]:"fire-perf-compat",[Qy]:"fire-rc",[Jy]:"fire-rc-compat",[Xy]:"fire-gcs",[Zy]:"fire-gcs-compat",[ev]:"fire-fst",[nv]:"fire-fst-compat",[tv]:"fire-vertex","fire-js":"fire-js",[sv]:"fire-js-all"};/**
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
 */const Pr=new Map,ov=new Map,ba=new Map;function nu(t,e){try{t.container.addComponent(e)}catch(n){Yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(ba.has(e))return Yn.debug(`There were multiple attempts to register component ${e}.`),!1;ba.set(e,t);for(const n of Pr.values())nu(n,t);for(const n of ov.values())nu(n,t);return!0}function uo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function At(t){return t.settings!==void 0}/**
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
 */const av={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new Ui("app","Firebase",av);/**
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
 */class lv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const ss=iv;function On(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:wa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=Od()),!n)throw bn.create("no-options");const r=Pr.get(i);if(r){if(Ar(n,r.options)&&Ar(s,r.config))return r;throw bn.create("duplicate-app",{appName:i})}const o=new _y(i);for(const l of ba.values())o.addComponent(l);const a=new lv(n,s,o);return Pr.set(i,a),a}function fl(t=wa){const e=Pr.get(t);if(!e&&t===wa&&Od())return On();if(!e)throw bn.create("no-app",{appName:t});return e}function Nt(t,e,n){var s;let i=(s=rv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yn.warn(a.join(" "));return}Qn(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cv="firebase-heartbeat-database",uv=1,wi="firebase-heartbeat-store";let Ho=null;function Bd(){return Ho||(Ho=ky(cv,uv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),Ho}async function hv(t){try{const n=(await Bd()).transaction(wi),s=await n.objectStore(wi).get(Vd(t));return await n.done,s}catch(e){if(e instanceof Zt)Yn.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yn.warn(n.message)}}}async function su(t,e){try{const s=(await Bd()).transaction(wi,"readwrite");await s.objectStore(wi).put(e,Vd(t)),await s.done}catch(n){if(n instanceof Zt)Yn.warn(n.message);else{const s=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yn.warn(s.message)}}}function Vd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dv=1024,fv=30*24*60*60*1e3;class pv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=iu();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=fv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=iu(),{heartbeatsToSend:s,unsentEntries:i}=_v(this._heartbeatsCache.heartbeats),r=Sr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function iu(){return new Date().toISOString().substring(0,10)}function _v(t,e=dv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ru(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ru(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ey()?ty().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return su(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return su(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ru(t){return Sr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gv(t){Qn(new Tn("platform-logger",e=>new Ny(e),"PRIVATE")),Qn(new Tn("heartbeat",e=>new pv(e),"PRIVATE")),Nt(va,tu,t),Nt(va,tu,"esm2017"),Nt("fire-js","")}gv("");function pl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function $d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yv=$d,Hd=new Ui("auth","Firebase",$d());/**
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
 */const Nr=new hl("@firebase/auth");function vv(t,...e){Nr.logLevel<=ce.WARN&&Nr.warn(`Auth (${ss}): ${t}`,...e)}function pr(t,...e){Nr.logLevel<=ce.ERROR&&Nr.error(`Auth (${ss}): ${t}`,...e)}/**
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
 */function vt(t,...e){throw _l(t,...e)}function Ot(t,...e){return _l(t,...e)}function jd(t,e,n){const s=Object.assign(Object.assign({},yv()),{[e]:n});return new Ui("auth","Firebase",s).create(e,{appName:t.name})}function Kt(t){return jd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _l(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Hd.create(t,...e)}function q(t,e,...n){if(!t)throw _l(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pr(e),new Error(e)}function Qt(t,e){t||Vt(e)}/**
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
 */function Ea(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wv(){return ou()==="http:"||ou()==="https:"}function ou(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wv()||Xg()||"connection"in navigator)?navigator.onLine:!0}function Ev(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=ul()||Ld()}get(){return bv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ml(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Cv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Iv=new Wi(3e4,6e4);function xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dn(t,e,n,s,i={}){return Gd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Fs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),qd.fetch()(Kd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Gd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Cv),e);try{const i=new Sv(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw nr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw nr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw nr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jd(t,u,c);vt(t,u)}}catch(i){if(i instanceof Zt)throw i;vt(t,"network-request-failed",{message:String(i)})}}async function Bi(t,e,n,s,i={}){const r=await Dn(t,e,n,s,i);return"mfaPendingCredential"in r&&vt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Kd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ml(t.config,i):`${t.config.apiScheme}://${i}`}function Tv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ot(this.auth,"network-request-failed")),Iv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ot(t,e,s);return i.customData._tokenResponse=n,i}function au(t){return t!==void 0&&t.enterprise!==void 0}class Rv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Tv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function kv(t,e){return Dn(t,"GET","/v2/recaptchaConfig",xn(t,e))}/**
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
 */async function Av(t,e){return Dn(t,"POST","/v1/accounts:delete",e)}async function zd(t,e){return Dn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pv(t,e=!1){const n=Ie(t),s=await n.getIdToken(e),i=gl(s);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ri(jo(i.auth_time)),issuedAtTime:ri(jo(i.iat)),expirationTime:ri(jo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function jo(t){return Number(t)*1e3}function gl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return pr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rr(n);return i?JSON.parse(i):(pr("Failed to decode base64 JWT payload"),null)}catch(i){return pr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lu(t){const e=gl(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Zt&&Nv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Nv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ov{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ca{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Or(t){var e;const n=t.auth,s=await t.getIdToken(),i=await bi(t,zd(n,{idToken:s}));q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Yd(r.providerUserInfo):[],a=Dv(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ca(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function xv(t){const e=Ie(t);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dv(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Yd(t){return t.map(e=>{var{providerId:n}=e,s=pl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Lv(t,e){const n=await Gd(t,{},async()=>{const s=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Kd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Mv(t,e){return Dn(t,"POST","/v2/accounts:revokeToken",xn(t,e))}/**
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
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=lu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Lv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new bs;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function rn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=pl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ov(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ca(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Pv(this,e)}reload(){return xv(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Or(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(Kt(this.auth));const e=await this.getIdToken();return await bi(this,Av(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:V,isAnonymous:oe,providerData:$,stsTokenManager:Te}=n;q(L&&Te,e,"internal-error");const Pe=bs.fromJSON(this.name,Te);q(typeof L=="string",e,"internal-error"),rn(h,e.name),rn(d,e.name),q(typeof V=="boolean",e,"internal-error"),q(typeof oe=="boolean",e,"internal-error"),rn(_,e.name),rn(y,e.name),rn(C,e.name),rn(k,e.name),rn(N,e.name),rn(O,e.name);const ct=new $t({uid:L,auth:e,email:d,emailVerified:V,displayName:h,isAnonymous:oe,photoURL:y,phoneNumber:_,tenantId:C,stsTokenManager:Pe,createdAt:N,lastLoginAt:O});return $&&Array.isArray($)&&(ct.providerData=$.map(rt=>Object.assign({},rt))),k&&(ct._redirectEventId=k),ct}static async _fromIdTokenResponse(e,n,s=!1){const i=new bs;i.updateFromServerResponse(n);const r=new $t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Or(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];q(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Yd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new bs;a.updateFromIdToken(s);const l=new $t({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Ca(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const cu=new Map;function Ht(t){Qt(t instanceof Function,"Expected a class definition");let e=cu.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cu.set(t,e),e)}/**
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
 */class Qd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qd.type="NONE";const uu=Qd;/**
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
 */function _r(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=_r(this.userKey,i.apiKey,r),this.fullPersistenceKey=_r("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Es(Ht(uu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ht(uu);const o=_r(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=$t._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Es(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Es(r,e,s))}}/**
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
 */function hu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tf(e))return"Blackberry";if(nf(e))return"Webos";if(yl(e))return"Safari";if((e.includes("chrome/")||Xd(e))&&!e.includes("edge/"))return"Chrome";if(ef(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Jd(t=$e()){return/firefox\//i.test(t)}function yl(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xd(t=$e()){return/crios\//i.test(t)}function Zd(t=$e()){return/iemobile/i.test(t)}function ef(t=$e()){return/android/i.test(t)}function tf(t=$e()){return/blackberry/i.test(t)}function nf(t=$e()){return/webos/i.test(t)}function ho(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fv(t=$e()){var e;return ho(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uv(){return Zg()&&document.documentMode===10}function sf(t=$e()){return ho(t)||ef(t)||nf(t)||tf(t)||/windows phone/i.test(t)||Zd(t)}function Wv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function rf(t,e=[]){let n;switch(t){case"Browser":n=hu($e());break;case"Worker":n=`${hu($e())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${s}`}/**
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
 */class Bv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Vv(t,e={}){return Dn(t,"GET","/v2/passwordPolicy",xn(t,e))}/**
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
 */const $v=6;class Hv{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$v,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class jv{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new du(this),this.idTokenSubscription=new du(this),this.beforeStateQueue=new Bv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zd(this,{idToken:e}),s=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(At(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Or(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ev()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(Kt(this));const n=e?Ie(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(Kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(Kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vv(this),n=new Hv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Mv(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function is(t){return Ie(t)}class du{constructor(e){this.auth=e,this.observer=null,this.addObserver=ly(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qv(t){fo=t}function of(t){return fo.loadJS(t)}function Gv(){return fo.recaptchaEnterpriseScript}function Kv(){return fo.gapiScript}function zv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Yv="recaptcha-enterprise",Qv="NO_RECAPTCHA";class Jv{constructor(e){this.type=Yv,this.auth=is(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{kv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Rv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;au(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Qv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&au(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Gv();l.length!==0&&(l+=a),of(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function fu(t,e,n,s=!1){const i=new Jv(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ia(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await fu(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fu(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
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
 */function Xv(t,e){const n=uo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ar(r,e??{}))return i;vt(i,"already-initialized")}return n.initialize({options:e})}function Zv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ew(t,e,n){const s=is(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=af(e),{host:o,port:a}=tw(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),nw()}function af(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tw(t){const e=af(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:pu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:pu(o)}}}function pu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function sw(t,e){return Dn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function iw(t,e){return Bi(t,"POST","/v1/accounts:signInWithPassword",xn(t,e))}/**
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
 */async function rw(t,e){return Bi(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}async function ow(t,e){return Bi(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}/**
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
 */class Ei extends vl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ei(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ei(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ia(e,n,"signInWithPassword",iw);case"emailLink":return rw(e,{email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ia(e,s,"signUpPassword",sw);case"emailLink":return ow(e,{idToken:n,email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cs(t,e){return Bi(t,"POST","/v1/accounts:signInWithIdp",xn(t,e))}/**
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
 */const aw="http://localhost";class Jn extends vl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=pl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Jn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Cs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:aw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fs(n)}return e}}/**
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
 */function lw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cw(t){const e=Xs(Zs(t)).link,n=e?Xs(Zs(e)).deep_link_id:null,s=Xs(Zs(t)).deep_link_id;return(s?Xs(Zs(s)).link:null)||s||n||e||t}class wl{constructor(e){var n,s,i,r,o,a;const l=Xs(Zs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=lw((i=l.mode)!==null&&i!==void 0?i:null);q(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=cw(e);try{return new wl(n)}catch{return null}}}/**
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
 */class Us{constructor(){this.providerId=Us.PROVIDER_ID}static credential(e,n){return Ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=wl.parseLink(n);return q(s,"argument-error"),Ei._fromEmailAndCode(e,s.code,s.tenantId)}}Us.PROVIDER_ID="password";Us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vi extends lf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hn extends Vi{constructor(){super("facebook.com")}static credential(e){return Jn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
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
 */class dn extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class fn extends Vi{constructor(){super("github.com")}static credential(e){return Jn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
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
 */class pn extends Vi{constructor(){super("twitter.com")}static credential(e,n){return Jn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return pn.credential(n,s)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
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
 */async function uw(t,e){return Bi(t,"POST","/v1/accounts:signUp",xn(t,e))}/**
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
 */class Xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await $t._fromIdTokenResponse(e,s,i),o=_u(s);return new Xn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=_u(s);return new Xn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function _u(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xr extends Zt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,xr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new xr(e,n,s,i)}}function cf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?xr._fromErrorAndOperation(t,r,e,s):r})}async function hw(t,e,n=!1){const s=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xn._forOperation(t,"link",s)}/**
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
 */async function dw(t,e,n=!1){const{auth:s}=t;if(At(s.app))return Promise.reject(Kt(s));const i="reauthenticate";try{const r=await bi(t,cf(s,i,e,t),n);q(r.idToken,s,"internal-error");const o=gl(r.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),Xn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&vt(s,"user-mismatch"),r}}/**
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
 */async function uf(t,e,n=!1){if(At(t.app))return Promise.reject(Kt(t));const s="signIn",i=await cf(t,s,e),r=await Xn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function fw(t,e){return uf(is(t),e)}/**
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
 */async function hf(t){const e=is(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pw(t,e,n){if(At(t.app))return Promise.reject(Kt(t));const s=is(t),o=await Ia(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&hf(t),l}),a=await Xn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function _w(t,e,n){return At(t.app)?Promise.reject(Kt(t)):fw(Ie(t),Us.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&hf(t),s})}/**
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
 */function mw(t,e){return Ie(t).setPersistence(e)}function gw(t,e,n,s){return Ie(t).onIdTokenChanged(e,n,s)}function yw(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function vw(t,e,n,s){return Ie(t).onAuthStateChanged(e,n,s)}function df(t){return Ie(t).signOut()}const Dr="__sak";/**
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
 */class ff{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ww(){const t=$e();return yl(t)||ho(t)}const bw=1e3,Ew=10;class pf extends ff{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ww()&&Wv(),this.fallbackToPolling=sf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Uv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ew):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pf.type="LOCAL";const _f=pf;/**
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
 */class mf extends ff{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mf.type="SESSION";const gf=mf;/**
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
 */function Cw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class po{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new po(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Cw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}po.receivers=[];/**
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
 */function bl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Iw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=bl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xt(){return window}function Tw(t){xt().location.href=t}/**
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
 */function yf(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function Sw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kw(){return yf()?self:null}/**
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
 */const vf="firebaseLocalStorageDb",Aw=1,Lr="firebaseLocalStorage",wf="fbase_key";class $i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _o(t,e){return t.transaction([Lr],e?"readwrite":"readonly").objectStore(Lr)}function Pw(){const t=indexedDB.deleteDatabase(vf);return new $i(t).toPromise()}function Ta(){const t=indexedDB.open(vf,Aw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Lr,{keyPath:wf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Lr)?e(s):(s.close(),await Pw(),e(await Ta()))})})}async function mu(t,e,n){const s=_o(t,!0).put({[wf]:e,value:n});return new $i(s).toPromise()}async function Nw(t,e){const n=_o(t,!1).get(e),s=await new $i(n).toPromise();return s===void 0?null:s.value}function gu(t,e){const n=_o(t,!0).delete(e);return new $i(n).toPromise()}const Ow=800,xw=3;class bf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ta(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>xw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=po._getInstance(kw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Sw(),!this.activeServiceWorker)return;this.sender=new Iw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ta();return await mu(e,Dr,"1"),await gu(e,Dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>mu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Nw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=_o(i,!1).getAll();return new $i(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ow)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bf.type="LOCAL";const Dw=bf;new Wi(3e4,6e4);/**
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
 */function Lw(t,e){return e?Ht(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class El extends vl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Mw(t){return uf(t.auth,new El(t),t.bypassAuthState)}function Fw(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),dw(n,new El(t),t.bypassAuthState)}async function Uw(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),hw(n,new El(t),t.bypassAuthState)}/**
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
 */class Ef{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mw;case"linkViaPopup":case"linkViaRedirect":return Uw;case"reauthViaPopup":case"reauthViaRedirect":return Fw;default:vt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ww=new Wi(2e3,1e4);class ps extends Ef{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ww.get())};e()}}ps.currentPopupAction=null;/**
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
 */const Bw="pendingRedirect",mr=new Map;class Vw extends Ef{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const s=await $w(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $w(t,e){const n=qw(e),s=jw(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Hw(t,e){mr.set(t._key(),e)}function jw(t){return Ht(t._redirectPersistence)}function qw(t){return _r(Bw,t.config.apiKey,t.name)}async function Gw(t,e,n=!1){if(At(t.app))return Promise.reject(Kt(t));const s=is(t),i=Lw(s,e),o=await new Vw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Kw=10*60*1e3;class zw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Cf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kw&&this.cachedEventUids.clear(),this.cachedEventUids.has(yu(e))}saveEventToCache(e){this.cachedEventUids.add(yu(e)),this.lastProcessedEventTime=Date.now()}}function yu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cf(t);default:return!1}}/**
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
 */async function Qw(t,e={}){return Dn(t,"GET","/v1/projects",e)}/**
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
 */const Jw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xw=/^https?/;async function Zw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qw(t);for(const n of e)try{if(eb(n))return}catch{}vt(t,"unauthorized-domain")}function eb(t){const e=Ea(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Xw.test(n))return!1;if(Jw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const tb=new Wi(3e4,6e4);function vu(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nb(t){return new Promise((e,n)=>{var s,i,r;function o(){vu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vu(),n(Ot(t,"network-request-failed"))},timeout:tb.get()})}if(!((i=(s=xt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=xt().gapi)===null||r===void 0)&&r.load)o();else{const a=zv("iframefcb");return xt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},of(`${Kv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw gr=null,e})}let gr=null;function sb(t){return gr=gr||nb(t),gr}/**
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
 */const ib=new Wi(5e3,15e3),rb="__/auth/iframe",ob="emulator/auth/iframe",ab={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cb(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ml(e,ob):`https://${t.config.authDomain}/${rb}`,s={apiKey:e.apiKey,appName:t.name,v:ss},i=lb.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Fs(s).slice(1)}`}async function ub(t){const e=await sb(t),n=xt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:cb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ab,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=xt().setTimeout(()=>{r(o)},ib.get());function l(){xt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const hb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},db=500,fb=600,pb="_blank",_b="http://localhost";class wu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mb(t,e,n,s=db,i=fb){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hb),{width:s.toString(),height:i.toString(),top:r,left:o}),c=$e().toLowerCase();n&&(a=Xd(c)?pb:n),Jd(c)&&(e=e||_b,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,y])=>`${d}${_}=${y},`,"");if(Fv(c)&&a!=="_self")return gb(e||"",a),new wu(null);const h=window.open(e||"",a,u);q(h,t,"popup-blocked");try{h.focus()}catch{}return new wu(h)}function gb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const yb="__/auth/handler",vb="emulator/auth/handler",wb=encodeURIComponent("fac");async function bu(t,e,n,s,i,r){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ss,eventId:i};if(e instanceof lf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ma(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Vi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${wb}=${encodeURIComponent(l)}`:"";return`${bb(t)}?${Fs(a).slice(1)}${c}`}function bb({config:t}){return t.emulator?ml(t,vb):`https://${t.authDomain}/${yb}`}/**
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
 */const qo="webStorageSupport";class Eb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gf,this._completeRedirectFn=Gw,this._overrideRedirectResult=Hw}async _openPopup(e,n,s,i){var r;Qt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await bu(e,n,s,Ea(),i);return mb(e,o,bl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await bu(e,n,s,Ea(),i);return Tw(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ub(e),s=new zw(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qo,{type:qo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[qo];o!==void 0&&n(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sf()||yl()||ho()}}const Cb=Eb;var Eu="@firebase/auth",Cu="1.7.4";/**
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
 */class Ib{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Tb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sb(t){Qn(new Tn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rf(t)},c=new jv(s,i,r,l);return Zv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Qn(new Tn("auth-internal",e=>{const n=is(e.getProvider("auth").getImmediate());return(s=>new Ib(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Eu,Cu,Tb(t)),Nt(Eu,Cu,"esm2017")}/**
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
 */const Rb=5*60,kb=xd("authIdTokenMaxAge")||Rb;let Iu=null;const Ab=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>kb)return;const i=n==null?void 0:n.token;Iu!==i&&(Iu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function If(t=fl()){const e=uo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xv(t,{popupRedirectResolver:Cb,persistence:[Dw,_f,gf]}),s=xd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Ab(r.toString());yw(n,o,()=>o(n.currentUser)),gw(n,a=>o(a))}}const i=Pd("auth");return i&&ew(n,`http://${i}`),n}function Pb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}qv({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ot("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Pb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sb("Browser");const bt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Nb={name:"App",setup(){return{store:We}},methods:{logout(){We.logout(),this.$router.push("/"),df(If(this.app)).then(()=>{We.logout()}).catch(t=>{console.error(t)})}}},Ob={id:"app"},xb={key:0},Db={key:1},Lb={key:2},Mb={key:3},Fb={key:4},Ub={key:5};function Wb(t,e,n,s,i,r){const o=pt("router-link"),a=pt("router-view");return F(),U("div",Ob,[m("nav",null,[m("ul",null,[m("li",null,[ee(o,{to:"/"},{default:st(()=>[Ge("Home")]),_:1})]),s.store.isAuthenticated?(F(),U("li",xb,[ee(o,{to:"/dashboard"},{default:st(()=>[Ge("Dashboard")]),_:1})])):ve("",!0),s.store.isAuthenticated?(F(),U("li",Db,[ee(o,{to:"/bestiary"},{default:st(()=>[Ge("Bestiary")]),_:1})])):ve("",!0),s.store.isAuthenticated?(F(),U("li",Lb,[ee(o,{to:"/case-files"},{default:st(()=>[Ge("Case Files")]),_:1})])):ve("",!0),s.store.isAuthenticated?(F(),U("li",Mb,[ee(o,{to:"/profile"},{default:st(()=>[Ge("Profile")]),_:1})])):ve("",!0),s.store.isAuthenticated?ve("",!0):(F(),U("li",Fb,[ee(o,{to:"/login"},{default:st(()=>[Ge("Login")]),_:1})])),s.store.isAuthenticated?(F(),U("li",Ub,[m("a",{href:"#",onClick:e[0]||(e[0]=(...l)=>r.logout&&r.logout(...l))},"Logout")])):ve("",!0)])]),m("main",null,[ee(a)])])}const Bb=bt(Nb,[["render",Wb],["__scopeId","data-v-6fd5af8e"]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof document<"u";function Vb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function Go(t,e){const n={};for(const s in e){const i=e[s];n[s]=wt(i)?i.map(t):t(i)}return n}const oi=()=>{},wt=Array.isArray,Tf=/#/g,$b=/&/g,Hb=/\//g,jb=/=/g,qb=/\?/g,Sf=/\+/g,Gb=/%5B/g,Kb=/%5D/g,Rf=/%5E/g,zb=/%60/g,kf=/%7B/g,Yb=/%7C/g,Af=/%7D/g,Qb=/%20/g;function Cl(t){return encodeURI(""+t).replace(Yb,"|").replace(Gb,"[").replace(Kb,"]")}function Jb(t){return Cl(t).replace(kf,"{").replace(Af,"}").replace(Rf,"^")}function Sa(t){return Cl(t).replace(Sf,"%2B").replace(Qb,"+").replace(Tf,"%23").replace($b,"%26").replace(zb,"`").replace(kf,"{").replace(Af,"}").replace(Rf,"^")}function Xb(t){return Sa(t).replace(jb,"%3D")}function Zb(t){return Cl(t).replace(Tf,"%23").replace(qb,"%3F")}function eE(t){return t==null?"":Zb(t).replace(Hb,"%2F")}function Ci(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const tE=/\/$/,nE=t=>t.replace(tE,"");function Ko(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=oE(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Ci(o)}}function sE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Tu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function iE(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ks(e.matched[s],n.matched[i])&&Pf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Pf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rE(t[n],e[n]))return!1;return!0}function rE(t,e){return wt(t)?Su(t,e):wt(e)?Su(e,t):t===e}function Su(t,e){return wt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function oE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}var Ii;(function(t){t.pop="pop",t.push="push"})(Ii||(Ii={}));var ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ai||(ai={}));function aE(t){if(!t)if(fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nE(t)}const lE=/^[^#]+#/;function cE(t,e){return t.replace(lE,"#")+e}function uE(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const mo=()=>({left:window.scrollX,top:window.scrollY});function hE(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=uE(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ru(t,e){return(history.state?history.state.position-e:-1)+t}const Ra=new Map;function dE(t,e){Ra.set(t,e)}function fE(t){const e=Ra.get(t);return Ra.delete(t),e}let pE=()=>location.protocol+"//"+location.host;function Nf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Tu(l,"")}return Tu(n,t)+s+i}function _E(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=Nf(t,location),y=n.value,C=e.value;let k=0;if(d){if(n.value=_,e.value=d,o&&o===y){o=null;return}k=C?d.position-C.position:0}else s(_);i.forEach(N=>{N(n.value,y,{delta:k,type:Ii.pop,direction:k?k>0?ai.forward:ai.back:ai.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(ie({},d.state,{scroll:mo()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function ku(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?mo():null}}function mE(t){const{history:e,location:n}=window,s={value:Nf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:pE()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=ie({},e.state,ku(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ie({},i.value,e.state,{forward:l,scroll:mo()});r(u.current,u,!0);const h=ie({},ku(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function gE(t){t=aE(t);const e=mE(t),n=_E(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ie({location:"",base:t,go:s,createHref:cE.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function yE(t){return typeof t=="string"||t&&typeof t=="object"}function Of(t){return typeof t=="string"||typeof t=="symbol"}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xf=Symbol("");var Au;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Au||(Au={}));function As(t,e){return ie(new Error,{type:t,[xf]:!0},e)}function Bt(t,e){return t instanceof Error&&xf in t&&(e==null||!!(t.type&e))}const Pu="[^/]+?",vE={sensitive:!1,strict:!1,start:!0,end:!0},wE=/[.+*?^${}()[\]/\\]/g;function bE(t,e){const n=ie({},vE,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(wE,"\\$&"),_+=40;else if(d.type===1){const{value:y,repeatable:C,optional:k,regexp:N}=d;r.push({name:y,repeatable:C,optional:k});const O=N||Pu;if(O!==Pu){_+=10;try{new RegExp(`(${O})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${y}" (${O}): `+V.message)}}let L=C?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(L=k&&c.length<2?`(?:/${L})`:"/"+L),k&&(L+="?"),i+=L,_+=20,k&&(_+=-8),C&&(_+=-20),O===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",y=r[d-1];h[y.name]=_&&y.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:y,repeatable:C,optional:k}=_,N=y in c?c[y]:"";if(wt(N)&&!C)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const O=wt(N)?N.join("/"):N;if(!O)if(k)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function EE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function CE(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=EE(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Nu(s))return 1;if(Nu(i))return-1}return i.length-s.length}function Nu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const IE={type:0,value:""},TE=/[a-zA-Z0-9_]/;function SE(t){if(!t)return[[]];if(t==="/")return[[IE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:TE.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function RE(t,e,n){const s=bE(SE(t.path),n),i=ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function kE(t,e){const n=[],s=new Map;e=Du({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,y=AE(u);y.aliasOf=d&&d.record;const C=Du(e,u),k=[y];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of L)k.push(ie({},y,{components:d?d.record.components:y.components,path:V,aliasOf:d?d.record:y}))}let N,O;for(const L of k){const{path:V}=L;if(h&&V[0]!=="/"){const oe=h.record.path,$=oe[oe.length-1]==="/"?"":"/";L.path=h.record.path+(V&&$+V)}if(N=RE(L,h,C),d?d.alias.push(N):(O=O||N,O!==N&&O.alias.push(N),_&&u.name&&!xu(N)&&o(u.name)),y.children){const oe=y.children;for(let $=0;$<oe.length;$++)r(oe[$],N,d&&d.children[$])}d=d||N,(N.record.components&&Object.keys(N.record.components).length||N.record.name||N.record.redirect)&&l(N)}return O?()=>{o(O)}:oi}function o(u){if(Of(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&CE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Df(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!xu(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},y,C;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw As(1,{location:u});C=d.record.name,_=ie(Ou(h.params,d.keys.filter(O=>!O.optional).concat(d.parent?d.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),u.params&&Ou(u.params,d.keys.map(O=>O.name))),y=d.stringify(_)}else if(u.path!=null)y=u.path,d=n.find(O=>O.re.test(y)),d&&(_=d.parse(y),C=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw As(1,{location:u,currentLocation:h});C=d.record.name,_=ie({},h.params,u.params),y=d.stringify(_)}const k=[];let N=d;for(;N;)k.unshift(N.record),N=N.parent;return{name:C,path:y,params:_,matched:k,meta:NE(k)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ou(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function AE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:PE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function PE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function xu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function NE(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function Du(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Df(t,e){return e.children.some(n=>n===t||Df(t,n))}function OE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Sf," "),o=r.indexOf("="),a=Ci(o<0?r:r.slice(0,o)),l=o<0?null:Ci(r.slice(o+1));if(a in e){let c=e[a];wt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Lu(t){let e="";for(let n in t){const s=t[n];if(n=Xb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(wt(s)?s.map(r=>r&&Sa(r)):[s&&Sa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function xE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=wt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const DE=Symbol(""),Mu=Symbol(""),Il=Symbol(""),Lf=Symbol(""),ka=Symbol("");function qs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function un(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(As(4,{from:n,to:e})):d instanceof Error?l(d):yE(d)?l(As(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function zo(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(LE(l)){const u=(l.__vccOpts||l)[e];u&&r.push(un(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=Vb(u)?u.default:u;o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&un(_,n,s,o,a,i)()}))}}return r}function LE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fu(t){const e=Gt(Il),n=Gt(Lf),s=dt(()=>{const l=ys(t.to);return e.resolve(l)}),i=dt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ks.bind(null,u));if(d>-1)return d;const _=Uu(l[c-2]);return c>1&&Uu(u)===_&&h[h.length-1].path!==_?h.findIndex(ks.bind(null,l[c-2])):d}),r=dt(()=>i.value>-1&&WE(n.params,s.value.params)),o=dt(()=>i.value>-1&&i.value===n.matched.length-1&&Pf(n.params,s.value.params));function a(l={}){return UE(l)?e[ys(t.replace)?"replace":"push"](ys(t.to)).catch(oi):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const ME=rd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fu,setup(t,{slots:e}){const n=Li(Fu(t)),{options:s}=Gt(Il),i=dt(()=>({[Wu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Wu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Td("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),FE=ME;function UE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WE(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!wt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Uu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wu=(t,e,n)=>t??e??n,BE=rd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Gt(ka),i=dt(()=>t.route||s.value),r=Gt(Mu,0),o=dt(()=>{let c=ys(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=dt(()=>i.value.matched[o.value]);hr(Mu,dt(()=>o.value+1)),hr(DE,a),hr(ka,i);const l=nm();return cr(()=>[l.value,a.value,t.name],([c,u,h],[d,_,y])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!ks(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Bu(n.default,{Component:d,route:c});const _=h.props[u],y=_?_===!0?c.params:typeof _=="function"?_(c):_:null,k=Td(d,ie({},y,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Bu(n.default,{Component:k,route:c})||k}}});function Bu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const VE=BE;function $E(t){const e=kE(t.routes,t),n=t.parseQuery||OE,s=t.stringifyQuery||Lu,i=t.history,r=qs(),o=qs(),a=qs(),l=sm(on);let c=on;fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Go.bind(null,w=>""+w),h=Go.bind(null,eE),d=Go.bind(null,Ci);function _(w,x){let A,M;return Of(w)?(A=e.getRecordMatcher(w),M=x):M=w,e.addRoute(M,A)}function y(w){const x=e.getRecordMatcher(w);x&&e.removeRoute(x)}function C(){return e.getRoutes().map(w=>w.record)}function k(w){return!!e.getRecordMatcher(w)}function N(w,x){if(x=ie({},x||l.value),typeof w=="string"){const p=Ko(n,w,x.path),g=e.resolve({path:p.path},x),b=i.createHref(p.fullPath);return ie(p,g,{params:d(g.params),hash:Ci(p.hash),redirectedFrom:void 0,href:b})}let A;if(w.path!=null)A=ie({},w,{path:Ko(n,w.path,x.path).path});else{const p=ie({},w.params);for(const g in p)p[g]==null&&delete p[g];A=ie({},w,{params:h(p)}),x.params=h(x.params)}const M=e.resolve(A,x),se=w.hash||"";M.params=u(d(M.params));const ye=sE(s,ie({},w,{hash:Jb(se),path:M.path})),f=i.createHref(ye);return ie({fullPath:ye,hash:se,query:s===Lu?xE(w.query):w.query||{}},M,{redirectedFrom:void 0,href:f})}function O(w){return typeof w=="string"?Ko(n,w,l.value.path):ie({},w)}function L(w,x){if(c!==w)return As(8,{from:x,to:w})}function V(w){return Te(w)}function oe(w){return V(ie(O(w),{replace:!0}))}function $(w){const x=w.matched[w.matched.length-1];if(x&&x.redirect){const{redirect:A}=x;let M=typeof A=="function"?A(w):A;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=O(M):{path:M},M.params={}),ie({query:w.query,hash:w.hash,params:M.path!=null?{}:w.params},M)}}function Te(w,x){const A=c=N(w),M=l.value,se=w.state,ye=w.force,f=w.replace===!0,p=$(A);if(p)return Te(ie(O(p),{state:typeof p=="object"?ie({},se,p.state):se,force:ye,replace:f}),x||A);const g=A;g.redirectedFrom=x;let b;return!ye&&iE(s,M,A)&&(b=As(16,{to:g,from:M}),Ct(M,M,!0,!1)),(b?Promise.resolve(b):rt(g,M)).catch(v=>Bt(v)?Bt(v,2)?v:nn(v):te(v,g,M)).then(v=>{if(v){if(Bt(v,2))return Te(ie({replace:f},O(v.to),{state:typeof v.to=="object"?ie({},se,v.to.state):se,force:ye}),x||g)}else v=Mn(g,M,!0,f,se);return tn(g,M,v),v})}function Pe(w,x){const A=L(w,x);return A?Promise.reject(A):Promise.resolve()}function ct(w){const x=us.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(w):w()}function rt(w,x){let A;const[M,se,ye]=HE(w,x);A=zo(M.reverse(),"beforeRouteLeave",w,x);for(const p of M)p.leaveGuards.forEach(g=>{A.push(un(g,w,x))});const f=Pe.bind(null,w,x);return A.push(f),Ue(A).then(()=>{A=[];for(const p of r.list())A.push(un(p,w,x));return A.push(f),Ue(A)}).then(()=>{A=zo(se,"beforeRouteUpdate",w,x);for(const p of se)p.updateGuards.forEach(g=>{A.push(un(g,w,x))});return A.push(f),Ue(A)}).then(()=>{A=[];for(const p of ye)if(p.beforeEnter)if(wt(p.beforeEnter))for(const g of p.beforeEnter)A.push(un(g,w,x));else A.push(un(p.beforeEnter,w,x));return A.push(f),Ue(A)}).then(()=>(w.matched.forEach(p=>p.enterCallbacks={}),A=zo(ye,"beforeRouteEnter",w,x,ct),A.push(f),Ue(A))).then(()=>{A=[];for(const p of o.list())A.push(un(p,w,x));return A.push(f),Ue(A)}).catch(p=>Bt(p,8)?p:Promise.reject(p))}function tn(w,x,A){a.list().forEach(M=>ct(()=>M(w,x,A)))}function Mn(w,x,A,M,se){const ye=L(w,x);if(ye)return ye;const f=x===on,p=fs?history.state:{};A&&(M||f?i.replace(w.fullPath,ie({scroll:f&&p&&p.scroll},se)):i.push(w.fullPath,se)),l.value=w,Ct(w,x,A,f),nn()}let Et;function $s(){Et||(Et=i.listen((w,x,A)=>{if(!Yi.listening)return;const M=N(w),se=$(M);if(se){Te(ie(se,{replace:!0}),M).catch(oi);return}c=M;const ye=l.value;fs&&dE(Ru(ye.fullPath,A.delta),mo()),rt(M,ye).catch(f=>Bt(f,12)?f:Bt(f,2)?(Te(f.to,M).then(p=>{Bt(p,20)&&!A.delta&&A.type===Ii.pop&&i.go(-1,!1)}).catch(oi),Promise.reject()):(A.delta&&i.go(-A.delta,!1),te(f,M,ye))).then(f=>{f=f||Mn(M,ye,!1),f&&(A.delta&&!Bt(f,8)?i.go(-A.delta,!1):A.type===Ii.pop&&Bt(f,20)&&i.go(-1,!1)),tn(M,ye,f)}).catch(oi)}))}let ls=qs(),Ne=qs(),ae;function te(w,x,A){nn(w);const M=Ne.list();return M.length?M.forEach(se=>se(w,x,A)):console.error(w),Promise.reject(w)}function Wt(){return ae&&l.value!==on?Promise.resolve():new Promise((w,x)=>{ls.add([w,x])})}function nn(w){return ae||(ae=!w,$s(),ls.list().forEach(([x,A])=>w?A(w):x()),ls.reset()),w}function Ct(w,x,A,M){const{scrollBehavior:se}=t;if(!fs||!se)return Promise.resolve();const ye=!A&&fE(Ru(w.fullPath,0))||(M||!A)&&history.state&&history.state.scroll||null;return sl().then(()=>se(w,x,ye)).then(f=>f&&hE(f)).catch(f=>te(f,w,x))}const Ye=w=>i.go(w);let cs;const us=new Set,Yi={currentRoute:l,listening:!0,addRoute:_,removeRoute:y,hasRoute:k,getRoutes:C,resolve:N,options:t,push:V,replace:oe,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ne.add,isReady:Wt,install(w){const x=this;w.component("RouterLink",FE),w.component("RouterView",VE),w.config.globalProperties.$router=x,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ys(l)}),fs&&!cs&&l.value===on&&(cs=!0,V(i.location).catch(se=>{}));const A={};for(const se in on)Object.defineProperty(A,se,{get:()=>l.value[se],enumerable:!0});w.provide(Il,x),w.provide(Lf,jh(A)),w.provide(ka,l);const M=w.unmount;us.add(w),w.unmount=function(){us.delete(w),us.size<1&&(c=on,Et&&Et(),Et=null,l.value=on,cs=!1,ae=!1),M()}}};function Ue(w){return w.reduce((x,A)=>x.then(()=>ct(A)),Promise.resolve())}return Yi}function HE(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ks(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ks(c,l))||i.push(l))}return[n,s,i]}const jE={name:"Home"},qE=t=>(Lt("data-v-94bdd772"),t=t(),Mt(),t),GE={class:"home"},KE=qE(()=>m("h1",null,"Welcome to the Monster of the Week Portal",-1));function zE(t,e,n,s,i,r){const o=pt("router-link");return F(),U("div",GE,[KE,ee(o,{to:"/dashboard"},{default:st(()=>[Ge("Go to Dashboard")]),_:1})])}const YE=bt(jE,[["render",zE],["__scopeId","data-v-94bdd772"]]);var QE="firebase",JE="10.12.2";/**
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
 */Nt(QE,JE,"app");var Vu={};const $u="@firebase/database",Hu="1.0.5";/**
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
 */let Mf="";function XE(t){Mf=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ZE(e)}}catch{}return new eC},jn=Ff("localStorage"),tC=Ff("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new hl("@firebase/database"),nC=function(){let t=1;return function(){return t++}}(),Uf=function(t){const e=hy(t),n=new ay;n.update(e);const s=n.digest();return ll.encodeByteArray(s)},Hi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Hi.apply(null,s):typeof s=="object"?e+=ke(s):e+=s,e+=" "}return e};let li=null,ju=!0;const sC=function(t,e){I(!e,"Can't turn on custom loggers persistently."),Is.logLevel=ce.VERBOSE,li=Is.log.bind(Is)},Me=function(...t){if(ju===!0&&(ju=!1,li===null&&tC.get("logging_enabled")===!0&&sC()),li){const e=Hi.apply(null,t);li(e)}},ji=function(t){return function(...e){Me(t,...e)}},Aa=function(...t){const e="FIREBASE INTERNAL ERROR: "+Hi(...t);Is.error(e)},Jt=function(...t){const e=`FIREBASE FATAL ERROR: ${Hi(...t)}`;throw Is.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+Hi(...t);Is.warn(e)},iC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ps="[MIN_NAME]",Zn="[MAX_NAME]",rs=function(t,e){if(t===e)return 0;if(t===Ps||e===Zn)return-1;if(e===Ps||t===Zn)return 1;{const n=qu(t),s=qu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},oC=function(t,e){return t===e?0:t<e?-1:1},Gs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},Sl=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ke(e[s]),n+=":",n+=Sl(t[e[s]]);return n+="}",n},Wf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Bf=function(t){I(!Tl(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},aC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const uC=new RegExp("^-?(0*)\\d{1,10}$"),hC=-2147483648,dC=2147483647,qu=function(t){if(uC.test(t)){const e=Number(t);if(e>=hC&&e<=dC)return e}return null},Ws=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},fC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ci=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class yr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="5",Vf="v",$f="s",Hf="r",jf="f",qf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gf="ls",Kf="p",Pa="ac",zf="websocket",Yf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&jn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Jf(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===zf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Yf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mC(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.counters_={}}incrementCounter(e,n=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Gg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo={},Qo={};function kl(t){const e=t.toString();return Yo[e]||(Yo[e]=new gC),Yo[e]}function yC(t,e){const n=t.toString();return Qo[n]||(Qo[n]=e()),Qo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ws(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="start",wC="close",bC="pLPCommand",EC="pRTLPCB",Xf="id",Zf="pw",ep="ser",CC="cb",IC="seg",TC="ts",SC="d",RC="dframe",tp=1870,np=30,kC=tp-np,AC=25e3,PC=3e4;class _s{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ji(e),this.stats_=kl(n),this.urlFn=l=>(this.appCheckToken&&(l[Pa]=this.appCheckToken),Jf(n,Yf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(PC)),rC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Al((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gu)this.id=a,this.password=l;else if(o===wC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Gu]="t",s[ep]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[CC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Vf]=Rl,this.transportSessionId&&(s[$f]=this.transportSessionId),this.lastSessionId&&(s[Gf]=this.lastSessionId),this.applicationId&&(s[Kf]=this.applicationId),this.appCheckToken&&(s[Pa]=this.appCheckToken),typeof location<"u"&&location.hostname&&qf.test(location.hostname)&&(s[Hf]=jf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_s.forceAllow_=!0}static forceDisallow(){_s.forceDisallow_=!0}static isAvailable(){return _s.forceAllow_?!0:!_s.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aC()&&!lC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=kd(n),i=Wf(s,kC);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[RC]="t",s[Xf]=e,s[Zf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Al{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nC(),window[bC+this.uniqueCallbackIdentifier]=e,window[EC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Al.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Me("frame writing exception"),a.stack&&Me(a.stack),Me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xf]=this.myID,e[Zf]=this.myPW,e[ep]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+np+s.length<=tp;){const o=this.pendingSegs.shift();s=s+"&"+IC+i+"="+o.seg+"&"+TC+i+"="+o.ts+"&"+SC+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(AC)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=16384,OC=45e3;let Mr=null;typeof MozWebSocket<"u"?Mr=MozWebSocket:typeof WebSocket<"u"&&(Mr=WebSocket);class ft{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ji(this.connId),this.stats_=kl(n),this.connURL=ft.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Vf]=Rl,typeof location<"u"&&location.hostname&&qf.test(location.hostname)&&(o[Hf]=jf),n&&(o[$f]=n),s&&(o[Gf]=s),i&&(o[Pa]=i),r&&(o[Kf]=r),Jf(e,zf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jn.set("previous_websocket_failure",!0);try{let s;Md(),this.mySock=new Mr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Mr!==null&&!ft.forceDisallow_}static previouslyFailed(){return jn.isInMemoryStorage||jn.get("previous_websocket_failure")===!0}markConnectionHealthy(){jn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=vi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wf(n,NC);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(OC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_s,ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ft&&ft.isAvailable();let s=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ft];else{const i=this.transports_=[];for(const r of Ti.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ti.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ti.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=6e4,DC=5e3,LC=10*1024,MC=100*1024,Jo="t",Ku="d",FC="s",zu="r",UC="e",Yu="o",Qu="a",Ju="n",Xu="p",WC="h";class BC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ji("c:"+this.id+":"),this.transportManager_=new Ti(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ci(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>MC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jo in e){const n=e[Jo];n===Qu?this.upgradeIfSecondaryHealthy_():n===zu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Gs("t",e),s=Gs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ju,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Gs("t",e),s=Gs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Gs(Jo,e);if(Ku in e){const s=e[Ku];if(n===WC){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ju){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===FC?this.onConnectionShutdown_(s):n===zu?this.onReset_(s):n===UC?Aa("Server Error: "+s):n===Yu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Aa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rl!==s&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ci(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ci(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(DC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends ip{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ul()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fr}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=32,eh=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new he("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sn(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function Pl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function VC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Si(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function we(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof he)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new he(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function Ke(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Ke(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $C(t,e){const n=Si(t,0),s=Si(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=rs(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Nl(t,e){if(Sn(t)!==Sn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function at(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Sn(t)>Sn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class HC{constructor(e,n){this.errorPrefix_=n,this.parts_=Si(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=co(this.parts_[s]);op(this)}}function jC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=co(e),op(t)}function qC(t){const e=t.parts_.pop();t.byteLength_-=co(e),t.parts_.length>0&&(t.byteLength_-=1)}function op(t){if(t.byteLength_>eh)throw new Error(t.errorPrefix_+"has a key path longer than "+eh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zu+") or object contains a cycle "+Bn(t))}function Bn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends ip{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ol}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=1e3,GC=60*5*1e3,th=30*1e3,KC=1.3,zC=3e4,YC="server_kill",nh=3;class zt extends sp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=zt.nextPersistentConnectionId_++,this.log_=ji("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ks,this.maxReconnectDelay_=GC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Md())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ol.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ke(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Fi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;zt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ft(e,"w")){const s=Rs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||oy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=th)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ry(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Aa("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zC&&(this.reconnectDelay_=Ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*KC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+zt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new BC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ze(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(YC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ze(h),l())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ma(this.interruptReasons_)&&(this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Sl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new he(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nh&&(this.reconnectDelay_=th,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Mf.replace(/\./g,"-")]=1,ul()?e["framework.cordova"]=1:Ld()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fr.getInstance().currentlyOnline();return ma(this.interruptReasons_)&&e}}zt.nextPersistentConnectionId_=0;zt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Y(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(Ps,e),i=new Y(Ps,n);return this.compare(s,i)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr;class ap extends go{static get __EMPTY_NODE(){return sr}static set __EMPTY_NODE(e){sr=e}compare(e,n){return rs(e.name,n.name)}isDefinedOn(e){throw Ms("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Zn,sr)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,sr)}toString(){return".key"}}const Ts=new ap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??De.RED,this.left=i??Xe.EMPTY_NODE,this.right=r??Xe.EMPTY_NODE}copy(e,n,s,i,r){return new De(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class QC{copy(e,n,s,i,r){return this}insert(e,n,s){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xe{constructor(e,n=Xe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new Xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ir(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ir(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ir(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ir(this.root_,null,this.comparator_,!0,e)}}Xe.EMPTY_NODE=new QC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t,e){return rs(t.name,e.name)}function xl(t,e){return rs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;function XC(t){Na=t}const lp=function(t){return typeof t=="number"?"number:"+Bf(t):"string:"+t},cp=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else I(t===Na||t.isEmpty(),"priority of unexpected type.");I(t===Na||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),cp(this.priorityNode_)}static set __childrenNodeConstructor(e){sh=e}static get __childrenNodeConstructor(){return sh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:z(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||Sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+lp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bf(this.value_):e+=this.value_,this.lazyHash_=Uf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),r=xe.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let up,hp;function ZC(t){up=t}function eI(t){hp=t}class tI extends go{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?rs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Zn,new xe("[PRIORITY-POST]",hp))}makePost(e,n){const s=up(e);return new Y(n,new xe("[PRIORITY-POST]",s))}toString(){return".priority"}}const be=new tI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=Math.log(2);class sI{constructor(e){const n=r=>parseInt(Math.log(r)/nI,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ur=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new De(d,h.node,De.BLACK,null,null);{const _=parseInt(u/2,10)+l,y=i(l,_),C=i(_+1,c);return h=t[_],d=n?n(h):h,new De(d,h.node,De.BLACK,y,C)}},r=function(l){let c=null,u=null,h=t.length;const d=function(y,C){const k=h-y,N=h;h-=y;const O=i(k+1,N),L=t[k],V=n?n(L):L;_(new De(V,L.node,C,null,O))},_=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const C=l.nextBitIsOne(),k=Math.pow(2,l.count-(y+1));C?d(k,De.BLACK):(d(k,De.BLACK),d(k,De.RED))}return u},o=new sI(t.length),a=r(o);return new Xe(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;const ds={};class jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(ds&&be,"ChildrenNode.ts has not been loaded"),Xo=Xo||new jt({".priority":ds},{".priority":be}),Xo}get(e){const n=Rs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Xe?n:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Ts,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ur(s,e.getCompare()):a=ds;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new jt(u,c)}addToIndexes(e,n){const s=kr(this.indexes_,(i,r)=>{const o=Rs(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===ds)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ur(a,o.getCompare())}else return ds;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new jt(s,this.indexSet_)}removeFromIndexes(e,n){const s=kr(this.indexes_,i=>{if(i===ds)return i;{const r=n.get(e.name);return r?i.remove(new Y(e.name,r)):i}});return new jt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&cp(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zs||(zs=new H(new Xe(xl),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zs}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zs:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?zs:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{I(z(e)!==".priority"||Sn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(pe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(be,(o,a)=>{n[o]=a.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+lp(this.getPriority().val())+":"),this.forEachChild(be,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Uf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Y(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qi?-1:0}withIndex(e){if(e===Ts||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ts||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(be),i=n.getIterator(be);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ts?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iI extends H{constructor(){super(new Xe(xl),H.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const qi=new iI;Object.defineProperties(Y,{MIN:{value:new Y(Ps,H.EMPTY_NODE)},MAX:{value:new Y(Zn,qi)}});ap.__EMPTY_NODE=H.EMPTY_NODE;xe.__childrenNodeConstructor=H;XC(qi);eI(qi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=!0;function Re(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,Re(e))}if(!(t instanceof Array)&&rI){const n=[];let s=!1;if(Fe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Re(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return H.EMPTY_NODE;const r=Ur(n,JC,o=>o.name,xl);if(s){const o=Ur(n,be.getCompare());return new H(r,Re(e),new jt({".priority":o},{".priority":be}))}else return new H(r,Re(e),jt.Default)}else{let n=H.EMPTY_NODE;return Fe(t,(s,i)=>{if(Ft(t,s)&&s.substring(0,1)!=="."){const r=Re(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Re(e))}}ZC(Re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI extends go{constructor(e){super(),this.indexPath_=e,I(!Q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?rs(e.name,n.name):r}makePost(e,n){const s=Re(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,qi);return new Y(Zn,e)}toString(){return Si(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI extends go{compare(e,n){const s=e.node.compareTo(n.node);return s===0?rs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=Re(e);return new Y(n,s)}toString(){return".value"}}const lI=new aI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){return{type:"value",snapshotNode:t}}function Ns(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ri(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ki(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ri(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ns(n,s)):o.trackChildChange(ki(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(be,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ri(i,r))}),n.isLeafNode()||n.forEachChild(be,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ki(i,r,o))}else s.trackChildChange(Ns(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.indexedFilter_=new Dl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ai.getStartPost_(e),this.endPost_=Ai.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Y(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(be,(o,a)=>{r.matches(new Y(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ai(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Y(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ki(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ri(n,h));const C=a.updateImmediateChild(n,H.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ns(d.name,d.node)),C.updateImmediateChild(d.name,d.node)):C}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ri(c.name,c.node)),r.trackChildChange(Ns(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ps}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===be}copy(){const e=new Ll;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hI(t){return t.loadsAllData()?new Dl(t.getIndex()):t.hasLimit()?new uI(t):new Ai(t)}function ih(t){const e={};if(t.isDefault())return e;let n;if(t.index_===be?n="$priority":t.index_===lI?n="$value":t.index_===Ts?n="$key":(I(t.index_ instanceof oI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ke(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ke(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ke(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function rh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==be&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends sp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ji("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Wr.getListenId_(e,s),a={};this.listens_[o]=a;const l=ih(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Rs(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Wr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ih(e._queryParams),s=e._path.toString(),i=new Fi;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=vi(a.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(){return{value:null,children:new Map}}function fp(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,Br());const i=t.children.get(s);e=pe(e),fp(i,e,n)}}function Oa(t,e,n){t.value!==null?n(e,t.value):fI(t,(s,i)=>{const r=new he(e.toString()+"/"+s);Oa(i,r,n)})}function fI(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=10*1e3,_I=30*1e3,mI=5*60*1e3;class gI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pI(e);const s=oh+(_I-oh)*Math.random();ci(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&Ft(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ci(this.reportStats_.bind(this),Math.floor(Math.random()*2*mI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mt||(mt={}));function Ml(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ul(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=mt.ACK_USER_WRITE,this.source=Ml()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new Vr(Z(),n,this.revert)}}else return I(z(this.path)===e,"operationForChild called for unrelated child."),new Vr(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.source=e,this.path=n,this.type=mt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Pi(this.source,Z()):new Pi(this.source,pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=mt.OVERWRITE}operationForChild(e){return Q(this.path)?new es(this.source,Z(),this.snap.getImmediateChild(e)):new es(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=mt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new es(this.source,Z(),n.value):new Os(this.source,Z(),n)}else return I(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Os(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vI(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(cI(o.childName,o.snapshotNode))}),Ys(t,i,"child_removed",e,s,n),Ys(t,i,"child_added",e,s,n),Ys(t,i,"child_moved",r,s,n),Ys(t,i,"child_changed",e,s,n),Ys(t,i,"value",e,s,n),i}function Ys(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>bI(t,a,l)),o.forEach(a=>{const l=wI(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function wI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bI(t,e,n){if(e.childName==null||n.childName==null)throw Ms("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e){return{eventCache:t,serverCache:e}}function ui(t,e,n,s){return yo(new Rn(e,n,s),t.serverCache)}function pp(t,e,n,s){return yo(t.eventCache,new Rn(e,n,s))}function $r(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ts(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;const EI=()=>(Zo||(Zo=new Xe(oC)),Zo);class fe{constructor(e,n=EI()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return Fe(e,(s,i)=>{n=n.set(new he(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(Q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(pe(e),n);return r!=null?{path:we(new he(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(pe(e)):new fe(null)}}set(e,n){if(Q(e))return new fe(n,this.children);{const s=z(e),r=(this.children.get(s)||new fe(null)).set(pe(e),n),o=this.children.insert(s,r);return new fe(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(pe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new fe(null):new fe(this.value,r)}else return this}}get(e){if(Q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(pe(e)):null}}setTree(e,n){if(Q(e))return n;{const s=z(e),r=(this.children.get(s)||new fe(null)).setTree(pe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new fe(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(we(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(pe(e),we(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(Q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(pe(e),we(n,i),s):new fe(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(we(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new fe(null))}}function hi(t,e,n){if(Q(e))return new yt(new fe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ke(i,e);return r=r.updateChild(o,n),new yt(t.writeTree_.set(i,r))}else{const i=new fe(n),r=t.writeTree_.setTree(e,i);return new yt(r)}}}function xa(t,e,n){let s=t;return Fe(n,(i,r)=>{s=hi(s,we(e,i),r)}),s}function ah(t,e){if(Q(e))return yt.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new yt(n)}}function Da(t,e){return os(t,e)!=null}function os(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ke(n.path,e)):null}function lh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(be,(s,i)=>{e.push(new Y(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Y(s,i.value))}),e}function En(t,e){if(Q(e))return t;{const n=os(t,e);return n!=null?new yt(new fe(n)):new yt(t.writeTree_.subtree(e))}}function La(t){return t.writeTree_.isEmpty()}function xs(t,e){return _p(Z(),t.writeTree_,e)}function _p(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=_p(we(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(we(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e){return vp(e,t)}function CI(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=hi(t.visibleWrites,e,n)),t.lastWriteId=s}function II(t,e,n,s){I(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=xa(t.visibleWrites,e,n),t.lastWriteId=s}function TI(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function SI(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&RI(a,s.path)?i=!1:at(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return kI(t),!0;if(s.snap)t.visibleWrites=ah(t.visibleWrites,s.path);else{const a=s.children;Fe(a,l=>{t.visibleWrites=ah(t.visibleWrites,we(s.path,l))})}return!0}else return!1}function RI(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(we(t.path,n),e))return!0;return!1}function kI(t){t.visibleWrites=mp(t.allWrites,AI,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function AI(t){return t.visible}function mp(t,e,n){let s=yt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)at(n,o)?(a=Ke(n,o),s=hi(s,a,r.snap)):at(o,n)&&(a=Ke(o,n),s=hi(s,Z(),r.snap.getChild(a)));else if(r.children){if(at(n,o))a=Ke(n,o),s=xa(s,a,r.children);else if(at(o,n))if(a=Ke(o,n),Q(a))s=xa(s,Z(),r.children);else{const l=Rs(r.children,z(a));if(l){const c=l.getChild(pe(a));s=hi(s,Z(),c)}}}else throw Ms("WriteRecord should have .snap or .children")}}return s}function gp(t,e,n,s,i){if(!s&&!i){const r=os(t.visibleWrites,e);if(r!=null)return r;{const o=En(t.visibleWrites,e);if(La(o))return n;if(n==null&&!Da(o,Z()))return null;{const a=n||H.EMPTY_NODE;return xs(o,a)}}}else{const r=En(t.visibleWrites,e);if(!i&&La(r))return n;if(!i&&n==null&&!Da(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(at(c.path,e)||at(e,c.path))},a=mp(t.allWrites,o,e),l=n||H.EMPTY_NODE;return xs(a,l)}}}function PI(t,e,n){let s=H.EMPTY_NODE;const i=os(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(be,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=En(t.visibleWrites,e);return n.forEachChild(be,(o,a)=>{const l=xs(En(r,new he(o)),a);s=s.updateImmediateChild(o,l)}),lh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=En(t.visibleWrites,e);return lh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function NI(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=we(e,n);if(Da(t.visibleWrites,r))return null;{const o=En(t.visibleWrites,r);return La(o)?i.getChild(n):xs(o,i.getChild(n))}}function OI(t,e,n,s){const i=we(e,n),r=os(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=En(t.visibleWrites,i);return xs(o,s.getNode().getImmediateChild(n))}else return null}function xI(t,e){return os(t.visibleWrites,e)}function DI(t,e,n,s,i,r,o){let a;const l=En(t.visibleWrites,e),c=os(l,Z());if(c!=null)a=c;else if(n!=null)a=xs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function LI(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function Hr(t,e,n,s){return gp(t.writeTree,t.treePath,e,n,s)}function Wl(t,e){return PI(t.writeTree,t.treePath,e)}function ch(t,e,n,s){return NI(t.writeTree,t.treePath,e,n,s)}function jr(t,e){return xI(t.writeTree,we(t.treePath,e))}function MI(t,e,n,s,i,r){return DI(t.writeTree,t.treePath,e,n,s,i,r)}function Bl(t,e,n){return OI(t.writeTree,t.treePath,e,n)}function yp(t,e){return vp(we(t.treePath,e),t.writeTree)}function vp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ki(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ri(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ns(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ki(s,e.snapshotNode,i.oldSnap));else throw Ms("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const wp=new UI;class Vl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Rn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ts(this.viewCache_),r=MI(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){return{filter:t}}function BI(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function VI(t,e,n,s,i){const r=new FI;let o,a;if(n.type===mt.OVERWRITE){const c=n;c.source.fromUser?o=Ma(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Q(c.path),o=qr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===mt.MERGE){const c=n;c.source.fromUser?o=HI(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Fa(t,e,c.path,c.children,s,i,a,r))}else if(n.type===mt.ACK_USER_WRITE){const c=n;c.revert?o=GI(t,e,c.path,s,i,r):o=jI(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===mt.LISTEN_COMPLETE)o=qI(t,e,n.path,s,r);else throw Ms("Unknown operation type: "+n.type);const l=r.getChanges();return $I(e,o,l),{viewCache:o,changes:l}}function $I(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=$r(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(dp($r(e)))}}function bp(t,e,n,s,i,r){const o=e.eventCache;if(jr(s,n)!=null)return e;{let a,l;if(Q(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ts(e),u=c instanceof H?c:H.EMPTY_NODE,h=Wl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Hr(s,ts(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(n);if(c===".priority"){I(Sn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ch(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=pe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ch(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Bl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ui(e,a,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function qr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=z(n);if(!l.isCompleteForPath(n)&&Sn(n)>1)return e;const y=pe(n),k=l.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),_,k,y,wp,null)}const h=pp(e,c,l.isFullyInitialized()||Q(n),u.filtersNodes()),d=new Vl(i,h,r);return bp(t,h,n,i,d,a)}function Ma(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Vl(i,e,r);if(Q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ui(e,c,!0,t.filter.filtersNodes());else{const h=z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ui(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=pe(n),_=a.getNode().getImmediateChild(h);let y;if(Q(d))y=s;else{const C=u.getCompleteChild(h);C!=null?Pl(d)===".priority"&&C.getChild(rp(d)).isEmpty()?y=C:y=C.updateChild(d,s):y=H.EMPTY_NODE}if(_.equals(y))l=e;else{const C=t.filter.updateChild(a.getNode(),h,y,d,u,o);l=ui(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function uh(t,e){return t.eventCache.isCompleteForChild(e)}function HI(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=we(n,l);uh(e,z(u))&&(a=Ma(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=we(n,l);uh(e,z(u))||(a=Ma(t,a,u,c,i,r,o))}),a}function hh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Fa(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Q(n)?c=s:c=new fe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),y=hh(t,_,d);l=qr(t,l,new he(h),y,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const y=e.serverCache.getNode().getImmediateChild(h),C=hh(t,y,d);l=qr(t,l,new he(h),C,i,r,o,a)}}),l}function jI(t,e,n,s,i,r,o){if(jr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return qr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Q(n)){let c=new fe(null);return l.getNode().forEachChild(Ts,(u,h)=>{c=c.set(new he(u),h)}),Fa(t,e,n,c,i,r,a,o)}else return e}else{let c=new fe(null);return s.foreach((u,h)=>{const d=we(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Fa(t,e,n,c,i,r,a,o)}}function qI(t,e,n,s,i){const r=e.serverCache,o=pp(e,r.getNode(),r.isFullyInitialized()||Q(n),r.isFiltered());return bp(t,o,n,s,wp,i)}function GI(t,e,n,s,i,r){let o;if(jr(s,n)!=null)return e;{const a=new Vl(s,e,i),l=e.eventCache.getNode();let c;if(Q(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Hr(s,ts(e));else{const h=e.serverCache.getNode();I(h instanceof H,"serverChildren would be complete if leaf node"),u=Wl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=z(n);let h=Bl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,pe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,H.EMPTY_NODE,pe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hr(s,ts(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||jr(s,Z())!=null,ui(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Dl(s.getIndex()),r=hI(s);this.processor_=WI(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,a.getNode(),null),u=new Rn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Rn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=yo(h,u),this.eventGenerator_=new yI(this.query_)}get query(){return this.query_}}function zI(t){return t.viewCache_.serverCache.getNode()}function YI(t){return $r(t.viewCache_)}function QI(t,e){const n=ts(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function dh(t){return t.eventRegistrations_.length===0}function JI(t,e){t.eventRegistrations_.push(e)}function fh(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ph(t,e,n,s){e.type===mt.MERGE&&e.source.queryId!==null&&(I(ts(t.viewCache_),"We should always have a full cache before handling merges"),I($r(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=VI(t.processor_,i,e,n,s);return BI(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ep(t,r.changes,r.viewCache.eventCache.getNode(),null)}function XI(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(be,(r,o)=>{s.push(Ns(r,o))}),n.isFullyInitialized()&&s.push(dp(n.getNode())),Ep(t,s,n.getNode(),e)}function Ep(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return vI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;class Cp{constructor(){this.views=new Map}}function ZI(t){I(!Gr,"__referenceConstructor has already been defined"),Gr=t}function eT(){return I(Gr,"Reference.ts has not been loaded"),Gr}function tT(t){return t.views.size===0}function $l(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),ph(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ph(o,e,n,s));return r}}function Ip(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Hr(n,i?s:null),l=!1;a?l=!0:s instanceof H?(a=Wl(n,s),l=!1):(a=H.EMPTY_NODE,l=!1);const c=yo(new Rn(a,l,!1),new Rn(s,i,!1));return new KI(e,c)}return o}function nT(t,e,n,s,i,r){const o=Ip(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),JI(o,n),XI(o,n)}function sT(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=kn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(fh(c,n,s)),dh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(fh(l,n,s)),dh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!kn(t)&&r.push(new(eT())(e._repo,e._path)),{removed:r,events:o}}function Tp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cn(t,e){let n=null;for(const s of t.views.values())n=n||QI(s,e);return n}function Sp(t,e){if(e._queryParams.loadsAllData())return wo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Rp(t,e){return Sp(t,e)!=null}function kn(t){return wo(t)!=null}function wo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr;function iT(t){I(!Kr,"__referenceConstructor has already been defined"),Kr=t}function rT(){return I(Kr,"Reference.ts has not been loaded"),Kr}let oT=1;class _h{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=LI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kp(t,e,n,s,i){return CI(t.pendingWriteTree_,e,n,s,i),i?Bs(t,new es(Ml(),e,n)):[]}function aT(t,e,n,s){II(t.pendingWriteTree_,e,n,s);const i=fe.fromObject(n);return Bs(t,new Os(Ml(),e,i))}function gn(t,e,n=!1){const s=TI(t.pendingWriteTree_,e);if(SI(t.pendingWriteTree_,e)){let r=new fe(null);return s.snap!=null?r=r.set(Z(),!0):Fe(s.children,o=>{r=r.set(new he(o),!0)}),Bs(t,new Vr(s.path,r,n))}else return[]}function Gi(t,e,n){return Bs(t,new es(Fl(),e,n))}function lT(t,e,n){const s=fe.fromObject(n);return Bs(t,new Os(Fl(),e,s))}function cT(t,e){return Bs(t,new Pi(Fl(),e))}function uT(t,e,n){const s=jl(t,n);if(s){const i=ql(s),r=i.path,o=i.queryId,a=Ke(r,e),l=new Pi(Ul(o),a);return Gl(t,r,l)}else return[]}function zr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Rp(o,e))){const l=sT(o,e,n,s);tT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>kn(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=fT(d);for(let y=0;y<_.length;++y){const C=_[y],k=C.query,N=Op(t,C);t.listenProvider_.startListening(di(k),Ni(t,k),N.hashFn,N.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(di(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(bo(d));t.listenProvider_.stopListening(di(d),_)}))}pT(t,c)}return a}function Ap(t,e,n,s){const i=jl(t,s);if(i!=null){const r=ql(i),o=r.path,a=r.queryId,l=Ke(o,e),c=new es(Ul(a),l,n);return Gl(t,o,c)}else return[]}function hT(t,e,n,s){const i=jl(t,s);if(i){const r=ql(i),o=r.path,a=r.queryId,l=Ke(o,e),c=fe.fromObject(n),u=new Os(Ul(a),l,c);return Gl(t,o,u)}else return[]}function Ua(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const y=Ke(d,i);r=r||Cn(_,y),o=o||kn(_)});let a=t.syncPointTree_.get(i);a?(o=o||kn(a),r=r||Cn(a,Z())):(a=new Cp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const C=Cn(y,Z());C&&(r=r.updateImmediateChild(_,C))}));const c=Rp(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=bo(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=_T();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=vo(t.pendingWriteTree_,i);let h=nT(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Sp(a,e);h=h.concat(mT(t,e,d))}return h}function Hl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ke(o,e),c=Cn(a,l);if(c)return c});return gp(i,e,r,n,!0)}function dT(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ke(c,n);s=s||Cn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Cn(i,Z()):(i=new Cp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Rn(s,!0,!1):null,a=vo(t.pendingWriteTree_,e._path),l=Ip(i,e,a,r?o.getNode():H.EMPTY_NODE,r);return YI(l)}function Bs(t,e){return Pp(e,t.syncPointTree_,null,vo(t.pendingWriteTree_,Z()))}function Pp(t,e,n,s){if(Q(t.path))return Np(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=Cn(i,Z()));let r=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=yp(s,o);r=r.concat(Pp(a,l,c,u))}return i&&(r=r.concat($l(i,t,s,n))),r}}function Np(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=Cn(i,Z()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=yp(s,o),u=t.operationForChild(o);u&&(r=r.concat(Np(u,a,l,c)))}),i&&(r=r.concat($l(i,t,s,n))),r}function Op(t,e){const n=e.query,s=Ni(t,n);return{hashFn:()=>(zI(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?uT(t,n._path,s):cT(t,n._path);{const r=cC(i,n);return zr(t,n,null,r)}}}}function Ni(t,e){const n=bo(e);return t.queryToTagMap.get(n)}function bo(t){return t._path.toString()+"$"+t._queryIdentifier}function jl(t,e){return t.tagToQueryMap.get(e)}function ql(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function Gl(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=vo(t.pendingWriteTree_,e);return $l(s,n,i,null)}function fT(t){return t.fold((e,n,s)=>{if(n&&kn(n))return[wo(n)];{let i=[];return n&&(i=Tp(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function di(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(rT())(t._repo,t._path):t}function pT(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=bo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function _T(){return oT++}function mT(t,e,n){const s=e._path,i=Ni(t,e),r=Op(t,n),o=t.listenProvider_.startListening(di(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)I(!kn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Q(c)&&u&&kn(u))return[wo(u).query];{let d=[];return u&&(d=d.concat(Tp(u).map(_=>_.query))),Fe(h,(_,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(di(u),Ni(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Kl(n)}node(){return this.node_}}class zl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new zl(this.syncTree_,n)}node(){return Hl(this.syncTree_,this.path_)}}const gT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},mh=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vT(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},vT=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},xp=function(t,e,n,s){return Yl(e,new zl(n,t),s)},Dp=function(t,e,n){return Yl(t,new Kl(e),n)};function Yl(t,e,n){const s=t.getPriority().val(),i=mh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=mh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new xe(a,Re(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new xe(i))),o.forEachChild(be,(a,l)=>{const c=Yl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Jl(t,e){let n=e instanceof he?e:new he(e),s=t,i=z(n);for(;i!==null;){const r=Rs(s.node.children,i)||{children:{},childCount:0};s=new Ql(i,s,r),n=pe(n),i=z(n)}return s}function Vs(t){return t.node.value}function Lp(t,e){t.node.value=e,Wa(t)}function Mp(t){return t.node.childCount>0}function wT(t){return Vs(t)===void 0&&!Mp(t)}function Eo(t,e){Fe(t.node.children,(n,s)=>{e(new Ql(n,t,s))})}function Fp(t,e,n,s){n&&!s&&e(t),Eo(t,i=>{Fp(i,e,!0,s)}),n&&s&&e(t)}function bT(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ki(t){return new he(t.parent===null?t.name:Ki(t.parent)+"/"+t.name)}function Wa(t){t.parent!==null&&ET(t.parent,t.name,t)}function ET(t,e,n){const s=wT(n),i=Ft(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Wa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Wa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=/[\[\].#$\/\u0000-\u001F\u007F]/,IT=/[\[\].#$\u0000-\u001F\u007F]/,ea=10*1024*1024,Xl=function(t){return typeof t=="string"&&t.length!==0&&!CT.test(t)},Up=function(t){return typeof t=="string"&&t.length!==0&&!IT.test(t)},TT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Up(t)},ST=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Tl(t)||t&&typeof t=="object"&&Ft(t,".sv")},Wp=function(t,e,n,s){s&&e===void 0||Co(lo(t,"value"),e,n)},Co=function(t,e,n){const s=n instanceof he?new HC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Bn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Bn(s)+" with contents = "+e.toString());if(Tl(e))throw new Error(t+"contains "+e.toString()+" "+Bn(s));if(typeof e=="string"&&e.length>ea/3&&co(e)>ea)throw new Error(t+"contains a string greater than "+ea+" utf8 bytes "+Bn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Xl(o)))throw new Error(t+" contains an invalid key ("+o+") "+Bn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jC(s,o),Co(t,a,s),qC(s)}),i&&r)throw new Error(t+' contains ".value" child '+Bn(s)+" in addition to actual children.")}},RT=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Si(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Xl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort($C);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&at(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},kT=function(t,e,n,s){const i=lo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Fe(e,(o,a)=>{const l=new he(o);if(Co(i,a,we(n,l)),Pl(l)===".priority"&&!ST(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),RT(i,r)},Bp=function(t,e,n,s){if(!Up(n))throw new Error(lo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},AT=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Bp(t,e,n)},Zl=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},PT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!TT(n))throw new Error(lo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Io(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Nl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Vp(t,e,n){Io(t,n),$p(t,s=>Nl(s,e))}function lt(t,e,n){Io(t,n),$p(t,s=>at(s,e)||at(e,s))}function $p(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(OT(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function OT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();li&&Me("event: "+n.toString()),Ws(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="repo_interrupt",DT=25;class LT{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new NT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Br(),this.transactionQueueTree_=new Ql,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MT(t,e,n){if(t.stats_=kl(t.repoInfo_),t.forceRestClient_||fC())t.server_=new Wr(t.repoInfo_,(s,i,r,o)=>{gh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new zt(t.repoInfo_,e,(s,i,r,o)=>{gh(t,s,i,r,o)},s=>{yh(t,s)},s=>{FT(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=yC(t.repoInfo_,()=>new gI(t.stats_,t.server_)),t.infoData_=new dI,t.infoSyncTree_=new _h({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Gi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ec(t,"connected",!1),t.serverSyncTree_=new _h({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);lt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Hp(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function To(t){return gT({timestamp:Hp(t)})}function gh(t,e,n,s,i){t.dataUpdateCount++;const r=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=kr(n,c=>Re(c));o=hT(t.serverSyncTree_,r,l,i)}else{const l=Re(n);o=Ap(t.serverSyncTree_,r,l,i)}else if(s){const l=kr(n,c=>Re(c));o=lT(t.serverSyncTree_,r,l)}else{const l=Re(n);o=Gi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ds(t,r)),lt(t.eventQueue_,a,o)}function yh(t,e){ec(t,"connected",e),e===!1&&VT(t)}function FT(t,e){Fe(e,(n,s)=>{ec(t,n,s)})}function ec(t,e,n){const s=new he("/.info/"+e),i=Re(n);t.infoData_.updateSnapshot(s,i);const r=Gi(t.infoSyncTree_,s,i);lt(t.eventQueue_,s,r)}function tc(t){return t.nextWriteId_++}function UT(t,e,n){const s=dT(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Re(i).withIndex(e._queryParams.getIndex());Ua(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Gi(t.serverSyncTree_,e._path,r);else{const a=Ni(t.serverSyncTree_,e);o=Ap(t.serverSyncTree_,e._path,r,a)}return lt(t.eventQueue_,e._path,o),zr(t.serverSyncTree_,e,n,null,!0),r},i=>(zi(t,"get for query "+ke(e)+" failed: "+i),Promise.reject(new Error(i))))}function WT(t,e,n,s,i){zi(t,"set",{path:e.toString(),value:n,priority:s});const r=To(t),o=Re(n,s),a=Hl(t.serverSyncTree_,e),l=Dp(o,a,r),c=tc(t),u=kp(t.serverSyncTree_,e,l,c,!0);Io(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const y=d==="ok";y||ze("set at "+e+" failed: "+d);const C=gn(t.serverSyncTree_,c,!y);lt(t.eventQueue_,e,C),Ba(t,i,d,_)});const h=sc(t,e);Ds(t,h),lt(t.eventQueue_,h,[])}function BT(t,e,n,s){zi(t,"update",{path:e.toString(),value:n});let i=!0;const r=To(t),o={};if(Fe(n,(a,l)=>{i=!1,o[a]=xp(we(e,a),Re(l),t.serverSyncTree_,r)}),i)Me("update() called with empty data.  Don't do anything."),Ba(t,s,"ok",void 0);else{const a=tc(t),l=aT(t.serverSyncTree_,e,o,a);Io(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||ze("update at "+e+" failed: "+c);const d=gn(t.serverSyncTree_,a,!h),_=d.length>0?Ds(t,e):e;lt(t.eventQueue_,_,d),Ba(t,s,c,u)}),Fe(n,c=>{const u=sc(t,we(e,c));Ds(t,u)}),lt(t.eventQueue_,e,[])}}function VT(t){zi(t,"onDisconnectEvents");const e=To(t),n=Br();Oa(t.onDisconnect_,Z(),(i,r)=>{const o=xp(i,r,t.serverSyncTree_,e);fp(n,i,o)});let s=[];Oa(n,Z(),(i,r)=>{s=s.concat(Gi(t.serverSyncTree_,i,r));const o=sc(t,i);Ds(t,o)}),t.onDisconnect_=Br(),lt(t.eventQueue_,Z(),s)}function $T(t,e,n){let s;z(e._path)===".info"?s=Ua(t.infoSyncTree_,e,n):s=Ua(t.serverSyncTree_,e,n),Vp(t.eventQueue_,e._path,s)}function HT(t,e,n){let s;z(e._path)===".info"?s=zr(t.infoSyncTree_,e,n):s=zr(t.serverSyncTree_,e,n),Vp(t.eventQueue_,e._path,s)}function jT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(xT)}function zi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function Ba(t,e,n,s){e&&Ws(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function jp(t,e,n){return Hl(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function nc(t,e=t.transactionQueueTree_){if(e||So(t,e),Vs(e)){const n=Gp(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&qT(t,Ki(e),n)}else Mp(e)&&Eo(e,n=>{nc(t,n)})}function qT(t,e,n){const s=n.map(c=>c.currentWriteId),i=jp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ke(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{zi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(gn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();So(t,Jl(t.transactionQueueTree_,e)),nc(t,t.transactionQueueTree_),lt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ws(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ze("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ds(t,e)}},o)}function Ds(t,e){const n=qp(t,e),s=Ki(n),i=Gp(t,n);return GT(t,i,s),s}function GT(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ke(n,l.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=DT)u=!0,h="maxretry",i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=jp(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Co("transaction failed: Data returned ",_,l.path);let y=Re(_);typeof _=="object"&&_!=null&&Ft(_,".priority")||(y=y.updatePriority(d.getPriority()));const k=l.currentWriteId,N=To(t),O=Dp(y,d,N);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=O,l.currentWriteId=tc(t),o.splice(o.indexOf(k),1),i=i.concat(kp(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),i=i.concat(gn(t.serverSyncTree_,k,!0))}else u=!0,h="nodata",i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0))}lt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}So(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ws(s[a]);nc(t,t.transactionQueueTree_)}function qp(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Vs(s)===void 0;)s=Jl(s,n),e=pe(e),n=z(e);return s}function Gp(t,e){const n=[];return Kp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Kp(t,e,n){const s=Vs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Eo(e,i=>{Kp(t,i,n)})}function So(t,e){const n=Vs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Lp(e,n.length>0?n:void 0)}Eo(e,s=>{So(t,s)})}function sc(t,e){const n=Ki(qp(t,e)),s=Jl(t.transactionQueueTree_,e);return bT(s,i=>{ta(t,i)}),ta(t,s),Fp(s,i=>{ta(t,i)}),n}function ta(t,e){const n=Vs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Lp(e,void 0):n.length=r+1,lt(t.eventQueue_,Ki(e),i);for(let o=0;o<s.length;o++)Ws(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function zT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const vh=function(t,e){const n=YT(t),s=n.namespace;n.domain==="firebase.com"&&Jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||iC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Qf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new he(n.pathString)}},YT=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=KT(t.substring(u,h)));const d=zT(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",QT=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=wh.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=wh.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class XT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ic{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Q(this._path)?null:Pl(this._path)}get ref(){return new en(this._repo,this._path)}get _queryIdentifier(){const e=rh(this._queryParams),n=Sl(e);return n==="{}"?"default":n}get _queryObject(){return rh(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof ic))return!1;const n=this._repo===e._repo,s=Nl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+VC(this._path)}}class en extends ic{constructor(e,n){super(e,n,new Ll,!1)}get parent(){const e=rp(this._path);return e===null?null:new en(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Oi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new he(e),s=xi(this.ref,e);return new Oi(this._node.getChild(n),s,be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Oi(i,xi(this.ref,s),be)))}hasChild(e){const n=new he(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tt(t,e){return t=Ie(t),t._checkNotDeleted("ref"),e!==void 0?xi(t._root,e):t._root}function xi(t,e){return t=Ie(t),z(t._path)===null?AT("child","path",e):Bp("child","path",e),new en(t._repo,we(t._path,e))}function Yp(t,e){t=Ie(t),Zl("push",t._path),Wp("push",e,t._path,!0);const n=Hp(t._repo),s=QT(n),i=xi(t,s),r=xi(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Qp(t){return Zl("remove",t._path),Ro(t,null)}function Ro(t,e){t=Ie(t),Zl("set",t._path),Wp("set",e,t._path,!1);const n=new Fi;return WT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function rc(t,e){kT("update",e,t._path);const n=new Fi;return BT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ko(t){t=Ie(t);const e=new zp(()=>{}),n=new Ao(e);return UT(t._repo,t,n).then(s=>new Oi(s,new en(t._repo,t._path),t._queryParams.getIndex()))}class Ao{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new JT("value",this,new Oi(e.snapshotNode,new en(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new XT(this,e,n):null}matches(e){return e instanceof Ao?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ZT(t,e,n,s,i){const r=new zp(n,void 0),o=new Ao(r);return $T(t._repo,t,o),()=>HT(t._repo,t,o)}function eS(t,e,n,s){return ZT(t,"value",e)}ZI(en);iT(en);/**
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
 */const tS="FIREBASE_DATABASE_EMULATOR_HOST",Va={};let nS=!1;function sS(t,e,n,s){t.repoInfo_=new Qf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function iS(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vh(r,i),a=o.repoInfo,l;typeof process<"u"&&Vu&&(l=Vu[tS]),l?(r=`http://${l}?ns=${a.namespace}`,o=vh(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new _C(t.name,t.options,e);PT("Invalid Firebase Database URL",o),Q(o.path)||Jt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=oS(a,t,c,new pC(t.name,n));return new aS(u,t)}function rS(t,e){const n=Va[e];(!n||n[t.key]!==t)&&Jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jT(t),delete n[t.key]}function oS(t,e,n,s){let i=Va[e.name];i||(i={},Va[e.name]=i);let r=i[t.toURLString()];return r&&Jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new LT(t,nS,n,s),i[t.toURLString()]=r,r}class aS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new en(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jt("Cannot call "+e+" on a deleted database.")}}function An(t=fl(),e){const n=uo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Nd("database");s&&lS(n,...s)}return n}function lS(t,e,n,s={}){t=Ie(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Jt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new yr(yr.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Dd(s.mockUserToken,t.app.options.projectId);r=new yr(o)}sS(i,e,n,r)}/**
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
 */function cS(t){XE(ss),Qn(new Tn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return iS(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Nt($u,Hu,t),Nt($u,Hu,"esm2017")}zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};cS();const as={firebaseConfig:{apiKey:"AIzaSyC6OKfRLtntX1mzOgfPRGeQWlBQKakP8rI",authDomain:"motw-frontend-hq.firebaseapp.com",databaseURL:"https://motw-frontend-hq-default-rtdb.firebaseio.com",projectId:"motw-frontend-hq",storageBucket:"motw-frontend-hq.appspot.com",messagingSenderId:"607683384016",appId:"1:607683384016:web:334f0aa4548af6b1f884d5"}},uS={data(){return{message:"We doin our best here",email:"",password:"",name:"",showRegister:!1,errorMessage:""}},created(){this.app=On(as.firebaseConfig),this.auth=If(this.app),vw(this.auth,t=>{t?(We.login({uid:t.uid}),this.fetchUserName(t.uid)):We.logout()})},methods:{setCookie(t,e,n){const s=new Date;s.setTime(s.getTime()+n*24*60*60*1e3);const i=`expires=${s.toUTCString()}`;document.cookie=`${t}=${e}; ${i}; path=/`},displayMessage(t){console.log(t)},registerUser(){pw(this.auth,this.email,this.password).then(t=>{const e=t.user,n={name:this.name,email:this.email,isAdmin:!1,last_login:Date.now()},s=An();Ro(tt(s,"profiles/"+e.uid),n),We.login({uid:e.uid,name:this.name,isAdmin:e.isAdmin}),this.errorMessage=""}).catch(t=>{this.errorMessage=t.message})},loginUser(){mw(this.auth,_f).then(()=>_w(this.auth,this.email,this.password)).then(t=>{We.login({uid:t.user.uid}),this.fetchUserName(t.user.uid),this.errorMessage="",localStorage.setItem("motw-uid",t.user.uid),localStorage.setItem("motw-user",JSON.stringify(t.user))}).catch(t=>{this.errorMessage=t.message})},logoutUser(){df(this.auth).then(()=>{We.logout(),localStorage.removeItem("motw-uid"),localStorage.removeItem("motw-user")}).catch(t=>{console.error(t)})},fetchUserName(t){console.log(128,"Fetch username");const e=An(),n=tt(e,"profiles/"+t);ko(n).then(s=>{s.exists()?(We.user.name=s.val().name,We.isAdmin=s.val().isAdmin):console.log("No user data available")}).catch(s=>{console.error(s)})}},computed:{store(){return We}}},oc=t=>(Lt("data-v-da7d4a10"),t=t(),Mt(),t),hS={key:0},dS={key:0,class:"error"},fS=oc(()=>m("label",{for:"email"},"Email:",-1)),pS=oc(()=>m("label",{for:"password"},"Password:",-1)),_S={key:1},mS=oc(()=>m("label",{for:"name"},"Name:",-1)),gS={key:2},yS={key:3},vS={key:1};function wS(t,e,n,s,i,r){return F(),U("div",null,[m("h1",null,re(i.message),1),r.store.isAuthenticated?(F(),U("div",vS,[m("p",null,"Welcome, "+re(r.store.user.name)+"!",1),m("button",{onClick:e[6]||(e[6]=(...o)=>r.logoutUser&&r.logoutUser(...o))},"Logout")])):(F(),U("div",hS,[i.errorMessage?(F(),U("div",dS,re(i.errorMessage),1)):ve("",!0),m("div",null,[fS,ue(m("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),id:"email"},null,512),[[de,i.email]])]),m("div",null,[pS,ue(m("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),id:"password"},null,512),[[de,i.password]])]),i.showRegister?(F(),U("div",_S,[mS,ue(m("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>i.name=o),id:"name"},null,512),[[de,i.name]])])):ve("",!0),i.showRegister?(F(),U("div",gS,[m("button",{onClick:e[3]||(e[3]=(...o)=>r.registerUser&&r.registerUser(...o))},"Register")])):(F(),U("div",yS,[m("button",{onClick:e[4]||(e[4]=(...o)=>r.loginUser&&r.loginUser(...o))},"Login"),m("p",null,[Ge("No account? "),m("a",{href:"#",onClick:e[5]||(e[5]=mn(o=>i.showRegister=!0,["prevent"]))},"Click here to register")])]))]))])}const bS=bt(uS,[["render",wS],["__scopeId","data-v-da7d4a10"]]),ES={name:"EditCaseFiles",props:{caseToEdit:Object},data(){return{caseFile:{title:"",summary:"",details:"",password:""},db:null}},watch:{caseToEdit:{handler(t){t&&(this.caseFile={...t})},immediate:!0}},created(){this.app=On(as.firebaseConfig),this.db=An(this.app)},methods:{saveCaseFile(){if(this.caseFile.id){const t=tt(this.db,"caseFiles/"+this.caseFile.id);rc(t,this.caseFile).then(()=>{this.resetForm(),this.$emit("saved")}).catch(e=>{console.error("Error updating case:",e)})}else{const t=tt(this.db,"caseFiles");Yp(t).set(this.caseFile).then(()=>{this.resetForm(),this.$emit("saved")}).catch(n=>{console.error("Error adding case:",n)})}},resetForm(){this.caseFile={title:"",summary:"",details:"",password:""}}}},Po=t=>(Lt("data-v-d1257c50"),t=t(),Mt(),t),CS={class:"edit-case-files"},IS={class:"form-group"},TS=Po(()=>m("label",{for:"title"},"Title:",-1)),SS={class:"form-group"},RS=Po(()=>m("label",{for:"summary"},"Summary:",-1)),kS={class:"form-group"},AS=Po(()=>m("label",{for:"details"},"Details:",-1)),PS={class:"form-group"},NS=Po(()=>m("label",{for:"password"},"Password:",-1)),OS={type:"submit"};function xS(t,e,n,s,i,r){return F(),U("div",CS,[m("h1",null,re(t.editingCase?"Edit":"Add")+" Case File",1),m("form",{onSubmit:e[4]||(e[4]=mn((...o)=>r.saveCaseFile&&r.saveCaseFile(...o),["prevent"]))},[m("div",IS,[TS,ue(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.caseFile.title=o),id:"title",required:""},null,512),[[de,i.caseFile.title]])]),m("div",SS,[RS,ue(m("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>i.caseFile.summary=o),id:"summary",required:""},null,512),[[de,i.caseFile.summary]])]),m("div",kS,[AS,ue(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.caseFile.details=o),id:"details",required:""},null,512),[[de,i.caseFile.details]])]),m("div",PS,[NS,ue(m("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=o=>i.caseFile.password=o),id:"password",required:""},null,512),[[de,i.caseFile.password]])]),m("button",OS,re(t.editingCase?"Update":"Add")+" Case File",1)],32)])}const DS=bt(ES,[["render",xS],["__scopeId","data-v-d1257c50"]]),LS={name:"CaseFiles",components:{EditCaseFiles:DS},data(){return{caseFiles:[],caseToEdit:null,db:null,isAdmin:We.isAdmin}},created(){this.app=On(as.firebaseConfig),this.db=An(this.app),this.fetchCaseFiles()},methods:{fetchCaseFiles(){const t=tt(this.db,"caseFiles");eS(t,e=>{const n=e.val();n?this.caseFiles=Object.keys(n).map(s=>({id:s,...n[s],enteredPassword:"",detailsVisible:!1})):this.caseFiles=[]})},editCaseFile(t){this.caseToEdit={...t}},deleteCaseFile(t){const e=tt(this.db,"caseFiles/"+t);Qp(e).catch(n=>console.error("Error deleting case:",n))},unlockDetails(t){t.enteredPassword===t.password?t.detailsVisible=!0:alert("Incorrect password")}}},MS=t=>(Lt("data-v-8796e7d9"),t=t(),Mt(),t),FS={class:"case-files"},US=MS(()=>m("h1",null,"Case Files",-1)),WS={key:0},BS=["onUpdate:modelValue"],VS=["onClick"],$S={key:0},HS={key:0},jS=["onClick"],qS=["onClick"];function GS(t,e,n,s,i,r){const o=pt("edit-case-files"),a=pt("router-link");return F(),U("div",FS,[US,i.isAdmin?(F(),U("div",WS,[ee(o,{caseToEdit:i.caseToEdit,onSaved:r.fetchCaseFiles},null,8,["caseToEdit","onSaved"])])):ve("",!0),m("ul",null,[(F(!0),U(Se,null,kt(i.caseFiles,l=>(F(),U("li",{class:"casefile-item",key:l.id},[m("h2",null,re(l.title),1),m("p",null,re(l.summary),1),m("div",null,[ue(m("input",{type:"password","onUpdate:modelValue":c=>l.enteredPassword=c,placeholder:"Enter password to view details"},null,8,BS),[[de,l.enteredPassword]]),m("button",{onClick:c=>r.unlockDetails(l)},"Unlock Details",8,VS),l.detailsVisible?(F(),U("p",$S,re(l.details),1)):ve("",!0)]),i.isAdmin?(F(),U("div",HS,[m("button",{onClick:c=>r.editCaseFile(l)},"Edit",8,jS),m("button",{onClick:c=>r.deleteCaseFile(l.id)},"Delete",8,qS)])):ve("",!0),ee(a,{to:"/case-files/"+l.id},{default:st(()=>[Ge("Read more")]),_:2},1032,["to"])]))),128))])])}const Jp=bt(LS,[["render",GS],["__scopeId","data-v-8796e7d9"]]),KS={name:"EditBeast",data(){return{beast:{name:"",image:"",description:"",stats:"",details:"",detailsPassword:"",entryPassword:""},db:null}},props:{beastToEdit:Object},watch:{beastToEdit:{handler(t){this.beast={...t}},immediate:!0}},created(){this.app=On(as.firebaseConfig),this.db=An(this.app)},methods:{saveBeast(){if(this.beast.id){const t=tt(this.db,"bestiary/"+this.beast.id);rc(t,this.beast).then(()=>{this.resetForm(),this.$emit("saved")}).catch(e=>{console.error("Error updating beast:",e)})}else{const t=tt(this.db,"bestiary"),e=Yp(t);Ro(e,this.beast).then(()=>{this.resetForm(),this.$emit("saved")}).catch(n=>{console.error("Error adding beast:",n)})}},resetForm(){this.beast={name:"",image:"",description:"",stats:"",details:"",detailsPassword:"",entryPassword:""}}}},Ln=t=>(Lt("data-v-8da845a3"),t=t(),Mt(),t),zS={class:"edit-beast"},YS={class:"form-group"},QS=Ln(()=>m("label",{for:"name"},"Name:",-1)),JS={class:"form-group"},XS=Ln(()=>m("label",{for:"image"},"Image URL:",-1)),ZS={class:"form-group"},eR=Ln(()=>m("label",{for:"description"},"Description:",-1)),tR={class:"form-group"},nR=Ln(()=>m("label",{for:"stats"},"Stats:",-1)),sR={class:"form-group"},iR=Ln(()=>m("label",{for:"details"},"Details:",-1)),rR={class:"form-group"},oR=Ln(()=>m("label",{for:"detailsPassword"},"Details Password:",-1)),aR={class:"form-group"},lR=Ln(()=>m("label",{for:"entryPassword"},"Entry Password:",-1)),cR=Ln(()=>m("button",{type:"submit"},"Save Beast",-1));function uR(t,e,n,s,i,r){return F(),U("div",zS,[m("form",{onSubmit:e[7]||(e[7]=mn((...o)=>r.saveBeast&&r.saveBeast(...o),["prevent"]))},[m("div",YS,[QS,ue(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.beast.name=o),id:"name",required:""},null,512),[[de,i.beast.name]])]),m("div",JS,[XS,ue(m("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>i.beast.image=o),id:"image",required:""},null,512),[[de,i.beast.image]])]),m("div",ZS,[eR,ue(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.beast.description=o),id:"description",required:""},null,512),[[de,i.beast.description]])]),m("div",tR,[nR,ue(m("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>i.beast.stats=o),id:"stats",required:""},null,512),[[de,i.beast.stats]])]),m("div",sR,[iR,ue(m("textarea",{"onUpdate:modelValue":e[4]||(e[4]=o=>i.beast.details=o),id:"details"},null,512),[[de,i.beast.details]])]),m("div",rR,[oR,ue(m("input",{type:"password","onUpdate:modelValue":e[5]||(e[5]=o=>i.beast.detailsPassword=o),id:"detailsPassword"},null,512),[[de,i.beast.detailsPassword]])]),m("div",aR,[lR,ue(m("input",{type:"password","onUpdate:modelValue":e[6]||(e[6]=o=>i.beast.entryPassword=o),id:"entryPassword"},null,512),[[de,i.beast.entryPassword]])]),cR],32)])}const hR=bt(KS,[["render",uR],["__scopeId","data-v-8da845a3"]]),dR={name:"Bestiary",components:{EditBeast:hR},data(){return{beasts:[],beastToEdit:null,db:null,isAdmin:We.isAdmin}},created(){this.app=On(as.firebaseConfig),this.db=An(this.app),this.fetchBeasts(),this.checkAdmin()},methods:{fetchBeasts(){const t=tt(this.db,"bestiary");ko(t).then(e=>{if(e.exists()){const n=e.val();this.beasts=Object.keys(n).map(s=>({id:s,...n[s],detailsVisible:!1,entryVisible:!n[s].entryPassword,entryPasswordInput:"",detailsPasswordInput:""}))}}).catch(e=>{console.error("Error fetching beasts:",e)})},editBeast(t){this.beastToEdit={...t}},deleteBeast(t){const e=tt(this.db,"bestiary/"+t);Qp(e).then(()=>{this.fetchBeasts()}).catch(n=>{console.error("Error deleting beast:",n)})},checkAdmin(){console.log(83,"Admin check",We.isAdmin),this.isAdmin=We.isAdmin},unlockEntry(t){t.entryPasswordInput===t.entryPassword||!t.entryPassword?t.entryVisible=!0:alert("Incorrect password!")},unlockDetails(t){t.detailsPasswordInput===t.detailsPassword||!t.detailsPassword?t.detailsVisible=!0:alert("Incorrect password!")}}},Xp=t=>(Lt("data-v-f66316c2"),t=t(),Mt(),t),fR={class:"bestiary"},pR=Xp(()=>m("div",{class:"header"},[m("h1",null,"Bestiary")],-1)),_R={class:"content"},mR={key:0},gR={key:1},yR=Xp(()=>m("h2",null,"Beasts",-1)),vR={key:0},wR=["onUpdate:modelValue"],bR=["onClick"],ER={key:1},CR=["src","alt"],IR={key:0},TR=["onUpdate:modelValue"],SR=["onClick"],RR={key:1},kR={key:2},AR=["onClick"],PR=["onClick"];function NR(t,e,n,s,i,r){const o=pt("edit-beast");return F(),U("div",fR,[pR,m("div",_R,[i.isAdmin?(F(),U("div",mR,[ee(o,{beastToEdit:i.beastToEdit,onSaved:r.fetchBeasts},null,8,["beastToEdit","onSaved"])])):ve("",!0),i.beasts.length?(F(),U("div",gR,[yR,m("ul",null,[(F(!0),U(Se,null,kt(i.beasts,a=>(F(),U("li",{key:a.id},[a.entryVisible?ve("",!0):(F(),U("div",vR,[ue(m("input",{"onUpdate:modelValue":l=>a.entryPasswordInput=l,type:"password",placeholder:"Enter password to view beast"},null,8,wR),[[de,a.entryPasswordInput]]),m("button",{onClick:l=>r.unlockEntry(a)},"Unlock Beast",8,bR)])),a.entryVisible?(F(),U("div",ER,[m("h3",null,re(a.name),1),m("img",{src:a.image,alt:a.name},null,8,CR),m("p",null,re(a.description),1),a.details&&!a.detailsVisible?(F(),U("div",IR,[ue(m("input",{"onUpdate:modelValue":l=>a.detailsPasswordInput=l,type:"password",placeholder:"Enter password to view details"},null,8,TR),[[de,a.detailsPasswordInput]]),m("button",{onClick:l=>r.unlockDetails(a)},"Unlock Details",8,SR)])):ve("",!0),a.detailsVisible?(F(),U("div",RR,[m("p",null,"Details: "+re(a.details),1)])):ve("",!0),m("p",null,"Stats: "+re(a.stats),1),i.isAdmin?(F(),U("div",kR,[m("button",{onClick:l=>r.editBeast(a)},"Edit",8,AR),m("button",{onClick:l=>r.deleteBeast(a.id)},"Delete",8,PR)])):ve("",!0)])):ve("",!0)]))),128))])])):ve("",!0)])])}const Zp=bt(dR,[["render",NR],["__scopeId","data-v-f66316c2"]]),OR=[{name:"The Chosen",description:"Your birth was prophesied. You are the Chosen One, and with your abilities, you can save the world. If you fail, all will be destroyed. It all rests on you. Only you.",moves:[{name:"Destiny’s Plaything",description:"At the beginning of each mystery, roll +Weird to see what is revealed about your immediate future."},{name:"I’m Here For A Reason",description:"There’s something you are meant to do; work out the signs to find out what."},{name:"The Big Entrance",description:"When you make a showy entrance, roll +Charm."},{name:"Devastating",description:"When you inflict harm, you inflict +1 harm."},{name:"Dutiful",description:"You gain +1 ongoing while you follow a duty."},{name:"Invincible",description:"You always count as having 2-armour."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Protective gear worth 1-armour","Special weapon"],ratings:["Charm+2, Cool-1, Sharp+1, Tough+2, Weird-1","Charm-1, Cool+2, Sharp+1, Tough+2, Weird-1","Charm+1, Cool+2, Sharp+1, Tough+1, Weird-1","Charm-1, Cool+1, Sharp+2, Tough-1, Weird+2","Charm+1, Cool+2, Sharp-1, Tough-1, Weird+2"],special:"When you spend a point of Luck, the Keeper will bring your fate into play."},{name:"The Crooked",description:"“Yeah, I’ve been around the block. A bit of this, a bit of that. When I came across the secret underworld of monsters and magic… well… it wasn’t so different from the underworld I already knew. It was easy to find an angle, just like before.”",moves:[{name:"Hoodlum",description:"When you get into trouble, roll +Cool."},{name:"Burglar",description:"When you break into a secure location, roll +Cool."},{name:"Grifter",description:"When you try to dupe someone, roll +Charm."},{name:"Fixer",description:"When you need something, roll +Sharp."},{name:"Assassin",description:"When you attack from ambush, roll +Cool."},{name:"Charlatan",description:"When you try to lie to someone, roll +Charm."},{name:"Pickpocket",description:"When you try to steal something, roll +Cool."}],gear:[".22 revolver (1-harm close reload small)",".38 revolver (2-harm close reload loud)","9mm (2-harm close loud)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)","Big knife (1-harm hand)","Baseball bat (1-harm hand)","Submachinegun (2-harm close reload area)","Assault rifle (3-harm close/far area)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +1, Tough +2, Weird 0","Charm -1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird -1","Charm +2, Cool 0, Sharp +1, Tough -1, Weird +1"],special:"Whenever you spend a Luck point, someone from your past will re-appear in your life. Soon."},{name:"The Divine",description:"An agent of a higher power, sent to fight evil. You have a mission and heavenly powers to back you up.",moves:[{name:"Angel Wings",description:"You can go instantly to anywhere you’ve visited before, or to a person you know well. When you carry one or two people with you, roll +Weird."},{name:"Smite",description:"Your body and divine weapon always count as a weakness against the monsters you fight."},{name:"Soothe",description:"When you talk to someone for a few seconds in a quiet voice, you can calm them down, blocking any panic, anger, or other negative emotions."},{name:"What I Need, When I Need It",description:"You may store any useful item or piece of information somewhere close at hand."},{name:"Lay On Hands",description:"Your touch can heal injury and disease. When you lay your hands on someone hurt, roll +Cool."},{name:"Angel’s Call",description:"You can summon an angelic ally to assist you. Roll +Weird."}],gear:["Divine weapon (3-harm hand messy holy)","Holy armor (1-armour holy)"],ratings:["Charm +2, Cool +1, Sharp +0, Tough +2, Weird -1","Charm +1, Cool +2, Sharp +0, Tough +2, Weird -1","Charm +2, Cool +1, Sharp +1, Tough +0, Weird +1","Charm +0, Cool +1, Sharp +2, Tough +1, Weird -1","Charm +2, Cool +0, Sharp +1, Tough +2, Weird -1"],special:"When you spend a point of Luck, your higher power gives you a vision about the current mystery."},{name:"The Flake",description:"You see patterns that others don’t. You’re the one who connects the dots and sees the truth about the world.",moves:[{name:"Connect the Dots",description:"You see patterns that others don’t. You’re the one who connects the dots and sees the truth about the world."},{name:"Crazy Eyes",description:"When you use your sharp gaze to study something, roll +Sharp."},{name:"Net Friends",description:"When you contact your network of friends, roll +Charm."},{name:"Sneaky",description:"When you try to be sneaky, roll +Cool."},{name:"Suspicious Mind",description:"When you try to figure out if someone is lying, roll +Sharp."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Often Overlooked",description:"When you act all quiet and out of the way, roll +Cool."}],gear:["Hunting rifle (2-harm far loud)","Shotgun (3-harm close messy)","Big knife (1-harm hand)","Baseball bat (1-harm hand)"],ratings:["Charm +1, Cool +2, Sharp +1, Tough 0, Weird -1","Charm -1, Cool +2, Sharp +2, Tough 0, Weird 0","Charm +2, Cool +1, Sharp +2, Tough -1, Weird 0","Charm +1, Cool +1, Sharp +2, Tough 0, Weird +1"],special:"Whenever you spend a Luck point, you have a vision about the current mystery."},{name:"The Expert",description:"You have devoted your life to researching the supernatural and finding ways to deal with it. You have the knowledge and the tools to deal with these threats.",moves:[{name:"I’ve Read About This Sort of Thing",description:"You’ve read books, and you can use that knowledge."},{name:"Preparedness",description:"If you need something unusual, roll +Sharp."},{name:"Always the Victim",description:"When you’re attacked, roll +Cool."},{name:"Dark Past",description:"When you look into your past lives, roll +Weird."},{name:"Often Right",description:"When you’re right about something, gain +1 ongoing."},{name:"Soothe",description:"When you talk to someone for a few seconds, roll +Charm."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."}],gear:["Shotgun (3-harm close messy)","Big knife (1-harm hand)","Sword (3-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, something you have prepared comes in handy."},{name:"The Initiate",description:"You are part of an ancient secret order that fights against the darkness. You have access to their knowledge and resources.",moves:[{name:"Ancient Fighting Arts",description:"You have been trained to fight with ancient weapons. Roll +Tough."},{name:"Fortunes",description:"When you seek your order’s knowledge, roll +Weird."},{name:"Mentor",description:"You have a mentor who can help you. Roll +Charm."},{name:"Apprentice",description:"You are training someone. Roll +Sharp."},{name:"Sacred Oath",description:"You have sworn a sacred oath. Roll +Cool."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Big knife (1-harm hand)","Sword (2-harm hand)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your order provides you with valuable information or resources."},{name:"The Monstrous",description:"You are a creature of the night, but you fight for the good guys. You have supernatural abilities and a dark side.",moves:[{name:"Immortal",description:"You do not age, and you cannot die of old age. Roll +Weird."},{name:"Unholy Strength",description:"You have inhuman strength. Roll +Tough."},{name:"Preternatural Speed",description:"You have inhuman speed. Roll +Cool."},{name:"Dark Negotiator",description:"You can make deals with dark powers. Roll +Charm."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."},{name:"Natural Attack",description:"You have a natural attack. Roll +Tough."}],gear:["Claws (3-harm hand)","Fangs (2-harm intimate)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your dark side’s needs come to the fore."},{name:"The Mundane",description:"You are an ordinary person, caught up in the world of monsters and magic.",moves:[{name:"Always the Victim",description:"When you’re attacked, roll +Cool."},{name:"Don’t Worry, I’ll Check It Out",description:"When you go off alone to check out somewhere, roll +Cool."},{name:"Let’s Get Out of Here",description:"When you lead people out of danger, roll +Charm."},{name:"What Could Go Wrong?",description:"When you charge into immediate danger without hedging your bets, roll +Cool."},{name:"Trust Me",description:"When you tell a normal person the truth in order to protect them, roll +Charm."},{name:"Panic Button",description:"When you need to escape, roll +Cool."},{name:"The Power of Heart",description:"When fighting a monster, if you help someone, roll +Charm."}],gear:["Kitchen knife (1-harm hand)","Baseball bat (1-harm hand)","Fire axe (3-harm hand heavy)","Chainsaw (3-harm hand messy heavy)"],ratings:["Charm +2, Cool 0, Sharp +1, Tough 0, Weird -1","Charm +1, Cool +2, Sharp 0, Tough 0, Weird -1","Charm +2, Cool +1, Sharp 0, Tough -1, Weird 0","Charm +2, Cool 0, Sharp -1, Tough +1, Weird 0"],special:"Whenever you spend a Luck point, something goes terribly wrong."},{name:"The Professional",description:"You work for an organization that fights the supernatural. You have the training and resources to deal with these threats.",moves:[{name:"Battlefield Awareness",description:"You always know what’s happening around you. Roll +Sharp."},{name:"Tactical Genius",description:"When you plan a combat situation, roll +Sharp."},{name:"Heavy Weapons",description:"You are trained in the use of heavy weapons. Roll +Tough."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."},{name:"Cool Under Pressure",description:"You can take a moment to center yourself. Roll +Cool."}],gear:["Assault rifle (3-harm close/far area)","Submachinegun (2-harm close area)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)"],ratings:["Charm +1, Cool +2, Sharp +1, Tough 0, Weird -1","Charm -1, Cool +2, Sharp +2, Tough 0, Weird 0","Charm +2, Cool +1, Sharp +2, Tough -1, Weird 0","Charm +1, Cool +1, Sharp +2, Tough 0, Weird +1"],special:"Whenever you spend a Luck point, your organization provides you with valuable resources or support."},{name:"The Spooky",description:"You have psychic or supernatural abilities, but they come with a cost. Your powers are both a blessing and a curse.",moves:[{name:"Premonitions",description:"You get premonitions of danger. Roll +Weird."},{name:"The Big Whammy",description:"You can use your powers as a weapon. Roll +Weird."},{name:"Hex",description:"You can cast hexes. Roll +Weird."},{name:"The Sight",description:"You can see the invisible, especially spirits and magical influences. Roll +Weird."},{name:"Jinx",description:"You can encourage coincidences to occur, the way you want. Roll +Weird."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Protective amulet (1-armour)","Ancient weapon (2-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your powers backfire in a dangerous way."},{name:"The Wronged",description:"You have suffered at the hands of the supernatural, and now you seek revenge. You are driven by anger and a need for justice.",moves:[{name:"I Know My Prey",description:"You have learned about your prey through personal experience. Roll +Sharp."},{name:"Berserk",description:"When you are enraged, you can fight without any concern for your own safety. Roll +Tough."},{name:"NEVER AGAIN",description:"In combat, you may choose to protect someone without rolling. Roll +Tough."},{name:"What Does Not Kill Me…",description:"If you survive an injury, you gain +1 forward. Roll +Cool."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Hunting rifle (2-harm far loud)","Shotgun (3-harm close messy)","Big knife (1-harm hand)","Baseball bat (1-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, you are driven to a reckless course of action."}],xR={name:"Profile",data(){return{profile:{name:"",age:"",background:"",playbook:""},playbooks:OR,selectedPlaybook:null,db:null,userId:localStorage.getItem("motw-uid")}},created(){this.app=On(as.firebaseConfig),this.db=An(this.app),this.fetchProfile()},methods:{fetchProfile(){const t=tt(this.db,"profiles/"+this.userId);ko(t).then(e=>{e.exists()?(this.profile=e.val(),this.selectPlaybook()):console.log("No profile data available")}).catch(e=>{console.error("Error fetching profile:",e)})},saveProfile(){const t=tt(this.db,"profiles/"+this.userId);Ro(t,this.profile).catch(e=>{console.error("Error saving profile:",e)})},selectPlaybook(){this.selectedPlaybook=this.playbooks.find(t=>t.name===this.profile.playbook)}}},Ut=t=>(Lt("data-v-0ce79527"),t=t(),Mt(),t),DR={class:"profile"},LR=Ut(()=>m("h1",null,"Hunter Profile",-1)),MR={class:"form-group"},FR=Ut(()=>m("label",{for:"name"},"Name:",-1)),UR={class:"form-group"},WR=Ut(()=>m("label",{for:"age"},"Age:",-1)),BR={class:"form-group"},VR=Ut(()=>m("label",{for:"background"},"Background:",-1)),$R={class:"form-group"},HR=Ut(()=>m("label",{for:"playbook"},"Playbook:",-1)),jR=["value"],qR={key:0},GR={class:"playbook-details"},KR=Ut(()=>m("h3",null,"Moves:",-1)),zR=Ut(()=>m("h3",null,"Gear:",-1)),YR=Ut(()=>m("h3",null,"Ratings:",-1)),QR=Ut(()=>m("h3",null,"Special:",-1)),JR=Ut(()=>m("button",{type:"submit"},"Save Profile",-1));function XR(t,e,n,s,i,r){return F(),U("div",DR,[LR,m("form",{onSubmit:e[5]||(e[5]=mn((...o)=>r.saveProfile&&r.saveProfile(...o),["prevent"]))},[m("div",MR,[FR,ue(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.profile.name=o),id:"name",required:""},null,512),[[de,i.profile.name]])]),m("div",UR,[WR,ue(m("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=o=>i.profile.age=o),id:"age",required:""},null,512),[[de,i.profile.age]])]),m("div",BR,[VR,ue(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.profile.background=o),id:"background",required:""},null,512),[[de,i.profile.background]])]),m("div",$R,[HR,ue(m("select",{"onUpdate:modelValue":e[3]||(e[3]=o=>i.profile.playbook=o),id:"playbook",onChange:e[4]||(e[4]=(...o)=>r.selectPlaybook&&r.selectPlaybook(...o))},[(F(!0),U(Se,null,kt(i.playbooks,o=>(F(),U("option",{key:o.name,value:o.name},re(o.name),9,jR))),128))],544),[[Mg,i.profile.playbook]])]),i.selectedPlaybook?(F(),U("div",qR,[m("div",GR,[m("h2",null,re(i.selectedPlaybook.name),1),m("p",null,re(i.selectedPlaybook.description),1),KR,m("ul",null,[(F(!0),U(Se,null,kt(i.selectedPlaybook.moves,o=>(F(),U("li",{key:o.name},[m("strong",null,re(o.name),1),Ge(": "+re(o.description),1)]))),128))]),zR,m("ul",null,[(F(!0),U(Se,null,kt(i.selectedPlaybook.gear,o=>(F(),U("li",{key:o},re(o),1))),128))]),YR,m("ul",null,[(F(!0),U(Se,null,kt(i.selectedPlaybook.ratings,o=>(F(),U("li",{key:o},re(o),1))),128))]),QR,m("p",null,re(i.selectedPlaybook.special),1)])])):ve("",!0),JR],32)])}const e_=bt(xR,[["render",XR],["__scopeId","data-v-0ce79527"]]),ZR={name:"Dashboard",components:{CaseFiles:Jp,Bestiary:Zp,Profile:e_}},t_=t=>(Lt("data-v-f1fca2ec"),t=t(),Mt(),t),e0={class:"dashboard"},t0=t_(()=>m("div",{class:"header"},[m("h1",{class:"title"},"Dashboard")],-1)),n0={class:"menu"},s0={class:"dashboard-sections"},i0={class:"dashboard-section"},r0={class:"dashboard-section"},o0={class:"dashboard-section"},a0=t_(()=>m("div",{class:"footer"},[m("p",null,"© 2024 Your Company")],-1));function l0(t,e,n,s,i,r){const o=pt("router-link"),a=pt("case-files"),l=pt("bestiary"),c=pt("profile");return F(),U("div",e0,[t0,m("ul",n0,[m("li",null,[ee(o,{to:"/case-files"},{default:st(()=>[Ge("Case Files")]),_:1})]),m("li",null,[ee(o,{to:"/bestiary"},{default:st(()=>[Ge("Bestiary")]),_:1})]),m("li",null,[ee(o,{to:"/profile"},{default:st(()=>[Ge("Profile")]),_:1})])]),m("main",null,[m("div",s0,[m("div",i0,[ee(a)]),m("div",r0,[ee(l)]),m("div",o0,[ee(c)])])]),a0])}const c0=bt(ZR,[["render",l0],["__scopeId","data-v-f1fca2ec"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="firebasestorage.googleapis.com",s_="storageBucket",u0=2*60*1e3,h0=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Zt{constructor(e,n,s=0){super(na(e),`Firebase Storage: ${n} (${na(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return na(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ee;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ee||(Ee={}));function na(t){return"storage/"+t}function ac(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(Ee.UNKNOWN,t)}function d0(t){return new Ce(Ee.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function f0(t){return new Ce(Ee.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function p0(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(Ee.UNAUTHENTICATED,t)}function _0(){return new Ce(Ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function m0(t){return new Ce(Ee.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function g0(){return new Ce(Ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function y0(){return new Ce(Ee.CANCELED,"User canceled the upload/download.")}function v0(t){return new Ce(Ee.INVALID_URL,"Invalid URL '"+t+"'.")}function w0(t){return new Ce(Ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function b0(){return new Ce(Ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+s_+"' property when initializing the app?")}function E0(){return new Ce(Ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function C0(){return new Ce(Ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function I0(t){return new Ce(Ee.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $a(t){return new Ce(Ee.INVALID_ARGUMENT,t)}function i_(){return new Ce(Ee.APP_DELETED,"The Firebase app was deleted.")}function T0(t){return new Ce(Ee.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fi(t,e){return new Ce(Ee.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Qs(t){throw new Ce(Ee.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=it.makeFromUrl(e,n)}catch{return new it(e,"")}if(s.path==="")return s;throw w0(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(V){V.path_=decodeURIComponent(V.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},C=n===n_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",N=new RegExp(`^https?://${C}/${i}/${k}`,"i"),L=[{regex:a,indices:l,postModify:r},{regex:_,indices:y,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let V=0;V<L.length;V++){const oe=L[V],$=oe.regex.exec(e);if($){const Te=$[oe.indices.bucket];let Pe=$[oe.indices.path];Pe||(Pe=""),s=new it(Te,Pe),oe.postModify(s);break}}if(s==null)throw v0(e);return s}}class S0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...k){c||(c=!0,e.apply(null,k))}function h(k){i=setTimeout(()=>{i=null,t(_,l())},k)}function d(){r&&clearTimeout(r)}function _(k,...N){if(c){d();return}if(k){d(),u.call(null,k,...N);return}if(l()||o){d(),u.call(null,k,...N);return}s<64&&(s*=2);let L;a===1?(a=2,L=0):L=(s+Math.random())*1e3,h(L)}let y=!1;function C(k){y||(y=!0,d(),!c&&(i!==null?(k||(a=2),clearTimeout(i),h(0)):k||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,C(!0)},n),C}function k0(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t){return t!==void 0}function P0(t){return typeof t=="object"&&!Array.isArray(t)}function lc(t){return typeof t=="string"||t instanceof String}function bh(t){return cc()&&t instanceof Blob}function cc(){return typeof Blob<"u"}function Eh(t,e,n,s){if(s<e)throw $a(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw $a(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function r_(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Kn||(Kn={}));/**
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
 */function N0(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,y)=>{this.resolve_=_,this.reject_=y,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new rr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Kn.NO_ERROR,l=r.getStatus();if(!a||N0(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Kn.ABORT;s(!1,new rr(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new rr(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());A0(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=ac();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?i_():y0();o(l)}else{const l=g0();o(l)}};this.canceled_?n(!1,new rr(!1,null,!0)):this.backoffId_=R0(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&k0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function x0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function D0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function L0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function M0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function F0(t,e,n,s,i,r,o=!0){const a=r_(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return L0(c,e),x0(c,n),D0(c,r),M0(c,s),new O0(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function W0(...t){const e=U0();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(cc())return new Blob(t);throw new Ce(Ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function B0(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function V0(t){if(typeof atob>"u")throw I0("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class sa{constructor(e,n){this.data=e,this.contentType=n||null}}function $0(t,e){switch(t){case Pt.RAW:return new sa(o_(e));case Pt.BASE64:case Pt.BASE64URL:return new sa(a_(t,e));case Pt.DATA_URL:return new sa(j0(e),q0(e))}throw ac()}function o_(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function H0(t){let e;try{e=decodeURIComponent(t)}catch{throw fi(Pt.DATA_URL,"Malformed data URL.")}return o_(e)}function a_(t,e){switch(t){case Pt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw fi(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Pt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw fi(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=V0(e)}catch(i){throw i.message.includes("polyfill")?i:fi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class l_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw fi(Pt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=G0(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function j0(t){const e=new l_(t);return e.base64?a_(Pt.BASE64,e.rest):H0(e.rest)}function q0(t){return new l_(t).contentType}function G0(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n){let s=0,i="";bh(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(bh(this.data_)){const s=this.data_,i=B0(s,e,n);return i===null?null:new _n(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new _n(s,!0)}}static getBlob(...e){if(cc()){const n=e.map(s=>s instanceof _n?s.data_:s);return new _n(W0.apply(null,n))}else{const n=e.map(o=>lc(o)?$0(Pt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new _n(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){let e;try{e=JSON.parse(t)}catch{return null}return P0(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function z0(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function u_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t,e){return e}class je{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||Y0}}let or=null;function Q0(t){return!lc(t)||t.length<2?t:u_(t)}function h_(){if(or)return or;const t=[];t.push(new je("bucket")),t.push(new je("generation")),t.push(new je("metageneration")),t.push(new je("name","fullPath",!0));function e(r,o){return Q0(o)}const n=new je("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new je("size");return i.xform=s,t.push(i),t.push(new je("timeCreated")),t.push(new je("updated")),t.push(new je("md5Hash",null,!0)),t.push(new je("cacheControl",null,!0)),t.push(new je("contentDisposition",null,!0)),t.push(new je("contentEncoding",null,!0)),t.push(new je("contentLanguage",null,!0)),t.push(new je("contentType",null,!0)),t.push(new je("metadata","customMetadata",!0)),or=t,or}function J0(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new it(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function X0(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return J0(s,t),s}function d_(t,e,n){const s=c_(e);return s===null?null:X0(t,s,n)}function Z0(t,e,n,s){const i=c_(e);if(i===null||!lc(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),_=uc(d,n,s),y=r_({alt:"media",token:c});return _+y})[0]}function ek(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class f_{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t){if(!t)throw ac()}function tk(t,e){function n(s,i){const r=d_(t,i,e);return p_(r!==null),r}return n}function nk(t,e){function n(s,i){const r=d_(t,i,e);return p_(r!==null),Z0(r,i,t.host,t._protocol)}return n}function __(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=_0():i=p0():n.getStatus()===402?i=f0(t.bucket):n.getStatus()===403?i=m0(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function sk(t){const e=__(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=d0(t.path)),r.serverResponse=i.serverResponse,r}return n}function ik(t,e,n){const s=e.fullServerUrl(),i=uc(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new f_(i,r,nk(t,n),o);return a.errorHandler=sk(e),a}function rk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ok(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=rk(null,e)),s}function ak(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let L="";for(let V=0;V<2;V++)L=L+Math.random().toString().slice(2);return L}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=ok(e,s,i),u=ek(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",_=_n.getBlob(h,s,d);if(_===null)throw E0();const y={name:c.fullPath},C=uc(r,t.host,t._protocol),k="POST",N=t.maxUploadRetryTime,O=new f_(C,k,tk(t,n),N);return O.urlParams=y,O.headers=o,O.body=_.uploadData(),O.errorHandler=__(e),O}class lk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Kn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Kn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Kn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Qs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ck extends lk{initXhr(){this.xhr_.responseType="text"}}function m_(){return new ck}/**
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
 */class ns{constructor(e,n){this._service=e,n instanceof it?this._location=n:this._location=it.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ns(e,n)}get root(){const e=new it(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return u_(this._location.path)}get storage(){return this._service}get parent(){const e=K0(this._location.path);if(e===null)return null;const n=new it(this._location.bucket,e);return new ns(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw T0(e)}}function uk(t,e,n){t._throwIfRoot("uploadBytes");const s=ak(t.storage,t._location,h_(),new _n(e,!0),n);return t.storage.makeRequestWithTokens(s,m_).then(i=>({metadata:i,ref:t}))}function hk(t){t._throwIfRoot("getDownloadURL");const e=ik(t.storage,t._location,h_());return t.storage.makeRequestWithTokens(e,m_).then(n=>{if(n===null)throw C0();return n})}function dk(t,e){const n=z0(t._location.path,e),s=new it(t._location.bucket,n);return new ns(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){return/^[A-Za-z]+:\/\//.test(t)}function pk(t,e){return new ns(t,e)}function g_(t,e){if(t instanceof hc){const n=t;if(n._bucket==null)throw b0();const s=new ns(n,n._bucket);return e!=null?g_(s,e):s}else return e!==void 0?dk(t,e):t}function _k(t,e){if(e&&fk(e)){if(t instanceof hc)return pk(t,e);throw $a("To use ref(service, url), the first argument must be a Storage instance.")}else return g_(t,e)}function Ch(t,e){const n=e==null?void 0:e[s_];return n==null?null:it.makeFromBucketSpec(n,t)}function mk(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Dd(i,t.app.options.projectId))}class hc{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=n_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u0,this._maxUploadRetryTime=h0,this._requests=new Set,i!=null?this._bucket=it.makeFromBucketSpec(i,this._host):this._bucket=Ch(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=it.makeFromBucketSpec(this._url,e):this._bucket=Ch(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Eh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Eh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ns(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new S0(i_());{const o=F0(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Ih="@firebase/storage",Th="0.12.5";/**
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
 */const y_="storage";function gk(t,e,n){return t=Ie(t),uk(t,e,n)}function yk(t){return t=Ie(t),hk(t)}function vk(t,e){return t=Ie(t),_k(t,e)}function wk(t=fl(),e){t=Ie(t);const s=uo(t,y_).getImmediate({identifier:e}),i=Nd("storage");return i&&bk(s,...i),s}function bk(t,e,n,s={}){mk(t,e,n,s)}function Ek(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new hc(n,s,i,e,ss)}function Ck(){Qn(new Tn(y_,Ek,"PUBLIC").setMultipleInstances(!0)),Nt(Ih,Th,""),Nt(Ih,Th,"esm2017")}Ck();const Ik={name:"CaseDetail",props:["id"],data(){return{caseFile:null,newNote:"",selectedImage:null,newClue:{summary:"",details:"",password:""},newLocation:{name:"",description:""},isAdmin:We.isAdmin}},created(){this.app=On(as.firebaseConfig),this.db=An(this.app),this.storage=wk(this.app),this.fetchCaseFile()},methods:{fetchCaseFile(){const t=tt(this.db,"caseFiles/"+this.id);ko(t).then(e=>{e.exists()?(this.caseFile=e.val(),this.caseFile.notes||(this.caseFile.notes=[]),this.caseFile.images||(this.caseFile.images=[]),this.caseFile.clues||(this.caseFile.clues=[]),this.caseFile.locations||(this.caseFile.locations=[])):console.log("No case data available")}).catch(e=>{console.error("Error fetching case:",e)})},addNote(){const t={content:this.newNote,timestamp:Date.now()};this.caseFile.notes.push(t),this.updateCaseFile(),this.newNote=""},onImageChange(t){this.selectedImage=t.target.files[0]},uploadImage(){if(!this.selectedImage)return;const t=vk(this.storage,`images/${this.id}/${this.selectedImage.name}`);gk(t,this.selectedImage).then(e=>{yk(e.ref).then(n=>{const s={name:this.selectedImage.name,url:n};this.caseFile.images.push(s),this.updateCaseFile(),this.selectedImage=null}).catch(n=>{console.error("Error getting image URL:",n)})}).catch(e=>{console.error("Error uploading image:",e)})},addClue(){const t={id:Date.now().toString(),summary:this.newClue.summary,details:this.newClue.details,password:this.newClue.password,detailsVisible:!1,enteredPassword:""};this.caseFile.clues.push(t),this.updateCaseFile(),this.newClue={summary:"",details:"",password:""}},unlockClue(t){t.enteredPassword===t.password?t.detailsVisible=!0:alert("Incorrect password")},addLocation(){const t={name:this.newLocation.name,description:this.newLocation.description};this.caseFile.locations.push(t),this.updateCaseFile(),this.newLocation={name:"",description:""}},updateCaseFile(){const t=tt(this.db,"caseFiles/"+this.id);rc(t,this.caseFile).catch(e=>{console.error("Error updating case:",e)})}}},He=t=>(Lt("data-v-9513069e"),t=t(),Mt(),t),Tk={key:0,class:"case-detail"},Sk={class:"images"},Rk=He(()=>m("h2",null,"Images",-1)),kk=["src","alt"],Ak=He(()=>m("label",{for:"image"},"Upload Image:",-1)),Pk=He(()=>m("button",{type:"submit"},"Upload Image",-1)),Nk={class:"notes"},Ok=He(()=>m("h2",null,"Notes",-1)),xk=He(()=>m("label",{for:"note"},"Add Note:",-1)),Dk=He(()=>m("button",{type:"submit"},"Add Note",-1)),Lk={class:"clues"},Mk=He(()=>m("h2",null,"Clues",-1)),Fk=["onUpdate:modelValue"],Uk=["onClick"],Wk={key:0},Bk={key:0},Vk=He(()=>m("h3",null,"Add a Clue",-1)),$k=He(()=>m("label",{for:"clue-summary"},"Clue Summary:",-1)),Hk=He(()=>m("label",{for:"clue-details"},"Clue Details:",-1)),jk=He(()=>m("label",{for:"clue-password"},"Clue Password:",-1)),qk=He(()=>m("button",{type:"submit"},"Add Clue",-1)),Gk={class:"locations"},Kk=He(()=>m("h2",null,"Locations",-1)),zk=He(()=>m("label",{for:"location-name"},"Location Name:",-1)),Yk=He(()=>m("label",{for:"location-description"},"Location Description:",-1)),Qk=He(()=>m("button",{type:"submit"},"Add Location",-1));function Jk(t,e,n,s,i,r){const o=pt("router-link");return i.caseFile?(F(),U("div",Tk,[m("h1",null,re(i.caseFile.title),1),m("p",null,re(i.caseFile.summary),1),m("p",null,re(i.caseFile.details),1),m("div",Sk,[Rk,m("ul",null,[(F(!0),U(Se,null,kt(i.caseFile.images,a=>(F(),U("li",{key:a.url},[m("img",{src:a.url,alt:a.name},null,8,kk)]))),128))]),m("form",{onSubmit:e[1]||(e[1]=mn((...a)=>r.uploadImage&&r.uploadImage(...a),["prevent"]))},[Ak,m("input",{type:"file",onChange:e[0]||(e[0]=(...a)=>r.onImageChange&&r.onImageChange(...a)),required:""},null,32),Pk],32)]),m("div",Nk,[Ok,m("ul",null,[(F(!0),U(Se,null,kt(i.caseFile.notes,a=>(F(),U("li",{key:a.timestamp},re(a.content)+" ("+re(new Date(a.timestamp).toLocaleString())+") ",1))),128))]),m("form",{onSubmit:e[3]||(e[3]=mn((...a)=>r.addNote&&r.addNote(...a),["prevent"]))},[xk,ue(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=a=>i.newNote=a),id:"note",required:""},null,512),[[de,i.newNote]]),Dk],32)]),m("div",Lk,[Mk,m("ul",null,[(F(!0),U(Se,null,kt(i.caseFile.clues,a=>(F(),U("li",{class:"clue-item",key:a.id},[m("p",null,re(a.summary),1),ue(m("input",{type:"password","onUpdate:modelValue":l=>a.enteredPassword=l,placeholder:"Enter password to view clue"},null,8,Fk),[[de,a.enteredPassword]]),m("button",{onClick:l=>r.unlockClue(a)},"Unlock Clue",8,Uk),a.detailsVisible?(F(),U("p",Wk,re(a.details),1)):ve("",!0)]))),128))]),i.isAdmin?(F(),U("div",Bk,[Vk,m("form",{onSubmit:e[7]||(e[7]=mn((...a)=>r.addClue&&r.addClue(...a),["prevent"]))},[$k,ue(m("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=a=>i.newClue.summary=a),id:"clue-summary",required:""},null,512),[[de,i.newClue.summary]]),Hk,ue(m("textarea",{"onUpdate:modelValue":e[5]||(e[5]=a=>i.newClue.details=a),id:"clue-details",required:""},null,512),[[de,i.newClue.details]]),jk,ue(m("input",{type:"password","onUpdate:modelValue":e[6]||(e[6]=a=>i.newClue.password=a),id:"clue-password",required:""},null,512),[[de,i.newClue.password]]),qk],32)])):ve("",!0)]),m("div",Gk,[Kk,m("ul",null,[(F(!0),U(Se,null,kt(i.caseFile.locations,a=>(F(),U("li",{key:a.name},[m("h3",null,re(a.name),1),m("p",null,re(a.description),1)]))),128))]),m("form",{onSubmit:e[10]||(e[10]=mn((...a)=>r.addLocation&&r.addLocation(...a),["prevent"]))},[zk,ue(m("input",{type:"text","onUpdate:modelValue":e[8]||(e[8]=a=>i.newLocation.name=a),id:"location-name",required:""},null,512),[[de,i.newLocation.name]]),Yk,ue(m("textarea",{"onUpdate:modelValue":e[9]||(e[9]=a=>i.newLocation.description=a),id:"location-description",required:""},null,512),[[de,i.newLocation.description]]),Qk],32)]),ee(o,{to:"/case-files"},{default:st(()=>[Ge("Back to Case Files")]),_:1})])):ve("",!0)}const Xk=bt(Ik,[["render",Jk],["__scopeId","data-v-9513069e"]]),Zk={name:"Acquisitions"},eA=t=>(Lt("data-v-25399de4"),t=t(),Mt(),t),tA={class:"acquisitions"},nA=eA(()=>m("h1",null,"Acquisitions",-1)),sA=[nA];function iA(t,e,n,s,i,r){return F(),U("div",tA,sA)}const rA=bt(Zk,[["render",iA],["__scopeId","data-v-25399de4"]]),oA=[{path:"/",name:"Home",component:YE},{path:"/login",name:"Login",component:bS},{path:"/dashboard",name:"Dashboard",component:c0},{path:"/case-files",name:"CaseFiles",component:Jp},{path:"/case-files/:id",name:"CaseDetail",component:Xk,props:!0},{path:"/acquisitions",name:"Acquisitions",component:rA},{path:"/profile",name:"Profile",component:e_},{path:"/bestiary",name:"Bestiary",component:Zp}],aA=$E({history:gE(),routes:oA});Vg(Bb).use(aA).mount("#app");
