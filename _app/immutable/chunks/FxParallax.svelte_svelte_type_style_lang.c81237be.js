import{S as A,i as B,s as D,e as P,b as E,n as U,h as y,R as F,H as R,K as J,k as w,a as Q,l as C,m as Y,c as Z,T as M,q as T,L as G,U as H,I as x,M as $,V as ee,W as ie,p as z,X as K,x as te}from"./index.893eee28.js";function L(l,e,i){const s=l.slice();return s[14]=e[i].format,s[15]=e[i].srcset,s}function N(l){let e,i,s,a,u,d,g,b,k,f=l[7],h=[];for(let t=0;t<f.length;t+=1)h[t]=O(L(l,f,t));let p=[{src:a=l[6].src},{srcset:u=l[6].srcset},{sizes:l[1]},{width:d=l[2]||l[6].width||void 0},{height:g=l[3]||l[6].height||void 0},{loading:l[4]},{decoding:l[5]},l[8]],_={};for(let t=0;t<p.length;t+=1)_=R(_,p[t]);return{c(){e=w("picture");for(let t=0;t<h.length;t+=1)h[t].c();i=Q(),s=w("img"),this.h()},l(t){e=C(t,"PICTURE",{});var c=Y(e);for(let r=0;r<h.length;r+=1)h[r].l(c);i=Z(c),s=C(c,"IMG",{src:!0,srcset:!0,sizes:!0,width:!0,height:!0,loading:!0,decoding:!0}),c.forEach(y),this.h()},h(){M(s,_),T(s,"background",l[6].lqip)},m(t,c){E(t,e,c);for(let r=0;r<h.length;r+=1)h[r].m(e,null);G(e,i),G(e,s),l[12](s),b||(k=[H(s,"click",l[10]),H(s,"load",l[11])],b=!0)},p(t,c){if(c&130){f=t[7];let r;for(r=0;r<f.length;r+=1){const q=L(t,f,r);h[r]?h[r].p(q,c):(h[r]=O(q),h[r].c(),h[r].m(e,i))}for(;r<h.length;r+=1)h[r].d(1);h.length=f.length}M(s,_=x(p,[c&64&&!$(s.src,a=t[6].src)&&{src:a},c&64&&u!==(u=t[6].srcset)&&{srcset:u},c&2&&{sizes:t[1]},c&68&&d!==(d=t[2]||t[6].width||void 0)&&{width:d},c&72&&g!==(g=t[3]||t[6].height||void 0)&&{height:g},c&16&&{loading:t[4]},c&32&&{decoding:t[5]},c&256&&t[8]])),T(s,"background",t[6].lqip)},d(t){t&&y(e),ee(h,t),l[12](null),b=!1,ie(k)}}}function O(l){let e,i,s;return{c(){e=w("source"),this.h()},l(a){e=C(a,"SOURCE",{type:!0,srcset:!0,sizes:!0}),this.h()},h(){z(e,"type",i="image/"+l[14]),z(e,"srcset",s=l[15]),z(e,"sizes",l[1])},m(a,u){E(a,e,u)},p(a,u){u&128&&i!==(i="image/"+a[14])&&z(e,"type",i),u&128&&s!==(s=a[15])&&z(e,"srcset",s),u&2&&z(e,"sizes",a[1])},d(a){a&&y(e)}}}function se(l){let e,i=l[6].src&&N(l);return{c(){i&&i.c(),e=P()},l(s){i&&i.l(s),e=P()},m(s,a){i&&i.m(s,a),E(s,e,a)},p(s,[a]){s[6].src?i?i.p(s,a):(i=N(s),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},i:U,o:U,d(s){i&&i.d(s),s&&y(e)}}}function le(l,e,i){const s=["src","sizes","width","height","loading","decoding","ref"];let a=F(e,s),{src:u=[]}=e,{sizes:d=void 0}=e,{width:g=void 0}=e,{height:b=void 0}=e,{loading:k="lazy"}=e,{decoding:f="async"}=e,{ref:h=void 0}=e;const p=["heic","heif","avif","webp","jpeg","jpg","png","gif","tiff"];let _={},t=[];function c(n){K.call(this,l,n)}function r(n){K.call(this,l,n)}function q(n){te[n?"unshift":"push"](()=>{h=n,i(0,h)})}return l.$$set=n=>{e=R(R({},e),J(n)),i(8,a=F(e,s)),"src"in n&&i(9,u=n.src),"sizes"in n&&i(1,d=n.sizes),"width"in n&&i(2,g=n.width),"height"in n&&i(3,b=n.height),"loading"in n&&i(4,k=n.loading),"decoding"in n&&i(5,f=n.decoding),"ref"in n&&i(0,h=n.ref)},l.$$.update=()=>{if(l.$$.dirty&512&&u.length){const{list:n,lqip:V}=u.reduce((m,o)=>(o.base64?m.lqip=`url('${o.base64}') no-repeat center/cover`:m.list.push(o),m),{list:[],lqip:void 0}),j=[];for(const m of p){const o=n.filter(S=>S.format===m);if(o.length){o.sort((I,v)=>I.width-v.width);const{src:S,width:W,height:X}=o[o.length-1];j.push({format:m==="jpg"?"jpeg":m,srcset:o.reduce((I,v)=>[...I,`${v.src} ${v.width}w`],[]).join(","),src:S,width:W,height:X})}}i(6,_={...j.pop(),lqip:V}),i(7,t=j)}},[h,d,g,b,k,f,_,t,a,u,c,r,q]}class re extends A{constructor(e){super(),B(this,e,le,se,D,{src:9,sizes:1,width:2,height:3,loading:4,decoding:5,ref:0})}}export{re as S};
