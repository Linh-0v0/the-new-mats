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
    this.catRoomChildren = {};
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

    this.scaleLerp = {
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

        // child.scale.set(0,0,0);
        // if (this.child.name === "Door") {

        // }
        // add child to the catRoom Array
        this.catRoomChildren[child.name] = child;
      });

      this.scene.add(this.actualCat);
      this.actualCat.scale.set(0.8, 0.8, 0.8);

      // Set Door
      this.geometry = new THREE.PlaneGeometry(3, 3);
      this.material = new THREE.MeshStandardMaterial({
        color: 0x9a1ee6,
        side: THREE.DoubleSide,
      });
      this.plane = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.plane);
      this.plane.rotation.x = 0;
      this.plane.position.y = 1;
      this.plane.position.z = 4;
      this.plane.scale.set(0, 0, 0);
      this.plane.name = "door";
      this.catRoomChildren[this.plane.name] = this.plane;

      // Set background before Door appears
      this.geometry2 = new THREE.PlaneGeometry(100, 100);
      this.materialBg = new THREE.MeshStandardMaterial({
        color: 0xfff6b1,
        side: THREE.DoubleSide,
      });
      this.planeBg = new THREE.Mesh(this.geometry2, this.materialBg);
      this.planeBg.name = "planeBg";
      this.scene.add(this.planeBg);
      // this.plane.rotation.x = Math.PI / 2;
      // this.plane.position.y = -0.3;
      this.planeBg.position.z = 2;
      // this.plane.receiveShadow = false;
      this.catRoomChildren[this.planeBg.name] = this.planeBg;
    }
  }

  setAnimation() {
    if (this.cat) {
      this.mixer = new THREE.AnimationMixer(this.actualCat);
      this.head = this.mixer.clipAction(this.cat.animations[3]);
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
