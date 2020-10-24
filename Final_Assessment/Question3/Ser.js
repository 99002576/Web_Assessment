const app = require('express')();
const parser = require("body-parser");

const fs = require("fs");
const dir = __dirname;


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

let Libs = [];

function readData(){
    const filename = "list.json";
    const jsonContent = fs.readFileSync(filename, 'utf-8'); 
    Libs = JSON.parse(jsonContent);
}

function saveData(){
    const filename = "list.json";
    const jsonData = JSON.stringify(Libs);
    fs.writeFileSync(filename, jsonData, 'utf-8');
}
app.get("/Libs", (req, res)=>{
    readData();
    res.send(JSON.stringify(Libs));    
})

app.get("/Libs/:id", (req, res)=>{
    const newName = req.params.id;
    if(Libs.length == 0){
        readData();
    }
    let foundRec = Libs.find((e) => e.newName == newName);
    if(foundRec == null)
        throw "Lib not found";
    res.send(JSON.stringify(foundRec))
})


