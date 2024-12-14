import express from "express"
import dotenv from "dotenv"
dotenv.config({path:"./config.env"})
 
import data from "./routers/router.js"
// import { router,data } from "./routers/router.js"
let app = express()
let port = process.env.PORT
 
console.log(data)
app.listen(port,() => {
    console.log(`server is running on port:${port} |http://localhost:${port}`)
})