
const express = require('express')

app = express()



app.get("/",(req,res)=>{
      res.write("Hello")
    })
})
app.listen(5000) 
