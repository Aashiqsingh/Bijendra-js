// var a = 1;

var colors = ["red", "green", "blue", "yellow", "pink","orange", "tomato"];

// console.log(colors[0]);
// console.log(colors[1]);


function changeSize(){

    // console.log(a++);
    var randomIndex = Math.floor(Math.random() * colors.length)

    console.log(randomIndex);

    var mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor = colors[randomIndex]
    
    
}