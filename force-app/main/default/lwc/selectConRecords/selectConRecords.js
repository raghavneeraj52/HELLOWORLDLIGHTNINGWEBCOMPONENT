import { LightningElement,wire,track,api } from 'lwc';
import getContList from '@salesforce/apex/ContactViewController.getContList'
export default class SelectConRecords extends LightningElement {
    @wire(getContList) contacts;
    @track recName;
    handleClick(event){
        console.log(event.target.value);
        this.recName = event.target.value;
        alert("Hey "+this.recName);
    }
}