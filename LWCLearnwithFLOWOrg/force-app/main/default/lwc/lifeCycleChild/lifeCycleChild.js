import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log("Child constructor called")
    }

    connectedCallback(){
        console.log("Child ConnectedCallback called")
    }

    renderedCallback(){
        console.log("Child renderCallBack Called")
    }

    disconnectedCallback(){
        alert('cHILD dISCONNECTEDCall Back Called')
    }
}