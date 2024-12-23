const jpgHandler = (file)=>{

    return file.fname + " is handle by jpg handler with size " + file.size 
}

const pngHandler = (file)=>{

    return file.fname + " is handle by png handler with size " + file.size + 
}

const gifHandler = (file)=>{

    return file.fname + " is handle by gif handler with size " + file.size
}

const wordHandler = (file)=>{
    return file.fname + " is handle by word handler with size " + file.size
}

const Handler = (cb,option)=>{
    var x = cb({
        fname:option,
        size:"1000kb",
        ram:"10GB"
    })

    console.log(x);
    
}

var fileName = "abc.png";

if(fileName.endsWith(".jpg")){
    Handler(jpgHandler,fileName)
}
else if(fileName.endsWith(".png")){
    Handler(pngHandler, fileName)
}
else if(fileName.endsWith(".gif")){
    Handler(gifHandler, fileName)
}
else if(fileName.endsWith(".word")){
    Handler(wordHandler, fileName)
}