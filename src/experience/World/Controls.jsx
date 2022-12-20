import * as THREE from "three";
import Experience from "../Experience";
import EventEmitter from "events";
import assets from "../Utils/assets";

// CONTROL IN LANDING PAGE
export default class Controls extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;

    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.cat = this.experience.world.cat.actualCat;

    this.goToLanding = this.experience.goToLanding;
    this.goBackMsgReceived = "";

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.intersects = [];
    this.catClicked = "";
    this.catHover = {};
    this.catOriginalSize = {};

    this.eatingCatPattern = /.*eatingCat/;
    this.lyingCatPattern = /.*lyingCat/;
    this.standingCatPattern = /.*standingCat/;
    this.sideLyingCatPattern = /.*sideLyingCat/;
    this.playingCatPattern = /.*playingCat/;

    this.onClick();
    this.checkClickedCat();
    this.setAppearAnimation();

    this.goToLanding.on("goToLanding", (goBackMsg) => {
      this.goBackToLanding(goBackMsg);
      this.goBackMsgReceived = goBackMsg;
    });
  }

  onClick() {
    if (this.cat) {
      console.log("ON CLICK", this.cat);
      window.addEventListener("click", (e) => {
        this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(
          this.pointer,
          this.experience.camera.orthographicCamera
        );
        this.intersects = this.raycaster.intersectObjects(
          this.cat.children,
          true
        );

        console.log("INTERSECT", this.intersects);
        this.checkClickedCat();
      });
    }
  }

  checkClickedCat() {
    if (this.intersects.length > 0) {
      let intersectObject = this.intersects[0].object.parent.name;

      if (this.eatingCatPattern.test(intersectObject)) {
        this.catClicked = "EatingCat";
        window.location.href = assets[2].urlPathname;
      }
      if (this.playingCatPattern.test(intersectObject)) {
        this.catClicked = "PlayingCat";
        window.location.href = assets[3].urlPathname;
      }
      if (this.standingCatPattern.test(intersectObject)) {
        this.catClicked = "StandingCat";
        window.location.href = assets[4].urlPathname;
      }
      if (this.lyingCatPattern.test(intersectObject)) {
        this.catClicked = "LyingCat";
        window.location.href = assets[5].urlPathname;
      }
      if (this.sideLyingCatPattern.test(intersectObject)) {
        this.catClicked = "SideLyingCat";
        window.location.href = assets[6].urlPathname;
      }
    }
  }

  setAppearAnimation() {}

  goBackToLanding(goBackMsg) {
    console.log(goBackMsg);
    if (goBackMsg === "goback") {
      window.location.href = "/";
      // Original position that sees all parts of the model
      // this.movedToTarget.target[0] = 3;
      // this.movedToTarget = this.originalCameraPosition;
      // console.log("new movedtarget", this.movedToTarget)
    }
  }

  resize() {}

  update() {}
}
