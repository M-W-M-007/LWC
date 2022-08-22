// import {PI, add} from './Export.js' 
// console.log(PI)                     //3.14
// console.log(add (2,3))              //undefined

//OR

// import minus, {PI, add} from './Export.js' 
// console.log(PI)
// console.log(add (2,3))
// console.log(minus(10,7))


// import minus, {PI, add} from './utils.js' 
//import as *
import * as UTILS from './Export.js' 
console.log(UTILS.PI) 
console.log(UTILS.add(2,3)) 
console.log(UTILS.minus (8,5))
 
//remove defualt in export class