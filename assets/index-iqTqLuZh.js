import{j as u,ag as G,ah as F,R as f,C as E,ad as P}from"../app.js";function p(e){return["small","middle","large"].includes(e)}function q(e){return e?typeof e=="number"&&!Number.isNaN(e):!1}const m=["wrap","nowrap","wrap-reverse"],d=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],y=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],V=(e,t)=>{const a=t.wrap===!0?"wrap":t.wrap;return{[`${e}-wrap-${a}`]:a&&m.includes(a)}},I=(e,t)=>{const a={};return y.forEach(n=>{a[`${e}-align-${n}`]=t.align===n}),a[`${e}-align-stretch`]=!t.align&&!!t.vertical,a},W=(e,t)=>{const a={};return d.forEach(n=>{a[`${e}-justify-${n}`]=t.justify===n}),a};function L(e,t){return u(Object.assign(Object.assign(Object.assign({},V(e,t)),I(e,t)),W(e,t)))}const R=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},A=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},D=e=>{const{componentCls:t}=e,a={};return m.forEach(n=>{a[`${t}-wrap-${n}`]={flexWrap:n}}),a},J=e=>{const{componentCls:t}=e,a={};return y.forEach(n=>{a[`${t}-align-${n}`]={alignItems:n}}),a},M=e=>{const{componentCls:t}=e,a={};return d.forEach(n=>{a[`${t}-justify-${n}`]={justifyContent:n}}),a},T=()=>({}),_=G("Flex",e=>{const{paddingXS:t,padding:a,paddingLG:n}=e,l=F(e,{flexGapSM:t,flexGap:a,flexGapLG:n});return[R(l),A(l),D(l),J(l),M(l)]},T,{resetStyle:!1});var H=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]]);return a};const z=f.forwardRef((e,t)=>{const{prefixCls:a,rootClassName:n,className:l,style:x,flex:g,gap:o,children:C,vertical:c=!1,component:S="div"}=e,j=H(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:s,direction:b,getPrefixCls:h}=f.useContext(E),r=h("flex",a),[v,w,$]=_(r),O=c??(s==null?void 0:s.vertical),N=u(l,n,s==null?void 0:s.className,r,w,$,L(r,e),{[`${r}-rtl`]:b==="rtl",[`${r}-gap-${o}`]:p(o),[`${r}-vertical`]:O}),i=Object.assign(Object.assign({},s==null?void 0:s.style),x);return g&&(i.flex=g),o&&!p(o)&&(i.gap=o),v(f.createElement(S,Object.assign({ref:t,className:N,style:i},P(j,["justify","wrap","align"])),C))});export{z as F,q as a,p as i};
