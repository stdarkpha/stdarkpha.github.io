import{d as a}from"./BZoLRGKd.js";import{t as r,X as p}from"./Dt0KXldn.js";const y="$s";function d(...t){const f=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(f);const[o,e]=t;if(!o||typeof o!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+o);if(e!==void 0&&typeof e!="function")throw new Error("[nuxt] [useState] init must be a function: "+e);const s=y+o,u=a(),i=r(u.payload.state,s);if(i.value===void 0&&e){const n=e();if(p(n))return u.payload.state[s]=n,n;i.value=n}return i}export{d as u};
