import IslandCollider from "./IslandCollider";
import IslandMap from "./IslandMap";
import Skybox from "./Skybox";

export default class Island {
  constructor() {
    this.islandCollider = new IslandCollider();
    this.skyBox = new Skybox();
    if (this.islandCollider) {
          this.islandMap = new IslandMap();
    }
  }

  resize() {}

  update() {}
}
