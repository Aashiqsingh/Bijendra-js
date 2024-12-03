function science(per,fname){

    console.log(fname +" your admission confirm in science stream wwith per " +per);
    
}

function commerce(per,fname){
    console.log(fname +" your admission confirm in commerce stream wwith per " +per);
}

function art(per,fname){
    console.log(fname +" your admission confirm in art stream wwith per " +per);
}

var percentage = 49;
var first_name = "kishan";
if(percentage > 90)
{
    science(percentage,"sakshi")
}
else if(percentage > 70){
    commerce(percentage,first_name)
}
else if(percentage > 50){
    art(percentage,first_name)
}
else{
    console.log("You have no admission chance");
    
}