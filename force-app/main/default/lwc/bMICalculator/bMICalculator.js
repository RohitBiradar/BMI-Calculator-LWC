import { LightningElement, track } from 'lwc';

export default class BMICalculator extends LightningElement {
    cardTitle = 'BMI Calculator';
    weight;
    height;
    @track bmi;

    handleWeight(event) {
        this.weight = parseFloat(event.target.value);
    }

    handleHeight(event) {
        this.height = parseFloat(event.target.value);
    }

    calculateBMI() {
        this.bmi = this.weight / (this.height * this.height);
    }
}