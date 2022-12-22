import{s as t,r as n,a as i,j as a}from"./index.daf58ab8.js";import{T as r}from"./Transitions.35aaa138.js";import{G as o,I as s}from"./IndividualInfo.31ec9dad.js";import{L as l}from"./LocoScroll.9e88f0a6.js";import{m as d}from"./motion.7c2b762e.js";const c=t(d.div)`
  width: 50%;

  @media (max-width: 570px) {
    width: 100%;
  }

`;t.div`
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
`;const m=t.div`
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
`,h={hidden:{x:"-50vw"},show:{x:0,transition:{duration:1,delay:.5,ease:"easeInOut"}}},w=()=>{const e=n.exports.useRef(null);return i(r,{children:[a("div",{className:"experience",children:a("canvas",{className:"experience-canvas"})}),a(l,{refName:e,children:i("section",{className:"cat-page","data-scroll-container":!0,ref:e,children:[a("div",{className:"progress-wrapper progress-bar-wrapper-left",children:a("div",{className:"progress-bar darkBeige-background"})}),a(m,{}),i(c,{variants:h,initial:"hidden",animate:"show","data-scroll-section":!0,children:[a(o,{fillColor:"rgb(525, 137, 148)"}),a(s,{charColor:"rgb(525, 137, 148)",profileImageSrc:"/images/",fullName:"Huynh Phan Anh",about:"I'm a Vietnamese person, and I always passionate about learning about AI and eventually creating my own AI assistant.",role:"Web Progammer front-end mainly.",specialization:"I have certain experiences about building websites and I can also work with IoT product if needed so basically I strong with design and structurize web and object.",linkTitlesDict:[{title:"Email",link:"huynhphana@gmail.com"},{title:"Phone",link:"0907879669"}]})]})]})})]})};export{w as default};
