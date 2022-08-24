import { LightningElement } from 'lwc';

export default class LifeCycleHookErrorPhasrChild extends LightningElement {
    constructor(){
        super()
        console.log("Child constructor called")
    }

    connectedCallback(){
        console.log("Child ConnectedCallback called")
        throw new Error('Loading of Child Component Failed')
    }

    renderedCallback(){
        console.log("Child renderCallBack Called")
    }

    disconnectedCallback(){
        alert('Child Disconnetcted callback Called')
    }
}