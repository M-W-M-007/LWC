import { LightningElement, track } from 'lwc';

export default class Helloworld extends LightningElement {
    // tagName
    // age = 30
    details =  {
        name : "Wazid",
        age : 40
    }
    // Kill = true
    // Khasiyat = ["t", "a", "Age"]
    fullname = "Wazid Mohammad"
    title = "aura"

    changeHandler(event){
        this.title = event.target.value
    }

    @track address={
        City:"Ajmer",
        pincode:305001,
        country:"India"
    }

    trackHandler(event){
        this.address.City = event.target.value
       
    }
    trackHandler1(event){
       
        this.address.pincode = event.target.value
    }

    // Getter demo
    users = ["Kushal", "Vikky", "Seema"]
    num1 = 178
    num2 = 453
    //  this.firstUser = this.users[0].toUpperCase()
    get firstUser(){
        return this.users[0].toUpperCase()
    }
    get multiply(){
        return this.num1 * this.num2
    }
}  
