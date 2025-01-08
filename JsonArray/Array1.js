var students = [
    {
        roll:1,
        name:"vaibhav",
        age:20,
        email:"vaibhav@gmail.com",
        marks:435.789
    },
    {
        roll:2,
        name:"priya",
        age:21,
        email:"priya@gmail.in",
        marks:456.789
    },
    {
        roll:3,
        name:"prasanna",
        age:22,
        email:"prasanna@gmail.info",
        marks:478.654
    }
]




students = students.forEach((stu)=>{
    if(stu.email.endsWith(".in")){
        console.log(stu)
    }
    return stu.name.toUpperCase()
})

// console.log(students);




// console.log(students);

// console.log(students[0].name);

    // students.forEach((stu)=>{
//     if(stu.age > 21)
//     {
//         console.log(stu);
        
//     }
// })

// var x = students.filter((stu)=>{
//     return stu.age > 21
// })

// console.log(x);

