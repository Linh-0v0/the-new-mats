import{s as r,r as t,a as i,j as a}from"./index.daf58ab8.js";import{T as n}from"./Transitions.35aaa138.js";import{G as o,I as s}from"./IndividualInfo.31ec9dad.js";import{L as l}from"./LocoScroll.9e88f0a6.js";import{m}from"./motion.7c2b762e.js";const d=r(m.div)`
  width: 50%;

  @media (max-width: 570px) {
    width: 100%;
  }

`;r.div`
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
`;const c=r.div`
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
`,g={hidden:{x:"-50vw"},show:{x:0,transition:{duration:1,delay:.5,ease:"easeInOut"}}},w=()=>{const e=t.exports.useRef(null);return i(n,{children:[a("div",{className:"experience",children:a("canvas",{className:"experience-canvas"})}),a(l,{refName:e,children:i("section",{className:"cat-page","data-scroll-container":!0,ref:e,children:[a("div",{className:"progress-wrapper progress-bar-wrapper-left",children:a("div",{className:"progress-bar mint-background"})}),a(c,{}),i(d,{variants:g,initial:"hidden",animate:"show","data-scroll-section":!0,children:[a(o,{fillColor:"rgb(90, 178, 197)"}),a(s,{charColor:"rgb(90, 178, 197)",profileImageSrc:"/images/",fullName:"Nguyen Huu Minh Khang ",about:"I am born and raised in VietNam. My passion in IT first is to master machine learning and later on developing alogrithms for AI.",role:"Web programmer, technical writer.",specialization:"I have experience with low level programming and fidgeting with embeded systems so my strengths is about configurating systems together and debugging.",linkTitlesDict:[{title:"For personal email",link:"minhkhang09122003@gmail.com"}]})]})]})})]})};export{w as default};
