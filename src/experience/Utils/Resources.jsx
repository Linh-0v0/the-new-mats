/*************************************************************** 
*Title: none
*Author: Andrewwoan
*Date: Nov 2022 
* Code version: none 
*Availability: https://github.com/andrewwoan/abigail-bloom-portolio-bokoko33/tree/master/Experience (Nov 2022) 
****************************************************************/ import { EventEmitter } from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import Experience from "../Experience";
import { LoadingManager } from "three";

// Load all resources
// EventEmitter: emits event that can be listened to and acted on
export default class Resources extends EventEmitter {
  constructor(assets) {
    super();
    this.experience = new Experience();
    this.renderer = this.experience.renderer;

    this.assets = assets;
    this.currentPath = window.location.pathname;

    //contain all the loaded assets
    this.items = {};
    //number of assets to be loaded
    this.queue = this.assets.length;
    //loading assets counter
    this.loaded = 0;

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    const manager = new LoadingManager;
    manager.onStart = () => {
      sessionStorage.setItem("loadingState", true)
      // console.log(
      //   "MANAGER LOADING", sessionStorage.getItem("loadingState")
      // );
    };

    manager.onLoad = () => {
      // sessionStorage.setItem("loadingState", false)
      // console.log("Loading complete!");
    };

    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader(manager);
    //need DRACOLoader cuz the model is compressed when exported in Blender
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath("/draco/");
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
  }

  startLoading() {
    this.loaded = 0;
    if (this.currentPath == "/" || this.currentPath == "/home") {
      // file is the modelFile that needs to be loaded
      this.loaders.gltfLoader.load(this.assets[0].path, (file) => {
        this.singleAssetLoaded(this.assets[0], file);

        this.loaders.gltfLoader.load(this.assets[1].path, (file) => {
          this.singleAssetLoaded(this.assets[1], file);
          if (this.loaded == 2) {
            console.log("ITEM LOADED", this.items);
            this.emit("ready");
          }
        });
      });
    } else if (this.currentPath == this.assets[2].urlPathname) {
      // file is the modelFile that needs to be loaded
      this.loaders.gltfLoader.load(this.assets[2].path, (file) => {
        this.singleAssetLoaded(this.assets[2], file);
        if (this.loaded == 1) {
          console.log("ITEM LOADED", this.items);
          this.emit("ready");
        }
      });
    } else if (this.currentPath == this.assets[3].urlPathname) {
      // file is the modelFile that needs to be loaded
      this.loaders.gltfLoader.load(this.assets[3].path, (file) => {
        this.singleAssetLoaded(this.assets[3], file);
        if (this.loaded == 1) {
          console.log("ITEM LOADED", this.items);
          this.emit("ready");
        }
      });
    } else if (this.currentPath == this.assets[4].urlPathname) {
      // file is the modelFile that needs to be loaded
      this.loaders.gltfLoader.load(this.assets[4].path, (file) => {
        this.singleAssetLoaded(this.assets[4], file);
        if (this.loaded == 1) {
          console.log("ITEM LOADED", this.items);
          this.emit("ready");
        }
      });
    } else if (this.currentPath == this.assets[5].urlPathname) {
      // file is the modelFile that needs to be loaded
      this.loaders.gltfLoader.load(this.assets[5].path, (file) => {
        this.singleAssetLoaded(this.assets[5], file);
        if (this.loaded == 1) {
          console.log("ITEM LOADED", this.items);
          this.emit("ready");
        }
      });
    } else if (this.currentPath == this.assets[6].urlPathname) {
      // file is the modelFile that needs to be loaded
      this.loaders.gltfLoader.load(this.assets[6].path, (file) => {
        this.singleAssetLoaded(this.assets[6], file);
        if (this.loaded == 1) {
          console.log("ITEM LOADED", this.items);
          this.emit("ready");
        }
      });
    } else if (this.currentPath == this.assets[7].urlPathname) {
      // file is the modelFile that needs to be loaded
      console.log("MODEL", this.loaded);
      this.loaders.gltfLoader.load(this.assets[7].path, (file) => {
        this.singleAssetLoaded(this.assets[7], file);

        this.loaders.gltfLoader.load(this.assets[8].path, (file) => {
          this.singleAssetLoaded(this.assets[8], file);
          console.log("LOADEd", this.loaded);

          if (this.loaded == 2) {
            console.log("ITEM LOADED", this.items);
            this.emit("ready");
          }
        });
      });
    }
  }

  // create key value pairs in the "items" object
  singleAssetLoaded(asset, file) {
    this.items[asset.name] = file;
    this.loaded++;
  }
}
