const express = require("express");
const cors = require("cors")
const { connection } = require("./db");
require("dotenv").config()
const app = express();

app.use(express.json())
app.use(cors())


app.listen(process.env.port,async(req,res)=>{
    try{
        await connection
        console.log("connected to DB")
        console.log(`Running on ${process.env.port}`)
    }catch(err){
        res.send(err)
    }
})