var product = {
    id:1,
    name:"I phone",
    price: 89999,
    color:["black","white","red","green","yellow"],
    isStock:true,
    discription:{
        ram:"4gb",
        storage:"64gb",
        camera:"12mp",
        battery:"3000mxxxxxAh"
    },
    model:"15 pro max"
}

console.log(product);

console.log(product.name);
console.log(product.price);
console.log(product.discription);
console.log(product.discription.battery);
console.log(product.discription.storage);


console.log(product.color);
console.log(product.color[0]);
console.log(product.color[1]);

for(let i=0;i<product.color.length;i++){
    console.log(product.color[i]);
    
}





