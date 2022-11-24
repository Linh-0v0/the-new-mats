import * as THREE from "three";
import Experience from "../Experience";
import GSAP from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import EventEmitter from "events";

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
    console.log("ORIGINAL SCALE", this.originalScale);

    // this.originalCameraPosition = {
    //   current: [
    //     // this.camera.orthographicCamera.position.x,
    //     3, 5,
    //   ],
    //   target: [
    //     // this.camera.orthographicCamera.position.x,
    //     3, 5,
    //   ],
    //   ease: 0.1,
    // };

    // this.movedToTarget = {
    //   current: [
    //     // this.camera.orthographicCamera.position.x,
    //     3, 5,
    //   ],
    //   target: [
    //     // this.camera.orthographicCamera.position.x,
    //     this.camera.orthographicCamera.position.y,
    //     this.camera.orthographicCamera.position.z,
    //   ],
    //   ease: 0.1,
    // };

    GSAP.registerPlugin(ScrollTrigger);

    this.onClick();
    this.onHover();
    this.checkHoveredCat();
    this.checkClickedCat();
    this.setCameraToTarget();
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
      if (this.intersects[0].object.parent.name === "Body003") {
        this.catHover = "EatingCat";
      }
      //   this.catClicked = "EatingCat";
      else if (this.intersects[0].object.parent.parent.name === "Body003") {
        this.catHover = "EatingCat";
        //     this.catClicked = "EatingCat";
      }
    }
  }

  checkClickedCat() {
    if (this.intersects.length > 0) {
      if (this.intersects[0].object.parent.name === "Body003") {
        this.catClicked = "EatingCat";
        this.emit("eatingCat");
        window.location.href = "/scene/cat-playing";
      } else {
        if (this.intersects[0].object.parent.parent.name === "Body003") {
          this.catClicked = "EatingCat";
          this.emit("eatingCat");
          window.location.href = "/scene/cat-playing";
        }
      }
    }
  }
  // this.setCameraToTarget();

  setCameraToTarget() {
    if (this.catClicked === "EatingCat") {
      // console.log(" CAT CLICKEE", this.catClicked);
      // console.log("SETCAMERA TO MOVE");
      this.movedToTarget.target[1] = 3;
    } else if (this.catClicked === "") {
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
      if (this.catHover == "EatingCat") {
        this.cat.scale.set(0.5, 0.5, 0.5);
        if (this.intersects.length === 0) {
          this.catHover = "";
        }
      }
      if (this.catHover == "") {
        this.cat.scale.set(
          0.3, 0.3, 0.3
        );
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
