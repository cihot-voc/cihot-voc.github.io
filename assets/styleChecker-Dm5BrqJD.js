import{aA as o}from"../web.js";var u=function(r){if(o()&&window.document.documentElement){var e=Array.isArray(r)?r:[r],t=window.document.documentElement;return e.some(function(i){return i in t.style})}return!1},a=function(r,e){if(!u(r))return!1;var t=document.createElement("div"),i=t.style[r];return t.style[r]=e,t.style[r]!==i};function c(n,r){return!Array.isArray(n)&&r!==void 0?a(n,r):u(n)}export{c as i};
