import{F as a,r as d,j as e,i,B as h,A as n}from"../web.js";import{R as x}from"./index-D1GW4F26.js";import{F as b}from"./Table-Qq_R4DkJ.js";import"./useBubbleLock-p8oIxmFz.js";import"./styleChecker-DjwUci1A.js";import"./index-AROoAIfj.js";import"./dropdown-QIiZhNxb.js";import"./DownOutlined-BOejTe-8.js";import"./index-d5N8vm3K.js";import"./index-Ca2pGdAr.js";const m=["get","set","del","getKeys","list.push","list.pop","list.get","list.del"],f=m[0],j=[{title:"Key",dataIndex:"key",key:"key"}];function D(){const[u]=a.useForm(),[l,p]=d.useState([]),[y,c]=d.useState(null),g=async({sendType:o,...t})=>{switch(console.debug(t),o){case"set":{const s=await n.redis.string.set(t.key,t.value);console.debug(s.data);break}case"get":{const s=await n.redis.string.get(t.key);console.debug(s.data);break}case"getKeys":{const s=await n.redis.string.getKeys(t.key);console.debug(s.data),c(null),p(s.data.map(r=>({key:r})));break}}};return e.jsxs(e.Fragment,{children:[e.jsxs(a,{form:u,onFinish:g,children:[e.jsx(a.Item,{label:"Send Type",name:"sendType",initialValue:f,children:e.jsx(x.Group,{options:m})}),e.jsx(a.Item,{label:"Key",name:"key",children:e.jsx(i,{})}),e.jsx(a.Item,{label:"Value",name:"value",children:e.jsx(i,{})}),e.jsx(h,{htmlType:"submit",children:"Confirm"})]}),e.jsx(i.Search,{placeholder:"Search keys",onSearch:(o,t)=>{let s=!1;(t==null?void 0:t.nativeEvent)instanceof KeyboardEvent&&(s=t.nativeEvent.altKey),c(l.filter(r=>r.key.includes(o)!==s))},style:{marginBottom:16}}),e.jsx(b,{dataSource:y??l,columns:j,size:"small"})]})}export{D as default};