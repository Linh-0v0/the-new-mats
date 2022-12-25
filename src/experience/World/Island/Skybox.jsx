import * as THREE from "three";
import Experience from "../../Experience";

/* SKY */
export default class Skybox {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setModel()
  }

  setModel() {
    const loader = new THREE.CubeTextureLoader();
    //order: pos-x, neg-x, pos-y, neg-y, pos-z, neg-z
    const texture = loader.load([
        '/textures/top-sky.png',
        '/textures/top-sky.png',
        '/textures/uttertop-sky.jpeg',
        '/textures/top-sky.png',
        '/textures/top-sky.png',
        '/textures/top-sky.png'
    ]);
    this.scene.background = texture;
  }

}
