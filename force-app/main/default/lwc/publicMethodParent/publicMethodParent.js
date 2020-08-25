import { LightningElement , track} from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track value;

    checkboxSelectHandler() {
        const childComponent = this.template.querySelector('c-public-method-child');
        const returnMessage = childComponent.selectCheckbox(this.value);
        console.log('returnMessage--> ' + returnMessage);
    }

    inputchangeHandler(event) {
        this.value = event.target.value;
    }
}