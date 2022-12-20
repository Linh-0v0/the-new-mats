import * as THREE from "three";
import Experience from "../../Experience";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper";

export default class IslandCollider {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.octree = this.experience.world.octree;

    this.initIsland();
    this.setMaterial();
    this.setIslandCollider();
  }

  initIsland() {
    this.island = this.resources.items.islandCollider.scene;
    console.log("Collider", this.island)
  }

  setMaterial() {
    console.log(this.island);
    this.scene.add(this.island);
  }

  setIslandCollider() {
    // const collider = this.island.getObjectByName("object-collider2");
    const collider = this.island.getObjectByName("object-collider-full");
    console.log("object-collider", collider)
    this.octree.fromGraphNode(collider);
    collider.removeFromParent();
    collider.geometry.dispose();
    collider.material.dispose();
    
    // const helper = new OctreeHelper(this.octree);
    // helper.visible = true;
    // this.scene.add(helper);
  }
}
