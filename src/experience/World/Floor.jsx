import * as THREE from "three";
import GSAP from "gsap";
import Experience from "../Experience";

export default class Floor {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setFloor();
  }

  setFloor() {
    this.geometry = new THREE.PlaneGeometry(100, 100);
    this.material = new THREE.MeshStandardMaterial({
      color: 0xfff6b1,
      side: THREE.DoubleSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
    // this.plane.rotation.x = Math.PI / 2;
    // this.plane.position.y = -0.3;
    this.plane.position.z = -7;
    // this.plane.receiveShadow = false;
  }

  resize() {}

  update() {}
}
