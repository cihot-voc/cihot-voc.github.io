import{v as c,r as d,n as l,j as t,w as j,x,L as o,B as i,R as u,y as h,q as g,z as f,E as P,G as I,A as y}from"../web.js";import{I as A,P as C}from"./css-C3h7-5aW.js";import R from"./list-ftkthPPT.js";import L from"./list-B4gHjDSn.js";import v from"./list-CsFkGQ7l.js";import"./use-yup-params-8nHEo682.js";import"./index.esm-CnD8eApZ.js";import"./render-CHjv3IOU.js";import"./index-CYjZiiai.js";import"./Table-DNa1AAiZ.js";import"./index-ejgHpRPS.js";import"./dropdown-BySDfBJe.js";import"./DownOutlined-Bre27_U7.js";import"./index-C-CKWqDQ.js";import"./index-Cq2plmkM.js";import"./useBubbleLock-Kz7pQh5h.js";import"./index-DgZBu0-b.js";import"./EditFilled-CAVP73L2.js";import"./DeleteFilled-CRc1QtDf.js";import"./create-BxZtCau_.js";import"./index-BkK6py1q.js";import"./index-BwshqLmk.js";import"./DeleteOutlined-DRPUzII6.js";function X(){const{projectId:r}=c(),e=d.useMemo(()=>r?parseInt(r,10):0,[r]),{data:s,isSuccess:a}=l(["project","get",r],()=>y.projects.get(e),{enabled:e>0}),p=a?t.jsxs(j,{title:t.jsxs(t.Fragment,{children:[t.jsxs(x,{children:["Project-",s.projectId]}),t.jsx("strong",{children:s.title})]}),style:{marginBlock:"1rem"},extra:t.jsx(o,{to:`/projects/${r}/update`,children:t.jsx(i,{type:"text",icon:t.jsx(u,{}),children:"수정"})}),children:[t.jsxs("div",{className:"times",children:[s.createdAt!==s.updatedAt&&t.jsx(h,{}),s.updatedAt&&g(s.updatedAt).fromNow()]}),t.jsx("div",{children:s==null?void 0:s.description})]}):null;return t.jsxs("div",{className:f(A,C),children:[t.jsx(o,{to:"/projects",children:t.jsx(i,{type:"link",children:"뒤로"})}),p,t.jsxs(P,{gutter:[8,8],children:[[t.jsx(R,{}),t.jsx(v,{})].map((m,n)=>t.jsx(I,{sm:24,lg:12,xxl:8,children:m},n)),t.jsx(L,{})]})]})}export{X as default};