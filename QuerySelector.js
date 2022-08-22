let element = document.querySelector('div')
console.log(element)                        //<div> Hi everuone</div>
element.style.color='Orange'                //only first div in irange color

let elementAll = document.querySelectorAll('div')
console.log(elementAll)                 //NodeList(3) [div, div, div]
Array.from(elementAll).forEach(function(item){
    item.style.color='Pink'                 //All in ink Color
})

//if you used map funcition 
let elementtwo = document.querySelector('div')
console.log(elementtwo.innerHTML)                        //Hi everyone
console.log(elementtwo.innerText)                       //Hi everyone
elementtwo.style.color='Orange'                //only first div in irange color

let elementAlltwo = document.querySelectorAll('div')
console.log(elementAlltwo)                 //NodeList(3) [div, div, div]
Array.from(elementAlltwo).map(function(item){
    return item.style.color='Pink'                 //All in ink Color
})

//if we used class element in HTML used that in Js class
let elementthree = document.querySelector('.abc')
console.log(elementthree.innerText)                       //Hi everyone

document.querySelector('.abc')
this.template.querySelector('.abc')