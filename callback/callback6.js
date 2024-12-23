const singapore = (option)=>{

    return option.fname + " Your trip singapore confirm with package " + option.amount
    
}

const hongkong = (option)=>{
    return option.fname + " Your trip hongkong confirm with package " + option.amount
}

const goa = (option)=>{
    return option.fname + " Your trip goa confirm with package " + option.amount
}

// const travel = (file,cb)=>{
//     return cb({fname:"rahul",amount:file})
// }

const travel = (file,cb)=> cb({fname:"rahul",amount:file})


var budget = 3100;
var flag;

if(budget > 2500)
{
    flag = travel(budget,singapore)
}
else if (budget > 2000){
    flag = travel(budget,hongkong)
}
else if (budget > 1000){
    flag = travel(budget,goa)
}

console.log(flag);
