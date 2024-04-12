// const http = require('http')

// http.createServer((req,res)=>{
//     res.write("Hello")

// }).listen(3000,()=>{
//     console.log("server is on")
// })

const express = require('express')
const mango = require('mongoose')
mango.connect("mongodb://localhost:27017/newDB").then(()=>{
    console.log("Db is connected")
})

const UserSchema = new mango.Schema({
    name:String
})
const UserModel = mango.model("NewCol",UserSchema)
app = express()


app.listen(8000)