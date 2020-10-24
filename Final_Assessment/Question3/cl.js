const app = require("express")();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/basicpage.html");
})

app.listen(8888, ()=>{
    console.log("Client App running at 8888");
})