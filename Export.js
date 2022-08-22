// Normal Export 
// export const PI = 3.14 
// export function add(a,b){ 
//         console.log(a+b)                    //5 
// }

//OR

// Normal Export 
const PI = 3.14 
function add(a,b){ 
//console.log(a+b) 
}
export {PI, add}

//OR

//want send data with alias name 
// Normal Export , export with a Alias
// const PI_Data = 3.14 
// function add(a,b){ 
// console.log(a+b) 
// }
// export {PI_Data as PI, add}

//OR
// export data default means you can send data without curly braces
// export default function minus(a,b){
//     console.log(a-b)
//     }

export  function minus(a,b){
    console.log(a-b)
    }    