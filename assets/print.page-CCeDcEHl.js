import{j as i,B as r,h as n}from"../web.js";function t(){return i.jsxs("div",{className:o,children:[i.jsx("h1",{children:"Print Page"}),i.jsx(r,{onClick:()=>window.print(),children:"Print"}),i.jsxs("div",{id:"print-doc",children:[i.jsx("h2",{children:"h2"}),i.jsx("p",{children:"print-doc"})]})]})}const o=n`
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
