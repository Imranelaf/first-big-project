function addArticle(){
    const fs = require("fs");
    fs.writeFile("articles.txt", finput, (err)=>{
        if (err) throw err;
        else{
            console.log("all good");
        }
    })


}