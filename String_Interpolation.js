// String Interpolation 

var name = "Sales" 
var name1 = "force" 
console.log(name     + name1)         //SalesForce

var name2 = "Nikhil" 
var age = 23
var str = "my name is"+name2+ "and my age is"+ age
console.log(str)                    //my name isNikhiland my age is23

var a = 2 
var b = 3 
var str1 = "the sum of "+a+ "and"+b+ "is "+a+b 
console.log(str1)                       //the sum of 2and3is 23

var name3 = "nikhil" 
var age=23 
console.log(`my name is ${name3}`)      //my name is nikhil
var a1 = 10 
var b1 = 20 
console.log(`the sum of ${a1} ${b1} is ${a1+b1}`)       //the sum of 10 20 is 30
var recordid = 966866876 
console.log(`http://salesforce.com/${recordid}` )           //http://salesforce.com/966866876

var name4 = "Salesforce Troop"; 
console.log(`Hello, ${name4} !`);               //Hello, Salesforce Troop !
// String Interpolation with expression 
var a2 = 10; 
var b2 = 10; 
console.log(`The sum of ${a2} and ${b2} is ${a2+b2}`)           //The sum of 10 and 10 is 20