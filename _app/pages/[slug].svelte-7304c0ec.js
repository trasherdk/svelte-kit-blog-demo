import{S as s,i as t,s as a,e,t as o,j as n,k as r,c,a as h,b as i,d as p,l,o as u,f,g as d,h as m,n as z,J as b}from"../chunks/vendor-8b508088.js";import{b as g}from"../chunks/paths-d3b7dcf1.js";function j(s){let t,a,g,j,v,$,k,x,E,w,y,A=s[0].metadata.title+"",C=s[0].content+"";return{c(){t=e("h1"),a=o(A),g=n(),j=e("p"),v=e("a"),$=o("zhuzilin"),k=n(),x=o(s[1]),E=n(),y=r(),this.h()},l(e){t=c(e,"H1",{class:!0});var o=h(t);a=i(o,A),o.forEach(p),g=l(e),j=c(e,"P",{class:!0});var n=h(j);v=c(n,"A",{href:!0});var u=h(v);$=i(u,"zhuzilin"),u.forEach(p),k=l(n),x=i(n,s[1]),n.forEach(p),E=l(e),y=r(),this.h()},h(){u(t,"class","title svelte-1mgzh8t"),u(v,"href","https://github.com/zhuzilin"),u(j,"class","info"),w=new b(y)},m(s,e){f(s,t,e),d(t,a),f(s,g,e),f(s,j,e),d(j,v),d(v,$),d(j,k),d(j,x),f(s,E,e),w.m(C,s,e),f(s,y,e)},p(s,[t]){1&t&&A!==(A=s[0].metadata.title+"")&&m(a,A),1&t&&C!==(C=s[0].content+"")&&w.p(C)},i:z,o:z,d(s){s&&p(t),s&&p(g),s&&p(j),s&&p(E),s&&p(y),s&&w.d()}}}async function v({page:s,fetch:t}){const a=s.params.slug;return{props:{post:await t(`${g}/${a}.json`).then((s=>s.json()))}}}function $(s,t,a){let{post:e}=t,o=e.metadata.date.toUpperCase();return s.$$set=s=>{"post"in s&&a(0,e=s.post)},[e,o]}export default class extends s{constructor(s){super(),t(this,s,$,j,a,{post:0})}}export{v as load};
