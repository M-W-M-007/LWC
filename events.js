// function firstfunction(){
//     console.log('Hurrah Wazid')     //when you click on Click buttoin which created by html file it will show "Hurrah Wazid" 
// }

function secondfunction(){
    console.log('dusri bar click kiya')
}

let btn = document.querySelector("button")
btn.addEventListener("click", secondfunction)

document.addEventListener("mousemove", handler)
function handler(){
    document.querySelector(".demo").innerHTML = Math.random()       //by this mouse pointer position will show
}
function removeHandler(){
    document.removeEventListener("mousemove", handler)      //by this mouse pointer postion will stop to show
}