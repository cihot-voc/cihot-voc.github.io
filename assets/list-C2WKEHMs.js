import{D as m,q as j,r as x,j as t,T as I,E as i,B as a,A as s,L as u}from"../web.js";import{I as f}from"./css-C3h7-5aW.js";import{S as g}from"./index-d5N8vm3K.js";import{R as h}from"./EditFilled-CAVP73L2.js";import{R as y}from"./DeleteFilled-CRc1QtDf.js";import{M as w}from"./index-Dxy10mYI.js";import{F as k}from"./Table-Qq_R4DkJ.js";import"./dropdown-QIiZhNxb.js";import"./styleChecker-DjwUci1A.js";import"./index-AROoAIfj.js";import"./DownOutlined-BOejTe-8.js";import"./index-Ca2pGdAr.js";import"./useBubbleLock-p8oIxmFz.js";import"./index-D1GW4F26.js";function b(){const n=m(),{data:c,isLoading:d,refetch:o}=j(["project","list"],s.projects.getList,{enabled:!0}),p=x.useMemo(()=>[{title:"ID",width:100,align:"center",dataIndex:"projectId",key:"projectId"},{title:"Title",dataIndex:"title",key:"title"},{title:"Description",dataIndex:"description",key:"description"},{title:"User ID",width:100,align:"center",dataIndex:"userId",key:"userId"},{title:"Updated At",width:150,align:"center",dataIndex:"updatedAt",key:"updatedAt",render:(e,{createdAt:r})=>t.jsx(I,{title:i(e).format("YYYY-MM-DD hh:mm:ss"),children:t.jsxs(g,{children:[i(e).fromNow(),e!==r&&t.jsx(h,{})]})})},{title:"Action",width:100,align:"center",key:"action",dataIndex:"projectId",render:e=>t.jsx(a,{icon:t.jsx(y,{}),type:"text",danger:!0,onClick:r=>{r.preventDefault(),r.stopPropagation(),w.confirm({title:"삭제",content:"정말 삭제하시겠습니까?",onOk:async()=>{await s.projects.delete(e),await o()}})}})}],[o]),l=e=>({style:{cursor:"pointer"},onClick:()=>{n(`/projects/${e.projectId}`),console.log("record",e)}});return t.jsxs("div",{className:f,children:[t.jsx("div",{children:t.jsx(u,{to:"/projects/create",children:t.jsx(a,{type:"primary",style:{marginBottom:16},children:"Create"})})}),t.jsx(k,{loading:d,dataSource:c,columns:p,onRow:l,rowKey:"projectId"})]})}export{b as default};
