function porsche(option){

    console.log(option.name + " Porsche is available with package " + option.amount);
    
}

function scorpio(option){
    
    console.log(option.name + " scorpio is available with package " + option.amount);
}

function thar(option){
    
    console.log(option.name + " thar is available with package " + option.amount);
}

// cb -- callback 
function showroom(file,cb){
    cb(
        {
            name:"rahul",
            amount:file
        }
    )
}

var budget = 5600;

if(budget > 5000)
{
    showroom(budget,porsche)
}
else if(budget > 4000){
    showroom(budget,scorpio)
}
else if(budget > 3000){
    showroom(budget,thar)
}