import{s as t,r,a as i,j as a}from"./index.daf58ab8.js";import{T as o}from"./Transitions.35aaa138.js";import{G as n,I as s}from"./IndividualInfo.31ec9dad.js";import{L as l}from"./LocoScroll.9e88f0a6.js";import{m as c}from"./motion.7c2b762e.js";const d=t(c.div)`
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
`,h={hidden:{x:"-50vw"},show:{x:0,transition:{duration:1,delay:.5,ease:"easeInOut"}}},x=()=>{const e=r.exports.useRef(null);return i(o,{children:[a("div",{className:"experience",children:a("canvas",{className:"experience-canvas"})}),a(l,{refName:e,children:i("section",{className:"cat-page","data-scroll-container":!0,ref:e,children:[a("div",{className:"progress-wrapper progress-bar-wrapper-left",children:a("div",{className:"progress-bar purple-background"})}),a(m,{}),i(d,{variants:h,initial:"hidden",animate:"show","data-scroll-section":!0,children:[a(n,{fillColor:"rgb(154, 136, 179)"}),a(s,{charColor:"rgb(154, 136, 179)",profileImageSrc:"/images/",fullName:"Nguyen Hoang To Nhu ",about:"A fat cat",role:"UX/UI Designer, 3D Designer",specialization:"I\u2019m just a fat cat walking by and helping my comrade (Linh) do the project ",linkTitlesDict:[{title:"Email",link:"nguyen.hoangtonhu1211@gmail.com"}]})]})]})})]})};export{x as default};
