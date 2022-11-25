import * as THREE from "three";
import Experience from "../Experience";
import Environment from "./Environment";

import CatPlayground from "./CatPlayground";
import EatingCat from "./Cats/EatingCat";
import PlayingCat from "./Cats/PlayingCat";
import LyingCat from "./Cats/LyingCat";
import SideLyingCat from "./Cats/SideLyingCat";
import StandingCat from "./Cats/StandingCat";

import Floor from "./Floor";
import CatControls from "./CatControls";
import Controls from "./Controls";


import asset from "../Utils/assets";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.eatingCatScene = this.experience.eatingCatScene;
    this.playingCatScene = this.experience.playingCatScene;
    this.resources = this.experience.resources;
    this.currentPath = window.location.pathname;

    // listen to emitted event
    this.resources.on("ready", () => {
      console.log("ALL CAT IN RESOURCE");
      this.environment = new Environment();
      this.floor = new Floor();

      if (this.currentPath == "/") {
        console.log("cat playground");
        this.cat = new CatPlayground();
        this.controls = new Controls();
      }
      else if (this.currentPath == asset[1].urlPathname) {
        console.log("eating CATTTT");
        this.cat = new EatingCat();
        this.controls = new CatControls();
      }
      else if (this.currentPath == asset[2].urlPathname) {
        console.log("playing CATTTT");
        this.cat = new PlayingCat();
        this.controls = new CatControls();
      }
      else if (this.currentPath == asset[3].urlPathname) {
        console.log("standing CATTTT");
        this.cat = new StandingCat();
        this.controls = new CatControls();
      }
      else if (this.currentPath == asset[4].urlPathname) {
        console.log("lying CATTTT");
        this.cat = new LyingCat();
        this.controls = new CatControls();
      }
      else if (this.currentPath == asset[5].urlPathname) {
        console.log("side CATTTT");
        this.cat = new SideLyingCat();
        this.controls = new CatControls();
      }

      // this.controls = new Controls();
    });
  }

  resize() {}

  update() {
    if (this.cat) {
      this.cat.update();
    }

    if (this.controls) {
      this.controls.update();
    }
  }
}