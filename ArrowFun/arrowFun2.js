const lasvegas = (option)=>{
    console.log(option.fname +" lasvegas you tour is confirm with amount " + option.amount);
    
}

const singapore = (option)=>{
    console.log(option.fname +" singapore you tour is confirm with amount " + option.amount);
}

const lassees = (option)=>{
    console.log(option.fname +" lasees you tour is confirm with amount " + option.amount);
}

const goa = (option)=>{
    console.log(option.fname +"goa  you tour is confirm with amount " + option.amount);
}

var budget = 2500;

if(budget > 3500)
{
    lasvegas({fname:"rahul",amount:budget,size:"100kb"})
}
else if(budget > 3000){
    singapore({
        fname:"samir",
        amount:budget,
        size:"75kb"
    })
}
else if(budget > 2500){
    lassees({fname:"samir",amount:budget,size:"200kb"})
}
else if(budget > 2000){
    goa({fname:"rahul",amount:budget,size:"50kb"})
}
