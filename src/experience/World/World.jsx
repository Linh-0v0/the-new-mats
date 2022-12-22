import * as THREE from "three";
import { Octree } from "three/examples/jsm/math/Octree";
import Experience from "../Experience";
import Environment from "./Environment";

import CatPlayground from "./CatPlayground";
import EatingCat from "./Cats/EatingCat";
import PlayingCat from "./Cats/PlayingCat";
import LyingCat from "./Cats/LyingCat";
import SideLyingCat from "./Cats/SideLyingCat";
import StandingCat from "./Cats/StandingCat";

import Floor from "./Floor";
import Circle from "./Circle";
import CatControls from "./CatControls";
import Controls from "./Controls";

import asset from "../Utils/assets";
import EventEmitter from "events";
import FirstIsland from "./Island/Island";
import Island from "./Island/Island";
import Player from "./Player/Player";

export default class World extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.eatingCatScene = this.experience.eatingCatScene;
    this.playingCatScene = this.experience.playingCatScene;
    this.resources = this.experience.resources;
    this.player = null;

    this.currentPath = window.location.pathname;

    // listen to emitted event
    this.resources.on("ready", () => {
      console.log("ALL CAT IN RESOURCE");
      this.environment = new Environment();
      this.floor = new Floor();

      if (this.currentPath == "/" || this.currentPath == "/home") {
        this.cat = new CatPlayground();
        // this.controls = new Controls();
      } else if (this.currentPath == asset[2].urlPathname) {
        this.cat = new EatingCat();
        this.circle = new Circle();
        this.controls = new CatControls();
      } else if (this.currentPath == asset[3].urlPathname) {
        this.cat = new PlayingCat();
        this.circle = new Circle();
        this.controls = new CatControls();
      } else if (this.currentPath == asset[4].urlPathname) {
        this.cat = new StandingCat();
        this.circle = new Circle();
        this.controls = new CatControls();
      } else if (this.currentPath == asset[5].urlPathname) {
        this.cat = new LyingCat();
        this.circle = new Circle();
        this.controls = new CatControls();
      } else if (this.currentPath == asset[6].urlPathname) {
        this.cat = new SideLyingCat();
        this.circle = new Circle();
        this.controls = new CatControls();
      } else if (this.currentPath == asset[7].urlPathname) {
        this.floor.removeFloor();
        this.octree = new Octree();
        this.cat = new Island();

        if (this.player === null) {
          this.player = new Player();
        }
        // this.controls = new CatControls();
      }
      this.emit("worldready");

      // this.controls = new Controls();
    });
  }

  resize() {}

  update() {
    if (this.cat) {
      this.cat.update();
    }

    if (this.player) {
      this.player.update();
    }

    if (this.controls) {
      this.controls.update();
    }
  }
}
