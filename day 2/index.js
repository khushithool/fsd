import express from "express";
let app = express()
let port = 2345
app.get("/",(req,res)=>{
    res.send("welcome to home page")
})
app.listen(port , ()=>{
    console.log("welcome to the server")
})