var arr = ["rahul","samir","tejas","bhuwan","puk","rakesh","akash"];



// var x = arr.every((a)=>{
//     return a.length < 4
// })

// console.log(x);

var x = arr.every((a)=>{
    return a.startsWith("b")
})

console.log(x);
