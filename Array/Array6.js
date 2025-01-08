var language = ["hindi","english","gujarati","marathi","french","chinese","turkish"];

var langName = "english";


// const DeleteLang = (langName)=>{

//     return  language.filter((lang)=> lang != langName)
   
    
// }


// var x = DeleteLang(langName)



const DeleteLang = (langName)=> { 
    return language.filter((lang)=>{
        return  lang != langName
    })
}
   
    



var x = DeleteLang(langName)

















// var langName = "turkish";


// const DeleteLang = (langName)=>{

//     // var x = language.filter((lang)=>{
//     //     return lang != langName
//     // })

//     // return x


//     return language.filter((lang)=>{
//         return lang != langName
//     })
    
// }


// var x = DeleteLang(langName)
console.log(x);

















// var langName = "french";


// const DeleteLang = (langName)=>{

//     var x = language.filter((lang)=>{
//         return lang != langName
//     })

//     console.log(x);
    
// }


// DeleteLang(langName)