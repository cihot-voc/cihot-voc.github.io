import{ax as f,l as b,k as v,aT as I,v as N,av as T,ay as w,r as C,n as E,j as s,az as F,w as L,F as e,aw as c,aB as d,T as P,i as m,B as Q}from"../web.js";import{Q as A}from"./quill-editor-IseXW9Ia.js";import{e as B}from"./css-BRyxPvm2.js";import{C as O}from"./index-Cq2plmkM.js";import"./useBubbleLock-Kz7pQh5h.js";function M(){const[p]=f(),h=b();console.debug("useNavigationType",v()),console.debug("useNavigation",I());const{id:a}=N(),n=a!==void 0,u=n?"put":"post",{refetch:x}=T(),{data:r}=w(),g=C.useMemo(()=>Array.isArray(r)?r.map(({id:o,name:t})=>({label:t,value:o})):[],[r]),{data:y,isLoading:l,isError:j,error:i}=E(["blog",a],async()=>c.get(`/post/${a}`),{enabled:n});return j?s.jsx("pre",{children:i==null?void 0:i.error}):l?s.jsx(F,{}):s.jsx(L,{title:`게시글 등록 ${u} ${l?"...":""}`,className:B,bordered:!0,children:s.jsxs(e,{initialValues:y,layout:"vertical",form:p,onFinish:o=>{c[u]("/post",o).then(t=>{d.success(s.jsx(P.Paragraph,{ellipsis:{rows:3},style:{maxWidth:"90vw"},children:JSON.stringify(t)})),x(),h("..")}).catch(t=>d.error(JSON.stringify(t)))},children:[s.jsx(e.Item,{name:"id",hidden:!0,children:s.jsx(m,{})}),s.jsx(e.Item,{name:"title",label:"제목",rules:[{required:!0}],children:s.jsx(m,{tabIndex:1,autoFocus:!0})}),s.jsx(e.Item,{name:"categories",initialValue:[],children:s.jsx(O.Group,{options:g})}),s.jsx(e.Item,{name:"content",label:"내용",rules:[{required:!0}],children:s.jsx(A,{theme:"snow",tabIndex:1})}),s.jsx(e.Item,{children:s.jsx(Q,{htmlType:"submit",children:"저장"})})]})})}export{M as default};