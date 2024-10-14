import{ag as B,ah as P,ai as D,x as f,r as h,C as k,j as W,bu as t,bH as C,bI as x,bz as $,bJ as G,bq as R,bK as S,B as U,bp as O,bB as _,bL as J,bM as q,bN as F}from"../app.js";import{d as V,A as T,S as K}from"./index-iwR7v8Cl.js";const X=e=>{const{componentCls:n,sizePaddingEdgeHorizontal:s,colorSplit:r,lineWidth:i,textPaddingInline:m,orientationMargin:c,verticalMarginInline:a}=e;return{[n]:Object.assign(Object.assign({},D(e)),{borderBlockStart:`${f(i)} solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:a,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${f(i)} solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${f(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${n}-with-text`]:{display:"flex",alignItems:"center",margin:`${f(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${f(i)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${n}-with-text-left`]:{"&::before":{width:`calc(${c} * 100%)`},"&::after":{width:`calc(100% - ${c} * 100%)`}},[`&-horizontal${n}-with-text-right`]:{"&::before":{width:`calc(100% - ${c} * 100%)`},"&::after":{width:`calc(${c} * 100%)`}},[`${n}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:m},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${f(i)} 0 0`},[`&-horizontal${n}-with-text${n}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${n}-dashed`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:r,borderStyle:"dotted",borderWidth:`${f(i)} 0 0`},[`&-horizontal${n}-with-text${n}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${n}-dotted`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${n}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${n}-with-text-left${n}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${n}-inner-text`]:{paddingInlineStart:s}},[`&-horizontal${n}-with-text-right${n}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${n}-inner-text`]:{paddingInlineEnd:s}}})}},Q=e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),Z=B("Divider",e=>{const n=P(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[X(n)]},Q,{unitless:{orientationMargin:!0}});var ee=function(e,n){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(s[r[i]]=e[r[i]]);return s};const te=e=>{const{getPrefixCls:n,direction:s,divider:r}=h.useContext(k),{prefixCls:i,type:m="horizontal",orientation:c="center",orientationMargin:a,className:l,rootClassName:b,children:u,dashed:j,variant:d="solid",plain:g,style:y}=e,p=ee(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),o=n("divider",i),[w,I,E]=Z(o),M=!!u,N=c==="left"&&a!=null,H=c==="right"&&a!=null,Y=W(o,r==null?void 0:r.className,I,E,`${o}-${m}`,{[`${o}-with-text`]:M,[`${o}-with-text-${c}`]:M,[`${o}-dashed`]:!!j,[`${o}-${d}`]:d!=="solid",[`${o}-plain`]:!!g,[`${o}-rtl`]:s==="rtl",[`${o}-no-default-orientation-margin-left`]:N,[`${o}-no-default-orientation-margin-right`]:H},l,b),z=h.useMemo(()=>typeof a=="number"?a:/^\d+$/.test(a)?Number(a):a,[a]),A=Object.assign(Object.assign({},N&&{marginLeft:z}),H&&{marginRight:z});return w(h.createElement("div",Object.assign({className:Y,style:Object.assign(Object.assign({},r==null?void 0:r.style),y)},p,{role:"separator"}),u&&m!=="vertical"&&h.createElement("span",{className:`${o}-inner-text`,style:A},u)))},v=e=>{if(e===null)return e;const n=new Date(e);return isNaN(n.getTime())?null:V(n)},ne=({data:e})=>{var n,s;return t.jsxs("div",{className:re,children:[t.jsx(T,{src:e.authorUser.avatar}),t.jsxs("div",{className:"right",children:[t.jsxs(C,{className:"info",children:[t.jsx(x,{className:"name",xs:24,md:12,children:e.authorUser.name}),t.jsx(x,{className:"datetime",xs:24,md:12,children:e.createdAt===e.updatedAt?(n=v(e.createdAt))==null?void 0:n.format("YYYY-MM-DD HH:mm 등록함"):(s=v(e.updatedAt))==null?void 0:s.format("YYYY-MM-DD HH:mm 수정함")})]}),t.jsx("div",{dangerouslySetInnerHTML:{__html:e.content??""}})]})]})},re=$`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 8px;

  .right {
    flex-grow: 1;
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: clamp(10vw, 50%, 30vw);
  }
`,{Paragraph:ie}=S;function oe({postId:e}){const{data:n,isSuccess:s,error:r}=G(e),i=R();return h.useEffect(()=>{console.debug({postId:e})},[e]),isNaN(e)?t.jsx("div",{children:"postId가 없습니다."}):r?t.jsx("div",{children:JSON.stringify(r)}):s?t.jsx("div",{className:se,children:t.jsxs(S,{children:[t.jsxs(ie,{type:"secondary",children:["공식 협의",t.jsx(U,{type:"link",onClick:()=>i("comments/create"),children:"글쓰기"})]}),n.map(m=>t.jsx(ne,{data:m},m.id))]})}):t.jsx(O,{})}const se=$`
  padding: 8px;
  border: 2px solid #ff01;

  .title {
    font-weight: bold;
  }

  min-height: 10em;
`;function ae(){return t.jsx("div",{className:le,children:t.jsx("div",{className:"title",children:"내부 협의"})})}const le=$`
  padding: 8px;
  border: 2px solid #ff01;

  .title {
    font-weight: bold;
  }

  min-height: 10em;
`,{Title:de,Text:L}=S;function ge(){var u,j;const e=_(),n=Number(e.postId),[s,r]=h.useState(""),{data:i,isSuccess:m,isError:c,error:a}=J(n),l=h.useMemo(()=>{const d=i==null?void 0:i.content,g=document.createElement("div");return typeof d=="string"&&d.length&&(g.innerHTML=d),g},[i]),b=h.useMemo(()=>Array.from(l.querySelectorAll("img")),[l]);return h.useEffect(()=>{b.forEach(d=>{var y;const g=d.getAttribute("src")??"";if(g){const p=Number((y=g.match(/^\/*(\d+)$/))==null?void 0:y[1]);isNaN(p)===!1&&p>0&&(d.src="/loading.gif",r(l.innerHTML),q(p).then(o=>{if(o instanceof Blob){console.debug(o);const w=URL.createObjectURL(o);d.src=w,console.debug(l.innerHTML),r(l.innerHTML)}}).catch(o=>{console.error(o),d.src="/no-image.png",r(l.innerHTML)}))}}),console.debug("content",s)},[b,r,s,l.innerHTML]),c?t.jsx("pre",{children:JSON.stringify(a)}):m?(console.debug("----",i.content),t.jsxs("div",{className:ce,children:[t.jsxs(S,{children:[t.jsx(de,{level:3,children:i.title}),t.jsxs(C,{gutter:[24,8],children:[t.jsx(x,{xs:24,sm:12,children:t.jsxs(K,{children:[t.jsx(T,{src:i.authorUser.avatar}),t.jsx(L,{type:"secondary",children:i.authorUser.name})]})}),t.jsx(x,{xs:24,sm:12,children:t.jsx(L,{type:"secondary",children:i.createdAt===i.updatedAt?(u=v(i.createdAt))==null?void 0:u.format("YYYY-MM-DD HH:mm 등록"):(j=v(i.updatedAt))==null?void 0:j.format("YYYY-MM-DD HH:mm 등록")})})]}),l.innerHTML?t.jsx("div",{className:"content",dangerouslySetInnerHTML:{__html:l.innerHTML}}):t.jsx("div",{className:"no-content",children:"내용 없음"})]}),t.jsx(te,{}),t.jsx(F,{}),t.jsxs(C,{gutter:[8,8],children:[t.jsx(x,{xs:24,md:12,children:t.jsx(oe,{postId:n})}),t.jsx(x,{xs:24,md:12,children:t.jsx(ae,{})})]})]})):t.jsx(O,{})}const ce=$`
  margin: 2em;

  .content {
    margin-top: 1em;
    padding: 8px;
  }

  .no-content {
    margin-top: 1em;
    opacity: 0.5;
    font-style: italic;
  }
`;export{ge as default};
