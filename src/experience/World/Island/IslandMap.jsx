import * as THREE from "three";
import Experience from "../../Experience";

export default class IslandMap {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.octree = this.experience.world.octree;

    this.initIsland();
    this.setMaterial();
  }

  initIsland() {
    this.island = this.resources.items.island.scene;
    // console.log(this.island)
  }

  setMaterial() {
    console.log(this.island);
    this.scene.add(this.island);
  }
}
