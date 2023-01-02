/*************************************************************** 
*Title: none
*Author: Andrewwoan
*Date: Nov 2022 
* Code version: none 
*Availability: https://github.com/andrewwoan/abigail-bloom-portolio-bokoko33/tree/master/Experience (Nov 2022) 
****************************************************************/ 
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

// Class that MANAGES Camera, Environment, Scene ...
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
    this.standingCatScene = new THREE.Scene();
    this.sideLyingCatScene = new THREE.Scene();
    this.lyingCatScene = new THREE.Scene();
    this.gameMap = new THREE.Scene();

    if (this.currentPath == assets[1].urlPathname) {

      this.scene = this.scene;
    } else if (this.currentPath == assets[2].urlPathname) {
      this.scene = this.eatingCatScene;
    } else if (this.currentPath == assets[3].urlPathname) {
      this.scene = this.playingCatScene;
    } else if (this.currentPath == assets[4].urlPathname) {
      this.scene = this.standingCatScene;
    } else if (this.currentPath == assets[5].urlPathname) {
      this.scene = this.lyingCatScene;
    } else if (this.currentPath == assets[6].urlPathname) {
      this.scene = this.sideLyingCatScene;
    } else if (this.currentPath == assets[7].urlPathname) {
      this.scene = this.gameMap;
    }

    this.time = new Time();
    this.sizes = new Sizes();
    this.camera = new Camera(); 
    this.resources = new Resources(assets);
    this.renderer = new Renderer();
    this.world = new World();
    this.goToLanding = new GoToLanding();
    // this.controls = new Controls();
    
      this.preloader = new Preloader();
      this.preloader.on("enablecontrols", () => {
        this.controls = new Controls();
      });
    // listen to emitted event
    this.time.on("update", () => {
      this.update();
    });

    this.sizes.on("resize", () => {
      this.resize();
    });

    // this.update();
  }

  resize() {
    this.camera.resize();
    this.world.resize();
    this.renderer.resize();
  }

  update() {
    if (this.camera) this.camera.update();
    if (this.world) this.world.update();
    if (this.renderer) this.renderer.update();
    // if (this.time) this.time.update();

    // window.requestAnimationFrame(() => {
    //   this.update();
    // });

    // this.preloader.update();
    // if (this.controls) {
    //   this.controls.update();
    // }
  }
}
