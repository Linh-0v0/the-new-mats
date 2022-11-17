import * as THREE from "three";
import Experience from "../Experience";
import Environment from "./Environment";

import Cat from "./Cat";

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
      
    })

    this.cat = new Cat();
    
  }

  resize() {
  }

  update() {
  }
}
