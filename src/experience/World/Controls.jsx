import * as THREE from "three";
import Experience from "../Experience";
import GSAP from "gsap";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
import EventEmitter from "events";
import assets from "../Utils/assets";

export default class Controls extends EventEmitter {
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

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.intersects = [];
    this.catClicked = "";
    this.catHover = "";

    this.eatingCatPattern = /.*eatingCat/;
    this.lyingCatPattern = /.*lyingCat/;
    this.standingCatPattern = /.*standingCat/;
    this.sideLyingCatPattern = /.*sideLyingCat/;
    this.playingCatPattern = /.*playingCat/;

    GSAP.registerPlugin(ScrollTrigger);

    this.onClick();
    this.onHover();
    this.checkHoveredCat();
    this.checkClickedCat();
    this.setAppearAnimation();

    this.goToLanding.on("goToLanding", (goBackMsg) => {
      this.goBackToLanding(goBackMsg);
      this.goBackMsgReceived = goBackMsg;
    });

    // this.setScrollTrigger();
    // this.setPath();
  }

  onHover() {
    if (this.cat) {
      console.log("ON enter", this.cat);
      window.addEventListener("mousemove", (e) => {
        this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(
          this.pointer,
          this.experience.camera.orthographicCamera
        );
        this.intersects = this.raycaster.intersectObjects(
          this.cat.children,
          true
        );

        console.log("INTERSECT", this.intersects);
        this.checkHoveredCat();
      });
    }
  }

  onClick() {
    if (this.cat) {
      console.log("ON CLICK", this.cat);
      window.addEventListener("click", (e) => {
        this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(
          this.pointer,
          this.experience.camera.orthographicCamera
        );
        this.intersects = this.raycaster.intersectObjects(
          this.cat.children,
          true
        );

        console.log("INTERSECT", this.intersects);
        this.checkClickedCat();
      });
    }
  }

  checkHoveredCat() {
    if (this.intersects.length > 0) {
      let intersectObject = this.intersects[0].object.parent.name;

      if (this.eatingCatPattern.test(intersectObject)) {
        this.catHover = "EatingCat";
      } else if (this.playingCatPattern.test(intersectObject)) {
        this.catHover = "PlayingCat";
      } else if (this.standingCatPattern.test(intersectObject)) {
        this.catHover = "StandingCat";
      } else if (this.lyingCatPattern.test(intersectObject)) {
        this.catHover = "LyingCat";
      } else if (this.sideLyingCatPattern.test(intersectObject)) {
        this.catHover = "SideLyingCat";
      }
    }
  }

  checkClickedCat() {
    if (this.intersects.length > 0) {
      let intersectObject = this.intersects[0].object.parent.name;

      if (this.eatingCatPattern.test(intersectObject)) {
        this.catClicked = "EatingCat";
        window.location.href = assets[1].urlPathname;
      } else if (this.playingCatPattern.test(intersectObject)) {
        this.catClicked = "PlayingCat";
        window.location.href = assets[2].urlPathname;
      } else if (this.standingCatPattern.test(intersectObject)) {
        this.catClicked = "StandingCat";
        window.location.href = assets[3].urlPathname;
      } else if (this.lyingCatPattern.test(intersectObject)) {
        this.catClicked = "LyingCat";
        window.location.href = assets[4].urlPathname;
      } else if (this.sideLyingCatPattern.test(intersectObject)) {
        this.catClicked = "SideLyingCat";
        window.location.href = assets[5].urlPathname;
      }
    }
  }

  setAppearAnimation() {}

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

  // setScrollTrigger() {
  //   ScrollTrigger.defaults({
  //     scroller: ".App"
  //   })

  //   let mm = GSAP.matchMedia();

  //   mm.add("(min-width: 969px)", () => {
  //     // desktop setup code here...
  //     console.log("fire desktop");

  //     // First section --------------------------
  //     this.firstMoveTimeline = new GSAP.timeline({
  //       scrollTrigger: {
  //         trigger: ".first-move",
  //         markers: true,
  //         start: "top top",
  //         end: "bottom bottom",
  //         scrub: 0.6,
  //         invalidateOnRefresh: true,
  //       },
  //     });
  //     this.firstMoveTimeline.to(this.cat.position, {
  //       x: () => {
  //         return this.sizes.width * 0.0014;
  //       },
  //     });

  //     //  // Second section --------------------------
  //     //  this.firstMoveTimeline = new GSAP.timeline({
  //     //   scrollTrigger: {
  //     //     trigger: ".first-move",
  //     //     scroller: ".App",
  //     //     start: "top top",
  //     //     end: "bottom bottom",
  //     //     scrub: 0.6,
  //     //     invalidateOnRefresh: true,
  //     //   },
  //     // });
  //     // this.firstMoveTimeline.to(this.cat.position, {
  //     //   x: () => {
  //     //     return this.sizes.width * 0.0014;
  //     //   },
  //     // });

  //   });

  //   mm.add("(max-width: 968px)", () => {
  //     // mobile setup code here...
  //     console.log("fire mobile");
  //   });
  // }

  // setPath() {
  //   console.log("CONTROLS", this.cat);

  //   this.timeline = new GSAP.timeline();

  //   this.timeline.to(this.cat.position, {
  //     // x: () => {
  //     //   return this.sizes.width * 0.0023;
  //     // },
  //     x: 3,
  //     scrollTrigger: {
  //       trigger: ".first-move",
  //       markers: true,
  //       // Scroller in this case is the App (not Viewport)
  //       scroller: ".App",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: 1,
  //       // invalidateOnRefresh: true,
  //     },
  //   });
  // }

  resize() {}

  update() {
    if (this.cat) {
      if (this.catHover == "EatingCat" || this.catHover == "LyingCat" || this.catHover == "PlayingCat" || this.catHover == "SideLyingCat" || this.catHover == "StandingCat") {
        this.cat.scale.set(1.5, 1.5, 1.5);
        if (this.intersects.length === 0) {
          this.catHover = "";
        }
      }
      if (this.catHover == "") {
        this.cat.scale.set(1.3, 1.3, 1.3);
      }
    }

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
