function b(){}const J=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function W(){return Object.create(null)}function v(t){t.forEach(K)}function M(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function Rt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function _t(t){return Object.keys(t).length===0}function qt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function zt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)c[l]=e.dirty[l]|r[l];return c}return e.dirty|r}return e.dirty}function Bt(t,e,n,i,r,c){if(r){const s=Q(e,n,i,c);t.p(s,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Lt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ft(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}const U=typeof window<"u";let V=U?()=>window.performance.now():()=>Date.now(),H=U?t=>requestAnimationFrame(t):b;const w=new Set;function X(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&H(X)}function Y(t){let e;return w.size===0&&H(X),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let P=!1;function dt(){P=!0}function ht(){P=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&o.push(a)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:mt(1,r,_=>e[n[_]].claim_order,u))-1;i[o]=n[a]+1;const f=a+1;n[f]=o,r=Math.max(f,r)}const c=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);c.reverse(),s.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<s.length;o++){for(;u<c.length&&s[o].claim_order>=c[u].claim_order;)u++;const a=u<c.length?c[u]:null;t.insertBefore(s[o],a)}}function yt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=et("style");return xt(Z(t),e),e.sheet}function xt(t,e){return yt(t.head||t,e),e.sheet}function $t(t,e){if(P){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Wt(t,e,n){P&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function It(){return L(" ")}function Jt(){return L("")}function Kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Qt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:wt(t,i,e[i])}function bt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){vt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Et(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||c.push(l.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ut(t,e,n){return Et(t,e,n,et)}function kt(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>L(e),!0)}function Vt(t){return kt(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Yt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Zt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function te(t,e){return new t(e)}const D=new Map;let T=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:gt(e),rules:{}};return D.set(t,n),n}function it(t,e,n,i,r,c,s,l=0){const o=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=o){const p=e+(n-e)*c(m);u+=m*100+`%{${s(p,1-p)}}
`}const a=u+`100% {${s(n,1-n)}}
}`,f=`__svelte_${At(a)}_${l}`,_=Z(t),{stylesheet:d,rules:h}=D.get(_)||jt(_,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${a}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${r}ms 1 both`,T+=1,f}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),T-=r,T||St())}function St(){H(()=>{T||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),D.clear())})}let N;function k(t){N=t}function rt(){if(!N)throw new Error("Function called outside component initialization");return N}function ee(t){rt().$$.on_mount.push(t)}function ne(t){rt().$$.after_update.push(t)}function ie(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const $=[],G=[],S=[],I=[],st=Promise.resolve();let B=!1;function ot(){B||(B=!0,st.then(ct))}function re(){return ot(),st}function A(t){S.push(t)}const q=new Set;let x=0;function ct(){if(x!==0)return;const t=N;do{try{for(;x<$.length;){const e=$[x];x++,k(e),Ct(e.$$)}}catch(e){throw $.length=0,x=0,e}for(k(null),$.length=0,x=0;G.length;)G.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];q.has(n)||(q.add(n),n())}S.length=0}while($.length);for(;I.length;)I.pop()();B=!1,q.clear(),k(t)}function Ct(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let E;function lt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function O(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const C=new Set;let g;function se(){g={r:0,c:[],p:g}}function oe(){g.r||v(g.c),g=g.p}function Dt(t,e){t&&t.i&&(C.delete(t),t.i(e))}function ce(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),g.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ut={duration:0};function le(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,l,o=0;function u(){s&&z(t,s)}function a(){const{delay:_=0,duration:d=300,easing:h=J,tick:y=b,css:m}=r||ut;m&&(s=it(t,0,1,d,_,h,m,o++)),y(0,1);const p=V()+_,ft=p+d;l&&l.abort(),c=!0,A(()=>O(t,!0,"start")),l=Y(R=>{if(c){if(R>=ft)return y(1,0),O(t,!0,"end"),u(),c=!1;if(R>=p){const F=h((R-p)/d);y(F,1-F)}}return c})}let f=!1;return{start(){f||(f=!0,z(t),M(r)?(r=r(i),lt().then(a)):a())},invalidate(){f=!1},end(){c&&(u(),c=!1)}}}function ue(t,e,n){const i={direction:"out"};let r=e(t,n,i),c=!0,s;const l=g;l.r+=1;function o(){const{delay:u=0,duration:a=300,easing:f=J,tick:_=b,css:d}=r||ut;d&&(s=it(t,1,0,a,u,f,d));const h=V()+u,y=h+a;A(()=>O(t,!1,"start")),Y(m=>{if(c){if(m>=y)return _(0,1),O(t,!1,"end"),--l.r||v(l.c),!1;if(m>=h){const p=f((m-h)/a);_(1-p,p)}}return c})}return M(r)?lt().then(()=>{r=r(i),o()}):o(),{end(u){u&&r.tick&&r.tick(1,0),c&&(s&&z(t,s),c=!1)}}}function fe(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],l=e[c];if(l){for(const o in s)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[c]=l}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ae(t){return typeof t=="object"&&t!==null?t:{}}function _e(t){t&&t.c()}function de(t,e){t&&t.l(e)}function Tt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||A(()=>{const s=t.$$.on_mount.map(K).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),c.forEach(A)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&($.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function he(t,e,n,i,r,c,s,l=[-1]){const o=N;k(t);const u=t.$$={fragment:null,ctx:[],props:c,update:b,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:W(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,_,...d)=>{const h=d.length?d[0]:_;return u.ctx&&r(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),a&&Mt(t,f)),_}):[],u.update(),a=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){dt();const f=bt(e.target);u.fragment&&u.fragment.l(f),f.forEach(tt)}else u.fragment&&u.fragment.c();e.intro&&Dt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),ht(),ct()}k(o)}class me{$destroy(){Ot(this,1),this.$destroy=b}$on(e,n){if(!M(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{de as A,Tt as B,Ot as C,qt as D,Bt as E,Ht as F,zt as G,at as H,fe as I,ae as J,Lt as K,$t as L,Rt as M,A as N,le as O,ue as P,Zt as Q,Ft as R,me as S,Qt as T,Kt as U,Gt as V,v as W,ie as X,It as a,Wt as b,Vt as c,ce as d,Jt as e,oe as f,Dt as g,tt as h,he as i,ne as j,et as k,Ut as l,bt as m,b as n,ee as o,wt as p,Yt as q,L as r,Pt as s,re as t,kt as u,Xt as v,se as w,G as x,te as y,_e as z};
