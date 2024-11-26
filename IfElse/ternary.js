// var a = 13;
// var b = 15;

// // var x = a > b ? "A is gretter" : "B is gretter";
// // console.log(x);


// // b > a ? console.log("B is gretter") : console.log("A is gretter");

// var x = a > b ? a : b;

// console.log(x + " is gretter");



// if(a > b && b > c){
//     console.log("A is gretter");
    
// }
// else if(b > c && b > a){
//     console.log("B is gretter");
    
// }
// else{
//     console.log("C is gretter");
 
// }




// if(a > b && a > c)
// var a = 11;
// var b = 11;
// var c = 12;
// if(a>b){
//     if(a>c){
//         console.log("A is gretter");
        
//     }
//     else{
//         console.log("C is gretter");
        
//     }
// }
// else{
//     if(b > c){
//         console.log("B is gretter");
        
//     }
//     else{
//         console.log("C is gretter");
        
//     }
// }


var a = 15;
var b = 13;
var c = 12;

// a > b && a > c ? "A is gretter" : b > c && b > a ? "B is gretter" : "C is gretter"

var x = a > b ? (a > c ? a : c) : (b > c ? b : c)
console.log(x + " is gretter");
