let str = "Hello guys doing i hope your are doing good" 
// includes () - 
//The includes () method determines whether a string contains 
//the characters of a specified string. 
let check = str.includes ("hope") 
console.log(check)                          //true

// indexof 
//The indexOf() method returns the position of the first 
// occurrence of a specified value in a string. 
let index = str.indexOf("doing") 
console.log(index)                              //11 if word is not in line so it show -1

// startsWith() 
// determines whether a string begins with the characters 
// of a specified string. 
console.log(str.startsWith("Hello"))            //true if I typed "heloo" it's show fale


//Slice () 
//method extracts parts of a string and returns the extracted parts in a new string.
let newStr = str.slice(0, 5) 
console.log(newStr)                     //Hello

//toLowerCase() 
// converts string to lowerCase letter 
let x = "My name is Nikhil" 
console.log(x.toLowerCase())                //my name is nikhil

// toUpperCase() 
// converts string to uppercase letter 
console.log(x.toUpperCase())                //MY NAME IS NIKHIL


//trim() - removes whitespaces from both sides of a string 
let searchText = " salesforce lwc           "
console.log(searchText.trim())              //salesforce lwc