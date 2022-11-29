import * as THREE from "three";
import GUI from "lil-gui";
import Experience from "../Experience";

//Deal with environment (lighting)
export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setSunlight();
  }

  setSunlight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 2.6);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;

    // const helper = new THREE.CameraHelper( this.sunLight.shadow.camera );
    // this.scene.add(helper);

    this.sunLight.position.set(1, 7, 7);
    this.scene.add(this.sunLight);

    const ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.scene.add(ambientLight);
  }

  resize() {}

  update() {}
}
