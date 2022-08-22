// Spread Operator

//1 Array 
var arr = ["a", "b", "c"]
console.log(arr)                     //(3) ['a', 'b', 'c']
                                    //0: "a"
                                    // 1: "b"
                                    // 2: "c"
                                    // 3: "3"
                                    // length: 4

// array index start from zero

console.log(arr[0])                 //a
console.log(arr[1])                 //b
arr.push("3")
console.log(arr)                    //['a', 'b', 'c', '3']
                                    // 0: "a"
                                    // 1: "b"
                                    // 2: "c"
                                    // 3: "3"
                                    // length: 4

//2 Objects
var obj={
"name" : "salesforce",
"age" : 23,
"full name" : "zero to hero"
}
console.log(obj. age)               //23
console.log(obj["full name"])       // zero to hero
obj.hobbies="cricket"
console.log(obj)                    //{name: 'salesforce', age: 23, full name: 'zero to hero', hobbies: 'cricket'}
                                    // age: 23
                                    // full name: "zero to hero"    
                                    // hobbies: "cricket"
                                    // name: "salesforce"

//1. Expanding of string
let greeting = "Hello Everyone"
let charList = [...greeting]
console.log(charList)                   //['H', 'e', 'l', 'l', 'o', ' ', 'E', 'v', 'e', 'r', 'y', 'o', 'n', 'e'] 

// 2. Combining array
let arr1 = ["amazon", "google"]
let arr2 =["facebook", "instagram"]
let arr3 = [...arr1, ...arr2]
console.log(arr3)                       //['amazon', 'google', 'facebook', 'instagram']

//3. adding values to an array
let arr4 = ["a", "b", "c"]
let arr5 = ["nikhil",...arr4 ]
console.log(arr5)                       //(4) ['nikhil', 'a', 'b', 'c']


//4. Combining objects
let obj1 ={name:"salesforce", age:23, date:"23/10/2022"}  
let obj2 = {name : "facebook", age : 55, "next" : "helo"}
let obj3 = {...obj1, ...obj2} 
console.log(obj3)                                           //{name: 'facebook', age: 55, date: '23/10/2022', next: 'helo'}
                                                            //age: 55
                                                            // date: "23/10/2022"
                                                            // name: "facebook"
                                                            // next: "helo"
                                                            // [[Prototype]]: Object

//5. Shallow Copy

var arr10 = ["x", "y", "z"]
arr10.push (20)
console.log(arr10)                              //(4) ['x', 'y', 'z', 20]
var arr11 = arr10
arr11.push("nikhil")
console.log(arr10)                          //(5) ['x', 'y', 'z', 20, 'nikhil']
console.log(arr11)                          //(5) ['x', 'y', 'z', 20, 'nikhil']    

//here arr10 push the value of its in arr11 that why its over it, to sol. this we can do following
//to avoid this we used shallow copy

//5. Shallow Copy
var arr10 = ["x", "y", "z"]
var arr11 = [...arr10]
arr11.push("nikhil")
console.log(arr10)                  //(3) ['x', 'y', 'z']
console.log(arr11)                  //(4) ['x', 'y', 'z', 'nikhil']

// but the problem in this it is useful in single obj or array. its not used in nested coding.
//6. Nested copy

var arrobj = [
    {name : "nikhil"},
    {name : "salesforce"}
    ]
    
    var arrobj1 = [...arrobj]
    console.log(arrobj1)                    //(2) [{…}, {…}]
                                            //0: {name: 'superman'}
                                            //1: {name: 'salesforce'}
                                            //length: 2[[Prototype]]: Array(0)

    arrobj1[0].name="superman"
    console.log(arrobj1)                    //(2) [{…}, {…}]
                                            //0: {name: 'superman'}
                                            //1: {name: 'salesforce'}
                                            //length: 2[[Prototype]]: Array(0)
    
    console.log(arrobj)                     //(2) [{…}, {…}]
                                            //0: {name: 'superman'}
                                            //1: {name: 'salesforce'}
                                            //length: 2[[Prototype]]: Array(0)

//for avoiding this problem we can do this

//6. Nested copy
var arrobj = [
    {name : "nikhil"},
    {name : "salesforce"}
    ]
  
    //var arrobj1 = [...arrobj]
    //console.log(arrobj1)
    //arrobj1[0].name="superman"
    //console.log(arrobj1)
    //console.log(arrobj)

    // Hack for nested copy

var arrobj1 = JSON.parse(JSON.stringify(arrobj))
arrobj1[0].name="superman"
console.log(arrobj1)                //(2) [{…}, {…}]
                                    // 0: {name: 'superman'}
                                    // 1: {name: 'salesforce'}
                                    // length: 2
console.log(arrobj)                 //(2) [{…}, {…}]
                                    // 0: {name: 'nikhil'}
                                    // 1: {name: 'salesforce'}
                                    // length: 2