import {EventEmitter} from 'events';

// EventEmitter: emits event that can be listened to and acted on
// cuz I need other classes to update 
// whenever resize is called
export default class Sizes extends EventEmitter {
    constructor() {
        super();
        // use canvas width/height if it doesn't take 100%
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width/this.height;
        // deviceRatio > 2 doesn't have any benefit
        // devicePixelRatio: tells the browser how many of the screen's actual pixels should be used to draw a single CSS pixel.
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)
        this.frustrum = 5;

        // update when window resizes
        window.addEventListener("resize", () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.aspect = this.width/this.height;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)
            // emit event
            this.emit("resize");
        })
    }
}