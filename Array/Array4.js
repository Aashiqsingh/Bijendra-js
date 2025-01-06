// var employee = ["rahul","samir","tejas","bhuwan","puk","rakesh","akash"];


// for(let i=0;i<employee.length;i++){

//     console.log(employee[i]);
    
// }

// employee.forEach((emp)=>{
//     console.log(emp.toUpperCase());
    
// })


// var user = [];

// employee.forEach((emp)=>{
//     // user.push(emp.toUpperCase()) 
//     // user = [...user,emp]   
// })

// console.log(user);


// map : it will return new Array with same length 





// var x = employee.map((emp)=>{
//     return emp.toUpperCase()
// })

// console.log(x);

var employee = ["rahul","samir","tejas","bhuwan","puk","rakesh","akash"];


employee.forEach((emp)=>{
    if(emp.length > 4)
    {
        console.log(emp);
    }
    
})

var x = employee.map((emp)=>{
    return emp.toUpperCase()
})

console.log(x);
