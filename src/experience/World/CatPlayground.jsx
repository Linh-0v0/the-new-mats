import * as THREE from "three";
import GSAP from "gsap";
import { EventEmitter } from "events";

import Experience from "../Experience";

export default class EatingCat extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.cat = this.resources.items.catPlayground;
    this.camera = this.experience.camera;
    // console.log(this.cat);

    if (this.cat) {
      this.actualCat = this.cat.scene;
    }

    // lerping function / linear interpolation
    // for the smoothness of moving camera when scrolling
    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.setModel();
    this.setAnimation();
    this.onMouseMove();
  }

  setModel() {
    if (this.cat) {
      this.actualCat.children.forEach((child) => {
        child.castShadow = false;
        child.receiveShadow = false;

        if (child instanceof THREE.Group) {
          child.children.forEach((grandChild) => {
            grandChild.castShadow = false;
            grandChild.receiveShadow = false;
          });
        }
      });

      this.scene.add(this.actualCat);
      this.actualCat.scale.set(0.3, 0.3, 0.3);
    }
  }

  setAnimation() {
    if (this.cat) {
      this.mixer = new THREE.AnimationMixer(this.actualCat);
      this.head = this.mixer.clipAction(this.cat.animations[4]);
      this.head.play();
    }
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      // console.log(e);
      // value [-1,1] -> the model moves a little left-right
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.2;
    });
  }

  resize() {}

  update() {
    // Move cat's head
    this.lerp.current = GSAP.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );
    this.actualCat.rotation.y = this.lerp.current;

    this.mixer.update(this.time.delta * 0.0008);
  }
}
