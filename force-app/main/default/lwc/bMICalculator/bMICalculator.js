import { LightningElement, track } from 'lwc';

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
        try {
            this.bmi = this.weight / (this.height * this.height);
        } catch(error) {
            this.bmi = undefined;
        }
    }

    get bmiValue() {
        if(this.bmi === undefined) {
            return `Your BMI is `;
        } else {
            return `Your BMI is ${this.bmi}`;
        }
        
    }
}