var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"payal",
                age:32,
                gender:"female",
                isActive:true
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true,
                salary:50000
            },
            {
                name:"axit",
                age:24,
                gender:"male",
                isActive:true,
                salary:45000
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true,
                salary:60000
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false,
                salary:55000
            }
            
        ]
    },

]

// var x = departments.find((depart)=> depart.name === "Finance").employees.reduce((sum,emp)=> sum + emp.salary,0)
// console.log(x);






// var sum = 0;
// departments.forEach((depart)=>{
//     if(depart.name === "Finance")
//     {
//         depart.employees.forEach((emp)=>{
//             sum = sum + emp.salary
//         })
        
//     }
    
    
// })

// console.log(sum);










// var x = departments.map((depart)=> depart.employees.filter((emp)=> emp.name === "payal"))
// console.log(x);





// var x = departments.map((depart)=> depart.employees.filter((emp)=> emp.age > 25))
// console.log(x);









// var x = departments.find((depart)=>{
//     return depart.name === "IT"
// }).employees.filter((emp)=>{
//     return emp.age >= 25
// })

// console.log(x);





// var x = departments.find((depart)=> depart.name === "Finance").employees.filter((emp)=> emp.gender === "female")
// console.log(x);






// departments.forEach((depart)=>{
//     console.log(depart.name);
    
// })






// var x = departments.map((depart)=>{
//     return depart.name
// })

// console.log(x);



var employee = [
    {
        name : "rahul",
        salary : 50000
    },
    {
        name:"tejas",
        salary : 60000
    },
    {
        name : "james",
        salary : 70000
    }
]


// var sum = 0;

// for(let i=0;i<employee.length;i++)
// {
//     sum = sum + employee[i].salary
// }

// console.log(sum);

var x= employee.reduce((sum,emp)=>{
    return sum + emp.salary
},0)

console.log(x);
