let arr = ["amazon", "google"] 
// let company1 = arr[0] 
// let company2 = arr[1] 
let [company1, company2] = arr 

console.log(company1)                   //amozon
console.log(company2)                   //gogle

// // object destructing 

let options ={ title : "zero to hero", age : 23, type : "CRM" } 
// var title = options.title 
// var age = options.age 
let {title, age, type} = options 
console.log(title)                      //Zero to hero
console.log(age)                        //23
console.log(type)                       //CRM