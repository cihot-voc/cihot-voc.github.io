import{r as a,a0 as S,O as j,Q as w,j as D,Z as g,$ as M,V as k}from"../app.js";var V=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],H=a.forwardRef(function(e,C){var u=e.prefixCls,n=u===void 0?"rc-checkbox":u,m=e.className,b=e.style,_=e.checked,l=e.disabled,i=e.defaultChecked,y=i===void 0?!1:i,d=e.type,o=d===void 0?"checkbox":d,x=e.title,s=e.onChange,R=S(e,V),r=a.useRef(null),f=a.useRef(null),E=j(y,{value:_}),h=w(E,2),v=h[0],N=h[1];a.useImperativeHandle(C,function(){return{focus:function(t){var c;(c=r.current)===null||c===void 0||c.focus(t)},blur:function(){var t;(t=r.current)===null||t===void 0||t.blur()},input:r.current,nativeElement:f.current}});var P=D(n,m,g(g({},"".concat(n,"-checked"),v),"".concat(n,"-disabled"),l)),$=function(t){l||("checked"in e||N(t.target.checked),s==null||s({target:k(k({},e),{},{type:o,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))};return a.createElement("span",{className:P,title:x,style:b,ref:f},a.createElement("input",M({},R,{className:"".concat(n,"-input"),ref:r,onChange:$,disabled:l,checked:!!v,type:o})),a.createElement("span",{className:"".concat(n,"-inner")}))});export{H as C};
