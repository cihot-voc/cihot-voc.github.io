import{bv as R,bY as je,r as a,ar as Te,b2 as ue,C as K,c as T,bZ as Ee,b_ as pe,t as He,b$ as Me,b0 as U,d as Z,T as De,c0 as Re,bQ as Ne,ap as Ae,u as b,b3 as Le,by as We,g as ge,m as te,bu as _e,bW as G,bG as be,aP as ne,a as $e,a7 as re,ai as Xe,c1 as ke,aH as ve,c2 as qe,az as fe,aj as he,c3 as Ve,bX as Ge,bw as Fe,c4 as Ye,bS as Ke,bT as Ue,bU as Ze,bV as Je,bH as Qe,b as ie,bK as et,bJ as tt,aU as ot,c5 as nt,c6 as rt,aI as it,b9 as at,br as lt}from"../web.js";const st=new R("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),dt=new R("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),ct=new R("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),mt=new R("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),ut=new R("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),pt=new R("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),gt=new R("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),bt=new R("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),$t={"move-up":{inKeyframes:gt,outKeyframes:bt},"move-down":{inKeyframes:st,outKeyframes:dt},"move-left":{inKeyframes:ct,outKeyframes:mt},"move-right":{inKeyframes:ut,outKeyframes:pt}},ae=(t,o)=>{const{antCls:e}=t,r=`${e}-${o}`,{inKeyframes:n,outKeyframes:l}=$t[o];return[je(r,n,l,t.motionDurationMid),{[`
        ${r}-enter,
        ${r}-appear
      `]:{opacity:0,animationTimingFunction:t.motionEaseOutCirc},[`${r}-leave`]:{animationTimingFunction:t.motionEaseInOutCirc}}]};function vt(t){return o=>a.createElement(Te,{theme:{token:{motion:!1,zIndexPopupBase:0}}},a.createElement(t,Object.assign({},o)))}const ft=(t,o,e,r)=>vt(l=>{const{prefixCls:i,style:d}=l,s=a.useRef(null),[u,f]=a.useState(0),[v,p]=a.useState(0),[m,c]=ue(!1,{value:l.open}),{getPrefixCls:g}=a.useContext(K),$=g(o||"select",i);a.useEffect(()=>{if(c(!0),typeof ResizeObserver<"u"){const P=new ResizeObserver(S=>{const w=S[0].target;f(w.offsetHeight+8),p(w.offsetWidth)}),I=setInterval(()=>{var S;const w=e?`.${e($)}`:`.${$}-dropdown`,j=(S=s.current)===null||S===void 0?void 0:S.querySelector(w);j&&(clearInterval(I),P.observe(j))},10);return()=>{clearInterval(I),P.disconnect()}}},[]);let C=Object.assign(Object.assign({},l),{style:Object.assign(Object.assign({},d),{margin:0}),open:m,visible:m,getPopupContainer:()=>s.current});r&&(C=r(C));const x={paddingBottom:u,position:"relative",minWidth:v};return a.createElement("div",{ref:s,style:x},a.createElement(t,Object.assign({},C)))}),F=a.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var ht=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]]);return e};const Ie=t=>{const{prefixCls:o,className:e,dashed:r}=t,n=ht(t,["prefixCls","className","dashed"]),{getPrefixCls:l}=a.useContext(K),i=l("menu",o),d=T({[`${i}-item-divider-dashed`]:!!r},e);return a.createElement(Ee,Object.assign({className:d},n))},Ce=t=>{var o;const{className:e,children:r,icon:n,title:l,danger:i,extra:d}=t,{prefixCls:s,firstLevel:u,direction:f,disableMenuItemTitleTooltip:v,inlineCollapsed:p}=a.useContext(F),m=P=>{const I=r==null?void 0:r[0],S=a.createElement("span",{className:T(`${s}-title-content`,{[`${s}-title-content-with-extra`]:!!d||d===0})},r);return(!n||a.isValidElement(r)&&r.type==="span")&&r&&P&&u&&typeof I=="string"?a.createElement("div",{className:`${s}-inline-collapsed-noicon`},I.charAt(0)):S},{siderCollapsed:c}=a.useContext(pe);let g=l;typeof l>"u"?g=u?r:"":l===!1&&(g="");const $={title:g};!c&&!p&&($.title=null,$.open=!1);const C=He(r).length;let x=a.createElement(Me,Object.assign({},U(t,["title","icon","danger"]),{className:T({[`${s}-item-danger`]:i,[`${s}-item-only-child`]:(n?C+1:C)===1},e),title:typeof l=="string"?l:void 0}),Z(n,{className:T(a.isValidElement(n)?(o=n.props)===null||o===void 0?void 0:o.className:"",`${s}-item-icon`)}),m(p));return v||(x=a.createElement(De,Object.assign({},$,{placement:f==="rtl"?"left":"right",overlayClassName:`${s}-inline-collapsed-tooltip`}),x)),x};var It=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]]);return e};const Y=a.createContext(null),Ct=a.forwardRef((t,o)=>{const{children:e}=t,r=It(t,["children"]),n=a.useContext(Y),l=a.useMemo(()=>Object.assign(Object.assign({},n),r),[n,r.prefixCls,r.mode,r.selectable,r.rootClassName]),i=Re(e),d=Ne(o,i?e.ref:null);return a.createElement(Y.Provider,{value:l},a.createElement(Ae,{space:!0},i?a.cloneElement(e,{ref:d}):e))}),St=t=>{const{componentCls:o,motionDurationSlow:e,horizontalLineHeight:r,colorSplit:n,lineWidth:l,lineType:i,itemPaddingInline:d}=t;return{[`${o}-horizontal`]:{lineHeight:r,border:0,borderBottom:`${b(l)} ${i} ${n}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${o}-item, ${o}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:d},[`> ${o}-item:hover,
        > ${o}-item-active,
        > ${o}-submenu ${o}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${o}-item, ${o}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${o}-submenu-arrow`]:{display:"none"}}}},yt=t=>{let{componentCls:o,menuArrowOffset:e,calc:r}=t;return{[`${o}-rtl`]:{direction:"rtl"},[`${o}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${o}-rtl${o}-vertical,
    ${o}-submenu-rtl ${o}-vertical`]:{[`${o}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${b(r(e).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${b(e)})`}}}}},le=t=>Object.assign({},Le(t)),se=(t,o)=>{const{componentCls:e,itemColor:r,itemSelectedColor:n,groupTitleColor:l,itemBg:i,subMenuItemBg:d,itemSelectedBg:s,activeBarHeight:u,activeBarWidth:f,activeBarBorderWidth:v,motionDurationSlow:p,motionEaseInOut:m,motionEaseOut:c,itemPaddingInline:g,motionDurationMid:$,itemHoverColor:C,lineType:x,colorSplit:P,itemDisabledColor:I,dangerItemColor:S,dangerItemHoverColor:w,dangerItemSelectedColor:j,dangerItemActiveBg:E,dangerItemSelectedBg:h,popupBg:B,itemHoverBg:M,itemActiveBg:H,menuSubMenuBg:z,horizontalItemSelectedColor:y,horizontalItemSelectedBg:N,horizontalItemBorderRadius:_,horizontalItemHoverBg:A}=t;return{[`${e}-${o}, ${e}-${o} > ${e}`]:{color:r,background:i,[`&${e}-root:focus-visible`]:Object.assign({},le(t)),[`${e}-item`]:{"&-group-title, &-extra":{color:l}},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:n}},[`${e}-item, ${e}-submenu-title`]:{color:r,[`&:not(${e}-item-disabled):focus-visible`]:Object.assign({},le(t))},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${I} !important`},[`${e}-item:not(${e}-item-selected):not(${e}-submenu-selected)`]:{[`&:hover, > ${e}-submenu-title:hover`]:{color:C}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:M},"&:active":{backgroundColor:H}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:M},"&:active":{backgroundColor:H}}},[`${e}-item-danger`]:{color:S,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:w}},[`&${e}-item:active`]:{background:E}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:n,[`&${e}-item-danger`]:{color:j},"a, a:hover":{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:s,[`&${e}-item-danger`]:{backgroundColor:h}},[`&${e}-submenu > ${e}`]:{backgroundColor:z},[`&${e}-popup > ${e}`]:{backgroundColor:B},[`&${e}-submenu-popup > ${e}`]:{backgroundColor:B},[`&${e}-horizontal`]:Object.assign(Object.assign({},o==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:v,marginTop:t.calc(v).mul(-1).equal(),marginBottom:0,borderRadius:_,"&::after":{position:"absolute",insetInline:g,bottom:0,borderBottom:`${b(u)} solid transparent`,transition:`border-color ${p} ${m}`,content:'""'},"&:hover, &-active, &-open":{background:A,"&::after":{borderBottomWidth:u,borderBottomColor:y}},"&-selected":{color:y,backgroundColor:N,"&:hover":{backgroundColor:N},"&::after":{borderBottomWidth:u,borderBottomColor:y}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${b(v)} ${x} ${P}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:d},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${b(f)} solid ${n}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${$} ${c}`,`opacity ${$} ${c}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:j}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${$} ${m}`,`opacity ${$} ${m}`].join(",")}}}}}},de=t=>{const{componentCls:o,itemHeight:e,itemMarginInline:r,padding:n,menuArrowSize:l,marginXS:i,itemMarginBlock:d,itemWidth:s,itemPaddingInline:u}=t,f=t.calc(l).add(n).add(i).equal();return{[`${o}-item`]:{position:"relative",overflow:"hidden"},[`${o}-item, ${o}-submenu-title`]:{height:e,lineHeight:b(e),paddingInline:u,overflow:"hidden",textOverflow:"ellipsis",marginInline:r,marginBlock:d,width:s},[`> ${o}-item,
            > ${o}-submenu > ${o}-submenu-title`]:{height:e,lineHeight:b(e)},[`${o}-item-group-list ${o}-submenu-title,
            ${o}-submenu-title`]:{paddingInlineEnd:f}}},wt=t=>{const{componentCls:o,iconCls:e,itemHeight:r,colorTextLightSolid:n,dropdownWidth:l,controlHeightLG:i,motionEaseOut:d,paddingXL:s,itemMarginInline:u,fontSizeLG:f,motionDurationFast:v,motionDurationSlow:p,paddingXS:m,boxShadowSecondary:c,collapsedWidth:g,collapsedIconSize:$}=t,C={height:r,lineHeight:b(r),listStylePosition:"inside",listStyleType:"disc"};return[{[o]:{"&-inline, &-vertical":Object.assign({[`&${o}-root`]:{boxShadow:"none"}},de(t))},[`${o}-submenu-popup`]:{[`${o}-vertical`]:Object.assign(Object.assign({},de(t)),{boxShadow:c})}},{[`${o}-submenu-popup ${o}-vertical${o}-sub`]:{minWidth:l,maxHeight:`calc(100vh - ${b(t.calc(i).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${o}-inline`]:{width:"100%",[`&${o}-root`]:{[`${o}-item, ${o}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${p}`,`background ${p}`,`padding ${v} ${d}`].join(","),[`> ${o}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${o}-sub${o}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${o}-submenu > ${o}-submenu-title`]:C,[`& ${o}-item-group-title`]:{paddingInlineStart:s}},[`${o}-item`]:C}},{[`${o}-inline-collapsed`]:{width:g,[`&${o}-root`]:{[`${o}-item, ${o}-submenu ${o}-submenu-title`]:{[`> ${o}-inline-collapsed-noicon`]:{fontSize:f,textAlign:"center"}}},[`> ${o}-item,
          > ${o}-item-group > ${o}-item-group-list > ${o}-item,
          > ${o}-item-group > ${o}-item-group-list > ${o}-submenu > ${o}-submenu-title,
          > ${o}-submenu > ${o}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${b(t.calc($).div(2).equal())} - ${b(u)})`,textOverflow:"clip",[`
            ${o}-submenu-arrow,
            ${o}-submenu-expand-icon
          `]:{opacity:0},[`${o}-item-icon, ${e}`]:{margin:0,fontSize:$,lineHeight:b(r),"+ span":{display:"inline-block",opacity:0}}},[`${o}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${o}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:n}},[`${o}-item-group-title`]:Object.assign(Object.assign({},We),{paddingInline:m})}}]},ce=t=>{const{componentCls:o,motionDurationSlow:e,motionDurationMid:r,motionEaseInOut:n,motionEaseOut:l,iconCls:i,iconSize:d,iconMarginInlineEnd:s}=t;return{[`${o}-item, ${o}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${e}`,`background ${e}`,`padding calc(${e} + 0.1s) ${n}`].join(","),[`${o}-item-icon, ${i}`]:{minWidth:d,fontSize:d,transition:[`font-size ${r} ${l}`,`margin ${e} ${n}`,`color ${e}`].join(","),"+ span":{marginInlineStart:s,opacity:1,transition:[`opacity ${e} ${n}`,`margin ${e}`,`color ${e}`].join(",")}},[`${o}-item-icon`]:Object.assign({},Xe()),[`&${o}-item-only-child`]:{[`> ${i}, > ${o}-item-icon`]:{marginInlineEnd:0}}},[`${o}-item-disabled, ${o}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${o}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},me=t=>{const{componentCls:o,motionDurationSlow:e,motionEaseInOut:r,borderRadius:n,menuArrowSize:l,menuArrowOffset:i}=t;return{[`${o}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:t.margin,width:l,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${r}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:t.calc(l).mul(.6).equal(),height:t.calc(l).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:n,transition:[`background ${e} ${r}`,`transform ${e} ${r}`,`top ${e} ${r}`,`color ${e} ${r}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${b(t.calc(i).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${b(i)})`}}}}},xt=t=>{const{antCls:o,componentCls:e,fontSize:r,motionDurationSlow:n,motionDurationMid:l,motionEaseInOut:i,paddingXS:d,padding:s,colorSplit:u,lineWidth:f,zIndexPopup:v,borderRadiusLG:p,subMenuItemBorderRadius:m,menuArrowSize:c,menuArrowOffset:g,lineType:$,groupTitleLineHeight:C,groupTitleFontSize:x}=t;return[{"":{[e]:Object.assign(Object.assign({},ne()),{"&-hidden":{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},$e(t)),ne()),{marginBottom:0,paddingInlineStart:0,fontSize:r,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${n} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:t.itemBorderRadius},[`${e}-item-group-title`]:{padding:`${b(d)} ${b(s)}`,fontSize:x,lineHeight:C,transition:`all ${n}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${n} ${i}`,`background ${n} ${i}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${n} ${i}`,`background ${n} ${i}`,`padding ${l} ${i}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${n} ${i}`,`padding ${n} ${i}`].join(",")},[`${e}-title-content`]:{transition:`color ${n}`,"&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},[`> ${o}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"},[`${e}-item-extra`]:{marginInlineStart:"auto",paddingInlineStart:t.padding,fontSize:t.fontSizeSM}},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:u,borderStyle:$,borderWidth:0,borderTopWidth:f,marginBlock:f,padding:0,"&-dashed":{borderStyle:"dashed"}}}),ce(t)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${b(t.calc(r).mul(2).equal())} ${b(s)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:v,borderRadius:p,boxShadow:"none",transformOrigin:"0 0",[`&${e}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${e}`]:Object.assign(Object.assign(Object.assign({borderRadius:p},ce(t)),me(t)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:m},[`${e}-submenu-title::after`]:{transition:`transform ${n} ${i}`}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:t.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:t.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:t.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:t.paddingXS}}}),me(t)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${b(g)})`},"&::after":{transform:`rotate(45deg) translateX(${b(t.calc(g).mul(-1).equal())})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(${b(t.calc(c).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${b(t.calc(g).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${b(g)})`}}})},{[`${o}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},Ot=t=>{var o,e,r;const{colorPrimary:n,colorError:l,colorTextDisabled:i,colorErrorBg:d,colorText:s,colorTextDescription:u,colorBgContainer:f,colorFillAlter:v,colorFillContent:p,lineWidth:m,lineWidthBold:c,controlItemBgActive:g,colorBgTextHover:$,controlHeightLG:C,lineHeight:x,colorBgElevated:P,marginXXS:I,padding:S,fontSize:w,controlHeightSM:j,fontSizeLG:E,colorTextLightSolid:h,colorErrorHover:B}=t,M=(o=t.activeBarWidth)!==null&&o!==void 0?o:0,H=(e=t.activeBarBorderWidth)!==null&&e!==void 0?e:m,z=(r=t.itemMarginInline)!==null&&r!==void 0?r:t.marginXXS,y=new re(h).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:t.zIndexPopupBase+50,radiusItem:t.borderRadiusLG,itemBorderRadius:t.borderRadiusLG,radiusSubMenuItem:t.borderRadiusSM,subMenuItemBorderRadius:t.borderRadiusSM,colorItemText:s,itemColor:s,colorItemTextHover:s,itemHoverColor:s,colorItemTextHoverHorizontal:n,horizontalItemHoverColor:n,colorGroupTitle:u,groupTitleColor:u,colorItemTextSelected:n,itemSelectedColor:n,colorItemTextSelectedHorizontal:n,horizontalItemSelectedColor:n,colorItemBg:f,itemBg:f,colorItemBgHover:$,itemHoverBg:$,colorItemBgActive:p,itemActiveBg:g,colorSubItemBg:v,subMenuItemBg:v,colorItemBgSelected:g,itemSelectedBg:g,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:M,colorActiveBarHeight:c,activeBarHeight:c,colorActiveBarBorderSize:m,activeBarBorderWidth:H,colorItemTextDisabled:i,itemDisabledColor:i,colorDangerItemText:l,dangerItemColor:l,colorDangerItemTextHover:l,dangerItemHoverColor:l,colorDangerItemTextSelected:l,dangerItemSelectedColor:l,colorDangerItemBgActive:d,dangerItemActiveBg:d,colorDangerItemBgSelected:d,dangerItemSelectedBg:d,itemMarginInline:z,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:C,groupTitleLineHeight:x,collapsedWidth:C*2,popupBg:P,itemMarginBlock:I,itemPaddingInline:S,horizontalLineHeight:`${C*1.15}px`,iconSize:w,iconMarginInlineEnd:j-w,collapsedIconSize:E,groupTitleFontSize:w,darkItemDisabledColor:new re(h).setAlpha(.25).toRgbString(),darkItemColor:y,darkDangerItemColor:l,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:h,darkItemSelectedBg:n,darkDangerItemSelectedBg:l,darkItemHoverBg:"transparent",darkGroupTitleColor:y,darkItemHoverColor:h,darkDangerItemHoverColor:B,darkDangerItemSelectedColor:h,darkDangerItemActiveBg:l,itemWidth:M?`calc(100% + ${H}px)`:`calc(100% - ${z*2}px)`}},Bt=function(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return ge("Menu",n=>{const{colorBgElevated:l,controlHeightLG:i,fontSize:d,darkItemColor:s,darkDangerItemColor:u,darkItemBg:f,darkSubMenuItemBg:v,darkItemSelectedColor:p,darkItemSelectedBg:m,darkDangerItemSelectedBg:c,darkItemHoverBg:g,darkGroupTitleColor:$,darkItemHoverColor:C,darkItemDisabledColor:x,darkDangerItemHoverColor:P,darkDangerItemSelectedColor:I,darkDangerItemActiveBg:S,popupBg:w,darkPopupBg:j}=n,E=n.calc(d).div(7).mul(5).equal(),h=te(n,{menuArrowSize:E,menuHorizontalHeight:n.calc(i).mul(1.15).equal(),menuArrowOffset:n.calc(E).mul(.25).equal(),menuSubMenuBg:l,calc:n.calc,popupBg:w}),B=te(h,{itemColor:s,itemHoverColor:C,groupTitleColor:$,itemSelectedColor:p,itemBg:f,popupBg:j,subMenuItemBg:v,itemActiveBg:"transparent",itemSelectedBg:m,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:g,itemDisabledColor:x,dangerItemColor:u,dangerItemHoverColor:P,dangerItemSelectedColor:I,dangerItemActiveBg:S,dangerItemSelectedBg:c,menuSubMenuBg:v,horizontalItemSelectedColor:p,horizontalItemSelectedBg:m});return[xt(h),St(h),wt(h),se(h,"light"),se(B,"dark"),yt(h),_e(h),G(h,"slide-up"),G(h,"slide-down"),be(h,"zoom-big")]},Ot,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:e,unitless:{groupTitleLineHeight:!0}})(t,o)},Se=t=>{var o;const{popupClassName:e,icon:r,title:n,theme:l}=t,i=a.useContext(F),{prefixCls:d,inlineCollapsed:s,theme:u}=i,f=ke();let v;if(!r)v=s&&!f.length&&n&&typeof n=="string"?a.createElement("div",{className:`${d}-inline-collapsed-noicon`},n.charAt(0)):a.createElement("span",{className:`${d}-title-content`},n);else{const c=a.isValidElement(n)&&n.type==="span";v=a.createElement(a.Fragment,null,Z(r,{className:T(a.isValidElement(r)?(o=r.props)===null||o===void 0?void 0:o.className:"",`${d}-item-icon`)}),c?n:a.createElement("span",{className:`${d}-title-content`},n))}const p=a.useMemo(()=>Object.assign(Object.assign({},i),{firstLevel:!1}),[i]),[m]=ve("Menu");return a.createElement(F.Provider,{value:p},a.createElement(qe,Object.assign({},U(t,["icon"]),{title:v,popupClassName:T(d,e,`${d}-${l||u}`),popupStyle:Object.assign({zIndex:m},t.popupStyle)})))};var zt=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]]);return e};function ee(t){return t===null||t===!1}const Pt={item:Ce,submenu:Se,divider:Ie},jt=a.forwardRef((t,o)=>{var e;const r=a.useContext(Y),n=r||{},{getPrefixCls:l,getPopupContainer:i,direction:d,menu:s}=a.useContext(K),u=l(),{prefixCls:f,className:v,style:p,theme:m="light",expandIcon:c,_internalDisableMenuItemTitleTooltip:g,inlineCollapsed:$,siderCollapsed:C,rootClassName:x,mode:P,selectable:I,onClick:S,overflowedIndicatorPopupClassName:w}=t,j=zt(t,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),E=U(j,["collapsedWidth"]);(e=n.validator)===null||e===void 0||e.call(n,{mode:P});const h=fe(function(){var D;S==null||S.apply(void 0,arguments),(D=n.onClick)===null||D===void 0||D.call(n)}),B=n.mode||P,M=I??n.selectable,H=$??C,z={horizontal:{motionName:`${u}-slide-up`},inline:Fe(u),other:{motionName:`${u}-zoom-big`}},y=l("menu",f||n.prefixCls),N=he(y),[_,A,X]=Bt(y,N,!r),k=T(`${y}-${m}`,s==null?void 0:s.className,v),J=a.useMemo(()=>{var D,q;if(typeof c=="function"||ee(c))return c||null;if(typeof n.expandIcon=="function"||ee(n.expandIcon))return n.expandIcon||null;if(typeof(s==null?void 0:s.expandIcon)=="function"||ee(s==null?void 0:s.expandIcon))return(s==null?void 0:s.expandIcon)||null;const W=(D=c??(n==null?void 0:n.expandIcon))!==null&&D!==void 0?D:s==null?void 0:s.expandIcon;return Z(W,{className:T(`${y}-submenu-expand-icon`,a.isValidElement(W)?(q=W.props)===null||q===void 0?void 0:q.className:void 0)})},[c,n==null?void 0:n.expandIcon,s==null?void 0:s.expandIcon,y]),L=a.useMemo(()=>({prefixCls:y,inlineCollapsed:H||!1,direction:d,firstLevel:!0,theme:m,mode:B,disableMenuItemTitleTooltip:g}),[y,H,d,g,m]);return _(a.createElement(Y.Provider,{value:null},a.createElement(F.Provider,{value:L},a.createElement(Ve,Object.assign({getPopupContainer:i,overflowedIndicator:a.createElement(Ge,null),overflowedIndicatorPopupClassName:T(y,`${y}-${m}`,w),mode:B,selectable:M,onClick:h},E,{inlineCollapsed:H,style:Object.assign(Object.assign({},s==null?void 0:s.style),p),className:k,prefixCls:y,direction:d,defaultMotions:z,expandIcon:J,ref:o,rootClassName:T(x,A,n.rootClassName,X,N),_internalComponents:Pt})))))}),V=a.forwardRef((t,o)=>{const e=a.useRef(null),r=a.useContext(pe);return a.useImperativeHandle(o,()=>({menu:e.current,focus:n=>{var l;(l=e.current)===null||l===void 0||l.focus(n)}})),a.createElement(jt,Object.assign({ref:e},t,r))});V.Item=Ce;V.SubMenu=Se;V.Divider=Ie;V.ItemGroup=Ye;const Tt=t=>{const{componentCls:o,menuCls:e,colorError:r,colorTextLightSolid:n}=t,l=`${e}-item`;return{[`${o}, ${o}-menu-submenu`]:{[`${e} ${l}`]:{[`&${l}-danger:not(${l}-disabled)`]:{color:r,"&:hover":{color:n,backgroundColor:r}}}}}},Et=t=>{const{componentCls:o,menuCls:e,zIndexPopup:r,dropdownArrowDistance:n,sizePopupArrow:l,antCls:i,iconCls:d,motionDurationMid:s,paddingBlock:u,fontSize:f,dropdownEdgeChildPadding:v,colorTextDisabled:p,fontSizeIcon:m,controlPaddingHorizontal:c,colorBgElevated:g}=t;return[{[o]:{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:r,display:"block","&::before":{position:"absolute",insetBlock:t.calc(l).div(2).sub(n).equal(),zIndex:-9999,opacity:1e-4,content:'""'},"&-menu-vertical":{maxHeight:"100vh",overflowY:"auto"},[`&-trigger${i}-btn`]:{[`& > ${d}-down, & > ${i}-btn-icon > ${d}-down`]:{fontSize:m}},[`${o}-wrap`]:{position:"relative",[`${i}-btn > ${d}-down`]:{fontSize:m},[`${d}-down::before`]:{transition:`transform ${s}`}},[`${o}-wrap-open`]:{[`${d}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${i}-slide-down-enter${i}-slide-down-enter-active${o}-placement-bottomLeft,
          &${i}-slide-down-appear${i}-slide-down-appear-active${o}-placement-bottomLeft,
          &${i}-slide-down-enter${i}-slide-down-enter-active${o}-placement-bottom,
          &${i}-slide-down-appear${i}-slide-down-appear-active${o}-placement-bottom,
          &${i}-slide-down-enter${i}-slide-down-enter-active${o}-placement-bottomRight,
          &${i}-slide-down-appear${i}-slide-down-appear-active${o}-placement-bottomRight`]:{animationName:Ke},[`&${i}-slide-up-enter${i}-slide-up-enter-active${o}-placement-topLeft,
          &${i}-slide-up-appear${i}-slide-up-appear-active${o}-placement-topLeft,
          &${i}-slide-up-enter${i}-slide-up-enter-active${o}-placement-top,
          &${i}-slide-up-appear${i}-slide-up-appear-active${o}-placement-top,
          &${i}-slide-up-enter${i}-slide-up-enter-active${o}-placement-topRight,
          &${i}-slide-up-appear${i}-slide-up-appear-active${o}-placement-topRight`]:{animationName:Ue},[`&${i}-slide-down-leave${i}-slide-down-leave-active${o}-placement-bottomLeft,
          &${i}-slide-down-leave${i}-slide-down-leave-active${o}-placement-bottom,
          &${i}-slide-down-leave${i}-slide-down-leave-active${o}-placement-bottomRight`]:{animationName:Ze},[`&${i}-slide-up-leave${i}-slide-up-leave-active${o}-placement-topLeft,
          &${i}-slide-up-leave${i}-slide-up-leave-active${o}-placement-top,
          &${i}-slide-up-leave${i}-slide-up-leave-active${o}-placement-topRight`]:{animationName:Je}}},Qe(t,g,{arrowPlacement:{top:!0,bottom:!0}}),{[`${o} ${e}`]:{position:"relative",margin:0},[`${e}-submenu-popup`]:{position:"absolute",zIndex:r,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${o}, ${o}-menu-submenu`]:Object.assign(Object.assign({},$e(t)),{[e]:Object.assign(Object.assign({padding:v,listStyleType:"none",backgroundColor:g,backgroundClip:"padding-box",borderRadius:t.borderRadiusLG,outline:"none",boxShadow:t.boxShadowSecondary},ie(t)),{"&:empty":{padding:0,boxShadow:"none"},[`${e}-item-group-title`]:{padding:`${b(u)} ${b(c)}`,color:t.colorTextDescription,transition:`all ${s}`},[`${e}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${e}-item-icon`]:{minWidth:f,marginInlineEnd:t.marginXS,fontSize:t.fontSizeSM},[`${e}-title-content`]:{flex:"auto","&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},"> a":{color:"inherit",transition:`all ${s}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}},[`${e}-item-extra`]:{paddingInlineStart:t.padding,marginInlineStart:"auto",fontSize:t.fontSizeSM,color:t.colorTextDescription}},[`${e}-item, ${e}-submenu-title`]:Object.assign(Object.assign({display:"flex",margin:0,padding:`${b(u)} ${b(c)}`,color:t.colorText,fontWeight:"normal",fontSize:f,lineHeight:t.lineHeight,cursor:"pointer",transition:`all ${s}`,borderRadius:t.borderRadiusSM,"&:hover, &-active":{backgroundColor:t.controlItemBgHover}},ie(t)),{"&-selected":{color:t.colorPrimary,backgroundColor:t.controlItemBgActive,"&:hover, &-active":{backgroundColor:t.controlItemBgActiveHover}},"&-disabled":{color:p,cursor:"not-allowed","&:hover":{color:p,backgroundColor:g,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${b(t.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:t.colorSplit},[`${o}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:t.paddingXS,[`${o}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:t.colorTextDescription,fontSize:m,fontStyle:"normal"}}}),[`${e}-item-group-list`]:{margin:`0 ${b(t.marginXS)}`,padding:0,listStyle:"none"},[`${e}-submenu-title`]:{paddingInlineEnd:t.calc(c).add(t.fontSizeSM).equal()},[`${e}-submenu-vertical`]:{position:"relative"},[`${e}-submenu${e}-submenu-disabled ${o}-menu-submenu-title`]:{[`&, ${o}-menu-submenu-arrow-icon`]:{color:p,backgroundColor:g,cursor:"not-allowed"}},[`${e}-submenu-selected ${o}-menu-submenu-title`]:{color:t.colorPrimary}})})},[G(t,"slide-up"),G(t,"slide-down"),ae(t,"move-up"),ae(t,"move-down"),be(t,"zoom-big")]]},Ht=t=>Object.assign(Object.assign({zIndexPopup:t.zIndexPopupBase+50,paddingBlock:(t.controlHeight-t.fontSize*t.lineHeight)/2},et({contentRadius:t.borderRadiusLG,limitVerticalRadius:!0})),tt(t)),Mt=ge("Dropdown",t=>{const{marginXXS:o,sizePopupArrow:e,paddingXXS:r,componentCls:n}=t,l=te(t,{menuCls:`${n}-menu`,dropdownArrowDistance:t.calc(e).div(2).add(o).equal(),dropdownEdgeChildPadding:r});return[Et(l),Tt(l)]},Ht,{resetStyle:!1}),ye=t=>{var o;const{menu:e,arrow:r,prefixCls:n,children:l,trigger:i,disabled:d,dropdownRender:s,getPopupContainer:u,overlayClassName:f,rootClassName:v,overlayStyle:p,open:m,onOpenChange:c,visible:g,onVisibleChange:$,mouseEnterDelay:C=.15,mouseLeaveDelay:x=.1,autoAdjustOverflow:P=!0,placement:I="",overlay:S,transitionName:w}=t,{getPopupContainer:j,getPrefixCls:E,direction:h,dropdown:B}=a.useContext(K);lt();const M=a.useMemo(()=>{const O=E();return w!==void 0?w:I.includes("top")?`${O}-slide-down`:`${O}-slide-up`},[E,I,w]),H=a.useMemo(()=>I?I.includes("Center")?I.slice(0,I.indexOf("Center")):I:h==="rtl"?"bottomRight":"bottomLeft",[I,h]),z=E("dropdown",n),y=he(z),[N,_,A]=Mt(z,y),[,X]=ot(),k=a.Children.only(l),J=Z(k,{className:T(`${z}-trigger`,{[`${z}-rtl`]:h==="rtl"},k.props.className),disabled:(o=k.props.disabled)!==null&&o!==void 0?o:d}),L=d?[]:i,D=!!(L!=null&&L.includes("contextMenu")),[q,W]=ue(!1,{value:m??g}),we=fe(O=>{c==null||c(O,{source:"trigger"}),$==null||$(O),W(O)}),xe=T(f,v,_,A,y,B==null?void 0:B.className,{[`${z}-rtl`]:h==="rtl"}),Oe=nt({arrowPointAtCenter:typeof r=="object"&&r.pointAtCenter,autoAdjustOverflow:P,offset:X.marginXXS,arrowWidth:r?X.sizePopupArrow:0,borderRadius:X.borderRadius}),Be=a.useCallback(()=>{e!=null&&e.selectable&&(e!=null&&e.multiple)||(c==null||c(!1,{source:"menu"}),W(!1))},[e==null?void 0:e.selectable,e==null?void 0:e.multiple]),ze=()=>{let O;return e!=null&&e.items?O=a.createElement(V,Object.assign({},e)):typeof S=="function"?O=S():O=S,s&&(O=s(O)),O=a.Children.only(typeof O=="string"?a.createElement("span",null,O):O),a.createElement(Ct,{prefixCls:`${z}-menu`,rootClassName:T(A,y),expandIcon:a.createElement("span",{className:`${z}-menu-submenu-arrow`},a.createElement(at,{className:`${z}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:Be,validator:At=>{}},O)},[oe,Pe]=ve("Dropdown",p==null?void 0:p.zIndex);let Q=a.createElement(rt,Object.assign({alignPoint:D},U(t,["rootClassName"]),{mouseEnterDelay:C,mouseLeaveDelay:x,visible:q,builtinPlacements:Oe,arrow:!!r,overlayClassName:xe,prefixCls:z,getPopupContainer:u||j,transitionName:M,trigger:L,overlay:ze,placement:H,onVisibleChange:we,overlayStyle:Object.assign(Object.assign(Object.assign({},B==null?void 0:B.style),p),{zIndex:oe})}),J);return oe&&(Q=a.createElement(it.Provider,{value:Pe},Q)),N(Q)};function Dt(t){return Object.assign(Object.assign({},t),{align:{overflow:{adjustX:!1,adjustY:!1}}})}const Rt=ft(ye,"dropdown",t=>t,Dt),Nt=t=>a.createElement(Rt,Object.assign({},t),a.createElement("span",null));ye._InternalPanelDoNotUseOrYouWillBeFired=Nt;export{ye as D,V as M,Ct as O,ft as g,ae as i,vt as w};
