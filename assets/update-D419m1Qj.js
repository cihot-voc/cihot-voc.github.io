import{l as p,F as a,n as h,s as j,A as c,j as e,i as I,B as x}from"../web.js";import{u as b}from"./use-yup-params-8nHEo682.js";import{c as o}from"./index.esm-CnD8eApZ.js";function y(){const u=p(),{projectId:n,channelId:t}=b({projectId:o().required(),channelId:o().required()}),[i]=a.useForm(),{data:s}=h(`channel-${t}`,()=>c.channels.get(n,t),{onSuccess:r=>{i.setFieldsValue(r)}}),{mutateAsync:d,isLoading:l}=j(c.channels.update.bind(null,n,t),{onSuccess:()=>{u(`/projects/${n}/channels`,{replace:!0})}}),m=r=>{d(r)};return e.jsx("div",{children:e.jsxs(a,{form:i,onFinish:m,children:[e.jsx(a.Item,{label:"ID",children:s==null?void 0:s.channelId}),e.jsx(a.Item,{label:"PID",children:s==null?void 0:s.projectId}),e.jsx(a.Item,{label:"Name",name:"name",children:e.jsx(I,{autoFocus:!0})}),e.jsx(a.Item,{children:e.jsx(x,{type:"primary",htmlType:"submit",disabled:l,children:"Submit"})})]})})}export{y as default};