import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PunsubComponentB extends LightningElement {

    message

    connectedCallback(){
        this.callSubscriber()
    }

    callSubscriber(){
        pubsub.subscribe('Component A', (message)=>{
            this.message = message
        })
    }
}