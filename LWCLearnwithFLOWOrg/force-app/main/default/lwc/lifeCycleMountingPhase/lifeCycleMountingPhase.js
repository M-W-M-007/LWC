import { LightningElement } from 'lwc';

export default class LifeCycleMountingPhase extends LightningElement {
    constructor(){
        super()
        console.log("parent constructor called")
    }

   

    connectedCallback(){
        console.log("Parent ConnectedCallback called")
    }

    renderedCallback(){
        console.log("Parent renderCallBack Called")
    }

    name
    changeHandler(event){
        this.name = event.target.value 
    }
}