const getCurrentLocation = ()=>{

    let current = document.getElementById("current");

    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position);
        console.log("Latitute :",position.coords.latitude);
        console.log("Longitude :",position.coords.longitude);
        current.innerHTML = `Latitude ${position.coords.latitude} and Longitude ${position.coords.longitude}`
        
    },(err)=>{
        console.log(err);
        console.log("Unable to get location");
    })
}


var watchLocation = document.getElementById("watchLocation");
// var flag;
watchLocation.addEventListener('click',()=>{

    navigator.geolocation.watchPosition((position)=>{

        // console.log(position);
        // console.log("Latitute :",position.coords.latitude);
        // console.log("Longitude :",position.coords.longitude);

        // current.innerHTML = `Longitude ${position.coords.longitude}`

        const {latitude,longitude} = position.coords;

        current.innerHTML = `Latitude ${latitude} and Longitude ${longitude}`;
        
    })
})