import{H as i,F as s,K as u,A as m,j as e,i as l,B as p}from"../web.js";import{I as d}from"./css-C3h7-5aW.js";import{u as h,c as j}from"./use-yup-params-Dnhb_jxx.js";function F(){const a=i(),[n]=s.useForm(),{projectId:t}=h({projectId:j().required()}),{mutateAsync:r}=u(m.channels.create.bind(null,t),{onSuccess:()=>{a(`/projects/${t}`,{replace:!0})}}),o=c=>{r(c)};return e.jsx("div",{className:d,children:e.jsxs(s,{form:n,onFinish:o,children:[e.jsx(s.Item,{label:"Name",name:"name",children:e.jsx(l,{autoFocus:!0})}),e.jsx(s.Item,{children:e.jsx(p,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}export{F as default};
