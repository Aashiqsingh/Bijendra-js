// console.log(document.getElementById("txt").innerHTML)
// console.log(document.getElementById("txt").innerHTML = "Royal technosoft pvt ltd.");


function changeTxt(){

    // document.getElementById("txt").innerHTML = "Royal technosoft pvt ltd.";
    var txt = document.getElementById("txt");
    txt.innerHTML = "Royal Technosoft Pvt. Ltd.";
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
    txt.style.height = "200px";
    txt.style.width = "200px";

    var btn = document.getElementById("btn");
    btn.style.backgroundColor = "green";
}