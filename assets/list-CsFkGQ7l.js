import{l as u,n as x,s as j,j as e,H as f,T as y,B as a,J as g,A as i}from"../web.js";import{u as I}from"./use-yup-params-8nHEo682.js";import{r as R,a as h}from"./render-CHjv3IOU.js";import{c as k}from"./index.esm-CnD8eApZ.js";import{F as A}from"./Table-DNa1AAiZ.js";import{R as L}from"./EditFilled-CAVP73L2.js";import{R as $}from"./DeleteOutlined-DRPUzII6.js";import"./index-CYjZiiai.js";import"./index-ejgHpRPS.js";import"./dropdown-BySDfBJe.js";import"./DownOutlined-Bre27_U7.js";import"./index-C-CKWqDQ.js";import"./index-Cq2plmkM.js";import"./useBubbleLock-Kz7pQh5h.js";import"./index-DgZBu0-b.js";function M(){const s=u(),{projectId:t}=I({projectId:k().default(0)}),{data:n,isLoading:d,refetch:l}=x(["role","list",t],()=>i.roles.getList(t),{enabled:t>0}),{mutateAsync:p,isLoading:c}=j(({projectId:o,roleId:r})=>i.roles.delete(o,r),{onSuccess:()=>{l()}}),m=[{key:"roleId",title:"ID",dataIndex:"roleId",width:50},{key:"name",title:"Name",dataIndex:"name",render:R},{key:"updatedAt",title:"시간",dataIndex:"updatedAt",render:h,width:140},{key:"actions",dataIndex:"roleId",render:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{type:"link",onClick:r=>{r.stopPropagation(),s(`/projects/${t}/roles/${o}/update`)},children:e.jsx(L,{})}),e.jsx(a,{loading:c,type:"text",icon:e.jsx($,{}),danger:!0,onClick:r=>{r.stopPropagation(),p({projectId:t,roleId:o})}})]}),width:80}];return e.jsx("div",{children:e.jsx(A,{dataSource:n,rowKey:"roleId",loading:d,columns:m,tableLayout:"fixed",title:()=>e.jsxs(f,{justify:"space-between",children:[e.jsx(y.Text,{children:"Roles"}),e.jsx(a,{type:"primary",onClick:()=>s(`/projects/${t}/roles/create`),icon:e.jsx(g,{})})]}),onRow:({roleId:o})=>({style:{cursor:"pointer"},onClick:()=>s(`/projects/${t}/roles/${o}`)})})})}export{M as default};
