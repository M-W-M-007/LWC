function checkIsSuccess (data) {
    return new Promise(function(resolve, reject){
  if(data ==="success") {
  return resolve("successfully executed") 
  } else {
   return resolve("unsuccessfully executed")   
  } 
}
  )}
console.log(checkIsSuccess ('success'))         // Promise {<fulfilled>: 'successfully executed'}
            //or
// to see in real time
checkIsSuccess('success').then(function(result) {
    console.log(result)                             //successfully executed
   }) 
        //or
   checkIsSuccess ('success') .then(function(result) { 
   console.log(result)                              //successfully executed
}).catch(function(error) { 
    console.error(error) 
}) 
            //or
checkIsSuccess ('') .then(function(result) { 
   console.log(result)                              
}).catch(function(error) { 
    console.error(error)                            //unsuccessfully executed
}) 


//OR

function checkIsSuccess (data) {
    return new Promise(function(resolve, reject){
  if(data ==="success") {
  return resolve("successfully executed") 
  } else {
   return reject("unsuccessfully executed")   
  } 
}
  )}
  checkIsSuccess ('') .then(function(result) { 
    console.log(result)                              
 }).catch(function(error) { 
     console.error(error)                           //unsuccessfully executed                      
 }) 


 fetch('https://api.github.com/users/karkranikhil').then(function(result){
console.log(result) })                              //Response {type: 'cors', url: 'https://api.github.com/users/karkranikhil',
                                                    //redirected: false, status: 200, ok: true, …}

fetch('https://api.github.com/users/karkranikhil').then(function(result){
return result.json()
 }).then (function(response){
console.log(response)                               //{login: 'karkranikhil', id: 11937732, node_id: 'MDQ6VXNlcjExOTM3NzMy',        
                                                    // avatar_url: 'https://avatars.githubusercontent.com/u/11937732?v=4', gravatar_id: '', …}
 })