import * as THREE from "three";
import GSAP from "gsap";

import Experience from "../Experience";

export default class CatPlayground {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.cat = this.resources.items.catPlayground;
    this.loadingdoor = this.resources.items.door;
    this.camera = this.experience.camera;
    this.catRoomChildren = {};
    this.wallPattern = /.*_wall/;
    this.eatingCatPattern = /.*eatingCat/;
    this.lyingCatPattern = /.*lyingCat/;
    this.standingCatPattern = /.*standingCat/;
    this.sideLyingCatPattern = /.*sideLyingCat/;
    this.playingCatPattern = /.*playingCat/;
    this.amateurPattern = /.*Armature.*/;
    

    if (this.loadingdoor) {
      this.door = this.loadingdoor.scene;
      console.log(this.door);
    }

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
    if (this.loadingdoor) {
      // Set Door
      this.door.rotation.y = Math.PI / 1.95;
      this.door.position.x = -0.8;
      this.door.position.y = 1.7;
      this.door.position.z = 8;
      this.door.scale.set(0, 0, 0);
      this.door.name = "door";
      this.catRoomChildren[this.door.name] = this.door;
      this.scene.add(this.door);

      // Set background behide the Door before Door appears
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
      this.planeBg.position.z = 5;
      // this.plane.receiveShadow = false;
      this.catRoomChildren[this.planeBg.name] = this.planeBg;
    }

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
      this.actualCat.scale.set(0.7, 0.7, 0.7);
    }
  }

  setAnimation() {
    if (this.cat) {
      console.log("THIS CAT", this.cat);

      // //eatingcat
      this.eatingCatMixer = new THREE.AnimationMixer(this.actualCat);
      this.eatingCatPlayHead = this.eatingCatMixer.clipAction(
        this.cat.animations[44]
      );
      this.eatingCatPlayTail = this.eatingCatMixer.clipAction(
        this.cat.animations[45]
      );
      this.eatingCatPlayHead.play();
      this.eatingCatPlayTail.play();

      // standing Cat
      this.standingCatMixer = new THREE.AnimationMixer(this.actualCat);
      this.standingCatPlay = this.standingCatMixer.clipAction(
        this.cat.animations[15]
      );
      this.standingCatPlay.play();

      // lying Cat
      this.lyingCatMixer = new THREE.AnimationMixer(this.actualCat);
      this.lyingCatPlay = this.lyingCatMixer.clipAction(
        this.cat.animations[23]
      );
      this.lyingCatPlay.play();

      //playingCat
      this.playingCatMixer = new THREE.AnimationMixer(this.actualCat);
      this.playingCatPlay = this.playingCatMixer.clipAction(
        this.cat.animations[24]
      );
      this.playingCatPlay.play();

      // //sidelyingcat / housecat
      this.sideLyingCatMixer = new THREE.AnimationMixer(this.actualCat);
      this.sideLyingCatPlay = this.sideLyingCatMixer.clipAction(
        this.cat.animations[38]
      );
      this.sideLyingCatPlay.play();

      //rightTree
      this.rightTreeMixer = new THREE.AnimationMixer(this.actualCat);
      this.rightTreePlay1 = this.rightTreeMixer.clipAction(
        this.cat.animations[83]
      );
      this.rightTreePlay2 = this.rightTreeMixer.clipAction(
        this.cat.animations[84]
      );
      this.rightTreePlay3 = this.rightTreeMixer.clipAction(
        this.cat.animations[88]
      );
      this.rightTreePlay4 = this.rightTreeMixer.clipAction(
        this.cat.animations[89]
      );
      this.rightTreePlay5 = this.rightTreeMixer.clipAction(
        this.cat.animations[90]
      );
      this.rightTreePlay1.play();
      this.rightTreePlay2.play();
      this.rightTreePlay3.play();
      this.rightTreePlay4.play();
      this.rightTreePlay5.play();

      // left tree
      this.leftTreeMixer = new THREE.AnimationMixer(this.actualCat);
      this.leftTreePlay1 = this.leftTreeMixer.clipAction(
        this.cat.animations[102]
      );
      this.leftTreePlay1.play();

      // middle tree
      this.middleTreeMixer = new THREE.AnimationMixer(this.actualCat);
      this.middleTreePlay = this.middleTreeMixer.clipAction(
        this.cat.animations[5]
      );
      this.middleTreePlay.play();

      // right lamp
      this.rightLampMixer = new THREE.AnimationMixer(this.actualCat);
      this.rightLampPlay = this.rightLampMixer.clipAction(
        this.cat.animations[104]
      );
      this.rightLampPlay2 = this.rightLampMixer.clipAction(
        this.cat.animations[100]
      );
      this.rightLampPlay3 = this.rightLampMixer.clipAction(
        this.cat.animations[101]
      );
      this.rightLampPlay.play();
      this.rightLampPlay2.play();
      this.rightLampPlay3.play();

      // left lamp
      this.leftLampMixer = new THREE.AnimationMixer(this.actualCat);
      this.leftLampPlay = this.leftLampMixer.clipAction(
        this.cat.animations[102]
      );
      this.leftLampPlay2 = this.leftLampMixer.clipAction(
        this.cat.animations[98]
      );
      this.leftLampPlay3 = this.leftLampMixer.clipAction(
        this.cat.animations[99]
      );
      this.leftLampPlay.play();
      this.leftLampPlay2.play();
      this.leftLampPlay3.play();
    }
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      // console.log(e);
      // value [-1,1] -> the model moves a little left-right
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.17;

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

    this.eatingCatMixer.update(this.time.delta*1.2);
    this.standingCatMixer.update(this.time.delta);
    this.lyingCatMixer.update(this.time.delta);
    this.playingCatMixer.update(this.time.delta*1.3);
    this.sideLyingCatMixer.update(this.time.delta);

    this.rightTreeMixer.update(this.time.delta * 0.3);
    this.leftTreeMixer.update(this.time.delta * 0.1);
    this.middleTreeMixer.update(this.time.delta * 0.5);

    this.leftLampMixer.update(this.time.delta * 0.6);
    this.rightLampMixer.update(this.time.delta * 0.6);
  }
}
