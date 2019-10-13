!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="https://mantou132.github.io/audio-to-video/build/",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=new Set;function i(t){n.size||queueMicrotask(()=>{n.forEach(t=>t()),n.clear()}),n.delete(t),n.add(t)}var o;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(o||(o={}));class r{constructor(){this.cache={}}get(t,e){if(this.cache[e]||(this.cache[e]={}),t in this.cache[e])return this.cache[e][t];let s=window[e].getItem(t);if(s)try{const n=JSON.parse(s);return this.cache[e][t]=n,n}catch(s){window[e].removeItem(t)}}getLocal(t){return this.get(t,o.LOCALSTORAGE)}getSession(t){return this.get(t,o.SESSIONSTORAGE)}set(t,e,s){return this.cache[s]||(this.cache[s]={}),this.cache[s][t]=e,window[s].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,o.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,o.SESSIONSTORAGE)}}class a extends URLSearchParams{constructor(t){if(t instanceof a)return t;"string"==typeof t?super(t):t?(super(),Object.keys(t).forEach(e=>{this.append(e,t[e])})):super()}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t)):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}new WeakMap;const l=Symbol("handles key");function h(t){const e=t;return e[l]=new Set,e}function c(t,e){Object.assign(t,e),t[l].forEach(t=>{i(t)})}function d(t,e){t[l].delete(e)}const u=h({list:[{}],currentIndex:0}),p=new WeakMap,m=new WeakMap,f=new WeakMap;function g(t,e,s,n){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign({},t,{$key:Date.now()+performance.now(),$open:!!e,$close:!!s,$shouldClose:!!n});return p.set(i,e),m.set(i,s),f.set(i,n),i}let w="",v={historyState:u,get basePath(){return w},set basePath(t){const{list:e,currentIndex:s}=u;e[s].path=window.location.pathname.replace(new RegExp(`^${t}`),""),c(u,{}),w=t},get location(){const{list:t,currentIndex:e}=u,s=t[e];return{get query(){return new a(s.query)},hash:s.hash,path:s.path,state:s.state,title:s.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",l=t.title||"",h=g(t.data||{},s,n,i);window.history.pushState(h,l,v.basePath+e+new a(o)+r);const{list:d,currentIndex:p}=u;r!==d[p].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const m=d.slice(0,p+1).concat({state:h,title:l,path:e,query:o,hash:r});c(u,{list:m,currentIndex:m.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:s}=u,{state:n}=e[s];if(n.$close){m.get(n)(),v.replace(t)}else v.push(t)},pushState(t){const{list:e,currentIndex:s}=u,{path:n,query:i,hash:o}=e[s];v.push(Object.assign({path:n,query:i,hash:o},t))},replace(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",l=t.data||{},h=t.title||"",d=g(l,s,n,i);window.history.replaceState(d,h,v.basePath+e+new a(o)+r);const{list:p,currentIndex:m}=u;r!==p[m].hash&&window.dispatchEvent(new CustomEvent("hashchange")),p.splice(m,1,{state:d,title:h,path:e,query:o,hash:r}),c(u,{list:p})},replaceState(t){const{list:e,currentIndex:s}=u,{path:n,query:i,hash:o}=e[s];v.replace(Object.assign({path:n,query:i,hash:o},t))}};if(!!window.__gemHistory){const t=(v=window.__gemHistory).basePath;Object.defineProperty(v,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=v,window.history.state)window.history.state.$close&&v.back();else{const{pathname:t,search:e,hash:s}=window.location;v.replace({path:t,query:e,hash:s})}const t=new r,e="gem@historyStateList";c(u,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,u)});let s=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(s)return void(s=!1);const{list:e,currentIndex:n}=u,{state:i}=e[n],o=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===o)return;const{state:r}=e[o];if(o>n&&r.$open){const t=p.get(r);t&&t()}else if(i.$close){const t=m.get(i),e=f.get(i);if(e&&!e())return s=!0,void v.forward();t?t():(s=!0,v.back())}c(u,{currentIndex:o})})}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=new WeakMap,y=t=>(...e)=>{const s=t(...e);return _.set(s,!0),s},b=t=>"function"==typeof t&&_.has(t),x=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,S=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},N=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},E={},C={},k=`{{lit-${String(Math.random()).slice(2)}}}`,A=`\x3c!--${k}--\x3e`,M=new RegExp(`${k}|${A}`),O="$lit$";class T{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)V(e[t].name,O)&&n++;for(;n-- >0;){const e=l[a],s=L.exec(e)[2],n=s.toLowerCase()+O,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(M);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(k)>=0){const n=t.parentNode,i=e.split(M),o=i.length-1;for(let e=0;e<o;e++){let s,o=i[e];if(""===o)s=$();else{const t=L.exec(o);null!==t&&V(t[2],O)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-O.length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore($(),t),s.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===k){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore($(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(k,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const V=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},I=t=>-1!==t.index,$=()=>document.createComment(""),L=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class P{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=x?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],I(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return x&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class j{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const o=L.exec(t);e+=null===o?t+(s?k:A):t.substr(0,o.index)+o[1]+o[2]+O+o[3]+k}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class R extends j{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),S(e,s.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=t=>null===t||!("object"==typeof t||"function"==typeof t),q=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class W{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new F(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(H(t)||!q(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class F{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===E||H(t)&&t===this.value||(this.value=t,b(t)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const t=this.value;this.value=E,t(this)}this.value!==E&&this.committer.commit()}}class B{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild($()),this.endNode=t.appendChild($())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=$()),t.__insert(this.endNode=$())}insertAfterPart(t){t.__insert(this.startNode=$()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;b(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=E,t(this)}const t=this.__pendingValue;t!==E&&(H(t)?t!==this.value&&this.__commitText(t):t instanceof j?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):q(t)?this.__commitIterable(t):t===C?(this.value=C,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof P&&this.value.template===e)this.value.update(t.values);else{const s=new P(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)void 0===(s=e[n])&&(s=new B(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){N(this.startNode.parentNode,t.nextSibling,this.endNode)}}class U{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;b(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=E,t(this)}if(this.__pendingValue===E)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=E}}class G extends W{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new D(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class D extends F{}let z=!1;try{const t={get capture(){return z=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class J{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;b(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=E,t(this)}if(this.__pendingValue===E)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=K(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=E}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const K=t=>t&&(z?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Q=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];return"."===i?new G(t,e.slice(1),s).parts:"@"===i?[new J(t,e.slice(1),n.eventContext)]:"?"===i?[new U(t,e.slice(1),s)]:new W(t,e,s).parts}handleTextExpression(t){return new B(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function X(t){let e=Y.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Y.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(k);return void 0===(s=e.keyString.get(n))&&(s=new T(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const Y=new Map,Z=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1");const tt=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,i=s.insertBefore($(),n);s.insertBefore($(),n);const o=new B(t.options);return o.insertAfterNode(i),o},et=(t,e)=>(t.setValue(e),t.commit(),t),st=(t,e,s)=>{const n=t.startNode.parentNode,i=s?s.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&S(n,e.startNode,o,i)},nt=t=>{N(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},it=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},ot=new WeakMap,rt=new WeakMap,at=y((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof B))throw new Error("repeat can only be used in text bindings");const i=ot.get(e)||[],o=rt.get(e)||[],r=[],a=[],l=[];let h,c,d=0;for(const e of t)l[d]=n?n(e,d):d,a[d]=s(e,d),d++;let u=0,p=i.length-1,m=0,f=a.length-1;for(;u<=p&&m<=f;)if(null===i[u])u++;else if(null===i[p])p--;else if(o[u]===l[m])r[m]=et(i[u],a[m]),u++,m++;else if(o[p]===l[f])r[f]=et(i[p],a[f]),p--,f--;else if(o[u]===l[f])r[f]=et(i[u],a[f]),st(e,i[u],r[f+1]),u++,f--;else if(o[p]===l[m])r[m]=et(i[p],a[m]),st(e,i[p],i[u]),p--,m++;else if(void 0===h&&(h=it(l,m,f),c=it(o,u,p)),h.has(o[u]))if(h.has(o[p])){const t=c.get(l[m]),s=void 0!==t?i[t]:null;if(null===s){const t=tt(e,i[u]);et(t,a[m]),r[m]=t}else r[m]=et(s,a[m]),st(e,s,i[u]),i[t]=null;m++}else nt(i[p]),p--;else nt(i[u]),u++;for(;m<=f;){const t=tt(e,r[f+1]);et(t,a[m]),r[m++]=t}for(;u<=p;){const t=i[u++];null!==t&&nt(t)}ot.set(e,r),rt.set(e,l)}}),lt=y(t=>e=>{if(void 0===t&&e instanceof F){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let ht={html:(t,...e)=>new j(t,e,"html",Q),svg:(t,...e)=>new R(t,e,"svg",Q),render:(t,e,s)=>{let n=Z.get(e);void 0===n&&(N(e,e.firstChild),Z.set(e,n=new B(Object.assign({templateFactory:X},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:y,repeat:at,ifDefined:lt};window.__litHtml?ht=window.__litHtml:window.__litHtml=ht;const{html:ct,svg:dt,render:ut,directive:pt,repeat:mt,ifDefined:ft}=ht,gt=new Map,wt=()=>{const t=window.location.hash.substr(1);if(t){const e=gt.get(t);e&&e.scrollIntoView()}};window.addEventListener("hashchange",wt),"complete"===document.readyState?wt():window.addEventListener("load",wt);const vt=new class{constructor(){this.currentId=0,this.count=0,this.pool=new Map}add(t){this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1),t}},_t=()=>window.requestAnimationFrame(function t(e){const s=vt.get();s&&(s(),performance.now()-e<16)?t(e):_t()});_t();new Set;class yt extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.update=this.update.bind(this),this.updated=this.updated.bind(this),this.disconnectStores=this.disconnectStores.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this._renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,observedStores:n,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{Object.defineProperty(this,t,{get:()=>this.getAttribute(t)||"",set:e=>{null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),e&&!e.includes("id")&&e.push("id"),s&&s.forEach(t=>{let e;Object.defineProperty(this,t,{get:()=>e,set:s=>{s!==e&&(e=s,this._isMounted&&(this.propertyChanged(t,e,s),i(this.update)))}})}),n&&n.forEach(t=>{if(!t[l])throw new Error("`observedStores` only support store module");!function(t,e){t[l].add(e)}(t,this.update)}),o&&((this.shadowRoot||document).adoptedStyleSheets=o)}setState(t){Object.assign(this.state,t),i(this.update)}willMount(){}render(){return ct`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}update(){this._isMounted&&this.shouldUpdate()&&(ut(this.render(),this._renderRoot),this.updated(),gt.set(this.id,this))}updated(){}disconnectStores(t){t.forEach(t=>{d(t,this.update)})}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this._isMounted&&(this.attributeChanged(t,e,s),i(this.update))}disconnectedCallback(){const t=this.constructor;t.observedStores&&t.observedStores.forEach(t=>{d(t,this.update)}),this.unmounted(),this._isMounted=!1}}yt.observedAttributes=["id"];class bt extends yt{connectedCallback(){this.willMount(),ut(this.render(),this._renderRoot),this.mounted(),gt.set(this.id,this),this._isMounted=!0}}const xt=customElements.define.bind(customElements);customElements.define=function(t,e,s){customElements.get(t)||xt(t,e,s)};var St=function(t,e,s,n){return new(s||(s=Promise))(function(i,o){function r(t){try{l(n.next(t))}catch(t){o(t)}}function a(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s(function(t){t(e)})).then(r,a)}l((n=n.apply(t,e||[])).next())})};customElements.define("app-root",class extends bt{constructor(){super(...arguments),this.onClick=()=>St(this,void 0,void 0,function*(){this.audio.captureStream=this.audio.captureStream||this.audio.mozCaptureStream;const t=this.audio.captureStream().getAudioTracks()[0],e=this.canvas.captureStream(25).getVideoTracks()[0];console.log({ams:t,ims:e}),this.audio.currentTime=0,yield this.audio.play();const s=new MediaStream([e,t]);console.log({vms:s}),this.video.onerror=console.error,this.video.srcObject=s,this.video.play(),this.mr=new MediaRecorder(s),this.mr.ondataavailable=console.log,this.mr.onerror=console.error,this.mr.onstart=console.log,this.mr.onstop=console.log,this.mr.start()}),this.onStop=()=>{this.audio.pause(),this.video.pause(),this.mr.stop()}}get audio(){return this.shadowRoot.querySelector("audio")}get canvas(){return this.shadowRoot.querySelector("canvas")}get video(){return this.shadowRoot.querySelector("video")}mounted(){const t=this.canvas.getContext("2d"),e=()=>{t.rect(10,10,150,100),t.fill(),window.requestAnimationFrame(e)};window.requestAnimationFrame(e)}render(){return ct`
      <canvas></canvas>
      <audio
        muted
        crossorigin="anonymous"
        src="https://raw.githubusercontent.com/mantou132/javascript-learn/master/media-session/take-me-hand.mp3"
      ></audio>
      <button @click=${this.onClick}>play</button>
      <button @click=${this.onStop}>stop</button>
      <video controls muted></video>
    `}}),ut(ct`
    <style>
      html,
      body {
        height: 100%;
      }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
          'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      app-root {
        width: 50%;
      }
    </style>
    <app-root></app-root>
  `,document.body)}]);
//# sourceMappingURL=bundle.75df956c96840e650656.js.map