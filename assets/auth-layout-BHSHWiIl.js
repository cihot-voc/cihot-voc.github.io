import{q as s,j as t,y as n,S as o,O as u,z as r}from"../web.js";function x(){const{data:e,isLoading:a}=s("token",()=>r.getItem("token"));return a?t.jsx(n,{}):e===null?t.jsx(o,{}):t.jsx(u,{context:{token:e}})}export{x as default};