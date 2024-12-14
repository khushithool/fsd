import express from "express"
let router= express ()
let data = 1234

router.get("/", (req,res) => {
      console.log("this is server")
      res.json({message:"this is file"})
})
// export {router,data}
export default data