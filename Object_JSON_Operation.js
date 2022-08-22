let obj={ 
    name : "Salesforce",
    age : 23, 
    dob : '23/10/1990' 
    }
     
    //Object.keys () 
    console.log(Object.keys (obj))          //['name', 'age', 'dob']
     
    // Object.values() 
    console.log(Object.values (obj))        //['Salesforce', 23, '23/10/1990']
     
    //JSON.stringify 
    console.log(JSON.stringify (obj))        //{"name":"Salesforce","age":23,"dob":"23/10/1990"}
     
    //JSON.stringify 
    let str = JSON.stringify (obj) 
    console.log(str)                        //{name: 'Salesforce', age: 23, dob: '23/10/1990'}
    
    
    // JSON.parse 
    console.log(JSON.parse(str))        //{name: 'Salesforce', age: 23, dob: '23/10/1990'}