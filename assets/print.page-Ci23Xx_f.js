import{j as e,d as i,c as r}from"../web.js";function t(){return e.jsxDEV("div",{className:s,children:[e.jsxDEV("h1",{children:"Print Page"},void 0,!1,{fileName:"/web/src/pages/print.page.tsx",lineNumber:7,columnNumber:7},this),e.jsxDEV(i,{onClick:()=>window.print(),children:"Print"},void 0,!1,{fileName:"/web/src/pages/print.page.tsx",lineNumber:8,columnNumber:7},this),e.jsxDEV("div",{id:"print-doc",children:[e.jsxDEV("h2",{children:"h2"},void 0,!1,{fileName:"/web/src/pages/print.page.tsx",lineNumber:10,columnNumber:9},this),e.jsxDEV("p",{children:"print-doc"},void 0,!1,{fileName:"/web/src/pages/print.page.tsx",lineNumber:11,columnNumber:9},this)]},void 0,!0,{fileName:"/web/src/pages/print.page.tsx",lineNumber:9,columnNumber:7},this)]},void 0,!0,{fileName:"/web/src/pages/print.page.tsx",lineNumber:6,columnNumber:5},this)}const s=r`
  @media print {
    #print-doc {
      @page {
        size: A4;
        margin: 6mm 10mm 10mm 12mm;
      }

      h2 {
        background-color: yellow;
        width: 100%;
        color: black;
        border: 2px solid black;
      }

      p {
        font-size: 1cm;
        font-weight: 700;
        color: red;
      }
    }
  }
`;export{t as default};
