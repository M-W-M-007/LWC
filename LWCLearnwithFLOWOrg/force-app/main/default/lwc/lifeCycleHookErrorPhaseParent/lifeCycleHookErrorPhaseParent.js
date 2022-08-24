import { LightningElement } from 'lwc';

export default class LifeCycleHookErrorPhaseParent extends LightningElement {
    isChildVisible = false
    
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

        handleClick(){
        this.isChildVisible = !this.isChildVisible
    }

    errorCallback(error,stack){
        console.log(error.message)
        console.log(stack)
    }
}