
const express = require('express')
const { default: mongoose } = require('mongoose')
const mongo = require('mongoose')


// mongo.connect('mongodb://localhost:27017/newdb').then(()=>{
//     console.log("Db is Connected")
// })
// mongo.connect('mongodb://127.0.0.1:27017/newdb').then(()=>{
//     console.log("Db is Connected")
// })
mongo.connect('mongodb+srv://lingesh2:mdd36DjosKpV7cGf@cluster0.ucecf1q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Db is Connected")
})

const DBSchema = new mongo.Schema({
    name:String
})

const DBModel = mongo.model("Dbcols", DBSchema)


app = express()


app.get("/",(req,res)=>{
    DBModel.find({}).then(function(Dbcols){
        res.json(Dbcols)
    }).catch(function(err){
        console.log(err)
    })
})
app.listen(1001,()=>{
    console.log("server is Running on Port 1000")
})
