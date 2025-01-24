function changeHref(){
    var anchor = document.getElementById('anchor');

    anchor.href = "https://netflix.com";
    anchor.innerHTML = "Netflix";
    anchor.target = "_blank";
}


function changeSize(){
    var img = document.getElementById("img")
    img.style.height = "400px";
    img.style.width = "400px";
}