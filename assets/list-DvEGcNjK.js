import{l as b,at as k,r as j,au as l,av as I,j as e,H as S,F as u,i as M,B as c,f as y,o as F,q as f,aw as v}from"../web.js";import{l as T}from"./css-BRyxPvm2.js";import{P as z,F as A}from"./Table-DNa1AAiZ.js";import{A as E}from"./index-BkK6py1q.js";import{S as $}from"./index-C-CKWqDQ.js";import{M as B}from"./index-BwshqLmk.js";import"./index-ejgHpRPS.js";import"./dropdown-BySDfBJe.js";import"./DownOutlined-Bre27_U7.js";import"./index-Cq2plmkM.js";import"./useBubbleLock-Kz7pQh5h.js";import"./index-DgZBu0-b.js";import"./index-CYjZiiai.js";const N=()=>{const r=b(),o=k(),s=j.useMemo(()=>l.parse(o.search.slice(1)),[o]);return{to:r,location:o,search:s,setSearch:d=>r("?"+l.stringify({...s,...d}),{replace:!0})}},{Content:R}=y;function Z(){var p,x,g;const{to:r,search:o,setSearch:s}=N(),{data:n,isLoading:d,isSuccess:h,refetch:m}=I({...o});j.useEffect(()=>{m({cancelRefetch:!0})},[o,m]);const w=h?e.jsx(z,{total:n.pagination.totalCount}):null,P=[{title:"ID",dataIndex:"id",width:80},{title:"제목",dataIndex:"title",width:300},{title:"상태",dataIndex:"status",width:100},{title:"사용자",dataIndex:"authorUser",width:100,render:t=>e.jsx(E,{src:t.avatar})},{title:"시간",dataIndex:"createdAt",width:"7em",render:(t,a)=>e.jsx(e.Fragment,{children:e.jsx(F,{title:f(a.updatedAt).format(`MM-DD
hh:mm`),children:f(t).format("MM-DD hh:mm")})})},{title:"관리",dataIndex:"id",width:100,render:t=>e.jsxs($,{direction:"horizontal",children:[e.jsx(c,{size:"small",onClick:()=>{r(`${t}`)},children:"수정"}),e.jsx(c,{size:"small",type:"link",danger:!0,onClick:()=>{B.confirm({content:`삭제 id - ${t}`,okText:"삭제",okButtonProps:{type:"dashed",danger:!0},onOk:async()=>{await v.delete("/post",{params:{ids:[t]}}),await m()}})},children:"삭제"})]})}],C=(t,a,i)=>{console.debug({pagination:t,filters:a,sorter:i})};return e.jsxs("div",{className:T,children:[e.jsxs(S,{justify:"space-between",children:[e.jsxs(u,{onFinish:t=>void s(t),layout:"inline",children:[e.jsx(u.Item,{name:"keyword",children:e.jsx(M,{name:"keyword"})}),e.jsx(u.Item,{children:e.jsx(c,{htmlType:"submit",children:"검색"})})]}),e.jsx(c,{type:"primary",onClick:()=>{r("create")},children:"등록"})]}),h&&e.jsx(y,{children:e.jsxs(R,{children:[w,e.jsx(A,{size:"small",loading:d,columns:P,rowKey:"id",pagination:{position:["bottomCenter"],current:(p=n==null?void 0:n.pagination)==null?void 0:p.currentPage,total:(x=n==null?void 0:n.pagination)==null?void 0:x.totalCount,pageSize:(g=n==null?void 0:n.pagination)==null?void 0:g.perPage,onChange(t,a){console.debug({page:t,pageSize:a}),console.debug(l.stringify({currentPage:t,perPage:a})),r(`/projects?${l.stringify({currentPage:t,perPage:a})}`,{replace:!0})},pageSizeOptions:[10,50,100,500,1e3],defaultPageSize:10},dataSource:n==null?void 0:n.posts,onRow:t=>({style:{cursor:"pointer"},onClick(a){const i=a.target;if(i instanceof HTMLElement&&i.matches(".ant-input *, .ant-btn *")){a.preventDefault();return}r(`./${t.id}`)}}),onChange:C})]})})]})}export{Z as default};
