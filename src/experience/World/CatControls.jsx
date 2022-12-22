import * as THREE from "three";
import Experience from "../Experience";
import GSAP from "gsap";
import * as TWEEN from "@tweenjs/tween.js";
import ScrollTrigger from "gsap/ScrollTrigger";
import EventEmitter from "events";
import asset from "../Utils/assets";

export default class CatControls extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;

    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.cat = this.experience.world.cat.actualCat;
    this.floor = this.experience.world.floor;
    this.circleFirst = this.experience.world.circle.circleFirst;
    this.circleSecond = this.experience.world.circle.circleSecond;
    this.circleThird = this.experience.world.circle.circleThird;
    this.circleFourth = this.experience.world.circle.circleFourth;
    this.circleFifth = this.experience.world.circle.circleFifth;
    this.goToLanding = this.experience.goToLanding;
    this.goBackMsgReceived = "";
    this.currentPath = window.location.pathname;

    GSAP.registerPlugin(ScrollTrigger);

    this.setAppearAnimation();

    this.goToLanding.on("goToLanding", (goBackMsg) => {
      this.goBackToLanding(goBackMsg);
      this.goBackMsgReceived = goBackMsg;
    });

    this.setScrollTrigger();
    // this.setPath();
  }

  setAppearAnimation() {
    if (window.matchMedia("(max-width: 570px)").matches) {
      const tween = new TWEEN.Tween(this.cat.position)
        .to({ x: 0, z: 0, y: 1.5 }, 3500)
        .delay(500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onStart(() => {
          new TWEEN.Tween(this.cat.scale)
            .to({ x: 1.2, y: 1.2, z: 1.2 }, 3500)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
        });
      tween.start();
    } else if (window.matchMedia("(max-width: 760px)").matches) {
      const tween = new TWEEN.Tween(this.cat.position)
        .to({ x: 1.1, z: 0, y: 1.5 }, 3500)
        .delay(500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onStart(() => {
          new TWEEN.Tween(this.cat.scale)
            .to({ x: 0.8, y: 0.8, z: 0.8 }, 3500)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
        });
      tween.start();
    } else if (window.matchMedia("(max-width: 970px)").matches) {
      const tween = new TWEEN.Tween(this.cat.position)
        .to({ x: 1.4, z: 0 , y: 1.5}, 3500)
        .delay(500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onStart(() => {
          new TWEEN.Tween(this.cat.scale)
            .to({ x: 1, y: 1, z: 1 }, 3500)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
        });
      tween.start();
    } else if (window.matchMedia("(max-width: 1100px)").matches) {
      const tween = new TWEEN.Tween(this.cat.position)
        .to({ x: 1.7, z: 0, y: 1.5 }, 3500)
        .delay(500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onStart(() => {
          new TWEEN.Tween(this.cat.scale)
            .to({ x: 1.1, y: 1.1, z: 1.1 }, 3500)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
        });
      tween.start();
    } else {
      const tween = new TWEEN.Tween(this.cat.position)
        .to({ x: 2.2, z: 2, y: 1.3 }, 3500)
        .delay(500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onStart(() => {
          new TWEEN.Tween(this.cat.scale)
            .to({ x: 1.5, y: 1.5, z: 1.6 }, 3500)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
        });
      tween.start();
    }
  }

  goBackToLanding(goBackMsg) {
    console.log(goBackMsg);
    if (goBackMsg === "goback") {
      window.location.href = "/home";
    }
  }

  setScrollTrigger() {
    if (this.currentPath == asset[1].urlPathname) {
    } else if (this.currentPath == asset[2].urlPathname) {
      this.checkCatForColorCircle(this.circleFirst);
    } else if (this.currentPath == asset[3].urlPathname) {
      this.checkCatForColorCircle(this.circleFourth);
    } else if (this.currentPath == asset[4].urlPathname) {
      this.checkCatForColorCircle(this.circleFifth);
    } else if (this.currentPath == asset[5].urlPathname) {
      this.checkCatForColorCircle(this.circleSecond);
    } else if (this.currentPath == asset[6].urlPathname) {
      this.checkCatForColorCircle(this.circleThird);
    }
  }

  checkCatForColorCircle(circle) {
    let mm = GSAP.matchMedia();

    mm.add("(max-width: 570px)", () => {
      this.catSection = document.querySelector(".cat-page");
      this.progressWrapper = document.querySelector("progress-wrapper");
      this.progressBar = document.querySelector(".progress-bar");
      this.progress = 0;
      this.firstMove = new GSAP.timeline({
        scrollTrigger: {
          trigger: this.catSection,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
          scroller: ".cat-page",
        },
      })
        .to(
          this.progressBar,
          {
            scaleY: 1,
          },
          "same"
        )
        .from(
          circle.position,
          {
            x: 2,
            y: 1,
            z: -1.3,
          },
          "same"
        )
        .to(
          circle.scale,
          {
            x: 3,
            y: 3,
            z: 3,
          },
          "same"
        );
    });

    mm.add("(min-width: 571px)", () => {
      this.catSection = document.querySelector(".cat-page");
      this.progressWrapper = document.querySelector("progress-wrapper");
      this.progressBar = document.querySelector(".progress-bar");
      this.progress = 0;
      this.firstMove = new GSAP.timeline({
        scrollTrigger: {
          trigger: this.catSection,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
          scroller: ".cat-page",
        },
      })
        .to(
          this.progressBar,
          {
            scaleY: 1,
          },
          "same"
        )
        .from(
          circle.position,
          {
            x: 2,
            y: 1,
            z: -1.2,
          },
          "same"
        )
        .to(
          circle.scale,
          {
            x: 3,
            y: 3,
            z: 3,
          },
          "same"
        );
    });
  }

  resize() {}

  update() {
    // requestAnimationFrame(this.setAppearAnimation)
    window.addEventListener("resize", () => {
      this.setAppearAnimation();
      // console.log( this.progress)
    });
    TWEEN.update();
  }
}
