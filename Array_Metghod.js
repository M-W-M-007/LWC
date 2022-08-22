let arr = [2,3,5,7,9,10]

// map() 
//syntax 
// arr.methodName (function (currentItem, index, actualArray) { 
// })
 
let newArray = arr.map(function (currentItem, index, array) { 
console.log(`currentItem is ${currentItem} index ${index}`) 
return currentItem*2 
}) 
console.log(arr)                        //(6) [2, 3, 5, 7, 9, 10]
console.log(newArray)                   //(6) [4, 6, 10, 14, 18, 20]

//filter() 
let filteredValues = arr.filter (function (currentItem1, index, array){ 
return currentItem1 >5 
})
let filteredValues1 = newArray.filter (function (currentItem1, index, array){ 
    return currentItem1 >5 
    })  
console.log(filteredValues)             //(3) [7, 9, 10]    
console.log(filteredValues1)            // (5) [6, 10, 14, 18, 20]

//every() 
let age = [32, 33, 18, 40] 
let isAllAdult = age.every(function (currentItem) { 
    return currentItem >=18
    
})
 console.log(isAllAdult)                //true
 
// some ( ) 
let agelist = [32, 33, 18, 40] 
let isAdult = agelist.some (function (currentItem) { 
return currentItem >32
}) 
console.log(isAdult)                    //true
 
//sort() 
var names =["nikhil", "john", "smith"] 
console.log(names.sort())                       //(3) ['john', 'nikhil', 'smith']

//sorting of number 
var points = [10,39, 12, 80, 54] 
let sortedValue = points.sort (function(a,b){ 
    return b-a 
 }) 
console.log(sortedValue)                        //(5) [80, 54, 39, 12, 10]

//reduce methods array.reduce(function(){
 
//})
 
// reduce methods 
// array.reduce(function(total, currentValue, index, array) { 
// }, intialvalue) 
let num= [12, 78, 30] 
let sum = num.reduce(function (total, currentItem) { 
return total+currentItem 
},0) 
console.log(sum)                        //120

//forEach() 
num.forEach(function(currentItem) 
{ console.log(currentItem) })               //12
                                            //78
                                            //30