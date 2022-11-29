import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.createPerspectiveCamera();
    this.createOrthographicCamera();
    this.setOrbitControls();
  }

  createPerspectiveCamera() {
    if (this.scene) {
      this.perspectiveCamera = new THREE.PerspectiveCamera(
        75,
        this.sizes.aspect,
        0.1,
        1000
      );
      this.scene.add(this.perspectiveCamera);
      this.perspectiveCamera.position.x = 10;
      this.perspectiveCamera.position.y = 5;
      this.perspectiveCamera.position.z = 5;
    }
  }

  createOrthographicCamera() {
    if (this.scene) {
      this.orthographicCamera = new THREE.OrthographicCamera(
        (-this.sizes.aspect * this.sizes.frustrum) / 1.9,
        (this.sizes.aspect * this.sizes.frustrum) / 1.9,
        this.sizes.frustrum / 1.9,
        -this.sizes.frustrum / 1.9,
        -80,
        80
      );

      this.orthographicCamera.position.x = -0.25;
      this.orthographicCamera.position.y = 2.7;
      // this.orthographicCamera.position.z = 50;
      this.orthographicCamera.rotation.x = -Math.PI / 22;

      // this.orthographicCamera = new THREE.PerspectiveCamera(
      //   75,
      //   this.sizes.aspect,
      //   0.1,
      //   100
      // );
      this.scene.add(this.orthographicCamera);

      this.helper = new THREE.CameraHelper(this.orthographicCamera);
      // this.scene.add(this.helper);

      const size = 10;
      const divisions = 10;

      const gridHelper = new THREE.GridHelper(size, divisions);
      // this.scene.add(gridHelper);

      const axesHelper = new THREE.AxesHelper(5);
      // this.scene.add(axesHelper);
    }
  }

  // Zoom, Pan, Move camera to see model
  setOrbitControls() {
    if (this.canvas) {
      this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
      // this.controls.enableDamping = true;
      // this.controls.enableZoom = true;
      this.controls.enableDamping = false;
      this.controls.enableZoom = false;
    }
  }

  resize() {
    // Update Perspective Camera on Resize
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();

    // Update Orthographic Camera on Resize
    this.orthographicCamera.left =
      (-this.sizes.aspect * this.sizes.frustrum) / 1.9;
    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.frustrum) / 1.9;
    this.orthographicCamera.top = this.sizes.frustrum / 1.9;
    this.orthographicCamera.bottom = -this.sizes.frustrum / 1.9;
    this.orthographicCamera.updateProjectionMatrix();
  }

  update() {
    if (this.canvas) {
      this.controls.update();
      // console.log(this.perspectiveCamera.position);

      this.helper.matrixWorldNeedsUpdate = true;
      this.helper.update();
      this.helper.position.copy(this.orthographicCamera.position);
      this.helper.position.copy(this.orthographicCamera.rotation);
    }
  }
}
