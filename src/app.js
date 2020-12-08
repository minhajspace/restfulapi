const express = require("express")
const app = express();
const portNumber = process.env.PORT  || 4000 ; 

// requiring datebase connection file 

require('./db/connection')
// create a new studnets 


app.post('/students', (req,res)=>{
 res.send("hello this is student page of this project")
})
app.listen(portNumber)
