/*************************************************************** 
*Title: none
*Author: Andrewwoan
*Date: Nov 2022 
* Code version: none 
*Availability: https://github.com/andrewwoan/abigail-bloom-portolio-bokoko33/tree/master/Experience (Nov 2022) 
****************************************************************/ 

import { EventEmitter } from "events";
//Sizes class: detect window size

// EventEmitter: emits event that can be listened to and acted on
// cuz I need other classes to update
// whenever resize is called
export default class Sizes extends EventEmitter {
  constructor() {
    super();
    // use canvas width/height if it doesn't take 100%
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.aspect = this.width / this.height;
    // deviceRatio > 2 doesn't have any benefit
    // devicePixelRatio: tells the browser how many of the screen's actual pixels should be used to draw a single CSS pixel.
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.frustrum = 5;

    if (this.width <= 500) {
      this.device = "mobile";
    } else if (this.width < 1024 && this.width > 500) {
      this.device = "tablet";
    } else {
      this.device = "desktop";
    }

    // update when window resizes
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.aspect = this.width / this.height;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
      // emit event
      this.emit("resize");

      if (this.width <= 500 && this.device !== "mobile") {
        this.device = "mobile";
        this.emit("switchdevice", this.device);
        // console.log("mobile");
      } else if (
        this.width > 500 &&
        this.width < 1024 &&
        this.device !== "tablet"
      ) {
        this.device = "tablet";
        this.emit("switchdevice", this.device);
        // console.log("tablet");
      } else if (this.width >= 1024 && this.device !== "desktop") {
        this.device = "desktop";
        this.emit("switchdevice", this.device);
        // console.log("desktop");
      }
    });
  }
}
