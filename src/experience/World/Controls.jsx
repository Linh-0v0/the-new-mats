import * as THREE from "three";
import Experience from "../Experience";
import GSAP from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;

    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.cat = this.experience.world.cat.actualCat;

    GSAP.registerPlugin(ScrollTrigger);

    this.setPath();
  }

  setPath() {
    console.log("CONTROLS", this.cat);

    this.timeline = new GSAP.timeline();

    this.timeline.to(this.cat.position, {
      // x: () => {
      //   return this.sizes.width * 0.0023;
      // },
      x: 3,
      scrollTrigger: {
        trigger: ".first-move",
        markers: true,
        // Scroller in this case is the App (not Viewport)
        scroller: ".App",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // invalidateOnRefresh: true,
      },
    });
  }

  resize() {}

  update() {}
}
