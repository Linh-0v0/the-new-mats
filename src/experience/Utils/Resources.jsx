import {EventEmitter} from 'events';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"

import Experience from '../Experience';

// Load all resources
// EventEmitter: emits event that can be listened to and acted on
export default class Resources extends EventEmitter {
    constructor(assets) {
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;

        this.assets = assets;
        
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
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader();
        //need DRACOLoader cuz the model is compressed when exported in Blender
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath('/draco/');
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    }

    startLoading() {
        for (const asset of this.assets) {
            if(asset.type === "glbModel") {
                // file is the modelFile that needs to be loaded
                this.loaders.gltfLoader.load(asset.path, (file) => {
                    this.singleAssetLoaded(asset, file);
                })
            } else if (asset.type === "") {

                
            }
        }
    }

    // create key value pairs in the "items" object
    singleAssetLoaded(asset, file) {    
        this.items[asset.name] = file;
        this.loaded++;

        console.log("ASSET is LOADING", file);
        // check if all the assets has been loaded
        if (this.loaded === this.queue) {
            console.log("ALL ASSETS ARE DONE");
            this.emit("ready");
        }
    }
}