const singapore = (option)=>{

    return option.fname + " Your trip singapore confirm with package " + option.amount
    
}

const hongkong = (option)=>{
    return option.fname + " Your trip hongkong confirm with package " + option.amount
}

const goa = (option)=>{
    return option.fname + " Your trip goa confirm with package " + option.amount
}

const travel = (file,cb)=>{
    var x = cb({fname:"rahul",amount:file})
    console.log(x);
    
}

var budget = 2000;

if(budget > 2500)
{
    travel(budget,singapore)
}
else if (budget > 2000){
    travel(budget,hongkong)
}
else if (budget > 1000){
    travel(budget,goa)
}