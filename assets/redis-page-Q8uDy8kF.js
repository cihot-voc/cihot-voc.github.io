import{F as a,r as d,j as e,i,B as h,A as n}from"../web.js";import{R as x}from"./index-DgZBu0-b.js";import{F as b}from"./Table-DNa1AAiZ.js";import"./useBubbleLock-Kz7pQh5h.js";import"./index-ejgHpRPS.js";import"./dropdown-BySDfBJe.js";import"./DownOutlined-Bre27_U7.js";import"./index-C-CKWqDQ.js";import"./index-Cq2plmkM.js";const m=["get","set","del","getKeys","list.push","list.pop","list.get","list.del"],f=m[0],j=[{title:"Key",dataIndex:"key",key:"key"}];function B(){const[u]=a.useForm(),[l,p]=d.useState([]),[y,c]=d.useState(null),g=async({sendType:o,...s})=>{switch(console.debug(s),o){case"set":{const t=await n.redis.string.set(s.key,s.value);console.debug(t.data);break}case"get":{const t=await n.redis.string.get(s.key);console.debug(t.data);break}case"getKeys":{const t=await n.redis.string.getKeys(s.key);console.debug(t.data),c(null),p(t.data.map(r=>({key:r})));break}}};return e.jsxs(e.Fragment,{children:[e.jsxs(a,{form:u,onFinish:g,children:[e.jsx(a.Item,{label:"Send Type",name:"sendType",initialValue:f,children:e.jsx(x.Group,{options:m})}),e.jsx(a.Item,{label:"Key",name:"key",children:e.jsx(i,{})}),e.jsx(a.Item,{label:"Value",name:"value",children:e.jsx(i,{})}),e.jsx(h,{htmlType:"submit",children:"Confirm"})]}),e.jsx(i.Search,{placeholder:"Search keys",onSearch:(o,s)=>{let t=!1;(s==null?void 0:s.nativeEvent)instanceof KeyboardEvent&&(t=s.nativeEvent.altKey),c(l.filter(r=>r.key.includes(o)!==t))},style:{marginBottom:16}}),e.jsx(b,{dataSource:y??l,columns:j,size:"small"})]})}export{B as default};