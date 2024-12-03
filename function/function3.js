function science(per,fname){

    return fname + " your admission confirm in science stream with per " + per
    
}

function commerce(per,fname){
    return fname + " your admission confirm in commerce stream with per " + per
}

function art(per,fname){
    return fname + " your admission confirm in art stream with per " + per
}

var percentage = 71;
var first_name = "kishan";

var flag;
if(percentage > 90)
{
    flag = science(percentage,"sakshi")
}
else if(percentage > 70){
    flag = commerce(percentage,first_name)
}
else if(percentage > 50){
    flag = art(percentage,first_name)
}
else{
    console.log("You have no admission chance");
    
}

console.log(flag);
