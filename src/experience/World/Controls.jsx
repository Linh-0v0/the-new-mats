import * as THREE from "three";
import Experience from "../Experience";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;

    if (this.cat) {
      this.actualCat = this.cat.scene;
    }

    // position on the curve/path
    this.progress = 0;
    this.dummyCurve = new THREE.Vector3(0, 0, 0);
  }

  resize() {}

  update() {
    
  }
}
