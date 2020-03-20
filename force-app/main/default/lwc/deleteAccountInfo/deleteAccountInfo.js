import { LightningElement,track,wire ,api } from 'lwc';
import displayAccData from '@salesforce/apex/AccountDisplay.displayAccData'
import displayConData from '@salesforce/apex/AccountDisplay.displayConData'
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
export default class DeleteAccountInfo extends LightningElement {
@wire (displayAccData) accounts;
@track accrecordId;
@track records ;
@track error;
handleChange(event){
    this.accrecordId = event.target.value;
    console.log("www"+event.target.value);
}
@wire (displayConData,{accId : '$accrecordId'}) contacts;
handleDelete(event) {
    console.log(event.target.value);
    this.accrecordId = event.target.value;
        deleteRecord(this.accrecordId)
            .then(() => {
                return refreshApex(this.accounts);
            })
    }    
}