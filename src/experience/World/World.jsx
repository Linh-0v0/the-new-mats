import * as THREE from "three";
import Experience from "../Experience";
import Environment from "./Environment";

import Cat from "./Cat";
import EatingCat from "./PlayingCat";
import Floor from "./Floor";
import Controls from "./Controls";
import PlayingCat from "./PlayingCat";

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
        console.log("EATING CAT NEEDS TOA APPEAR"); 
        this.cat = new Cat();
        this.controls = new Controls();
      }
      if (this.currentPath == asset[1].urlPathname) {
        console.log("Playing CATTTT");
        this.cat = new PlayingCat();
        this.controls = new Controls();
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
