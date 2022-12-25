import * as THREE from "three";
import GSAP from "gsap";
import Experience from "../Experience";

/* CIRCLE THAT APPEAR BELOW CAT IN MEMBER INFO PAGE */
export default class Circle {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setCircle();
  }

  setCircle() {
    const geometry = new THREE.CircleGeometry(5, 64);
    const material = new THREE.MeshStandardMaterial({ color: 0xffd2d1 });
    const material2 = new THREE.MeshStandardMaterial({ color: 0x887259 });
    const material3 = new THREE.MeshStandardMaterial({ color: 0xDE9D54 });
    const material4 = new THREE.MeshStandardMaterial({ color: 0xA7C4D5 });
    const material5 = new THREE.MeshStandardMaterial({ color: 0xD2C4E4 });

    this.circleFirst = new THREE.Mesh(geometry, material);
    this.circleSecond = new THREE.Mesh(geometry, material2);
    this.circleThird = new THREE.Mesh(geometry, material3);
    this.circleFourth = new THREE.Mesh(geometry, material4);
    this.circleFifth = new THREE.Mesh(geometry, material5);

    this.circleFirst.position.set(0, 1.1, 0);
    this.circleSecond.position.set(0, 1, 0);
    this.circleThird.position.set(0, 1, 0);
    this.circleFourth.position.set(0, 1, 0);
    this.circleFifth.position.set(0, 1, 0);

    this.circleFirst.scale.set(0, 0, 0);
    this.circleSecond.scale.set(0, 0, 0);
    this.circleThird.scale.set(0, 0, 0);
    this.circleFourth.scale.set(0, 0, 0);
    this.circleFifth.scale.set(0, 0, 0);

    this.circleFirst.rotation.x =
      this.circleSecond.rotation.x =
      this.circleThird.rotation.x =
      this.circleFourth.rotation.x =
      this.circleFifth.rotation.x =
        -Math.PI/3;

    this.circleFirst.receiveShadow =
      this.circleSecond.receiveShadow =
      this.circleThird.receiveShadow =
      this.circleFourth.receiveShadow =
      this.circleFifth.receiveShadow =
        true;

    this.scene.add(this.circleFirst);
    this.scene.add(this.circleSecond);
    this.scene.add(this.circleThird);
    this.scene.add(this.circleFourth);
    this.scene.add(this.circleFifth);
  }

  resize() {}

  update() {}
}
