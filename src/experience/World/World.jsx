import * as THREE from "three";
import Experience from "../Experience";
import Environment from "./Environment";

import Cat from "./Cat";
import Floor from "./Floor"
import Controls from "./Controls";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;

    // listen to emitted event
    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.cat = new Cat();
      this.floor = new Floor();
      this.controls = new Controls();
    })    
  }

  resize() {
  }

  update() {
    if (this.cat) {
      this.cat.update();
    }

    if (this.controls) {
      this.controls.update();
    }
  }
}
