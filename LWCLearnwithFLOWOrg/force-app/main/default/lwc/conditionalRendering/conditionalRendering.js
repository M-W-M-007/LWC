import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    toggleIconName = 'utility:preview';
    toggleButtonLabel = 'Show content';

    isVisible = false
    name
    
    // handleClick(){
    //     this.isVisible = true
    // }
    
 // Handles click on the 'Show/hide content' button
 handleToggleClick() {
    this.isVisible = true
    console.log('in handle click: ', this.isVisible)
    // // retrieve the classList from the specific element
    // const contentBlockClasslist = this.template.querySelector(
    //     '.lgc-id_content-toggle'
    // ).classList;
    // // toggle the hidden class
    // contentBlockClasslist.toggle('slds-hidden');

    // if the current icon-name is `utility:preview` then change it to `utility:hide`
    if (this.toggleIconName === 'utility:preview') {
        this.toggleIconName = 'utility:hide';
        this.toggleButtonLabel = 'Hide content';
        //this.isVisible = false
    } else {
        this.toggleIconName = 'utility:preview';
        this.toggleButtonLabel = 'Show content';
       
        this.isVisible = false
    }
}



    handleInputChange(event){
            this.name = event.target.value
    }

    get typeMethod(){
            return this.name === 'hello' || this.name==='Hello' || this.name==='HELLO' || this.name==='hELLO' || this.name==='helo' || this.name==='Helo' || this.name==='Hi' || this.name==='hi' 
    } 

    
}