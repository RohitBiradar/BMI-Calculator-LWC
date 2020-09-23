import { LightningElement, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManagerApex extends LightningElement {
    @track numberOfRecords;
    @track accounts
    handleRecordChange(event){
        this.numberOfRecords = event.target.value;
    }

    getAccounts(){
        getAllAccounts({numberOfRecords: this.numberOfRecords}).then(response => {
            this.accounts = response;
            const toasEvent = new ShowToastEvent({
                title : 'Accounts Loaded',
                message : this.numberOfRecords + ' Accounts Fetched from Server',
                variant : "success"
            });
            this.dispatchEvent(toasEvent);
        }).catch(error => {
            console.error('Error in getting the Accounts' + error.body.message);
            const toasEvent = new ShowToastEvent({
                title : 'ERROR',
                message :  error.body.message,
                variant : "error"
            });
            this.dispatchEvent(toasEvent);
        })
    }
}