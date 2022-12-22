import * as THREE from "three";
import Experience from "./Experience";
import asset from "./Utils/assets";

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;

    this.scene = this.experience.scene;
    this.eatingCatScene = this.experience.eatingCatScene;
    this.playingCatScene = this.experience.playingScene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.controls = this.experience.controls;
    this.currentPath = window.location.pathname;

    // this.goBackMsg = this.experience.controls.goBackMsg;

    // if (this.currentPath == asset[1].urlPathname) {
    //   this.scene = this.playingCatScene;
    // }

    this.setRenderer();
  }

  setRenderer() {
    if (this.canvas) {
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
      });

      this.renderer.physicallyCorrectLights = true;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.toneMapping = THREE.CineonToneMapping;
      this.renderer.toneMappingExposure = 1.75;
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.setSize(this.sizes.width, this.sizes.height);
      this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }
  }

  resize() {
    if (this.canvas) {
      this.renderer.setSize(this.sizes.width, this.sizes.height);
      this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }
  }

  update() {
    if (this.canvas) {
      // this.renderer.render(this.scene, this.camera.perspectiveCamera);

      //First screen
      // this.renderer.setViewport(0, 0, this.sizes.width, this.sizes.height);

      // this.renderer.render(this.scene, this.camera.orthographicCamera);
      // this.renderer.render(this.scene, this.camera.perspectiveCamera);

      if (window.location.pathname == asset[7].urlPathname) {
        this.renderer.render(this.scene, this.camera.perspectiveCamera);
      } else {
        this.renderer.render(this.scene, this.camera.orthographicCamera);
      }
    }
  }
}
