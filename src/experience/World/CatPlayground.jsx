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
    this.wallPattern = /.*_wall/;
    this.eatingCatPattern = /.*eatingCat/;
    this.lyingCatPattern = /.*lyingCat/;
    this.standingCatPattern = /.*standingCat/;
    this.sideLyingCatPattern = /.*sideLyingCat/;
    this.playingCatPattern = /.*playingCat/;
    this.amateurPattern = /.*Armature.*/;
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

    this.lerpY = {
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
            grandChild.castShadow = true;
            grandChild.receiveShadow = true;
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

      // Set background behide the Door before Door appears
      //   this.geometry2 = new THREE.PlaneGeometry(100, 100);
      //   this.materialBg = new THREE.MeshStandardMaterial({
      //     color: 0xfff6b1,
      //     side: THREE.DoubleSide,
      //   });
      //   this.planeBg = new THREE.Mesh(this.geometry2, this.materialBg);
      //   this.planeBg.name = "planeBg";
      //   this.scene.add(this.planeBg);
      //   // this.plane.rotation.x = Math.PI / 2;
      //   // this.plane.position.y = -0.3;
      //   this.planeBg.position.z = 2;
      //   // this.plane.receiveShadow = false;
      //   this.catRoomChildren[this.planeBg.name] = this.planeBg;
    }
  }

  setAnimation() {
    if (this.cat) {
      console.log("THIS CAT", this.cat);
      // var i = 0;
      // this.cat.animations.forEach((child) => {
      //   if (this.amateurPattern.test(child.name)) {
      //     const newMixerStr = new String(`Mixer${i}`);
      //     i = i + 1;
      //     // let `{newMixerStr}` = 0;
      //     // console.log(Mixer1)
      //   }
      // });
      // // this.cat.forEach((child) => {
      // //   if (this.playingCatPattern.test(child.name)) {
      // //     console.log(child);
      // //   }
      // // });

      // //eatingcat
      this.eatingCatMixer = new THREE.AnimationMixer(this.actualCat);
      this.eatingCatPlayHead = this.eatingCatMixer.clipAction(
        this.cat.animations[49]
      );
      this.eatingCatPlayTail = this.eatingCatMixer.clipAction(
        this.cat.animations[29]
      );
      // this.eatingCatPlay = this.eatingCatMixer.clipAction(
      //   this.cat.animations[43]
      // );
      // //head
      // this.eatingCatPlay = this.eatingCatMixer.clipAction(
      //   this.cat.animations[46]
      // );
      // // tail
      // // this.eatingCatPlay = this.eatingCatMixer.clipAction(
      // //   this.cat.animations[50]
      // // );
      // WHERE'S THE TAIL ?
      this.eatingCatPlayHead.play();
      this.eatingCatPlayTail.play();

      // this.standingCatMixer = new THREE.AnimationMixer(this.actualCat);
      // //standing cat
      // this.standingCatPlay = this.standingCatMixer.clipAction(
      //   this.cat.animations[18]
      // );
      // //leg
      // // this.standingCatPlay = this.standingCatMixer.clipAction(this.cat.animations[20]);
      // //ear
      // // this.standingCatPlay = this.standingCatMixer.clipAction(this.cat.animations[21]);
      // //head
      // //      this.standingCatPlay = this.standingCatMixer.clipAction(this.cat.animations[22]);

      this.lyingCatMixer = new THREE.AnimationMixer(this.actualCat);
      this.lyingCatPlay = this.lyingCatMixer.clipAction(
        this.cat.animations[28]
      );
      this.lyingCatPlay.play();
      // // leg
      // this.lyingCatPlay = this.lyingCatMixer.clipAction(this.cat.animations[23]);
      // //arm
      // // this.lyingCatPlay = this.lyingCatMixer.clipAction(this.cat.animations[24]);
      // //lyingcataction
      // // this.lyingCatPlay = this.lyingCatMixer.clipAction(this.cat.animations[25]);
      // //head
      // // this.lyingCatPlay = this.lyingCatMixer.clipAction(this.cat.animations[26]);
      // //ear
      // // this.lyingCatPlay = this.lyingCatMixer.clipAction(this.cat.animations[27]);

      //playingCat
      this.playingCatMixer = new THREE.AnimationMixer(this.actualCat);
      this.playingCatPlay = this.playingCatMixer.clipAction(
        this.cat.animations[29]
      );
      this.playingCatPlay.play();

      // //sidelyingcat / housecat
      this.sideLyingCatMixer = new THREE.AnimationMixer(this.actualCat);
      this.sideLyingCatPlay = this.sideLyingCatMixer.clipAction(
        this.cat.animations[43]
      );
      this.sideLyingCatPlay.play();
      // //arm
      // // this.sideLyingCatPlay = this.sideLyingCatMixer.clipAction(this.cat.animations[37]);
      // //rightleg
      // // this.sideLyingCatPlay = this.sideLyingCatMixer.clipAction(this.cat.animations[38]);
      // //leftleg
      // // this.sideLyingCatPlay = this.sideLyingCatMixer.clipAction(this.cat.animations[39]);
      // //tail
      // // this.sideLyingCatPlay = this.sideLyingCatMixer.clipAction(this.cat.animations[40]);
      // //ear
      // // this.sideLyingCatPlay = this.sideLyingCatMixer.clipAction(this.cat.animations[41]);
      // //head
      // // this.sideLyingCatPlay = this.sideLyingCatMixer.clipAction(this.cat.animations[42]);
      // //rightear
      // // this.sideLyingCatPlay = this.sideLyingCatMixer.clipAction(this.cat.animations[44]);

      //rightTree
      // this.rightTreeMixer = new THREE.AnimationMixer(this.actualCat);
      // this.rightTreePlay = this.rightTreeMixer.clipAction(
      //   this.cat.animations[86]
      // );
    }
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      // console.log(e);
      // value [-1,1] -> the model moves a little left-right
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.1;

      this.rotationX =
        ((e.clientY - window.innerHeight / 2) * 2) / window.innerHeight;
      this.lerpY.target = this.rotationX * 0.05;
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

    this.lerpY.current = GSAP.utils.interpolate(
      this.lerpY.current,
      this.lerpY.target,
      this.lerpY.ease
    );
    this.actualCat.rotation.x = this.lerpY.current;

    this.eatingCatMixer.update(this.time.delta * 0.001);
    //not play
    this.lyingCatMixer.update(this.time.delta * 0.001);
    this.playingCatMixer.update(this.time.delta * 0.0015);
    this.sideLyingCatMixer.update(this.time.delta * 0.0008);
    // this.rightTreeMixer.update(this.time.delta * 0.0008);
  }
}
