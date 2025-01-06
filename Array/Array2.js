var arr = ["rahul","samir","tejas","bhuwan","pukar","rakesh","akash"];

// var flag = true;

// for(let i=0;i<arr.length;i++){

//     if(arr[i].length < 4)
//     {
//         flag = false;
//         break;
//     }
// }

// console.log(flag);

// some 

// var x = arr.some((a)=>{
//     return a.length < 4;
// })

// console.log(x);

var x = arr.some((a)=>{
    return a.startsWith("b")
})
console.log(x);
