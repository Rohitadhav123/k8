const express =require("express")
const port=8000

const app=express()


app.get("/",(req,res)=>{
    res.send("It is successfully run ")
})

app.listen(port,()=>{
    console.log(`It is run on port ${port}`)
})