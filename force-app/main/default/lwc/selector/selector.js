import { LightningElement,wire,track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID  from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
export default class Test11 extends LightningElement {
    @track name;
    @track error ;
    @wire(getRecord, {
        recordId: USER_ID,
        fields: [NAME_FIELD]
    }) wireuser({
        error,
        data
    }) {
        if (error) {
           this.error = error ; 
        } 
        else if (data) {
            this.name = data.fields.Name.value;
        }
    }
}