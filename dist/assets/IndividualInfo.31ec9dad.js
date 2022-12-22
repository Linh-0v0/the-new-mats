import{j as t,s as l,a as s}from"./index.daf58ab8.js";const x=({fillColor:e})=>t("div",{className:"go-back-arrow",children:t("svg",{width:"24",height:"38",viewBox:"0 0 24 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M23.5142 33.1525L9.39258 19L23.5142 4.8475L19.1667 0.5L0.666748 19L19.1667 37.5L23.5142 33.1525Z",fill:e||"#000000"})})}),c=l.div`
  h3 {
    font-size: ${e=>e.theme.fontmd};
    font-weight: 800;
    padding-bottom: 1.4rem;
  }
  p {
    font-size: ${e=>e.theme.fontxs};
    font-weight: 400;
    line-height: 1.7;
  }
`,r=({charColor:e,title:a,parag:i,linkTitlesDict:h})=>{const n=h;return console.log(e),s(c,{children:[t("h3",{style:{color:e!=null?e:"#000"},children:a}),t("p",{children:i!=null?i:""}),n==null?void 0:n.map((d,o)=>s("p",{style:{fontWeight:"400"},children:[d.title,":",t("a",{style:{fontWeight:"300",textDecoration:"underline"},href:d.link,children:t("span",{style:{paddingLeft:"0.5rem"},children:d.link})})]},o))]})},p=l.section`
  position: relative;
  width: 100vw;
  overflow: hidden;
`,m=l.div`
  width: 50%;
  // background-color: ${e=>`rgba(${e.theme.sky}, 1)`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-left: 4rem;

  h1 {
    font-weight: 600;
    font-size: ${e=>e.theme.fontxl};
    padding-top: 2rem;
    padding-bottom: 3rem;
    text-align: center;
  }

  .imgContainer {
    width: 162px;
    height: 162px;
    border-radius: 50%;
    overflow: hidden;
    // border: 2px solid ${e=>`rgba(${e.theme.pink}, 1)`};

    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
      width: 80%;
      height: 80%:
    }
  }

  @media (max-width: 570px) {
    width: 80%;
    margin: 0 auto;
    padding-left: 0;
  }
`,f=l.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 4rem;
  padding-left: 1rem;
`,v=({charColor:e,profileImageSrc:a,fullName:i,about:h,role:n,specialization:d,contact:o,linkTitlesDict:g})=>t(p,{"data-scroll-section":!0,children:s(m,{children:[t("div",{className:"imgContainer",style:{border:`2px solid ${e}`},children:t("img",{src:a,alt:"Avatar"})}),t("h1",{style:{color:e},children:i!=null?i:""}),s(f,{children:[t(r,{title:"About",parag:h,charColor:e}),t(r,{title:"Role",parag:n,charColor:e}),t(r,{title:"Specialization",parag:d,charColor:e}),t(r,{charColor:e,title:"Contact",parag:o!=null?o:"",linkTitlesDict:g})]})]})});export{x as G,v as I};
