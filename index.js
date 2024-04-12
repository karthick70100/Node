const mongoose = require('mongoose')
const express = require('express')

app = express()

mongoose.connect('mongodb://localhost:27017/newdb').then(()=>{
    console.log("Db is Connected")
})


const UserSchema = new mongoose.Schema({
    name:String
})
const UserModel = mongoose.model("newcol",UserSchema)

app.get("/",(req,res)=>{
    UserModel.find({}).then(function(newcol){
        res.json(newcol)
    })
})
app.listen(5000) 