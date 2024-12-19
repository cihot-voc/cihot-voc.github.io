import{r as i,g as Y,m as Z,a as N,u as z,bl as V,C as G,a7 as ee,ao as oe,am as W,aq as te,c as L,bR as re,bQ as ne,b6 as ie,ap as le,p as ae}from"../web.js";import{u as de,C as se}from"./useBubbleLock-CGne4fs5.js";const F=i.createContext(null),ce=F.Provider,X=i.createContext(null),ue=X.Provider,be=t=>{const{componentCls:r,antCls:n}=t,o=`${r}-group`;return{[o]:Object.assign(Object.assign({},N(t)),{display:"inline-block",fontSize:0,[`&${o}-rtl`]:{direction:"rtl"},[`&${o}-block`]:{display:"flex"},[`${n}-badge ${n}-badge-count`]:{zIndex:1},[`> ${n}-badge:not(:first-child) > ${n}-button-wrapper`]:{borderInlineStart:"none"}})}},ge=t=>{const{componentCls:r,wrapperMarginInlineEnd:n,colorPrimary:o,radioSize:e,motionDurationSlow:s,motionDurationMid:g,motionEaseInOutCirc:p,colorBgContainer:c,colorBorder:f,lineWidth:x,colorBgContainerDisabled:S,colorTextDisabled:I,paddingXS:v,dotColorDisabled:k,lineType:y,radioColor:b,radioBgColor:m,calc:u}=t,C=`${r}-inner`,O=u(e).sub(u(4).mul(2)),a=u(1).mul(e).equal({unit:!0});return{[`${r}-wrapper`]:Object.assign(Object.assign({},N(t)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:n,cursor:"pointer",[`&${r}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:t.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},"&-block":{flex:1,justifyContent:"center"},[`${r}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${z(x)} ${y} ${o}`,borderRadius:"50%",visibility:"hidden",opacity:0,content:'""'},[r]:Object.assign(Object.assign({},N(t)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${r}-wrapper:hover &,
        &:hover ${C}`]:{borderColor:o},[`${r}-input:focus-visible + ${C}`]:Object.assign({},V(t)),[`${r}:hover::after, ${r}-wrapper:hover &::after`]:{visibility:"visible"},[`${r}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:a,height:a,marginBlockStart:u(1).mul(e).div(-2).equal({unit:!0}),marginInlineStart:u(1).mul(e).div(-2).equal({unit:!0}),backgroundColor:b,borderBlockStart:0,borderInlineStart:0,borderRadius:a,transform:"scale(0)",opacity:0,transition:`all ${s} ${p}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:a,height:a,backgroundColor:c,borderColor:f,borderStyle:"solid",borderWidth:x,borderRadius:"50%",transition:`all ${g}`},[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${r}-checked`]:{[C]:{borderColor:o,backgroundColor:m,"&::after":{transform:`scale(${t.calc(t.dotSize).div(e).equal()})`,opacity:1,transition:`all ${s} ${p}`}}},[`${r}-disabled`]:{cursor:"not-allowed",[C]:{backgroundColor:S,borderColor:f,cursor:"not-allowed","&::after":{backgroundColor:k}},[`${r}-input`]:{cursor:"not-allowed"},[`${r}-disabled + span`]:{color:I,cursor:"not-allowed"},[`&${r}-checked`]:{[C]:{"&::after":{transform:`scale(${u(O).div(e).equal()})`}}}},[`span${r} + *`]:{paddingInlineStart:v,paddingInlineEnd:v}})}},pe=t=>{const{buttonColor:r,controlHeight:n,componentCls:o,lineWidth:e,lineType:s,colorBorder:g,motionDurationSlow:p,motionDurationMid:c,buttonPaddingInline:f,fontSize:x,buttonBg:S,fontSizeLG:I,controlHeightLG:v,controlHeightSM:k,paddingXS:y,borderRadius:b,borderRadiusSM:m,borderRadiusLG:u,buttonCheckedBg:C,buttonSolidCheckedColor:$,colorTextDisabled:O,colorBgContainerDisabled:a,buttonCheckedBgDisabled:j,buttonCheckedColorDisabled:w,colorPrimary:R,colorPrimaryHover:E,colorPrimaryActive:l,buttonSolidCheckedBg:B,buttonSolidCheckedHoverBg:P,buttonSolidCheckedActiveBg:D,calc:h}=t;return{[`${o}-button-wrapper`]:{position:"relative",display:"inline-block",height:n,margin:0,paddingInline:f,paddingBlock:0,color:r,fontSize:x,lineHeight:z(h(n).sub(h(e).mul(2)).equal()),background:S,border:`${z(e)} ${s} ${g}`,borderBlockStartWidth:h(e).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:e,cursor:"pointer",transition:[`color ${c}`,`background ${c}`,`box-shadow ${c}`].join(","),a:{color:r},[`> ${o}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:h(e).mul(-1).equal(),insetInlineStart:h(e).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:e,paddingInline:0,backgroundColor:g,transition:`background-color ${p}`,content:'""'}},"&:first-child":{borderInlineStart:`${z(e)} ${s} ${g}`,borderStartStartRadius:b,borderEndStartRadius:b},"&:last-child":{borderStartEndRadius:b,borderEndEndRadius:b},"&:first-child:last-child":{borderRadius:b},[`${o}-group-large &`]:{height:v,fontSize:I,lineHeight:z(h(v).sub(h(e).mul(2)).equal()),"&:first-child":{borderStartStartRadius:u,borderEndStartRadius:u},"&:last-child":{borderStartEndRadius:u,borderEndEndRadius:u}},[`${o}-group-small &`]:{height:k,paddingInline:h(y).sub(e).equal(),paddingBlock:0,lineHeight:z(h(k).sub(h(e).mul(2)).equal()),"&:first-child":{borderStartStartRadius:m,borderEndStartRadius:m},"&:last-child":{borderStartEndRadius:m,borderEndEndRadius:m}},"&:hover":{position:"relative",color:R},"&:has(:focus-visible)":Object.assign({},V(t)),[`${o}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${o}-button-wrapper-disabled)`]:{zIndex:1,color:R,background:C,borderColor:R,"&::before":{backgroundColor:R},"&:first-child":{borderColor:R},"&:hover":{color:E,borderColor:E,"&::before":{backgroundColor:E}},"&:active":{color:l,borderColor:l,"&::before":{backgroundColor:l}}},[`${o}-group-solid &-checked:not(${o}-button-wrapper-disabled)`]:{color:$,background:B,borderColor:B,"&:hover":{color:$,background:P,borderColor:P},"&:active":{color:$,background:D,borderColor:D}},"&-disabled":{color:O,backgroundColor:a,borderColor:g,cursor:"not-allowed","&:first-child, &:hover":{color:O,backgroundColor:a,borderColor:g}},[`&-disabled${o}-button-wrapper-checked`]:{color:w,backgroundColor:j,borderColor:g,boxShadow:"none"},"&-block":{flex:1,textAlign:"center"}}}},Ce=t=>{const{wireframe:r,padding:n,marginXS:o,lineWidth:e,fontSizeLG:s,colorText:g,colorBgContainer:p,colorTextDisabled:c,controlItemBgActiveDisabled:f,colorTextLightSolid:x,colorPrimary:S,colorPrimaryHover:I,colorPrimaryActive:v,colorWhite:k}=t,y=4,b=s,m=r?b-y*2:b-(y+e)*2;return{radioSize:b,dotSize:m,dotColorDisabled:c,buttonSolidCheckedColor:x,buttonSolidCheckedBg:S,buttonSolidCheckedHoverBg:I,buttonSolidCheckedActiveBg:v,buttonBg:p,buttonCheckedBg:p,buttonColor:g,buttonCheckedBgDisabled:f,buttonCheckedColorDisabled:c,buttonPaddingInline:n-e,wrapperMarginInlineEnd:o,radioColor:r?S:k,radioBgColor:r?p:S}},Q=Y("Radio",t=>{const{controlOutline:r,controlOutlineWidth:n}=t,o=`0 0 0 ${z(n)} ${r}`,s=Z(t,{radioFocusShadow:o,radioButtonFocusShadow:o});return[be(s),ge(s),pe(s)]},Ce,{unitless:{radioSize:!0,dotSize:!0}});var he=function(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,o=Object.getOwnPropertySymbols(t);e<o.length;e++)r.indexOf(o[e])<0&&Object.prototype.propertyIsEnumerable.call(t,o[e])&&(n[o[e]]=t[o[e]]);return n};const fe=(t,r)=>{var n,o;const e=i.useContext(F),s=i.useContext(X),{getPrefixCls:g,direction:p,radio:c}=i.useContext(G),f=i.useRef(null),x=ee(r,f),{isFormItemInput:S}=i.useContext(oe),I=q=>{var T,M;(T=t.onChange)===null||T===void 0||T.call(t,q),(M=e==null?void 0:e.onChange)===null||M===void 0||M.call(e,q)},{prefixCls:v,className:k,rootClassName:y,children:b,style:m,title:u}=t,C=he(t,["prefixCls","className","rootClassName","children","style","title"]),$=g("radio",v),O=((e==null?void 0:e.optionType)||s)==="button",a=O?`${$}-button`:$,j=W($),[w,R,E]=Q($,j),l=Object.assign({},C),B=i.useContext(te);e&&(l.name=e.name,l.onChange=I,l.checked=t.value===e.value,l.disabled=(n=l.disabled)!==null&&n!==void 0?n:e.disabled),l.disabled=(o=l.disabled)!==null&&o!==void 0?o:B;const P=L(`${a}-wrapper`,{[`${a}-wrapper-checked`]:l.checked,[`${a}-wrapper-disabled`]:l.disabled,[`${a}-wrapper-rtl`]:p==="rtl",[`${a}-wrapper-in-form-item`]:S,[`${a}-wrapper-block`]:!!(e!=null&&e.block)},c==null?void 0:c.className,k,y,R,E,j),[D,h]=de(l.onClick);return w(i.createElement(re,{component:"Radio",disabled:l.disabled},i.createElement("label",{className:P,style:Object.assign(Object.assign({},c==null?void 0:c.style),m),onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,title:u,onClick:D},i.createElement(se,Object.assign({},l,{className:L(l.className,{[ne]:!O}),type:"radio",prefixCls:a,ref:x,onClick:h})),b!==void 0?i.createElement("span",null,b):null)))},_=i.forwardRef(fe),me=i.forwardRef((t,r)=>{const{getPrefixCls:n,direction:o}=i.useContext(G),{prefixCls:e,className:s,rootClassName:g,options:p,buttonStyle:c="outline",disabled:f,children:x,size:S,style:I,id:v,optionType:k,name:y,defaultValue:b,value:m,block:u=!1,onChange:C,onMouseEnter:$,onMouseLeave:O,onFocus:a,onBlur:j}=t,[w,R]=ie(b,{value:m}),E=i.useCallback(d=>{const U=w,A=d.target.value;"value"in t||R(A),A!==U&&(C==null||C(d))},[w,R,C]),l=n("radio",e),B=`${l}-group`,P=W(l),[D,h,q]=Q(l,P);let T=x;p&&p.length>0&&(T=p.map(d=>typeof d=="string"||typeof d=="number"?i.createElement(_,{key:d.toString(),prefixCls:l,disabled:f,value:d,checked:w===d},d):i.createElement(_,{key:`radio-group-value-options-${d.value}`,prefixCls:l,disabled:d.disabled||f,value:d.value,checked:w===d.value,title:d.title,style:d.style,id:d.id,required:d.required},d.label)));const M=le(S),J=L(B,`${B}-${c}`,{[`${B}-${M}`]:M,[`${B}-rtl`]:o==="rtl",[`${B}-block`]:u},s,g,h,q,P),K=i.useMemo(()=>({onChange:E,value:w,disabled:f,name:y,optionType:k,block:u}),[E,w,f,y,k,u]);return D(i.createElement("div",Object.assign({},ae(t,{aria:!0,data:!0}),{className:J,style:I,onMouseEnter:$,onMouseLeave:O,onFocus:a,onBlur:j,id:v,ref:r}),i.createElement(ce,{value:K},T)))}),Se=i.memo(me);var ve=function(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,o=Object.getOwnPropertySymbols(t);e<o.length;e++)r.indexOf(o[e])<0&&Object.prototype.propertyIsEnumerable.call(t,o[e])&&(n[o[e]]=t[o[e]]);return n};const ke=(t,r)=>{const{getPrefixCls:n}=i.useContext(G),{prefixCls:o}=t,e=ve(t,["prefixCls"]),s=n("radio",o);return i.createElement(ue,{value:"button"},i.createElement(_,Object.assign({prefixCls:s},e,{type:"radio",ref:r})))},ye=i.forwardRef(ke),H=_;H.Button=ye;H.Group=Se;H.__ANT_RADIO=!0;export{H as R};