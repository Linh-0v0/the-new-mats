import * as THREE from "three";
import Experience from "../Experience";
import GSAP from "gsap";
import * as TWEEN from "@tweenjs/tween.js";
import ScrollTrigger from "gsap/ScrollTrigger";
import EventEmitter from "events";
import LocomotiveScroll from "locomotive-scroll";
import assets from "../Utils/assets";

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

    this.goToLanding = this.experience.goToLanding;
    this.goBackMsgReceived = "";

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
        .to({ x: 0, z: 0 }, 2000)
        .delay(500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onStart(() => {
          new TWEEN.Tween(this.cat.scale)
            .to({ x: 1.2, y: 1.2, z: 1.2 }, 2000)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
        });
      tween.start();
    } else if (window.matchMedia("(max-width: 760px)").matches) {
      const tween = new TWEEN.Tween(this.cat.position)
        .to({ x: 1.1, z: 0 }, 2000)
        .delay(500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onStart(() => {
          new TWEEN.Tween(this.cat.scale)
            .to({ x: 0.8, y: 0.8, z: 0.8 }, 2000)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
        });
      tween.start();
    } else if (window.matchMedia("(max-width: 970px)").matches) {
      const tween = new TWEEN.Tween(this.cat.position)
        .to({ x: 1.4, z: 0 }, 2000)
        .delay(500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onStart(() => {
          new TWEEN.Tween(this.cat.scale)
            .to({ x: 1, y: 1, z: 1 }, 2000)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
        });
      tween.start();
    } else if (window.matchMedia("(max-width: 1100px)").matches) {
      const tween = new TWEEN.Tween(this.cat.position)
        .to({ x: 1.7, z: 0 }, 2000)
        .delay(500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onStart(() => {
          new TWEEN.Tween(this.cat.scale)
            .to({ x: 1.1, y: 1.1, z: 1.1 }, 2000)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
        });
      tween.start();
    } else {
      const tween = new TWEEN.Tween(this.cat.position)
        .to({ x: 2.2, z: 0 }, 2000)
        .delay(500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onStart(() => {
          new TWEEN.Tween(this.cat.scale)
            .to({ x: 1.5, y: 1.5, z: 1.5 }, 2000)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();
        });
      tween.start();
    }
  }

  goBackToLanding(goBackMsg) {
    console.log(goBackMsg);
    if (goBackMsg === "goback") {
      window.location.href = "/";
      // Original position that sees all parts of the model
      // this.movedToTarget.target[0] = 3;
      // this.movedToTarget = this.originalCameraPosition;
      // console.log("new movedtarget", this.movedToTarget)
    }
  }

  setScrollTrigger() {
    let mm = GSAP.matchMedia();
    mm.add("(max-width: 570px)", () => {
      this.catSection = document.querySelector(".cat-page");
      this.progressWrapper = document.querySelector("progress-wrapper");
      this.progressBar = document.querySelector(".progress-bar");

      GSAP.from(this.progressBar, {
        scaleY: 0,
        scrollTrigger: {
          trigger: this.catSection,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
          markers: true,
          pin: true,
          scroller: ".cat-page"
        },
      });
    });

    mm.add("(min-width: 571px)", () => {
      this.catSection = document.querySelector(".cat-page");
      this.progressWrapper = document.querySelector("progress-wrapper");
      this.progressBar = document.querySelector(".progress-bar");

      GSAP.from(this.progressBar, {
        scaleY: 0,
        scrollTrigger: {
          trigger: this.catSection,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
          markers: true,
          pin: true,
          scroller: ".cat-page"
        },
      });
    });
  }

  resize() {}

  update() {
    // requestAnimationFrame(this.setAppearAnimation)
    window.addEventListener("resize", () => {
      this.setAppearAnimation();
    });
    TWEEN.update();
    // if (this.goBackMsgReceived === "goback") {
    //   this.movedToTarget.target = this.originalCameraPosition.target;
    // }
    //   // Move camera to target
    //   this.movedToTarget.current = GSAP.utils.interpolate(
    //     this.movedToTarget.current,
    //     this.movedToTarget.target,
    //     this.movedToTarget.ease
    //   );
    //   this.camera.orthographicCamera.position.y = this.movedToTarget.current[0];
    //   this.camera.orthographicCamera.position.z = this.movedToTarget.current[1];
    // console.log("CAMERA Y Z: ", this.camera.orthographicCamera.position)
    // console.log(
    //   "this.movedToTargetZZZ",
    //   this.camera.orthographicCamera.position.y,
    //   this.camera.orthographicCamera.position.z,
    //   this.movedToTarget.current[1],
    //   this.movedToTarget.target[1]
    // );
  }
}
