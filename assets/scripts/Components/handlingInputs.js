import { HandlingCalculation } from "./handlingCalculation.js";

export class HandleInputs {
  constructor() {
    this.total;
    this.earned;
  }
  sumOfValues(classNameEarned) {
    let reduced = [];
    let inputs = document.querySelectorAll(`li ${classNameEarned}`);
    inputs.forEach((number) => {
      if (number.value.trim() === "") {
        number.value = 0;
      }
      reduced.push(parseInt(number.value));
    });
    return reduced.reduce((initVal, curVal) => initVal + curVal, 0);
  }

  getSum() {
    this.sumOfTotalPoints(".points-earned");
    this.sumOfEarnedPoints(".max-points");
    this.forwardValues(this.total, this.earned);
  }

  sumOfTotalPoints(className) {
    this.total = this.sumOfValues(className);
  }

  sumOfEarnedPoints(className) {
    this.earned = this.sumOfValues(className);
  }

  forwardValues(earned, total) {
    console.log(earned, total);
    const handlingCalculation = new HandlingCalculation();
    handlingCalculation.getRows();
  }
}

const calculateBtn = document.querySelector(".calculate");
const handleInputs = new HandleInputs();
calculateBtn.addEventListener("click", handleInputs.getSum.bind(handleInputs));
