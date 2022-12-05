import { EventEmitter } from "events";

export default class GoToLanding extends EventEmitter {
  constructor() {
    super();
    this.goBackMsg = "";
    this.goBackArrow = document.querySelector(".go-back-arrow");

    this.setArrowEventListener();
  }

  setArrowEventListener() {
    if (this.goBackArrow) {
      this.goBackArrow.addEventListener("click", () => {
        this.goBackArrow.classList.add("color-change");
        this.goBackMsg = this.goBackMsg === "" ? "goback" : "";
        document.body.classList.toggle("original-change");
        this.emit("goToLanding", this.goBackMsg);
      });
    }
  }
}
