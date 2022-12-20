import {EventEmitter} from 'events';

// EventEmitter: emits event that can be listened to and acted on
// cuz I need other classes to update 
// whenever requestAnimationFrame is called
export default class Time {
    constructor() {
        // super();
        this.start = Date.now();
        this.current = this.start;
        // time has been passing since Experience run
        this.elapsed = 0;
        // time bwn frames in milliseconds
        this.delta = 16;

        // this.update()
    }

    update() {
        const currentTime = Date.now();
        this.delta = (currentTime - this.current) / 1000;
        this.current = currentTime;
        // animation plays after the elapsed time since 3js scene started
        this.elapsed = this.current - this.start;

        // emit event
        // this.emit("update");
    }
}
