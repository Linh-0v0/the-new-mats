import { EventEmitter } from "events";
import Experience from "./Experience";
import GSAP from "gsap";
import convert from "./Utils/convertToSpans";

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

    // GSAP.registerPlugin(ScrollTrigger);

    if (
      window.location.pathname == "/" ||
      window.location.pathname == "/home"
    ) {
      this.sizes.on("switchdevice", (device) => {
        this.device = device;
      });
      this.world.on("worldready", () => {
        this.setAssets();
        this.playIntro();
      });
    }
  }

  setAssets() {
    if (document.querySelector(".intro-text1")) {
      convert(document.querySelector(".intro-text1"));
      convert(document.querySelector(".intro-text2"));
    }

    this.cat = this.experience.world.cat.actualCat;
    this.catRoomChildren = this.experience.world.cat.catRoomChildren;
    console.log("THE CAT PLAYFROUNd", this.cat);
    console.log("ROOM children", this.catRoomChildren);
  }

  // Door appear
  firstIntro() {
    return new Promise((resolve) => {
      this.timeline = new GSAP.timeline();

      if (this.device === "desktop" || this.device === "tablet") {
        this.timeline.to(this.catRoomChildren.door.scale, {
          x: 0.35,
          y: 0.35,
          z: 0.35,
          ease: "back.out(2.5)",
          duration: 1,
        });
      }
      if (this.device === "mobile") {
        this.timeline.to(this.catRoomChildren.door.scale, {
          x: 0.35,
          y: 0.35,
          z: 0.35,
          ease: "back.out(2.5)",
          duration: 1,
        });
      }
      this.timeline.to(
        ".intro-text1 .animateThis",
        {
          yPercent: -100,
          stagger: 0.05,
          duration: 0.1,
          ease: "back.in(1.2)",
        },
        "introsame"
      );
      this.timeline.to(
        ".intro-text2 .animateThis",
        {
          yPercent: -100,
          stagger: 0.05,
          duration: 0.1,
          ease: "back.in(1.2)",
          onComplete: resolve,
        },
        "introsame"
      );
    });
  }

  // To The wall
  secondIntro() {
    return new Promise((resolve) => {
      this.secondTimeline = new GSAP.timeline();

      if (this.device === "desktop") {
        if (window.location.pathname == "/") {
          this.secondTimeline
            .to(
              this.catRoomChildren.door.position,
              {
                y: -11,
                x: -7,
                ease: "Back.easeIn.config(4)",
                duration: 1,
              },
              "doorsame"
            )
            .to(
              this.catRoomChildren.door.scale,
              {
                x: 5,
                y: 5,
                z: 5,
                duration: 1,
              },
              "doorsame"
            )
            .to(this.catRoomChildren.door, {
              visible: false,
            })
        }
        this.secondTimeline
          .to(
            this.catRoomChildren.planeBg,
            {
              visible: false,
            },
            "doorsame"
          )
          .to(this.cat.scale, {
            x: 0.8,
            y: 0.8,
            z: 0.8,
          });
      }
      if (this.device === "tablet") {
        if (window.location.pathname == "/") {
          this.secondTimeline
            .to(
              this.catRoomChildren.door.position,
              {
                y: -11,
                x: -7,
                ease: "Back.easeIn.config(4)",
                duration: 1,
              },
              "doorsame"
            )
            .to(
              this.catRoomChildren.door.scale,
              {
                x: 5,
                y: 5,
                z: 5,
                duration: 1,
              },
              "doorsame"
            )
            .to(this.catRoomChildren.door, {
              visible: false,
            });
        }
        this.secondTimeline
          .to(
            this.catRoomChildren.planeBg,
            {
              visible: false,
            },
            "doorsame"
          )
          .to(
            this.cat.position,
            {
              y: 1,
            },
            "doorsame"
          )
          .to(this.cat.scale, {
            x: 0.45,
            y: 0.45,
            z: 0.45,
          });
      }
      if (this.device === "mobile") {
        if (window.location.pathname == "/") {
          this.secondTimeline
            .to(
              this.catRoomChildren.door.position,
              {
                y: -11,
                x: -7,
                ease: "Back.easeIn.config(4)",
                duration: 1,
              },
              "doorsame"
            )
            .to(
              this.catRoomChildren.door.scale,
              {
                x: 5,
                y: 5,
                z: 5,
                duration: 1,
              },
              "doorsame"
            )
            .to(this.catRoomChildren.door, {
              visible: false,
            });
        }
        this.secondTimeline
          .to(
            this.catRoomChildren.planeBg,
            {
              visible: false,
            },
            "doorsame"
          )
          .to(
            this.cat.position,
            {
              y: 1.8,
            },
            "doorsame"
          )
          .to(this.cat.scale, {
            x: 0.26,
            y: 0.26,
            z: 0.26,
          });
      }

      this.secondTimeline.to(
        ".intro-text1 .animateThis",
        {
          yPercent: 100,
          duration: 0.1,
          ease: "back.in(1.2)",
        },
        "doorsame"
      );
      this.secondTimeline.to(
        ".intro-text2 .animateThis",
        {
          yPercent: 100,
          duration: 0.1,
          ease: "back.in(1.2)",
        },
        "doorsame"
      );
      this.secondTimeline.to(
        ".intro-text1 .animateThis",
        {
          display: "none",
        },
        "samenone"
      );
      this.secondTimeline.to(
        ".intro-text2 .animateThis",
        {
          display: "none",
          onComplete: resolve,
        },
        "samenone"
      );
    });
  }

  async playIntro() {
    if (window.location.pathname == "/") {
      await this.firstIntro();

      window.addEventListener("click", () => {
        console.log("CLICK");
        this.playSecondIntro();
      });
    } else if (window.location.pathname == "/home") {
      this.playSecondIntro();
    }
  }

  async playSecondIntro() {
    await this.secondIntro();
    console.log("SECOND INTRO");
    this.emit("enablecontrols");
  }
}
