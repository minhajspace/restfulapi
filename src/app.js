const express = require("express")
const app = express();
const portNumber = process.env.PORT  || 5000 ; 

// requiring datebase connection file 

require('./db/connection')

// requiring student scheam 

const student = require('./models/students')
// create a new studnets 
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello this is home page ")
})

app.post('/students', (req, res) => {
    console.log(req.body)
    const user = new student(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
     user.status(400).send(e)
    })
})

app.get('/students',async (req,res)=>{
    try{
        const saveStudentData = await  student.find()
        res.send(saveStudentData);
    } catch(e) {
       res.send(e)
    }
})

app.get('/students/:id',async (req,res)=>{
    try{
    const _id =req.params.id ;
    const indiviualStudentData = await student.findById(_id)
   
    if(!indiviualStudentData){
       return res.status(500).send()
    } else {
      return res.status(200).send(indiviualStudentData)
    }
    }
    catch(e){
        res.status(404).send(e)
    }
})


app.listen(portNumber,()=>{
    console.log(`connection is on portnumber ${portNumber}`)
})