import { EventEmitter } from "events";
import Experience from "./Experience";
import GSAP from "gsap";
import * as TWEEN from "@tweenjs/tween.js";

//Sizes class: detect window size

// EventEmitter: emits event that can be listened to and acted on
// cuz I need other classes to update
// whenever resize is called
export default class Preloader extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;

    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.world = this.experience.world;
    this.device = this.sizes.device;

    this.sizes.on("switchdevice", (device) => {
      this.device = device;
    });

    this.world.on("worldready", () => {
      this.setAssets();
      this.playIntro();
    });
  }

  setAssets() {
    this.cat = this.experience.world.cat.actualCat;
    this.catRoomChildren = this.experience.world.cat.catRoomChildren;
    console.log("THE CAT PLAYFROUNd", this.cat);
    console.log("ROOM children", this.catRoomChildren);
  }

  // Door appear
  firstIntro() {
    return new Promise((resolve) => {
      this.timeline = new GSAP.timeline();

      if (this.device === "desktop") {
        this.timeline
          .to(this.catRoomChildren.door.scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(2.5)",
            duration: 1,
          })
          .to(this.catRoomChildren.door.position, {
            y: 1,
            ease: "power1.out",
            duration: 1,
            onComplete: resolve,
          });
        // .to(this.cat.position, {

        // })
      } else {
        this.timeline
          .to(this.catRoomChildren.door.scale, {
            x: 0.5,
            y: 0.5,
            z: 0.5,
            ease: "back.out(2.5)",
            duration: 1,
          })
          .to(this.catRoomChildren.door.position, {
            y: 2,
            ease: "power1.out",
            duration: 1,
            onComplete: resolve,
          });
        // .to(this.cat.position, {

        // })
      }
    });
  }

  // To The wall
  secondIntro() {
    return new Promise((resolve) => {
      this.secondTimeline = new GSAP.timeline();

      if (this.device === "desktop") {
        this.secondTimeline
          .to(
            this.catRoomChildren.door.position,
            {
              y: 1,
              z: 5,
              ease: "power1.out",
              duration: 0.25,
            },
            "doorsame"
          )
          .to(
            this.catRoomChildren.door.scale,
            {
              x: 5,
              y: 5,
              z: 5,
              duration: 0.25,
            },
            "doorsame"
          )
          .to(
            this.catRoomChildren.planeBg.material,
            {
              visible: false,
            },
            "invisible"
          )
          .to(
            this.catRoomChildren.door.material,
            {
              visible: false,
            },
            "invisible"
          )
          .to(
            this.camera.orthographicCamera.position,
            {
              y: 2.5,
              duration: 2,
              delay: 0.7,
            },
            "same"
          )
          .to(
            this.cat.scale,
            {
              x: 1.6,
              y: 1.6,
              z: 1.6,
              duration: 1,
            },
            "same"
          );
      } else {
        this.secondTimeline
          .to(this.catRoomChildren.door.position, {
            y: 5,
            z: 20,
            ease: "power1.out",
            duration: 1,
          })
          .to(this.camera.orthographicCamera.position, {
            y: 2,
          });
      }
    });
  }

  async playIntro() {
    await this.firstIntro();
    window.addEventListener("click", () => {
      console.log("CLICK");
      this.playSecondIntro();
    });
  }

  async playSecondIntro() {
    await this.secondIntro();
    console.log("SECOND INTRO");
    this.emit("enablecontrols");
  }
}
