import{bA as j,bq as f,bY as v,bZ as I,bB as N,bt as C,bC as E,r as L,bD as P,bu as s,bp as w,bE as A,bw as e,by as l,bG as d,bK as F,bn as m,B as Q,bz as T}from"../app.js";import{Q as q}from"./quill-editor-Cx6mXDXX.js";import{C as B}from"./index-CDOisRdt.js";import"./index-DWP_LBIY.js";function J(){const[b]=j(),p=f();console.debug("useNavigationType",v()),console.debug("useNavigation",I());const{id:a}=N(),n=a!==void 0,u=n?"put":"post",{refetch:h}=C(),{data:r}=E(),x=L.useMemo(()=>Array.isArray(r)?r.map(({id:o,name:t})=>({label:t,value:o})):[],[r]),{data:g,isLoading:c,isError:y,error:i}=P(["blog",a],async()=>l.get(`/post/${a}`),{enabled:n});return y?s.jsx("pre",{children:i==null?void 0:i.error}):c?s.jsx(w,{}):s.jsx(A,{title:`게시글 등록 ${u} ${c?"...":""}`,className:O,bordered:!0,children:s.jsxs(e,{initialValues:g,layout:"vertical",form:b,onFinish:o=>{l[u]("/post",o).then(t=>{d.success(s.jsx(F.Paragraph,{ellipsis:{rows:3},style:{maxWidth:"90vw"},children:JSON.stringify(t)})),h(),p("..")}).catch(t=>d.error(JSON.stringify(t)))},children:[s.jsx(e.Item,{name:"id",hidden:!0,children:s.jsx(m,{})}),s.jsx(e.Item,{name:"title",label:"제목",rules:[{required:!0}],children:s.jsx(m,{tabIndex:1,autoFocus:!0})}),s.jsx(e.Item,{name:"categories",initialValue:[],children:s.jsx(B.Group,{options:x})}),s.jsx(e.Item,{name:"content",label:"내용",rules:[{required:!0}],children:s.jsx(q,{theme:"snow",tabIndex:1})}),s.jsx(e.Item,{children:s.jsx(Q,{htmlType:"submit",children:"저장"})})]})})}const O=T`
  margin: 2em;
`;export{J as default};