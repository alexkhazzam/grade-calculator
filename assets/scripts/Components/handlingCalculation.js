import { HandleInputs } from "./handlingInputs.js"; 

export class HandlingCalculation extends HandleInputs() {
    constructor(rowAmount, total, earned) {
        this.rowAmount = rowAmount;
        super(total, earned); 
        this.getRows();
    }

    getRows() {
        console.log("hi")
        const rows = document.querySelectorAll("li");
        for (let i = 0; i < rows.length; i++) {
            console.log(i);
        }
    }
}
