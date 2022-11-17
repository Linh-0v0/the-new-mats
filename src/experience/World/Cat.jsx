import * as THREE from "three";
import Experience from "../Experience";

export default class Cat {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.cat = this.resources.items.pinkcat;
    console.log(this.cat);

    if (this.cat) {
      this.actualCat = this.cat.scene;
    }
    // console.log(this.actualCat)

    this.setModel();
  }

  setModel() {
    this.scene.add(this.actualCat);
  }

  resize() {
  }

  update() {
  }
}
