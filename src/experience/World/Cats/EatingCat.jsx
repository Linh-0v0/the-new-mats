import * as THREE from "three";
import GSAP from "gsap";
import Experience from "../../Experience";

export default class EatingCat {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.cat = this.resources.items.eatingCat;
    this.camera = this.experience.camera;
    // console.log(this.cat);

    if (this.cat) {
      this.actualCat = this.cat.scene;
    }

    // lerping function / linear interpolation
    // for the smoothness of swinging the cat
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

    this.setModel();
    this.setAnimation();
    this.onMouseMove();
  }

  setModel() {
    if (this.cat) {
      this.actualCat.children.forEach((child) => {
        child.castShadow = true;
        child.receiveShadow = false;

        if (child instanceof THREE.Group) {
          child.children.forEach((grandChild) => {
            grandChild.castShadow = true;
            grandChild.receiveShadow = false;
          });
        }
      });

      this.scene.add(this.actualCat);
      this.actualCat.scale.set(0.3, 0.3, 0.3);
    }
  }

  setAnimation() {
    if (this.cat) {
      console.log(this.cat);
      console.log("ACTUAL CAT", this.actualCat);
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
      this.lerp.target = this.rotation * 0.6;

      this.rotationX =
        ((e.clientY - window.innerHeight / 2) * 2) / window.innerHeight;
      this.lerpY.target = this.rotationX * 0.1;
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
    this.mixer.update(this.time.delta * 0.0008);
  }
}
