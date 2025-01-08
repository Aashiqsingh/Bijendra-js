var language = ["hindi","english","gujarati","marathi","french","chinese","turkish"];


// filter : it will return new array with modified data


// language = language.map((lang)=>{
//     return lang.toUpperCase()
// })

// console.log(language);

// language = language.filter((lang)=>{
//     return lang.startsWith("h")
// })

// console.log(language);



var x = language.filter((lang)=>{
    return lang!="marathi"
})

console.log(x);
