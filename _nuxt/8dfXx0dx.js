import{f as Hh,q as Je,s as Wh}from"./BZoLRGKd.js";var za={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Kh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],h=n[e++],m=((i&7)<<18|(o&63)<<12|(l&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(m>>10)),t[r++]=String.fromCharCode(56320+(m&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,h=l?n[i+1]:0,m=i+2<n.length,w=m?n[i+2]:0,v=o>>2,P=(o&3)<<4|h>>4;let D=(h&15)<<2|w>>6,O=w&63;m||(O=64,l||(D=64)),r.push(e[v],e[P],e[D],e[O])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray($l(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Kh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const w=i<n.length?e[n.charAt(i)]:64;++i;const P=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||w==null||P==null)throw new Gh;const D=o<<2|h>>4;if(r.push(D),w!==64){const O=h<<4&240|w>>2;if(r.push(O),P!==64){const B=w<<6&192|P;r.push(B)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qh=function(n){const t=$l(n);return zl.encodeByteArray(t,!0)},ws=function(n){return Qh(n).replace(/\./g,"")},Xh=function(n){try{return zl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Yh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jh=()=>Yh().__FIREBASE_DEFAULTS__,Zh=()=>{if(typeof process>"u"||typeof za>"u")return;const n=za.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},td=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Xh(n[1]);return t&&JSON.parse(t)},Lo=()=>{try{return Jh()||Zh()||td()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ed=n=>{var t,e;return(e=(t=Lo())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Hl=n=>{const t=ed(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Wl=()=>{var n;return(n=Lo())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Kl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ws(JSON.stringify(e)),ws(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function id(){var n;const t=(n=Lo())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function sd(){return!id()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function od(){try{return typeof indexedDB=="object"}catch{return!1}}function ad(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="FirebaseError";class Bn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ld,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gl.prototype.create)}}class Gl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?ud(o,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new Bn(i,h,r)}}function ud(n,t){return n.replace(cd,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const cd=/\{\$([^}]+)}/g;function go(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(Ha(o)&&Ha(l)){if(!go(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ha(n){return n!==null&&typeof n=="object"}/**
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
 */function ge(n){return n&&n._delegate?n._delegate:n}class fr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const kn="[DEFAULT]";/**
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
 */class hd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new nd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fd(t))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=kn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=kn){return this.instances.has(t)}getOptions(t=kn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&l.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=kn){return this.component?this.component.multipleInstances?t:kn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dd(n){return n===kn?void 0:n}function fd(n){return n.instantiationMode==="EAGER"}/**
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
 */class pd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new hd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(it||(it={}));const md={debug:it.DEBUG,verbose:it.VERBOSE,info:it.INFO,warn:it.WARN,error:it.ERROR,silent:it.SILENT},gd=it.INFO,wd={[it.DEBUG]:"log",[it.VERBOSE]:"log",[it.INFO]:"info",[it.WARN]:"warn",[it.ERROR]:"error"},yd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=wd[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ql{constructor(t){this.name=t,this._logLevel=gd,this._logHandler=yd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in it))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?md[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,it.DEBUG,...t),this._logHandler(this,it.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,it.VERBOSE,...t),this._logHandler(this,it.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,it.INFO,...t),this._logHandler(this,it.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,it.WARN,...t),this._logHandler(this,it.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,it.ERROR,...t),this._logHandler(this,it.ERROR,...t)}}const _d=(n,t)=>t.some(e=>n instanceof e);let Wa,Ka;function vd(){return Wa||(Wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ed(){return Ka||(Ka=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xl=new WeakMap,wo=new WeakMap,Yl=new WeakMap,so=new WeakMap,Fo=new WeakMap;function Td(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(en(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Xl.set(e,n)}).catch(()=>{}),Fo.set(t,n),t}function bd(n){if(wo.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});wo.set(n,t)}let yo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return wo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Yl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return en(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ad(n){yo=n(yo)}function Id(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(oo(this),t,...e);return Yl.set(r,t.sort?t.sort():[t]),en(r)}:Ed().includes(n)?function(...t){return n.apply(oo(this),t),en(Xl.get(this))}:function(...t){return en(n.apply(oo(this),t))}}function Cd(n){return typeof n=="function"?Id(n):(n instanceof IDBTransaction&&bd(n),_d(n,vd())?new Proxy(n,yo):n)}function en(n){if(n instanceof IDBRequest)return Td(n);if(so.has(n))return so.get(n);const t=Cd(n);return t!==n&&(so.set(n,t),Fo.set(t,n)),t}const oo=n=>Fo.get(n);function Rd(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),h=en(l);return r&&l.addEventListener("upgradeneeded",m=>{r(en(l.result),m.oldVersion,m.newVersion,en(l.transaction),m)}),e&&l.addEventListener("blocked",m=>e(m.oldVersion,m.newVersion,m)),h.then(m=>{o&&m.addEventListener("close",()=>o()),i&&m.addEventListener("versionchange",w=>i(w.oldVersion,w.newVersion,w))}).catch(()=>{}),h}const Pd=["get","getKey","getAll","getAllKeys","count"],Sd=["put","add","delete","clear"],ao=new Map;function Ga(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ao.get(t))return ao.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Sd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Pd.includes(e)))return;const o=async function(l,...h){const m=this.transaction(l,i?"readwrite":"readonly");let w=m.store;return r&&(w=w.index(h.shift())),(await Promise.all([w[e](...h),i&&m.done]))[0]};return ao.set(t,o),o}Ad(n=>({...n,get:(t,e,r)=>Ga(t,e)||n.get(t,e,r),has:(t,e)=>!!Ga(t,e)||n.has(t,e)}));/**
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
 */class kd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Vd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Vd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _o="@firebase/app",Qa="0.10.5";/**
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
 */const On=new Ql("@firebase/app"),Dd="@firebase/app-compat",xd="@firebase/analytics-compat",Od="@firebase/analytics",Nd="@firebase/app-check-compat",Md="@firebase/app-check",Ld="@firebase/auth",Fd="@firebase/auth-compat",Bd="@firebase/database",Ud="@firebase/database-compat",jd="@firebase/functions",qd="@firebase/functions-compat",$d="@firebase/installations",zd="@firebase/installations-compat",Hd="@firebase/messaging",Wd="@firebase/messaging-compat",Kd="@firebase/performance",Gd="@firebase/performance-compat",Qd="@firebase/remote-config",Xd="@firebase/remote-config-compat",Yd="@firebase/storage",Jd="@firebase/storage-compat",Zd="@firebase/firestore",tf="@firebase/vertexai-preview",ef="@firebase/firestore-compat",nf="firebase",rf="10.12.2";/**
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
 */const vo="[DEFAULT]",sf={[_o]:"fire-core",[Dd]:"fire-core-compat",[Od]:"fire-analytics",[xd]:"fire-analytics-compat",[Md]:"fire-app-check",[Nd]:"fire-app-check-compat",[Ld]:"fire-auth",[Fd]:"fire-auth-compat",[Bd]:"fire-rtdb",[Ud]:"fire-rtdb-compat",[jd]:"fire-fn",[qd]:"fire-fn-compat",[$d]:"fire-iid",[zd]:"fire-iid-compat",[Hd]:"fire-fcm",[Wd]:"fire-fcm-compat",[Kd]:"fire-perf",[Gd]:"fire-perf-compat",[Qd]:"fire-rc",[Xd]:"fire-rc-compat",[Yd]:"fire-gcs",[Jd]:"fire-gcs-compat",[Zd]:"fire-fst",[ef]:"fire-fst-compat",[tf]:"fire-vertex","fire-js":"fire-js",[nf]:"fire-js-all"};/**
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
 */const ys=new Map,of=new Map,Eo=new Map;function Xa(n,t){try{n.container.addComponent(t)}catch(e){On.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function si(n){const t=n.name;if(Eo.has(t))return On.debug(`There were multiple attempts to register component ${t}.`),!1;Eo.set(t,n);for(const e of ys.values())Xa(e,n);for(const e of of.values())Xa(e,n);return!0}function Jl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const af={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nn=new Gl("app","Firebase",af);/**
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
 */class lf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
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
 */const Zl=rf;function tu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:vo,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw nn.create("bad-app-name",{appName:String(i)});if(e||(e=Wl()),!e)throw nn.create("no-options");const o=ys.get(i);if(o){if(go(e,o.options)&&go(r,o.config))return o;throw nn.create("duplicate-app",{appName:i})}const l=new pd(i);for(const m of Eo.values())l.addComponent(m);const h=new lf(e,r,l);return ys.set(i,h),h}function eu(n=vo){const t=ys.get(n);if(!t&&n===vo&&Wl())return tu();if(!t)throw nn.create("no-app",{appName:n});return t}function rn(n,t,e){var r;let i=(r=sf[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${t}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),On.warn(h.join(" "));return}si(new fr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const uf="firebase-heartbeat-database",cf=1,oi="firebase-heartbeat-store";let lo=null;function nu(){return lo||(lo=Rd(uf,cf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(oi)}catch(e){console.warn(e)}}}}).catch(n=>{throw nn.create("idb-open",{originalErrorMessage:n.message})})),lo}async function hf(n){try{const e=(await nu()).transaction(oi),r=await e.objectStore(oi).get(ru(n));return await e.done,r}catch(t){if(t instanceof Bn)On.warn(t.message);else{const e=nn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});On.warn(e.message)}}}async function Ya(n,t){try{const r=(await nu()).transaction(oi,"readwrite");await r.objectStore(oi).put(t,ru(n)),await r.done}catch(e){if(e instanceof Bn)On.warn(e.message);else{const r=nn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});On.warn(r.message)}}}function ru(n){return`${n.name}!${n.options.appId}`}/**
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
 */const df=1024,ff=30*24*60*60*1e3;class pf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new gf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ja();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const h=new Date(l.date).valueOf();return Date.now()-h<=ff}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ja(),{heartbeatsToSend:r,unsentEntries:i}=mf(this._heartbeatsCache.heartbeats),o=ws(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ja(){return new Date().toISOString().substring(0,10)}function mf(n,t=df){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Za(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Za(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class gf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return od()?ad().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await hf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ya(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ya(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Za(n){return ws(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function wf(n){si(new fr("platform-logger",t=>new kd(t),"PRIVATE")),si(new fr("heartbeat",t=>new pf(t),"PRIVATE")),rn(_o,Qa,n),rn(_o,Qa,"esm2017"),rn("fire-js","")}wf("");var yf="firebase",_f="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(yf,_f,"app");var tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dn,iu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,_){function T(){}T.prototype=_.prototype,I.D=_.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(b,A,R){for(var E=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)E[ce-2]=arguments[ce];return _.prototype[A].apply(b,E)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,T){T||(T=0);var b=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)b[A]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(A=0;16>A;++A)b[A]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=I.g[0],T=I.g[1],A=I.g[2];var R=I.g[3],E=_+(R^T&(A^R))+b[0]+3614090360&4294967295;_=T+(E<<7&4294967295|E>>>25),E=R+(A^_&(T^A))+b[1]+3905402710&4294967295,R=_+(E<<12&4294967295|E>>>20),E=A+(T^R&(_^T))+b[2]+606105819&4294967295,A=R+(E<<17&4294967295|E>>>15),E=T+(_^A&(R^_))+b[3]+3250441966&4294967295,T=A+(E<<22&4294967295|E>>>10),E=_+(R^T&(A^R))+b[4]+4118548399&4294967295,_=T+(E<<7&4294967295|E>>>25),E=R+(A^_&(T^A))+b[5]+1200080426&4294967295,R=_+(E<<12&4294967295|E>>>20),E=A+(T^R&(_^T))+b[6]+2821735955&4294967295,A=R+(E<<17&4294967295|E>>>15),E=T+(_^A&(R^_))+b[7]+4249261313&4294967295,T=A+(E<<22&4294967295|E>>>10),E=_+(R^T&(A^R))+b[8]+1770035416&4294967295,_=T+(E<<7&4294967295|E>>>25),E=R+(A^_&(T^A))+b[9]+2336552879&4294967295,R=_+(E<<12&4294967295|E>>>20),E=A+(T^R&(_^T))+b[10]+4294925233&4294967295,A=R+(E<<17&4294967295|E>>>15),E=T+(_^A&(R^_))+b[11]+2304563134&4294967295,T=A+(E<<22&4294967295|E>>>10),E=_+(R^T&(A^R))+b[12]+1804603682&4294967295,_=T+(E<<7&4294967295|E>>>25),E=R+(A^_&(T^A))+b[13]+4254626195&4294967295,R=_+(E<<12&4294967295|E>>>20),E=A+(T^R&(_^T))+b[14]+2792965006&4294967295,A=R+(E<<17&4294967295|E>>>15),E=T+(_^A&(R^_))+b[15]+1236535329&4294967295,T=A+(E<<22&4294967295|E>>>10),E=_+(A^R&(T^A))+b[1]+4129170786&4294967295,_=T+(E<<5&4294967295|E>>>27),E=R+(T^A&(_^T))+b[6]+3225465664&4294967295,R=_+(E<<9&4294967295|E>>>23),E=A+(_^T&(R^_))+b[11]+643717713&4294967295,A=R+(E<<14&4294967295|E>>>18),E=T+(R^_&(A^R))+b[0]+3921069994&4294967295,T=A+(E<<20&4294967295|E>>>12),E=_+(A^R&(T^A))+b[5]+3593408605&4294967295,_=T+(E<<5&4294967295|E>>>27),E=R+(T^A&(_^T))+b[10]+38016083&4294967295,R=_+(E<<9&4294967295|E>>>23),E=A+(_^T&(R^_))+b[15]+3634488961&4294967295,A=R+(E<<14&4294967295|E>>>18),E=T+(R^_&(A^R))+b[4]+3889429448&4294967295,T=A+(E<<20&4294967295|E>>>12),E=_+(A^R&(T^A))+b[9]+568446438&4294967295,_=T+(E<<5&4294967295|E>>>27),E=R+(T^A&(_^T))+b[14]+3275163606&4294967295,R=_+(E<<9&4294967295|E>>>23),E=A+(_^T&(R^_))+b[3]+4107603335&4294967295,A=R+(E<<14&4294967295|E>>>18),E=T+(R^_&(A^R))+b[8]+1163531501&4294967295,T=A+(E<<20&4294967295|E>>>12),E=_+(A^R&(T^A))+b[13]+2850285829&4294967295,_=T+(E<<5&4294967295|E>>>27),E=R+(T^A&(_^T))+b[2]+4243563512&4294967295,R=_+(E<<9&4294967295|E>>>23),E=A+(_^T&(R^_))+b[7]+1735328473&4294967295,A=R+(E<<14&4294967295|E>>>18),E=T+(R^_&(A^R))+b[12]+2368359562&4294967295,T=A+(E<<20&4294967295|E>>>12),E=_+(T^A^R)+b[5]+4294588738&4294967295,_=T+(E<<4&4294967295|E>>>28),E=R+(_^T^A)+b[8]+2272392833&4294967295,R=_+(E<<11&4294967295|E>>>21),E=A+(R^_^T)+b[11]+1839030562&4294967295,A=R+(E<<16&4294967295|E>>>16),E=T+(A^R^_)+b[14]+4259657740&4294967295,T=A+(E<<23&4294967295|E>>>9),E=_+(T^A^R)+b[1]+2763975236&4294967295,_=T+(E<<4&4294967295|E>>>28),E=R+(_^T^A)+b[4]+1272893353&4294967295,R=_+(E<<11&4294967295|E>>>21),E=A+(R^_^T)+b[7]+4139469664&4294967295,A=R+(E<<16&4294967295|E>>>16),E=T+(A^R^_)+b[10]+3200236656&4294967295,T=A+(E<<23&4294967295|E>>>9),E=_+(T^A^R)+b[13]+681279174&4294967295,_=T+(E<<4&4294967295|E>>>28),E=R+(_^T^A)+b[0]+3936430074&4294967295,R=_+(E<<11&4294967295|E>>>21),E=A+(R^_^T)+b[3]+3572445317&4294967295,A=R+(E<<16&4294967295|E>>>16),E=T+(A^R^_)+b[6]+76029189&4294967295,T=A+(E<<23&4294967295|E>>>9),E=_+(T^A^R)+b[9]+3654602809&4294967295,_=T+(E<<4&4294967295|E>>>28),E=R+(_^T^A)+b[12]+3873151461&4294967295,R=_+(E<<11&4294967295|E>>>21),E=A+(R^_^T)+b[15]+530742520&4294967295,A=R+(E<<16&4294967295|E>>>16),E=T+(A^R^_)+b[2]+3299628645&4294967295,T=A+(E<<23&4294967295|E>>>9),E=_+(A^(T|~R))+b[0]+4096336452&4294967295,_=T+(E<<6&4294967295|E>>>26),E=R+(T^(_|~A))+b[7]+1126891415&4294967295,R=_+(E<<10&4294967295|E>>>22),E=A+(_^(R|~T))+b[14]+2878612391&4294967295,A=R+(E<<15&4294967295|E>>>17),E=T+(R^(A|~_))+b[5]+4237533241&4294967295,T=A+(E<<21&4294967295|E>>>11),E=_+(A^(T|~R))+b[12]+1700485571&4294967295,_=T+(E<<6&4294967295|E>>>26),E=R+(T^(_|~A))+b[3]+2399980690&4294967295,R=_+(E<<10&4294967295|E>>>22),E=A+(_^(R|~T))+b[10]+4293915773&4294967295,A=R+(E<<15&4294967295|E>>>17),E=T+(R^(A|~_))+b[1]+2240044497&4294967295,T=A+(E<<21&4294967295|E>>>11),E=_+(A^(T|~R))+b[8]+1873313359&4294967295,_=T+(E<<6&4294967295|E>>>26),E=R+(T^(_|~A))+b[15]+4264355552&4294967295,R=_+(E<<10&4294967295|E>>>22),E=A+(_^(R|~T))+b[6]+2734768916&4294967295,A=R+(E<<15&4294967295|E>>>17),E=T+(R^(A|~_))+b[13]+1309151649&4294967295,T=A+(E<<21&4294967295|E>>>11),E=_+(A^(T|~R))+b[4]+4149444226&4294967295,_=T+(E<<6&4294967295|E>>>26),E=R+(T^(_|~A))+b[11]+3174756917&4294967295,R=_+(E<<10&4294967295|E>>>22),E=A+(_^(R|~T))+b[2]+718787259&4294967295,A=R+(E<<15&4294967295|E>>>17),E=T+(R^(A|~_))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var T=_-this.blockSize,b=this.B,A=this.h,R=0;R<_;){if(A==0)for(;R<=T;)i(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<_;)if(b[A++]=I.charCodeAt(R++),A==this.blockSize){i(this,b),A=0;break}}else for(;R<_;)if(b[A++]=I[R++],A==this.blockSize){i(this,b),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var T=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=T&255,T/=256;for(this.u(I),I=Array(16),_=T=0;4>_;++_)for(var b=0;32>b;b+=8)I[T++]=this.g[_]>>>b&255;return I};function o(I,_){var T=h;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=_(I)}function l(I,_){this.h=_;for(var T=[],b=!0,A=I.length-1;0<=A;A--){var R=I[A]|0;b&&R==_||(T[A]=R,b=!1)}this.g=T}var h={};function m(I){return-128<=I&&128>I?o(I,function(_){return new l([_|0],0>_?-1:0)}):new l([I|0],0>I?-1:0)}function w(I){if(isNaN(I)||!isFinite(I))return P;if(0>I)return L(w(-I));for(var _=[],T=1,b=0;I>=T;b++)_[b]=I/T|0,T*=4294967296;return new l(_,0)}function v(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return L(v(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=w(Math.pow(_,8)),b=P,A=0;A<I.length;A+=8){var R=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+R),_);8>R?(R=w(Math.pow(_,R)),b=b.j(R).add(w(E))):(b=b.j(T),b=b.add(w(E)))}return b}var P=m(0),D=m(1),O=m(16777216);n=l.prototype,n.m=function(){if(q(this))return-L(this).m();for(var I=0,_=1,T=0;T<this.g.length;T++){var b=this.i(T);I+=(0<=b?b:4294967296+b)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(B(this))return"0";if(q(this))return"-"+L(this).toString(I);for(var _=w(Math.pow(I,6)),T=this,b="";;){var A=tt(T,_).g;T=J(T,A.j(_));var R=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=A,B(T))return R+b;for(;6>R.length;)R="0"+R;b=R+b}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function B(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function q(I){return I.h==-1}n.l=function(I){return I=J(this,I),q(I)?-1:B(I)?0:1};function L(I){for(var _=I.g.length,T=[],b=0;b<_;b++)T[b]=~I.g[b];return new l(T,~I.h).add(D)}n.abs=function(){return q(this)?L(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],b=0,A=0;A<=_;A++){var R=b+(this.i(A)&65535)+(I.i(A)&65535),E=(R>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);b=E>>>16,R&=65535,E&=65535,T[A]=E<<16|R}return new l(T,T[T.length-1]&-2147483648?-1:0)};function J(I,_){return I.add(L(_))}n.j=function(I){if(B(this)||B(I))return P;if(q(this))return q(I)?L(this).j(L(I)):L(L(this).j(I));if(q(I))return L(this.j(L(I)));if(0>this.l(O)&&0>I.l(O))return w(this.m()*I.m());for(var _=this.g.length+I.g.length,T=[],b=0;b<2*_;b++)T[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<I.g.length;A++){var R=this.i(b)>>>16,E=this.i(b)&65535,ce=I.i(A)>>>16,cn=I.i(A)&65535;T[2*b+2*A]+=E*cn,K(T,2*b+2*A),T[2*b+2*A+1]+=R*cn,K(T,2*b+2*A+1),T[2*b+2*A+1]+=E*ce,K(T,2*b+2*A+1),T[2*b+2*A+2]+=R*ce,K(T,2*b+2*A+2)}for(b=0;b<_;b++)T[b]=T[2*b+1]<<16|T[2*b];for(b=_;b<2*_;b++)T[b]=0;return new l(T,0)};function K(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function Z(I,_){this.g=I,this.h=_}function tt(I,_){if(B(_))throw Error("division by zero");if(B(I))return new Z(P,P);if(q(I))return _=tt(L(I),_),new Z(L(_.g),L(_.h));if(q(_))return _=tt(I,L(_)),new Z(L(_.g),_.h);if(30<I.g.length){if(q(I)||q(_))throw Error("slowDivide_ only works with positive integers.");for(var T=D,b=_;0>=b.l(I);)T=qt(T),b=qt(b);var A=pt(T,1),R=pt(b,1);for(b=pt(b,2),T=pt(T,2);!B(b);){var E=R.add(b);0>=E.l(I)&&(A=A.add(T),R=E),b=pt(b,1),T=pt(T,1)}return _=J(I,A.j(_)),new Z(A,_)}for(A=P;0<=I.l(_);){for(T=Math.max(1,Math.floor(I.m()/_.m())),b=Math.ceil(Math.log(T)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),R=w(T),E=R.j(_);q(E)||0<E.l(I);)T-=b,R=w(T),E=R.j(_);B(R)&&(R=D),A=A.add(R),I=J(I,E)}return new Z(A,I)}n.A=function(I){return tt(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],b=0;b<_;b++)T[b]=this.i(b)&I.i(b);return new l(T,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],b=0;b<_;b++)T[b]=this.i(b)|I.i(b);return new l(T,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],b=0;b<_;b++)T[b]=this.i(b)^I.i(b);return new l(T,this.h^I.h)};function qt(I){for(var _=I.g.length+1,T=[],b=0;b<_;b++)T[b]=I.i(b)<<1|I.i(b-1)>>>31;return new l(T,I.h)}function pt(I,_){var T=_>>5;_%=32;for(var b=I.g.length-T,A=[],R=0;R<b;R++)A[R]=0<_?I.i(R+T)>>>_|I.i(R+T+1)<<32-_:I.i(R+T);return new l(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iu=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=w,l.fromString=v,Dn=l}).apply(typeof tl<"u"?tl:typeof self<"u"?self:typeof window<"u"?window:{});var ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var su,ou,Yr,au,ds,To,lu,uu,cu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,f){return s==Array.prototype||s==Object.prototype||(s[c]=f.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ss=="object"&&ss];for(var c=0;c<s.length;++c){var f=s[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var f=r;s=s.split(".");for(var g=0;g<s.length-1;g++){var C=s[g];if(!(C in f))break t;f=f[C]}s=s[s.length-1],g=f[s],c=c(g),c!=g&&c!=null&&t(f,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var f=0,g=!1,C={next:function(){if(!g&&f<s.length){var S=f++;return{value:c(S,s[S]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function m(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function w(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function v(s,c,f){return s.call.apply(s.bind,arguments)}function P(s,c,f){if(!s)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),s.apply(c,C)}}return function(){return s.apply(c,arguments)}}function D(s,c,f){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:P,D.apply(null,arguments)}function O(s,c){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),s.apply(this,g)}}function B(s,c){function f(){}f.prototype=c.prototype,s.aa=c.prototype,s.prototype=new f,s.prototype.constructor=s,s.Qb=function(g,C,S){for(var M=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)M[ot-2]=arguments[ot];return c.prototype[C].apply(g,M)}}function q(s){const c=s.length;if(0<c){const f=Array(c);for(let g=0;g<c;g++)f[g]=s[g];return f}return[]}function L(s,c){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(m(g)){const C=s.length||0,S=g.length||0;s.length=C+S;for(let M=0;M<S;M++)s[C+M]=g[M]}else s.push(g)}}class J{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function K(s){return/^[\s\xa0]*$/.test(s)}function Z(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function tt(s){return tt[" "](s),s}tt[" "]=function(){};var qt=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function pt(s,c,f){for(const g in s)c.call(f,s[g],g,s)}function I(s,c){for(const f in s)c.call(void 0,s[f],f,s)}function _(s){const c={};for(const f in s)c[f]=s[f];return c}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(s,c){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)s[f]=g[f];for(let S=0;S<T.length;S++)f=T[S],Object.prototype.hasOwnProperty.call(g,f)&&(s[f]=g[f])}}function A(s){var c=1;s=s.split(":");const f=[];for(;0<c&&s.length;)f.push(s.shift()),c--;return s.length&&f.push(s.join(":")),f}function R(s){h.setTimeout(()=>{throw s},0)}function E(){var s=G;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class ce{constructor(){this.h=this.g=null}add(c,f){const g=cn.get();g.set(c,f),this.h?this.h.next=g:this.g=g,this.h=g}}var cn=new J(()=>new At,s=>s.reset());class At{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,hn=!1,G=new ce,vi=()=>{const s=h.Promise.resolve(void 0);Se=()=>{s.then(js)}};var js=()=>{for(var s;s=E();){try{s.h.call(s.g)}catch(f){R(f)}var c=cn;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}hn=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Vt(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}Vt.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const f=()=>{};h.addEventListener("test",f,c),h.removeEventListener("test",f,c)}catch{}return s}();function dn(s,c){if(Vt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var f=this.type=s.type,g=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(qt){t:{try{tt(c.nodeName);var C=!0;break t}catch{}C=!1}C||(c=null)}}else f=="mouseover"?c=s.fromElement:f=="mouseout"&&(c=s.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:qn[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&dn.aa.h.call(this)}}B(dn,Vt);var qn={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var fn="closure_listenable_"+(1e6*Math.random()|0),Rr=0;function $t(s,c,f,g,C){this.listener=s,this.proxy=null,this.src=c,this.type=f,this.capture=!!g,this.ha=C,this.key=++Rr,this.da=this.fa=!1}function se(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function pn(s){this.src=s,this.g={},this.h=0}pn.prototype.add=function(s,c,f,g,C){var S=s.toString();s=this.g[S],s||(s=this.g[S]=[],this.h++);var M=$n(s,c,g,C);return-1<M?(c=s[M],f||(c.fa=!1)):(c=new $t(c,this.src,S,!!g,C),c.fa=f,s.push(c)),c};function Pr(s,c){var f=c.type;if(f in s.g){var g=s.g[f],C=Array.prototype.indexOf.call(g,c,void 0),S;(S=0<=C)&&Array.prototype.splice.call(g,C,1),S&&(se(c),s.g[f].length==0&&(delete s.g[f],s.h--))}}function $n(s,c,f,g){for(var C=0;C<s.length;++C){var S=s[C];if(!S.da&&S.listener==c&&S.capture==!!f&&S.ha==g)return C}return-1}var qe="closure_lm_"+(1e6*Math.random()|0),mn={};function $e(s,c,f,g,C){if(Array.isArray(c)){for(var S=0;S<c.length;S++)$e(s,c[S],f,g,C);return null}return f=Hn(f),s&&s[fn]?s.K(c,f,w(g)?!!g.capture:!!g,C):Sr(s,c,f,!1,g,C)}function Sr(s,c,f,g,C,S){if(!c)throw Error("Invalid event type");var M=w(C)?!!C.capture:!!C,ot=kr(s);if(ot||(s[qe]=ot=new pn(s)),f=ot.add(c,f,g,M,S),f.proxy)return f;if(g=zt(),f.proxy=g,g.src=s,g.listener=f,s.addEventListener)k||(C=M),C===void 0&&(C=!1),s.addEventListener(c.toString(),g,C);else if(s.attachEvent)s.attachEvent(st(c.toString()),g);else if(s.addListener&&s.removeListener)s.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function zt(){function s(f){return c.call(s.src,s.listener,f)}const c=gn;return s}function ze(s,c,f,g,C){if(Array.isArray(c))for(var S=0;S<c.length;S++)ze(s,c[S],f,g,C);else g=w(g)?!!g.capture:!!g,f=Hn(f),s&&s[fn]?(s=s.i,c=String(c).toString(),c in s.g&&(S=s.g[c],f=$n(S,f,g,C),-1<f&&(se(S[f]),Array.prototype.splice.call(S,f,1),S.length==0&&(delete s.g[c],s.h--)))):s&&(s=kr(s))&&(c=s.g[c.toString()],s=-1,c&&(s=$n(c,f,g,C)),(f=-1<s?c[s]:null)&&Nt(f))}function Nt(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[fn])Pr(c.i,s);else{var f=s.type,g=s.proxy;c.removeEventListener?c.removeEventListener(f,g,s.capture):c.detachEvent?c.detachEvent(st(f),g):c.addListener&&c.removeListener&&c.removeListener(g),(f=kr(c))?(Pr(f,s),f.h==0&&(f.src=null,c[qe]=null)):se(s)}}}function st(s){return s in mn?mn[s]:mn[s]="on"+s}function gn(s,c){if(s.da)s=!0;else{c=new dn(c,this);var f=s.listener,g=s.ha||s.src;s.fa&&Nt(s),s=f.call(g,c)}return s}function kr(s){return s=s[qe],s instanceof pn?s:null}var zn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hn(s){return typeof s=="function"?s:(s[zn]||(s[zn]=function(c){return s.handleEvent(c)}),s[zn])}function It(){he.call(this),this.i=new pn(this),this.M=this,this.F=null}B(It,he),It.prototype[fn]=!0,It.prototype.removeEventListener=function(s,c,f,g){ze(this,s,c,f,g)};function Ct(s,c){var f,g=s.F;if(g)for(f=[];g;g=g.F)f.push(g);if(s=s.M,g=c.type||c,typeof c=="string")c=new Vt(c,s);else if(c instanceof Vt)c.target=c.target||s;else{var C=c;c=new Vt(g,s),b(c,C)}if(C=!0,f)for(var S=f.length-1;0<=S;S--){var M=c.g=f[S];C=ke(M,g,!0,c)&&C}if(M=c.g=s,C=ke(M,g,!0,c)&&C,C=ke(M,g,!1,c)&&C,f)for(S=0;S<f.length;S++)M=c.g=f[S],C=ke(M,g,!1,c)&&C}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var f=s.g[c],g=0;g<f.length;g++)se(f[g]);delete s.g[c],s.h--}}this.F=null},It.prototype.K=function(s,c,f,g){return this.i.add(String(s),c,!1,f,g)},It.prototype.L=function(s,c,f,g){return this.i.add(String(s),c,!0,f,g)};function ke(s,c,f,g){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,S=0;S<c.length;++S){var M=c[S];if(M&&!M.da&&M.capture==f){var ot=M.listener,Pt=M.ha||M.src;M.fa&&Pr(s.i,M),C=ot.call(Pt,g)!==!1&&C}}return C&&!g.defaultPrevented}function te(s,c,f){if(typeof s=="function")f&&(s=D(s,f));else if(s&&typeof s.handleEvent=="function")s=D(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:h.setTimeout(s,c||0)}function Ve(s){s.g=te(()=>{s.g=null,s.i&&(s.i=!1,Ve(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class De extends he{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ve(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wn(s){he.call(this),this.h=s,this.g={}}B(wn,he);var xe=[];function He(s){pt(s.g,function(c,f){this.g.hasOwnProperty(f)&&Nt(c)},s),s.g={}}wn.prototype.N=function(){wn.aa.N.call(this),He(this)},wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wn=h.JSON.stringify,Kn=h.JSON.parse,Vr=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function Dr(){}Dr.prototype.h=null;function Gn(s){return s.h||(s.h=s.i())}function Qn(){}var ye={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xr(){Vt.call(this,"d")}B(xr,Vt);function Mt(){Vt.call(this,"c")}B(Mt,Vt);var Lt={},Ei=null;function Ft(){return Ei=Ei||new It}Lt.La="serverreachability";function yn(s){Vt.call(this,Lt.La,s)}B(yn,Vt);function We(s){const c=Ft();Ct(c,new yn(c))}Lt.STAT_EVENT="statevent";function Or(s,c){Vt.call(this,Lt.STAT_EVENT,s),this.stat=c}B(Or,Vt);function z(s){const c=Ft();Ct(c,new Or(c,s))}Lt.Ma="timingevent";function ee(s,c){Vt.call(this,Lt.Ma,s),this.size=c}B(ee,Vt);function Zt(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},c)}function ne(){this.g=!0}ne.prototype.xa=function(){this.g=!1};function vt(s,c,f,g,C,S){s.info(function(){if(s.g)if(S)for(var M="",ot=S.split("&"),Pt=0;Pt<ot.length;Pt++){var nt=ot[Pt].split("=");if(1<nt.length){var xt=nt[0];nt=nt[1];var St=xt.split("_");M=2<=St.length&&St[1]=="type"?M+(xt+"="+nt+"&"):M+(xt+"=redacted&")}}else M=null;else M=S;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+c+`
`+f+`
`+M})}function Dt(s,c,f,g,C,S,M){s.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+c+`
`+f+`
`+S+" "+M})}function _e(s,c,f,g){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+_n(s,f)+(g?" "+g:"")})}function Ti(s,c){s.info(function(){return"TIMEOUT: "+c})}ne.prototype.info=function(){};function _n(s,c){if(!s.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(s=0;s<f.length;s++)if(Array.isArray(f[s])){var g=f[s];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var S=C[0];if(S!="noop"&&S!="stop"&&S!="close")for(var M=1;M<C.length;M++)C[M]=""}}}}return Wn(f)}catch{return c}}var Rt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function vn(){}B(vn,Dr),vn.prototype.g=function(){return new XMLHttpRequest},vn.prototype.i=function(){return{}},Xn=new vn;function oe(s,c,f,g){this.j=s,this.i=c,this.l=f,this.R=g||1,this.U=new wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ai}function Ai(){this.i=null,this.g="",this.h=!1}var Nr={},Mr={};function Lr(s,c,f){s.L=1,s.v=Tn(de(c)),s.m=f,s.P=!0,ve(s,null)}function ve(s,c){s.F=Date.now(),Yn(s),s.A=de(s.v);var f=s.A,g=s.R;Array.isArray(g)||(g=[String(g)]),Mi(f.i,"t",g),s.C=0,f=s.j.J,s.h=new Ai,s.g=Kr(s.j,f?c:null,!s.m),0<s.O&&(s.M=new De(D(s.Y,s,s.g),s.O)),c=s.U,f=s.g,g=s.ca;var C="readystatechange";Array.isArray(C)||(C&&(xe[0]=C.toString()),C=xe);for(var S=0;S<C.length;S++){var M=$e(f,C[S],g||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=s.H?_(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),We(),vt(s.i,s.u,s.A,s.l,s.R,s.m)}oe.prototype.ca=function(s){s=s.target;const c=this.M;c&&Ht(s)==3?c.j():this.Y(s)},oe.prototype.Y=function(s){try{if(s==this.g)t:{const St=Ht(this.g);var c=this.g.Ba();const Ye=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||zi(this.g)))){this.J||St!=4||c==7||(c==8||0>=Ye?We(3):We(2)),Fr(this);var f=this.g.Z();this.X=f;e:if(Ii(this)){var g=zi(this.g);s="";var C=g.length,S=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ne(this),Oe(this);var M="";break e}this.h.i=new h.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,s+=this.h.i.decode(g[c],{stream:!(S&&c==C-1)});g.length=0,this.h.g+=s,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=f==200,Dt(this.i,this.u,this.A,this.l,this.R,St,f),this.o){if(this.T&&!this.K){e:{if(this.g){var ot,Pt=this.g;if((ot=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(ot)){var nt=ot;break e}}nt=null}if(f=nt)_e(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Br(this,f);else{this.o=!1,this.s=3,z(12),Ne(this),Oe(this);break t}}if(this.P){f=!0;let Yt;for(;!this.J&&this.C<M.length;)if(Yt=qs(this,M),Yt==Mr){St==4&&(this.s=4,z(14),f=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Nr){this.s=4,z(15),_e(this.i,this.l,M,"[Invalid Chunk]"),f=!1;break}else _e(this.i,this.l,Yt,null),Br(this,Yt);if(Ii(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||M.length!=0||this.h.h||(this.s=1,z(16),f=!1),this.o=this.o&&f,!f)_e(this.i,this.l,M,"[Invalid Chunked Response]"),Ne(this),Oe(this);else if(0<M.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Hr(xt),xt.M=!0,z(11))}}else _e(this.i,this.l,M,null),Br(this,M);St==4&&Ne(this),this.o&&!this.J&&(St==4?Wr(this.j,this):(this.o=!1,Yn(this)))}else Hi(this.g),f==400&&0<M.indexOf("Unknown SID")?(this.s=3,z(12)):(this.s=0,z(13)),Ne(this),Oe(this)}}}catch{}finally{}};function Ii(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function qs(s,c){var f=s.C,g=c.indexOf(`
`,f);return g==-1?Mr:(f=Number(c.substring(f,g)),isNaN(f)?Nr:(g+=1,g+f>c.length?Mr:(c=c.slice(g,g+f),s.C=g+f,c)))}oe.prototype.cancel=function(){this.J=!0,Ne(this)};function Yn(s){s.S=Date.now()+s.I,Ci(s,s.I)}function Ci(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Zt(D(s.ba,s),c)}function Fr(s){s.B&&(h.clearTimeout(s.B),s.B=null)}oe.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ti(this.i,this.A),this.L!=2&&(We(),z(17)),Ne(this),this.s=2,Oe(this)):Ci(this,this.S-s)};function Oe(s){s.j.G==0||s.J||Wr(s.j,s)}function Ne(s){Fr(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,He(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Br(s,c){try{var f=s.j;if(f.G!=0&&(f.g==s||En(f.h,s))){if(!s.K&&En(f.h,s)&&f.G==3){try{var g=f.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){t:if(!f.u){if(f.g)if(f.g.F+3e3<s.F)sr(f),nr(f);else break t;ir(f),z(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Zt(D(f.Za,f),6e3));if(1>=Si(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Fe(f,11)}else if((s.K||f.g==s)&&sr(f),!K(c))for(C=f.Da.g.parse(c),c=0;c<C.length;c++){let nt=C[c];if(f.T=nt[0],nt=nt[1],f.G==2)if(nt[0]=="c"){f.K=nt[1],f.ia=nt[2];const xt=nt[3];xt!=null&&(f.la=xt,f.j.info("VER="+f.la));const St=nt[4];St!=null&&(f.Aa=St,f.j.info("SVER="+f.Aa));const Ye=nt[5];Ye!=null&&typeof Ye=="number"&&0<Ye&&(g=1.5*Ye,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Yt=s.g;if(Yt){const Rn=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rn){var S=g.h;S.g||Rn.indexOf("spdy")==-1&&Rn.indexOf("quic")==-1&&Rn.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ur(S,S.h),S.h=null))}if(g.D){const ar=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;ar&&(g.ya=ar,at(g.I,g.D,ar))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-s.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var M=s;if(g.qa=Ji(g,g.J?g.ia:null,g.W),M.K){ki(g.h,M);var ot=M,Pt=g.L;Pt&&(ot.I=Pt),ot.B&&(Fr(ot),Yn(ot)),g.g=M}else Xi(g);0<f.i.length&&rr(f)}else nt[0]!="stop"&&nt[0]!="close"||Fe(f,7);else f.G==3&&(nt[0]=="stop"||nt[0]=="close"?nt[0]=="stop"?Fe(f,7):zr(f):nt[0]!="noop"&&f.l&&f.l.ta(nt),f.v=0)}}We(4)}catch{}}var Me=class{constructor(s,c){this.g=s,this.map=c}};function Ri(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Si(s){return s.h?1:s.g?s.g.size:0}function En(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Ur(s,c){s.g?s.g.add(c):s.h=c}function ki(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Ri.prototype.cancel=function(){if(this.i=Vi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Vi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const f of s.g.values())c=c.concat(f.D);return c}return q(s.i)}function $s(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(m(s)){for(var c=[],f=s.length,g=0;g<f;g++)c.push(s[g]);return c}c=[],f=0;for(g in s)c[f++]=s[g];return c}function zs(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(m(s)||typeof s=="string"){var c=[];s=s.length;for(var f=0;f<s;f++)c.push(f);return c}c=[],f=0;for(const g in s)c[f++]=g;return c}}}function ut(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(m(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var f=zs(s),g=$s(s),C=g.length,S=0;S<C;S++)c.call(void 0,g[S],f&&f[S],s)}var Di=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hs(s,c){if(s){s=s.split("&");for(var f=0;f<s.length;f++){var g=s[f].indexOf("="),C=null;if(0<=g){var S=s[f].substring(0,g);C=s[f].substring(g+1)}else S=s[f];c(S,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Le(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Le){this.h=s.h,Jn(this,s.j),this.o=s.o,this.g=s.g,Zn(this,s.s),this.l=s.l;var c=s.i,f=new bn;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),tr(this,f),this.m=s.m}else s&&(c=String(s).match(Di))?(this.h=!1,Jn(this,c[1]||"",!0),this.o=Ee(c[2]||""),this.g=Ee(c[3]||"",!0),Zn(this,c[4]),this.l=Ee(c[5]||"",!0),tr(this,c[6]||"",!0),this.m=Ee(c[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}Le.prototype.toString=function(){var s=[],c=this.j;c&&s.push(ct(c,xi,!0),":");var f=this.g;return(f||c=="file")&&(s.push("//"),(c=this.o)&&s.push(ct(c,xi,!0),"@"),s.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&s.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&s.push("/"),s.push(ct(f,f.charAt(0)=="/"?Oi:Ks,!0))),(f=this.i.toString())&&s.push("?",f),(f=this.m)&&s.push("#",ct(f,Qs)),s.join("")};function de(s){return new Le(s)}function Jn(s,c,f){s.j=f?Ee(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Zn(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function tr(s,c,f){c instanceof bn?(s.i=c,Xs(s.i,s.h)):(f||(c=ct(c,Gs)),s.i=new bn(c,s.h))}function at(s,c,f){s.i.set(c,f)}function Tn(s){return at(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ee(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function ct(s,c,f){return typeof s=="string"?(s=encodeURI(s).replace(c,Ws),f&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ws(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var xi=/[#\/\?@]/g,Ks=/[#\?:]/g,Oi=/[#\?]/g,Gs=/[#\?@]/g,Qs=/#/g;function bn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function fe(s){s.g||(s.g=new Map,s.h=0,s.i&&Hs(s.i,function(c,f){s.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}n=bn.prototype,n.add=function(s,c){fe(this),this.i=null,s=Ke(this,s);var f=this.g.get(s);return f||this.g.set(s,f=[]),f.push(c),this.h+=1,this};function Ni(s,c){fe(s),c=Ke(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function jr(s,c){return fe(s),c=Ke(s,c),s.g.has(c)}n.forEach=function(s,c){fe(this),this.g.forEach(function(f,g){f.forEach(function(C){s.call(c,C,g,this)},this)},this)},n.na=function(){fe(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let g=0;g<c.length;g++){const C=s[g];for(let S=0;S<C.length;S++)f.push(c[g])}return f},n.V=function(s){fe(this);let c=[];if(typeof s=="string")jr(this,s)&&(c=c.concat(this.g.get(Ke(this,s))));else{s=Array.from(this.g.values());for(let f=0;f<s.length;f++)c=c.concat(s[f])}return c},n.set=function(s,c){return fe(this),this.i=null,s=Ke(this,s),jr(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Mi(s,c,f){Ni(s,c),0<f.length&&(s.i=null,s.g.set(Ke(s,c),q(f)),s.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var g=c[f];const S=encodeURIComponent(String(g)),M=this.V(g);for(g=0;g<M.length;g++){var C=S;M[g]!==""&&(C+="="+encodeURIComponent(String(M[g]))),s.push(C)}}return this.i=s.join("&")};function Ke(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Xs(s,c){c&&!s.j&&(fe(s),s.i=null,s.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Ni(this,g),Mi(this,C,f))},s)),s.j=c}function Ys(s,c){const f=new ne;if(h.Image){const g=new Image;g.onload=O(Te,f,"TestLoadImage: loaded",!0,c,g),g.onerror=O(Te,f,"TestLoadImage: error",!1,c,g),g.onabort=O(Te,f,"TestLoadImage: abort",!1,c,g),g.ontimeout=O(Te,f,"TestLoadImage: timeout",!1,c,g),h.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=s}else c(!1)}function Js(s,c){const f=new ne,g=new AbortController,C=setTimeout(()=>{g.abort(),Te(f,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:g.signal}).then(S=>{clearTimeout(C),S.ok?Te(f,"TestPingServer: ok",!0,c):Te(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Te(f,"TestPingServer: error",!1,c)})}function Te(s,c,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Zs(){this.g=new Vr}function Li(s,c,f){const g=f||"";try{ut(s,function(C,S){let M=C;w(C)&&(M=Wn(C)),c.push(g+S+"="+encodeURIComponent(M))})}catch(C){throw c.push(g+"type="+encodeURIComponent("_badmap")),C}}function An(s){this.l=s.Ub||null,this.j=s.eb||!1}B(An,Dr),An.prototype.g=function(){return new In(this.l,this.j)},An.prototype.i=function(s){return function(){return s}}({});function In(s,c){It.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(In,It),n=In.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,ae(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||h).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,ae(this)),this.g&&(this.readyState=3,ae(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Cn(this):ae(this),this.readyState==3&&Fi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Cn(this))},n.Qa=function(s){this.g&&(this.response=s,Cn(this))},n.ga=function(){this.g&&Cn(this)};function Cn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,ae(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,s.push(f[0]+": "+f[1]),f=c.next();return s.join(`\r
`)};function ae(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(In.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function qr(s){let c="";return pt(s,function(f,g){c+=g,c+=":",c+=f,c+=`\r
`}),c}function $r(s,c,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=qr(f),typeof s=="string"?f!=null&&encodeURIComponent(String(f)):at(s,c,f))}function ht(s){It.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(ht,It);var Bi=/^https?$/i,to=["POST","PUT"];n=ht.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?Gn(this.o):Gn(Xn),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(S){Ui(this,S);return}if(s=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const S of g.keys())f.set(S,g.get(S));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(S=>S.toLowerCase()=="content-type"),C=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(to,c,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of f)this.g.setRequestHeader(S,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$i(this),this.u=!0,this.g.send(s),this.u=!1}catch(S){Ui(this,S)}};function Ui(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,ji(s),er(s)}function ji(s){s.A||(s.A=!0,Ct(s,"complete"),Ct(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ct(this,"complete"),Ct(this,"abort"),er(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),er(this,!0)),ht.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?qi(this):this.bb())},n.bb=function(){qi(this)};function qi(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Ht(s)!=4||s.Z()!=2)){if(s.u&&Ht(s)==4)te(s.Ea,0,s);else if(Ct(s,"readystatechange"),Ht(s)==4){s.h=!1;try{const M=s.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var f;if(!(f=c)){var g;if(g=M===0){var C=String(s.D).match(Di)[1]||null;!C&&h.self&&h.self.location&&(C=h.self.location.protocol.slice(0,-1)),g=!Bi.test(C?C.toLowerCase():"")}f=g}if(f)Ct(s,"complete"),Ct(s,"success");else{s.m=6;try{var S=2<Ht(s)?s.g.statusText:""}catch{S=""}s.l=S+" ["+s.Z()+"]",ji(s)}}finally{er(s)}}}}function er(s,c){if(s.g){$i(s);const f=s.g,g=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Ct(s,"ready");try{f.onreadystatechange=g}catch{}}}function $i(s){s.I&&(h.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ht(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Kn(c)}};function zi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Hi(s){const c={};s=(s.g&&2<=Ht(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<s.length;g++){if(K(s[g]))continue;var f=A(s[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const S=c[C]||[];c[C]=S,S.push(f)}I(c,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ge(s,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[s]||c}function Wi(s){this.Aa=0,this.i=[],this.j=new ne,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ge("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ge("baseRetryDelayMs",5e3,s),this.cb=Ge("retryDelaySeedMs",1e4,s),this.Wa=Ge("forwardChannelMaxRetries",2,s),this.wa=Ge("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(s&&s.concurrentRequestLimit),this.Da=new Zs,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Wi.prototype,n.la=8,n.G=1,n.connect=function(s,c,f,g){z(0),this.W=s,this.H=c||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Ji(this,null,this.W),rr(this)};function zr(s){if(Ki(s),s.G==3){var c=s.U++,f=de(s.I);if(at(f,"SID",s.K),at(f,"RID",c),at(f,"TYPE","terminate"),le(s,f),c=new oe(s,s.j,c),c.L=2,c.v=Tn(de(f)),f=!1,h.navigator&&h.navigator.sendBeacon)try{f=h.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&h.Image&&(new Image().src=c.v,f=!0),f||(c.g=Kr(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Yn(c)}Yi(s)}function nr(s){s.g&&(Hr(s),s.g.cancel(),s.g=null)}function Ki(s){nr(s),s.u&&(h.clearTimeout(s.u),s.u=null),sr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function rr(s){if(!Pi(s.h)&&!s.s){s.s=!0;var c=s.Ga;Se||vi(),hn||(Se(),hn=!0),G.add(c,s),s.B=0}}function eo(s,c){return Si(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Zt(D(s.Ga,s,c),Qe(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const C=new oe(this,this.j,s);let S=this.o;if(this.S&&(S?(S=_(S),b(S,this.S)):S=this.S),this.m!==null||this.O||(C.H=S,S=null),this.P)t:{for(var c=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=f;break t}if(c===4096||f===this.i.length-1){c=f+1;break t}}c=1e3}else c=1e3;c=Qi(this,C,c),f=de(this.I),at(f,"RID",s),at(f,"CVER",22),this.D&&at(f,"X-HTTP-Session-Id",this.D),le(this,f),S&&(this.O?c="headers="+encodeURIComponent(String(qr(S)))+"&"+c:this.m&&$r(f,this.m,S)),Ur(this.h,C),this.Ua&&at(f,"TYPE","init"),this.P?(at(f,"$req",c),at(f,"SID","null"),C.T=!0,Lr(C,f,null)):Lr(C,f,c),this.G=2}}else this.G==3&&(s?Gi(this,s):this.i.length==0||Pi(this.h)||Gi(this))};function Gi(s,c){var f;c?f=c.l:f=s.U++;const g=de(s.I);at(g,"SID",s.K),at(g,"RID",f),at(g,"AID",s.T),le(s,g),s.m&&s.o&&$r(g,s.m,s.o),f=new oe(s,s.j,f,s.B+1),s.m===null&&(f.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Qi(s,f,1e3),f.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ur(s.h,f),Lr(f,g,c)}function le(s,c){s.H&&pt(s.H,function(f,g){at(c,g,f)}),s.l&&ut({},function(f,g){at(c,g,f)})}function Qi(s,c,f){f=Math.min(s.i.length,f);var g=s.l?D(s.l.Na,s.l,s):null;t:{var C=s.i;let S=-1;for(;;){const M=["count="+f];S==-1?0<f?(S=C[0].g,M.push("ofs="+S)):S=0:M.push("ofs="+S);let ot=!0;for(let Pt=0;Pt<f;Pt++){let nt=C[Pt].g;const xt=C[Pt].map;if(nt-=S,0>nt)S=Math.max(0,C[Pt].g-100),ot=!1;else try{Li(xt,M,"req"+nt+"_")}catch{g&&g(xt)}}if(ot){g=M.join("&");break t}}}return s=s.i.splice(0,f),c.D=s,g}function Xi(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Se||vi(),hn||(Se(),hn=!0),G.add(c,s),s.v=0}}function ir(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Zt(D(s.Fa,s),Qe(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,pe(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Zt(D(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,z(10),nr(this),pe(this))};function Hr(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function pe(s){s.g=new oe(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=de(s.qa);at(c,"RID","rpc"),at(c,"SID",s.K),at(c,"AID",s.T),at(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&at(c,"TO",s.ja),at(c,"TYPE","xmlhttp"),le(s,c),s.m&&s.o&&$r(c,s.m,s.o),s.L&&(s.g.I=s.L);var f=s.g;s=s.ia,f.L=1,f.v=Tn(de(c)),f.m=null,f.P=!0,ve(f,s)}n.Za=function(){this.C!=null&&(this.C=null,nr(this),ir(this),z(19))};function sr(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function Wr(s,c){var f=null;if(s.g==c){sr(s),Hr(s),s.g=null;var g=2}else if(En(s.h,c))f=c.D,ki(s.h,c),g=1;else return;if(s.G!=0){if(c.o)if(g==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var C=s.B;g=Ft(),Ct(g,new ee(g,f)),rr(s)}else Xi(s);else if(C=c.s,C==3||C==0&&0<c.X||!(g==1&&eo(s,c)||g==2&&ir(s)))switch(f&&0<f.length&&(c=s.h,c.i=c.i.concat(f)),C){case 1:Fe(s,5);break;case 4:Fe(s,10);break;case 3:Fe(s,6);break;default:Fe(s,2)}}}function Qe(s,c){let f=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(f*=2),f*c}function Fe(s,c){if(s.j.info("Error code "+c),c==2){var f=D(s.fb,s),g=s.Xa;const C=!g;g=new Le(g||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Jn(g,"https"),Tn(g),C?Ys(g.toString(),f):Js(g.toString(),f)}else z(2);s.G=0,s.l&&s.l.sa(c),Yi(s),Ki(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),z(2)):(this.j.info("Failed to ping google.com"),z(1))};function Yi(s){if(s.G=0,s.ka=[],s.l){const c=Vi(s.h);(c.length!=0||s.i.length!=0)&&(L(s.ka,c),L(s.ka,s.i),s.h.i.length=0,q(s.i),s.i.length=0),s.l.ra()}}function Ji(s,c,f){var g=f instanceof Le?de(f):new Le(f);if(g.g!="")c&&(g.g=c+"."+g.g),Zn(g,g.s);else{var C=h.location;g=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var S=new Le(null);g&&Jn(S,g),c&&(S.g=c),C&&Zn(S,C),f&&(S.l=f),g=S}return f=s.D,c=s.ya,f&&c&&at(g,f,c),at(g,"VER",s.la),le(s,g),g}function Kr(s,c,f){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new ht(new An({eb:f})):new ht(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Be(){}n=Be.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function or(){}or.prototype.g=function(s,c){return new Xt(s,c)};function Xt(s,c){It.call(this),this.g=new Wi(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!K(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!K(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Xe(this)}B(Xt,It),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){zr(this.g)},Xt.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var f={};f.__data__=s,s=f}else this.u&&(f={},f.__data__=Wn(s),s=f);c.i.push(new Me(c.Ya++,s)),c.G==3&&rr(c)},Xt.prototype.N=function(){this.g.l=null,delete this.j,zr(this.g),delete this.g,Xt.aa.N.call(this)};function Zi(s){xr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const f in c){s=f;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}B(Zi,xr);function ts(){Mt.call(this),this.status=1}B(ts,Mt);function Xe(s){this.g=s}B(Xe,Be),Xe.prototype.ua=function(){Ct(this.g,"a")},Xe.prototype.ta=function(s){Ct(this.g,new Zi(s))},Xe.prototype.sa=function(s){Ct(this.g,new ts)},Xe.prototype.ra=function(){Ct(this.g,"b")},or.prototype.createWebChannel=or.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,cu=function(){return new or},uu=function(){return Ft()},lu=Lt,To={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rt.NO_ERROR=0,Rt.TIMEOUT=8,Rt.HTTP_ERROR=6,ds=Rt,bi.COMPLETE="complete",au=bi,Qn.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",It.prototype.listen=It.prototype.K,Yr=Qn,ou=An,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,su=ht}).apply(typeof ss<"u"?ss:typeof self<"u"?self:typeof window<"u"?window:{});const el="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Ql("@firebase/firestore");function Qr(){return Nn.logLevel}function U(n,...t){if(Nn.logLevel<=it.DEBUG){const e=t.map(Bo);Nn.debug(`Firestore (${Tr}): ${n}`,...e)}}function Ue(n,...t){if(Nn.logLevel<=it.ERROR){const e=t.map(Bo);Nn.error(`Firestore (${Tr}): ${n}`,...e)}}function pr(n,...t){if(Nn.logLevel<=it.WARN){const e=t.map(Bo);Nn.warn(`Firestore (${Tr}): ${n}`,...e)}}function Bo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n="Unexpected state"){const t=`FIRESTORE (${Tr}) INTERNAL ASSERTION FAILED: `+n;throw Ue(t),new Error(t)}function dt(n,t){n||H()}function X(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Bn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Kt.UNAUTHENTICATED))}shutdown(){}}class Ef{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Tf{constructor(t){this.t=t,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=m=>this.i!==r?(r=this.i,e(m)):Promise.resolve();let o=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new sn,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const m=o;t.enqueueRetryable(async()=>{await m.promise,await i(this.currentUser)})},h=m=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(m=>h(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?h(m):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new sn)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(dt(typeof r.accessToken=="string"),new hu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return dt(t===null||typeof t=="string"),new Kt(t)}}class bf{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Af{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new bf(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class If{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cf{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,U("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(dt(typeof e.token=="string"),this.R=e.token,new If(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Rf(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function lt(n,t){return n<t?-1:n>t?1:0}function mr(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return kt.fromMillis(Date.now())}static fromDate(t){return kt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new kt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?lt(this.nanoseconds,t.nanoseconds):lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.timestamp=t}static fromTimestamp(t){return new W(t)}static min(){return new W(new kt(0,0))}static max(){return new W(new kt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,r){e===void 0?e=0:e>t.length&&H(),r===void 0?r=t.length-e:r>t.length-e&&H(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ai.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ai?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),l=e.get(i);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ft extends ai{construct(t,e,r){return new ft(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new j(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new ft(e)}static emptyPath(){return new ft([])}}const Pf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends ai{construct(t,e,r){return new Ut(t,e,r)}static isValidIdentifier(t){return Pf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new j(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new j(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[i+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new j(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=m,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(o(),i++)}if(o(),l)throw new j(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ut(e)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.path=t}static fromPath(t){return new $(ft.fromString(t))}static fromName(t){return new $(ft.fromString(t).popFirst(5))}static empty(){return new $(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ft.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ft.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $(new ft(t.slice()))}}function Sf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new kt(e+1,0):new kt(e,r));return new an(i,$.empty(),t)}function kf(n){return new an(n.readTime,n.key,-1)}class an{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new an(W.min(),$.empty(),-1)}static max(){return new an(W.max(),$.empty(),-1)}}function Vf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=$.comparator(n.documentKey,t.documentKey),e!==0?e:lt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Df)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new N((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof N?e:N.resolve(e)}catch(e){return N.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):N.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):N.reject(e)}static resolve(t){return new N((e,r)=>{e(t)})}static reject(t){return new N((e,r)=>{r(t)})}static waitFor(t){return new N((e,r)=>{let i=0,o=0,l=!1;t.forEach(h=>{++i,h.next(()=>{++o,l&&o===i&&e()},m=>r(m))}),l=!0,o===i&&e()})}static or(t){let e=N.resolve(!1);for(const r of t)e=e.next(i=>i?N.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new N((r,i)=>{const o=t.length,l=new Array(o);let h=0;for(let m=0;m<o;m++){const w=m;e(t[w]).next(v=>{l[w]=v,++h,h===o&&r(l)},v=>i(v))}})}static doWhile(t,e){return new N((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Of(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function pi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Uo.oe=-1;function Rs(n){return n==null}function _s(n){return n===0&&1/n==-1/0}function Nf(n){return typeof n=="number"&&Number.isInteger(n)&&!_s(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function br(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function fu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e){this.comparator=t,this.root=e||Bt.EMPTY}insert(t,e){return new mt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(t){return new mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new os(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new os(this.root,t,this.comparator,!1)}getReverseIterator(){return new os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new os(this.root,t,this.comparator,!0)}}class os{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??Bt.RED,this.left=i??Bt.EMPTY,this.right=o??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new Bt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const t=this.left.check();if(t!==this.right.check())throw H();return t+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,r,i,o){return this}insert(t,e,r){return new Bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.comparator=t,this.data=new mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new rl(this.data.getIterator())}getIteratorFrom(t){return new rl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof jt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new jt(this.comparator);return e.data=t,e}}class rl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.fields=t,t.sort(Ut.comparator)}static empty(){return new me([])}unionWith(t){let e=new jt(Ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new me(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return mr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class pu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new pu("Invalid base64 string: "+o):o}}(t);return new Qt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(t);return new Qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const Mf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ln(n){if(dt(!!n),typeof n=="string"){let t=0;const e=Mf.exec(n);if(dt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Tt(n.seconds),nanos:Tt(n.nanos)}}function Tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mn(n){return typeof n=="string"?Qt.fromBase64String(n):Qt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function qo(n){const t=n.mapValue.fields.__previous_value__;return jo(t)?qo(t):t}function li(n){const t=ln(n.mapValue.fields.__local_write_time__.timestampValue);return new kt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t,e,r,i,o,l,h,m,w){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=m,this.useFetchStreams=w}}class ui{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ui("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ui&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?jo(n)?4:Ff(n)?9007199254740991:10:H()}function Pe(n,t){if(n===t)return!0;const e=Ln(n);if(e!==Ln(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return li(n).isEqual(li(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=ln(i.timestampValue),h=ln(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Mn(i.bytesValue).isEqual(Mn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return Tt(i.geoPointValue.latitude)===Tt(o.geoPointValue.latitude)&&Tt(i.geoPointValue.longitude)===Tt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Tt(i.integerValue)===Tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=Tt(i.doubleValue),h=Tt(o.doubleValue);return l===h?_s(l)===_s(h):isNaN(l)&&isNaN(h)}return!1}(n,t);case 9:return mr(n.arrayValue.values||[],t.arrayValue.values||[],Pe);case 10:return function(i,o){const l=i.mapValue.fields||{},h=o.mapValue.fields||{};if(nl(l)!==nl(h))return!1;for(const m in l)if(l.hasOwnProperty(m)&&(h[m]===void 0||!Pe(l[m],h[m])))return!1;return!0}(n,t);default:return H()}}function ci(n,t){return(n.values||[]).find(e=>Pe(e,t))!==void 0}function gr(n,t){if(n===t)return 0;const e=Ln(n),r=Ln(t);if(e!==r)return lt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return lt(n.booleanValue,t.booleanValue);case 2:return function(o,l){const h=Tt(o.integerValue||o.doubleValue),m=Tt(l.integerValue||l.doubleValue);return h<m?-1:h>m?1:h===m?0:isNaN(h)?isNaN(m)?0:-1:1}(n,t);case 3:return il(n.timestampValue,t.timestampValue);case 4:return il(li(n),li(t));case 5:return lt(n.stringValue,t.stringValue);case 6:return function(o,l){const h=Mn(o),m=Mn(l);return h.compareTo(m)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const h=o.split("/"),m=l.split("/");for(let w=0;w<h.length&&w<m.length;w++){const v=lt(h[w],m[w]);if(v!==0)return v}return lt(h.length,m.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const h=lt(Tt(o.latitude),Tt(l.latitude));return h!==0?h:lt(Tt(o.longitude),Tt(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,l){const h=o.values||[],m=l.values||[];for(let w=0;w<h.length&&w<m.length;++w){const v=gr(h[w],m[w]);if(v)return v}return lt(h.length,m.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,l){if(o===as.mapValue&&l===as.mapValue)return 0;if(o===as.mapValue)return 1;if(l===as.mapValue)return-1;const h=o.fields||{},m=Object.keys(h),w=l.fields||{},v=Object.keys(w);m.sort(),v.sort();for(let P=0;P<m.length&&P<v.length;++P){const D=lt(m[P],v[P]);if(D!==0)return D;const O=gr(h[m[P]],w[v[P]]);if(O!==0)return O}return lt(m.length,v.length)}(n.mapValue,t.mapValue);default:throw H()}}function il(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return lt(n,t);const e=ln(n),r=ln(t),i=lt(e.seconds,r.seconds);return i!==0?i:lt(e.nanos,r.nanos)}function wr(n){return bo(n)}function bo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ln(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Mn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return $.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=bo(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${bo(e.fields[l])}`;return i+"}"}(n.mapValue):H()}function sl(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ao(n){return!!n&&"integerValue"in n}function $o(n){return!!n&&"arrayValue"in n}function ol(n){return!!n&&"nullValue"in n}function al(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fs(n){return!!n&&"mapValue"in n}function ti(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return br(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ti(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ti(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Ff(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.value=t}static empty(){return new ue({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!fs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ti(e)}setAll(t){let e=Ut.emptyPath(),r={},i=[];t.forEach((l,h)=>{if(!e.isImmediateParentOf(h)){const m=this.getFieldsMap(e);this.applyChanges(m,r,i),r={},i=[],e=h.popLast()}l?r[h.lastSegment()]=ti(l):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());fs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];fs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){br(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new ue(ti(this.value))}}function mu(n){const t=[];return br(n.fields,(e,r)=>{const i=new Ut([e]);if(fs(r)){const o=mu(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)}),new me(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e,r,i,o,l,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(t){return new Gt(t,0,W.min(),W.min(),W.min(),ue.empty(),0)}static newFoundDocument(t,e,r,i){return new Gt(t,1,e,W.min(),r,i,0)}static newNoDocument(t,e){return new Gt(t,2,e,W.min(),W.min(),ue.empty(),0)}static newUnknownDocument(t,e){return new Gt(t,3,e,W.min(),W.min(),ue.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vs{constructor(t,e){this.position=t,this.inclusive=e}}function ll(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=$.comparator($.fromName(l.referenceValue),e.key):r=gr(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ul(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pe(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Es{constructor(t,e="asc"){this.field=t,this.dir=e}}function Bf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class gu{}class bt extends gu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new jf(t,e,r):e==="array-contains"?new zf(t,r):e==="in"?new Hf(t,r):e==="not-in"?new Wf(t,r):e==="array-contains-any"?new Kf(t,r):new bt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new qf(t,r):new $f(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(gr(e,this.value)):e!==null&&Ln(this.value)===Ln(e)&&this.matchesComparison(gr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class we extends gu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new we(t,e)}matches(t){return wu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wu(n){return n.op==="and"}function yu(n){return Uf(n)&&wu(n)}function Uf(n){for(const t of n.filters)if(t instanceof we)return!1;return!0}function Io(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+wr(n.value);if(yu(n))return n.filters.map(t=>Io(t)).join(",");{const t=n.filters.map(e=>Io(e)).join(",");return`${n.op}(${t})`}}function _u(n,t){return n instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.field.isEqual(i.field)&&Pe(r.value,i.value)}(n,t):n instanceof we?function(r,i){return i instanceof we&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,h)=>o&&_u(l,i.filters[h]),!0):!1}(n,t):void H()}function vu(n){return n instanceof bt?function(e){return`${e.field.canonicalString()} ${e.op} ${wr(e.value)}`}(n):n instanceof we?function(e){return e.op.toString()+" {"+e.getFilters().map(vu).join(" ,")+"}"}(n):"Filter"}class jf extends bt{constructor(t,e,r){super(t,e,r),this.key=$.fromName(r.referenceValue)}matches(t){const e=$.comparator(t.key,this.key);return this.matchesComparison(e)}}class qf extends bt{constructor(t,e){super(t,"in",e),this.keys=Eu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class $f extends bt{constructor(t,e){super(t,"not-in",e),this.keys=Eu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Eu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>$.fromName(r.referenceValue))}class zf extends bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return $o(e)&&ci(e.arrayValue,this.value)}}class Hf extends bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ci(this.value.arrayValue,e)}}class Wf extends bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ci(this.value.arrayValue,e)}}class Kf extends bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!$o(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>ci(this.value.arrayValue,r))}}/**
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
 */class Gf{constructor(t,e=null,r=[],i=[],o=null,l=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=h,this.ue=null}}function cl(n,t=null,e=[],r=[],i=null,o=null,l=null){return new Gf(n,t,e,r,i,o,l)}function zo(n){const t=X(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Io(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Rs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>wr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>wr(r)).join(",")),t.ue=e}return t.ue}function Ho(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Bf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!_u(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ul(n.startAt,t.startAt)&&ul(n.endAt,t.endAt)}function Co(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e=null,r=[],i=[],o=null,l="F",h=null,m=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=m,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Qf(n,t,e,r,i,o,l,h){return new mi(n,t,e,r,i,o,l,h)}function Tu(n){return new mi(n)}function hl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bu(n){return n.collectionGroup!==null}function ei(n){const t=X(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new jt(Ut.comparator);return l.filters.forEach(m=>{m.getFlattenedFilters().forEach(w=>{w.isInequality()&&(h=h.add(w.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Es(o,r))}),e.has(Ut.keyField().canonicalString())||t.ce.push(new Es(Ut.keyField(),r))}return t.ce}function Ie(n){const t=X(n);return t.le||(t.le=Xf(t,ei(n))),t.le}function Xf(n,t){if(n.limitType==="F")return cl(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Es(i.field,o)});const e=n.endAt?new vs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new vs(n.startAt.position,n.startAt.inclusive):null;return cl(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ro(n,t){const e=n.filters.concat([t]);return new mi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Po(n,t,e){return new mi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ps(n,t){return Ho(Ie(n),Ie(t))&&n.limitType===t.limitType}function Au(n){return`${zo(Ie(n))}|lt:${n.limitType}`}function ur(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>vu(i)).join(", ")}]`),Rs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>wr(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>wr(i)).join(",")),`Target(${r})`}(Ie(n))}; limitType=${n.limitType})`}function Ss(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of ei(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(l,h,m){const w=ll(l,h,m);return l.inclusive?w<=0:w<0}(r.startAt,ei(r),i)||r.endAt&&!function(l,h,m){const w=ll(l,h,m);return l.inclusive?w>=0:w>0}(r.endAt,ei(r),i))}(n,t)}function Yf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Iu(n){return(t,e)=>{let r=!1;for(const i of ei(n)){const o=Jf(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Jf(n,t,e){const r=n.field.isKeyField()?$.comparator(t.key,e.key):function(o,l,h){const m=l.data.field(o),w=h.data.field(o);return m!==null&&w!==null?gr(m,w):H()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){br(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return fu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=new mt($.comparator);function je(){return Zf}const Cu=new mt($.comparator);function Jr(...n){let t=Cu;for(const e of n)t=t.insert(e.key,e);return t}function Ru(n){let t=Cu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Vn(){return ni()}function Pu(){return ni()}function ni(){return new Ar(n=>n.toString(),(n,t)=>n.isEqual(t))}const tp=new mt($.comparator),ep=new jt($.comparator);function et(...n){let t=ep;for(const e of n)t=t.add(e);return t}const np=new jt(lt);function rp(){return np}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_s(t)?"-0":t}}function ku(n){return{integerValue:""+n}}function ip(n,t){return Nf(t)?ku(t):Su(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this._=void 0}}function sp(n,t,e){return n instanceof Ts?function(i,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&jo(o)&&(o=qo(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof hi?Du(n,t):n instanceof di?xu(n,t):function(i,o){const l=Vu(i,o),h=dl(l)+dl(i.Pe);return Ao(l)&&Ao(i.Pe)?ku(h):Su(i.serializer,h)}(n,t)}function op(n,t,e){return n instanceof hi?Du(n,t):n instanceof di?xu(n,t):e}function Vu(n,t){return n instanceof bs?function(r){return Ao(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Ts extends ks{}class hi extends ks{constructor(t){super(),this.elements=t}}function Du(n,t){const e=Ou(t);for(const r of n.elements)e.some(i=>Pe(i,r))||e.push(r);return{arrayValue:{values:e}}}class di extends ks{constructor(t){super(),this.elements=t}}function xu(n,t){let e=Ou(t);for(const r of n.elements)e=e.filter(i=>!Pe(i,r));return{arrayValue:{values:e}}}class bs extends ks{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function dl(n){return Tt(n.integerValue||n.doubleValue)}function Ou(n){return $o(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ap(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof hi&&i instanceof hi||r instanceof di&&i instanceof di?mr(r.elements,i.elements,Pe):r instanceof bs&&i instanceof bs?Pe(r.Pe,i.Pe):r instanceof Ts&&i instanceof Ts}(n.transform,t.transform)}class lp{constructor(t,e){this.version=t,this.transformResults=e}}class Ce{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ce}static exists(t){return new Ce(void 0,t)}static updateTime(t){return new Ce(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ps(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Vs{}function Nu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Wo(n.key,Ce.none()):new gi(n.key,n.data,Ce.none());{const e=n.data,r=ue.empty();let i=new jt(Ut.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new Un(n.key,r,new me(i.toArray()),Ce.none())}}function up(n,t,e){n instanceof gi?function(i,o,l){const h=i.value.clone(),m=pl(i.fieldTransforms,o,l.transformResults);h.setAll(m),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,t,e):n instanceof Un?function(i,o,l){if(!ps(i.precondition,o))return void o.convertToUnknownDocument(l.version);const h=pl(i.fieldTransforms,o,l.transformResults),m=o.data;m.setAll(Mu(i)),m.setAll(h),o.convertToFoundDocument(l.version,m).setHasCommittedMutations()}(n,t,e):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function ri(n,t,e,r){return n instanceof gi?function(o,l,h,m){if(!ps(o.precondition,l))return h;const w=o.value.clone(),v=ml(o.fieldTransforms,m,l);return w.setAll(v),l.convertToFoundDocument(l.version,w).setHasLocalMutations(),null}(n,t,e,r):n instanceof Un?function(o,l,h,m){if(!ps(o.precondition,l))return h;const w=ml(o.fieldTransforms,m,l),v=l.data;return v.setAll(Mu(o)),v.setAll(w),l.convertToFoundDocument(l.version,v).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(P=>P.field))}(n,t,e,r):function(o,l,h){return ps(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h}(n,t,e)}function cp(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Vu(r.transform,i||null);o!=null&&(e===null&&(e=ue.empty()),e.set(r.field,o))}return e||null}function fl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&mr(r,i,(o,l)=>ap(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class gi extends Vs{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Un extends Vs{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Mu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function pl(n,t,e){const r=new Map;dt(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,h=t.data.field(o.field);r.set(o.field,op(l,h,e[i]))}return r}function ml(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,sp(o,l,t))}return r}class Wo extends Vs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hp extends Vs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&up(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ri(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ri(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Pu();return this.mutations.forEach(i=>{const o=t.get(i.key),l=o.overlayedDocument;let h=this.applyToLocalView(l,o.mutatedFields);h=e.has(i.key)?null:h;const m=Nu(l,h);m!==null&&r.set(i.key,m),l.isValidDocument()||l.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),et())}isEqual(t){return this.batchId===t.batchId&&mr(this.mutations,t.mutations,(e,r)=>fl(e,r))&&mr(this.baseMutations,t.baseMutations,(e,r)=>fl(e,r))}}class Ko{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){dt(t.mutations.length===r.length);let i=function(){return tp}();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Ko(t,e,r,i)}}/**
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
 */class fp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et,rt;function mp(n){switch(n){default:return H();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Lu(n){if(n===void 0)return Ue("GRPC error has no .code"),x.UNKNOWN;switch(n){case Et.OK:return x.OK;case Et.CANCELLED:return x.CANCELLED;case Et.UNKNOWN:return x.UNKNOWN;case Et.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Et.INTERNAL:return x.INTERNAL;case Et.UNAVAILABLE:return x.UNAVAILABLE;case Et.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Et.NOT_FOUND:return x.NOT_FOUND;case Et.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Et.ABORTED:return x.ABORTED;case Et.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Et.DATA_LOSS:return x.DATA_LOSS;default:return H()}}(rt=Et||(Et={}))[rt.OK=0]="OK",rt[rt.CANCELLED=1]="CANCELLED",rt[rt.UNKNOWN=2]="UNKNOWN",rt[rt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",rt[rt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",rt[rt.NOT_FOUND=5]="NOT_FOUND",rt[rt.ALREADY_EXISTS=6]="ALREADY_EXISTS",rt[rt.PERMISSION_DENIED=7]="PERMISSION_DENIED",rt[rt.UNAUTHENTICATED=16]="UNAUTHENTICATED",rt[rt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",rt[rt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",rt[rt.ABORTED=10]="ABORTED",rt[rt.OUT_OF_RANGE=11]="OUT_OF_RANGE",rt[rt.UNIMPLEMENTED=12]="UNIMPLEMENTED",rt[rt.INTERNAL=13]="INTERNAL",rt[rt.UNAVAILABLE=14]="UNAVAILABLE",rt[rt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gp(){return new TextEncoder}/**
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
 */const wp=new Dn([4294967295,4294967295],0);function gl(n){const t=gp().encode(n),e=new iu;return e.update(t),new Uint8Array(e.digest())}function wl(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Dn([e,r],0),new Dn([i,o],0)]}class Go{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Zr(`Invalid padding: ${e}`);if(r<0)throw new Zr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Zr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Zr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Dn.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Dn.fromNumber(r)));return i.compare(wp)===1&&(i=new Dn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=gl(t),[r,i]=wl(e);for(let o=0;o<this.hashCount;o++){const l=this.Ee(r,i,o);if(!this.de(l))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),l=new Go(o,i,e);return r.forEach(h=>l.insert(h)),l}insert(t){if(this.Ie===0)return;const e=gl(t),[r,i]=wl(e);for(let o=0;o<this.hashCount;o++){const l=this.Ee(r,i,o);this.Ae(l)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,wi.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Ds(W.min(),i,new mt(lt),je(),et())}}class wi{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new wi(r,e,et(),et(),et())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Fu{constructor(t,e){this.targetId=t,this.me=e}}class Bu{constructor(t,e,r=Qt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class yl{constructor(){this.fe=0,this.ge=vl(),this.pe=Qt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=et(),e=et(),r=et();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:H()}}),new wi(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=vl()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,dt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yp{constructor(t){this.Le=t,this.Be=new Map,this.ke=je(),this.qe=_l(),this.Qe=new mt(lt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:H()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Co(o))if(r===0){const l=new $(o.path);this.Ue(e,l,Gt.newNoDocument(l,W.min()))}else dt(r===1);else{const l=this.Ye(e);if(l!==r){const h=this.Ze(t),m=h?this.Xe(h,t,l):1;if(m!==0){this.je(e);const w=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,w)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let l,h;try{l=Mn(r).toUint8Array()}catch(m){if(m instanceof pu)return pr("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{h=new Go(l,i,o)}catch(m){return pr(m instanceof Zr?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return h.Ie===0?null:h}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const l=this.Le.tt(),h=`projects/${l.projectId}/databases/${l.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,l)=>{const h=this.Je(l);if(h){if(o.current&&Co(h.target)){const m=new $(h.target.path);this.ke.get(m)!==null||this.it(l,m)||this.Ue(l,m,Gt.newNoDocument(m,t))}o.be&&(e.set(l,o.Ce()),o.ve())}});let r=et();this.qe.forEach((o,l)=>{let h=!0;l.forEachWhile(m=>{const w=this.Je(m);return!w||w.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(o))}),this.ke.forEach((o,l)=>l.setReadTime(t));const i=new Ds(t,e,this.Qe,this.ke,r);return this.ke=je(),this.qe=_l(),this.Qe=new mt(lt),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new yl,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new jt(lt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new yl),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function _l(){return new mt($.comparator)}function vl(){return new mt($.comparator)}const _p={asc:"ASCENDING",desc:"DESCENDING"},vp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ep={and:"AND",or:"OR"};class Tp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function So(n,t){return n.useProto3Json||Rs(t)?t:{value:t}}function As(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Uu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function bp(n,t){return As(n,t.toTimestamp())}function Re(n){return dt(!!n),W.fromTimestamp(function(e){const r=ln(e);return new kt(r.seconds,r.nanos)}(n))}function Qo(n,t){return ko(n,t).canonicalString()}function ko(n,t){const e=function(i){return new ft(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ju(n){const t=ft.fromString(n);return dt(Wu(t)),t}function Vo(n,t){return Qo(n.databaseId,t.path)}function uo(n,t){const e=ju(t);if(e.get(1)!==n.databaseId.projectId)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new $($u(e))}function qu(n,t){return Qo(n.databaseId,t)}function Ap(n){const t=ju(n);return t.length===4?ft.emptyPath():$u(t)}function Do(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $u(n){return dt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function El(n,t,e){return{name:Vo(n,t),fields:e.value.mapValue.fields}}function Ip(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(w){return w==="NO_CHANGE"?0:w==="ADD"?1:w==="REMOVE"?2:w==="CURRENT"?3:w==="RESET"?4:H()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(w,v){return w.useProto3Json?(dt(v===void 0||typeof v=="string"),Qt.fromBase64String(v||"")):(dt(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Qt.fromUint8Array(v||new Uint8Array))}(n,t.targetChange.resumeToken),l=t.targetChange.cause,h=l&&function(w){const v=w.code===void 0?x.UNKNOWN:Lu(w.code);return new j(v,w.message||"")}(l);e=new Bu(r,i,o,h||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=uo(n,r.document.name),o=Re(r.document.updateTime),l=r.document.createTime?Re(r.document.createTime):W.min(),h=new ue({mapValue:{fields:r.document.fields}}),m=Gt.newFoundDocument(i,o,l,h),w=r.targetIds||[],v=r.removedTargetIds||[];e=new ms(w,v,m.key,m)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=uo(n,r.document),o=r.readTime?Re(r.readTime):W.min(),l=Gt.newNoDocument(i,o),h=r.removedTargetIds||[];e=new ms([],h,l.key,l)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=uo(n,r.document),o=r.removedTargetIds||[];e=new ms([],o,i,null)}else{if(!("filter"in t))return H();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,l=new pp(i,o),h=r.targetId;e=new Fu(h,l)}}return e}function Cp(n,t){let e;if(t instanceof gi)e={update:El(n,t.key,t.value)};else if(t instanceof Wo)e={delete:Vo(n,t.key)};else if(t instanceof Un)e={update:El(n,t.key,t.data),updateMask:Np(t.fieldMask)};else{if(!(t instanceof hp))return H();e={verify:Vo(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const h=l.transform;if(h instanceof Ts)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof hi)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof di)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof bs)return{fieldPath:l.field.canonicalString(),increment:h.Pe};throw H()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:bp(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:H()}(n,t.precondition)),e}function Rp(n,t){return n&&n.length>0?(dt(t!==void 0),n.map(e=>function(i,o){let l=i.updateTime?Re(i.updateTime):Re(o);return l.isEqual(W.min())&&(l=Re(o)),new lp(l,i.transformResults||[])}(e,t))):[]}function Pp(n,t){return{documents:[qu(n,t.path)]}}function Sp(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=qu(n,i);const o=function(w){if(w.length!==0)return Hu(we.create(w,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const l=function(w){if(w.length!==0)return w.map(v=>function(D){return{field:cr(D.field),direction:Dp(D.dir)}}(v))}(t.orderBy);l&&(e.structuredQuery.orderBy=l);const h=So(n,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(w){return{before:w.inclusive,values:w.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(w){return{before:!w.inclusive,values:w.position}}(t.endAt)),{_t:e,parent:i}}function kp(n){let t=Ap(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){dt(r===1);const v=e.from[0];v.allDescendants?i=v.collectionId:t=t.child(v.collectionId)}let o=[];e.where&&(o=function(P){const D=zu(P);return D instanceof we&&yu(D)?D.getFilters():[D]}(e.where));let l=[];e.orderBy&&(l=function(P){return P.map(D=>function(B){return new Es(hr(B.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(B.direction))}(D))}(e.orderBy));let h=null;e.limit&&(h=function(P){let D;return D=typeof P=="object"?P.value:P,Rs(D)?null:D}(e.limit));let m=null;e.startAt&&(m=function(P){const D=!!P.before,O=P.values||[];return new vs(O,D)}(e.startAt));let w=null;return e.endAt&&(w=function(P){const D=!P.before,O=P.values||[];return new vs(O,D)}(e.endAt)),Qf(t,i,l,o,h,"F",m,w)}function Vp(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function zu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=hr(e.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hr(e.unaryFilter.field);return bt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=hr(e.unaryFilter.field);return bt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=hr(e.unaryFilter.field);return bt.create(l,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(e){return bt.create(hr(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return we.create(e.compositeFilter.filters.map(r=>zu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(n):H()}function Dp(n){return _p[n]}function xp(n){return vp[n]}function Op(n){return Ep[n]}function cr(n){return{fieldPath:n.canonicalString()}}function hr(n){return Ut.fromServerFormat(n.fieldPath)}function Hu(n){return n instanceof bt?function(e){if(e.op==="=="){if(al(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NAN"}};if(ol(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(al(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NOT_NAN"}};if(ol(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cr(e.field),op:xp(e.op),value:e.value}}}(n):n instanceof we?function(e){const r=e.getFilters().map(i=>Hu(i));return r.length===1?r[0]:{compositeFilter:{op:Op(e.op),filters:r}}}(n):H()}function Np(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Wu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e,r,i,o=W.min(),l=W.min(),h=Qt.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=h,this.expectedCount=m}withSequenceNumber(t){return new tn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t){this.ct=t}}function Lp(n){const t=kp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Po(t,t.limit,"L"):t}/**
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
 */class Fp{constructor(){this._n=new Bp}addToCollectionParentIndex(t,e){return this._n.add(e),N.resolve()}getCollectionParents(t,e){return N.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return N.resolve()}deleteFieldIndex(t,e){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,e){return N.resolve()}getDocumentsMatchingTarget(t,e){return N.resolve(null)}getIndexType(t,e){return N.resolve(0)}getFieldIndexes(t,e){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,e){return N.resolve(an.min())}getMinOffsetFromCollectionGroup(t,e){return N.resolve(an.min())}updateCollectionGroup(t,e,r){return N.resolve()}updateIndexEntries(t,e){return N.resolve()}}class Bp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new jt(ft.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new jt(ft.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new yr(0)}static Ln(){return new yr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.changes=new Ar(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?N.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class jp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&ri(r.mutation,i,me.empty(),kt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,et()).next(()=>r))}getLocalViewOfDocuments(t,e,r=et()){const i=Vn();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let l=Jr();return o.forEach((h,m)=>{l=l.insert(h,m.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=Vn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,et()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((l,h)=>{e.set(l,h)})})}computeViews(t,e,r,i){let o=je();const l=ni(),h=function(){return ni()}();return e.forEach((m,w)=>{const v=r.get(w.key);i.has(w.key)&&(v===void 0||v.mutation instanceof Un)?o=o.insert(w.key,w):v!==void 0?(l.set(w.key,v.mutation.getFieldMask()),ri(v.mutation,w,v.mutation.getFieldMask(),kt.now())):l.set(w.key,me.empty())}),this.recalculateAndSaveOverlays(t,o).next(m=>(m.forEach((w,v)=>l.set(w,v)),e.forEach((w,v)=>{var P;return h.set(w,new jp(v,(P=l.get(w))!==null&&P!==void 0?P:null))}),h))}recalculateAndSaveOverlays(t,e){const r=ni();let i=new mt((l,h)=>l-h),o=et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const h of l)h.keys().forEach(m=>{const w=e.get(m);if(w===null)return;let v=r.get(m)||me.empty();v=h.applyToLocalView(w,v),r.set(m,v);const P=(i.get(h.batchId)||et()).add(m);i=i.insert(h.batchId,P)})}).next(()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const m=h.getNext(),w=m.key,v=m.value,P=Pu();v.forEach(D=>{if(!o.has(D)){const O=Nu(e.get(D),r.get(D));O!==null&&P.set(D,O),o=o.add(D)}}),l.push(this.documentOverlayCache.saveOverlays(t,w,P))}return N.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(l){return $.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):N.resolve(Vn());let h=-1,m=o;return l.next(w=>N.forEach(w,(v,P)=>(h<P.largestBatchId&&(h=P.largestBatchId),o.get(v)?N.resolve():this.remoteDocumentCache.getEntry(t,v).next(D=>{m=m.insert(v,D)}))).next(()=>this.populateOverlays(t,w,o)).next(()=>this.computeViews(t,m,w,et())).next(v=>({batchId:h,changes:Ru(v)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new $(e)).next(r=>{let i=Jr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=Jr();return this.indexManager.getCollectionParents(t,o).next(h=>N.forEach(h,m=>{const w=function(P,D){return new mi(D,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)}(e,m.child(o));return this.getDocumentsMatchingCollectionQuery(t,w,r,i).next(v=>{v.forEach((P,D)=>{l=l.insert(P,D)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(l=>{o.forEach((m,w)=>{const v=w.getKey();l.get(v)===null&&(l=l.insert(v,Gt.newInvalidDocument(v)))});let h=Jr();return l.forEach((m,w)=>{const v=o.get(m);v!==void 0&&ri(v.mutation,w,me.empty(),kt.now()),Ss(e,w)&&(h=h.insert(m,w))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return N.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Re(i.createTime)}}(e)),N.resolve()}getNamedQuery(t,e){return N.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:Lp(i.bundledQuery),readTime:Re(i.readTime)}}(e)),N.resolve()}}/**
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
 */class zp{constructor(){this.overlays=new mt($.comparator),this.hr=new Map}getOverlay(t,e){return N.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Vn();return N.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),N.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),N.resolve()}getOverlaysForCollection(t,e,r){const i=Vn(),o=e.length+1,l=new $(e.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const m=h.getNext().value,w=m.getKey();if(!e.isPrefixOf(w.path))break;w.path.length===o&&m.largestBatchId>r&&i.set(m.getKey(),m)}return N.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new mt((w,v)=>w-v);const l=this.overlays.getIterator();for(;l.hasNext();){const w=l.getNext().value;if(w.getKey().getCollectionGroup()===e&&w.largestBatchId>r){let v=o.get(w.largestBatchId);v===null&&(v=Vn(),o=o.insert(w.largestBatchId,v)),v.set(w.getKey(),w)}}const h=Vn(),m=o.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((w,v)=>h.set(w,v)),!(h.size()>=i)););return N.resolve(h)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new fp(e,r));let o=this.hr.get(e);o===void 0&&(o=et(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.Pr=new jt(Ot.Ir),this.Tr=new jt(Ot.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new Ot(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new Ot(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new $(new ft([])),r=new Ot(e,t),i=new Ot(e,t+1),o=[];return this.Tr.forEachInRange([r,i],l=>{this.Ar(l),o.push(l.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new $(new ft([])),r=new Ot(e,t),i=new Ot(e,t+1);let o=et();return this.Tr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new Ot(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Ot{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return $.comparator(t.key,e.key)||lt(t.pr,e.pr)}static Er(t,e){return lt(t.pr,e.pr)||$.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new jt(Ot.Ir)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new dp(o,e,r,i);this.mutationQueue.push(l);for(const h of i)this.wr=this.wr.add(new Ot(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return N.resolve(l)}lookupMutationBatch(t,e){return N.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Ot(e,0),i=new Ot(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],l=>{const h=this.Sr(l.pr);o.push(h)}),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new jt(lt);return e.forEach(i=>{const o=new Ot(i,0),l=new Ot(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,l],h=>{r=r.add(h.pr)})}),N.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const l=new Ot(new $(o),0);let h=new jt(lt);return this.wr.forEachWhile(m=>{const w=m.key.path;return!!r.isPrefixOf(w)&&(w.length===i&&(h=h.add(m.pr)),!0)},l),N.resolve(this.Dr(h))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){dt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return N.forEach(e.mutations,i=>{const o=new Ot(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new Ot(e,0),i=this.wr.firstAfterOrEqual(r);return N.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(t){this.vr=t,this.docs=function(){return new mt($.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return N.resolve(r?r.document.mutableCopy():Gt.newInvalidDocument(e))}getEntries(t,e){let r=je();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Gt.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=je();const l=e.path,h=new $(l.child("")),m=this.docs.getIteratorFrom(h);for(;m.hasNext();){const{key:w,value:{document:v}}=m.getNext();if(!l.isPrefixOf(w.path))break;w.path.length>l.length+1||Vf(kf(v),r)<=0||(i.has(v.key)||Ss(e,v))&&(o=o.insert(v.key,v.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(t,e,r,i){H()}Fr(t,e){return N.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Kp(this)}getSize(t){return N.resolve(this.size)}}class Kp extends Up{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),N.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(t){this.persistence=t,this.Mr=new Ar(e=>zo(e),Ho),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Xo,this.targetCount=0,this.Lr=yr.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),N.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new yr(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,N.resolve()}updateTargetData(t,e){return this.qn(e),N.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((l,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.Mr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),N.waitFor(o).next(()=>i)}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return N.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),N.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(l=>{o.push(i.markPotentiallyOrphaned(t,l))}),N.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),N.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return N.resolve(r)}containsKey(t,e){return N.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t,e){this.Br={},this.overlays={},this.kr=new Uo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Gp(this),this.indexManager=new Fp,this.remoteDocumentCache=function(i){return new Wp(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Mp(e),this.$r=new $p(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new zp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Hp(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const i=new Xp(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return N.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class Xp extends xf{constructor(t){super(),this.currentSequenceNumber=t}}class Yo{constructor(t){this.persistence=t,this.zr=new Xo,this.jr=null}static Hr(t){return new Yo(t)}get Jr(){if(this.jr)return this.jr;throw H()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),N.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),N.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Jr,r=>{const i=$.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,W.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return N.or([()=>N.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=et(),i=et();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Jo(t,e.fromCache,r,i)}}/**
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
 */class Yp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Jp{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return sd()?8:Of(rd())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Yp;return this.Ji(t,e,l).next(h=>{if(o.result=h,this.Ui)return this.Yi(t,e,l,h.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(Qr()<=it.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",ur(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),N.resolve()):(Qr()<=it.DEBUG&&U("QueryEngine","Query:",ur(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Qr()<=it.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",ur(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ie(e))):N.resolve())}ji(t,e){if(hl(e))return N.resolve(null);let r=Ie(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Po(e,null,"F"),r=Ie(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=et(...o);return this.zi.getDocuments(t,l).next(h=>this.indexManager.getMinOffset(t,r).next(m=>{const w=this.Zi(e,h);return this.Xi(e,w,l,m.readTime)?this.ji(t,Po(e,null,"F")):this.es(t,w,e,m)}))})))}Hi(t,e,r,i){return hl(e)||i.isEqual(W.min())?N.resolve(null):this.zi.getDocuments(t,r).next(o=>{const l=this.Zi(e,o);return this.Xi(e,l,r,i)?N.resolve(null):(Qr()<=it.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ur(e)),this.es(t,l,e,Sf(i,-1)).next(h=>h))})}Zi(t,e){let r=new jt(Iu(t));return e.forEach((i,o)=>{Ss(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return Qr()<=it.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",ur(e)),this.zi.getDocumentsMatchingQuery(t,e,an.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new mt(lt),this.rs=new Ar(o=>zo(o),Ho),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qp(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function tm(n,t,e,r){return new Zp(n,t,e,r)}async function Ku(n,t){const e=X(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],h=[];let m=et();for(const w of i){l.push(w.batchId);for(const v of w.mutations)m=m.add(v.key)}for(const w of o){h.push(w.batchId);for(const v of w.mutations)m=m.add(v.key)}return e.localDocuments.getDocuments(r,m).next(w=>({us:w,removedBatchIds:l,addedBatchIds:h}))})})}function em(n,t){const e=X(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(h,m,w,v){const P=w.batch,D=P.keys();let O=N.resolve();return D.forEach(B=>{O=O.next(()=>v.getEntry(m,B)).next(q=>{const L=w.docVersions.get(B);dt(L!==null),q.version.compareTo(L)<0&&(P.applyToRemoteDocument(q,w),q.isValidDocument()&&(q.setReadTime(w.commitVersion),v.addEntry(q)))})}),O.next(()=>h.mutationQueue.removeMutationBatch(m,P))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let m=et();for(let w=0;w<h.mutationResults.length;++w)h.mutationResults[w].transformResults.length>0&&(m=m.add(h.batch.mutations[w].key));return m}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Gu(n){const t=X(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function nm(n,t){const e=X(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const l=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const h=[];t.targetChanges.forEach((v,P)=>{const D=i.get(P);if(!D)return;h.push(e.Qr.removeMatchingKeys(o,v.removedDocuments,P).next(()=>e.Qr.addMatchingKeys(o,v.addedDocuments,P)));let O=D.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(P)!==null?O=O.withResumeToken(Qt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):v.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(v.resumeToken,r)),i=i.insert(P,O),function(q,L,J){return q.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=3e8?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(D,O,v)&&h.push(e.Qr.updateTargetData(o,O))});let m=je(),w=et();if(t.documentUpdates.forEach(v=>{t.resolvedLimboDocuments.has(v)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,v))}),h.push(rm(o,l,t.documentUpdates).next(v=>{m=v.cs,w=v.ls})),!r.isEqual(W.min())){const v=e.Qr.getLastRemoteSnapshotVersion(o).next(P=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));h.push(v)}return N.waitFor(h).next(()=>l.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,m,w)).next(()=>m)}).then(o=>(e.ns=i,o))}function rm(n,t,e){let r=et(),i=et();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let l=je();return e.forEach((h,m)=>{const w=o.get(h);m.isFoundDocument()!==w.isFoundDocument()&&(i=i.add(h)),m.isNoDocument()&&m.version.isEqual(W.min())?(t.removeEntry(h,m.readTime),l=l.insert(h,m)):!w.isValidDocument()||m.version.compareTo(w.version)>0||m.version.compareTo(w.version)===0&&w.hasPendingWrites?(t.addEntry(m),l=l.insert(h,m)):U("LocalStore","Ignoring outdated watch update for ",h,". Current version:",w.version," Watch version:",m.version)}),{cs:l,ls:i}})}function im(n,t){const e=X(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function sm(n,t){const e=X(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(o=>o?(i=o,N.resolve(i)):e.Qr.allocateTargetId(r).next(l=>(i=new tn(t,l,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function xo(n,t,e){const r=X(n),i=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!pi(l))throw l;U("LocalStore",`Failed to update sequence numbers for target ${t}: ${l}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Tl(n,t,e){const r=X(n);let i=W.min(),o=et();return r.persistence.runTransaction("Execute query","readwrite",l=>function(m,w,v){const P=X(m),D=P.rs.get(v);return D!==void 0?N.resolve(P.ns.get(D)):P.Qr.getTargetData(w,v)}(r,l,Ie(t)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(l,h.targetId).next(m=>{o=m})}).next(()=>r.ts.getDocumentsMatchingQuery(l,t,e?i:W.min(),e?o:et())).next(h=>(om(r,Yf(t),h),{documents:h,hs:o})))}function om(n,t,e){let r=n.ss.get(t)||W.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class bl{constructor(){this.activeTargetIds=rp()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class am{constructor(){this.no=new bl,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new bl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class lm{io(t){}shutdown(){}}/**
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
 */class Al{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ls=null;function co(){return ls===null?ls=function(){return 268435456+Math.round(2147483648*Math.random())}():ls++,"0x"+ls.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="WebChannelConnection";class hm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,l){const h=co(),m=this.vo(e,r.toUriEncodedString());U("RestConnection",`Sending RPC '${e}' ${h}:`,m,i);const w={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(w,o,l),this.Mo(e,m,w,i).then(v=>(U("RestConnection",`Received RPC '${e}' ${h}: `,v),v),v=>{throw pr("RestConnection",`RPC '${e}' ${h} failed with error: `,v,"url: ",m,"request:",i),v})}xo(e,r,i,o,l,h){return this.Co(e,r,i,o,l)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Tr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,l)=>e[l]=o),i&&i.headers.forEach((o,l)=>e[l]=o)}vo(e,r){const i=um[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=co();return new Promise((l,h)=>{const m=new su;m.setWithCredentials(!0),m.listenOnce(au.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case ds.NO_ERROR:const v=m.getResponseJson();U(Wt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(v)),l(v);break;case ds.TIMEOUT:U(Wt,`RPC '${t}' ${o} timed out`),h(new j(x.DEADLINE_EXCEEDED,"Request time out"));break;case ds.HTTP_ERROR:const P=m.getStatus();if(U(Wt,`RPC '${t}' ${o} failed with status:`,P,"response text:",m.getResponseText()),P>0){let D=m.getResponseJson();Array.isArray(D)&&(D=D[0]);const O=D==null?void 0:D.error;if(O&&O.status&&O.message){const B=function(L){const J=L.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(J)>=0?J:x.UNKNOWN}(O.status);h(new j(B,O.message))}else h(new j(x.UNKNOWN,"Server responded with status "+m.getStatus()))}else h(new j(x.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{U(Wt,`RPC '${t}' ${o} completed.`)}});const w=JSON.stringify(i);U(Wt,`RPC '${t}' ${o} sending request:`,i),m.send(e,"POST",w,r,15)})}Oo(t,e,r){const i=co(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=cu(),h=uu(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},w=this.longPollingOptions.timeoutSeconds;w!==void 0&&(m.longPollingTimeout=Math.round(1e3*w)),this.useFetchStreams&&(m.xmlHttpFactory=new ou({})),this.Fo(m.initMessageHeaders,e,r),m.encodeInitMessageHeaders=!0;const v=o.join("");U(Wt,`Creating RPC '${t}' stream ${i}: ${v}`,m);const P=l.createWebChannel(v,m);let D=!1,O=!1;const B=new cm({lo:L=>{O?U(Wt,`Not sending because RPC '${t}' stream ${i} is closed:`,L):(D||(U(Wt,`Opening RPC '${t}' stream ${i} transport.`),P.open(),D=!0),U(Wt,`RPC '${t}' stream ${i} sending:`,L),P.send(L))},ho:()=>P.close()}),q=(L,J,K)=>{L.listen(J,Z=>{try{K(Z)}catch(tt){setTimeout(()=>{throw tt},0)}})};return q(P,Yr.EventType.OPEN,()=>{O||(U(Wt,`RPC '${t}' stream ${i} transport opened.`),B.mo())}),q(P,Yr.EventType.CLOSE,()=>{O||(O=!0,U(Wt,`RPC '${t}' stream ${i} transport closed`),B.po())}),q(P,Yr.EventType.ERROR,L=>{O||(O=!0,pr(Wt,`RPC '${t}' stream ${i} transport errored:`,L),B.po(new j(x.UNAVAILABLE,"The operation could not be completed")))}),q(P,Yr.EventType.MESSAGE,L=>{var J;if(!O){const K=L.data[0];dt(!!K);const Z=K,tt=Z.error||((J=Z[0])===null||J===void 0?void 0:J.error);if(tt){U(Wt,`RPC '${t}' stream ${i} received error:`,tt);const qt=tt.status;let pt=function(T){const b=Et[T];if(b!==void 0)return Lu(b)}(qt),I=tt.message;pt===void 0&&(pt=x.INTERNAL,I="Unknown error status: "+qt+" with message "+tt.message),O=!0,B.po(new j(pt,I)),P.close()}else U(Wt,`RPC '${t}' stream ${i} received:`,K),B.yo(K)}}),q(h,lu.STAT_EVENT,L=>{L.stat===To.PROXY?U(Wt,`RPC '${t}' stream ${i} detected buffering proxy`):L.stat===To.NOPROXY&&U(Wt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{B.fo()},0),B}}function ho(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){return new Tp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,e,r,i,o,l,h,m){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=m,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Qu(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===x.RESOURCE_EXHAUSTED?(Ue(e.toString()),Ue("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new j(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return U("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dm extends Xu{constructor(t,e,r,i,o,l){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=Ip(this.serializer,t),r=function(o){if(!("targetChange"in o))return W.min();const l=o.targetChange;return l.targetIds&&l.targetIds.length?W.min():l.readTime?Re(l.readTime):W.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=Do(this.serializer),e.addTarget=function(o,l){let h;const m=l.target;if(h=Co(m)?{documents:Pp(o,m)}:{query:Sp(o,m)._t},h.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){h.resumeToken=Uu(o,l.resumeToken);const w=So(o,l.expectedCount);w!==null&&(h.expectedCount=w)}else if(l.snapshotVersion.compareTo(W.min())>0){h.readTime=As(o,l.snapshotVersion.toTimestamp());const w=So(o,l.expectedCount);w!==null&&(h.expectedCount=w)}return h}(this.serializer,t);const r=Vp(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=Do(this.serializer),e.removeTarget=t,this.i_(e)}}class fm extends Xu{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(dt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Rp(t.writeResults,t.commitTime),r=Re(t.commitTime);return this.listener.A_(r,e)}return dt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Do(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Cp(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(t,ko(e,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(x.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.xo(t,ko(e,r),i,l,h,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new j(x.UNKNOWN,l.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class mm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ue(e),this.y_=!1):U("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(l=>{r.enqueueAndForget(async()=>{jn(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(m){const w=X(m);w.M_.add(4),await yi(w),w.N_.set("Unknown"),w.M_.delete(4),await Os(w)}(this))})}),this.N_=new mm(r,i)}}async function Os(n){if(jn(n))for(const t of n.x_)await t(!0)}async function yi(n){for(const t of n.x_)await t(!1)}function Yu(n,t){const e=X(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),na(e)?ea(e):Ir(e).Xo()&&ta(e,t))}function Zo(n,t){const e=X(n),r=Ir(e);e.F_.delete(t),r.Xo()&&Ju(e,t),e.F_.size===0&&(r.Xo()?r.n_():jn(e)&&e.N_.set("Unknown"))}function ta(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ir(n).P_(t)}function Ju(n,t){n.L_.xe(t),Ir(n).I_(t)}function ea(n){n.L_=new yp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ir(n).start(),n.N_.w_()}function na(n){return jn(n)&&!Ir(n).Zo()&&n.F_.size>0}function jn(n){return X(n).M_.size===0}function Zu(n){n.L_=void 0}async function wm(n){n.N_.set("Online")}async function ym(n){n.F_.forEach((t,e)=>{ta(n,t)})}async function _m(n,t){Zu(n),na(n)?(n.N_.D_(t),ea(n)):n.N_.set("Unknown")}async function vm(n,t,e){if(n.N_.set("Online"),t instanceof Bu&&t.state===2&&t.cause)try{await async function(i,o){const l=o.cause;for(const h of o.targetIds)i.F_.has(h)&&(await i.remoteSyncer.rejectListen(h,l),i.F_.delete(h),i.L_.removeTarget(h))}(n,t)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Is(n,r)}else if(t instanceof ms?n.L_.Ke(t):t instanceof Fu?n.L_.He(t):n.L_.We(t),!e.isEqual(W.min()))try{const r=await Gu(n.localStore);e.compareTo(r)>=0&&await function(o,l){const h=o.L_.rt(l);return h.targetChanges.forEach((m,w)=>{if(m.resumeToken.approximateByteSize()>0){const v=o.F_.get(w);v&&o.F_.set(w,v.withResumeToken(m.resumeToken,l))}}),h.targetMismatches.forEach((m,w)=>{const v=o.F_.get(m);if(!v)return;o.F_.set(m,v.withResumeToken(Qt.EMPTY_BYTE_STRING,v.snapshotVersion)),Ju(o,m);const P=new tn(v.target,m,w,v.sequenceNumber);ta(o,P)}),o.remoteSyncer.applyRemoteEvent(h)}(n,e)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Is(n,r)}}async function Is(n,t,e){if(!pi(t))throw t;n.M_.add(1),await yi(n),n.N_.set("Offline"),e||(e=()=>Gu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Os(n)})}function tc(n,t){return t().catch(e=>Is(n,e,t))}async function Ns(n){const t=X(n),e=un(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Em(t);)try{const i=await im(t.localStore,r);if(i===null){t.v_.length===0&&e.n_();break}r=i.batchId,Tm(t,i)}catch(i){await Is(t,i)}ec(t)&&nc(t)}function Em(n){return jn(n)&&n.v_.length<10}function Tm(n,t){n.v_.push(t);const e=un(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function ec(n){return jn(n)&&!un(n).Zo()&&n.v_.length>0}function nc(n){un(n).start()}async function bm(n){un(n).V_()}async function Am(n){const t=un(n);for(const e of n.v_)t.d_(e.mutations)}async function Im(n,t,e){const r=n.v_.shift(),i=Ko.from(r,t,e);await tc(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ns(n)}async function Cm(n,t){t&&un(n).E_&&await async function(r,i){if(function(l){return mp(l)&&l!==x.ABORTED}(i.code)){const o=r.v_.shift();un(r).t_(),await tc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ns(r)}}(n,t),ec(n)&&nc(n)}async function Il(n,t){const e=X(n);e.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=jn(e);e.M_.add(3),await yi(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Os(e)}async function Rm(n,t){const e=X(n);t?(e.M_.delete(2),await Os(e)):t||(e.M_.add(2),await yi(e),e.N_.set("Unknown"))}function Ir(n){return n.B_||(n.B_=function(e,r,i){const o=X(e);return o.f_(),new dm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:wm.bind(null,n),To:ym.bind(null,n),Ao:_m.bind(null,n),h_:vm.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),na(n)?ea(n):n.N_.set("Unknown")):(await n.B_.stop(),Zu(n))})),n.B_}function un(n){return n.k_||(n.k_=function(e,r,i){const o=X(e);return o.f_(),new fm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:bm.bind(null,n),Ao:Cm.bind(null,n),R_:Am.bind(null,n),A_:Im.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Ns(n)):(await n.k_.stop(),n.v_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,h=new ra(t,e,l,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ia(n,t){if(Ue("AsyncQueue",`${t}: ${n}`),pi(n))return new j(x.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t){this.comparator=t?(e,r)=>t(e,r)||$.comparator(e.key,r.key):(e,r)=>$.comparator(e.key,r.key),this.keyedMap=Jr(),this.sortedSet=new mt(this.comparator)}static emptySet(t){return new dr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof dr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new dr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.q_=new mt($.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):H():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class _r{constructor(t,e,r,i,o,l,h,m,w){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=h,this.excludesMetadataChanges=m,this.hasCachedResults=w}static fromInitialDocuments(t,e,r,i,o){const l=[];return e.forEach(h=>{l.push({type:0,doc:h})}),new _r(t,e,dr.emptySet(e),l,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ps(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Sm{constructor(){this.queries=new Ar(t=>Au(t),Ps),this.onlineState="Unknown",this.z_=new Set}}async function km(n,t){const e=X(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(r=2):(o=new Pm,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(l){const h=ia(l,`Initialization of query '${ur(t.query)}' failed`);return void t.onError(h)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&sa(e)}async function Vm(n,t){const e=X(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const l=o.U_.indexOf(t);l>=0&&(o.U_.splice(l,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Dm(n,t){const e=X(n);let r=!1;for(const i of t){const o=i.query,l=e.queries.get(o);if(l){for(const h of l.U_)h.H_(i)&&(r=!0);l.K_=i}}r&&sa(e)}function xm(n,t,e){const r=X(n),i=r.queries.get(t);if(i)for(const o of i.U_)o.onError(e);r.queries.delete(t)}function sa(n){n.z_.forEach(t=>{t.next()})}var Oo,Rl;(Rl=Oo||(Oo={})).J_="default",Rl.Cache="cache";class Om{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new _r(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=_r.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Oo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t){this.key=t}}class ic{constructor(t){this.key=t}}class Nm{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=et(),this.mutatedKeys=et(),this.Ia=Iu(t),this.Ta=new dr(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new Cl,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,l=i,h=!1;const m=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,w=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((v,P)=>{const D=i.get(v),O=Ss(this.query,P)?P:null,B=!!D&&this.mutatedKeys.has(D.key),q=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let L=!1;D&&O?D.data.isEqual(O.data)?B!==q&&(r.track({type:3,doc:O}),L=!0):this.Ra(D,O)||(r.track({type:2,doc:O}),L=!0,(m&&this.Ia(O,m)>0||w&&this.Ia(O,w)<0)&&(h=!0)):!D&&O?(r.track({type:0,doc:O}),L=!0):D&&!O&&(r.track({type:1,doc:D}),L=!0,(m||w)&&(h=!0)),L&&(O?(l=l.add(O),o=q?o.add(v):o.delete(v)):(l=l.delete(v),o=o.delete(v)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const v=this.query.limitType==="F"?l.last():l.first();l=l.delete(v.key),o=o.delete(v.key),r.track({type:1,doc:v})}return{Ta:l,Aa:r,Xi:h,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const l=t.Aa.Q_();l.sort((v,P)=>function(O,B){const q=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return q(O)-q(B)}(v.type,P.type)||this.Ia(v.doc,P.doc)),this.Va(r),i=i!=null&&i;const h=e&&!i?this.ma():[],m=this.Pa.size===0&&this.current&&!i?1:0,w=m!==this.ha;return this.ha=m,l.length!==0||w?{snapshot:new _r(this.query,t.Ta,o,l,t.mutatedKeys,m===0,w,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:h}:{fa:h}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Cl,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=et(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new ic(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new rc(r))}),e}pa(t){this.la=t.hs,this.Pa=et();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return _r.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Mm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Lm{constructor(t){this.key=t,this.wa=!1}}class Fm{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Sa={},this.ba=new Ar(h=>Au(h),Ps),this.Da=new Map,this.Ca=new Set,this.va=new mt($.comparator),this.Fa=new Map,this.Ma=new Xo,this.xa={},this.Oa=new Map,this.Na=yr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Bm(n,t,e=!0){const r=cc(n);let i;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await sc(r,t,e,!0),i}async function Um(n,t){const e=cc(n);await sc(e,t,!0,!1)}async function sc(n,t,e,r){const i=await sm(n.localStore,Ie(t)),o=i.targetId,l=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let h;return r&&(h=await jm(n,t,o,l==="current",i.resumeToken)),n.isPrimaryClient&&e&&Yu(n.remoteStore,i),h}async function jm(n,t,e,r,i){n.Ba=(P,D,O)=>async function(q,L,J,K){let Z=L.view.da(J);Z.Xi&&(Z=await Tl(q.localStore,L.query,!1).then(({documents:I})=>L.view.da(I,Z)));const tt=K&&K.targetChanges.get(L.targetId),qt=K&&K.targetMismatches.get(L.targetId)!=null,pt=L.view.applyChanges(Z,q.isPrimaryClient,tt,qt);return Sl(q,L.targetId,pt.fa),pt.snapshot}(n,P,D,O);const o=await Tl(n.localStore,t,!0),l=new Nm(t,o.hs),h=l.da(o.documents),m=wi.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),w=l.applyChanges(h,n.isPrimaryClient,m);Sl(n,e,w.fa);const v=new Mm(t,e,l);return n.ba.set(t,v),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),w.snapshot}async function qm(n,t,e){const r=X(n),i=r.ba.get(t),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(l=>!Ps(l,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Zo(r.remoteStore,i.targetId),No(r,i.targetId)}).catch(fi)):(No(r,i.targetId),await xo(r.localStore,i.targetId,!0))}async function $m(n,t){const e=X(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Zo(e.remoteStore,r.targetId))}async function zm(n,t,e){const r=Ym(n);try{const i=await function(l,h){const m=X(l),w=kt.now(),v=h.reduce((O,B)=>O.add(B.key),et());let P,D;return m.persistence.runTransaction("Locally write mutations","readwrite",O=>{let B=je(),q=et();return m.os.getEntries(O,v).next(L=>{B=L,B.forEach((J,K)=>{K.isValidDocument()||(q=q.add(J))})}).next(()=>m.localDocuments.getOverlayedDocuments(O,B)).next(L=>{P=L;const J=[];for(const K of h){const Z=cp(K,P.get(K.key).overlayedDocument);Z!=null&&J.push(new Un(K.key,Z,mu(Z.value.mapValue),Ce.exists(!0)))}return m.mutationQueue.addMutationBatch(O,w,J,h)}).next(L=>{D=L;const J=L.applyToLocalDocumentSet(P,q);return m.documentOverlayCache.saveOverlays(O,L.batchId,J)})}).then(()=>({batchId:D.batchId,changes:Ru(P)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(l,h,m){let w=l.xa[l.currentUser.toKey()];w||(w=new mt(lt)),w=w.insert(h,m),l.xa[l.currentUser.toKey()]=w}(r,i.batchId,e),await _i(r,i.changes),await Ns(r.remoteStore)}catch(i){const o=ia(i,"Failed to persist write");e.reject(o)}}async function oc(n,t){const e=X(n);try{const r=await nm(e.localStore,t);t.targetChanges.forEach((i,o)=>{const l=e.Fa.get(o);l&&(dt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?l.wa=!0:i.modifiedDocuments.size>0?dt(l.wa):i.removedDocuments.size>0&&(dt(l.wa),l.wa=!1))}),await _i(e,r,t)}catch(r){await fi(r)}}function Pl(n,t,e){const r=X(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,l)=>{const h=l.view.j_(t);h.snapshot&&i.push(h.snapshot)}),function(l,h){const m=X(l);m.onlineState=h;let w=!1;m.queries.forEach((v,P)=>{for(const D of P.U_)D.j_(h)&&(w=!0)}),w&&sa(m)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Hm(n,t,e){const r=X(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),o=i&&i.key;if(o){let l=new mt($.comparator);l=l.insert(o,Gt.newNoDocument(o,W.min()));const h=et().add(o),m=new Ds(W.min(),new Map,new mt(lt),l,h);await oc(r,m),r.va=r.va.remove(o),r.Fa.delete(t),oa(r)}else await xo(r.localStore,t,!1).then(()=>No(r,t,e)).catch(fi)}async function Wm(n,t){const e=X(n),r=t.batch.batchId;try{const i=await em(e.localStore,t);lc(e,r,null),ac(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await _i(e,i)}catch(i){await fi(i)}}async function Km(n,t,e){const r=X(n);try{const i=await function(l,h){const m=X(l);return m.persistence.runTransaction("Reject batch","readwrite-primary",w=>{let v;return m.mutationQueue.lookupMutationBatch(w,h).next(P=>(dt(P!==null),v=P.keys(),m.mutationQueue.removeMutationBatch(w,P))).next(()=>m.mutationQueue.performConsistencyCheck(w)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(w,v,h)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(w,v)).next(()=>m.localDocuments.getDocuments(w,v))})}(r.localStore,t);lc(r,t,e),ac(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await _i(r,i)}catch(i){await fi(i)}}function ac(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function lc(n,t,e){const r=X(n);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function No(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||uc(n,r)})}function uc(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Zo(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),oa(n))}function Sl(n,t,e){for(const r of e)r instanceof rc?(n.Ma.addReference(r.key,t),Gm(n,r)):r instanceof ic?(U("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||uc(n,r.key)):H()}function Gm(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(U("SyncEngine","New document in limbo: "+e),n.Ca.add(r),oa(n))}function oa(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new $(ft.fromString(t)),r=n.Na.next();n.Fa.set(r,new Lm(e)),n.va=n.va.insert(e,r),Yu(n.remoteStore,new tn(Ie(Tu(e.path)),r,"TargetPurposeLimboResolution",Uo.oe))}}async function _i(n,t,e){const r=X(n),i=[],o=[],l=[];r.ba.isEmpty()||(r.ba.forEach((h,m)=>{l.push(r.Ba(m,t,e).then(w=>{if((w||e)&&r.isPrimaryClient){const v=w&&!w.fromCache;r.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(w){i.push(w);const v=Jo.Ki(m.targetId,w);o.push(v)}}))}),await Promise.all(l),r.Sa.h_(i),await async function(m,w){const v=X(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",P=>N.forEach(w,D=>N.forEach(D.qi,O=>v.persistence.referenceDelegate.addReference(P,D.targetId,O)).next(()=>N.forEach(D.Qi,O=>v.persistence.referenceDelegate.removeReference(P,D.targetId,O)))))}catch(P){if(!pi(P))throw P;U("LocalStore","Failed to update sequence numbers: "+P)}for(const P of w){const D=P.targetId;if(!P.fromCache){const O=v.ns.get(D),B=O.snapshotVersion,q=O.withLastLimboFreeSnapshotVersion(B);v.ns=v.ns.insert(D,q)}}}(r.localStore,o))}async function Qm(n,t){const e=X(n);if(!e.currentUser.isEqual(t)){U("SyncEngine","User change. New user:",t.toKey());const r=await Ku(e.localStore,t);e.currentUser=t,function(o,l){o.Oa.forEach(h=>{h.forEach(m=>{m.reject(new j(x.CANCELLED,l))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await _i(e,r.us)}}function Xm(n,t){const e=X(n),r=e.Fa.get(t);if(r&&r.wa)return et().add(r.key);{let i=et();const o=e.Da.get(t);if(!o)return i;for(const l of o){const h=e.ba.get(l);i=i.unionWith(h.view.Ea)}return i}}function cc(n){const t=X(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=oc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Hm.bind(null,t),t.Sa.h_=Dm.bind(null,t.eventManager),t.Sa.ka=xm.bind(null,t.eventManager),t}function Ym(n){const t=X(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Wm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Km.bind(null,t),t}class kl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=xs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return tm(this.persistence,new Jp,t.initialUser,this.serializer)}createPersistence(t){return new Qp(Yo.Hr,this.serializer)}createSharedClientState(t){return new am}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Jm{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qm.bind(null,this.syncEngine),await Rm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Sm}()}createDatastore(t){const e=xs(t.databaseInfo.databaseId),r=function(o){return new hm(o)}(t.databaseInfo);return function(o,l,h,m){return new pm(o,l,h,m)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,l,h){return new gm(r,i,o,l,h)}(this.localStore,this.datastore,t.asyncQueue,e=>Pl(this.syncEngine,e,0),function(){return Al.D()?new Al:new lm}())}createSyncEngine(t,e){return function(i,o,l,h,m,w,v){const P=new Fm(i,o,l,h,m,w);return v&&(P.La=!0),P}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=X(r);U("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await yi(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Ue("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Kt.UNAUTHENTICATED,this.clientId=du.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ia(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function fo(n,t){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ku(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Vl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await ng(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Il(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Il(t.remoteStore,i)),n._onlineComponents=t}function eg(n){return n.name==="FirebaseError"?n.code===x.FAILED_PRECONDITION||n.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ng(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await fo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!eg(e))throw e;pr("Error using user provided cache. Falling back to memory cache: "+e),await fo(n,new kl)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await fo(n,new kl);return n._offlineComponents}async function hc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Vl(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Vl(n,new Jm))),n._onlineComponents}function rg(n){return hc(n).then(t=>t.syncEngine)}async function ig(n){const t=await hc(n),e=t.eventManager;return e.onListen=Bm.bind(null,t.syncEngine),e.onUnlisten=qm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Um.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=$m.bind(null,t.syncEngine),e}function sg(n,t,e={}){const r=new sn;return n.asyncQueue.enqueueAndForget(async()=>function(o,l,h,m,w){const v=new Zm({next:D=>{l.enqueueAndForget(()=>Vm(o,P)),D.fromCache&&m.source==="server"?w.reject(new j(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):w.resolve(D)},error:D=>w.reject(D)}),P=new Om(h,v,{includeMetadataChanges:!0,ra:!0});return km(o,P)}(await ig(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function dc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(n,t,e){if(!e)throw new j(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function og(n,t,e,r){if(t===!0&&r===!0)throw new j(x.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function xl(n){if(!$.isDocumentKey(n))throw new j(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ol(n){if($.isDocumentKey(n))throw new j(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":H()}function vr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new j(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ms(n);throw new j(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new j(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new j(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}og("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ls{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new j(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nl(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vf;switch(r.type){case"firstParty":return new Af(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Dl.get(e);r&&(U("ComponentProvider","Removing Datastore"),Dl.delete(e),r.terminate())}(this),Promise.resolve()}}function ag(n,t,e,r={}){var i;const o=(n=vr(n,Ls))._getSettings(),l=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let h,m;if(typeof r.mockUserToken=="string")h=r.mockUserToken,m=Kt.MOCK_USER;else{h=Kl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new j(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Kt(w)}n._authCredentials=new Ef(new hu(h,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Cr(this.firestore,t,this._query)}}class ie{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new on(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ie(this.firestore,t,this._key)}}class on extends Cr{constructor(t,e,r){super(t,e,Tu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ie(this.firestore,null,new $(t))}withConverter(t){return new on(this.firestore,t,this._path)}}function zw(n,t,...e){if(n=ge(n),fc("collection","path",t),n instanceof Ls){const r=ft.fromString(t,...e);return Ol(r),new on(n,null,r)}{if(!(n instanceof ie||n instanceof on))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return Ol(r),new on(n.firestore,null,r)}}function Hw(n,t,...e){if(n=ge(n),arguments.length===1&&(t=du.newId()),fc("doc","path",t),n instanceof Ls){const r=ft.fromString(t,...e);return xl(r),new ie(n,null,new $(r))}{if(!(n instanceof ie||n instanceof on))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return xl(r),new ie(n.firestore,n instanceof on?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Qu(this,"async_queue_retry"),this.hu=()=>{const e=ho();e&&U("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=ho();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=ho();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new sn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!pi(t))throw t;U("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(l){let h=l.message||"";return l.stack&&(h=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),h}(r);throw Ue("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=ra.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&H()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Fs extends Ls{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new lg}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mc(this),this._firestoreClient.terminate()}}function ug(n,t){const e=typeof n=="object"?n:eu(),r=typeof n=="string"?n:"(default)",i=Jl(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Hl("firestore");o&&ag(i,...o)}return i}function pc(n){return n._firestoreClient||mc(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function mc(n){var t,e,r;const i=n._freezeSettings(),o=function(h,m,w,v){return new Lf(h,m,w,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,dc(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new tg(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Er(Qt.fromBase64String(t))}catch(e){throw new j(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Er(Qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new j(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new j(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new j(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return lt(this._lat,t._lat)||lt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=/^__.*__$/;class hg{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Un(t,this.data,this.fieldMask,e,this.fieldTransforms):new gi(t,this.data,e,this.fieldTransforms)}}function wc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class ua{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new ua(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Cs(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(wc(this.fu)&&cg.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class dg{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||xs(t)}Fu(t,e,r,i=!1){return new ua({fu:t,methodName:e,vu:r,path:Ut.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yc(n){const t=n._freezeSettings(),e=xs(n._databaseId);return new dg(n._databaseId,!!t.ignoreUndefinedProperties,e)}function fg(n,t,e,r,i,o={}){const l=n.Fu(o.merge||o.mergeFields?2:0,t,e,i);Ec("Data must be an object, but it was:",l,r);const h=_c(r,l);let m,w;if(o.merge)m=new me(l.fieldMask),w=l.fieldTransforms;else if(o.mergeFields){const v=[];for(const P of o.mergeFields){const D=mg(t,P,e);if(!l.contains(D))throw new j(x.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);wg(v,D)||v.push(D)}m=new me(v),w=l.fieldTransforms.filter(P=>m.covers(P.field))}else m=null,w=l.fieldTransforms;return new hg(new ue(h),m,w)}function pg(n,t,e,r=!1){return ca(e,n.Fu(r?4:3,t))}function ca(n,t){if(vc(n=ge(n)))return Ec("Unsupported field value:",t,n),_c(n,t);if(n instanceof gc)return function(r,i){if(!wc(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const h of r){let m=ca(h,i.bu(l));m==null&&(m={nullValue:"NULL_VALUE"}),o.push(m),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ip(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=kt.fromDate(r);return{timestampValue:As(i.serializer,o)}}if(r instanceof kt){const o=new kt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:As(i.serializer,o)}}if(r instanceof la)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Er)return{bytesValue:Uu(i.serializer,r._byteString)};if(r instanceof ie){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Du(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Qo(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Ms(r)}`)}(n,t)}function _c(n,t){const e={};return fu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):br(n,(r,i)=>{const o=ca(i,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function vc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof kt||n instanceof la||n instanceof Er||n instanceof ie||n instanceof gc)}function Ec(n,t,e){if(!vc(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Ms(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function mg(n,t,e){if((t=ge(t))instanceof aa)return t._internalPath;if(typeof t=="string")return Tc(n,t);throw Cs("Field path arguments must be of type string or ",n,!1,void 0,e)}const gg=new RegExp("[~\\*/\\[\\]]");function Tc(n,t,e){if(t.search(gg)>=0)throw Cs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new aa(...t.split("."))._internalPath}catch{throw Cs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Cs(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let m="";return(o||l)&&(m+=" (found",o&&(m+=` in field ${r}`),l&&(m+=` in document ${i}`),m+=")"),new j(x.INVALID_ARGUMENT,h+n+m)}function wg(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new yg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ha("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class yg extends bc{data(){return super.data()}}function ha(n,t){return typeof t=="string"?Tc(n,t):t instanceof aa?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class da{}class vg extends da{}function Ww(n,t,...e){let r=[];t instanceof da&&r.push(t),r=r.concat(e),function(o){const l=o.filter(m=>m instanceof fa).length,h=o.filter(m=>m instanceof Bs).length;if(l>1||l>0&&h>0)throw new j(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Bs extends vg{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Bs(t,e,r)}_apply(t){const e=this._parse(t);return Ac(t._query,e),new Cr(t.firestore,t.converter,Ro(t._query,e))}_parse(t){const e=yc(t.firestore);return function(o,l,h,m,w,v,P){let D;if(w.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new j(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Ll(P,v);const O=[];for(const B of P)O.push(Ml(m,o,B));D={arrayValue:{values:O}}}else D=Ml(m,o,P)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Ll(P,v),D=pg(h,l,P,v==="in"||v==="not-in");return bt.create(w,v,D)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Kw(n,t,e){const r=t,i=ha("where",n);return Bs._create(i,r,e)}class fa extends da{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new fa(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:we.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let l=i;const h=o.getFlattenedFilters();for(const m of h)Ac(l,m),l=Ro(l,m)}(t._query,e),new Cr(t.firestore,t.converter,Ro(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ml(n,t,e){if(typeof(e=ge(e))=="string"){if(e==="")throw new j(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bu(t)&&e.indexOf("/")!==-1)throw new j(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ft.fromString(e));if(!$.isDocumentKey(r))throw new j(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sl(n,new $(r))}if(e instanceof ie)return sl(n,e._key);throw new j(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ms(e)}.`)}function Ll(n,t){if(!Array.isArray(n)||n.length===0)throw new j(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ac(n,t){const e=function(i,o){for(const l of i)for(const h of l.getFlattenedFilters())if(o.indexOf(h.op)>=0)return h.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new j(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new j(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Eg{convertValue(t,e="none"){switch(Ln(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Mn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw H()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return br(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new la(Tt(t.latitude),Tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=qo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(li(t));default:return null}}convertTimestamp(t){const e=ln(t);return new kt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ft.fromString(t);dt(Wu(r));const i=new ui(r.get(1),r.get(3)),o=new $(r.popFirst(5));return i.isEqual(e)||Ue(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class bg extends bc{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ha("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class gs extends bg{data(t={}){return super.data(t)}}class Ag{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new us(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new gs(this._firestore,this._userDataWriter,r.key,r,new us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new j(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(h=>{const m=new gs(i._firestore,i._userDataWriter,h.doc.key,h.doc,new us(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:m,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const m=new gs(i._firestore,i._userDataWriter,h.doc.key,h.doc,new us(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let w=-1,v=-1;return h.type!==0&&(w=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),v=l.indexOf(h.doc.key)),{type:Ig(h.type),doc:m,oldIndex:w,newIndex:v}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ig(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class Cg extends Eg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Er(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ie(this.firestore,null,e)}}function Gw(n){n=vr(n,Cr);const t=vr(n.firestore,Fs),e=pc(t),r=new Cg(t);return _g(n._query),sg(e,n._query).then(i=>new Ag(t,r,n,i))}function Qw(n,t,e){n=vr(n,ie);const r=vr(n.firestore,Fs),i=Tg(n.converter,t);return Ic(r,[fg(yc(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Ce.none())])}function Xw(n){return Ic(vr(n.firestore,Fs),[new Wo(n._key,Ce.none())])}function Ic(n,t){return function(r,i){const o=new sn;return r.asyncQueue.enqueueAndForget(async()=>zm(await rg(r),i,o)),o.promise}(pc(n),t)}(function(t,e=!0){(function(i){Tr=i})(Zl),si(new fr("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),h=new Fs(new Tf(r.getProvider("auth-internal")),new Cf(r.getProvider("app-check-internal")),function(w,v){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new j(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ui(w.options.projectId,v)}(l,i),l);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),rn(el,"4.6.3",t),rn(el,"4.6.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="firebasestorage.googleapis.com",Rc="storageBucket",Rg=2*60*1e3,Pg=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Bn{constructor(t,e,r=0){super(po(t),`Firebase Storage: ${e} (${po(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return po(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var wt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(wt||(wt={}));function po(n){return"storage/"+n}function pa(){const n="An unknown error occurred, please check the error payload for server response.";return new yt(wt.UNKNOWN,n)}function Sg(n){return new yt(wt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function kg(n){return new yt(wt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Vg(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new yt(wt.UNAUTHENTICATED,n)}function Dg(){return new yt(wt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function xg(n){return new yt(wt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Og(){return new yt(wt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ng(){return new yt(wt.CANCELED,"User canceled the upload/download.")}function Mg(n){return new yt(wt.INVALID_URL,"Invalid URL '"+n+"'.")}function Lg(n){return new yt(wt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Fg(){return new yt(wt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Rc+"' property when initializing the app?")}function Bg(){return new yt(wt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ug(){return new yt(wt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jg(n){return new yt(wt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Mo(n){return new yt(wt.INVALID_ARGUMENT,n)}function Pc(){return new yt(wt.APP_DELETED,"The Firebase app was deleted.")}function qg(n){return new yt(wt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ii(n,t){return new yt(wt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Xr(n){throw new yt(wt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=re.makeFromUrl(t,e)}catch{return new re(t,"")}if(r.path==="")return r;throw Lg(t)}static makeFromUrl(t,e){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(tt){tt.path.charAt(tt.path.length-1)==="/"&&(tt.path_=tt.path_.slice(0,-1))}const l="(/(.*))?$",h=new RegExp("^gs://"+i+l,"i"),m={bucket:1,path:3};function w(tt){tt.path_=decodeURIComponent(tt.path)}const v="v[A-Za-z0-9_]+",P=e.replace(/[.]/g,"\\."),D="(/([^?#]*).*)?$",O=new RegExp(`^https?://${P}/${v}/b/${i}/o${D}`,"i"),B={bucket:1,path:3},q=e===Cc?"(?:storage.googleapis.com|storage.cloud.google.com)":e,L="([^?#]*)",J=new RegExp(`^https?://${q}/${i}/${L}`,"i"),Z=[{regex:h,indices:m,postModify:o},{regex:O,indices:B,postModify:w},{regex:J,indices:{bucket:1,path:2},postModify:w}];for(let tt=0;tt<Z.length;tt++){const qt=Z[tt],pt=qt.regex.exec(t);if(pt){const I=pt[qt.indices.bucket];let _=pt[qt.indices.path];_||(_=""),r=new re(I,_),qt.postModify(r);break}}if(r==null)throw Mg(t);return r}}class $g{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(n,t,e){let r=1,i=null,o=null,l=!1,h=0;function m(){return h===2}let w=!1;function v(...L){w||(w=!0,t.apply(null,L))}function P(L){i=setTimeout(()=>{i=null,n(O,m())},L)}function D(){o&&clearTimeout(o)}function O(L,...J){if(w){D();return}if(L){D(),v.call(null,L,...J);return}if(m()||l){D(),v.call(null,L,...J);return}r<64&&(r*=2);let Z;h===1?(h=2,Z=0):Z=(r+Math.random())*1e3,P(Z)}let B=!1;function q(L){B||(B=!0,D(),!w&&(i!==null?(L||(h=2),clearTimeout(i),P(0)):L||(h=1)))}return P(0),o=setTimeout(()=>{l=!0,q(!0)},e),q}function Hg(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(n){return n!==void 0}function Kg(n){return typeof n=="object"&&!Array.isArray(n)}function ma(n){return typeof n=="string"||n instanceof String}function Fl(n){return ga()&&n instanceof Blob}function ga(){return typeof Blob<"u"}function Bl(n,t,e,r){if(r<t)throw Mo(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Mo(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function Sc(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const i=t(r)+"="+t(n[r]);e=e+i+"&"}return e=e.slice(0,-1),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(xn||(xn={}));/**
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
 */function Gg(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(t,e,r,i,o,l,h,m,w,v,P,D=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=h,this.errorCallback_=m,this.timeout_=w,this.progressCallback_=v,this.connectionFactory_=P,this.retry=D,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,B)=>{this.resolve_=O,this.reject_=B,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new cs(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=h=>{const m=h.loaded,w=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,w)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const h=o.getErrorCode()===xn.NO_ERROR,m=o.getStatus();if(!h||Gg(m,this.additionalRetryCodes_)&&this.retry){const v=o.getErrorCode()===xn.ABORT;r(!1,new cs(!1,null,v));return}const w=this.successCodes_.indexOf(m)!==-1;r(!0,new cs(w,o))})},e=(r,i)=>{const o=this.resolve_,l=this.reject_,h=i.connection;if(i.wasSuccessCode)try{const m=this.callback_(h,h.getResponse());Wg(m)?o(m):o()}catch(m){l(m)}else if(h!==null){const m=pa();m.serverResponse=h.getErrorText(),this.errorCallback_?l(this.errorCallback_(h,m)):l(m)}else if(i.canceled){const m=this.appDelete_?Pc():Ng();l(m)}else{const m=Og();l(m)}};this.canceled_?e(!1,new cs(!1,null,!0)):this.backoffId_=zg(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Hg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cs{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function Xg(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function Yg(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Jg(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Zg(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function tw(n,t,e,r,i,o,l=!0){const h=Sc(n.urlParams),m=n.url+h,w=Object.assign({},n.headers);return Jg(w,t),Xg(w,e),Yg(w,o),Zg(w,r),new Qg(m,n.method,w,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nw(...n){const t=ew();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(ga())return new Blob(n);throw new yt(wt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rw(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function iw(n){if(typeof atob>"u")throw jg("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mo{constructor(t,e){this.data=t,this.contentType=e||null}}function sw(n,t){switch(n){case Ae.RAW:return new mo(kc(t));case Ae.BASE64:case Ae.BASE64URL:return new mo(Vc(n,t));case Ae.DATA_URL:return new mo(aw(t),lw(t))}throw pa()}function kc(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,l=n.charCodeAt(++e);r=65536|(o&1023)<<10|l&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function ow(n){let t;try{t=decodeURIComponent(n)}catch{throw ii(Ae.DATA_URL,"Malformed data URL.")}return kc(t)}function Vc(n,t){switch(n){case Ae.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw ii(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ae.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw ii(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=iw(t)}catch(i){throw i.message.includes("polyfill")?i:ii(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}class Dc{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw ii(Ae.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=uw(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function aw(n){const t=new Dc(n);return t.base64?Vc(Ae.BASE64,t.rest):ow(t.rest)}function lw(n){return new Dc(n).contentType}function uw(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,e){let r=0,i="";Fl(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(Fl(this.data_)){const r=this.data_,i=rw(r,t,e);return i===null?null:new Ze(i)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new Ze(r,!0)}}static getBlob(...t){if(ga()){const e=t.map(r=>r instanceof Ze?r.data_:r);return new Ze(nw.apply(null,e))}else{const e=t.map(l=>ma(l)?sw(Ae.RAW,l).data:l.data_);let r=0;e.forEach(l=>{r+=l.byteLength});const i=new Uint8Array(r);let o=0;return e.forEach(l=>{for(let h=0;h<l.length;h++)i[o++]=l[h]}),new Ze(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n){let t;try{t=JSON.parse(n)}catch{return null}return Kg(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function hw(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function Oc(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(n,t){return t}class Jt{constructor(t,e,r,i){this.server=t,this.local=e||t,this.writable=!!r,this.xform=i||dw}}let hs=null;function fw(n){return!ma(n)||n.length<2?n:Oc(n)}function Nc(){if(hs)return hs;const n=[];n.push(new Jt("bucket")),n.push(new Jt("generation")),n.push(new Jt("metageneration")),n.push(new Jt("name","fullPath",!0));function t(o,l){return fw(l)}const e=new Jt("name");e.xform=t,n.push(e);function r(o,l){return l!==void 0?Number(l):l}const i=new Jt("size");return i.xform=r,n.push(i),n.push(new Jt("timeCreated")),n.push(new Jt("updated")),n.push(new Jt("md5Hash",null,!0)),n.push(new Jt("cacheControl",null,!0)),n.push(new Jt("contentDisposition",null,!0)),n.push(new Jt("contentEncoding",null,!0)),n.push(new Jt("contentLanguage",null,!0)),n.push(new Jt("contentType",null,!0)),n.push(new Jt("metadata","customMetadata",!0)),hs=n,hs}function pw(n,t){function e(){const r=n.bucket,i=n.fullPath,o=new re(r,i);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function mw(n,t,e){const r={};r.type="file";const i=e.length;for(let o=0;o<i;o++){const l=e[o];r[l.local]=l.xform(r,t[l.server])}return pw(r,n),r}function Mc(n,t,e){const r=xc(t);return r===null?null:mw(n,r,e)}function gw(n,t,e,r){const i=xc(t);if(i===null||!ma(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(w=>{const v=n.bucket,P=n.fullPath,D="/b/"+l(v)+"/o/"+l(P),O=Us(D,e,r),B=Sc({alt:"media",token:w});return O+B})[0]}function ww(n,t){const e={},r=t.length;for(let i=0;i<r;i++){const o=t[i];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class wa{constructor(t,e,r,i){this.url=t,this.method=e,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n){if(!n)throw pa()}function yw(n,t){function e(r,i){const o=Mc(n,i,t);return Lc(o!==null),o}return e}function _w(n,t){function e(r,i){const o=Mc(n,i,t);return Lc(o!==null),gw(o,i,n.host,n._protocol)}return e}function Fc(n){function t(e,r){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=Dg():i=Vg():e.getStatus()===402?i=kg(n.bucket):e.getStatus()===403?i=xg(n.path):i=r,i.status=e.getStatus(),i.serverResponse=r.serverResponse,i}return t}function Bc(n){const t=Fc(n);function e(r,i){let o=t(r,i);return r.getStatus()===404&&(o=Sg(n.path)),o.serverResponse=i.serverResponse,o}return e}function vw(n,t,e){const r=t.fullServerUrl(),i=Us(r,n.host,n._protocol),o="GET",l=n.maxOperationRetryTime,h=new wa(i,o,_w(n,e),l);return h.errorHandler=Bc(t),h}function Ew(n,t){const e=t.fullServerUrl(),r=Us(e,n.host,n._protocol),i="DELETE",o=n.maxOperationRetryTime;function l(m,w){}const h=new wa(r,i,l,o);return h.successCodes=[200,204],h.errorHandler=Bc(t),h}function Tw(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function bw(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=Tw(null,t)),r}function Aw(n,t,e,r,i){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function h(){let Z="";for(let tt=0;tt<2;tt++)Z=Z+Math.random().toString().slice(2);return Z}const m=h();l["Content-Type"]="multipart/related; boundary="+m;const w=bw(t,r,i),v=ww(w,e),P="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+m+`\r
Content-Type: `+w.contentType+`\r
\r
`,D=`\r
--`+m+"--",O=Ze.getBlob(P,r,D);if(O===null)throw Bg();const B={name:w.fullPath},q=Us(o,n.host,n._protocol),L="POST",J=n.maxUploadRetryTime,K=new wa(q,L,yw(n,e),J);return K.urlParams=B,K.headers=l,K.body=O.uploadData(),K.errorHandler=Fc(t),K}class Iw{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xn.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xn.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xn.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,i){if(this.sent_)throw Xr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Cw extends Iw{initXhr(){this.xhr_.responseType="text"}}function ya(){return new Cw}/**
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
 */class Fn{constructor(t,e){this._service=t,e instanceof re?this._location=e:this._location=re.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Fn(t,e)}get root(){const t=new re(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Oc(this._location.path)}get storage(){return this._service}get parent(){const t=cw(this._location.path);if(t===null)return null;const e=new re(this._location.bucket,t);return new Fn(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw qg(t)}}function Rw(n,t,e){n._throwIfRoot("uploadBytes");const r=Aw(n.storage,n._location,Nc(),new Ze(t,!0),e);return n.storage.makeRequestWithTokens(r,ya).then(i=>({metadata:i,ref:n}))}function Pw(n){n._throwIfRoot("getDownloadURL");const t=vw(n.storage,n._location,Nc());return n.storage.makeRequestWithTokens(t,ya).then(e=>{if(e===null)throw Ug();return e})}function Sw(n){n._throwIfRoot("deleteObject");const t=Ew(n.storage,n._location);return n.storage.makeRequestWithTokens(t,ya)}function kw(n,t){const e=hw(n._location.path,t),r=new re(n._location.bucket,e);return new Fn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(n){return/^[A-Za-z]+:\/\//.test(n)}function Dw(n,t){return new Fn(n,t)}function Uc(n,t){if(n instanceof _a){const e=n;if(e._bucket==null)throw Fg();const r=new Fn(e,e._bucket);return t!=null?Uc(r,t):r}else return t!==void 0?kw(n,t):n}function xw(n,t){if(t&&Vw(t)){if(n instanceof _a)return Dw(n,t);throw Mo("To use ref(service, url), the first argument must be a Storage instance.")}else return Uc(n,t)}function Ul(n,t){const e=t==null?void 0:t[Rc];return e==null?null:re.makeFromBucketSpec(e,n)}function Ow(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Kl(i,n.app.options.projectId))}class _a{constructor(t,e,r,i,o){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Cc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Rg,this._maxUploadRetryTime=Pg,this._requests=new Set,i!=null?this._bucket=re.makeFromBucketSpec(i,this._host):this._bucket=Ul(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=re.makeFromBucketSpec(this._url,t):this._bucket=Ul(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Bl("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Bl("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Fn(this,t)}_makeRequest(t,e,r,i,o=!0){if(this._deleted)return new $g(Pc());{const l=tw(t,this._appId,r,i,e,this._firebaseVersion,o);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,e){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,i).getPromise()}}const jl="@firebase/storage",ql="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="storage";function Yw(n,t,e){return n=ge(n),Rw(n,t,e)}function Jw(n){return n=ge(n),Pw(n)}function Zw(n){return n=ge(n),Sw(n)}function ty(n,t){return n=ge(n),xw(n,t)}function Nw(n=eu(),t){n=ge(n);const r=Jl(n,jc).getImmediate({identifier:t}),i=Hl("storage");return i&&Mw(r,...i),r}function Mw(n,t,e,r={}){Ow(n,t,e,r)}function Lw(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new _a(e,r,i,t,Zl)}function Fw(){si(new fr(jc,Lw,"PUBLIC").setMultipleInstances(!0)),rn(jl,ql,""),rn(jl,ql,"esm2017")}Fw();const Sn=Hh(),qc={apiKey:Sn.public.API_KEY,authDomain:Sn.public.AUTH_DOMAIN,projectId:Sn.public.PROJECT_ID,storageBucket:Sn.public.STORAGE_BUCKET,messagingSenderId:Sn.public.SENDER_ID,appId:Sn.public.APP_ID,measurementId:Sn.public.MEASUREMENT_ID};console.log(qc);const $c=tu(qc),ey=ug($c),ny=Nw($c);var zc={exports:{}};/*!
* sweetalert2 v11.12.0
* Released under the MIT License.
*/(function(n,t){(function(e,r){n.exports=r()})(Je,function(){function e(p,a){(a==null||a>p.length)&&(a=p.length);for(var u=0,d=Array(a);u<a;u++)d[u]=p[u];return d}function r(p){if(Array.isArray(p))return p}function i(p){if(Array.isArray(p))return e(p)}function o(p,a,u){if(typeof p=="function"?p===a:p.has(a))return arguments.length<3?a:u;throw new TypeError("Private element is not present on this object")}function l(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function h(p,a,u){return a=K(a),T(p,tt()?Reflect.construct(a,u||[],K(p).constructor):a.apply(p,u))}function m(p,a){if(a.has(p))throw new TypeError("Cannot initialize the same private elements twice on an object")}function w(p,a){if(!(p instanceof a))throw new TypeError("Cannot call a class as a function")}function v(p,a){return p.get(o(p,a))}function P(p,a,u){m(p,a),a.set(p,u)}function D(p,a,u){return p.set(o(p,a),u),u}function O(p,a,u){if(tt())return Reflect.construct.apply(null,arguments);var d=[null];d.push.apply(d,a);var y=new(p.bind.apply(p,d));return y}function B(p,a){for(var u=0;u<a.length;u++){var d=a[u];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(p,cn(d.key),d)}}function q(p,a,u){return a&&B(p.prototype,a),Object.defineProperty(p,"prototype",{writable:!1}),p}function L(p,a){var u=typeof Symbol<"u"&&p[Symbol.iterator]||p["@@iterator"];if(!u){if(Array.isArray(p)||(u=Se(p))||a){u&&(p=u);var d=0,y=function(){};return{s:y,n:function(){return d>=p.length?{done:!0}:{done:!1,value:p[d++]}},e:function(Q){throw Q},f:y}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var V,F=!0,Y=!1;return{s:function(){u=u.call(p)},n:function(){var Q=u.next();return F=Q.done,Q},e:function(Q){Y=!0,V=Q},f:function(){try{F||u.return==null||u.return()}finally{if(Y)throw V}}}}function J(){return J=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(p,a,u){var d=R(p,a);if(d){var y=Object.getOwnPropertyDescriptor(d,a);return y.get?y.get.call(arguments.length<3?p:u):y.value}},J.apply(null,arguments)}function K(p){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},K(p)}function Z(p,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(a&&a.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),Object.defineProperty(p,"prototype",{writable:!1}),a&&b(p,a)}function tt(){try{var p=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tt=function(){return!!p})()}function qt(p){if(typeof Symbol<"u"&&p[Symbol.iterator]!=null||p["@@iterator"]!=null)return Array.from(p)}function pt(p,a){var u=p==null?null:typeof Symbol<"u"&&p[Symbol.iterator]||p["@@iterator"];if(u!=null){var d,y,V,F,Y=[],Q=!0,gt=!1;try{if(V=(u=u.call(p)).next,a!==0)for(;!(Q=(d=V.call(u)).done)&&(Y.push(d.value),Y.length!==a);Q=!0);}catch(Gr){gt=!0,y=Gr}finally{try{if(!Q&&u.return!=null&&(F=u.return(),Object(F)!==F))return}finally{if(gt)throw y}}return Y}}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(p,a){if(a&&(typeof a=="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return l(p)}function b(p,a){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,d){return u.__proto__=d,u},b(p,a)}function A(p,a){return r(p)||pt(p,a)||Se(p,a)||I()}function R(p,a){for(;!{}.hasOwnProperty.call(p,a)&&(p=K(p))!==null;);return p}function E(p){return i(p)||qt(p)||Se(p)||_()}function ce(p,a){if(typeof p!="object"||!p)return p;var u=p[Symbol.toPrimitive];if(u!==void 0){var d=u.call(p,a);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(p)}function cn(p){var a=ce(p,"string");return typeof a=="symbol"?a:a+""}function At(p){"@babel/helpers - typeof";return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},At(p)}function Se(p,a){if(p){if(typeof p=="string")return e(p,a);var u={}.toString.call(p).slice(8,-1);return u==="Object"&&p.constructor&&(u=p.constructor.name),u==="Map"||u==="Set"?Array.from(p):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?e(p,a):void 0}}var hn=100,G={},vi=function(){G.previousActiveElement instanceof HTMLElement?(G.previousActiveElement.focus(),G.previousActiveElement=null):document.body&&document.body.focus()},js=function(a){return new Promise(function(u){if(!a)return u();var d=window.scrollX,y=window.scrollY;G.restoreFocusTimeout=setTimeout(function(){vi(),u()},hn),window.scrollTo(d,y)})},he="swal2-",Vt=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],k=Vt.reduce(function(p,a){return p[a]=he+a,p},{}),dn=["success","warning","info","question","error"],qn=dn.reduce(function(p,a){return p[a]=he+a,p},{}),fn="SweetAlert2:",Rr=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},$t=function(a){console.warn("".concat(fn," ").concat(At(a)==="object"?a.join(" "):a))},se=function(a){console.error("".concat(fn," ").concat(a))},pn=[],Pr=function(a){pn.includes(a)||(pn.push(a),$t(a))},$n=function(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Pr('"'.concat(a,'" is deprecated and will be removed in the next major release.').concat(u?' Use "'.concat(u,'" instead.'):""))},qe=function(a){return typeof a=="function"?a():a},mn=function(a){return a&&typeof a.toPromise=="function"},$e=function(a){return mn(a)?a.toPromise():Promise.resolve(a)},Sr=function(a){return a&&Promise.resolve(a)===a},zt=function(){return document.body.querySelector(".".concat(k.container))},ze=function(a){var u=zt();return u?u.querySelector(a):null},Nt=function(a){return ze(".".concat(a))},st=function(){return Nt(k.popup)},gn=function(){return Nt(k.icon)},kr=function(){return Nt(k["icon-content"])},zn=function(){return Nt(k.title)},Hn=function(){return Nt(k["html-container"])},It=function(){return Nt(k.image)},Ct=function(){return Nt(k["progress-steps"])},ke=function(){return Nt(k["validation-message"])},te=function(){return ze(".".concat(k.actions," .").concat(k.confirm))},Ve=function(){return ze(".".concat(k.actions," .").concat(k.cancel))},De=function(){return ze(".".concat(k.actions," .").concat(k.deny))},wn=function(){return Nt(k["input-label"])},xe=function(){return ze(".".concat(k.loader))},He=function(){return Nt(k.actions)},Wn=function(){return Nt(k.footer)},Kn=function(){return Nt(k["timer-progress-bar"])},Vr=function(){return Nt(k.close)},Dr=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Gn=function(){var a=st();if(!a)return[];var u=a.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),d=Array.from(u).sort(function(F,Y){var Q=parseInt(F.getAttribute("tabindex")||"0"),gt=parseInt(Y.getAttribute("tabindex")||"0");return Q>gt?1:Q<gt?-1:0}),y=a.querySelectorAll(Dr),V=Array.from(y).filter(function(F){return F.getAttribute("tabindex")!=="-1"});return E(new Set(d.concat(V))).filter(function(F){return Rt(F)})},Qn=function(){return Lt(document.body,k.shown)&&!Lt(document.body,k["toast-shown"])&&!Lt(document.body,k["no-backdrop"])},ye=function(){var a=st();return a?Lt(a,k.toast):!1},xr=function(){var a=st();return a?a.hasAttribute("data-loading"):!1},Mt=function(a,u){if(a.textContent="",u){var d=new DOMParser,y=d.parseFromString(u,"text/html"),V=y.querySelector("head");V&&Array.from(V.childNodes).forEach(function(Y){a.appendChild(Y)});var F=y.querySelector("body");F&&Array.from(F.childNodes).forEach(function(Y){Y instanceof HTMLVideoElement||Y instanceof HTMLAudioElement?a.appendChild(Y.cloneNode(!0)):a.appendChild(Y)})}},Lt=function(a,u){if(!u)return!1;for(var d=u.split(/\s+/),y=0;y<d.length;y++)if(!a.classList.contains(d[y]))return!1;return!0},Ei=function(a,u){Array.from(a.classList).forEach(function(d){!Object.values(k).includes(d)&&!Object.values(qn).includes(d)&&!Object.values(u.showClass||{}).includes(d)&&a.classList.remove(d)})},Ft=function(a,u,d){if(Ei(a,u),u.customClass&&u.customClass[d]){if(typeof u.customClass[d]!="string"&&!u.customClass[d].forEach){$t("Invalid type of customClass.".concat(d,'! Expected string or iterable object, got "').concat(At(u.customClass[d]),'"'));return}z(a,u.customClass[d])}},yn=function(a,u){if(!u)return null;switch(u){case"select":case"textarea":case"file":return a.querySelector(".".concat(k.popup," > .").concat(k[u]));case"checkbox":return a.querySelector(".".concat(k.popup," > .").concat(k.checkbox," input"));case"radio":return a.querySelector(".".concat(k.popup," > .").concat(k.radio," input:checked"))||a.querySelector(".".concat(k.popup," > .").concat(k.radio," input:first-child"));case"range":return a.querySelector(".".concat(k.popup," > .").concat(k.range," input"));default:return a.querySelector(".".concat(k.popup," > .").concat(k.input))}},We=function(a){if(a.focus(),a.type!=="file"){var u=a.value;a.value="",a.value=u}},Or=function(a,u,d){!a||!u||(typeof u=="string"&&(u=u.split(/\s+/).filter(Boolean)),u.forEach(function(y){Array.isArray(a)?a.forEach(function(V){d?V.classList.add(y):V.classList.remove(y)}):d?a.classList.add(y):a.classList.remove(y)}))},z=function(a,u){Or(a,u,!0)},ee=function(a,u){Or(a,u,!1)},Zt=function(a,u){for(var d=Array.from(a.children),y=0;y<d.length;y++){var V=d[y];if(V instanceof HTMLElement&&Lt(V,u))return V}},ne=function(a,u,d){d==="".concat(parseInt(d))&&(d=parseInt(d)),d||parseInt(d)===0?a.style.setProperty(u,typeof d=="number"?"".concat(d,"px"):d):a.style.removeProperty(u)},vt=function(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";a&&(a.style.display=u)},Dt=function(a){a&&(a.style.display="none")},_e=function(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";a&&new MutationObserver(function(){_n(a,a.innerHTML,u)}).observe(a,{childList:!0,subtree:!0})},Ti=function(a,u,d,y){var V=a.querySelector(u);V&&V.style.setProperty(d,y)},_n=function(a,u){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";u?vt(a,d):Dt(a)},Rt=function(a){return!!(a&&(a.offsetWidth||a.offsetHeight||a.getClientRects().length))},bi=function(){return!Rt(te())&&!Rt(De())&&!Rt(Ve())},Xn=function(a){return a.scrollHeight>a.clientHeight},vn=function(a){var u=window.getComputedStyle(a),d=parseFloat(u.getPropertyValue("animation-duration")||"0"),y=parseFloat(u.getPropertyValue("transition-duration")||"0");return d>0||y>0},oe=function(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=Kn();d&&Rt(d)&&(u&&(d.style.transition="none",d.style.width="100%"),setTimeout(function(){d.style.transition="width ".concat(a/1e3,"s linear"),d.style.width="0%"},10))},Ai=function(){var a=Kn();if(a){var u=parseInt(window.getComputedStyle(a).width);a.style.removeProperty("transition"),a.style.width="100%";var d=parseInt(window.getComputedStyle(a).width),y=u/d*100;a.style.width="".concat(y,"%")}},Nr=function(){return typeof window>"u"||typeof document>"u"},Mr=`
 <div aria-labelledby="`.concat(k.title,'" aria-describedby="').concat(k["html-container"],'" class="').concat(k.popup,`" tabindex="-1">
   <button type="button" class="`).concat(k.close,`"></button>
   <ul class="`).concat(k["progress-steps"],`"></ul>
   <div class="`).concat(k.icon,`"></div>
   <img class="`).concat(k.image,`" />
   <h2 class="`).concat(k.title,'" id="').concat(k.title,`"></h2>
   <div class="`).concat(k["html-container"],'" id="').concat(k["html-container"],`"></div>
   <input class="`).concat(k.input,'" id="').concat(k.input,`" />
   <input type="file" class="`).concat(k.file,`" />
   <div class="`).concat(k.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(k.select,'" id="').concat(k.select,`"></select>
   <div class="`).concat(k.radio,`"></div>
   <label class="`).concat(k.checkbox,`">
     <input type="checkbox" id="`).concat(k.checkbox,`" />
     <span class="`).concat(k.label,`"></span>
   </label>
   <textarea class="`).concat(k.textarea,'" id="').concat(k.textarea,`"></textarea>
   <div class="`).concat(k["validation-message"],'" id="').concat(k["validation-message"],`"></div>
   <div class="`).concat(k.actions,`">
     <div class="`).concat(k.loader,`"></div>
     <button type="button" class="`).concat(k.confirm,`"></button>
     <button type="button" class="`).concat(k.deny,`"></button>
     <button type="button" class="`).concat(k.cancel,`"></button>
   </div>
   <div class="`).concat(k.footer,`"></div>
   <div class="`).concat(k["timer-progress-bar-container"],`">
     <div class="`).concat(k["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Lr=function(){var a=zt();return a?(a.remove(),ee([document.documentElement,document.body],[k["no-backdrop"],k["toast-shown"],k["has-column"]]),!0):!1},ve=function(){G.currentInstance.resetValidationMessage()},Ii=function(){var a=st(),u=Zt(a,k.input),d=Zt(a,k.file),y=a.querySelector(".".concat(k.range," input")),V=a.querySelector(".".concat(k.range," output")),F=Zt(a,k.select),Y=a.querySelector(".".concat(k.checkbox," input")),Q=Zt(a,k.textarea);u.oninput=ve,d.onchange=ve,F.onchange=ve,Y.onchange=ve,Q.oninput=ve,y.oninput=function(){ve(),V.value=y.value},y.onchange=function(){ve(),V.value=y.value}},qs=function(a){return typeof a=="string"?document.querySelector(a):a},Yn=function(a){var u=st();u.setAttribute("role",a.toast?"alert":"dialog"),u.setAttribute("aria-live",a.toast?"polite":"assertive"),a.toast||u.setAttribute("aria-modal","true")},Ci=function(a){window.getComputedStyle(a).direction==="rtl"&&z(zt(),k.rtl)},Fr=function(a){var u=Lr();if(Nr()){se("SweetAlert2 requires document to initialize");return}var d=document.createElement("div");d.className=k.container,u&&z(d,k["no-transition"]),Mt(d,Mr);var y=qs(a.target);y.appendChild(d),Yn(a),Ci(y),Ii()},Oe=function(a,u){a instanceof HTMLElement?u.appendChild(a):At(a)==="object"?Ne(a,u):a&&Mt(u,a)},Ne=function(a,u){a.jquery?Br(u,a):Mt(u,a.toString())},Br=function(a,u){if(a.textContent="",0 in u)for(var d=0;d in u;d++)a.appendChild(u[d].cloneNode(!0));else a.appendChild(u.cloneNode(!0))},Me=function(){if(Nr())return!1;var p=document.createElement("div");return typeof p.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof p.style.animation<"u"?"animationend":!1}(),Ri=function(a,u){var d=He(),y=xe();!d||!y||(!u.showConfirmButton&&!u.showDenyButton&&!u.showCancelButton?Dt(d):vt(d),Ft(d,u,"actions"),Pi(d,y,u),Mt(y,u.loaderHtml||""),Ft(y,u,"loader"))};function Pi(p,a,u){var d=te(),y=De(),V=Ve();!d||!y||!V||(En(d,"confirm",u),En(y,"deny",u),En(V,"cancel",u),Si(d,y,V,u),u.reverseButtons&&(u.toast?(p.insertBefore(V,d),p.insertBefore(y,d)):(p.insertBefore(V,a),p.insertBefore(y,a),p.insertBefore(d,a))))}function Si(p,a,u,d){if(!d.buttonsStyling){ee([p,a,u],k.styled);return}z([p,a,u],k.styled),d.confirmButtonColor&&(p.style.backgroundColor=d.confirmButtonColor,z(p,k["default-outline"])),d.denyButtonColor&&(a.style.backgroundColor=d.denyButtonColor,z(a,k["default-outline"])),d.cancelButtonColor&&(u.style.backgroundColor=d.cancelButtonColor,z(u,k["default-outline"]))}function En(p,a,u){var d=Rr(a);_n(p,u["show".concat(d,"Button")],"inline-block"),Mt(p,u["".concat(a,"ButtonText")]||""),p.setAttribute("aria-label",u["".concat(a,"ButtonAriaLabel")]||""),p.className=k[a],Ft(p,u,"".concat(a,"Button"))}var Ur=function(a,u){var d=Vr();d&&(Mt(d,u.closeButtonHtml||""),Ft(d,u,"closeButton"),_n(d,u.showCloseButton),d.setAttribute("aria-label",u.closeButtonAriaLabel||""))},ki=function(a,u){var d=zt();d&&(Vi(d,u.backdrop),$s(d,u.position),zs(d,u.grow),Ft(d,u,"container"))};function Vi(p,a){typeof a=="string"?p.style.background=a:a||z([document.documentElement,document.body],k["no-backdrop"])}function $s(p,a){a&&(a in k?z(p,k[a]):($t('The "position" parameter is not valid, defaulting to "center"'),z(p,k.center)))}function zs(p,a){a&&z(p,k["grow-".concat(a)])}var ut={innerParams:new WeakMap,domCache:new WeakMap},Di=["input","file","range","select","radio","checkbox","textarea"],Hs=function(a,u){var d=st();if(d){var y=ut.innerParams.get(a),V=!y||u.input!==y.input;Di.forEach(function(F){var Y=Zt(d,k[F]);Y&&(Jn(F,u.inputAttributes),Y.className=k[F],V&&Dt(Y))}),u.input&&(V&&Le(u),Zn(u))}},Le=function(a){if(a.input){if(!ct[a.input]){se("Unexpected type of input! Expected ".concat(Object.keys(ct).join(" | "),', got "').concat(a.input,'"'));return}var u=Tn(a.input),d=ct[a.input](u,a);vt(u),a.inputAutoFocus&&setTimeout(function(){We(d)})}},de=function(a){for(var u=0;u<a.attributes.length;u++){var d=a.attributes[u].name;["id","type","value","style"].includes(d)||a.removeAttribute(d)}},Jn=function(a,u){var d=yn(st(),a);if(d){de(d);for(var y in u)d.setAttribute(y,u[y])}},Zn=function(a){var u=Tn(a.input);At(a.customClass)==="object"&&z(u,a.customClass.input)},tr=function(a,u){(!a.placeholder||u.inputPlaceholder)&&(a.placeholder=u.inputPlaceholder)},at=function(a,u,d){if(d.inputLabel){var y=document.createElement("label"),V=k["input-label"];y.setAttribute("for",a.id),y.className=V,At(d.customClass)==="object"&&z(y,d.customClass.inputLabel),y.innerText=d.inputLabel,u.insertAdjacentElement("beforebegin",y)}},Tn=function(a){return Zt(st(),k[a]||k.input)},Ee=function(a,u){["string","number"].includes(At(u))?a.value="".concat(u):Sr(u)||$t('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(At(u),'"'))},ct={};ct.text=ct.email=ct.password=ct.number=ct.tel=ct.url=ct.search=ct.date=ct["datetime-local"]=ct.time=ct.week=ct.month=function(p,a){return Ee(p,a.inputValue),at(p,p,a),tr(p,a),p.type=a.input,p},ct.file=function(p,a){return at(p,p,a),tr(p,a),p},ct.range=function(p,a){var u=p.querySelector("input"),d=p.querySelector("output");return Ee(u,a.inputValue),u.type=a.input,Ee(d,a.inputValue),at(u,p,a),p},ct.select=function(p,a){if(p.textContent="",a.inputPlaceholder){var u=document.createElement("option");Mt(u,a.inputPlaceholder),u.value="",u.disabled=!0,u.selected=!0,p.appendChild(u)}return at(p,p,a),p},ct.radio=function(p){return p.textContent="",p},ct.checkbox=function(p,a){var u=yn(st(),"checkbox");u.value="1",u.checked=!!a.inputValue;var d=p.querySelector("span");return Mt(d,a.inputPlaceholder),u},ct.textarea=function(p,a){Ee(p,a.inputValue),tr(p,a),at(p,p,a);var u=function(y){return parseInt(window.getComputedStyle(y).marginLeft)+parseInt(window.getComputedStyle(y).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var d=parseInt(window.getComputedStyle(st()).width),y=function(){if(document.body.contains(p)){var F=p.offsetWidth+u(p);F>d?st().style.width="".concat(F,"px"):ne(st(),"width",a.width)}};new MutationObserver(y).observe(p,{attributes:!0,attributeFilter:["style"]})}}),p};var Ws=function(a,u){var d=Hn();d&&(_e(d),Ft(d,u,"htmlContainer"),u.html?(Oe(u.html,d),vt(d,"block")):u.text?(d.textContent=u.text,vt(d,"block")):Dt(d),Hs(a,u))},xi=function(a,u){var d=Wn();d&&(_e(d),_n(d,u.footer,"block"),u.footer&&Oe(u.footer,d),Ft(d,u,"footer"))},Ks=function(a,u){var d=ut.innerParams.get(a),y=gn();if(y){if(d&&u.icon===d.icon){fe(y,u),Oi(y,u);return}if(!u.icon&&!u.iconHtml){Dt(y);return}if(u.icon&&Object.keys(qn).indexOf(u.icon)===-1){se('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(u.icon,'"')),Dt(y);return}vt(y),fe(y,u),Oi(y,u),z(y,u.showClass&&u.showClass.icon)}},Oi=function(a,u){for(var d=0,y=Object.entries(qn);d<y.length;d++){var V=A(y[d],2),F=V[0],Y=V[1];u.icon!==F&&ee(a,Y)}z(a,u.icon&&qn[u.icon]),Ni(a,u),Gs(),Ft(a,u,"icon")},Gs=function(){var a=st();if(a)for(var u=window.getComputedStyle(a).getPropertyValue("background-color"),d=a.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),y=0;y<d.length;y++)d[y].style.backgroundColor=u},Qs=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,bn=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,fe=function(a,u){if(!(!u.icon&&!u.iconHtml)){var d=a.innerHTML,y="";if(u.iconHtml)y=jr(u.iconHtml);else if(u.icon==="success")y=Qs,d=d.replace(/ style=".*?"/g,"");else if(u.icon==="error")y=bn;else if(u.icon){var V={question:"?",warning:"!",info:"i"};y=jr(V[u.icon])}d.trim()!==y.trim()&&Mt(a,y)}},Ni=function(a,u){if(u.iconColor){a.style.color=u.iconColor,a.style.borderColor=u.iconColor;for(var d=0,y=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];d<y.length;d++){var V=y[d];Ti(a,V,"background-color",u.iconColor)}Ti(a,".swal2-success-ring","border-color",u.iconColor)}},jr=function(a){return'<div class="'.concat(k["icon-content"],'">').concat(a,"</div>")},Mi=function(a,u){var d=It();if(d){if(!u.imageUrl){Dt(d);return}vt(d,""),d.setAttribute("src",u.imageUrl),d.setAttribute("alt",u.imageAlt||""),ne(d,"width",u.imageWidth),ne(d,"height",u.imageHeight),d.className=k.image,Ft(d,u,"image")}},Ke=function(a,u){var d=zt(),y=st();if(!(!d||!y)){if(u.toast){ne(d,"width",u.width),y.style.width="100%";var V=xe();V&&y.insertBefore(V,gn())}else ne(y,"width",u.width);ne(y,"padding",u.padding),u.color&&(y.style.color=u.color),u.background&&(y.style.background=u.background),Dt(ke()),Xs(y,u)}},Xs=function(a,u){var d=u.showClass||{};a.className="".concat(k.popup," ").concat(Rt(a)?d.popup:""),u.toast?(z([document.documentElement,document.body],k["toast-shown"]),z(a,k.toast)):z(a,k.modal),Ft(a,u,"popup"),typeof u.customClass=="string"&&z(a,u.customClass),u.icon&&z(a,k["icon-".concat(u.icon)])},Ys=function(a,u){var d=Ct();if(d){var y=u.progressSteps,V=u.currentProgressStep;if(!y||y.length===0||V===void 0){Dt(d);return}vt(d),d.textContent="",V>=y.length&&$t("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),y.forEach(function(F,Y){var Q=Js(F);if(d.appendChild(Q),Y===V&&z(Q,k["active-progress-step"]),Y!==y.length-1){var gt=Te(u);d.appendChild(gt)}})}},Js=function(a){var u=document.createElement("li");return z(u,k["progress-step"]),Mt(u,a),u},Te=function(a){var u=document.createElement("li");return z(u,k["progress-step-line"]),a.progressStepsDistance&&ne(u,"width",a.progressStepsDistance),u},Zs=function(a,u){var d=zn();d&&(_e(d),_n(d,u.title||u.titleText,"block"),u.title&&Oe(u.title,d),u.titleText&&(d.innerText=u.titleText),Ft(d,u,"title"))},Li=function(a,u){Ke(a,u),ki(a,u),Ys(a,u),Ks(a,u),Mi(a,u),Zs(a,u),Ur(a,u),Ws(a,u),Ri(a,u),xi(a,u);var d=st();typeof u.didRender=="function"&&d&&u.didRender(d)},An=function(){return Rt(st())},In=function(){var a;return(a=te())===null||a===void 0?void 0:a.click()},Fi=function(){var a;return(a=De())===null||a===void 0?void 0:a.click()},Cn=function(){var a;return(a=Ve())===null||a===void 0?void 0:a.click()},ae=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),qr=function(a){a.keydownTarget&&a.keydownHandlerAdded&&(a.keydownTarget.removeEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!1)},$r=function(a,u,d){qr(a),u.toast||(a.keydownHandler=function(y){return Ui(u,y,d)},a.keydownTarget=u.keydownListenerCapture?window:st(),a.keydownListenerCapture=u.keydownListenerCapture,a.keydownTarget.addEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!0)},ht=function(a,u){var d,y=Gn();if(y.length){a=a+u,a===y.length?a=0:a===-1&&(a=y.length-1),y[a].focus();return}(d=st())===null||d===void 0||d.focus()},Bi=["ArrowRight","ArrowDown"],to=["ArrowLeft","ArrowUp"],Ui=function(a,u,d){a&&(u.isComposing||u.keyCode===229||(a.stopKeydownPropagation&&u.stopPropagation(),u.key==="Enter"?ji(u,a):u.key==="Tab"?qi(u):[].concat(Bi,to).includes(u.key)?er(u.key):u.key==="Escape"&&$i(u,a,d)))},ji=function(a,u){if(qe(u.allowEnterKey)){var d=yn(st(),u.input);if(a.target&&d&&a.target instanceof HTMLElement&&a.target.outerHTML===d.outerHTML){if(["textarea","file"].includes(u.input))return;In(),a.preventDefault()}}},qi=function(a){for(var u=a.target,d=Gn(),y=-1,V=0;V<d.length;V++)if(u===d[V]){y=V;break}a.shiftKey?ht(y,-1):ht(y,1),a.stopPropagation(),a.preventDefault()},er=function(a){var u=He(),d=te(),y=De(),V=Ve();if(!(!u||!d||!y||!V)){var F=[d,y,V];if(!(document.activeElement instanceof HTMLElement&&!F.includes(document.activeElement))){var Y=Bi.includes(a)?"nextElementSibling":"previousElementSibling",Q=document.activeElement;if(Q){for(var gt=0;gt<u.children.length;gt++){if(Q=Q[Y],!Q)return;if(Q instanceof HTMLButtonElement&&Rt(Q))break}Q instanceof HTMLButtonElement&&Q.focus()}}}},$i=function(a,u,d){qe(u.allowEscapeKey)&&(a.preventDefault(),d(ae.esc))},Ht={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},zi=function(){var a=zt(),u=Array.from(document.body.children);u.forEach(function(d){d.contains(a)||(d.hasAttribute("aria-hidden")&&d.setAttribute("data-previous-aria-hidden",d.getAttribute("aria-hidden")||""),d.setAttribute("aria-hidden","true"))})},Hi=function(){var a=Array.from(document.body.children);a.forEach(function(u){u.hasAttribute("data-previous-aria-hidden")?(u.setAttribute("aria-hidden",u.getAttribute("data-previous-aria-hidden")||""),u.removeAttribute("data-previous-aria-hidden")):u.removeAttribute("aria-hidden")})},Ge=typeof window<"u"&&!!window.GestureEvent,Wi=function(){if(Ge&&!Lt(document.body,k.iosfix)){var a=document.body.scrollTop;document.body.style.top="".concat(a*-1,"px"),z(document.body,k.iosfix),zr()}},zr=function(){var a=zt();if(a){var u;a.ontouchstart=function(d){u=nr(d)},a.ontouchmove=function(d){u&&(d.preventDefault(),d.stopPropagation())}}},nr=function(a){var u=a.target,d=zt(),y=Hn();return!d||!y||Ki(a)||rr(a)?!1:u===d||!Xn(d)&&u instanceof HTMLElement&&u.tagName!=="INPUT"&&u.tagName!=="TEXTAREA"&&!(Xn(y)&&y.contains(u))},Ki=function(a){return a.touches&&a.touches.length&&a.touches[0].touchType==="stylus"},rr=function(a){return a.touches&&a.touches.length>1},eo=function(){if(Lt(document.body,k.iosfix)){var a=parseInt(document.body.style.top,10);ee(document.body,k.iosfix),document.body.style.top="",document.body.scrollTop=a*-1}},Gi=function(){var a=document.createElement("div");a.className=k["scrollbar-measure"],document.body.appendChild(a);var u=a.getBoundingClientRect().width-a.clientWidth;return document.body.removeChild(a),u},le=null,Qi=function(a){le===null&&(document.body.scrollHeight>window.innerHeight||a==="scroll")&&(le=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(le+Gi(),"px"))},Xi=function(){le!==null&&(document.body.style.paddingRight="".concat(le,"px"),le=null)};function ir(p,a,u,d){ye()?Kr(p,d):(js(u).then(function(){return Kr(p,d)}),qr(G)),Ge?(a.setAttribute("style","display:none !important"),a.removeAttribute("class"),a.innerHTML=""):a.remove(),Qn()&&(Xi(),eo(),Hi()),Hr()}function Hr(){ee([document.documentElement,document.body],[k.shown,k["height-auto"],k["no-backdrop"],k["toast-shown"]])}function pe(p){p=Fe(p);var a=Ht.swalPromiseResolve.get(this),u=sr(this);this.isAwaitingPromise?p.isDismissed||(Qe(this),a(p)):u&&a(p)}var sr=function(a){var u=st();if(!u)return!1;var d=ut.innerParams.get(a);if(!d||Lt(u,d.hideClass.popup))return!1;ee(u,d.showClass.popup),z(u,d.hideClass.popup);var y=zt();return ee(y,d.showClass.backdrop),z(y,d.hideClass.backdrop),Yi(a,u,d),!0};function Wr(p){var a=Ht.swalPromiseReject.get(this);Qe(this),a&&a(p)}var Qe=function(a){a.isAwaitingPromise&&(delete a.isAwaitingPromise,ut.innerParams.get(a)||a._destroy())},Fe=function(a){return typeof a>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},a)},Yi=function(a,u,d){var y=zt(),V=Me&&vn(u);typeof d.willClose=="function"&&d.willClose(u),V?Ji(a,u,y,d.returnFocus,d.didClose):ir(a,y,d.returnFocus,d.didClose)},Ji=function(a,u,d,y,V){Me&&(G.swalCloseEventFinishedCallback=ir.bind(null,a,d,y,V),u.addEventListener(Me,function(F){F.target===u&&(G.swalCloseEventFinishedCallback(),delete G.swalCloseEventFinishedCallback)}))},Kr=function(a,u){setTimeout(function(){typeof u=="function"&&u.bind(a.params)(),a._destroy&&a._destroy()})},Be=function(a){var u=st();if(u||new is,u=st(),!!u){var d=xe();ye()?Dt(gn()):or(u,a),vt(d),u.setAttribute("data-loading","true"),u.setAttribute("aria-busy","true"),u.focus()}},or=function(a,u){var d=He(),y=xe();!d||!y||(!u&&Rt(te())&&(u=te()),vt(d),u&&(Dt(u),y.setAttribute("data-button-to-replace",u.className),d.insertBefore(y,u)),z([a,d],k.loading))},Xt=function(a,u){u.input==="select"||u.input==="radio"?c(a,u):["text","email","number","tel","textarea"].some(function(d){return d===u.input})&&(mn(u.inputValue)||Sr(u.inputValue))&&(Be(te()),f(a,u))},Zi=function(a,u){var d=a.getInput();if(!d)return null;switch(u.input){case"checkbox":return ts(d);case"radio":return Xe(d);case"file":return s(d);default:return u.inputAutoTrim?d.value.trim():d.value}},ts=function(a){return a.checked?1:0},Xe=function(a){return a.checked?a.value:null},s=function(a){return a.files&&a.files.length?a.getAttribute("multiple")!==null?a.files:a.files[0]:null},c=function(a,u){var d=st();if(d){var y=function(F){u.input==="select"?g(d,S(F),u):u.input==="radio"&&C(d,S(F),u)};mn(u.inputOptions)||Sr(u.inputOptions)?(Be(te()),$e(u.inputOptions).then(function(V){a.hideLoading(),y(V)})):At(u.inputOptions)==="object"?y(u.inputOptions):se("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(At(u.inputOptions)))}},f=function(a,u){var d=a.getInput();d&&(Dt(d),$e(u.inputValue).then(function(y){d.value=u.input==="number"?"".concat(parseFloat(y)||0):"".concat(y),vt(d),d.focus(),a.hideLoading()}).catch(function(y){se("Error in inputValue promise: ".concat(y)),d.value="",vt(d),d.focus(),a.hideLoading()}))};function g(p,a,u){var d=Zt(p,k.select);if(d){var y=function(F,Y,Q){var gt=document.createElement("option");gt.value=Q,Mt(gt,Y),gt.selected=M(Q,u.inputValue),F.appendChild(gt)};a.forEach(function(V){var F=V[0],Y=V[1];if(Array.isArray(Y)){var Q=document.createElement("optgroup");Q.label=F,Q.disabled=!1,d.appendChild(Q),Y.forEach(function(gt){return y(Q,gt[1],gt[0])})}else y(d,Y,F)}),d.focus()}}function C(p,a,u){var d=Zt(p,k.radio);if(d){a.forEach(function(V){var F=V[0],Y=V[1],Q=document.createElement("input"),gt=document.createElement("label");Q.type="radio",Q.name=k.radio,Q.value=F,M(F,u.inputValue)&&(Q.checked=!0);var Gr=document.createElement("span");Mt(Gr,Y),Gr.className=k.label,gt.appendChild(Q),gt.appendChild(Gr),d.appendChild(gt)});var y=d.querySelectorAll("input");y.length&&y[0].focus()}}var S=function p(a){var u=[];return a instanceof Map?a.forEach(function(d,y){var V=d;At(V)==="object"&&(V=p(V)),u.push([y,V])}):Object.keys(a).forEach(function(d){var y=a[d];At(y)==="object"&&(y=p(y)),u.push([d,y])}),u},M=function(a,u){return!!u&&u.toString()===a.toString()},ot=void 0,Pt=function(a){var u=ut.innerParams.get(a);a.disableButtons(),u.input?St(a,"confirm"):no(a,!0)},nt=function(a){var u=ut.innerParams.get(a);a.disableButtons(),u.returnInputValueOnDeny?St(a,"deny"):Yt(a,!1)},xt=function(a,u){a.disableButtons(),u(ae.cancel)},St=function(a,u){var d=ut.innerParams.get(a);if(!d.input){se('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Rr(u)));return}var y=a.getInput(),V=Zi(a,d);d.inputValidator?Ye(a,V,u):y&&!y.checkValidity()?(a.enableButtons(),a.showValidationMessage(d.validationMessage||y.validationMessage)):u==="deny"?Yt(a,V):no(a,V)},Ye=function(a,u,d){var y=ut.innerParams.get(a);a.disableInput();var V=Promise.resolve().then(function(){return $e(y.inputValidator(u,y.validationMessage))});V.then(function(F){a.enableButtons(),a.enableInput(),F?a.showValidationMessage(F):d==="deny"?Yt(a,u):no(a,u)})},Yt=function(a,u){var d=ut.innerParams.get(a||ot);if(d.showLoaderOnDeny&&Be(De()),d.preDeny){a.isAwaitingPromise=!0;var y=Promise.resolve().then(function(){return $e(d.preDeny(u,d.validationMessage))});y.then(function(V){V===!1?(a.hideLoading(),Qe(a)):a.close({isDenied:!0,value:typeof V>"u"?u:V})}).catch(function(V){return ar(a||ot,V)})}else a.close({isDenied:!0,value:u})},Rn=function(a,u){a.close({isConfirmed:!0,value:u})},ar=function(a,u){a.rejectPromise(u)},no=function(a,u){var d=ut.innerParams.get(a||ot);if(d.showLoaderOnConfirm&&Be(),d.preConfirm){a.resetValidationMessage(),a.isAwaitingPromise=!0;var y=Promise.resolve().then(function(){return $e(d.preConfirm(u,d.validationMessage))});y.then(function(V){Rt(ke())||V===!1?(a.hideLoading(),Qe(a)):Rn(a,typeof V>"u"?u:V)}).catch(function(V){return ar(a||ot,V)})}else Rn(a,u)};function es(){var p=ut.innerParams.get(this);if(p){var a=ut.domCache.get(this);Dt(a.loader),ye()?p.icon&&vt(gn()):Hc(a),ee([a.popup,a.actions],k.loading),a.popup.removeAttribute("aria-busy"),a.popup.removeAttribute("data-loading"),a.confirmButton.disabled=!1,a.denyButton.disabled=!1,a.cancelButton.disabled=!1}}var Hc=function(a){var u=a.popup.getElementsByClassName(a.loader.getAttribute("data-button-to-replace"));u.length?vt(u[0],"inline-block"):bi()&&Dt(a.actions)};function va(){var p=ut.innerParams.get(this),a=ut.domCache.get(this);return a?yn(a.popup,p.input):null}function Ea(p,a,u){var d=ut.domCache.get(p);a.forEach(function(y){d[y].disabled=u})}function Ta(p,a){var u=st();if(!(!u||!p))if(p.type==="radio")for(var d=u.querySelectorAll('[name="'.concat(k.radio,'"]')),y=0;y<d.length;y++)d[y].disabled=a;else p.disabled=a}function ba(){Ea(this,["confirmButton","denyButton","cancelButton"],!1)}function Aa(){Ea(this,["confirmButton","denyButton","cancelButton"],!0)}function Ia(){Ta(this.getInput(),!1)}function Ca(){Ta(this.getInput(),!0)}function Ra(p){var a=ut.domCache.get(this),u=ut.innerParams.get(this);Mt(a.validationMessage,p),a.validationMessage.className=k["validation-message"],u.customClass&&u.customClass.validationMessage&&z(a.validationMessage,u.customClass.validationMessage),vt(a.validationMessage);var d=this.getInput();d&&(d.setAttribute("aria-invalid","true"),d.setAttribute("aria-describedby",k["validation-message"]),We(d),z(d,k.inputerror))}function Pa(){var p=ut.domCache.get(this);p.validationMessage&&Dt(p.validationMessage);var a=this.getInput();a&&(a.removeAttribute("aria-invalid"),a.removeAttribute("aria-describedby"),ee(a,k.inputerror))}var lr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Wc=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Kc={},Gc=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Sa=function(a){return Object.prototype.hasOwnProperty.call(lr,a)},ka=function(a){return Wc.indexOf(a)!==-1},Va=function(a){return Kc[a]},Qc=function(a){Sa(a)||$t('Unknown parameter "'.concat(a,'"'))},Xc=function(a){Gc.includes(a)&&$t('The parameter "'.concat(a,'" is incompatible with toasts'))},Yc=function(a){var u=Va(a);u&&$n(a,u)},Jc=function(a){a.backdrop===!1&&a.allowOutsideClick&&$t('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var u in a)Qc(u),a.toast&&Xc(u),Yc(u)};function Da(p){var a=st(),u=ut.innerParams.get(this);if(!a||Lt(a,u.hideClass.popup)){$t("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var d=Zc(p),y=Object.assign({},u,d);Li(this,y),ut.innerParams.set(this,y),Object.defineProperties(this,{params:{value:Object.assign({},this.params,p),writable:!1,enumerable:!0}})}var Zc=function(a){var u={};return Object.keys(a).forEach(function(d){ka(d)?u[d]=a[d]:$t("Invalid parameter to update: ".concat(d))}),u};function xa(){var p=ut.domCache.get(this),a=ut.innerParams.get(this);if(!a){Oa(this);return}p.popup&&G.swalCloseEventFinishedCallback&&(G.swalCloseEventFinishedCallback(),delete G.swalCloseEventFinishedCallback),typeof a.didDestroy=="function"&&a.didDestroy(),th(this)}var th=function(a){Oa(a),delete a.params,delete G.keydownHandler,delete G.keydownTarget,delete G.currentInstance},Oa=function(a){a.isAwaitingPromise?(ro(ut,a),a.isAwaitingPromise=!0):(ro(Ht,a),ro(ut,a),delete a.isAwaitingPromise,delete a.disableButtons,delete a.enableButtons,delete a.getInput,delete a.disableInput,delete a.enableInput,delete a.hideLoading,delete a.disableLoading,delete a.showValidationMessage,delete a.resetValidationMessage,delete a.close,delete a.closePopup,delete a.closeModal,delete a.closeToast,delete a.rejectPromise,delete a.update,delete a._destroy)},ro=function(a,u){for(var d in a)a[d].delete(u)},eh=Object.freeze({__proto__:null,_destroy:xa,close:pe,closeModal:pe,closePopup:pe,closeToast:pe,disableButtons:Aa,disableInput:Ca,disableLoading:es,enableButtons:ba,enableInput:Ia,getInput:va,handleAwaitingPromise:Qe,hideLoading:es,rejectPromise:Wr,resetValidationMessage:Pa,showValidationMessage:Ra,update:Da}),nh=function(a,u,d){a.toast?rh(a,u,d):(sh(u),oh(u),ah(a,u,d))},rh=function(a,u,d){u.popup.onclick=function(){a&&(ih(a)||a.timer||a.input)||d(ae.close)}},ih=function(a){return!!(a.showConfirmButton||a.showDenyButton||a.showCancelButton||a.showCloseButton)},ns=!1,sh=function(a){a.popup.onmousedown=function(){a.container.onmouseup=function(u){a.container.onmouseup=function(){},u.target===a.container&&(ns=!0)}}},oh=function(a){a.container.onmousedown=function(u){u.target===a.container&&u.preventDefault(),a.popup.onmouseup=function(d){a.popup.onmouseup=function(){},(d.target===a.popup||d.target instanceof HTMLElement&&a.popup.contains(d.target))&&(ns=!0)}}},ah=function(a,u,d){u.container.onclick=function(y){if(ns){ns=!1;return}y.target===u.container&&qe(a.allowOutsideClick)&&d(ae.backdrop)}},lh=function(a){return At(a)==="object"&&a.jquery},Na=function(a){return a instanceof Element||lh(a)},uh=function(a){var u={};return At(a[0])==="object"&&!Na(a[0])?Object.assign(u,a[0]):["title","html","icon"].forEach(function(d,y){var V=a[y];typeof V=="string"||Na(V)?u[d]=V:V!==void 0&&se("Unexpected type of ".concat(d,'! Expected "string" or "Element", got ').concat(At(V)))}),u};function ch(){for(var p=this,a=arguments.length,u=new Array(a),d=0;d<a;d++)u[d]=arguments[d];return O(p,u)}function hh(p){var a=function(u){function d(){return w(this,d),h(this,d,arguments)}return Z(d,u),q(d,[{key:"_main",value:function(V,F){return J(K(d.prototype),"_main",this).call(this,V,Object.assign({},p,F))}}])}(this);return a}var dh=function(){return G.timeout&&G.timeout.getTimerLeft()},Ma=function(){if(G.timeout)return Ai(),G.timeout.stop()},La=function(){if(G.timeout){var a=G.timeout.start();return oe(a),a}},fh=function(){var a=G.timeout;return a&&(a.running?Ma():La())},ph=function(a){if(G.timeout){var u=G.timeout.increase(a);return oe(u,!0),u}},mh=function(){return!!(G.timeout&&G.timeout.isRunning())},Fa=!1,io={};function gh(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";io[p]=this,Fa||(document.body.addEventListener("click",wh),Fa=!0)}var wh=function(a){for(var u=a.target;u&&u!==document;u=u.parentNode)for(var d in io){var y=u.getAttribute(d);if(y){io[d].fire({template:y});return}}},yh=Object.freeze({__proto__:null,argsToParams:uh,bindClickHandler:gh,clickCancel:Cn,clickConfirm:In,clickDeny:Fi,enableLoading:Be,fire:ch,getActions:He,getCancelButton:Ve,getCloseButton:Vr,getConfirmButton:te,getContainer:zt,getDenyButton:De,getFocusableElements:Gn,getFooter:Wn,getHtmlContainer:Hn,getIcon:gn,getIconContent:kr,getImage:It,getInputLabel:wn,getLoader:xe,getPopup:st,getProgressSteps:Ct,getTimerLeft:dh,getTimerProgressBar:Kn,getTitle:zn,getValidationMessage:ke,increaseTimer:ph,isDeprecatedParameter:Va,isLoading:xr,isTimerRunning:mh,isUpdatableParameter:ka,isValidParameter:Sa,isVisible:An,mixin:hh,resumeTimer:La,showLoading:Be,stopTimer:Ma,toggleTimer:fh}),_h=function(){function p(a,u){w(this,p),this.callback=a,this.remaining=u,this.running=!1,this.start()}return q(p,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(u){var d=this.running;return d&&this.stop(),this.remaining+=u,d&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),Ba=["swal-title","swal-html","swal-footer"],vh=function(a){var u=typeof a.template=="string"?document.querySelector(a.template):a.template;if(!u)return{};var d=u.content;Ph(d);var y=Object.assign(Eh(d),Th(d),bh(d),Ah(d),Ih(d),Ch(d),Rh(d,Ba));return y},Eh=function(a){var u={},d=Array.from(a.querySelectorAll("swal-param"));return d.forEach(function(y){Pn(y,["name","value"]);var V=y.getAttribute("name"),F=y.getAttribute("value");typeof lr[V]=="boolean"?u[V]=F!=="false":At(lr[V])==="object"?u[V]=JSON.parse(F):u[V]=F}),u},Th=function(a){var u={},d=Array.from(a.querySelectorAll("swal-function-param"));return d.forEach(function(y){var V=y.getAttribute("name"),F=y.getAttribute("value");u[V]=new Function("return ".concat(F))()}),u},bh=function(a){var u={},d=Array.from(a.querySelectorAll("swal-button"));return d.forEach(function(y){Pn(y,["type","color","aria-label"]);var V=y.getAttribute("type");u["".concat(V,"ButtonText")]=y.innerHTML,u["show".concat(Rr(V),"Button")]=!0,y.hasAttribute("color")&&(u["".concat(V,"ButtonColor")]=y.getAttribute("color")),y.hasAttribute("aria-label")&&(u["".concat(V,"ButtonAriaLabel")]=y.getAttribute("aria-label"))}),u},Ah=function(a){var u={},d=a.querySelector("swal-image");return d&&(Pn(d,["src","width","height","alt"]),d.hasAttribute("src")&&(u.imageUrl=d.getAttribute("src")||void 0),d.hasAttribute("width")&&(u.imageWidth=d.getAttribute("width")||void 0),d.hasAttribute("height")&&(u.imageHeight=d.getAttribute("height")||void 0),d.hasAttribute("alt")&&(u.imageAlt=d.getAttribute("alt")||void 0)),u},Ih=function(a){var u={},d=a.querySelector("swal-icon");return d&&(Pn(d,["type","color"]),d.hasAttribute("type")&&(u.icon=d.getAttribute("type")),d.hasAttribute("color")&&(u.iconColor=d.getAttribute("color")),u.iconHtml=d.innerHTML),u},Ch=function(a){var u={},d=a.querySelector("swal-input");d&&(Pn(d,["type","label","placeholder","value"]),u.input=d.getAttribute("type")||"text",d.hasAttribute("label")&&(u.inputLabel=d.getAttribute("label")),d.hasAttribute("placeholder")&&(u.inputPlaceholder=d.getAttribute("placeholder")),d.hasAttribute("value")&&(u.inputValue=d.getAttribute("value")));var y=Array.from(a.querySelectorAll("swal-input-option"));return y.length&&(u.inputOptions={},y.forEach(function(V){Pn(V,["value"]);var F=V.getAttribute("value"),Y=V.innerHTML;u.inputOptions[F]=Y})),u},Rh=function(a,u){var d={};for(var y in u){var V=u[y],F=a.querySelector(V);F&&(Pn(F,[]),d[V.replace(/^swal-/,"")]=F.innerHTML.trim())}return d},Ph=function(a){var u=Ba.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(a.children).forEach(function(d){var y=d.tagName.toLowerCase();u.includes(y)||$t("Unrecognized element <".concat(y,">"))})},Pn=function(a,u){Array.from(a.attributes).forEach(function(d){u.indexOf(d.name)===-1&&$t(['Unrecognized attribute "'.concat(d.name,'" on <').concat(a.tagName.toLowerCase(),">."),"".concat(u.length?"Allowed attributes are: ".concat(u.join(", ")):"To set the value, use HTML within the element.")])})},Ua=10,Sh=function(a){var u=zt(),d=st();typeof a.willOpen=="function"&&a.willOpen(d);var y=window.getComputedStyle(document.body),V=y.overflowY;xh(u,d,a),setTimeout(function(){Vh(u,d)},Ua),Qn()&&(Dh(u,a.scrollbarPadding,V),zi()),!ye()&&!G.previousActiveElement&&(G.previousActiveElement=document.activeElement),typeof a.didOpen=="function"&&setTimeout(function(){return a.didOpen(d)}),ee(u,k["no-transition"])},kh=function p(a){var u=st();if(!(a.target!==u||!Me)){var d=zt();u.removeEventListener(Me,p),d.style.overflowY="auto"}},Vh=function(a,u){Me&&vn(u)?(a.style.overflowY="hidden",u.addEventListener(Me,kh)):a.style.overflowY="auto"},Dh=function(a,u,d){Wi(),u&&d!=="hidden"&&Qi(d),setTimeout(function(){a.scrollTop=0})},xh=function(a,u,d){z(a,d.showClass.backdrop),d.animation?(u.style.setProperty("opacity","0","important"),vt(u,"grid"),setTimeout(function(){z(u,d.showClass.popup),u.style.removeProperty("opacity")},Ua)):vt(u,"grid"),z([document.documentElement,document.body],k.shown),d.heightAuto&&d.backdrop&&!d.toast&&z([document.documentElement,document.body],k["height-auto"])},ja={email:function(a,u){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(a)?Promise.resolve():Promise.resolve(u||"Invalid email address")},url:function(a,u){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(a)?Promise.resolve():Promise.resolve(u||"Invalid URL")}};function Oh(p){p.inputValidator||(p.input==="email"&&(p.inputValidator=ja.email),p.input==="url"&&(p.inputValidator=ja.url))}function Nh(p){(!p.target||typeof p.target=="string"&&!document.querySelector(p.target)||typeof p.target!="string"&&!p.target.appendChild)&&($t('Target parameter is not valid, defaulting to "body"'),p.target="body")}function Mh(p){Oh(p),p.showLoaderOnConfirm&&!p.preConfirm&&$t(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Nh(p),typeof p.title=="string"&&(p.title=p.title.split(`
`).join("<br />")),Fr(p)}var be,rs=new WeakMap,_t=function(){function p(){if(w(this,p),P(this,rs,void 0),!(typeof window>"u")){be=this;for(var a=arguments.length,u=new Array(a),d=0;d<a;d++)u[d]=arguments[d];var y=Object.freeze(this.constructor.argsToParams(u));this.params=y,this.isAwaitingPromise=!1,D(rs,this,this._main(be.params))}}return q(p,[{key:"_main",value:function(u){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Jc(Object.assign({},d,u)),G.currentInstance){var y=Ht.swalPromiseResolve.get(G.currentInstance),V=G.currentInstance.isAwaitingPromise;G.currentInstance._destroy(),V||y({isDismissed:!0}),Qn()&&Hi()}G.currentInstance=be;var F=Fh(u,d);Mh(F),Object.freeze(F),G.timeout&&(G.timeout.stop(),delete G.timeout),clearTimeout(G.restoreFocusTimeout);var Y=Bh(be);return Li(be,F),ut.innerParams.set(be,F),Lh(be,Y,F)}},{key:"then",value:function(u){return v(rs,this).then(u)}},{key:"finally",value:function(u){return v(rs,this).finally(u)}}])}(),Lh=function(a,u,d){return new Promise(function(y,V){var F=function(Q){a.close({isDismissed:!0,dismiss:Q})};Ht.swalPromiseResolve.set(a,y),Ht.swalPromiseReject.set(a,V),u.confirmButton.onclick=function(){Pt(a)},u.denyButton.onclick=function(){nt(a)},u.cancelButton.onclick=function(){xt(a,F)},u.closeButton.onclick=function(){F(ae.close)},nh(d,u,F),$r(G,d,F),Xt(a,d),Sh(d),Uh(G,d,F),jh(u,d),setTimeout(function(){u.container.scrollTop=0})})},Fh=function(a,u){var d=vh(a),y=Object.assign({},lr,u,d,a);return y.showClass=Object.assign({},lr.showClass,y.showClass),y.hideClass=Object.assign({},lr.hideClass,y.hideClass),y.animation===!1&&(y.showClass={backdrop:"swal2-noanimation"},y.hideClass={}),y},Bh=function(a){var u={popup:st(),container:zt(),actions:He(),confirmButton:te(),denyButton:De(),cancelButton:Ve(),loader:xe(),closeButton:Vr(),validationMessage:ke(),progressSteps:Ct()};return ut.domCache.set(a,u),u},Uh=function(a,u,d){var y=Kn();Dt(y),u.timer&&(a.timeout=new _h(function(){d("timer"),delete a.timeout},u.timer),u.timerProgressBar&&(vt(y),Ft(y,u,"timerProgressBar"),setTimeout(function(){a.timeout&&a.timeout.running&&oe(u.timer)})))},jh=function(a,u){if(!u.toast){if(!qe(u.allowEnterKey)){$n("allowEnterKey"),zh();return}qh(a)||$h(a,u)||ht(-1,1)}},qh=function(a){var u=a.popup.querySelectorAll("[autofocus]"),d=L(u),y;try{for(d.s();!(y=d.n()).done;){var V=y.value;if(V instanceof HTMLElement&&Rt(V))return V.focus(),!0}}catch(F){d.e(F)}finally{d.f()}return!1},$h=function(a,u){return u.focusDeny&&Rt(a.denyButton)?(a.denyButton.focus(),!0):u.focusCancel&&Rt(a.cancelButton)?(a.cancelButton.focus(),!0):u.focusConfirm&&Rt(a.confirmButton)?(a.confirmButton.focus(),!0):!1},zh=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var qa=new Date,$a=localStorage.getItem("swal-initiation");$a?(qa.getTime()-Date.parse($a))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var p=document.createElement("audio");p.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",p.loop=!0,document.body.appendChild(p),setTimeout(function(){p.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(qa))}_t.prototype.disableButtons=Aa,_t.prototype.enableButtons=ba,_t.prototype.getInput=va,_t.prototype.disableInput=Ca,_t.prototype.enableInput=Ia,_t.prototype.hideLoading=es,_t.prototype.disableLoading=es,_t.prototype.showValidationMessage=Ra,_t.prototype.resetValidationMessage=Pa,_t.prototype.close=pe,_t.prototype.closePopup=pe,_t.prototype.closeModal=pe,_t.prototype.closeToast=pe,_t.prototype.rejectPromise=Wr,_t.prototype.update=Da,_t.prototype._destroy=xa,Object.assign(_t,yh),Object.keys(eh).forEach(function(p){_t[p]=function(){if(be&&be[p]){var a;return(a=be)[p].apply(a,arguments)}return null}}),_t.DismissReason=ae,_t.version="11.12.0";var is=_t;return is.default=is,is}),typeof Je<"u"&&Je.Sweetalert2&&(Je.swal=Je.sweetAlert=Je.Swal=Je.SweetAlert=Je.Sweetalert2),typeof document<"u"&&function(e,r){var i=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(zc);var Bw=zc.exports;const ry=Wh(Bw);export{ry as S,ny as a,Zw as b,zw as c,Hw as d,Xw as e,ey as f,Gw as g,Jw as h,Ww as q,ty as r,Qw as s,Yw as u,Kw as w};
