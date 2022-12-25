/***************************************************************
 *Title: none
 *Author: Andrewwoan
 *Date: Nov 2022
 * Code version: none
 *Availability: https://github.com/andrewwoan/abigail-bloom-portolio-bokoko33/tree/master/Experience (Nov 2022)
 ****************************************************************/

import { EventEmitter } from "events";

// requestAnimationFrame to run animation: is called in Experience.jsx
export default class Time extends EventEmitter {
  constructor() {
    super();
    this.start = Date.now();
    this.current = this.start;
    // time has been passing since Experience run
    this.elapsed = 0;
    // time bwn frames in milliseconds
    this.delta = 16;

    this.update();
  }

  update() {
    const currentTime = Date.now();
    this.delta = (currentTime - this.current) / 1000;
    this.current = currentTime;
    // animation plays after the elapsed time since 3js scene started
    this.elapsed = this.current - this.start;

    // emit event
    this.emit("update");
    window.requestAnimationFrame(() => {
      this.update();
    });
  }
}
