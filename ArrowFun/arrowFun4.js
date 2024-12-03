const lasvegas = (option)=> option.fname +" lasvegas you tour is confirm with amount " + option.amount
    


const singapore = (option)=> option.fname +" singapore you tour is confirm with amount " + option.amount


const lassees = (option)=> option.fname +" lasees you tour is confirm with amount " + option.amount

const goa = (option)=> option.fname +"goa  you tour is confirm with amount " + option.amount


var budget = 5500;
var flag;
var first_name = "harsh"

if(budget > 3500)
{
    flag = lasvegas({fname:"rahul",amount:budget,size:"100kb"})
}
else if(budget > 3000){
    flag = singapore({
        fname:first_name,
        amount:budget,
        size:"75kb"
    })
}
else if(budget > 2500){
    flag = lassees({fname:"samir",amount:budget,size:"200kb"})
}
else if(budget > 2000){
    flag = goa({fname:"rahul",amount:budget,size:"50kb"})
}

console.log(flag);
