import { LightningElement } from 'lwc';

export default class LwcquizApp extends LightningElement {
    
    selected={} //for storing answers
    correctAnswers = 0  //to show the number of correct answers
    isSubmitted = false //to show result

    myQuestions =[
        {
            id : "Question 1",
            question : "Which one of the following is not a Temple Loop?",
            answers : {
                a: "for:each",
                b: "iterate",
                c: "map Loop"
            },
            correctAnswer : "c"
        },
        {
            id : "Question 2",
            question : "Which one of the file is invalid in LWC Comopnenet folder?",
            answers : {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer : "b"
        },
        {
            id : "Question 3",
            question : "Which one of the following is not a direactive?",
            answers : {
                a: "for:each",
                b: "iterate",
                c: "@track"
            },
            correctAnswer : "c"
        },
        {
            id : "Question 4",
            question : "Who created this page?",
            answers : {
                a: "Mark-Zuckerbug",
                b: "Bill Gates",
                c: "Wazid"
            },
            correctAnswer : "c"
        }
    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }

    changeHandler(event){
        const {name, value} = event.target
        this.selected ={...this.selected, [name]:value}
    }

    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true

    }
    resetHandler(){
        this.selected ={}
        this.correctAnswers=0
        this.isSubmitted = false
    }
   
}