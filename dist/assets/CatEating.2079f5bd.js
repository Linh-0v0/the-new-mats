import{s as n,r as t,a,j as i}from"./index.daf58ab8.js";import{T as o}from"./Transitions.35aaa138.js";import{G as r,I as s}from"./IndividualInfo.31ec9dad.js";import{L as l}from"./LocoScroll.9e88f0a6.js";import{m as d}from"./motion.7c2b762e.js";const m=n(d.div)`
  width: 50%;

  @media (max-width: 570px) {
    width: 100%;
  }
`;n.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;

  h1 {
    font-size: 3rem;
    padding-bottom: 2rem;
    color: ${e=>`rgba(${e.theme.orange}, 1)`};
  }

  h2 {
    font-size: 2rem;
    padding-bottom: 1rem;
    color: ${e=>`rgba(${e.theme.orange}, 1)`};
  }

  @media (max-width: 570px) {
    width: 80%;

    p {
      font-weight: 400;
      color: ${e=>`rgba(${e.theme.orange}, 1)`};
    }
  }
`;const c=n.div`
  position: absolute;
  top:0;
  display: none;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${e=>`rgba(${e.theme.white}, 0.2)`};

  @media (max-width: 570px) {
    display: block;
  }
`,h={hidden:{x:"-50vw"},show:{x:0,transition:{duration:1,delay:.5,ease:"easeInOut",onanimationstart:()=>{console.log("framer motion started")}}}},b=()=>{const e=t.exports.useRef(null);return a(o,{children:[i("div",{className:"experience",children:i("canvas",{className:"experience-canvas"})}),i(l,{refName:e,children:a("section",{className:"cat-page",ref:e,"data-scroll-container":!0,children:[i("div",{className:"progress-wrapper progress-bar-wrapper-left",children:i("div",{className:"progress-bar pink-background"})}),i(c,{}),a(m,{variants:h,initial:"hidden",animate:"show",children:[i(r,{fillColor:"rgb(525, 137, 148)"}),i(s,{charColor:"rgb(525, 137, 148)",profileImageSrc:"/images/linh.jpg",fullName:"Vu Bui Khanh Linh",about:"I was born in 2001. I love \u{1F408}\u200D\u2B1B\u{1F408} and \u{1F3AE}. Also, anything asthetically pleasing will easily catch my short-span attention \u{1F440}.",role:"Front-end design and coding : Figma website design, Blender model design/scuplting and ThreeJS coding",specialization:"Figma Design, React Framework, Gsap & Framer Motion animation, web 3D model, front-end coding overall.",linkTitlesDict:[{title:"Github",link:"https://github.com/Linh-0v0"},{title:"Gmail",link:"vlinh271001@gmail.com"}]})]})]})})]})};export{b as default};
