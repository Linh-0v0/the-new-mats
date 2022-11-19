import * as THREE from "three";
import Experience from "../Experience";

export default class Cat {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.cat = this.resources.items.pinkcat;
    // console.log(this.cat);

    if (this.cat) {
      this.actualCat = this.cat.scene;
    }
    // console.log(this.actualCat)

    this.setModel();
  }

  setModel() {
    if (this.cat) {
      this.actualCat.children.forEach((child) => {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child instanceof THREE.Group) {
          child.children.forEach((grandChild) => {
            grandChild.castShadow = true;
            grandChild.receiveShadow = true;
          });
        }
      })

      this.scene.add(this.actualCat);
      this.actualCat.scale.set(0.11, 0.11, 0.11);
    }
  }

  resize() {}

  update() {}
}
