import express from "express"
let aap = express()
let port = 3050
aap.get("/", (req , res) => {
   
    

    res.json(
        {
            "message": "this is file",
            "data": 2314,
            "name": "khushi thool",
            "array": [1,2,3,4,5,6,],
            "age":21,
           "email":"khushithool0@gmail.com",
            "isopen": true
        }
    )
})
aap.listen(port, () => {
    console.log(`server is running on port :${port} | http://localhost:${port}`)
})