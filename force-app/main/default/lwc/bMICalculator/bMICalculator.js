import { LightningElement, track } from 'lwc';
import {getBMI} from 'c/bmi';
export default class BMICalculator extends LightningElement {
    cardTitle = 'BMI Calculator';
    weight;
    height;
    bmi;

    handleWeight(event) {
        this.weight = parseFloat(event.target.value);
    }

    handleHeight(event) {
        this.height = parseFloat(event.target.value);
    }

    calculateBMI() {
       this.bmi = getBMI(this.height, this.weight);
    }

    get bmiValue() {
        if(this.bmi === undefined) {
            return `Your BMI is `;
        } else {
            return `Your BMI is ${this.bmi}`;
        }
        
    }
}