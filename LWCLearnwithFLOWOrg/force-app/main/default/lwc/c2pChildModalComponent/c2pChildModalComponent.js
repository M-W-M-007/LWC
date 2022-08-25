import { LightningElement } from 'lwc';

export default class C2pChildModalComponent extends LightningElement {
    closeHandler(){
        const myEvent = new CustomEvent('close', {
            bubbles : true,
            detail: "Modal Colesed by you. "})
        this.dispatchEvent(myEvent) 
    }

    footerHandler(){
        console.log("Footer Handler Called")
    }
}