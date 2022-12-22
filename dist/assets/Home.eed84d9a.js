import{u as _,r as c,s as o,j as t,a as i,F as z,g as v,S as y}from"./index.daf58ab8.js";import{s as k,a as N,b as S,m as f}from"./motion.7c2b762e.js";import{L as C}from"./LocoScroll.9e88f0a6.js";const I=e=>typeof e=="function";function E(e,n){var a;return typeof e=="string"?n?((a=n[e])!==null&&a!==void 0||(n[e]=document.querySelectorAll(e)),e=n[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const j={any:0,all:1};function A(e,n,{root:a,margin:l,amount:r="any"}={}){if(typeof IntersectionObserver>"u")return()=>{};const d=E(e),s=new WeakMap,h=u=>{u.forEach(m=>{const w=s.get(m.target);if(m.isIntersecting!==Boolean(w))if(m.isIntersecting){const x=n(m);I(x)?s.set(m.target,x):p.unobserve(m.target)}else w&&(w(m),s.delete(m.target))})},p=new IntersectionObserver(h,{root:a,rootMargin:l,threshold:typeof r=="number"?r:j[r]});return d.forEach(u=>p.observe(u)),()=>p.disconnect()}function B(){let e=!1;const n=[],a=new Set,l={subscribe(r){return a.add(r),()=>void a.delete(r)},start(r,d){if(e){const s=[];return a.forEach(h=>{s.push(S(h,r,{transitionOverride:d}))}),Promise.all(s)}else return new Promise(s=>{n.push({animation:[r,d],resolve:s})})},set(r){return a.forEach(d=>{k(d,r)})},stop(){a.forEach(r=>{N(r)})},mount(){return e=!0,n.forEach(({animation:r,resolve:d})=>{l.start(...r).then(d)}),()=>{e=!1,l.stop()}}};return l}function T(){const e=_(B);return c.exports.useEffect(e.mount,[]),e}function q(e,{root:n,margin:a,amount:l,once:r=!1}={}){const[d,s]=c.exports.useState(!1);return c.exports.useEffect(()=>{if(!e.current||r&&d)return;const h=()=>(s(!0),r?void 0:()=>s(!1)),p={root:n&&n.current||void 0,margin:a,amount:l==="some"?"any":l};return A(e.current,h,p)},[n,e,a,r]),d}const W=o.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${e=>`rgba(${e.theme.white}, 1)`};
`,F=o.div`
  width: 80%;
  margin: 0 auto;

  h1 {
    font-size: ${e=>e.theme.font4xl};
    color: ${e=>`rgba(${e.theme.black}, 0.8)`};
    font-weight: 800;
    padding-bottom: 2rem;
  }

  @media (min-width: ${e=>e.theme.mobile}) {
    h1 {
      font-size: ${e=>e.theme.font3xl};
    }
  }

  @media (min-width: ${e=>e.theme.tablet}) {
    h1 {
      padding-bottom: 4rem;
      font-size: ${e=>e.theme.font4xl};
    }
  }
`,P=o.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5vw;

  @media (max-width: ${e=>e.theme.tablet}) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 3.2rem;
  }
`,M=o(f.div)`
  justify-content: center;
  text-align: center;

  h3 {
    font-size: ${e=>e.theme.fontmd};
    font-weight: 550;
    padding-bottom: 1rem;
  }

  p {
    padding-top: 1rem;
    font-size: ${e=>e.theme.fontxs};
    font-weight: 350;
    width: 80%;
    margin: 0 auto;
  }

  img {
    width: 3rem;
  }

  @media (min-width: ${e=>e.theme.tablet}) {
    h3 {
      font-size: ${e=>e.theme.fontxl};
      padding-bottom: 2.3rem;
      min-height: 6rem;
    }

    p {
      font-size: ${e=>e.theme.fontsm};
      padding-top: 2.3rem;
      line-height: 1.7;
    }

    img {
      width: 5rem;
    }
    
  @media (min-width: ${e=>e.theme.desktop}) {    
    h3 {
      font-size: ${e=>e.theme.fontxl};
    }

    p {
      font-size: ${e=>e.theme.fontsm};
    }
  }
`,V=[{src:"icons/Webpage.svg",header:"Websites and platforms",detail:"Design and create website along with the customer requests fully interactive with mostly every devices"},{src:"icons/Mobile.svg",header:"Mobile applications",detail:"Create fully function application separated from the website and more addons features"},{src:"icons/UI.svg",header:"UI/UX designs",detail:"Analyze the need of customer to perform on the designing section"}],L=()=>t(W,{"data-scroll-section":!0,id:"service",children:i(F,{children:[t("h1",{children:"Services"}),t(P,{children:V.map((e,n)=>i(M,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0,transition:{duration:.75,delay:.2+n*.25}},whileHover:{scale:.9},children:[t("h3",{children:e.header}),t("img",{src:e.src}),t("p",{children:e.detail})]},n))})]})}),O=o.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  backgroundColor: transparent;
  z-index: 0;

  .petButton {
    position: absolute;
    padding-right: 1rem;
    left: 0;
    right: 0;
    bottom: 2.5rem;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: ${e=>e.theme.fontsm};
      font-weight: 700;
      padding-left: 1rem;
    }
  }
`,R=()=>t(O,{className:"landing-main-section",children:i("div",{className:"petButton",children:[t("img",{src:"./icons/paw-edit.png",alt:"paw",width:"50px"}),t("p",{children:"Pet one"})]})}),D=()=>i(z,{children:[t("div",{className:"intro-text1",children:"Where Design"}),t("div",{className:"intro-text2",children:"and Website happen!"})]}),H=o(f.div)`
  grid-row: span 1;
  grid-column: span 4;
  text-align: center;
  font-size: ${e=>e.theme.fontxxs};

  p {
    font-weight: 350;
    line-height: 1.4;
  }

  h3 {
    padding: 1rem 0;
  }

  @media (min-width: ${e=>e.theme.tablet}) {
    grid-column: span 2;
    padding-bottom: 3rem;
    font-size: ${e=>e.theme.fontxs};
  }

  @media (min-width: ${e=>e.theme.desktop}) {
    grid-column: span 1;
    padding-bottom: 5rem;
    text-align: left;

    img {
      padding-bottom: 1rem;
    }

    h3 {
      padding-bottom: 0.5rem;
    }
  }
`,U=({benefit:e,detail:n,svgSrc:a,indexOfCompo:l})=>{const r=c.exports.useRef(null),d=q(r),s=T();return c.exports.useEffect(()=>{d?s.start({x:0,y:0,opacity:1,transition:{duration:1,delay:.25,ease:"easeOut"}}):s.start({x:l%2==0?-40:40,opacity:0})},[d]),i(H,{ref:r,whileHover:{scale:.9},animate:s,children:[t("img",{src:a,width:"50rem",height:"50rem",alt:"Icon image"}),t("h3",{children:e}),t("p",{children:n})]})},G=o.section`
  position: relative;
  width: 100vw;
  height: auto;
  overflow: hidden;
  background-color: ${e=>`rgba(${e.theme.white}, 1)`};
`,J=o(f.div)`
    width: 80%;
    margin: 0 auto;
    display: grid; 
    grid-template-columns: auto auto auto auto;

    h1 {                                              
      padding-top: 3rem;
      font-size: ${e=>e.theme.font4xl};
      font-weight: 800;
      color: ${e=>`rgba(${e.theme.black}, 0.8)`};
      
      width: 100%;
      padding-bottom: 2.5rem;
      grid-column: 1/5;
      grid-row: 1/3;
    }

    @media (min-width: ${e=>e.theme.mobile}){    
      column-gap: 5rem;
      row-gap: 2.3rem;
   
      h1 {
        padding-top: 2rem;
        padding-bottom: 0.5rem;
          grid-column: 1/5;
          grid-row: 1/3;
          font-size: ${e=>e.theme.font3xl};
      }  
    }

    @media (min-width: ${e=>e.theme.tablet}){       
      h1 {
        padding-bottom: 2rem;
        grid-column: 1/5;
        grid-row: 1/3;
        font-size: ${e=>e.theme.font4xl};
      }  
    }

    @media (min-width: ${e=>e.theme.desktop}) {       
      h1 {   
          grid-column: 1/3;
          font-size: ${e=>e.theme.font4xl};
      }  
    }
  }
`,X=[{benefit:"Aesthetical",detail:"What we can bring to our customer possibly the profound and creativity in every products which will fill in the need and requirements of our guests",svgSrc:"/icons/GoodLooking.svg"},{benefit:"Technologies",detail:"All the essentials that we use and implement will be the top notch technologies nowaday to ensure that our and your visitor will experience the best performance in the product",svgSrc:"/icons/Technology.svg"},{benefit:"In time and precise",detail:"We are highly on schedule with everything and without doubt, yours will be as valueable as ours",svgSrc:"/icons/Time.svg"},{benefit:"Professional",detail:"With strict filtering and selection, our team form with skillfully and professinal members who will definitely assure that pleasant of our customer will always be prioritized",svgSrc:"/icons/Teamwork.svg"}],Y=()=>t(G,{className:"benefit-section","data-scroll-section":!0,children:i(J,{children:[t("h1",{children:"Benefits of working with us"}),X.map((e,n)=>t(U,{benefit:e.benefit,detail:e.detail,svgSrc:e.svgSrc,indexOfCompo:n},n))]})}),K=o.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3.2rem;
  background-color: ${e=>`rgba(${e.theme.white}, 0.3)`};
  color: #0b1532;
  z-index: 99999;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: 570px) {
    justify-content: center;
  }
`,Q=o.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  column-gap: 10px;

  img {
    width: 50px;
  }

  h1 {
    font-size: 1.5rem;
    font-family: Cooper Hewitt;
    font-weight: 600;
    letter-spacing: 5px;
  }

  @media (max-width: 570px) {
    h1 {
      font-size: 1rem;
      padding-right: 5px;
    }
  }
`,$=o.div`
  width: 10%;

  @media (max-width: 570px) {
    width: 0;
  }
`;o.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  column-gap: 2.5rem;

  @media (max-width: 570px) {
    display: none;
  }
`;const Z=()=>i(K,{className:"nav-container",children:[i(Q,{children:[t("img",{src:"/icons/logo.svg",alt:"logo"}),t("h1",{children:"THE NEW MATS"})]}),t($,{}),t($,{})]}),ee=o.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding-top: 3rem;

  .form__group {
    position: relative;
    padding: 15px 0 0;
    padding-top: 10px;
    width: 70%;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${e=>`rgba(${e.theme.black}, 0.5)`};
    outline: 0;
    font-size: ${e=>e.theme.fontxs};
    color: ${e=>`rgba(${e.theme.black}, 1)`};
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: ${e=>e.theme.fontxs};
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${e=>`rgba(${e.theme.black}, 0.5)`};
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${e=>`rgba(${e.theme.black}, 0.5)`};
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(
      to right,
      ${e=>`rgba(${e.theme.black}, 0.5)`},
      ${e=>`rgba(${e.theme.white}, 0.5)`}
    );
    border-image-slice: 1;
  }

  /* reset input */
  .form__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }

  .buttonContainer {
    width: 70%;
    display: flex;
    justify-content: center;
    padding-top: 3rem;
  }

  button {
    width: 8.75rem;
    background-color: transparent;
    border: 1px solid ${e=>`rgba(${e.theme.black}, 1)`};
    border-radius: 50px;
    padding: 10px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    column-gap: 0.25rem;
    font-family: inherit;
    font-weight: 600;
    font-size: ${e=>e.theme.fontxs};
    color: ${e=>`rgba(${e.theme.black}, 1)`};
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    img {
      width: 25px;
    }
  }

  button:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }

  @media (max-width: 920px) {
    width: 90%;
    align-items: center;
    row-gap: 0.6rem;
    padding-top: 2rem;

    .buttonContainer {
      padding-top: 1rem;
      // padding-right: 1rem;
    }

    button {
      width: 7rem;
      padding: 7px 0;
      font-size: ${e=>e.theme.fontxxs};
      img {
        width: 20px;
      }
    }

    .form__group {
      padding-top: 0px;
      width: 80%;
      padding-right: 1rem;
    }

    .form__field {
      font-size: ${e=>e.theme.fontxxs};
    }
  }
`,te=()=>i(ee,{id:"#section2",children:[t("h1",{children:"Or Contact Us Directly Here \u{1F60C}"}),i("div",{className:"form__group field",children:[t("input",{type:"input",className:"form__field",placeholder:"Name",name:"name",id:"name",required:!0}),t("label",{htmlFor:"name",className:"form__label",children:"Your name"})]}),i("div",{className:"form__group field",children:[t("input",{type:"input",className:"form__field",placeholder:"Email",name:"email",id:"email",required:!0}),t("label",{htmlFor:"email",className:"form__label",children:"Email"})]}),i("div",{className:"form__group field",children:[t("input",{type:"input",className:"form__field",placeholder:"Project",name:"project",id:"project",required:!0}),t("label",{htmlFor:"project",className:"form__label",children:"Project"})]}),i("div",{className:"form__group field",children:[t("input",{type:"input",className:"form__field",placeholder:"Budget",name:"budget",id:"budget",required:!0}),t("label",{htmlFor:"budget",className:"form__label",children:"Budget"})]}),t("div",{className:"buttonContainer",children:i("button",{children:["Send",t("span",{children:t("img",{src:"/icons/Send.svg",alt:"send"})})]})})]}),ie=o.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #f4f4f4;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,ne=o.div`
  display: flex;
  padding-top: 1rem;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
  }
`,oe=o.div`
  width: 50%;
  height: 100%;
  padding-left: 6rem;
  padding-bottom: 0.6rem;
  color: ${e=>`rgba(${e.theme.black}, 1)`};
  display: flex;
  flex-direction: column;

  .contact-info-container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding-bottom: 1.5rem;
  }

  h1 {
    font-size: ${e=>e.theme.fontmd};
    padding-top: 3rem;
    font-weight: 700;
  }

  @media (max-width: 920px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    column-gap: 1.9rem;
    padding-left: 0rem;
    h1 {
      padding-top: 2rem;
      font-size: ${e=>e.theme.fontxs};
    }
  }
`,g=o.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  column-gap: 1.3rem;

  img {
    width: 30px;
  }

  p {
    font-weight: 400;
    font-size: ${e=>e.theme.fontxs};
    text-decoration: underline;
    word-break: break-all;
    white-space: normal;
  }

  img:hover,
  p:hover {
    cursor: pointer;
  }

  @media (max-width: 920px) {
    column-gap: 0.5rem;

    img {
      width: 20px;
    }

    p {
      max-width: 140px;
      font-size: ${e=>e.theme.fontxxs};
    }
  }
`,re=o.div`
  color: ${e=>`rgba(${e.theme.black}, 0.5)`};
  font-size: ${e=>e.theme.fontxs};
  font-weight: 400;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 0.4rem;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  p {
    font-weight: 400;
  }

  @media (max-width: 920px) {
    font-size: 1rem;
    padding-bottom: 1rem;

    img {
      width: 20px;
    }
  }
`,ae=()=>i(ie,{className:"","data-scroll-section":!0,id:"contact",children:[i(ne,{children:[i(oe,{id:"#section1",children:[i("div",{className:"contact-info-container",children:[t("h1",{children:"CONTACT US"}),i(g,{children:[t("img",{src:"icons/Email.svg",alt:""}),t("p",{children:"thenewmats@gmail.com"})]}),i(g,{children:[t("img",{src:"icons/Instagram.svg",alt:""}),t("p",{children:"Instagram"})]}),i(g,{children:[t("img",{src:"icons/Phone.svg",alt:""}),t("p",{children:"0963214785"})]})]}),i("div",{className:"contact-info-container",children:[t("h1",{children:"OUR PROJECT"}),i(g,{children:[t("img",{src:"icons/github.svg",alt:""}),t("p",{children:"Github"})]})]})]}),t(te,{})]}),i(re,{children:[i("div",{children:[t("img",{src:"icons/Copyright.svg",alt:""}),t("span",{children:"2022"})]}),t("span",{children:"|"}),t("p",{children:"Designed by Linh & Nham"})]})]}),se=o.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${e=>`rgba(${e.theme.white}, 1)`};
`,de=o(f.div)`
  width: 90%;
  margin: 0 auto;
  padding-top: 3rem;

  display: flex;
  flex-direction: row;
  column-gap: 3rem;

  h1 {
    width: 85%;
    text-align: center;
    font-size: ${e=>e.theme.font3xl};
  }

  .img-container {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 0.5rem;
    flex-direction: column;
    justify-content: center;
    column-gap: 0rem;
    row-gap: 3rem;

    h1 {
      font-size: ${e=>e.theme.fontxl};
    }

    .img-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    img {
      width: 80%;
    }
  }
`,le=o.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;

  a {
    padding-top: 1rem;
    padding-right: 45px;
    align-self: center;
  }

  .go-btn {
    padding: 10px 20px;
    background-color: ${e=>`rgba(${e.theme.sky}, 0.5)`};
    border-radius: 25%;
    font-size: ${e=>e.theme.fontmd};
    transition: padding 0.3s;
  }

  .go-btn:hover {
    padding: 15px 25px;
  }

  .detail {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    padding-top: 2rem;
    padding-left: 3rem;
  }

  .detail > div {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    column-gap: 2rem;

    img {
      width: 8rem;
    }

    span {
      font-size: ${e=>e.theme.fontmd};
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;

    .go-btn {
      padding: 10px 20px;
      background-color: ${e=>`rgba(${e.theme.sky}, 0.5)`};
      border-radius: 25%;
      font-size: ${e=>e.theme.fontsm};
    }

    a {
      padding-top: 0.3rem;
      padding-right: 0px;
    }

    .detail {
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      column-gap: 3.5rem;
      row-gap: 2rem;
    }

    .detail > div {
      column-gap: 1.5rem;

      img {
        width: 6rem;
      }

      span {
        font-size: ${e=>e.theme.fontsm};
        font-weight: 400;
      }
    }
  }
`,ce=()=>t(se,{"data-scroll-section":!0,children:i(de,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0,transition:{duration:1,delay:.2}},children:[i(le,{children:[t("h1",{children:"Want to visit a town ?"}),t("a",{href:"/scene/town",children:t("span",{className:"go-btn",children:"Go"})}),i("div",{className:"detail",children:[i("div",{children:[t("img",{src:"/icons/arrow-move.svg",alt:"up"}),t("span",{children:"Move"})]}),i("div",{children:[t("img",{src:"/icons/Shift.svg",alt:"shift"}),t("span",{children:"Run"})]}),i("div",{children:[t("img",{src:"/icons/Space.svg",alt:"space"}),t("span",{children:"Jump"})]})]})]}),t("div",{className:"img-container",children:t("img",{src:"/images/map.png",alt:"game map"})})]})}),b=o.div`
  position: relative;
  height: 4rem;
  width: 100vw;
  background-color: white;
`;o.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
`;const ge=()=>{const e=c.exports.useRef(null),[n,a]=c.exports.useState(!1);return v.registerPlugin(y),c.exports.useEffect(()=>{window.location.pathname=="/"?window.addEventListener("click",()=>{setTimeout(()=>{a(!0)},1500)}):a(!0)},[]),c.exports.useLayoutEffect(()=>{const l=e.current;setTimeout(()=>{v.to(l.querySelector(".nav-container"),{color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.5)",duration:.5,scrollTrigger:{trigger:l.querySelector(".benefit-section"),scroller:".App",scrub:!0,start:"-15% top",end:"bottom bottom"}}),y.refresh()},1e3)},[]),t(C,{refName:e,children:i("main",{className:"App","data-scroll-container":!0,ref:e,children:[t("div",{className:"experience relative-pos","data-scroll-section":!0,children:t("canvas",{className:"experience-canvas"})}),t(D,{}),t(Z,{}),n?t(R,{"data-scroll-section":!0}):null,t("div",{className:"first-move"}),t(b,{"data-scroll-section":!0}),t(Y,{}),t(b,{"data-scroll-section":!0}),t(L,{}),t(b,{"data-scroll-section":!0}),t(ce,{}),t(ae,{})]})})};export{ge as default};
