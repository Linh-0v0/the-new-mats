import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Resources from "./Utils/Resources";
import assets from "./Utils/assets";

import Camera from "./Camera";
import Renderer from "./Renderer";

import World from "./World/World";
import GoToLanding from "./GoToLanding";
import Controls from "../experience/World/Controls";
import Preloader from "./Preloader";

// MANAGES Camera, Scene,
export default class Experience {
  static instance;
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }
    //if above is not exist, set
    Experience.instance = this;
    this.currentPath = window.location.pathname;

    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.eatingCatScene = new THREE.Scene();
    this.playingCatScene = new THREE.Scene();

    console.log("EXPERIENCE", this.currentPath);
    if (this.currentPath == "/") {
      this.scene = this.scene;
    } else if (this.currentPath == assets[1].urlPathname) {
      console.log("EATING CATTTT");
      this.scene = this.eatingCatScene;
    } 
    else if (this.currentPath == assets[2].urlPathname) {
      console.log("PLAYING CATTTT");
      this.scene = this.playingCatScene;
    }

    this.time = new Time();
    this.sizes = new Sizes();
    this.camera = new Camera();
    this.resources = new Resources(assets);
    this.renderer = new Renderer();

    this.world = new World();
    this.preloader = new Preloader();
    this.goToLanding = new GoToLanding();
    // this.controls = new Controls();

    this.preloader.on("enablecontrols", () => {
      this.controls = new Controls();
    })

    // listen to emitted event
    this.time.on("update", () => {
      this.update();
    });

    this.sizes.on("resize", () => {
      this.resize();
    });
  }

  resize() {
    this.camera.resize();
    this.world.update();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
    // if (this.controls) {
    //   this.controls.update();
    // }
  }
}
