const singapore = (option)=>{

    console.log(option.fname + " Your trip singapore confirm with package " + option.amount);
    
}

const hongkong = (option)=>{
    console.log(option.fname + " Your trip hongkong confirm with package " + option.amount);
}

const goa = (option)=>{
    console.log(option.fname + " Your trip goa confirm with package " + option.amount);
}

const travel = (file,cb)=>{
    cb({fname:"rahul",amount:file})
}

var budget = 3000;
if(budget > 2500)
{
    travel(budget,singapore)
}
else if (budget > 2000){
    travel()
}
else if (budget > 1000){
    travel()
}