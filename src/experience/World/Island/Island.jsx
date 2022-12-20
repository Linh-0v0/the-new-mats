import IslandCollider from "./IslandCollider";
import IslandMap from "./IslandMap";

export default class Island {
  constructor() {
    this.islandCollider = new IslandCollider();
    this.islandMap = new IslandMap();
  }

  resize() {}

  update() {}
}
