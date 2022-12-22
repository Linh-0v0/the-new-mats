import{s as n,r as o,a as i,j as a}from"./index.daf58ab8.js";import{T as r}from"./Transitions.35aaa138.js";import{G as t,I as s}from"./IndividualInfo.31ec9dad.js";import{L as l}from"./LocoScroll.9e88f0a6.js";import{m as c}from"./motion.7c2b762e.js";const d=n(c.div)`
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
`;const m=n.div`
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
`,g={hidden:{x:"-50vw"},show:{x:0,transition:{duration:1,delay:.5,ease:"easeInOut"}}},b=()=>{const e=o.exports.useRef(null);return i(r,{children:[a("div",{className:"experience",children:a("canvas",{className:"experience-canvas"})}),a(l,{refName:e,children:i("section",{className:"cat-page","data-scroll-container":!0,ref:e,children:[a("div",{className:"progress-wrapper progress-bar-wrapper-left",children:a("div",{className:"progress-bar darkBrown-background"})}),a(m,{}),i(d,{variants:g,initial:"hidden",animate:"show","data-scroll-section":!0,children:[a(t,{fillColor:"rgb(86, 56, 22)"}),a(s,{charColor:"rgb(86, 56, 22)",profileImageSrc:"/images/",fullName:"Nguyen Duong Truong Thinh",about:"I was born in 2002, growing up in Long An and recently living in HCM city. I\u2019m passionate about IT projects,  IoT learning and working with the technologies.",role:"Web programmer, technical writer.",specialization:"I\u2019m concentrated on web programming and front-end. Also for the IoT management systems, I can plan in many kinds of data analytics or application development.",linkTitlesDict:[{title:"Email",link:"truongthinh140402@gmail.com"}]})]})]})})]})};export{b as default};
