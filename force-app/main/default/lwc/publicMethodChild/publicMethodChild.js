import { LightningElement, track, api} from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['red'];

    options = [
        { label: 'Red Marker', value: 'red' },
        { label: 'Blue Marker', value: 'blue' },
        { label: 'Black Marker', value: 'black' },
        { label: 'Green Marker', value: 'green' },
    ];

    @api
    selectCheckbox(checkboxValue) {
        const selectedCheckbox = this.options.find( checkbox => {
            return checkboxValue === checkbox.value;
        });

        if(selectedCheckbox) {
            this.value = selectedCheckbox.valuef;
            return 'Successfully checked';
        } else {
            return 'No checkbox found';
        }
    }
}