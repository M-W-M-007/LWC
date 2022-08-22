/***var keyword** ******/
// It can be updated and also can be re-declared
// var keyword two type of scope global and function
// not block level scope

var course="zero to hero"
console.log(window.course)
function abc (){
    var anotherCourse = "hero in LWC"
    console.log(anotherCourse)
}
abc()

var x = 10.66 //±(253-1) 
console.log(typeof x) 

// big int 
var y= 1068768768n 
console.log(typeof y) 

// string 
var name='nikhil' 
console.log(typeof name) 

// boolean 
var isMonday = true 
console.log(typeof isMonday) 

// undefined 
var z 
console.log(typeof z)
 
//objects 
var obj={} 
console.log(typeof obj) 
var arr = [] 
console.log(typeof arr) 

//symbol 
var sym= Symbol("id") 
console.log(typeof sym) 

// null 
var x1 = 10 
x1 = null 
console.log(typeof x1) 

// String() Boolean() 
console.log(typeof new String("hey"))