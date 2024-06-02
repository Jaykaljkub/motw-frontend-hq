(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pa(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const _e={},os=[],nt=()=>{},Op=()=>!1,Ur=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ka=t=>t.startsWith("onUpdate:"),Ne=Object.assign,Aa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xp=Object.prototype.hasOwnProperty,X=(t,e)=>xp.call(t,e),$=Array.isArray,as=t=>Ii(t)==="[object Map]",Wr=t=>Ii(t)==="[object Set]",Yl=t=>Ii(t)==="[object Date]",G=t=>typeof t=="function",Ie=t=>typeof t=="string",qt=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",sh=t=>(pe(t)||G(t))&&G(t.then)&&G(t.catch),ih=Object.prototype.toString,Ii=t=>ih.call(t),Dp=t=>Ii(t).slice(8,-1),rh=t=>Ii(t)==="[object Object]",Na=t=>Ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qs=Pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Mp=/-(\w)/g,Rt=Vr(t=>t.replace(Mp,(e,n)=>n?n.toUpperCase():"")),Lp=/\B([A-Z])/g,Ts=Vr(t=>t.replace(Lp,"-$1").toLowerCase()),Br=Vr(t=>t.charAt(0).toUpperCase()+t.slice(1)),yo=Vr(t=>t?`on${Br(t)}`:""),vn=(t,e)=>!Object.is(t,e),Qi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},oh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},lr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ql;const ah=()=>Ql||(Ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oa(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ie(s)?Vp(s):Oa(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ie(t)||pe(t))return t}const Fp=/;(?![^(]*\))/g,Up=/:([^]+)/,Wp=/\/\*[^]*?\*\//g;function Vp(t){const e={};return t.replace(Wp,"").split(Fp).forEach(n=>{if(n){const s=n.split(Up);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function xa(t){let e="";if(Ie(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=xa(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$p=Pa(Bp);function lh(t){return!!t||t===""}function Hp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=$r(t[s],e[s]);return n}function $r(t,e){if(t===e)return!0;let n=Yl(t),s=Yl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=qt(t),s=qt(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?Hp(t,e):!1;if(n=pe(t),s=pe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!$r(t[o],e[o]))return!1}}return String(t)===String(e)}function jp(t,e){return t.findIndex(n=>$r(n,e))}const re=t=>Ie(t)?t:t==null?"":$(t)||pe(t)&&(t.toString===ih||!G(t.toString))?JSON.stringify(t,ch,2):String(t),ch=(t,e)=>e&&e.__v_isRef?ch(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[vo(s,r)+" =>"]=i,n),{})}:Wr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>vo(n))}:qt(e)?vo(e):pe(e)&&!$(e)&&!rh(e)?String(e):e,vo=(t,e="")=>{var n;return qt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let at;class qp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=at;try{return at=this,e()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Gp(t,e=at){e&&e.active&&e.effects.push(t)}function Kp(){return at}let Un;class Da{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Gp(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,bn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(zp(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),In()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=dn,n=Un;try{return dn=!0,Un=this,this._runnings++,Jl(this),this.fn()}finally{Xl(this),this._runnings--,Un=n,dn=e}}stop(){this.active&&(Jl(this),Xl(this),this.onStop&&this.onStop(),this.active=!1)}}function zp(t){return t.value}function Jl(t){t._trackId++,t._depsLength=0}function Xl(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)uh(t.deps[e],t);t.deps.length=t._depsLength}}function uh(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let dn=!0,Ho=0;const hh=[];function bn(){hh.push(dn),dn=!1}function In(){const t=hh.pop();dn=t===void 0?!0:t}function Ma(){Ho++}function La(){for(Ho--;!Ho&&jo.length;)jo.shift()()}function dh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&uh(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const jo=[];function fh(t,e,n){Ma();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&jo.push(s.scheduler)))}La()}const ph=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},qo=new WeakMap,Wn=Symbol(""),Go=Symbol("");function Qe(t,e,n){if(dn&&Un){let s=qo.get(t);s||qo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ph(()=>s.delete(n))),dh(Un,i)}}function Bt(t,e,n,s,i,r){const o=qo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!qt(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Na(n)&&a.push(o.get("length")):(a.push(o.get(Wn)),as(t)&&a.push(o.get(Go)));break;case"delete":$(t)||(a.push(o.get(Wn)),as(t)&&a.push(o.get(Go)));break;case"set":as(t)&&a.push(o.get(Wn));break}Ma();for(const l of a)l&&fh(l,4);La()}const Yp=Pa("__proto__,__v_isRef,__isVue"),_h=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qt)),Zl=Qp();function Qp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let r=0,o=this.length;r<o;r++)Qe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ne)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){bn(),Ma();const s=ne(this)[e].apply(this,n);return La(),In(),s}}),t}function Jp(t){qt(t)||(t=String(t));const e=ne(this);return Qe(e,"has",t),e.hasOwnProperty(t)}class mh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?u_:wh:r?vh:yh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=$(e);if(!i){if(o&&X(Zl,n))return Reflect.get(Zl,n,s);if(n==="hasOwnProperty")return Jp}const a=Reflect.get(e,n,s);return(qt(n)?_h.has(n):Yp(n))||(i||Qe(e,"get",n),r)?a:Je(a)?o&&Na(n)?a:a.value:pe(a)?i?Ch(a):Si(a):a}}class gh extends mh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=ii(r);if(!cr(s)&&!ii(s)&&(r=ne(r),s=ne(s)),!$(e)&&Je(r)&&!Je(s))return l?!1:(r.value=s,!0)}const o=$(e)&&Na(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,s,i);return e===ne(i)&&(o?vn(s,r)&&Bt(e,"set",n,s):Bt(e,"add",n,s)),a}deleteProperty(e,n){const s=X(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Bt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!qt(n)||!_h.has(n))&&Qe(e,"has",n),s}ownKeys(e){return Qe(e,"iterate",$(e)?"length":Wn),Reflect.ownKeys(e)}}class Xp extends mh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Zp=new gh,e_=new Xp,t_=new gh(!0);const Fa=t=>t,Hr=t=>Reflect.getPrototypeOf(t);function Bi(t,e,n=!1,s=!1){t=t.__v_raw;const i=ne(t),r=ne(e);n||(vn(e,r)&&Qe(i,"get",e),Qe(i,"get",r));const{has:o}=Hr(i),a=s?Fa:n?Va:ri;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function $i(t,e=!1){const n=this.__v_raw,s=ne(n),i=ne(t);return e||(vn(t,i)&&Qe(s,"has",t),Qe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Hi(t,e=!1){return t=t.__v_raw,!e&&Qe(ne(t),"iterate",Wn),Reflect.get(t,"size",t)}function ec(t){t=ne(t);const e=ne(this);return Hr(e).has.call(e,t)||(e.add(t),Bt(e,"add",t,t)),this}function tc(t,e){e=ne(e);const n=ne(this),{has:s,get:i}=Hr(n);let r=s.call(n,t);r||(t=ne(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?vn(e,o)&&Bt(n,"set",t,e):Bt(n,"add",t,e),this}function nc(t){const e=ne(this),{has:n,get:s}=Hr(e);let i=n.call(e,t);i||(t=ne(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Bt(e,"delete",t,void 0),r}function sc(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&Bt(t,"clear",void 0,void 0),n}function ji(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ne(o),l=e?Fa:t?Va:ri;return!t&&Qe(a,"iterate",Wn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function qi(t,e,n){return function(...s){const i=this.__v_raw,r=ne(i),o=as(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Fa:e?Va:ri;return!e&&Qe(r,"iterate",l?Go:Wn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function n_(){const t={get(r){return Bi(this,r)},get size(){return Hi(this)},has:$i,add:ec,set:tc,delete:nc,clear:sc,forEach:ji(!1,!1)},e={get(r){return Bi(this,r,!1,!0)},get size(){return Hi(this)},has:$i,add:ec,set:tc,delete:nc,clear:sc,forEach:ji(!1,!0)},n={get(r){return Bi(this,r,!0)},get size(){return Hi(this,!0)},has(r){return $i.call(this,r,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:ji(!0,!1)},s={get(r){return Bi(this,r,!0,!0)},get size(){return Hi(this,!0)},has(r){return $i.call(this,r,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:ji(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=qi(r,!1,!1),n[r]=qi(r,!0,!1),e[r]=qi(r,!1,!0),s[r]=qi(r,!0,!0)}),[t,n,e,s]}const[s_,i_,r_,o_]=n_();function Ua(t,e){const n=e?t?o_:r_:t?i_:s_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const a_={get:Ua(!1,!1)},l_={get:Ua(!1,!0)},c_={get:Ua(!0,!1)};const yh=new WeakMap,vh=new WeakMap,wh=new WeakMap,u_=new WeakMap;function h_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function d_(t){return t.__v_skip||!Object.isExtensible(t)?0:h_(Dp(t))}function Si(t){return ii(t)?t:Wa(t,!1,Zp,a_,yh)}function Eh(t){return Wa(t,!1,t_,l_,vh)}function Ch(t){return Wa(t,!0,e_,c_,wh)}function Wa(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=d_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Gs(t){return ii(t)?Gs(t.__v_raw):!!(t&&t.__v_isReactive)}function ii(t){return!!(t&&t.__v_isReadonly)}function cr(t){return!!(t&&t.__v_isShallow)}function bh(t){return t?!!t.__v_raw:!1}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function f_(t){return Object.isExtensible(t)&&oh(t,"__v_skip",!0),t}const ri=t=>pe(t)?Si(t):t,Va=t=>pe(t)?Ch(t):t;class Ih{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Da(()=>e(this._value),()=>Ji(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ne(this);return(!e._cacheable||e.effect.dirty)&&vn(e._value,e._value=e.effect.run())&&Ji(e,4),Sh(e),e.effect._dirtyLevel>=2&&Ji(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function p_(t,e,n=!1){let s,i;const r=G(t);return r?(s=t,i=nt):(s=t.get,i=t.set),new Ih(s,i,r||!i,n)}function Sh(t){var e;dn&&Un&&(t=ne(t),dh(Un,(e=t.dep)!=null?e:t.dep=ph(()=>t.dep=void 0,t instanceof Ih?t:void 0)))}function Ji(t,e=4,n){t=ne(t);const s=t.dep;s&&fh(s,e)}function Je(t){return!!(t&&t.__v_isRef===!0)}function __(t){return Th(t,!1)}function m_(t){return Th(t,!0)}function Th(t,e){return Je(t)?t:new g_(t,e)}class g_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:ri(e)}get value(){return Sh(this),this._value}set value(e){const n=this.__v_isShallow||cr(e)||ii(e);e=n?e:ne(e),vn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ri(e),Ji(this,4))}}function ls(t){return Je(t)?t.value:t}const y_={get:(t,e,n)=>ls(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Je(i)&&!Je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Rh(t){return Gs(t)?t:new Proxy(t,y_)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fn(t,e,n,s){try{return s?t(...s):t()}catch(i){jr(i,e,n)}}function ft(t,e,n,s){if(G(t)){const i=fn(t,e,n,s);return i&&sh(i)&&i.catch(r=>{jr(r,e,n)}),i}if($(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ft(t[r],e,n,s));return i}}function jr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){bn(),fn(l,null,10,[t,o,a]),In();return}}v_(t,n,i,s)}function v_(t,e,n,s=!0){console.error(t)}let oi=!1,Ko=!1;const Ue=[];let bt=0;const cs=[];let nn=null,Dn=0;const Ph=Promise.resolve();let Ba=null;function $a(t){const e=Ba||Ph;return t?e.then(this?t.bind(this):t):e}function w_(t){let e=bt+1,n=Ue.length;for(;e<n;){const s=e+n>>>1,i=Ue[s],r=ai(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Ha(t){(!Ue.length||!Ue.includes(t,oi&&t.allowRecurse?bt+1:bt))&&(t.id==null?Ue.push(t):Ue.splice(w_(t.id),0,t),kh())}function kh(){!oi&&!Ko&&(Ko=!0,Ba=Ph.then(Nh))}function E_(t){const e=Ue.indexOf(t);e>bt&&Ue.splice(e,1)}function C_(t){$(t)?cs.push(...t):(!nn||!nn.includes(t,t.allowRecurse?Dn+1:Dn))&&cs.push(t),kh()}function ic(t,e,n=oi?bt+1:0){for(;n<Ue.length;n++){const s=Ue[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ue.splice(n,1),n--,s()}}}function Ah(t){if(cs.length){const e=[...new Set(cs)].sort((n,s)=>ai(n)-ai(s));if(cs.length=0,nn){nn.push(...e);return}for(nn=e,Dn=0;Dn<nn.length;Dn++)nn[Dn]();nn=null,Dn=0}}const ai=t=>t.id==null?1/0:t.id,b_=(t,e)=>{const n=ai(t)-ai(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Nh(t){Ko=!1,oi=!0,Ue.sort(b_);try{for(bt=0;bt<Ue.length;bt++){const e=Ue[bt];e&&e.active!==!1&&fn(e,null,14)}}finally{bt=0,Ue.length=0,Ah(),oi=!1,Ba=null,(Ue.length||cs.length)&&Nh()}}function I_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||_e;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||_e;d&&(i=n.map(_=>Ie(_)?_.trim():_)),h&&(i=n.map(lr))}let a,l=s[a=yo(e)]||s[a=yo(Rt(e))];!l&&r&&(l=s[a=yo(Ts(e))]),l&&ft(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(c,t,6,i)}}function Oh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Oh(c,e,!0);u&&(a=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(pe(t)&&s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):Ne(o,r),pe(t)&&s.set(t,o),o)}function qr(t,e){return!t||!Ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,Ts(e))||X(t,e))}let ze=null,Gr=null;function ur(t){const e=ze;return ze=t,Gr=t&&t.type.__scopeId||null,e}function kt(t){Gr=t}function At(){Gr=null}function Ze(t,e=ze,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&_c(-1);const r=ur(e);let o;try{o=t(...i)}finally{ur(r),s._d&&_c(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function wo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:y,inheritAttrs:T}=t,D=ur(t);let O,x;try{if(n.shapeFlag&4){const J=i||s,ge=J;O=Ct(c.call(ge,J,u,h,_,d,y)),x=a}else{const J=e;O=Ct(J.length>1?J(h,{attrs:a,slots:o,emit:l}):J(h,null)),x=e.props?a:S_(a)}}catch(J){Ys.length=0,jr(J,t,1),O=te(Bn)}let V=O;if(x&&T!==!1){const J=Object.keys(x),{shapeFlag:ge}=V;J.length&&ge&7&&(r&&J.some(ka)&&(x=T_(x,r)),V=ms(V,x,!1,!0))}return n.dirs&&(V=ms(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),O=V,ur(D),O}const S_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ur(n))&&((e||(e={}))[n]=t[n]);return e},T_=(t,e)=>{const n={};for(const s in t)(!ka(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function R_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?rc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!qr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?rc(s,o,c):!0:!!o;return!1}function rc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!qr(n,r))return!0}return!1}function P_({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const xh="components";function ut(t,e){return A_(xh,t,!0,e)||t}const k_=Symbol.for("v-ndc");function A_(t,e,n=!0,s=!1){const i=ze||We;if(i){const r=i.type;if(t===xh){const a=bm(r,!1);if(a&&(a===e||a===Rt(e)||a===Br(Rt(e))))return r}const o=oc(i[t]||r[t],e)||oc(i.appContext[t],e);return!o&&s?r:o}}function oc(t,e){return t&&(t[e]||t[Rt(e)]||t[Br(Rt(e))])}const N_=t=>t.__isSuspense;function O_(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):C_(t)}const x_=Symbol.for("v-scx"),D_=()=>$t(x_),Gi={};function Xi(t,e,n){return Dh(t,e,n)}function Dh(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=_e){if(e&&r){const j=e;e=(...Se)=>{j(...Se),ge()}}const l=We,c=j=>s===!0?j:Ln(j,s===!1?1:void 0);let u,h=!1,d=!1;if(Je(t)?(u=()=>t.value,h=cr(t)):Gs(t)?(u=()=>c(t),h=!0):$(t)?(d=!0,h=t.some(j=>Gs(j)||cr(j)),u=()=>t.map(j=>{if(Je(j))return j.value;if(Gs(j))return c(j);if(G(j))return fn(j,l,2)})):G(t)?e?u=()=>fn(t,l,2):u=()=>(_&&_(),ft(t,l,3,[y])):u=nt,e&&s){const j=u;u=()=>Ln(j())}let _,y=j=>{_=V.onStop=()=>{fn(j,l,4),_=V.onStop=void 0}},T;if(Yr)if(y=nt,e?n&&ft(e,l,3,[u(),d?[]:void 0,y]):u(),i==="sync"){const j=D_();T=j.__watcherHandles||(j.__watcherHandles=[])}else return nt;let D=d?new Array(t.length).fill(Gi):Gi;const O=()=>{if(!(!V.active||!V.dirty))if(e){const j=V.run();(s||h||(d?j.some((Se,qe)=>vn(Se,D[qe])):vn(j,D)))&&(_&&_(),ft(e,l,3,[j,D===Gi?void 0:d&&D[0]===Gi?[]:D,y]),D=j)}else V.run()};O.allowRecurse=!!e;let x;i==="sync"?x=O:i==="post"?x=()=>Ke(O,l&&l.suspense):(O.pre=!0,l&&(O.id=l.uid),x=()=>Ha(O));const V=new Da(u,nt,x),J=Kp(),ge=()=>{V.stop(),J&&Aa(J.effects,V)};return e?n?O():D=V.run():i==="post"?Ke(V.run.bind(V),l&&l.suspense):V.run(),T&&T.push(ge),ge}function M_(t,e,n){const s=this.proxy,i=Ie(t)?t.includes(".")?Mh(s,t):()=>s[t]:t.bind(s,s);let r;G(e)?r=e:(r=e.handler,n=e);const o=Ti(this),a=Dh(i,r.bind(s),n);return o(),a}function Mh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ln(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Ln(t.value,e,n);else if($(t))for(let s=0;s<t.length;s++)Ln(t[s],e,n);else if(Wr(t)||as(t))t.forEach(s=>{Ln(s,e,n)});else if(rh(t))for(const s in t)Ln(t[s],e,n);return t}function ce(t,e){if(ze===null)return t;const n=Qr(ze)||ze.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=_e]=e[i];r&&(G(r)&&(r={mounted:r,updated:r}),r.deep&&Ln(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function An(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(bn(),ft(l,n,8,[t.el,a,t,e]),In())}}/*! #__NO_SIDE_EFFECTS__ */function Lh(t,e){return G(t)?Ne({name:t.name},e,{setup:t}):t}const Zi=t=>!!t.type.__asyncLoader,Fh=t=>t.type.__isKeepAlive;function L_(t,e){Uh(t,"a",e)}function F_(t,e){Uh(t,"da",e)}function Uh(t,e,n=We){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Kr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Fh(i.parent.vnode)&&U_(s,e,n,i),i=i.parent}}function U_(t,e,n,s){const i=Kr(e,t,s,!0);Wh(()=>{Aa(s[e],i)},n)}function Kr(t,e,n=We,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;bn();const a=Ti(n),l=ft(e,n,t,o);return a(),In(),l});return s?i.unshift(r):i.push(r),r}}const zt=t=>(e,n=We)=>(!Yr||t==="sp")&&Kr(t,(...s)=>e(...s),n),W_=zt("bm"),V_=zt("m"),B_=zt("bu"),$_=zt("u"),H_=zt("bum"),Wh=zt("um"),j_=zt("sp"),q_=zt("rtg"),G_=zt("rtc");function K_(t,e=We){Kr("ec",t,e)}function Lt(t,e,n,s){let i;const r=n;if($(t)||Ie(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r)}}else i=[];return i}const zo=t=>t?td(t)?Qr(t)||t.proxy:zo(t.parent):null,Ks=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zo(t.parent),$root:t=>zo(t.root),$emit:t=>t.emit,$options:t=>ja(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ha(t.update)}),$nextTick:t=>t.n||(t.n=$a.bind(t.proxy)),$watch:t=>M_.bind(t)}),Eo=(t,e)=>t!==_e&&!t.__isScriptSetup&&X(t,e),z_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Eo(s,e))return o[e]=1,s[e];if(i!==_e&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==_e&&X(n,e))return o[e]=4,n[e];Yo&&(o[e]=0)}}const u=Ks[e];let h,d;if(u)return e==="$attrs"&&Qe(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&X(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,X(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Eo(i,e)?(i[e]=n,!0):s!==_e&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==_e&&X(t,o)||Eo(e,o)||(a=r[0])&&X(a,o)||X(s,o)||X(Ks,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ac(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yo=!0;function Y_(t){const e=ja(t),n=t.proxy,s=t.ctx;Yo=!1,e.beforeCreate&&lc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:y,activated:T,deactivated:D,beforeDestroy:O,beforeUnmount:x,destroyed:V,unmounted:J,render:ge,renderTracked:j,renderTriggered:Se,errorCaptured:qe,serverPrefetch:rt,expose:tt,inheritAttrs:Jt,components:kn,directives:yt,filters:Ds}=e;if(c&&Q_(c,s,null),o)for(const oe in o){const ee=o[oe];G(ee)&&(s[oe]=ee.bind(n))}if(i){const oe=i.call(n,n);pe(oe)&&(t.data=Si(oe))}if(Yo=!0,r)for(const oe in r){const ee=r[oe],Dt=G(ee)?ee.bind(n,n):G(ee.get)?ee.get.bind(n,n):nt,Xt=!G(ee)&&G(ee.set)?ee.set.bind(n):nt,vt=lt({get:Dt,set:Xt});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>vt.value,set:Ge=>vt.value=Ge})}if(a)for(const oe in a)Vh(a[oe],s,n,oe);if(l){const oe=G(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(ee=>{er(ee,oe[ee])})}u&&lc(u,t,"c");function Te(oe,ee){$(ee)?ee.forEach(Dt=>oe(Dt.bind(n))):ee&&oe(ee.bind(n))}if(Te(W_,h),Te(V_,d),Te(B_,_),Te($_,y),Te(L_,T),Te(F_,D),Te(K_,qe),Te(G_,j),Te(q_,Se),Te(H_,x),Te(Wh,J),Te(j_,rt),$(tt))if(tt.length){const oe=t.exposed||(t.exposed={});tt.forEach(ee=>{Object.defineProperty(oe,ee,{get:()=>n[ee],set:Dt=>n[ee]=Dt})})}else t.exposed||(t.exposed={});ge&&t.render===nt&&(t.render=ge),Jt!=null&&(t.inheritAttrs=Jt),kn&&(t.components=kn),yt&&(t.directives=yt)}function Q_(t,e,n=nt){$(t)&&(t=Qo(t));for(const s in t){const i=t[s];let r;pe(i)?"default"in i?r=$t(i.from||s,i.default,!0):r=$t(i.from||s):r=$t(i),Je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function lc(t,e,n){ft($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vh(t,e,n,s){const i=s.includes(".")?Mh(n,s):()=>n[s];if(Ie(t)){const r=e[t];G(r)&&Xi(i,r)}else if(G(t))Xi(i,t.bind(n));else if(pe(t))if($(t))t.forEach(r=>Vh(r,e,n,s));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&Xi(i,r,t)}}function ja(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>hr(l,c,o,!0)),hr(l,e,o)),pe(e)&&r.set(e,l),l}function hr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&hr(t,r,n,!0),i&&i.forEach(o=>hr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=J_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const J_={data:cc,props:uc,emits:uc,methods:$s,computed:$s,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:$s,directives:$s,watch:Z_,provide:cc,inject:X_};function cc(t,e){return e?t?function(){return Ne(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function X_(t,e){return $s(Qo(t),Qo(e))}function Qo(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Be(t,e){return t?[...new Set([].concat(t,e))]:e}function $s(t,e){return t?Ne(Object.create(null),t,e):e}function uc(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:Ne(Object.create(null),ac(t),ac(e??{})):e}function Z_(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const s in e)n[s]=Be(t[s],e[s]);return n}function Bh(){return{app:null,config:{isNativeTag:Op,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let em=0;function tm(t,e){return function(s,i=null){G(s)||(s=Ne({},s)),i!=null&&!pe(i)&&(i=null);const r=Bh(),o=new WeakSet;let a=!1;const l=r.app={_uid:em++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Sm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=te(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Qr(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=zs;zs=l;try{return c()}finally{zs=u}}};return l}}let zs=null;function er(t,e){if(We){let n=We.provides;const s=We.parent&&We.parent.provides;s===n&&(n=We.provides=Object.create(s)),n[t]=e}}function $t(t,e,n=!1){const s=We||ze;if(s||zs){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:zs._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(s&&s.proxy):e}}const $h={},Hh=()=>Object.create($h),jh=t=>Object.getPrototypeOf(t)===$h;function nm(t,e,n,s=!1){const i={},r=Hh();t.propsDefaults=Object.create(null),qh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Eh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function sm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ne(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(qr(t.emitsOptions,d))continue;const _=e[d];if(l)if(X(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const y=Rt(d);i[y]=Jo(l,a,y,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{qh(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=Ts(h))===h||!X(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Jo(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!X(e,h))&&(delete r[h],c=!0)}c&&Bt(t.attrs,"set","")}function qh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(qs(l))continue;const c=e[l];let u;i&&X(i,u=Rt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:qr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ne(n),c=a||_e;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Jo(i,l,h,c[h],t,!X(c,h))}}return o}function Jo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ti(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ts(n))&&(s=!0))}return s}function Gh(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!G(t)){const u=h=>{l=!0;const[d,_]=Gh(h,e,!0);Ne(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return pe(t)&&s.set(t,os),os;if($(r))for(let u=0;u<r.length;u++){const h=Rt(r[u]);hc(h)&&(o[h]=_e)}else if(r)for(const u in r){const h=Rt(u);if(hc(h)){const d=r[u],_=o[h]=$(d)||G(d)?{type:d}:Ne({},d);if(_){const y=pc(Boolean,_.type),T=pc(String,_.type);_[0]=y>-1,_[1]=T<0||y<T,(y>-1||X(_,"default"))&&a.push(h)}}}const c=[o,a];return pe(t)&&s.set(t,c),c}function hc(t){return t[0]!=="$"&&!qs(t)}function dc(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function fc(t,e){return dc(t)===dc(e)}function pc(t,e){return $(e)?e.findIndex(n=>fc(n,t)):G(e)&&fc(e,t)?0:-1}const Kh=t=>t[0]==="_"||t==="$stable",qa=t=>$(t)?t.map(Ct):[Ct(t)],im=(t,e,n)=>{if(e._n)return e;const s=Ze((...i)=>qa(e(...i)),n);return s._c=!1,s},zh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Kh(i))continue;const r=t[i];if(G(r))e[i]=im(i,r,s);else if(r!=null){const o=qa(r);e[i]=()=>o}}},Yh=(t,e)=>{const n=qa(e);t.slots.default=()=>n},rm=(t,e)=>{const n=t.slots=Hh();if(t.vnode.shapeFlag&32){const s=e._;s?(Ne(n,e),oh(n,"_",s,!0)):zh(e,n)}else e&&Yh(t,e)},om=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=_e;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ne(i,e),!n&&a===1&&delete i._):(r=!e.$stable,zh(e,i)),o=e}else e&&(Yh(t,e),o={default:1});if(r)for(const a in i)!Kh(a)&&o[a]==null&&delete i[a]};function Xo(t,e,n,s,i=!1){if($(t)){t.forEach((d,_)=>Xo(d,e&&($(e)?e[_]:e),n,s,i));return}if(Zi(s)&&!i)return;const r=s.shapeFlag&4?Qr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ie(c)?(u[c]=null,X(h,c)&&(h[c]=null)):Je(c)&&(c.value=null)),G(l))fn(l,a,12,[o,u]);else{const d=Ie(l),_=Je(l);if(d||_){const y=()=>{if(t.f){const T=d?X(h,l)?h[l]:u[l]:l.value;i?$(T)&&Aa(T,r):$(T)?T.includes(r)||T.push(r):d?(u[l]=[r],X(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,X(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Ke(y,n)):y()}}}const Ke=O_;function am(t){return lm(t)}function lm(t,e){const n=ah();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=nt,insertStaticContent:y}=t,T=(f,p,g,E=null,v=null,S=null,k=void 0,I=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ls(f,p)&&(E=w(f),Ge(f,v,S,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:C,ref:N,shapeFlag:W}=p;switch(C){case zr:D(f,p,g,E);break;case Bn:O(f,p,g,E);break;case bo:f==null&&x(p,g,E,k);break;case Ae:kn(f,p,g,E,v,S,k,I,R);break;default:W&1?ge(f,p,g,E,v,S,k,I,R):W&6?yt(f,p,g,E,v,S,k,I,R):(W&64||W&128)&&C.process(f,p,g,E,v,S,k,I,R,M)}N!=null&&v&&Xo(N,f&&f.ref,S,p||f,!p)},D=(f,p,g,E)=>{if(f==null)s(p.el=a(p.children),g,E);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},O=(f,p,g,E)=>{f==null?s(p.el=l(p.children||""),g,E):p.el=f.el},x=(f,p,g,E)=>{[f.el,f.anchor]=y(f.children,p,g,E,f.el,f.anchor)},V=({el:f,anchor:p},g,E)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,E),f=v;s(p,g,E)},J=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},ge=(f,p,g,E,v,S,k,I,R)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),f==null?j(p,g,E,v,S,k,I,R):rt(f,p,v,S,k,I,R)},j=(f,p,g,E,v,S,k,I)=>{let R,C;const{props:N,shapeFlag:W,transition:F,dirs:q}=f;if(R=f.el=o(f.type,S,N&&N.is,N),W&8?u(R,f.children):W&16&&qe(f.children,R,null,E,v,Co(f,S),k,I),q&&An(f,null,E,"created"),Se(R,f,f.scopeId,k,E),N){for(const ae in N)ae!=="value"&&!qs(ae)&&r(R,ae,null,N[ae],S,f.children,E,v,Le);"value"in N&&r(R,"value",null,N.value,S),(C=N.onVnodeBeforeMount)&&Et(C,E,f)}q&&An(f,null,E,"beforeMount");const Q=cm(v,F);Q&&F.beforeEnter(R),s(R,p,g),((C=N&&N.onVnodeMounted)||Q||q)&&Ke(()=>{C&&Et(C,E,f),Q&&F.enter(R),q&&An(f,null,E,"mounted")},v)},Se=(f,p,g,E,v)=>{if(g&&_(f,g),E)for(let S=0;S<E.length;S++)_(f,E[S]);if(v){let S=v.subTree;if(p===S){const k=v.vnode;Se(f,k,k.scopeId,k.slotScopeIds,v.parent)}}},qe=(f,p,g,E,v,S,k,I,R=0)=>{for(let C=R;C<f.length;C++){const N=f[C]=I?sn(f[C]):Ct(f[C]);T(null,N,p,g,E,v,S,k,I)}},rt=(f,p,g,E,v,S,k)=>{const I=p.el=f.el;let{patchFlag:R,dynamicChildren:C,dirs:N}=p;R|=f.patchFlag&16;const W=f.props||_e,F=p.props||_e;let q;if(g&&Nn(g,!1),(q=F.onVnodeBeforeUpdate)&&Et(q,g,p,f),N&&An(p,f,g,"beforeUpdate"),g&&Nn(g,!0),C?tt(f.dynamicChildren,C,I,g,E,Co(p,v),S):k||ee(f,p,I,null,g,E,Co(p,v),S,!1),R>0){if(R&16)Jt(I,p,W,F,g,E,v);else if(R&2&&W.class!==F.class&&r(I,"class",null,F.class,v),R&4&&r(I,"style",W.style,F.style,v),R&8){const Q=p.dynamicProps;for(let ae=0;ae<Q.length;ae++){const me=Q[ae],Re=W[me],ot=F[me];(ot!==Re||me==="value")&&r(I,me,Re,ot,v,f.children,g,E,Le)}}R&1&&f.children!==p.children&&u(I,p.children)}else!k&&C==null&&Jt(I,p,W,F,g,E,v);((q=F.onVnodeUpdated)||N)&&Ke(()=>{q&&Et(q,g,p,f),N&&An(p,f,g,"updated")},E)},tt=(f,p,g,E,v,S,k)=>{for(let I=0;I<p.length;I++){const R=f[I],C=p[I],N=R.el&&(R.type===Ae||!Ls(R,C)||R.shapeFlag&70)?h(R.el):g;T(R,C,N,null,E,v,S,k,!0)}},Jt=(f,p,g,E,v,S,k)=>{if(g!==E){if(g!==_e)for(const I in g)!qs(I)&&!(I in E)&&r(f,I,g[I],null,k,p.children,v,S,Le);for(const I in E){if(qs(I))continue;const R=E[I],C=g[I];R!==C&&I!=="value"&&r(f,I,C,R,k,p.children,v,S,Le)}"value"in E&&r(f,"value",g.value,E.value,k)}},kn=(f,p,g,E,v,S,k,I,R)=>{const C=p.el=f?f.el:a(""),N=p.anchor=f?f.anchor:a("");let{patchFlag:W,dynamicChildren:F,slotScopeIds:q}=p;q&&(I=I?I.concat(q):q),f==null?(s(C,g,E),s(N,g,E),qe(p.children||[],g,N,v,S,k,I,R)):W>0&&W&64&&F&&f.dynamicChildren?(tt(f.dynamicChildren,F,g,v,S,k,I),(p.key!=null||v&&p===v.subTree)&&Qh(f,p,!0)):ee(f,p,g,N,v,S,k,I,R)},yt=(f,p,g,E,v,S,k,I,R)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?v.ctx.activate(p,g,E,k,R):Ds(p,g,E,v,S,k,R):Xn(f,p,R)},Ds=(f,p,g,E,v,S,k)=>{const I=f.component=ym(f,E,v);if(Fh(f)&&(I.ctx.renderer=M),vm(I),I.asyncDep){if(v&&v.registerDep(I,Te),!f.el){const R=I.subTree=te(Bn);O(null,R,p,g)}}else Te(I,f,p,g,v,S,k)},Xn=(f,p,g)=>{const E=p.component=f.component;if(R_(f,p,g))if(E.asyncDep&&!E.asyncResolved){oe(E,p,g);return}else E.next=p,E_(E.update),E.effect.dirty=!0,E.update();else p.el=f.el,E.vnode=p},Te=(f,p,g,E,v,S,k)=>{const I=()=>{if(f.isMounted){let{next:N,bu:W,u:F,parent:q,vnode:Q}=f;{const ts=Jh(f);if(ts){N&&(N.el=Q.el,oe(f,N,k)),ts.asyncDep.then(()=>{f.isUnmounted||I()});return}}let ae=N,me;Nn(f,!1),N?(N.el=Q.el,oe(f,N,k)):N=Q,W&&Qi(W),(me=N.props&&N.props.onVnodeBeforeUpdate)&&Et(me,q,N,Q),Nn(f,!0);const Re=wo(f),ot=f.subTree;f.subTree=Re,T(ot,Re,h(ot.el),w(ot),f,v,S),N.el=Re.el,ae===null&&P_(f,Re.el),F&&Ke(F,v),(me=N.props&&N.props.onVnodeUpdated)&&Ke(()=>Et(me,q,N,Q),v)}else{let N;const{el:W,props:F}=p,{bm:q,m:Q,parent:ae}=f,me=Zi(p);if(Nn(f,!1),q&&Qi(q),!me&&(N=F&&F.onVnodeBeforeMount)&&Et(N,ae,p),Nn(f,!0),W&&ye){const Re=()=>{f.subTree=wo(f),ye(W,f.subTree,f,v,null)};me?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Re()):Re()}else{const Re=f.subTree=wo(f);T(null,Re,g,E,f,v,S),p.el=Re.el}if(Q&&Ke(Q,v),!me&&(N=F&&F.onVnodeMounted)){const Re=p;Ke(()=>Et(N,ae,Re),v)}(p.shapeFlag&256||ae&&Zi(ae.vnode)&&ae.vnode.shapeFlag&256)&&f.a&&Ke(f.a,v),f.isMounted=!0,p=g=E=null}},R=f.effect=new Da(I,nt,()=>Ha(C),f.scope),C=f.update=()=>{R.dirty&&R.run()};C.id=f.uid,Nn(f,!0),C()},oe=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,sm(f,p.props,E,g),om(f,p.children,g),bn(),ic(f),In()},ee=(f,p,g,E,v,S,k,I,R=!1)=>{const C=f&&f.children,N=f?f.shapeFlag:0,W=p.children,{patchFlag:F,shapeFlag:q}=p;if(F>0){if(F&128){Xt(C,W,g,E,v,S,k,I,R);return}else if(F&256){Dt(C,W,g,E,v,S,k,I,R);return}}q&8?(N&16&&Le(C,v,S),W!==C&&u(g,W)):N&16?q&16?Xt(C,W,g,E,v,S,k,I,R):Le(C,v,S,!0):(N&8&&u(g,""),q&16&&qe(W,g,E,v,S,k,I,R))},Dt=(f,p,g,E,v,S,k,I,R)=>{f=f||os,p=p||os;const C=f.length,N=p.length,W=Math.min(C,N);let F;for(F=0;F<W;F++){const q=p[F]=R?sn(p[F]):Ct(p[F]);T(f[F],q,g,null,v,S,k,I,R)}C>N?Le(f,v,S,!0,!1,W):qe(p,g,E,v,S,k,I,R,W)},Xt=(f,p,g,E,v,S,k,I,R)=>{let C=0;const N=p.length;let W=f.length-1,F=N-1;for(;C<=W&&C<=F;){const q=f[C],Q=p[C]=R?sn(p[C]):Ct(p[C]);if(Ls(q,Q))T(q,Q,g,null,v,S,k,I,R);else break;C++}for(;C<=W&&C<=F;){const q=f[W],Q=p[F]=R?sn(p[F]):Ct(p[F]);if(Ls(q,Q))T(q,Q,g,null,v,S,k,I,R);else break;W--,F--}if(C>W){if(C<=F){const q=F+1,Q=q<N?p[q].el:E;for(;C<=F;)T(null,p[C]=R?sn(p[C]):Ct(p[C]),g,Q,v,S,k,I,R),C++}}else if(C>F)for(;C<=W;)Ge(f[C],v,S,!0),C++;else{const q=C,Q=C,ae=new Map;for(C=Q;C<=F;C++){const Xe=p[C]=R?sn(p[C]):Ct(p[C]);Xe.key!=null&&ae.set(Xe.key,C)}let me,Re=0;const ot=F-Q+1;let ts=!1,Gl=0;const Ms=new Array(ot);for(C=0;C<ot;C++)Ms[C]=0;for(C=q;C<=W;C++){const Xe=f[C];if(Re>=ot){Ge(Xe,v,S,!0);continue}let wt;if(Xe.key!=null)wt=ae.get(Xe.key);else for(me=Q;me<=F;me++)if(Ms[me-Q]===0&&Ls(Xe,p[me])){wt=me;break}wt===void 0?Ge(Xe,v,S,!0):(Ms[wt-Q]=C+1,wt>=Gl?Gl=wt:ts=!0,T(Xe,p[wt],g,null,v,S,k,I,R),Re++)}const Kl=ts?um(Ms):os;for(me=Kl.length-1,C=ot-1;C>=0;C--){const Xe=Q+C,wt=p[Xe],zl=Xe+1<N?p[Xe+1].el:E;Ms[C]===0?T(null,wt,g,zl,v,S,k,I,R):ts&&(me<0||C!==Kl[me]?vt(wt,g,zl,2):me--)}}},vt=(f,p,g,E,v=null)=>{const{el:S,type:k,transition:I,children:R,shapeFlag:C}=f;if(C&6){vt(f.component.subTree,p,g,E);return}if(C&128){f.suspense.move(p,g,E);return}if(C&64){k.move(f,p,g,M);return}if(k===Ae){s(S,p,g);for(let W=0;W<R.length;W++)vt(R[W],p,g,E);s(f.anchor,p,g);return}if(k===bo){V(f,p,g);return}if(E!==2&&C&1&&I)if(E===0)I.beforeEnter(S),s(S,p,g),Ke(()=>I.enter(S),v);else{const{leave:W,delayLeave:F,afterLeave:q}=I,Q=()=>s(S,p,g),ae=()=>{W(S,()=>{Q(),q&&q()})};F?F(S,Q,ae):ae()}else s(S,p,g)},Ge=(f,p,g,E=!1,v=!1)=>{const{type:S,props:k,ref:I,children:R,dynamicChildren:C,shapeFlag:N,patchFlag:W,dirs:F}=f;if(I!=null&&Xo(I,null,g,f,!0),N&256){p.ctx.deactivate(f);return}const q=N&1&&F,Q=!Zi(f);let ae;if(Q&&(ae=k&&k.onVnodeBeforeUnmount)&&Et(ae,p,f),N&6)Vi(f.component,g,E);else{if(N&128){f.suspense.unmount(g,E);return}q&&An(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,g,v,M,E):C&&(S!==Ae||W>0&&W&64)?Le(C,p,g,!1,!0):(S===Ae&&W&384||!v&&N&16)&&Le(R,p,g),E&&Zn(f)}(Q&&(ae=k&&k.onVnodeUnmounted)||q)&&Ke(()=>{ae&&Et(ae,p,f),q&&An(f,null,p,"unmounted")},g)},Zn=f=>{const{type:p,el:g,anchor:E,transition:v}=f;if(p===Ae){es(g,E);return}if(p===bo){J(f);return}const S=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:I}=v,R=()=>k(g,S);I?I(f.el,S,R):R()}else S()},es=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Vi=(f,p,g)=>{const{bum:E,scope:v,update:S,subTree:k,um:I}=f;E&&Qi(E),v.stop(),S&&(S.active=!1,Ge(k,f,p,g)),I&&Ke(I,p),Ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Le=(f,p,g,E=!1,v=!1,S=0)=>{for(let k=S;k<f.length;k++)Ge(f[k],p,g,E,v)},w=f=>f.shapeFlag&6?w(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let A=!1;const P=(f,p,g)=>{f==null?p._vnode&&Ge(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,g),A||(A=!0,ic(),Ah(),A=!1),p._vnode=f},M={p:T,um:Ge,m:vt,r:Zn,mt:Ds,mc:qe,pc:ee,pbc:tt,n:w,o:t};let se,ye;return{render:P,hydrate:se,createApp:tm(P,se)}}function Co({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function cm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qh(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=sn(i[r]),a.el=o.el),n||Qh(o,a)),a.type===zr&&(a.el=o.el)}}function um(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Jh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jh(e)}const hm=t=>t.__isTeleport,Ae=Symbol.for("v-fgt"),zr=Symbol.for("v-txt"),Bn=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),Ys=[];let ht=null;function L(t=!1){Ys.push(ht=t?null:[])}function dm(){Ys.pop(),ht=Ys[Ys.length-1]||null}let li=1;function _c(t){li+=t}function Xh(t){return t.dynamicChildren=li>0?ht||os:null,dm(),li>0&&ht&&ht.push(t),t}function U(t,e,n,s,i,r){return Xh(m(t,e,n,s,i,r,!0))}function Zh(t,e,n,s,i){return Xh(te(t,e,n,s,i,!0))}function Zo(t){return t?t.__v_isVNode===!0:!1}function Ls(t,e){return t.type===e.type&&t.key===e.key}const ed=({key:t})=>t??null,tr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ie(t)||Je(t)||G(t)?{i:ze,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,s=0,i=null,r=t===Ae?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ed(e),ref:e&&tr(e),scopeId:Gr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ze};return a?(Ga(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ie(n)?8:16),li>0&&!o&&ht&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ht.push(l),l}const te=fm;function fm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===k_)&&(t=Bn),Zo(t)){const a=ms(t,e,!0);return n&&Ga(a,n),li>0&&!r&&ht&&(a.shapeFlag&6?ht[ht.indexOf(t)]=a:ht.push(a)),a.patchFlag|=-2,a}if(Im(t)&&(t=t.__vccOpts),e){e=pm(e);let{class:a,style:l}=e;a&&!Ie(a)&&(e.class=xa(a)),pe(l)&&(bh(l)&&!$(l)&&(l=Ne({},l)),e.style=Oa(l))}const o=Ie(t)?1:N_(t)?128:hm(t)?64:pe(t)?4:G(t)?2:0;return m(t,e,n,s,i,o,r,!0)}function pm(t){return t?bh(t)||jh(t)?Ne({},t):t:null}function ms(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?_m(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ed(c),ref:e&&e.ref?n&&r?$(r)?r.concat(tr(e)):[r,tr(e)]:tr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ae?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ms(t.ssContent),ssFallback:t.ssFallback&&ms(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&(u.transition=l.clone(u)),u}function $e(t=" ",e=0){return te(zr,null,t,e)}function ve(t="",e=!1){return e?(L(),Zh(Bn,null,t)):te(Bn,null,t)}function Ct(t){return t==null||typeof t=="boolean"?te(Bn):$(t)?te(Ae,null,t.slice()):typeof t=="object"?sn(t):te(zr,null,String(t))}function sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ms(t)}function Ga(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ga(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!jh(e)?e._ctx=ze:i===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),s&64?(n=16,e=[$e(e)]):n=8);t.children=e,t.shapeFlag|=n}function _m(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=xa([e.class,s.class]));else if(i==="style")e.style=Oa([e.style,s.style]);else if(Ur(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Et(t,e,n,s=null){ft(t,e,7,[n,s])}const mm=Bh();let gm=0;function ym(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||mm,r={uid:gm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gh(s,i),emitsOptions:Oh(s,i),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:s.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=I_.bind(null,r),t.ce&&t.ce(r),r}let We=null,dr,ea;{const t=ah(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};dr=e("__VUE_INSTANCE_SETTERS__",n=>We=n),ea=e("__VUE_SSR_SETTERS__",n=>Yr=n)}const Ti=t=>{const e=We;return dr(t),t.scope.on(),()=>{t.scope.off(),dr(e)}},mc=()=>{We&&We.scope.off(),dr(null)};function td(t){return t.vnode.shapeFlag&4}let Yr=!1;function vm(t,e=!1){e&&ea(e);const{props:n,children:s}=t.vnode,i=td(t);nm(t,n,i,e),rm(t,s);const r=i?wm(t,e):void 0;return e&&ea(!1),r}function wm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,z_);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Cm(t):null,r=Ti(t);bn();const o=fn(s,t,0,[t.props,i]);if(In(),r(),sh(o)){if(o.then(mc,mc),e)return o.then(a=>{gc(t,a,e)}).catch(a=>{jr(a,t,0)});t.asyncDep=o}else gc(t,o,e)}else nd(t,e)}function gc(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Rh(e)),nd(t,n)}let yc;function nd(t,e,n){const s=t.type;if(!t.render){if(!e&&yc&&!s.render){const i=s.template||ja(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ne(Ne({isCustomElement:r,delimiters:a},o),l);s.render=yc(i,c)}}t.render=s.render||nt}{const i=Ti(t);bn();try{Y_(t)}finally{In(),i()}}}const Em={get(t,e){return Qe(t,"get",""),t[e]}};function Cm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Em),slots:t.slots,emit:t.emit,expose:e}}function Qr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rh(f_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ks)return Ks[n](t)},has(e,n){return n in e||n in Ks}}))}function bm(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function Im(t){return G(t)&&"__vccOpts"in t}const lt=(t,e)=>p_(t,e,Yr);function sd(t,e,n){const s=arguments.length;return s===2?pe(e)&&!$(e)?Zo(e)?te(t,null,[e]):te(t,e):te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Zo(n)&&(n=[n]),te(t,e,n))}const Sm="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Tm="http://www.w3.org/2000/svg",Rm="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,vc=rn&&rn.createElement("template"),Pm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?rn.createElementNS(Tm,t):e==="mathml"?rn.createElementNS(Rm,t):rn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>rn.createTextNode(t),createComment:t=>rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{vc.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=vc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},km=Symbol("_vtc");function Am(t,e,n){const s=t[km];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wc=Symbol("_vod"),Nm=Symbol("_vsh"),Om=Symbol(""),xm=/(^|;)\s*display\s*:/;function Dm(t,e,n){const s=t.style,i=Ie(n);let r=!1;if(n&&!i){if(e)if(Ie(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&nr(s,a,"")}else for(const o in e)n[o]==null&&nr(s,o,"");for(const o in n)o==="display"&&(r=!0),nr(s,o,n[o])}else if(i){if(e!==n){const o=s[Om];o&&(n+=";"+o),s.cssText=n,r=xm.test(n)}}else e&&t.removeAttribute("style");wc in t&&(t[wc]=r?s.display:"",t[Nm]&&(s.display="none"))}const Ec=/\s*!important$/;function nr(t,e,n){if($(n))n.forEach(s=>nr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Mm(t,e);Ec.test(n)?t.setProperty(Ts(s),n.replace(Ec,""),"important"):t[s]=n}}const Cc=["Webkit","Moz","ms"],Io={};function Mm(t,e){const n=Io[e];if(n)return n;let s=Rt(e);if(s!=="filter"&&s in t)return Io[e]=s;s=Br(s);for(let i=0;i<Cc.length;i++){const r=Cc[i]+s;if(r in t)return Io[e]=r}return e}const bc="http://www.w3.org/1999/xlink";function Lm(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bc,e.slice(6,e.length)):t.setAttributeNS(bc,e,n);else{const r=$p(e);n==null||r&&!lh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Fm(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=lh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Mn(t,e,n,s){t.addEventListener(e,n,s)}function Um(t,e,n,s){t.removeEventListener(e,n,s)}const Ic=Symbol("_vei");function Wm(t,e,n,s,i=null){const r=t[Ic]||(t[Ic]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Vm(e);if(s){const c=r[e]=Hm(s,i);Mn(t,a,c,l)}else o&&(Um(t,a,o,l),r[e]=void 0)}}const Sc=/(?:Once|Passive|Capture)$/;function Vm(t){let e;if(Sc.test(t)){e={};let s;for(;s=t.match(Sc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ts(t.slice(2)),e]}let So=0;const Bm=Promise.resolve(),$m=()=>So||(Bm.then(()=>So=0),So=Date.now());function Hm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ft(jm(s,n.value),e,5,[s])};return n.value=t,n.attached=$m(),n}function jm(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Tc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,qm=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?Am(t,s,c):e==="style"?Dm(t,n,s):Ur(e)?ka(e)||Wm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gm(t,e,s,c))?Fm(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Lm(t,e,s,c))};function Gm(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tc(e)&&G(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Tc(e)&&Ie(n)?!1:e in t}const fr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Qi(e,n):e};function Km(t){t.target.composing=!0}function Rc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const us=Symbol("_assign"),he={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[us]=fr(i);const r=s||i.props&&i.props.type==="number";Mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=lr(a)),t[us](a)}),n&&Mn(t,"change",()=>{t.value=t.value.trim()}),e||(Mn(t,"compositionstart",Km),Mn(t,"compositionend",Rc),Mn(t,"change",Rc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[us]=fr(r),t.composing)return;const o=(i||t.type==="number")&&!/^0\d/.test(t.value)?lr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},zm={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Wr(e);Mn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?lr(pr(o)):pr(o));t[us](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,$a(()=>{t._assigning=!1})}),t[us]=fr(s)},mounted(t,{value:e,modifiers:{number:n}}){Pc(t,e)},beforeUpdate(t,e,n){t[us]=fr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Pc(t,e)}};function Pc(t,e,n){const s=t.multiple,i=$(e);if(!(s&&!i&&!Wr(e))){for(let r=0,o=t.options.length;r<o;r++){const a=t.options[r],l=pr(a);if(s)if(i){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(u=>String(u)===String(l)):a.selected=jp(e,l)>-1}else a.selected=e.has(l);else if($r(pr(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function pr(t){return"_value"in t?t._value:t.value}const Ym=["ctrl","shift","alt","meta"],Qm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ym.some(n=>t[`${n}Key`]&&!e.includes(n))},Vn=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Qm[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Jm=Ne({patchProp:qm},Pm);let kc;function Xm(){return kc||(kc=am(Jm))}const Zm=(...t)=>{const e=Xm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=tg(s);if(!i)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,eg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function eg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tg(t){return Ie(t)?document.querySelector(t):t}const Fe=Si({isAuthenticated:!1,user:null,isAdmin:!1,login(t){this.isAuthenticated=!0,this.user=t,this.isAdmin=t.isAdmin||!1,console.log(12,this)},logout(){this.isAuthenticated=!1,this.user=null,this.isAdmin=!1,console.log(18,this)}});var Ac={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw Rs(e)},Rs=function(t){return new Error("Firebase Database ("+id.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ng=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ka={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ng(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new sg;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const y=c<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const od=function(t){const e=rd(t);return Ka.encodeByteArray(e,!0)},_r=function(t){return od(t).replace(/\./g,"")},mr=function(t){try{return Ka.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t){return ad(void 0,t)}function ad(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rg(n)||(t[n]=ad(t[n],e[n]));return t}function rg(t){return t!=="__proto__"}/**
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
 */function og(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ag=()=>og().__FIREBASE_DEFAULTS__,lg=()=>{if(typeof process>"u"||typeof Ac>"u")return;const t=Ac.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mr(t[1]);return e&&JSON.parse(e)},za=()=>{try{return ag()||lg()||cg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ld=t=>{var e,n;return(n=(e=za())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ug=t=>{const e=ld(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cd=()=>{var t;return(t=za())===null||t===void 0?void 0:t.config},ud=t=>{var e;return(e=za())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function hg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_r(JSON.stringify(n)),_r(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ya(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function dg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fg(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dd(){return id.NODE_ADMIN===!0}function pg(){try{return typeof indexedDB=="object"}catch{return!1}}function _g(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="FirebaseError";class Sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mg,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?gg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,a,s)}}function gg(t,e){return t.replace(yg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const yg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ci(mr(r[0])||""),n=ci(mr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},vg=function(t){const e=fd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},wg=function(t){const e=fd(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ta(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function yr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Nc(r)&&Nc(o)){if(!yr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Nc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Cg(t,e){const n=new bg(t,e);return n.subscribe.bind(n)}class bg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ig(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=To),i.error===void 0&&(i.error=To),i.complete===void 0&&(i.complete=To);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ig(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function To(){}function Jr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Tg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ri;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pg(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rg(t){return t===On?void 0:t}function Pg(t){return t.instantiationMode==="EAGER"}/**
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
 */class kg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Ag={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Ng=le.INFO,Og={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},xg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Og[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=Ng,this._logHandler=xg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ag[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Dg=(t,e)=>e.some(n=>t instanceof n);let Oc,xc;function Mg(){return Oc||(Oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lg(){return xc||(xc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pd=new WeakMap,na=new WeakMap,_d=new WeakMap,Ro=new WeakMap,Ja=new WeakMap;function Fg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(pn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pd.set(n,t)}).catch(()=>{}),Ja.set(e,t),e}function Ug(t){if(na.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});na.set(t,e)}let sa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return na.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_d.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wg(t){sa=t(sa)}function Vg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Po(this),e,...n);return _d.set(s,e.sort?e.sort():[e]),pn(s)}:Lg().includes(t)?function(...e){return t.apply(Po(this),e),pn(pd.get(this))}:function(...e){return pn(t.apply(Po(this),e))}}function Bg(t){return typeof t=="function"?Vg(t):(t instanceof IDBTransaction&&Ug(t),Dg(t,Mg())?new Proxy(t,sa):t)}function pn(t){if(t instanceof IDBRequest)return Fg(t);if(Ro.has(t))return Ro.get(t);const e=Bg(t);return e!==t&&(Ro.set(t,e),Ja.set(e,t)),e}const Po=t=>Ja.get(t);function $g(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=pn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(pn(o.result),l.oldVersion,l.newVersion,pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Hg=["get","getKey","getAll","getAllKeys","count"],jg=["put","add","delete","clear"],ko=new Map;function Dc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ko.get(e))return ko.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=jg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Hg.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ko.set(e,r),r}Wg(t=>({...t,get:(e,n,s)=>Dc(e,n)||t.get(e,n,s),has:(e,n)=>!!Dc(e,n)||t.has(e,n)}));/**
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
 */class qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Gg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ia="@firebase/app",Mc="0.10.5";/**
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
 */const Hn=new Qa("@firebase/app"),Kg="@firebase/app-compat",zg="@firebase/analytics-compat",Yg="@firebase/analytics",Qg="@firebase/app-check-compat",Jg="@firebase/app-check",Xg="@firebase/auth",Zg="@firebase/auth-compat",ey="@firebase/database",ty="@firebase/database-compat",ny="@firebase/functions",sy="@firebase/functions-compat",iy="@firebase/installations",ry="@firebase/installations-compat",oy="@firebase/messaging",ay="@firebase/messaging-compat",ly="@firebase/performance",cy="@firebase/performance-compat",uy="@firebase/remote-config",hy="@firebase/remote-config-compat",dy="@firebase/storage",fy="@firebase/storage-compat",py="@firebase/firestore",_y="@firebase/vertexai-preview",my="@firebase/firestore-compat",gy="firebase",yy="10.12.2";/**
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
 */const ra="[DEFAULT]",vy={[ia]:"fire-core",[Kg]:"fire-core-compat",[Yg]:"fire-analytics",[zg]:"fire-analytics-compat",[Jg]:"fire-app-check",[Qg]:"fire-app-check-compat",[Xg]:"fire-auth",[Zg]:"fire-auth-compat",[ey]:"fire-rtdb",[ty]:"fire-rtdb-compat",[ny]:"fire-fn",[sy]:"fire-fn-compat",[iy]:"fire-iid",[ry]:"fire-iid-compat",[oy]:"fire-fcm",[ay]:"fire-fcm-compat",[ly]:"fire-perf",[cy]:"fire-perf-compat",[uy]:"fire-rc",[hy]:"fire-rc-compat",[dy]:"fire-gcs",[fy]:"fire-gcs-compat",[py]:"fire-fst",[my]:"fire-fst-compat",[_y]:"fire-vertex","fire-js":"fire-js",[gy]:"fire-js-all"};/**
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
 */const vr=new Map,wy=new Map,oa=new Map;function Lc(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(oa.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;oa.set(e,t);for(const n of vr.values())Lc(n,t);for(const n of wy.values())Lc(n,t);return!0}function Xa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function It(t){return t.settings!==void 0}/**
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
 */const Ey={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new Pi("app","Firebase",Ey);/**
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
 */class Cy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=yy;function Ot(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ra,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(n||(n=cd()),!n)throw _n.create("no-options");const r=vr.get(i);if(r){if(yr(n,r.options)&&yr(s,r.config))return r;throw _n.create("duplicate-app",{appName:i})}const o=new kg(i);for(const l of oa.values())o.addComponent(l);const a=new Cy(n,s,o);return vr.set(i,a),a}function md(t=ra){const e=vr.get(t);if(!e&&t===ra&&cd())return Ot();if(!e)throw _n.create("no-app",{appName:t});return e}function mn(t,e,n){var s;let i=(s=vy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(a.join(" "));return}ys(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const by="firebase-heartbeat-database",Iy=1,ui="firebase-heartbeat-store";let Ao=null;function gd(){return Ao||(Ao=$g(by,Iy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ui)}catch(n){console.warn(n)}}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),Ao}async function Sy(t){try{const n=(await gd()).transaction(ui),s=await n.objectStore(ui).get(yd(t));return await n.done,s}catch(e){if(e instanceof Sn)Hn.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function Fc(t,e){try{const s=(await gd()).transaction(ui,"readwrite");await s.objectStore(ui).put(e,yd(t)),await s.done}catch(n){if(n instanceof Sn)Hn.warn(n.message);else{const s=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(s.message)}}}function yd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ty=1024,Ry=30*24*60*60*1e3;class Py{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ay(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ry}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uc(),{heartbeatsToSend:s,unsentEntries:i}=ky(this._heartbeatsCache.heartbeats),r=_r(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Uc(){return new Date().toISOString().substring(0,10)}function ky(t,e=Ty){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Wc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ay{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pg()?_g().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wc(t){return _r(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ny(t){ys(new $n("platform-logger",e=>new qg(e),"PRIVATE")),ys(new $n("heartbeat",e=>new Py(e),"PRIVATE")),mn(ia,Mc,t),mn(ia,Mc,"esm2017"),mn("fire-js","")}Ny("");function Za(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function vd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oy=vd,wd=new Pi("auth","Firebase",vd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Qa("@firebase/auth");function xy(t,...e){wr.logLevel<=le.WARN&&wr.warn(`Auth (${ks}): ${t}`,...e)}function sr(t,...e){wr.logLevel<=le.ERROR&&wr.error(`Auth (${ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,...e){throw el(t,...e)}function St(t,...e){return el(t,...e)}function Ed(t,e,n){const s=Object.assign(Object.assign({},Oy()),{[e]:n});return new Pi("auth","Firebase",s).create(e,{appName:t.name})}function Ht(t){return Ed(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function el(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return wd.create(t,...e)}function H(t,e,...n){if(!t)throw el(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sr(e),new Error(e)}function Gt(t,e){t||Ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dy(){return Vc()==="http:"||Vc()==="https:"}function Vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dy()||dg()||"connection"in navigator)?navigator.onLine:!0}function Ly(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ya()||hd()}get(){return My()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t,e){Gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new ki(3e4,6e4);function Tn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,s,i={}){return bd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ps(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Cd.fetch()(Id(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function bd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Fy),e);try{const i=new Vy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ki(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ki(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ki(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ki(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ed(t,u,c);_t(t,u)}}catch(i){if(i instanceof Sn)throw i;_t(t,"network-request-failed",{message:String(i)})}}async function Ai(t,e,n,s,i={}){const r=await Rn(t,e,n,s,i);return"mfaPendingCredential"in r&&_t(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Id(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?tl(t.config,i):`${t.config.apiScheme}://${i}`}function Wy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(St(this.auth,"network-request-failed")),Uy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ki(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=St(t,e,s);return i.customData._tokenResponse=n,i}function Bc(t){return t!==void 0&&t.enterprise!==void 0}class By{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Wy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $y(t,e){return Rn(t,"GET","/v2/recaptchaConfig",Tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hy(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function Sd(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jy(t,e=!1){const n=Me(t),s=await n.getIdToken(e),i=nl(s);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Qs(No(i.auth_time)),issuedAtTime:Qs(No(i.iat)),expirationTime:Qs(No(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function No(t){return Number(t)*1e3}function nl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return sr("JWT malformed, contained fewer than 3 sections"),null;try{const i=mr(n);return i?JSON.parse(i):(sr("Failed to decode base64 JWT payload"),null)}catch(i){return sr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $c(t){const e=nl(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Sn&&qy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Er(t){var e;const n=t.auth,s=await t.getIdToken(),i=await hi(t,Sd(n,{idToken:s}));H(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Td(r.providerUserInfo):[],a=zy(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new la(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Ky(t){const e=Me(t);await Er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zy(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Td(t){return t.map(e=>{var{providerId:n}=e,s=Za(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(t,e){const n=await bd(t,{},async()=>{const s=Ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Id(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Qy(t,e){return Rn(t,"POST","/v2/accounts:revokeToken",Tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$c(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=$c(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Yy(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new hs;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Za(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new la(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jy(this,e)}reload(){return Ky(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Er(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(Ht(this.auth));const e=await this.getIdToken();return await hi(this,Hy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:J,isAnonymous:ge,providerData:j,stsTokenManager:Se}=n;H(V&&Se,e,"internal-error");const qe=hs.fromJSON(this.name,Se);H(typeof V=="string",e,"internal-error"),en(h,e.name),en(d,e.name),H(typeof J=="boolean",e,"internal-error"),H(typeof ge=="boolean",e,"internal-error"),en(_,e.name),en(y,e.name),en(T,e.name),en(D,e.name),en(O,e.name),en(x,e.name);const rt=new Ut({uid:V,auth:e,email:d,emailVerified:J,displayName:h,isAnonymous:ge,photoURL:y,phoneNumber:_,tenantId:T,stsTokenManager:qe,createdAt:O,lastLoginAt:x});return j&&Array.isArray(j)&&(rt.providerData=j.map(tt=>Object.assign({},tt))),D&&(rt._redirectEventId=D),rt}static async _fromIdTokenResponse(e,n,s=!1){const i=new hs;i.updateFromServerResponse(n);const r=new Ut({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Er(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Td(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new hs;a.updateFromIdToken(s);const l=new Ut({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new la(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Map;function Wt(t){Gt(t instanceof Function,"Expected a class definition");let e=Hc.get(t);return e?(Gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hc.set(t,e),e)}/**
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
 */class Rd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rd.type="NONE";const jc=Rd;/**
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
 */function ir(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ir(this.userKey,i.apiKey,r),this.fullPersistenceKey=ir("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ds(Wt(jc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Wt(jc);const o=ir(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ut._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ds(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ds(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ad(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Od(e))return"Blackberry";if(xd(e))return"Webos";if(sl(e))return"Safari";if((e.includes("chrome/")||kd(e))&&!e.includes("edge/"))return"Chrome";if(Nd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Pd(t=Ve()){return/firefox\//i.test(t)}function sl(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kd(t=Ve()){return/crios\//i.test(t)}function Ad(t=Ve()){return/iemobile/i.test(t)}function Nd(t=Ve()){return/android/i.test(t)}function Od(t=Ve()){return/blackberry/i.test(t)}function xd(t=Ve()){return/webos/i.test(t)}function Zr(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jy(t=Ve()){var e;return Zr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xy(){return fg()&&document.documentMode===10}function Dd(t=Ve()){return Zr(t)||Nd(t)||xd(t)||Od(t)||/windows phone/i.test(t)||Ad(t)}function Zy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e=[]){let n;switch(t){case"Browser":n=qc(Ve());break;case"Worker":n=`${qc(Ve())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${s}`}/**
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
 */class ev{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function tv(t,e={}){return Rn(t,"GET","/v2/passwordPolicy",Tn(t,e))}/**
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
 */const nv=6;class sv{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gc(this),this.idTokenSubscription=new Gc(this),this.beforeStateQueue=new ev(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sd(this,{idToken:e}),s=await Ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(It(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Er(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ly()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(Ht(this));const n=e?Me(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(Ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(Ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tv(this),n=new sv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Qy(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Md(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yn(t){return Me(t)}class Gc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cg(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rv(t){eo=t}function Ld(t){return eo.loadJS(t)}function ov(){return eo.recaptchaEnterpriseScript}function av(){return eo.gapiScript}function lv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cv="recaptcha-enterprise",uv="NO_RECAPTCHA";class hv{constructor(e){this.type=cv,this.auth=Yn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{$y(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new By(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Bc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(uv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Bc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ov();l.length!==0&&(l+=a),Ld(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Kc(t,e,n,s=!1){const i=new hv(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ca(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Kc(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kc(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t,e){const n=Xa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(yr(r,e??{}))return i;_t(i,"already-initialized")}return n.initialize({options:e})}function fv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function pv(t,e,n){const s=Yn(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Fd(e),{host:o,port:a}=_v(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),mv()}function Fd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _v(t){const e=Fd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:zc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:zc(o)}}}function zc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function gv(t,e){return Rn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(t,e){return Ai(t,"POST","/v1/accounts:signInWithPassword",Tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(t,e){return Ai(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,e))}async function wv(t,e){return Ai(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends il{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new di(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new di(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ca(e,n,"signInWithPassword",yv);case"emailLink":return vv(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ca(e,s,"signUpPassword",gv);case"emailLink":return wv(e,{idToken:n,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return Ai(t,"POST","/v1/accounts:signInWithIdp",Tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="http://localhost";class jn extends il{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Za(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new jn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:Ev,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ps(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bv(t){const e=Hs(js(t)).link,n=e?Hs(js(e)).deep_link_id:null,s=Hs(js(t)).deep_link_id;return(s?Hs(js(s)).link:null)||s||n||e||t}class rl{constructor(e){var n,s,i,r,o,a;const l=Hs(js(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Cv((i=l.mode)!==null&&i!==void 0?i:null);H(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bv(e);try{return new rl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return di._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=rl.parseLink(n);return H(s,"argument-error"),di._fromEmailAndCode(e,s.code,s.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ni extends Ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Ni{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Ni{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Ni{constructor(){super("twitter.com")}static credential(e,n){return jn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return un.credential(n,s)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(t,e){return Ai(t,"POST","/v1/accounts:signUp",Tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ut._fromIdTokenResponse(e,s,i),o=Yc(s);return new qn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Yc(s);return new qn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Yc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Sn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Cr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Cr(e,n,s,i)}}function Wd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Cr._fromErrorAndOperation(t,r,e,s):r})}async function Sv(t,e,n=!1){const s=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qn._forOperation(t,"link",s)}/**
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
 */async function Tv(t,e,n=!1){const{auth:s}=t;if(It(s.app))return Promise.reject(Ht(s));const i="reauthenticate";try{const r=await hi(t,Wd(s,i,e,t),n);H(r.idToken,s,"internal-error");const o=nl(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),qn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_t(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vd(t,e,n=!1){if(It(t.app))return Promise.reject(Ht(t));const s="signIn",i=await Wd(t,s,e),r=await qn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Rv(t,e){return Vd(Yn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(t){const e=Yn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Pv(t,e,n){if(It(t.app))return Promise.reject(Ht(t));const s=Yn(t),o=await ca(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Iv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Bd(t),l}),a=await qn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function kv(t,e,n){return It(t.app)?Promise.reject(Ht(t)):Rv(Me(t),As.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Bd(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t,e){return Me(t).setPersistence(e)}function Nv(t,e,n,s){return Me(t).onIdTokenChanged(e,n,s)}function Ov(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function xv(t,e,n,s){return Me(t).onAuthStateChanged(e,n,s)}function $d(t){return Me(t).signOut()}const br="__sak";/**
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
 */class Hd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(){const t=Ve();return sl(t)||Zr(t)}const Mv=1e3,Lv=10;class jd extends Hd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dv()&&Zy(),this.fallbackToPolling=Dd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Xy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Lv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Mv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jd.type="LOCAL";const qd=jd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends Hd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gd.type="SESSION";const Kd=Gd;/**
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
 */function Fv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class to{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new to(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Fv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}to.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Uv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ol("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function Wv(t){Tt().location.href=t}/**
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
 */function zd(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function Vv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $v(){return zd()?self:null}/**
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
 */const Yd="firebaseLocalStorageDb",Hv=1,Ir="firebaseLocalStorage",Qd="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function no(t,e){return t.transaction([Ir],e?"readwrite":"readonly").objectStore(Ir)}function jv(){const t=indexedDB.deleteDatabase(Yd);return new Oi(t).toPromise()}function ua(){const t=indexedDB.open(Yd,Hv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ir,{keyPath:Qd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ir)?e(s):(s.close(),await jv(),e(await ua()))})})}async function Qc(t,e,n){const s=no(t,!0).put({[Qd]:e,value:n});return new Oi(s).toPromise()}async function qv(t,e){const n=no(t,!1).get(e),s=await new Oi(n).toPromise();return s===void 0?null:s.value}function Jc(t,e){const n=no(t,!0).delete(e);return new Oi(n).toPromise()}const Gv=800,Kv=3;class Jd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ua(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Kv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=to._getInstance($v()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vv(),!this.activeServiceWorker)return;this.sender=new Uv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ua();return await Qc(e,br,"1"),await Jc(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Qc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>qv(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=no(i,!1).getAll();return new Oi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jd.type="LOCAL";const zv=Jd;new ki(3e4,6e4);/**
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
 */function Yv(t,e){return e?Wt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class al extends il{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qv(t){return Vd(t.auth,new al(t),t.bypassAuthState)}function Jv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Tv(n,new al(t),t.bypassAuthState)}async function Xv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Sv(n,new al(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qv;case"linkViaPopup":case"linkViaRedirect":return Xv;case"reauthViaPopup":case"reauthViaRedirect":return Jv;default:_t(this.auth,"internal-error")}}resolve(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new ki(2e3,1e4);class is extends Xd{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const e=ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zv.get())};e()}}is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="pendingRedirect",rr=new Map;class tw extends Xd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const s=await nw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nw(t,e){const n=rw(e),s=iw(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function sw(t,e){rr.set(t._key(),e)}function iw(t){return Wt(t._redirectPersistence)}function rw(t){return ir(ew,t.config.apiKey,t.name)}async function ow(t,e,n=!1){if(It(t.app))return Promise.reject(Ht(t));const s=Yn(t),i=Yv(s,e),o=await new tw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=10*60*1e3;class lw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Zd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xc(e))}saveEventToCache(e){this.cachedEventUids.add(Xc(e)),this.lastProcessedEventTime=Date.now()}}function Xc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dw=/^https?/;async function fw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uw(t);for(const n of e)try{if(pw(n))return}catch{}_t(t,"unauthorized-domain")}function pw(t){const e=aa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!dw.test(n))return!1;if(hw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const _w=new ki(3e4,6e4);function Zc(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mw(t){return new Promise((e,n)=>{var s,i,r;function o(){Zc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zc(),n(St(t,"network-request-failed"))},timeout:_w.get()})}if(!((i=(s=Tt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Tt().gapi)===null||r===void 0)&&r.load)o();else{const a=lv("iframefcb");return Tt()[a]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},Ld(`${av()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw or=null,e})}let or=null;function gw(t){return or=or||mw(t),or}/**
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
 */const yw=new ki(5e3,15e3),vw="__/auth/iframe",ww="emulator/auth/iframe",Ew={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bw(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tl(e,ww):`https://${t.config.authDomain}/${vw}`,s={apiKey:e.apiKey,appName:t.name,v:ks},i=Cw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ps(s).slice(1)}`}async function Iw(t){const e=await gw(t),n=Tt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:bw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ew,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),a=Tt().setTimeout(()=>{r(o)},yw.get());function l(){Tt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Sw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tw=500,Rw=600,Pw="_blank",kw="http://localhost";class eu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Aw(t,e,n,s=Tw,i=Rw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Sw),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ve().toLowerCase();n&&(a=kd(c)?Pw:n),Pd(c)&&(e=e||kw,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,y])=>`${d}${_}=${y},`,"");if(Jy(c)&&a!=="_self")return Nw(e||"",a),new eu(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new eu(h)}function Nw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Ow="__/auth/handler",xw="emulator/auth/handler",Dw=encodeURIComponent("fac");async function tu(t,e,n,s,i,r){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ks,eventId:i};if(e instanceof Ud){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ta(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Ni){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Dw}=${encodeURIComponent(l)}`:"";return`${Mw(t)}?${Ps(a).slice(1)}${c}`}function Mw({config:t}){return t.emulator?tl(t,xw):`https://${t.authDomain}/${Ow}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="webStorageSupport";class Lw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kd,this._completeRedirectFn=ow,this._overrideRedirectResult=sw}async _openPopup(e,n,s,i){var r;Gt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await tu(e,n,s,aa(),i);return Aw(e,o,ol())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await tu(e,n,s,aa(),i);return Wv(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Gt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Iw(e),s=new lw(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oo,{type:Oo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Oo];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dd()||sl()||Zr()}}const Fw=Lw;var nu="@firebase/auth",su="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vw(t){ys(new $n("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Md(t)},c=new iv(s,i,r,l);return fv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ys(new $n("auth-internal",e=>{const n=Yn(e.getProvider("auth").getImmediate());return(s=>new Uw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(nu,su,Ww(t)),mn(nu,su,"esm2017")}/**
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
 */const Bw=5*60,$w=ud("authIdTokenMaxAge")||Bw;let iu=null;const Hw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>$w)return;const i=n==null?void 0:n.token;iu!==i&&(iu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ef(t=md()){const e=Xa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dv(t,{popupRedirectResolver:Fw,persistence:[zv,qd,Kd]}),s=ud("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Hw(r.toString());Ov(n,o,()=>o(n.currentUser)),Nv(n,a=>o(a))}}const i=ld("auth");return i&&pv(n,`http://${i}`),n}function jw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rv({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=St("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",jw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vw("Browser");const gt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},qw={name:"App",setup(){return{store:Fe}},methods:{logout(){Fe.logout(),this.$router.push("/"),$d(ef(this.app)).then(()=>{Fe.logout()}).catch(t=>{console.error(t)})}}},Gw={id:"app"},Kw={key:0},zw={key:1},Yw={key:2},Qw={key:3},Jw={key:4},Xw={key:5};function Zw(t,e,n,s,i,r){const o=ut("router-link"),a=ut("router-view");return L(),U("div",Gw,[m("nav",null,[m("ul",null,[m("li",null,[te(o,{to:"/"},{default:Ze(()=>[$e("Home")]),_:1})]),s.store.isAuthenticated?(L(),U("li",Kw,[te(o,{to:"/dashboard"},{default:Ze(()=>[$e("Dashboard")]),_:1})])):ve("",!0),s.store.isAuthenticated?(L(),U("li",zw,[te(o,{to:"/bestiary"},{default:Ze(()=>[$e("Bestiary")]),_:1})])):ve("",!0),s.store.isAuthenticated?(L(),U("li",Yw,[te(o,{to:"/case-files"},{default:Ze(()=>[$e("Case Files")]),_:1})])):ve("",!0),s.store.isAuthenticated?(L(),U("li",Qw,[te(o,{to:"/profile"},{default:Ze(()=>[$e("Profile")]),_:1})])):ve("",!0),s.store.isAuthenticated?ve("",!0):(L(),U("li",Jw,[te(o,{to:"/login"},{default:Ze(()=>[$e("Login")]),_:1})])),s.store.isAuthenticated?(L(),U("li",Xw,[m("a",{href:"#",onClick:e[0]||(e[0]=(...l)=>r.logout&&r.logout(...l))},"Logout")])):ve("",!0)])]),m("main",null,[te(a)])])}const eE=gt(qw,[["render",Zw],["__scopeId","data-v-b7c4979c"]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ss=typeof document<"u";function tE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function xo(t,e){const n={};for(const s in e){const i=e[s];n[s]=mt(i)?i.map(t):t(i)}return n}const Js=()=>{},mt=Array.isArray,tf=/#/g,nE=/&/g,sE=/\//g,iE=/=/g,rE=/\?/g,nf=/\+/g,oE=/%5B/g,aE=/%5D/g,sf=/%5E/g,lE=/%60/g,rf=/%7B/g,cE=/%7C/g,of=/%7D/g,uE=/%20/g;function ll(t){return encodeURI(""+t).replace(cE,"|").replace(oE,"[").replace(aE,"]")}function hE(t){return ll(t).replace(rf,"{").replace(of,"}").replace(sf,"^")}function ha(t){return ll(t).replace(nf,"%2B").replace(uE,"+").replace(tf,"%23").replace(nE,"%26").replace(lE,"`").replace(rf,"{").replace(of,"}").replace(sf,"^")}function dE(t){return ha(t).replace(iE,"%3D")}function fE(t){return ll(t).replace(tf,"%23").replace(rE,"%3F")}function pE(t){return t==null?"":fE(t).replace(sE,"%2F")}function fi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const _E=/\/$/,mE=t=>t.replace(_E,"");function Do(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=wE(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:fi(o)}}function gE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ru(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yE(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&vs(e.matched[s],n.matched[i])&&af(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function af(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vE(t[n],e[n]))return!1;return!0}function vE(t,e){return mt(t)?ou(t,e):mt(e)?ou(e,t):t===e}function ou(t,e){return mt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function wE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}var pi;(function(t){t.pop="pop",t.push="push"})(pi||(pi={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function EE(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mE(t)}const CE=/^[^#]+#/;function bE(t,e){return t.replace(CE,"#")+e}function IE(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const so=()=>({left:window.scrollX,top:window.scrollY});function SE(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=IE(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function au(t,e){return(history.state?history.state.position-e:-1)+t}const da=new Map;function TE(t,e){da.set(t,e)}function RE(t){const e=da.get(t);return da.delete(t),e}let PE=()=>location.protocol+"//"+location.host;function lf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),ru(l,"")}return ru(n,t)+s+i}function kE(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=lf(t,location),y=n.value,T=e.value;let D=0;if(d){if(n.value=_,e.value=d,o&&o===y){o=null;return}D=T?d.position-T.position:0}else s(_);i.forEach(O=>{O(n.value,y,{delta:D,type:pi.pop,direction:D?D>0?Xs.forward:Xs.back:Xs.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(ie({},d.state,{scroll:so()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function lu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?so():null}}function AE(t){const{history:e,location:n}=window,s={value:lf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:PE()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=ie({},e.state,lu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ie({},i.value,e.state,{forward:l,scroll:so()});r(u.current,u,!0);const h=ie({},lu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function NE(t){t=EE(t);const e=AE(t),n=kE(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ie({location:"",base:t,go:s,createHref:bE.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function OE(t){return typeof t=="string"||t&&typeof t=="object"}function cf(t){return typeof t=="string"||typeof t=="symbol"}const tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},uf=Symbol("");var cu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cu||(cu={}));function ws(t,e){return ie(new Error,{type:t,[uf]:!0},e)}function Mt(t,e){return t instanceof Error&&uf in t&&(e==null||!!(t.type&e))}const uu="[^/]+?",xE={sensitive:!1,strict:!1,start:!0,end:!0},DE=/[.+*?^${}()[\]/\\]/g;function ME(t,e){const n=ie({},xE,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(DE,"\\$&"),_+=40;else if(d.type===1){const{value:y,repeatable:T,optional:D,regexp:O}=d;r.push({name:y,repeatable:T,optional:D});const x=O||uu;if(x!==uu){_+=10;try{new RegExp(`(${x})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+J.message)}}let V=T?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(V=D&&c.length<2?`(?:/${V})`:"/"+V),D&&(V+="?"),i+=V,_+=20,D&&(_+=-8),T&&(_+=-20),x===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",y=r[d-1];h[y.name]=_&&y.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:y,repeatable:T,optional:D}=_,O=y in c?c[y]:"";if(mt(O)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=mt(O)?O.join("/"):O;if(!x)if(D)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=x}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function LE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function FE(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=LE(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(hu(s))return 1;if(hu(i))return-1}return i.length-s.length}function hu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const UE={type:0,value:""},WE=/[a-zA-Z0-9_]/;function VE(t){if(!t)return[[]];if(t==="/")return[[UE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:WE.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function BE(t,e,n){const s=ME(VE(t.path),n),i=ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function $E(t,e){const n=[],s=new Map;e=pu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,y=HE(u);y.aliasOf=d&&d.record;const T=pu(e,u),D=[y];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const J of V)D.push(ie({},y,{components:d?d.record.components:y.components,path:J,aliasOf:d?d.record:y}))}let O,x;for(const V of D){const{path:J}=V;if(h&&J[0]!=="/"){const ge=h.record.path,j=ge[ge.length-1]==="/"?"":"/";V.path=h.record.path+(J&&j+J)}if(O=BE(V,h,T),d?d.alias.push(O):(x=x||O,x!==O&&x.alias.push(O),_&&u.name&&!fu(O)&&o(u.name)),y.children){const ge=y.children;for(let j=0;j<ge.length;j++)r(ge[j],O,d&&d.children[j])}d=d||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&l(O)}return x?()=>{o(x)}:Js}function o(u){if(cf(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&FE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!hf(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!fu(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},y,T;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ws(1,{location:u});T=d.record.name,_=ie(du(h.params,d.keys.filter(x=>!x.optional).concat(d.parent?d.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),u.params&&du(u.params,d.keys.map(x=>x.name))),y=d.stringify(_)}else if(u.path!=null)y=u.path,d=n.find(x=>x.re.test(y)),d&&(_=d.parse(y),T=d.record.name);else{if(d=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw ws(1,{location:u,currentLocation:h});T=d.record.name,_=ie({},h.params,u.params),y=d.stringify(_)}const D=[];let O=d;for(;O;)D.unshift(O.record),O=O.parent;return{name:T,path:y,params:_,matched:D,meta:qE(D)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function du(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function HE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function jE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function fu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qE(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function pu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function hf(t,e){return e.children.some(n=>n===t||hf(t,n))}function GE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(nf," "),o=r.indexOf("="),a=fi(o<0?r:r.slice(0,o)),l=o<0?null:fi(r.slice(o+1));if(a in e){let c=e[a];mt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function _u(t){let e="";for(let n in t){const s=t[n];if(n=dE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(mt(s)?s.map(r=>r&&ha(r)):[s&&ha(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function KE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=mt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const zE=Symbol(""),mu=Symbol(""),cl=Symbol(""),df=Symbol(""),fa=Symbol("");function Fs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function on(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ws(4,{from:n,to:e})):d instanceof Error?l(d):OE(d)?l(ws(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Mo(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(YE(l)){const u=(l.__vccOpts||l)[e];u&&r.push(on(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=tE(u)?u.default:u;o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&on(_,n,s,o,a,i)()}))}}return r}function YE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function gu(t){const e=$t(cl),n=$t(df),s=lt(()=>{const l=ls(t.to);return e.resolve(l)}),i=lt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(vs.bind(null,u));if(d>-1)return d;const _=yu(l[c-2]);return c>1&&yu(u)===_&&h[h.length-1].path!==_?h.findIndex(vs.bind(null,l[c-2])):d}),r=lt(()=>i.value>-1&&ZE(n.params,s.value.params)),o=lt(()=>i.value>-1&&i.value===n.matched.length-1&&af(n.params,s.value.params));function a(l={}){return XE(l)?e[ls(t.replace)?"replace":"push"](ls(t.to)).catch(Js):Promise.resolve()}return{route:s,href:lt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const QE=Lh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gu,setup(t,{slots:e}){const n=Si(gu(t)),{options:s}=$t(cl),i=lt(()=>({[vu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[vu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:sd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),JE=QE;function XE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ZE(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!mt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function yu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vu=(t,e,n)=>t??e??n,eC=Lh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=$t(fa),i=lt(()=>t.route||s.value),r=$t(mu,0),o=lt(()=>{let c=ls(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=lt(()=>i.value.matched[o.value]);er(mu,lt(()=>o.value+1)),er(zE,a),er(fa,i);const l=__();return Xi(()=>[l.value,a.value,t.name],([c,u,h],[d,_,y])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!vs(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return wu(n.default,{Component:d,route:c});const _=h.props[u],y=_?_===!0?c.params:typeof _=="function"?_(c):_:null,D=sd(d,ie({},y,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return wu(n.default,{Component:D,route:c})||D}}});function wu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tC=eC;function nC(t){const e=$E(t.routes,t),n=t.parseQuery||GE,s=t.stringifyQuery||_u,i=t.history,r=Fs(),o=Fs(),a=Fs(),l=m_(tn);let c=tn;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xo.bind(null,w=>""+w),h=xo.bind(null,pE),d=xo.bind(null,fi);function _(w,A){let P,M;return cf(w)?(P=e.getRecordMatcher(w),M=A):M=w,e.addRoute(M,P)}function y(w){const A=e.getRecordMatcher(w);A&&e.removeRoute(A)}function T(){return e.getRoutes().map(w=>w.record)}function D(w){return!!e.getRecordMatcher(w)}function O(w,A){if(A=ie({},A||l.value),typeof w=="string"){const p=Do(n,w,A.path),g=e.resolve({path:p.path},A),E=i.createHref(p.fullPath);return ie(p,g,{params:d(g.params),hash:fi(p.hash),redirectedFrom:void 0,href:E})}let P;if(w.path!=null)P=ie({},w,{path:Do(n,w.path,A.path).path});else{const p=ie({},w.params);for(const g in p)p[g]==null&&delete p[g];P=ie({},w,{params:h(p)}),A.params=h(A.params)}const M=e.resolve(P,A),se=w.hash||"";M.params=u(d(M.params));const ye=gE(s,ie({},w,{hash:hE(se),path:M.path})),f=i.createHref(ye);return ie({fullPath:ye,hash:se,query:s===_u?KE(w.query):w.query||{}},M,{redirectedFrom:void 0,href:f})}function x(w){return typeof w=="string"?Do(n,w,l.value.path):ie({},w)}function V(w,A){if(c!==w)return ws(8,{from:A,to:w})}function J(w){return Se(w)}function ge(w){return J(ie(x(w),{replace:!0}))}function j(w){const A=w.matched[w.matched.length-1];if(A&&A.redirect){const{redirect:P}=A;let M=typeof P=="function"?P(w):P;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=x(M):{path:M},M.params={}),ie({query:w.query,hash:w.hash,params:M.path!=null?{}:w.params},M)}}function Se(w,A){const P=c=O(w),M=l.value,se=w.state,ye=w.force,f=w.replace===!0,p=j(P);if(p)return Se(ie(x(p),{state:typeof p=="object"?ie({},se,p.state):se,force:ye,replace:f}),A||P);const g=P;g.redirectedFrom=A;let E;return!ye&&yE(s,M,P)&&(E=ws(16,{to:g,from:M}),vt(M,M,!0,!1)),(E?Promise.resolve(E):tt(g,M)).catch(v=>Mt(v)?Mt(v,2)?v:Xt(v):ee(v,g,M)).then(v=>{if(v){if(Mt(v,2))return Se(ie({replace:f},x(v.to),{state:typeof v.to=="object"?ie({},se,v.to.state):se,force:ye}),A||g)}else v=kn(g,M,!0,f,se);return Jt(g,M,v),v})}function qe(w,A){const P=V(w,A);return P?Promise.reject(P):Promise.resolve()}function rt(w){const A=es.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(w):w()}function tt(w,A){let P;const[M,se,ye]=sC(w,A);P=Mo(M.reverse(),"beforeRouteLeave",w,A);for(const p of M)p.leaveGuards.forEach(g=>{P.push(on(g,w,A))});const f=qe.bind(null,w,A);return P.push(f),Le(P).then(()=>{P=[];for(const p of r.list())P.push(on(p,w,A));return P.push(f),Le(P)}).then(()=>{P=Mo(se,"beforeRouteUpdate",w,A);for(const p of se)p.updateGuards.forEach(g=>{P.push(on(g,w,A))});return P.push(f),Le(P)}).then(()=>{P=[];for(const p of ye)if(p.beforeEnter)if(mt(p.beforeEnter))for(const g of p.beforeEnter)P.push(on(g,w,A));else P.push(on(p.beforeEnter,w,A));return P.push(f),Le(P)}).then(()=>(w.matched.forEach(p=>p.enterCallbacks={}),P=Mo(ye,"beforeRouteEnter",w,A,rt),P.push(f),Le(P))).then(()=>{P=[];for(const p of o.list())P.push(on(p,w,A));return P.push(f),Le(P)}).catch(p=>Mt(p,8)?p:Promise.reject(p))}function Jt(w,A,P){a.list().forEach(M=>rt(()=>M(w,A,P)))}function kn(w,A,P,M,se){const ye=V(w,A);if(ye)return ye;const f=A===tn,p=ss?history.state:{};P&&(M||f?i.replace(w.fullPath,ie({scroll:f&&p&&p.scroll},se)):i.push(w.fullPath,se)),l.value=w,vt(w,A,P,f),Xt()}let yt;function Ds(){yt||(yt=i.listen((w,A,P)=>{if(!Vi.listening)return;const M=O(w),se=j(M);if(se){Se(ie(se,{replace:!0}),M).catch(Js);return}c=M;const ye=l.value;ss&&TE(au(ye.fullPath,P.delta),so()),tt(M,ye).catch(f=>Mt(f,12)?f:Mt(f,2)?(Se(f.to,M).then(p=>{Mt(p,20)&&!P.delta&&P.type===pi.pop&&i.go(-1,!1)}).catch(Js),Promise.reject()):(P.delta&&i.go(-P.delta,!1),ee(f,M,ye))).then(f=>{f=f||kn(M,ye,!1),f&&(P.delta&&!Mt(f,8)?i.go(-P.delta,!1):P.type===pi.pop&&Mt(f,20)&&i.go(-1,!1)),Jt(M,ye,f)}).catch(Js)}))}let Xn=Fs(),Te=Fs(),oe;function ee(w,A,P){Xt(w);const M=Te.list();return M.length?M.forEach(se=>se(w,A,P)):console.error(w),Promise.reject(w)}function Dt(){return oe&&l.value!==tn?Promise.resolve():new Promise((w,A)=>{Xn.add([w,A])})}function Xt(w){return oe||(oe=!w,Ds(),Xn.list().forEach(([A,P])=>w?P(w):A()),Xn.reset()),w}function vt(w,A,P,M){const{scrollBehavior:se}=t;if(!ss||!se)return Promise.resolve();const ye=!P&&RE(au(w.fullPath,0))||(M||!P)&&history.state&&history.state.scroll||null;return $a().then(()=>se(w,A,ye)).then(f=>f&&SE(f)).catch(f=>ee(f,w,A))}const Ge=w=>i.go(w);let Zn;const es=new Set,Vi={currentRoute:l,listening:!0,addRoute:_,removeRoute:y,hasRoute:D,getRoutes:T,resolve:O,options:t,push:J,replace:ge,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Te.add,isReady:Dt,install(w){const A=this;w.component("RouterLink",JE),w.component("RouterView",tC),w.config.globalProperties.$router=A,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ls(l)}),ss&&!Zn&&l.value===tn&&(Zn=!0,J(i.location).catch(se=>{}));const P={};for(const se in tn)Object.defineProperty(P,se,{get:()=>l.value[se],enumerable:!0});w.provide(cl,A),w.provide(df,Eh(P)),w.provide(fa,l);const M=w.unmount;es.add(w),w.unmount=function(){es.delete(w),es.size<1&&(c=tn,yt&&yt(),yt=null,l.value=tn,Zn=!1,oe=!1),M()}}};function Le(w){return w.reduce((A,P)=>A.then(()=>rt(P)),Promise.resolve())}return Vi}function sC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>vs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>vs(c,l))||i.push(l))}return[n,s,i]}const iC={name:"Home"},rC=t=>(kt("data-v-e9a2cc9c"),t=t(),At(),t),oC={class:"home"},aC=rC(()=>m("h1",null,"Welcome to the Monster of the Week Portal",-1));function lC(t,e,n,s,i,r){const o=ut("router-link");return L(),U("div",oC,[aC,te(o,{to:"/Login"},{default:Ze(()=>[$e("Go to Dashboard")]),_:1})])}const cC=gt(iC,[["render",lC],["__scopeId","data-v-e9a2cc9c"]]);var uC="firebase",hC="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(uC,hC,"app");var Eu={};const Cu="@firebase/database",bu="1.0.5";/**
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
 */let ff="";function dC(t){ff=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ci(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Nt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fC(e)}}catch{}return new pC},Fn=pf("localStorage"),_C=pf("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new Qa("@firebase/database"),mC=function(){let t=1;return function(){return t++}}(),_f=function(t){const e=Sg(t),n=new Eg;n.update(e);const s=n.digest();return Ka.encodeByteArray(s)},xi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xi.apply(null,s):typeof s=="object"?e+=be(s):e+=s,e+=" "}return e};let Zs=null,Iu=!0;const gC=function(t,e){b(!e,"Can't turn on custom loggers persistently."),ps.logLevel=le.VERBOSE,Zs=ps.log.bind(ps)},Oe=function(...t){if(Iu===!0&&(Iu=!1,Zs===null&&_C.get("logging_enabled")===!0&&gC()),Zs){const e=xi.apply(null,t);Zs(e)}},Di=function(t){return function(...e){Oe(t,...e)}},pa=function(...t){const e="FIREBASE INTERNAL ERROR: "+xi(...t);ps.error(e)},Kt=function(...t){const e=`FIREBASE FATAL ERROR: ${xi(...t)}`;throw ps.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+xi(...t);ps.warn(e)},yC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ul=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Es="[MIN_NAME]",Gn="[MAX_NAME]",Qn=function(t,e){if(t===e)return 0;if(t===Es||e===Gn)return-1;if(e===Es||t===Gn)return 1;{const n=Su(t),s=Su(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},wC=function(t,e){return t===e?0:t<e?-1:1},Us=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},hl=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=be(e[s]),n+=":",n+=hl(t[e[s]]);return n+="}",n},mf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function De(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gf=function(t){b(!ul(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},EC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const IC=new RegExp("^-?(0*)\\d{1,10}$"),SC=-2147483648,TC=2147483647,Su=function(t){if(IC.test(t)){const e=Number(t);if(e>=SC&&e<=TC)return e}return null},Ns=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},RC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ei=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class PC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class ar{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ar.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="5",yf="v",vf="s",wf="r",Ef="f",Cf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bf="ls",If="p",_a="ac",Sf="websocket",Tf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function AC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Pf(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Sf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Tf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);AC(t)&&(n.ns=t.namespace);const i=[];return De(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.counters_={}}incrementCounter(e,n=1){Nt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ig(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo={},Fo={};function fl(t){const e=t.toString();return Lo[e]||(Lo[e]=new NC),Lo[e]}function OC(t,e){const n=t.toString();return Fo[n]||(Fo[n]=e()),Fo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ns(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="start",DC="close",MC="pLPCommand",LC="pRTLPCB",kf="id",Af="pw",Nf="ser",FC="cb",UC="seg",WC="ts",VC="d",BC="dframe",Of=1870,xf=30,$C=Of-xf,HC=25e3,jC=3e4;class rs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Di(e),this.stats_=fl(n),this.urlFn=l=>(this.appCheckToken&&(l[_a]=this.appCheckToken),Pf(n,Tf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jC)),vC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Tu)this.id=a,this.password=l;else if(o===DC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Tu]="t",s[Nf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[FC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[yf]=dl,this.transportSessionId&&(s[vf]=this.transportSessionId),this.lastSessionId&&(s[bf]=this.lastSessionId),this.applicationId&&(s[If]=this.applicationId),this.appCheckToken&&(s[_a]=this.appCheckToken),typeof location<"u"&&location.hostname&&Cf.test(location.hostname)&&(s[wf]=Ef);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){rs.forceAllow_=!0}static forceDisallow(){rs.forceDisallow_=!0}static isAvailable(){return rs.forceAllow_?!0:!rs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!EC()&&!CC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=od(n),i=mf(s,$C);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[BC]="t",s[kf]=e,s[Af]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mC(),window[MC+this.uniqueCallbackIdentifier]=e,window[LC+this.uniqueCallbackIdentifier]=n,this.myIFrame=pl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Oe("frame writing exception"),a.stack&&Oe(a.stack),Oe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Oe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kf]=this.myID,e[Af]=this.myPW,e[Nf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xf+s.length<=Of;){const o=this.pendingSegs.shift();s=s+"&"+UC+i+"="+o.seg+"&"+WC+i+"="+o.ts+"&"+VC+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(HC)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=16384,GC=45e3;let Sr=null;typeof MozWebSocket<"u"?Sr=MozWebSocket:typeof WebSocket<"u"&&(Sr=WebSocket);class ct{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Di(this.connId),this.stats_=fl(n),this.connURL=ct.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[yf]=dl,typeof location<"u"&&location.hostname&&Cf.test(location.hostname)&&(o[wf]=Ef),n&&(o[vf]=n),s&&(o[bf]=s),i&&(o[_a]=i),r&&(o[If]=r),Pf(e,Sf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fn.set("previous_websocket_failure",!0);try{let s;dd(),this.mySock=new Sr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Sr!==null&&!ct.forceDisallow_}static previouslyFailed(){return Fn.isInMemoryStorage||Fn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ci(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=mf(n,qC);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(GC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ct.responsesRequiredToBeHealthy=2;ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[rs,ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ct&&ct.isAvailable();let s=n&&!ct.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ct];else{const i=this.transports_=[];for(const r of _i.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);_i.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_i.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=6e4,zC=5e3,YC=10*1024,QC=100*1024,Uo="t",Ru="d",JC="s",Pu="r",XC="e",ku="o",Au="a",Nu="n",Ou="p",ZC="h";class eb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Di("c:"+this.id+":"),this.transportManager_=new _i(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Uo in e){const n=e[Uo];n===Au?this.upgradeIfSecondaryHealthy_():n===Pu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ku&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Us("t",e),s=Us("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ou,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Au,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Us("t",e),s=Us("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Us(Uo,e);if(Ru in e){const s=e[Ru];if(n===ZC){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Nu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===JC?this.onConnectionShutdown_(s):n===Pu?this.onReset_(s):n===XC?pa("Server Error: "+s):n===ku?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dl!==s&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(KC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ou,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Mf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ya()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Tr}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=32,Du=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ue("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function _l(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function tb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function mi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Lf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function we(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ue(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=K(t),s=K(e);if(n===null)return e;if(n===s)return He(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function nb(t,e){const n=mi(t,0),s=mi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Qn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function ml(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function st(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class sb{constructor(e,n){this.errorPrefix_=n,this.parts_=mi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xr(this.parts_[s]);Ff(this)}}function ib(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xr(e),Ff(t)}function rb(t){const e=t.parts_.pop();t.byteLength_-=Xr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ff(t){if(t.byteLength_>Du)throw new Error(t.errorPrefix_+"has a key path longer than "+Du+" bytes ("+t.byteLength_+").");if(t.parts_.length>xu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xu+") or object contains a cycle "+xn(t))}function xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Mf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new gl}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=1e3,ob=60*5*1e3,Mu=30*1e3,ab=1.3,lb=3e4,cb="server_kill",Lu=3;class jt extends Df{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=jt.nextPersistentConnectionId_++,this.log_=Di("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ws,this.maxReconnectDelay_=ob,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!dd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(be(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ri,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;jt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Nt(e,"w")){const s=gs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||wg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Mu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pa("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lb&&(this.reconnectDelay_=Ws),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ab)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Oe("getToken() completed but was canceled"):(Oe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new eb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{je(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(cb)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&je(h),l())}}}interrupt(e){Oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ta(this.interruptReasons_)&&(this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>hl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ue(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Oe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lu&&(this.reconnectDelay_=Mu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Oe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ff.replace(/\./g,"-")]=1,Ya()?e["framework.cordova"]=1:hd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tr.getInstance().currentlyOnline();return ta(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0;jt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class io{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new z(Es,e),i=new z(Es,n);return this.compare(s,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi;class Uf extends io{static get __EMPTY_NODE(){return zi}static set __EMPTY_NODE(e){zi=e}compare(e,n){return Qn(e.name,n.name)}isDefinedOn(e){throw Rs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Gn,zi)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,zi)}toString(){return".key"}}const _s=new Uf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ke.RED,this.left=i??Ye.EMPTY_NODE,this.right=r??Ye.EMPTY_NODE}copy(e,n,s,i,r){return new ke(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class ub{copy(e,n,s,i,r){return this}insert(e,n,s){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,n=Ye.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ye(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Yi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Yi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Yi(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new ub;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t,e){return Qn(t.name,e.name)}function yl(t,e){return Qn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma;function db(t){ma=t}const Wf=function(t){return typeof t=="number"?"number:"+gf(t):"string:"+t},Vf=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Nt(e,".sv"),"Priority must be a string or number.")}else b(t===ma||t.isEmpty(),"priority of unexpected type.");b(t===ma||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu;class Pe{constructor(e,n=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Vf(this.priorityNode_)}static set __childrenNodeConstructor(e){Fu=e}static get __childrenNodeConstructor(){return Fu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:K(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=K(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gf(this.value_):e+=this.value_,this.lazyHash_=_f(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Pe.VALUE_TYPE_ORDER.indexOf(n),r=Pe.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bf,$f;function fb(t){Bf=t}function pb(t){$f=t}class _b extends io{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Qn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Gn,new Pe("[PRIORITY-POST]",$f))}makePost(e,n){const s=Bf(e);return new z(n,new Pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ee=new _b;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=Math.log(2);class gb{constructor(e){const n=r=>parseInt(Math.log(r)/mb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ke(d,h.node,ke.BLACK,null,null);{const _=parseInt(u/2,10)+l,y=i(l,_),T=i(_+1,c);return h=t[_],d=n?n(h):h,new ke(d,h.node,ke.BLACK,y,T)}},r=function(l){let c=null,u=null,h=t.length;const d=function(y,T){const D=h-y,O=h;h-=y;const x=i(D+1,O),V=t[D],J=n?n(V):V;_(new ke(J,V.node,T,null,x))},_=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const T=l.nextBitIsOne(),D=Math.pow(2,l.count-(y+1));T?d(D,ke.BLACK):(d(D,ke.BLACK),d(D,ke.RED))}return u},o=new gb(t.length),a=r(o);return new Ye(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo;const ns={};class Vt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(ns&&Ee,"ChildrenNode.ts has not been loaded"),Wo=Wo||new Vt({".priority":ns},{".priority":Ee}),Wo}get(e){const n=gs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ye?n:null}hasIndex(e){return Nt(this.indexSet_,e.toString())}addIndex(e,n){b(e!==_s,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Rr(s,e.getCompare()):a=ns;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Vt(u,c)}addToIndexes(e,n){const s=gr(this.indexes_,(i,r)=>{const o=gs(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===ns)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Rr(a,o.getCompare())}else return ns;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new Vt(s,this.indexSet_)}removeFromIndexes(e,n){const s=gr(this.indexes_,i=>{if(i===ns)return i;{const r=n.get(e.name);return r?i.remove(new z(e.name,r)):i}});return new Vt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Vf(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Vs||(Vs=new B(new Ye(yl),null,Vt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vs}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vs:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Vs:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=K(e);if(s===null)return n;{b(K(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(fe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wf(this.getPriority().val())+":"),this.forEachChild(Ee,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":_f(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mi?-1:0}withIndex(e){if(e===_s||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_s||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ee),i=n.getIterator(Ee);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_s?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yb extends B{constructor(){super(new Ye(yl),B.EMPTY_NODE,Vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Mi=new yb;Object.defineProperties(z,{MIN:{value:new z(Es,B.EMPTY_NODE)},MAX:{value:new z(Gn,Mi)}});Uf.__EMPTY_NODE=B.EMPTY_NODE;Pe.__childrenNodeConstructor=B;db(Mi);pb(Mi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=!0;function Ce(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pe(n,Ce(e))}if(!(t instanceof Array)&&vb){const n=[];let s=!1;if(De(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ce(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return B.EMPTY_NODE;const r=Rr(n,hb,o=>o.name,yl);if(s){const o=Rr(n,Ee.getCompare());return new B(r,Ce(e),new Vt({".priority":o},{".priority":Ee}))}else return new B(r,Ce(e),Vt.Default)}else{let n=B.EMPTY_NODE;return De(t,(s,i)=>{if(Nt(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}fb(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb extends io{constructor(e){super(),this.indexPath_=e,b(!Y(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Qn(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new z(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Mi);return new z(Gn,e)}toString(){return mi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb extends io{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Qn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const s=Ce(e);return new z(n,s)}toString(){return".value"}}const Cb=new Eb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t){return{type:"value",snapshotNode:t}}function Cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function yi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(gi(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Cs(n,s)):o.trackChildChange(yi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,r)=>{n.hasChild(i)||s.trackChildChange(gi(i,r))}),n.isLeafNode()||n.forEachChild(Ee,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(yi(i,r,o))}else s.trackChildChange(Cs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.indexedFilter_=new vl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vi.getStartPost_(e),this.endPost_=vi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new z(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(Ee,(o,a)=>{r.matches(new z(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new vi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new z(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new z(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(yi(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(gi(n,h));const T=a.updateImmediateChild(n,B.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Cs(d.name,d.node)),T.updateImmediateChild(d.name,d.node)):T}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(gi(c.name,c.node)),r.trackChildChange(Cs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Es}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new wl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sb(t){return t.loadsAllData()?new vl(t.getIndex()):t.hasLimit()?new Ib(t):new vi(t)}function Uu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===Cb?n="$value":t.index_===_s?n="$key":(b(t.index_ instanceof wb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=be(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+be(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=be(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Df{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Di("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Pr.getListenId_(e,s),a={};this.listens_[o]=a;const l=Uu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),gs(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Pr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Uu(e._queryParams),s=e._path.toString(),i=new Ri;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ps(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ci(a.responseText)}catch{je("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return{value:null,children:new Map}}function jf(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=K(e);t.children.has(s)||t.children.set(s,kr());const i=t.children.get(s);e=fe(e),jf(i,e,n)}}function ga(t,e,n){t.value!==null?n(e,t.value):Rb(t,(s,i)=>{const r=new ue(e.toString()+"/"+s);ga(i,r,n)})}function Rb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&De(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=10*1e3,kb=30*1e3,Ab=5*60*1e3;class Nb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Pb(e);const s=Vu+(kb-Vu)*Math.random();ei(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;De(e,(i,r)=>{r>0&&Nt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ei(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ab))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dt||(dt={}));function El(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=dt.ACK_USER_WRITE,this.source=El()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new Ar(Z(),n,this.revert)}}else return b(K(this.path)===e,"operationForChild called for unrelated child."),new Ar(fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.source=e,this.path=n,this.type=dt.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new wi(this.source,Z()):new wi(this.source,fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=dt.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new Kn(this.source,Z(),n.value):new bs(this.source,Z(),n)}else return b(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bs(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ob{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xb(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(bb(o.childName,o.snapshotNode))}),Bs(t,i,"child_removed",e,s,n),Bs(t,i,"child_added",e,s,n),Bs(t,i,"child_moved",r,s,n),Bs(t,i,"child_changed",e,s,n),Bs(t,i,"value",e,s,n),i}function Bs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Mb(t,a,l)),o.forEach(a=>{const l=Db(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Db(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Mb(t,e,n){if(e.childName==null||n.childName==null)throw Rs("Should only compare child_ events.");const s=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t,e){return{eventCache:t,serverCache:e}}function ti(t,e,n,s){return ro(new En(e,n,s),t.serverCache)}function qf(t,e,n,s){return ro(t.eventCache,new En(e,n,s))}function Nr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo;const Lb=()=>(Vo||(Vo=new Ye(wC)),Vo);class de{constructor(e,n=Lb()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return De(e,(s,i)=>{n=n.set(new ue(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(Y(e))return null;{const s=K(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(fe(e),n);return r!=null?{path:we(new ue(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=K(e),s=this.children.get(n);return s!==null?s.subtree(fe(e)):new de(null)}}set(e,n){if(Y(e))return new de(n,this.children);{const s=K(e),r=(this.children.get(s)||new de(null)).set(fe(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=K(e),s=this.children.get(n);if(s){const i=s.remove(fe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(Y(e))return this.value;{const n=K(e),s=this.children.get(n);return s?s.get(fe(e)):null}}setTree(e,n){if(Y(e))return n;{const s=K(e),r=(this.children.get(s)||new de(null)).setTree(fe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(we(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Y(e))return null;{const r=K(e),o=this.children.get(r);return o?o.findOnPath_(fe(e),we(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(Y(e))return this;{this.value&&s(n,this.value);const i=K(e),r=this.children.get(i);return r?r.foreachOnPath_(fe(e),we(n,i),s):new de(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(we(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new de(null))}}function ni(t,e,n){if(Y(e))return new pt(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=He(i,e);return r=r.updateChild(o,n),new pt(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new pt(r)}}}function ya(t,e,n){let s=t;return De(n,(i,r)=>{s=ni(s,we(e,i),r)}),s}function Bu(t,e){if(Y(e))return pt.empty();{const n=t.writeTree_.setTree(e,new de(null));return new pt(n)}}function va(t,e){return Jn(t,e)!=null}function Jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function $u(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(s,i)=>{e.push(new z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new z(s,i.value))}),e}function gn(t,e){if(Y(e))return t;{const n=Jn(t,e);return n!=null?new pt(new de(n)):new pt(t.writeTree_.subtree(e))}}function wa(t){return t.writeTree_.isEmpty()}function Is(t,e){return Gf(Z(),t.writeTree_,e)}function Gf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Gf(we(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(we(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t,e){return Qf(e,t)}function Fb(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ni(t.visibleWrites,e,n)),t.lastWriteId=s}function Ub(t,e,n,s){b(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=ya(t.visibleWrites,e,n),t.lastWriteId=s}function Wb(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Vb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Bb(a,s.path)?i=!1:st(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return $b(t),!0;if(s.snap)t.visibleWrites=Bu(t.visibleWrites,s.path);else{const a=s.children;De(a,l=>{t.visibleWrites=Bu(t.visibleWrites,we(s.path,l))})}return!0}else return!1}function Bb(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(we(t.path,n),e))return!0;return!1}function $b(t){t.visibleWrites=Kf(t.allWrites,Hb,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Hb(t){return t.visible}function Kf(t,e,n){let s=pt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)st(n,o)?(a=He(n,o),s=ni(s,a,r.snap)):st(o,n)&&(a=He(o,n),s=ni(s,Z(),r.snap.getChild(a)));else if(r.children){if(st(n,o))a=He(n,o),s=ya(s,a,r.children);else if(st(o,n))if(a=He(o,n),Y(a))s=ya(s,Z(),r.children);else{const l=gs(r.children,K(a));if(l){const c=l.getChild(fe(a));s=ni(s,Z(),c)}}}else throw Rs("WriteRecord should have .snap or .children")}}return s}function zf(t,e,n,s,i){if(!s&&!i){const r=Jn(t.visibleWrites,e);if(r!=null)return r;{const o=gn(t.visibleWrites,e);if(wa(o))return n;if(n==null&&!va(o,Z()))return null;{const a=n||B.EMPTY_NODE;return Is(o,a)}}}else{const r=gn(t.visibleWrites,e);if(!i&&wa(r))return n;if(!i&&n==null&&!va(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=Kf(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Is(a,l)}}}function jb(t,e,n){let s=B.EMPTY_NODE;const i=Jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=gn(t.visibleWrites,e);return n.forEachChild(Ee,(o,a)=>{const l=Is(gn(r,new ue(o)),a);s=s.updateImmediateChild(o,l)}),$u(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=gn(t.visibleWrites,e);return $u(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function qb(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=we(e,n);if(va(t.visibleWrites,r))return null;{const o=gn(t.visibleWrites,r);return wa(o)?i.getChild(n):Is(o,i.getChild(n))}}function Gb(t,e,n,s){const i=we(e,n),r=Jn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=gn(t.visibleWrites,i);return Is(o,s.getNode().getImmediateChild(n))}else return null}function Kb(t,e){return Jn(t.visibleWrites,e)}function zb(t,e,n,s,i,r,o){let a;const l=gn(t.visibleWrites,e),c=Jn(l,Z());if(c!=null)a=c;else if(n!=null)a=Is(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Yb(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function Or(t,e,n,s){return zf(t.writeTree,t.treePath,e,n,s)}function Il(t,e){return jb(t.writeTree,t.treePath,e)}function Hu(t,e,n,s){return qb(t.writeTree,t.treePath,e,n,s)}function xr(t,e){return Kb(t.writeTree,we(t.treePath,e))}function Qb(t,e,n,s,i,r){return zb(t.writeTree,t.treePath,e,n,s,i,r)}function Sl(t,e,n){return Gb(t.writeTree,t.treePath,e,n)}function Yf(t,e){return Qf(we(t.treePath,e),t.writeTree)}function Qf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,yi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,gi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Cs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,yi(s,e.snapshotNode,i.oldSnap));else throw Rs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Jf=new Xb;class Tl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new En(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zn(this.viewCache_),r=Qb(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){return{filter:t}}function eI(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tI(t,e,n,s,i){const r=new Jb;let o,a;if(n.type===dt.OVERWRITE){const c=n;c.source.fromUser?o=Ea(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Y(c.path),o=Dr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===dt.MERGE){const c=n;c.source.fromUser?o=sI(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ca(t,e,c.path,c.children,s,i,a,r))}else if(n.type===dt.ACK_USER_WRITE){const c=n;c.revert?o=oI(t,e,c.path,s,i,r):o=iI(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===dt.LISTEN_COMPLETE)o=rI(t,e,n.path,s,r);else throw Rs("Unknown operation type: "+n.type);const l=r.getChanges();return nI(e,o,l),{viewCache:o,changes:l}}function nI(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Nr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Hf(Nr(e)))}}function Xf(t,e,n,s,i,r){const o=e.eventCache;if(xr(s,n)!=null)return e;{let a,l;if(Y(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=zn(e),u=c instanceof B?c:B.EMPTY_NODE,h=Il(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Or(s,zn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=K(n);if(c===".priority"){b(wn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Hu(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=fe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Hu(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Sl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ti(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function Dr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Y(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=K(n);if(!l.isCompleteForPath(n)&&wn(n)>1)return e;const y=fe(n),D=l.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?c=u.updatePriority(l.getNode(),D):c=u.updateChild(l.getNode(),_,D,y,Jf,null)}const h=qf(e,c,l.isFullyInitialized()||Y(n),u.filtersNodes()),d=new Tl(i,h,r);return Xf(t,h,n,i,d,a)}function Ea(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Tl(i,e,r);if(Y(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ti(e,c,!0,t.filter.filtersNodes());else{const h=K(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ti(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=fe(n),_=a.getNode().getImmediateChild(h);let y;if(Y(d))y=s;else{const T=u.getCompleteChild(h);T!=null?_l(d)===".priority"&&T.getChild(Lf(d)).isEmpty()?y=T:y=T.updateChild(d,s):y=B.EMPTY_NODE}if(_.equals(y))l=e;else{const T=t.filter.updateChild(a.getNode(),h,y,d,u,o);l=ti(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ju(t,e){return t.eventCache.isCompleteForChild(e)}function sI(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=we(n,l);ju(e,K(u))&&(a=Ea(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=we(n,l);ju(e,K(u))||(a=Ea(t,a,u,c,i,r,o))}),a}function qu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ca(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Y(n)?c=s:c=new de(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),y=qu(t,_,d);l=Dr(t,l,new ue(h),y,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const y=e.serverCache.getNode().getImmediateChild(h),T=qu(t,y,d);l=Dr(t,l,new ue(h),T,i,r,o,a)}}),l}function iI(t,e,n,s,i,r,o){if(xr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Dr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Y(n)){let c=new de(null);return l.getNode().forEachChild(_s,(u,h)=>{c=c.set(new ue(u),h)}),Ca(t,e,n,c,i,r,a,o)}else return e}else{let c=new de(null);return s.foreach((u,h)=>{const d=we(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Ca(t,e,n,c,i,r,a,o)}}function rI(t,e,n,s,i){const r=e.serverCache,o=qf(e,r.getNode(),r.isFullyInitialized()||Y(n),r.isFiltered());return Xf(t,o,n,s,Jf,i)}function oI(t,e,n,s,i,r){let o;if(xr(s,n)!=null)return e;{const a=new Tl(s,e,i),l=e.eventCache.getNode();let c;if(Y(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Or(s,zn(e));else{const h=e.serverCache.getNode();b(h instanceof B,"serverChildren would be complete if leaf node"),u=Il(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=K(n);let h=Sl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,fe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,B.EMPTY_NODE,fe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Or(s,zn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||xr(s,Z())!=null,ti(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new vl(s.getIndex()),r=Sb(s);this.processor_=Zb(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,a.getNode(),null),u=new En(l,o.isFullyInitialized(),i.filtersNodes()),h=new En(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ro(h,u),this.eventGenerator_=new Ob(this.query_)}get query(){return this.query_}}function lI(t){return t.viewCache_.serverCache.getNode()}function cI(t){return Nr(t.viewCache_)}function uI(t,e){const n=zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Gu(t){return t.eventRegistrations_.length===0}function hI(t,e){t.eventRegistrations_.push(e)}function Ku(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function zu(t,e,n,s){e.type===dt.MERGE&&e.source.queryId!==null&&(b(zn(t.viewCache_),"We should always have a full cache before handling merges"),b(Nr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=tI(t.processor_,i,e,n,s);return eI(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Zf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function dI(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(r,o)=>{s.push(Cs(r,o))}),n.isFullyInitialized()&&s.push(Hf(n.getNode())),Zf(t,s,n.getNode(),e)}function Zf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return xb(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;class ep{constructor(){this.views=new Map}}function fI(t){b(!Mr,"__referenceConstructor has already been defined"),Mr=t}function pI(){return b(Mr,"Reference.ts has not been loaded"),Mr}function _I(t){return t.views.size===0}function Rl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),zu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(zu(o,e,n,s));return r}}function tp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Or(n,i?s:null),l=!1;a?l=!0:s instanceof B?(a=Il(n,s),l=!1):(a=B.EMPTY_NODE,l=!1);const c=ro(new En(a,l,!1),new En(s,i,!1));return new aI(e,c)}return o}function mI(t,e,n,s,i,r){const o=tp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hI(o,n),dI(o,n)}function gI(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Cn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Ku(c,n,s)),Gu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Ku(l,n,s)),Gu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Cn(t)&&r.push(new(pI())(e._repo,e._path)),{removed:r,events:o}}function np(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yn(t,e){let n=null;for(const s of t.views.values())n=n||uI(s,e);return n}function sp(t,e){if(e._queryParams.loadsAllData())return ao(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ip(t,e){return sp(t,e)!=null}function Cn(t){return ao(t)!=null}function ao(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr;function yI(t){b(!Lr,"__referenceConstructor has already been defined"),Lr=t}function vI(){return b(Lr,"Reference.ts has not been loaded"),Lr}let wI=1;class Yu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=Yb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rp(t,e,n,s,i){return Fb(t.pendingWriteTree_,e,n,s,i),i?Os(t,new Kn(El(),e,n)):[]}function EI(t,e,n,s){Ub(t.pendingWriteTree_,e,n,s);const i=de.fromObject(n);return Os(t,new bs(El(),e,i))}function hn(t,e,n=!1){const s=Wb(t.pendingWriteTree_,e);if(Vb(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(Z(),!0):De(s.children,o=>{r=r.set(new ue(o),!0)}),Os(t,new Ar(s.path,r,n))}else return[]}function Li(t,e,n){return Os(t,new Kn(Cl(),e,n))}function CI(t,e,n){const s=de.fromObject(n);return Os(t,new bs(Cl(),e,s))}function bI(t,e){return Os(t,new wi(Cl(),e))}function II(t,e,n){const s=kl(t,n);if(s){const i=Al(s),r=i.path,o=i.queryId,a=He(r,e),l=new wi(bl(o),a);return Nl(t,r,l)}else return[]}function Fr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ip(o,e))){const l=gI(o,e,n,s);_I(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Cn(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=RI(d);for(let y=0;y<_.length;++y){const T=_[y],D=T.query,O=cp(t,T);t.listenProvider_.startListening(si(D),Ei(t,D),O.hashFn,O.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(si(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(lo(d));t.listenProvider_.stopListening(si(d),_)}))}PI(t,c)}return a}function op(t,e,n,s){const i=kl(t,s);if(i!=null){const r=Al(i),o=r.path,a=r.queryId,l=He(o,e),c=new Kn(bl(a),l,n);return Nl(t,o,c)}else return[]}function SI(t,e,n,s){const i=kl(t,s);if(i){const r=Al(i),o=r.path,a=r.queryId,l=He(o,e),c=de.fromObject(n),u=new bs(bl(a),l,c);return Nl(t,o,u)}else return[]}function ba(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const y=He(d,i);r=r||yn(_,y),o=o||Cn(_)});let a=t.syncPointTree_.get(i);a?(o=o||Cn(a),r=r||yn(a,Z())):(a=new ep,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const T=yn(y,Z());T&&(r=r.updateImmediateChild(_,T))}));const c=ip(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=lo(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=kI();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=oo(t.pendingWriteTree_,i);let h=mI(a,e,n,u,r,l);if(!c&&!o&&!s){const d=sp(a,e);h=h.concat(AI(t,e,d))}return h}function Pl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=He(o,e),c=yn(a,l);if(c)return c});return zf(i,e,r,n,!0)}function TI(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=He(c,n);s=s||yn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||yn(i,Z()):(i=new ep,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new En(s,!0,!1):null,a=oo(t.pendingWriteTree_,e._path),l=tp(i,e,a,r?o.getNode():B.EMPTY_NODE,r);return cI(l)}function Os(t,e){return ap(e,t.syncPointTree_,null,oo(t.pendingWriteTree_,Z()))}function ap(t,e,n,s){if(Y(t.path))return lp(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=yn(i,Z()));let r=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Yf(s,o);r=r.concat(ap(a,l,c,u))}return i&&(r=r.concat(Rl(i,t,s,n))),r}}function lp(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=yn(i,Z()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Yf(s,o),u=t.operationForChild(o);u&&(r=r.concat(lp(u,a,l,c)))}),i&&(r=r.concat(Rl(i,t,s,n))),r}function cp(t,e){const n=e.query,s=Ei(t,n);return{hashFn:()=>(lI(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?II(t,n._path,s):bI(t,n._path);{const r=bC(i,n);return Fr(t,n,null,r)}}}}function Ei(t,e){const n=lo(e);return t.queryToTagMap.get(n)}function lo(t){return t._path.toString()+"$"+t._queryIdentifier}function kl(t,e){return t.tagToQueryMap.get(e)}function Al(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function Nl(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=oo(t.pendingWriteTree_,e);return Rl(s,n,i,null)}function RI(t){return t.fold((e,n,s)=>{if(n&&Cn(n))return[ao(n)];{let i=[];return n&&(i=np(n)),De(s,(r,o)=>{i=i.concat(o)}),i}})}function si(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(vI())(t._repo,t._path):t}function PI(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=lo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function kI(){return wI++}function AI(t,e,n){const s=e._path,i=Ei(t,e),r=cp(t,n),o=t.listenProvider_.startListening(si(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)b(!Cn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Y(c)&&u&&Cn(u))return[ao(u).query];{let d=[];return u&&(d=d.concat(np(u).map(_=>_.query))),De(h,(_,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(si(u),Ei(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ol(n)}node(){return this.node_}}class xl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new xl(this.syncTree_,n)}node(){return Pl(this.syncTree_,this.path_)}}const NI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qu=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return OI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xI(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},OI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},xI=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},up=function(t,e,n,s){return Dl(e,new xl(n,t),s)},hp=function(t,e,n){return Dl(t,new Ol(e),n)};function Dl(t,e,n){const s=t.getPriority().val(),i=Qu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Qu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Pe(a,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Pe(i))),o.forEachChild(Ee,(a,l)=>{const c=Dl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ll(t,e){let n=e instanceof ue?e:new ue(e),s=t,i=K(n);for(;i!==null;){const r=gs(s.node.children,i)||{children:{},childCount:0};s=new Ml(i,s,r),n=fe(n),i=K(n)}return s}function xs(t){return t.node.value}function dp(t,e){t.node.value=e,Ia(t)}function fp(t){return t.node.childCount>0}function DI(t){return xs(t)===void 0&&!fp(t)}function co(t,e){De(t.node.children,(n,s)=>{e(new Ml(n,t,s))})}function pp(t,e,n,s){n&&!s&&e(t),co(t,i=>{pp(i,e,!0,s)}),n&&s&&e(t)}function MI(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Fi(t){return new ue(t.parent===null?t.name:Fi(t.parent)+"/"+t.name)}function Ia(t){t.parent!==null&&LI(t.parent,t.name,t)}function LI(t,e,n){const s=DI(n),i=Nt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ia(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ia(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=/[\[\].#$\/\u0000-\u001F\u007F]/,UI=/[\[\].#$\u0000-\u001F\u007F]/,Bo=10*1024*1024,Fl=function(t){return typeof t=="string"&&t.length!==0&&!FI.test(t)},_p=function(t){return typeof t=="string"&&t.length!==0&&!UI.test(t)},WI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_p(t)},VI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ul(t)||t&&typeof t=="object"&&Nt(t,".sv")},mp=function(t,e,n,s){s&&e===void 0||uo(Jr(t,"value"),e,n)},uo=function(t,e,n){const s=n instanceof ue?new sb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xn(s));if(typeof e=="function")throw new Error(t+"contains a function "+xn(s)+" with contents = "+e.toString());if(ul(e))throw new Error(t+"contains "+e.toString()+" "+xn(s));if(typeof e=="string"&&e.length>Bo/3&&Xr(e)>Bo)throw new Error(t+"contains a string greater than "+Bo+" utf8 bytes "+xn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(De(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Fl(o)))throw new Error(t+" contains an invalid key ("+o+") "+xn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ib(s,o),uo(t,a,s),rb(s)}),i&&r)throw new Error(t+' contains ".value" child '+xn(s)+" in addition to actual children.")}},BI=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=mi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Fl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(nb);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&st(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},$I=function(t,e,n,s){const i=Jr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];De(e,(o,a)=>{const l=new ue(o);if(uo(i,a,we(n,l)),_l(l)===".priority"&&!VI(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),BI(i,r)},gp=function(t,e,n,s){if(!_p(n))throw new Error(Jr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HI=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gp(t,e,n)},Ul=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!WI(n))throw new Error(Jr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ho(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!ml(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function yp(t,e,n){ho(t,n),vp(t,s=>ml(s,e))}function it(t,e,n){ho(t,n),vp(t,s=>st(s,e)||st(e,s))}function vp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(GI(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function GI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Zs&&Oe("event: "+n.toString()),Ns(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="repo_interrupt",zI=25;class YI{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kr(),this.transactionQueueTree_=new Ml,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QI(t,e,n){if(t.stats_=fl(t.repoInfo_),t.forceRestClient_||RC())t.server_=new Pr(t.repoInfo_,(s,i,r,o)=>{Ju(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new jt(t.repoInfo_,e,(s,i,r,o)=>{Ju(t,s,i,r,o)},s=>{Xu(t,s)},s=>{JI(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=OC(t.repoInfo_,()=>new Nb(t.stats_,t.server_)),t.infoData_=new Tb,t.infoSyncTree_=new Yu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Li(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Wl(t,"connected",!1),t.serverSyncTree_=new Yu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);it(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function wp(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function fo(t){return NI({timestamp:wp(t)})}function Ju(t,e,n,s,i){t.dataUpdateCount++;const r=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=gr(n,c=>Ce(c));o=SI(t.serverSyncTree_,r,l,i)}else{const l=Ce(n);o=op(t.serverSyncTree_,r,l,i)}else if(s){const l=gr(n,c=>Ce(c));o=CI(t.serverSyncTree_,r,l)}else{const l=Ce(n);o=Li(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ss(t,r)),it(t.eventQueue_,a,o)}function Xu(t,e){Wl(t,"connected",e),e===!1&&tS(t)}function JI(t,e){De(e,(n,s)=>{Wl(t,n,s)})}function Wl(t,e,n){const s=new ue("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=Li(t.infoSyncTree_,s,i);it(t.eventQueue_,s,r)}function Vl(t){return t.nextWriteId_++}function XI(t,e,n){const s=TI(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ce(i).withIndex(e._queryParams.getIndex());ba(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Li(t.serverSyncTree_,e._path,r);else{const a=Ei(t.serverSyncTree_,e);o=op(t.serverSyncTree_,e._path,r,a)}return it(t.eventQueue_,e._path,o),Fr(t.serverSyncTree_,e,n,null,!0),r},i=>(Ui(t,"get for query "+be(e)+" failed: "+i),Promise.reject(new Error(i))))}function ZI(t,e,n,s,i){Ui(t,"set",{path:e.toString(),value:n,priority:s});const r=fo(t),o=Ce(n,s),a=Pl(t.serverSyncTree_,e),l=hp(o,a,r),c=Vl(t),u=rp(t.serverSyncTree_,e,l,c,!0);ho(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const y=d==="ok";y||je("set at "+e+" failed: "+d);const T=hn(t.serverSyncTree_,c,!y);it(t.eventQueue_,e,T),Sa(t,i,d,_)});const h=$l(t,e);Ss(t,h),it(t.eventQueue_,h,[])}function eS(t,e,n,s){Ui(t,"update",{path:e.toString(),value:n});let i=!0;const r=fo(t),o={};if(De(n,(a,l)=>{i=!1,o[a]=up(we(e,a),Ce(l),t.serverSyncTree_,r)}),i)Oe("update() called with empty data.  Don't do anything."),Sa(t,s,"ok",void 0);else{const a=Vl(t),l=EI(t.serverSyncTree_,e,o,a);ho(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||je("update at "+e+" failed: "+c);const d=hn(t.serverSyncTree_,a,!h),_=d.length>0?Ss(t,e):e;it(t.eventQueue_,_,d),Sa(t,s,c,u)}),De(n,c=>{const u=$l(t,we(e,c));Ss(t,u)}),it(t.eventQueue_,e,[])}}function tS(t){Ui(t,"onDisconnectEvents");const e=fo(t),n=kr();ga(t.onDisconnect_,Z(),(i,r)=>{const o=up(i,r,t.serverSyncTree_,e);jf(n,i,o)});let s=[];ga(n,Z(),(i,r)=>{s=s.concat(Li(t.serverSyncTree_,i,r));const o=$l(t,i);Ss(t,o)}),t.onDisconnect_=kr(),it(t.eventQueue_,Z(),s)}function nS(t,e,n){let s;K(e._path)===".info"?s=ba(t.infoSyncTree_,e,n):s=ba(t.serverSyncTree_,e,n),yp(t.eventQueue_,e._path,s)}function Zu(t,e,n){let s;K(e._path)===".info"?s=Fr(t.infoSyncTree_,e,n):s=Fr(t.serverSyncTree_,e,n),yp(t.eventQueue_,e._path,s)}function sS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(KI)}function Ui(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Oe(n,...e)}function Sa(t,e,n,s){e&&Ns(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ep(t,e,n){return Pl(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Bl(t,e=t.transactionQueueTree_){if(e||po(t,e),xs(e)){const n=bp(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&iS(t,Fi(e),n)}else fp(e)&&co(e,n=>{Bl(t,n)})}function iS(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ep(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=He(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ui(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(hn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();po(t,Ll(t.transactionQueueTree_,e)),Bl(t,t.transactionQueueTree_),it(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ns(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{je("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ss(t,e)}},o)}function Ss(t,e){const n=Cp(t,e),s=Fi(n),i=bp(t,n);return rS(t,i,s),s}function rS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=He(n,l.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=zI)u=!0,h="maxretry",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Ep(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){uo("transaction failed: Data returned ",_,l.path);let y=Ce(_);typeof _=="object"&&_!=null&&Nt(_,".priority")||(y=y.updatePriority(d.getPriority()));const D=l.currentWriteId,O=fo(t),x=hp(y,d,O);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=x,l.currentWriteId=Vl(t),o.splice(o.indexOf(D),1),i=i.concat(rp(t.serverSyncTree_,l.path,x,l.currentWriteId,l.applyLocally)),i=i.concat(hn(t.serverSyncTree_,D,!0))}else u=!0,h="nodata",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0))}it(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}po(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ns(s[a]);Bl(t,t.transactionQueueTree_)}function Cp(t,e){let n,s=t.transactionQueueTree_;for(n=K(e);n!==null&&xs(s)===void 0;)s=Ll(s,n),e=fe(e),n=K(e);return s}function bp(t,e){const n=[];return Ip(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ip(t,e,n){const s=xs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);co(e,i=>{Ip(t,i,n)})}function po(t,e){const n=xs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,dp(e,n.length>0?n:void 0)}co(e,s=>{po(t,s)})}function $l(t,e){const n=Fi(Cp(t,e)),s=Ll(t.transactionQueueTree_,e);return MI(s,i=>{$o(t,i)}),$o(t,s),pp(s,i=>{$o(t,i)}),n}function $o(t,e){const n=xs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?dp(e,void 0):n.length=r+1,it(t.eventQueue_,Fi(e),i);for(let o=0;o<s.length;o++)Ns(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function aS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const eh=function(t,e){const n=lS(t),s=n.namespace;n.domain==="firebase.com"&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Rf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ue(n.pathString)}},lS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=oS(t.substring(u,h)));const d=aS(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",cS=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=th.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=th.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class hS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Y(this._path)?null:_l(this._path)}get ref(){return new Yt(this._repo,this._path)}get _queryIdentifier(){const e=Wu(this._queryParams),n=hl(e);return n==="{}"?"default":n}get _queryObject(){return Wu(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof Hl))return!1;const n=this._repo===e._repo,s=ml(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+tb(this._path)}}class Yt extends Hl{constructor(e,n){super(e,n,new wl,!1)}get parent(){const e=Lf(this._path);return e===null?null:new Yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ci{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),s=bi(this.ref,e);return new Ci(this._node.getChild(n),s,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ci(i,bi(this.ref,s),Ee)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xe(t,e){return t=Me(t),t._checkNotDeleted("ref"),e!==void 0?bi(t._root,e):t._root}function bi(t,e){return t=Me(t),K(t._path)===null?HI("child","path",e):gp("child","path",e),new Yt(t._repo,we(t._path,e))}function Ta(t,e){t=Me(t),Ul("push",t._path),mp("push",e,t._path,!0);const n=wp(t._repo),s=cS(n),i=bi(t,s),r=bi(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Tp(t){return Ul("remove",t._path),Wi(t,null)}function Wi(t,e){t=Me(t),Ul("set",t._path),mp("set",e,t._path,!1);const n=new Ri;return ZI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function jl(t,e){$I("update",e,t._path);const n=new Ri;return eS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function _o(t){t=Me(t);const e=new Sp(()=>{}),n=new mo(e);return XI(t._repo,t,n).then(s=>new Ci(s,new Yt(t._repo,t._path),t._queryParams.getIndex()))}class mo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new uS("value",this,new Ci(e.snapshotNode,new Yt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hS(this,e,n):null}matches(e){return e instanceof mo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function dS(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Zu(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Sp(n,r||void 0),a=new mo(o);return nS(t._repo,t,a),()=>Zu(t._repo,t,a)}function fS(t,e,n,s){return dS(t,"value",e,n,s)}fI(Yt);yI(Yt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="FIREBASE_DATABASE_EMULATOR_HOST",Ra={};let _S=!1;function mS(t,e,n,s){t.repoInfo_=new Rf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function gS(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Oe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=eh(r,i),a=o.repoInfo,l;typeof process<"u"&&Eu&&(l=Eu[pS]),l?(r=`http://${l}?ns=${a.namespace}`,o=eh(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new kC(t.name,t.options,e);jI("Invalid Firebase Database URL",o),Y(o.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=vS(a,t,c,new PC(t.name,n));return new wS(u,t)}function yS(t,e){const n=Ra[e];(!n||n[t.key]!==t)&&Kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sS(t),delete n[t.key]}function vS(t,e,n,s){let i=Ra[e.name];i||(i={},Ra[e.name]=i);let r=i[t.toURLString()];return r&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new YI(t,_S,n,s),i[t.toURLString()]=r,r}class wS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kt("Cannot call "+e+" on a deleted database.")}}function Pt(t=md(),e){const n=Xa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ug("database");s&&ES(n,...s)}return n}function ES(t,e,n,s={}){t=Me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Kt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ar(ar.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:hg(s.mockUserToken,t.app.options.projectId);r=new ar(o)}mS(i,e,n,r)}/**
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
 */function CS(t){dC(ks),ys(new $n("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return gS(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),mn(Cu,bu,t),mn(Cu,bu,"esm2017")}jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};CS();const Qt={firebaseConfig:{apiKey:"AIzaSyC6OKfRLtntX1mzOgfPRGeQWlBQKakP8rI",authDomain:"motw-frontend-hq.firebaseapp.com",databaseURL:"https://motw-frontend-hq-default-rtdb.firebaseio.com",projectId:"motw-frontend-hq",storageBucket:"motw-frontend-hq.appspot.com",messagingSenderId:"607683384016",appId:"1:607683384016:web:334f0aa4548af6b1f884d5"}},bS={data(){return{message:"We doin our best here",email:"",password:"",name:"",showRegister:!1,errorMessage:""}},created(){this.app=Ot(Qt.firebaseConfig),this.auth=ef(this.app),xv(this.auth,t=>{t?(Fe.login({uid:t.uid}),this.fetchUserName(t.uid)):Fe.logout()})},methods:{setCookie(t,e,n){const s=new Date;s.setTime(s.getTime()+n*24*60*60*1e3);const i=`expires=${s.toUTCString()}`;document.cookie=`${t}=${e}; ${i}; path=/`},displayMessage(t){console.log(t)},registerUser(){Pv(this.auth,this.email,this.password).then(t=>{const e=t.user,n={name:this.name,email:this.email,isAdmin:!1,last_login:Date.now()},s=Pt();Wi(xe(s,"profiles/"+e.uid),n),Fe.login({uid:e.uid,name:this.name,isAdmin:e.isAdmin}),this.errorMessage=""}).catch(t=>{this.errorMessage=t.message})},loginUser(){Av(this.auth,qd).then(()=>kv(this.auth,this.email,this.password)).then(t=>{Fe.login({uid:t.user.uid}),this.fetchUserName(t.user.uid),this.errorMessage="",localStorage.setItem("motw-uid",t.user.uid),localStorage.setItem("motw-user",JSON.stringify(t.user))}).catch(t=>{this.errorMessage=t.message})},logoutUser(){$d(this.auth).then(()=>{Fe.logout(),localStorage.removeItem("motw-uid"),localStorage.removeItem("motw-user")}).catch(t=>{console.error(t)})},fetchUserName(t){console.log(128,"Fetch username");const e=Pt(),n=xe(e,"profiles/"+t);_o(n).then(s=>{s.exists()?(Fe.user.name=s.val().name,Fe.isAdmin=s.val().isAdmin):console.log("No user data available")}).catch(s=>{console.error(s)})}},computed:{store(){return Fe}}},ql=t=>(kt("data-v-52715413"),t=t(),At(),t),IS={key:0},SS={key:0,class:"error"},TS=ql(()=>m("label",{for:"email"},"Email:",-1)),RS=ql(()=>m("label",{for:"password"},"Password:",-1)),PS={key:1},kS=ql(()=>m("label",{for:"name"},"Name:",-1)),AS={key:2},NS={key:3},OS={key:1};function xS(t,e,n,s,i,r){return L(),U("div",null,[m("h1",null,re(i.message),1),r.store.isAuthenticated?(L(),U("div",OS,[m("p",null,"Welcome, "+re(r.store.user.name)+"!",1),m("button",{onClick:e[6]||(e[6]=(...o)=>r.logoutUser&&r.logoutUser(...o))},"Logout")])):(L(),U("div",IS,[i.errorMessage?(L(),U("div",SS,re(i.errorMessage),1)):ve("",!0),m("div",null,[TS,ce(m("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),id:"email"},null,512),[[he,i.email]])]),m("div",null,[RS,ce(m("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),id:"password"},null,512),[[he,i.password]])]),i.showRegister?(L(),U("div",PS,[kS,ce(m("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>i.name=o),id:"name"},null,512),[[he,i.name]])])):ve("",!0),i.showRegister?(L(),U("div",AS,[m("button",{onClick:e[3]||(e[3]=(...o)=>r.registerUser&&r.registerUser(...o))},"Register")])):(L(),U("div",NS,[m("button",{onClick:e[4]||(e[4]=(...o)=>r.loginUser&&r.loginUser(...o))},"Login"),m("p",null,[$e("No account? "),m("a",{href:"#",onClick:e[5]||(e[5]=Vn(o=>i.showRegister=!0,["prevent"]))},"Click here to register")])]))]))])}const DS=gt(bS,[["render",xS],["__scopeId","data-v-52715413"]]),MS=Ot(Qt.firebaseConfig),LS=Pt(MS);function nh(t,e){const n=t._path.pieces_.join("/"),s=xe(LS,n),i=e===void 0?null:e;return console.log("setClean",n,i),Wi(s,i)}const FS=Ot(Qt.firebaseConfig),US=Pt(FS);function WS(t,e){const n=t._path.pieces_.join("/"),s=xe(US,n),i=e===void 0?null:e;return console.log("updateClean",n,i),jl(s,i)}const VS={name:"EditCaseFiles",props:{caseToEdit:Object},data(){return{caseFile:{id:"",title:"",summary:"",details:"",password:"",enteredPassword:"",detailsVisible:!1,clues:[],locations:[],notes:[]},db:null}},watch:{caseToEdit:{handler(t){t&&(this.caseFile={...t},this.initializeCaseFile(this.caseFile))},immediate:!0}},created(){this.app=Ot(Qt.firebaseConfig),this.db=Pt(this.app)},methods:{initializeCaseFile(t){t.id||(t.id=""),t.title||(t.title=""),t.summary||(t.summary=""),t.details||(t.details=""),t.password||(t.password="")},validateCaseFile(t){var e=["id","title","summary","details","password"];for(var n of e){if(!t.hasOwnProperty(n))return console.error(`Missing property: ${n}`),!1;if(typeof t[n]!="string")return console.error(`Incorrect type for property: ${n}`),!1}return!0},saveCaseFile(){if(!this.validateCaseFile(this.caseFile)){alert("Case file data is invalid. Please check the input fields.");return}if(this.caseFile.id){var t=xe(this.db,"caseFiles/"+this.caseFile.id);WS(t,this.caseFile).then(()=>{this.resetForm(),this.$emit("saved")}).catch(s=>{console.error("Error updating case:",s)})}else{var e=xe(this.db,"caseFiles/"),n=Ta(e);console.log("New Case Ref Key:",n.key),console.log("caseFile:",this.caseFile),nh(n,{...this.caseFile,id:n.key}).then(()=>{console.log("Data successfully written!"),this.resetForm(),this.$emit("saved")}).catch(s=>{console.error("Error adding case:",s),console.error("Error details:",s.message,s.stack)})}},saveCaseFileDebug(){var t=xe(this.db,"casemiles/"),e=Ta(t);console.log("New Case Ref Key:",e.key),console.log("caseFile:",this.caseFile),nh(e,{...this.caseFile,id:e.key}).then(()=>{console.log("Data successfully written!"),this.resetForm(),this.$emit("saved")}).catch(n=>{console.error("Error adding case:",n),console.error("Error details:",n.message,n.stack)})},resetForm(){this.caseFile={id:"",title:"",summary:"",details:"",password:""}}}},go=t=>(kt("data-v-5d1e0912"),t=t(),At(),t),BS={class:"edit-case-files"},$S={class:"form-group"},HS=go(()=>m("label",{for:"title"},"Title:",-1)),jS={class:"form-group"},qS=go(()=>m("label",{for:"summary"},"Summary:",-1)),GS={class:"form-group"},KS=go(()=>m("label",{for:"details"},"Details:",-1)),zS={class:"form-group"},YS=go(()=>m("label",{for:"password"},"Password:",-1)),QS={type:"submit"};function JS(t,e,n,s,i,r){return L(),U("div",BS,[m("h1",null,re(i.caseFile.id?"Edit":"Add")+" Case File",1),m("form",{onSubmit:e[4]||(e[4]=Vn((...o)=>r.saveCaseFile&&r.saveCaseFile(...o),["prevent"]))},[m("div",$S,[HS,ce(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.caseFile.title=o),id:"title",autocomplete:"off",required:""},null,512),[[he,i.caseFile.title]])]),m("div",jS,[qS,ce(m("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>i.caseFile.summary=o),id:"summary",required:""},null,512),[[he,i.caseFile.summary]])]),m("div",GS,[KS,ce(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.caseFile.details=o),id:"details",required:""},null,512),[[he,i.caseFile.details]])]),m("div",zS,[YS,ce(m("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=o=>i.caseFile.password=o),id:"password",autocomplete:"off",required:""},null,512),[[he,i.caseFile.password]])]),m("button",QS,re(i.caseFile.id?"Update":"Add")+" Case File",1)],32)])}const XS=gt(VS,[["render",JS],["__scopeId","data-v-5d1e0912"]]),ZS={name:"CaseFiles",components:{EditCaseFiles:XS},data(){return{caseFiles:[],caseToEdit:null,isAdmin:Fe.isAdmin}},created(){this.app=Ot(Qt.firebaseConfig),this.db=Pt(this.app),this.fetchCaseFiles()},methods:{fetchCaseFiles(){var t=xe(this.db,"caseFiles");fS(t,e=>{var n=e.val();if(console.log("Fetched data:",n),n){let i=[];for(var s in n)n.hasOwnProperty(s)&&i.push({id:s,...n[s],enteredPassword:"",detailsVisible:!1});console.log("Processed caseFilesArray:",i),this.caseFiles=i}else this.caseFiles=[];console.log("Updated caseFiles:",this.caseFiles)},e=>{console.error("Error fetching case files:",e)})},editCaseFile(t){this.caseToEdit={...t}},deleteCaseFile(t){var e=xe(this.db,"caseFiles/"+t);Tp(e).catch(n=>console.error("Error deleting case:",n))},unlockDetails(t){t.enteredPassword===t.password?t.detailsVisible=!0:alert("Incorrect password")}}},eT=t=>(kt("data-v-88fd9876"),t=t(),At(),t),tT={class:"case-files"},nT=eT(()=>m("h1",null,"Case Files",-1)),sT={key:0},iT=["onUpdate:modelValue"],rT=["onClick"],oT={key:0},aT={key:0},lT=["onClick"],cT=["onClick"];function uT(t,e,n,s,i,r){const o=ut("edit-case-files"),a=ut("router-link");return L(),U("div",tT,[nT,i.isAdmin?(L(),U("div",sT,[te(o,{caseToEdit:i.caseToEdit,onSaved:r.fetchCaseFiles},null,8,["caseToEdit","onSaved"])])):ve("",!0),m("ul",null,[(L(!0),U(Ae,null,Lt(i.caseFiles,l=>(L(),U("li",{class:"casefile-item",key:l.id},[m("h2",null,re(l.title),1),m("p",null,re(l.summary),1),m("div",null,[ce(m("input",{type:"password","onUpdate:modelValue":c=>l.enteredPassword=c,placeholder:"Enter password to view details"},null,8,iT),[[he,l.enteredPassword]]),m("button",{onClick:c=>r.unlockDetails(l)},"Unlock Details",8,rT),l.detailsVisible?(L(),U("p",oT,re(l.details),1)):ve("",!0)]),i.isAdmin?(L(),U("div",aT,[m("button",{onClick:c=>r.editCaseFile(l)},"Edit",8,lT),m("button",{onClick:c=>r.deleteCaseFile(l.id)},"Delete",8,cT)])):ve("",!0),l.detailsVisible?(L(),Zh(a,{key:1,to:"/case-files/"+l.id},{default:Ze(()=>[$e("Read more")]),_:2},1032,["to"])):ve("",!0)]))),128))])])}const Rp=gt(ZS,[["render",uT],["__scopeId","data-v-88fd9876"]]),hT={name:"EditBeast",data(){return{beast:{name:"",image:"",description:"",stats:"",details:"",detailsPassword:"",entryPassword:""},db:null}},props:{beastToEdit:Object},watch:{beastToEdit:{handler(t){this.beast={...t}},immediate:!0}},created(){this.app=Ot(Qt.firebaseConfig),this.db=Pt(this.app)},methods:{saveBeast(){if(this.beast.id){const t=xe(this.db,"bestiary/"+this.beast.id);jl(t,this.beast).then(()=>{this.resetForm(),this.$emit("saved")}).catch(e=>{console.error("Error updating beast:",e)})}else{const t=xe(this.db,"bestiary"),e=Ta(t);Wi(e,this.beast).then(()=>{this.resetForm(),this.$emit("saved")}).catch(n=>{console.error("Error adding beast:",n)})}},resetForm(){this.beast={name:"",image:"",description:"",stats:"",details:"",detailsPassword:"",entryPassword:""}}}},Pn=t=>(kt("data-v-fc2b3e68"),t=t(),At(),t),dT={class:"edit-beast"},fT={class:"form-group"},pT=Pn(()=>m("label",{for:"name"},"Name:",-1)),_T={class:"form-group"},mT=Pn(()=>m("label",{for:"image"},"Image URL:",-1)),gT={class:"form-group"},yT=Pn(()=>m("label",{for:"description"},"Description:",-1)),vT={class:"form-group"},wT=Pn(()=>m("label",{for:"stats"},"Stats:",-1)),ET={class:"form-group"},CT=Pn(()=>m("label",{for:"details"},"Details:",-1)),bT={class:"form-group"},IT=Pn(()=>m("label",{for:"detailsPassword"},"Details Password:",-1)),ST={class:"form-group"},TT=Pn(()=>m("label",{for:"entryPassword"},"Entry Password:",-1)),RT=Pn(()=>m("button",{type:"submit"},"Save Beast",-1));function PT(t,e,n,s,i,r){return L(),U("div",dT,[m("form",{onSubmit:e[7]||(e[7]=Vn((...o)=>r.saveBeast&&r.saveBeast(...o),["prevent"]))},[m("div",fT,[pT,ce(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.beast.name=o),id:"name",required:""},null,512),[[he,i.beast.name]])]),m("div",_T,[mT,ce(m("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>i.beast.image=o),id:"image",required:""},null,512),[[he,i.beast.image]])]),m("div",gT,[yT,ce(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.beast.description=o),id:"description",required:""},null,512),[[he,i.beast.description]])]),m("div",vT,[wT,ce(m("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>i.beast.stats=o),id:"stats",required:""},null,512),[[he,i.beast.stats]])]),m("div",ET,[CT,ce(m("textarea",{"onUpdate:modelValue":e[4]||(e[4]=o=>i.beast.details=o),id:"details"},null,512),[[he,i.beast.details]])]),m("div",bT,[IT,ce(m("input",{type:"password","onUpdate:modelValue":e[5]||(e[5]=o=>i.beast.detailsPassword=o),id:"detailsPassword"},null,512),[[he,i.beast.detailsPassword]])]),m("div",ST,[TT,ce(m("input",{type:"password","onUpdate:modelValue":e[6]||(e[6]=o=>i.beast.entryPassword=o),id:"entryPassword"},null,512),[[he,i.beast.entryPassword]])]),RT],32)])}const kT=gt(hT,[["render",PT],["__scopeId","data-v-fc2b3e68"]]),AT={name:"Bestiary",components:{EditBeast:kT},data(){return{beasts:[],beastToEdit:null,db:null,isAdmin:Fe.isAdmin}},created(){this.app=Ot(Qt.firebaseConfig),this.db=Pt(this.app),this.fetchBeasts(),this.checkAdmin()},methods:{fetchBeasts(){const t=xe(this.db,"bestiary");_o(t).then(e=>{if(e.exists()){const n=e.val();this.beasts=Object.keys(n).map(s=>({id:s,...n[s],detailsVisible:!1,entryVisible:!n[s].entryPassword,entryPasswordInput:"",detailsPasswordInput:""}))}}).catch(e=>{console.error("Error fetching beasts:",e)})},editBeast(t){this.beastToEdit={...t}},deleteBeast(t){const e=xe(this.db,"bestiary/"+t);Tp(e).then(()=>{this.fetchBeasts()}).catch(n=>{console.error("Error deleting beast:",n)})},checkAdmin(){console.log("Admin check",Fe.isAdmin),this.isAdmin=Fe.isAdmin},unlockEntry(t){t.entryPasswordInput===t.entryPassword||!t.entryPassword?t.entryVisible=!0:alert("Incorrect password!")},unlockDetails(t){t.detailsPasswordInput===t.detailsPassword||!t.detailsPassword?t.detailsVisible=!0:alert("Incorrect password!")}}},Pp=t=>(kt("data-v-ecbabeb7"),t=t(),At(),t),NT={class:"bestiary"},OT=Pp(()=>m("div",{class:"header"},[m("h1",null,"Bestiary")],-1)),xT={class:"content"},DT={key:0},MT={key:1},LT=Pp(()=>m("h2",null,"Beasts",-1)),FT={key:0},UT=["onUpdate:modelValue"],WT=["onClick"],VT={key:1},BT=["src","alt"],$T={key:0},HT=["onUpdate:modelValue"],jT=["onClick"],qT={key:1},GT={key:2},KT=["onClick"],zT=["onClick"];function YT(t,e,n,s,i,r){const o=ut("edit-beast");return L(),U("div",NT,[OT,m("div",xT,[i.isAdmin?(L(),U("div",DT,[te(o,{beastToEdit:i.beastToEdit,onSaved:r.fetchBeasts},null,8,["beastToEdit","onSaved"])])):ve("",!0),i.beasts.length?(L(),U("div",MT,[LT,m("ul",null,[(L(!0),U(Ae,null,Lt(i.beasts,a=>(L(),U("li",{key:a.id,class:"beast-item"},[a.entryVisible?ve("",!0):(L(),U("div",FT,[ce(m("input",{"onUpdate:modelValue":l=>a.entryPasswordInput=l,type:"password",placeholder:"Enter password to view beast"},null,8,UT),[[he,a.entryPasswordInput]]),m("button",{onClick:l=>r.unlockEntry(a)},"Unlock Beast",8,WT)])),a.entryVisible?(L(),U("div",VT,[m("h3",null,re(a.name),1),m("img",{src:a.image,alt:a.name},null,8,BT),m("p",null,re(a.description),1),a.details&&!a.detailsVisible?(L(),U("div",$T,[ce(m("input",{"onUpdate:modelValue":l=>a.detailsPasswordInput=l,type:"password",placeholder:"Enter password to view details"},null,8,HT),[[he,a.detailsPasswordInput]]),m("button",{onClick:l=>r.unlockDetails(a)},"Unlock Details",8,jT)])):ve("",!0),a.detailsVisible?(L(),U("div",qT,[m("p",null,"Details: "+re(a.details),1)])):ve("",!0),m("p",null,"Stats: "+re(a.stats),1),i.isAdmin?(L(),U("div",GT,[m("button",{onClick:l=>r.editBeast(a)},"Edit",8,KT),m("button",{onClick:l=>r.deleteBeast(a.id)},"Delete",8,zT)])):ve("",!0)])):ve("",!0)]))),128))])])):ve("",!0)])])}const kp=gt(AT,[["render",YT],["__scopeId","data-v-ecbabeb7"]]),QT=[{name:"The Chosen",description:"Your birth was prophesied. You are the Chosen One, and with your abilities, you can save the world. If you fail, all will be destroyed. It all rests on you. Only you.",moves:[{name:"Destiny’s Plaything",description:"At the beginning of each mystery, roll +Weird to see what is revealed about your immediate future."},{name:"I’m Here For A Reason",description:"There’s something you are meant to do; work out the signs to find out what."},{name:"The Big Entrance",description:"When you make a showy entrance, roll +Charm."},{name:"Devastating",description:"When you inflict harm, you inflict +1 harm."},{name:"Dutiful",description:"You gain +1 ongoing while you follow a duty."},{name:"Invincible",description:"You always count as having 2-armour."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Protective gear worth 1-armour","Special weapon"],ratings:["Charm+2, Cool-1, Sharp+1, Tough+2, Weird-1","Charm-1, Cool+2, Sharp+1, Tough+2, Weird-1","Charm+1, Cool+2, Sharp+1, Tough+1, Weird-1","Charm-1, Cool+1, Sharp+2, Tough-1, Weird+2","Charm+1, Cool+2, Sharp-1, Tough-1, Weird+2"],special:"When you spend a point of Luck, the Keeper will bring your fate into play."},{name:"The Crooked",description:"“Yeah, I’ve been around the block. A bit of this, a bit of that. When I came across the secret underworld of monsters and magic… well… it wasn’t so different from the underworld I already knew. It was easy to find an angle, just like before.”",moves:[{name:"Hoodlum",description:"When you get into trouble, roll +Cool."},{name:"Burglar",description:"When you break into a secure location, roll +Cool."},{name:"Grifter",description:"When you try to dupe someone, roll +Charm."},{name:"Fixer",description:"When you need something, roll +Sharp."},{name:"Assassin",description:"When you attack from ambush, roll +Cool."},{name:"Charlatan",description:"When you try to lie to someone, roll +Charm."},{name:"Pickpocket",description:"When you try to steal something, roll +Cool."}],gear:[".22 revolver (1-harm close reload small)",".38 revolver (2-harm close reload loud)","9mm (2-harm close loud)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)","Big knife (1-harm hand)","Baseball bat (1-harm hand)","Submachinegun (2-harm close reload area)","Assault rifle (3-harm close/far area)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +1, Tough +2, Weird 0","Charm -1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird -1","Charm +2, Cool 0, Sharp +1, Tough -1, Weird +1"],special:"Whenever you spend a Luck point, someone from your past will re-appear in your life. Soon."},{name:"The Divine",description:"An agent of a higher power, sent to fight evil. You have a mission and heavenly powers to back you up.",moves:[{name:"Angel Wings",description:"You can go instantly to anywhere you’ve visited before, or to a person you know well. When you carry one or two people with you, roll +Weird."},{name:"Smite",description:"Your body and divine weapon always count as a weakness against the monsters you fight."},{name:"Soothe",description:"When you talk to someone for a few seconds in a quiet voice, you can calm them down, blocking any panic, anger, or other negative emotions."},{name:"What I Need, When I Need It",description:"You may store any useful item or piece of information somewhere close at hand."},{name:"Lay On Hands",description:"Your touch can heal injury and disease. When you lay your hands on someone hurt, roll +Cool."},{name:"Angel’s Call",description:"You can summon an angelic ally to assist you. Roll +Weird."}],gear:["Divine weapon (3-harm hand messy holy)","Holy armor (1-armour holy)"],ratings:["Charm +2, Cool +1, Sharp +0, Tough +2, Weird -1","Charm +1, Cool +2, Sharp +0, Tough +2, Weird -1","Charm +2, Cool +1, Sharp +1, Tough +0, Weird +1","Charm +0, Cool +1, Sharp +2, Tough +1, Weird -1","Charm +2, Cool +0, Sharp +1, Tough +2, Weird -1"],special:"When you spend a point of Luck, your higher power gives you a vision about the current mystery."},{name:"The Flake",description:"You see patterns that others don’t. You’re the one who connects the dots and sees the truth about the world.",moves:[{name:"Connect the Dots",description:"You see patterns that others don’t. You’re the one who connects the dots and sees the truth about the world."},{name:"Crazy Eyes",description:"When you use your sharp gaze to study something, roll +Sharp."},{name:"Net Friends",description:"When you contact your network of friends, roll +Charm."},{name:"Sneaky",description:"When you try to be sneaky, roll +Cool."},{name:"Suspicious Mind",description:"When you try to figure out if someone is lying, roll +Sharp."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Often Overlooked",description:"When you act all quiet and out of the way, roll +Cool."}],gear:["Hunting rifle (2-harm far loud)","Shotgun (3-harm close messy)","Big knife (1-harm hand)","Baseball bat (1-harm hand)"],ratings:["Charm +1, Cool +2, Sharp +1, Tough 0, Weird -1","Charm -1, Cool +2, Sharp +2, Tough 0, Weird 0","Charm +2, Cool +1, Sharp +2, Tough -1, Weird 0","Charm +1, Cool +1, Sharp +2, Tough 0, Weird +1"],special:"Whenever you spend a Luck point, you have a vision about the current mystery."},{name:"The Expert",description:"You have devoted your life to researching the supernatural and finding ways to deal with it. You have the knowledge and the tools to deal with these threats.",moves:[{name:"I’ve Read About This Sort of Thing",description:"You’ve read books, and you can use that knowledge."},{name:"Preparedness",description:"If you need something unusual, roll +Sharp."},{name:"Always the Victim",description:"When you’re attacked, roll +Cool."},{name:"Dark Past",description:"When you look into your past lives, roll +Weird."},{name:"Often Right",description:"When you’re right about something, gain +1 ongoing."},{name:"Soothe",description:"When you talk to someone for a few seconds, roll +Charm."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."}],gear:["Shotgun (3-harm close messy)","Big knife (1-harm hand)","Sword (3-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, something you have prepared comes in handy."},{name:"The Initiate",description:"You are part of an ancient secret order that fights against the darkness. You have access to their knowledge and resources.",moves:[{name:"Ancient Fighting Arts",description:"You have been trained to fight with ancient weapons. Roll +Tough."},{name:"Fortunes",description:"When you seek your order’s knowledge, roll +Weird."},{name:"Mentor",description:"You have a mentor who can help you. Roll +Charm."},{name:"Apprentice",description:"You are training someone. Roll +Sharp."},{name:"Sacred Oath",description:"You have sworn a sacred oath. Roll +Cool."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Big knife (1-harm hand)","Sword (2-harm hand)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your order provides you with valuable information or resources."},{name:"The Monstrous",description:"You are a creature of the night, but you fight for the good guys. You have supernatural abilities and a dark side.",moves:[{name:"Immortal",description:"You do not age, and you cannot die of old age. Roll +Weird."},{name:"Unholy Strength",description:"You have inhuman strength. Roll +Tough."},{name:"Preternatural Speed",description:"You have inhuman speed. Roll +Cool."},{name:"Dark Negotiator",description:"You can make deals with dark powers. Roll +Charm."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."},{name:"Natural Attack",description:"You have a natural attack. Roll +Tough."}],gear:["Claws (3-harm hand)","Fangs (2-harm intimate)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your dark side’s needs come to the fore."},{name:"The Mundane",description:"You are an ordinary person, caught up in the world of monsters and magic.",moves:[{name:"Always the Victim",description:"When you’re attacked, roll +Cool."},{name:"Don’t Worry, I’ll Check It Out",description:"When you go off alone to check out somewhere, roll +Cool."},{name:"Let’s Get Out of Here",description:"When you lead people out of danger, roll +Charm."},{name:"What Could Go Wrong?",description:"When you charge into immediate danger without hedging your bets, roll +Cool."},{name:"Trust Me",description:"When you tell a normal person the truth in order to protect them, roll +Charm."},{name:"Panic Button",description:"When you need to escape, roll +Cool."},{name:"The Power of Heart",description:"When fighting a monster, if you help someone, roll +Charm."}],gear:["Kitchen knife (1-harm hand)","Baseball bat (1-harm hand)","Fire axe (3-harm hand heavy)","Chainsaw (3-harm hand messy heavy)"],ratings:["Charm +2, Cool 0, Sharp +1, Tough 0, Weird -1","Charm +1, Cool +2, Sharp 0, Tough 0, Weird -1","Charm +2, Cool +1, Sharp 0, Tough -1, Weird 0","Charm +2, Cool 0, Sharp -1, Tough +1, Weird 0"],special:"Whenever you spend a Luck point, something goes terribly wrong."},{name:"The Professional",description:"You work for an organization that fights the supernatural. You have the training and resources to deal with these threats.",moves:[{name:"Battlefield Awareness",description:"You always know what’s happening around you. Roll +Sharp."},{name:"Tactical Genius",description:"When you plan a combat situation, roll +Sharp."},{name:"Heavy Weapons",description:"You are trained in the use of heavy weapons. Roll +Tough."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."},{name:"Cool Under Pressure",description:"You can take a moment to center yourself. Roll +Cool."}],gear:["Assault rifle (3-harm close/far area)","Submachinegun (2-harm close area)","Shotgun (3-harm close messy)","Hunting rifle (2-harm far loud)"],ratings:["Charm +1, Cool +2, Sharp +1, Tough 0, Weird -1","Charm -1, Cool +2, Sharp +2, Tough 0, Weird 0","Charm +2, Cool +1, Sharp +2, Tough -1, Weird 0","Charm +1, Cool +1, Sharp +2, Tough 0, Weird +1"],special:"Whenever you spend a Luck point, your organization provides you with valuable resources or support."},{name:"The Spooky",description:"You have psychic or supernatural abilities, but they come with a cost. Your powers are both a blessing and a curse.",moves:[{name:"Premonitions",description:"You get premonitions of danger. Roll +Weird."},{name:"The Big Whammy",description:"You can use your powers as a weapon. Roll +Weird."},{name:"Hex",description:"You can cast hexes. Roll +Weird."},{name:"The Sight",description:"You can see the invisible, especially spirits and magical influences. Roll +Weird."},{name:"Jinx",description:"You can encourage coincidences to occur, the way you want. Roll +Weird."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Protective amulet (1-armour)","Ancient weapon (2-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, your powers backfire in a dangerous way."},{name:"The Wronged",description:"You have suffered at the hands of the supernatural, and now you seek revenge. You are driven by anger and a need for justice.",moves:[{name:"I Know My Prey",description:"You have learned about your prey through personal experience. Roll +Sharp."},{name:"Berserk",description:"When you are enraged, you can fight without any concern for your own safety. Roll +Tough."},{name:"NEVER AGAIN",description:"In combat, you may choose to protect someone without rolling. Roll +Tough."},{name:"What Does Not Kill Me…",description:"If you survive an injury, you gain +1 forward. Roll +Cool."},{name:"The Big Picture",description:"When you start a mystery, roll +Sharp."},{name:"Resilience",description:"You heal faster than normal people."}],gear:["Hunting rifle (2-harm far loud)","Shotgun (3-harm close messy)","Big knife (1-harm hand)","Baseball bat (1-harm hand)"],ratings:["Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1","Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0","Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1","Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0"],special:"Whenever you spend a Luck point, you are driven to a reckless course of action."}],JT={name:"Profile",data(){return{profile:{name:"",age:"",background:"",playbook:""},playbooks:QT,selectedPlaybook:null,db:null,userId:localStorage.getItem("motw-uid")}},created(){this.app=Ot(Qt.firebaseConfig),this.db=Pt(this.app),this.fetchProfile()},methods:{fetchProfile(){const t=xe(this.db,"profiles/"+this.userId);_o(t).then(e=>{e.exists()?(this.profile=e.val(),this.selectPlaybook()):console.log("No profile data available")}).catch(e=>{console.error("Error fetching profile:",e)})},saveProfile(){const t=xe(this.db,"profiles/"+this.userId);Wi(t,this.profile).catch(e=>{console.error("Error saving profile:",e)})},selectPlaybook(){this.selectedPlaybook=this.playbooks.find(t=>t.name===this.profile.playbook)}}},xt=t=>(kt("data-v-b6d3955a"),t=t(),At(),t),XT={class:"profile"},ZT=xt(()=>m("h1",null,"Hunter Profile",-1)),eR={class:"form-group"},tR=xt(()=>m("label",{for:"name"},"Name:",-1)),nR={class:"form-group"},sR=xt(()=>m("label",{for:"age"},"Age:",-1)),iR={class:"form-group"},rR=xt(()=>m("label",{for:"background"},"Background:",-1)),oR={class:"form-group"},aR=xt(()=>m("label",{for:"playbook"},"Playbook:",-1)),lR=["value"],cR={key:0},uR={class:"playbook-details"},hR=xt(()=>m("h3",null,"Moves:",-1)),dR=xt(()=>m("h3",null,"Gear:",-1)),fR=xt(()=>m("h3",null,"Ratings:",-1)),pR=xt(()=>m("h3",null,"Special:",-1)),_R=xt(()=>m("button",{type:"submit"},"Save Profile",-1));function mR(t,e,n,s,i,r){return L(),U("div",XT,[ZT,m("form",{onSubmit:e[5]||(e[5]=Vn((...o)=>r.saveProfile&&r.saveProfile(...o),["prevent"]))},[m("div",eR,[tR,ce(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.profile.name=o),id:"name",required:""},null,512),[[he,i.profile.name]])]),m("div",nR,[sR,ce(m("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=o=>i.profile.age=o),id:"age",required:""},null,512),[[he,i.profile.age]])]),m("div",iR,[rR,ce(m("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.profile.background=o),id:"background",required:""},null,512),[[he,i.profile.background]])]),m("div",oR,[aR,ce(m("select",{"onUpdate:modelValue":e[3]||(e[3]=o=>i.profile.playbook=o),id:"playbook",onChange:e[4]||(e[4]=(...o)=>r.selectPlaybook&&r.selectPlaybook(...o))},[(L(!0),U(Ae,null,Lt(i.playbooks,o=>(L(),U("option",{key:o.name,value:o.name},re(o.name),9,lR))),128))],544),[[zm,i.profile.playbook]])]),i.selectedPlaybook?(L(),U("div",cR,[m("div",uR,[m("h2",null,re(i.selectedPlaybook.name),1),m("p",null,re(i.selectedPlaybook.description),1),hR,m("ul",null,[(L(!0),U(Ae,null,Lt(i.selectedPlaybook.moves,o=>(L(),U("li",{key:o.name},[m("strong",null,re(o.name),1),$e(": "+re(o.description),1)]))),128))]),dR,m("ul",null,[(L(!0),U(Ae,null,Lt(i.selectedPlaybook.gear,o=>(L(),U("li",{key:o},re(o),1))),128))]),fR,m("ul",null,[(L(!0),U(Ae,null,Lt(i.selectedPlaybook.ratings,o=>(L(),U("li",{key:o},re(o),1))),128))]),pR,m("p",null,re(i.selectedPlaybook.special),1)])])):ve("",!0),_R],32)])}const Ap=gt(JT,[["render",mR],["__scopeId","data-v-b6d3955a"]]),gR={name:"Dashboard",components:{CaseFiles:Rp,Bestiary:kp,Profile:Ap}},Np=t=>(kt("data-v-6fae6010"),t=t(),At(),t),yR={class:"dashboard"},vR=Np(()=>m("div",{class:"header"},[m("h1",{class:"title"},"Dashboard")],-1)),wR={class:"menu"},ER={class:"dashboard-sections"},CR={class:"dashboard-section"},bR={class:"dashboard-section"},IR={class:"dashboard-section"},SR=Np(()=>m("div",{class:"footer"},[m("p",null,"© 2024 The Night Watch")],-1));function TR(t,e,n,s,i,r){const o=ut("router-link"),a=ut("case-files"),l=ut("bestiary"),c=ut("profile");return L(),U("div",yR,[vR,m("ul",wR,[m("li",null,[te(o,{to:"/case-files"},{default:Ze(()=>[$e("Case Files")]),_:1})]),m("li",null,[te(o,{to:"/bestiary"},{default:Ze(()=>[$e("Bestiary")]),_:1})]),m("li",null,[te(o,{to:"/profile"},{default:Ze(()=>[$e("Profile")]),_:1})])]),m("main",null,[m("div",ER,[m("div",CR,[te(a)]),m("div",bR,[te(l)]),m("div",IR,[te(c)])])]),SR])}const RR=gt(gR,[["render",TR],["__scopeId","data-v-6fae6010"]]),PR={name:"CaseDetail",props:["id"],data(){return{caseFile:null,newNote:"",newClue:{summary:"",details:"",password:""},newLocation:{name:"",description:""},isAdmin:Fe.isAdmin}},created(){this.app=Ot(Qt.firebaseConfig),this.db=Pt(this.app),this.fetchCaseFile()},methods:{fetchCaseFile(){var t=xe(this.db,"caseFiles/"+this.id);_o(t).then(e=>{e.exists()?(this.caseFile=e.val(),this.caseFile.notes||(this.caseFile.notes=[]),this.caseFile.clues||(this.caseFile.clues=[]),this.caseFile.locations||(this.caseFile.locations=[])):console.log("No case data available")}).catch(e=>{console.error("Error fetching case:",e)})},addNote(){var t={content:this.newNote,timestamp:Date.now()};this.caseFile.notes.push(t),this.updateCaseFile(),this.newNote=""},addClue(){var t={id:Date.now().toString(),summary:this.newClue.summary,details:this.newClue.details,password:this.newClue.password,detailsVisible:!1,enteredPassword:""};this.caseFile.clues.push(t),this.updateCaseFile(),this.newClue={summary:"",details:"",password:""}},unlockClue(t){t.enteredPassword===t.password?t.detailsVisible=!0:alert("Incorrect password")},addLocation(){var t={name:this.newLocation.name,description:this.newLocation.description};this.caseFile.locations.push(t),this.updateCaseFile(),this.newLocation={name:"",description:""}},updateCaseFile(){var t=xe(this.db,"caseFiles/"+this.id);jl(t,this.caseFile).catch(e=>{console.error("Error updating case:",e)})}}},et=t=>(kt("data-v-87866a66"),t=t(),At(),t),kR={key:0,class:"case-detail"},AR={class:"locations"},NR=et(()=>m("h2",null,"Locations",-1)),OR=et(()=>m("label",{for:"location-name"},"Location Name:",-1)),xR=et(()=>m("label",{for:"location-description"},"Location Description:",-1)),DR=et(()=>m("button",{type:"submit"},"Add Location",-1)),MR={class:"clues"},LR=et(()=>m("h2",null,"Clues",-1)),FR=["onUpdate:modelValue"],UR=["onClick"],WR={key:0},VR={key:0},BR=et(()=>m("h3",null,"Add a Clue",-1)),$R=et(()=>m("label",{for:"clue-summary"},"Clue Summary:",-1)),HR=et(()=>m("label",{for:"clue-details"},"Clue Details:",-1)),jR=et(()=>m("label",{for:"clue-password"},"Clue Password:",-1)),qR=et(()=>m("button",{type:"submit"},"Add Clue",-1)),GR={class:"notes"},KR=et(()=>m("h2",null,"Notes",-1)),zR=et(()=>m("label",{for:"note"},"Add Note:",-1)),YR=et(()=>m("button",{type:"submit"},"Add Note",-1));function QR(t,e,n,s,i,r){const o=ut("router-link");return i.caseFile?(L(),U("div",kR,[m("h1",null,re(i.caseFile.title),1),m("p",null,re(i.caseFile.summary),1),m("p",null,re(i.caseFile.details),1),m("div",AR,[NR,m("ul",null,[(L(!0),U(Ae,null,Lt(i.caseFile.locations,a=>(L(),U("li",{key:a.name},[m("h3",null,re(a.name),1),m("p",null,re(a.description),1)]))),128))]),m("form",{onSubmit:e[2]||(e[2]=Vn((...a)=>r.addLocation&&r.addLocation(...a),["prevent"]))},[OR,ce(m("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>i.newLocation.name=a),id:"location-name",required:""},null,512),[[he,i.newLocation.name]]),xR,ce(m("textarea",{"onUpdate:modelValue":e[1]||(e[1]=a=>i.newLocation.description=a),id:"location-description",required:""},null,512),[[he,i.newLocation.description]]),DR],32)]),m("div",MR,[LR,m("ul",null,[(L(!0),U(Ae,null,Lt(i.caseFile.clues,a=>(L(),U("li",{class:"clue-item",key:a.id},[m("p",null,re(a.summary),1),ce(m("input",{type:"password","onUpdate:modelValue":l=>a.enteredPassword=l,placeholder:"Enter password to view clue"},null,8,FR),[[he,a.enteredPassword]]),m("button",{onClick:l=>r.unlockClue(a)},"Unlock Clue",8,UR),a.detailsVisible?(L(),U("p",WR,re(a.details),1)):ve("",!0)]))),128))]),i.isAdmin?(L(),U("div",VR,[BR,m("form",{onSubmit:e[6]||(e[6]=Vn((...a)=>r.addClue&&r.addClue(...a),["prevent"]))},[$R,ce(m("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>i.newClue.summary=a),id:"clue-summary",required:""},null,512),[[he,i.newClue.summary]]),HR,ce(m("textarea",{"onUpdate:modelValue":e[4]||(e[4]=a=>i.newClue.details=a),id:"clue-details",required:""},null,512),[[he,i.newClue.details]]),jR,ce(m("input",{type:"password","onUpdate:modelValue":e[5]||(e[5]=a=>i.newClue.password=a),id:"clue-password",required:""},null,512),[[he,i.newClue.password]]),qR],32)])):ve("",!0)]),m("div",GR,[KR,m("ul",null,[(L(!0),U(Ae,null,Lt(i.caseFile.notes,a=>(L(),U("li",{key:a.timestamp},re(a.content)+" ("+re(new Date(a.timestamp).toLocaleString())+") ",1))),128))]),m("form",{onSubmit:e[8]||(e[8]=Vn((...a)=>r.addNote&&r.addNote(...a),["prevent"]))},[zR,ce(m("textarea",{"onUpdate:modelValue":e[7]||(e[7]=a=>i.newNote=a),id:"note",required:""},null,512),[[he,i.newNote]]),YR],32)]),te(o,{to:"/case-files"},{default:Ze(()=>[$e("Back to Case Files")]),_:1})])):ve("",!0)}const JR=gt(PR,[["render",QR],["__scopeId","data-v-87866a66"]]),XR={name:"Acquisitions"},ZR=t=>(kt("data-v-25399de4"),t=t(),At(),t),e0={class:"acquisitions"},t0=ZR(()=>m("h1",null,"Acquisitions",-1)),n0=[t0];function s0(t,e,n,s,i,r){return L(),U("div",e0,n0)}const i0=gt(XR,[["render",s0],["__scopeId","data-v-25399de4"]]),r0=[{path:"/",name:"Home",component:cC},{path:"/login",name:"Login",component:DS},{path:"/dashboard",name:"Dashboard",component:RR},{path:"/case-files",name:"CaseFiles",component:Rp},{path:"/case-files/:id",name:"CaseDetail",component:JR,props:!0},{path:"/acquisitions",name:"Acquisitions",component:i0},{path:"/profile",name:"Profile",component:Ap},{path:"/bestiary",name:"Bestiary",component:kp}],o0=nC({history:NE(),routes:r0});Zm(eE).use(o0).mount("#app");
