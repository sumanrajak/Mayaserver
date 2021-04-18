const express = require("express");
const data = require("./deta.js");
const meeting = require("./meetdb.js");
const mongoose = require('mongoose');
const con_url='mongodb+srv://suman2:suman@cluster0.dd81x.mongodb.net/meeting?retryWrites=true&w=majority'
 mongoose.connect(con_url,{
    
     useNewUrlParser:true,
     useUnifiedTopology:true
 })
 const db= mongoose.connection;
 db.once("open",()=>{
   console.log("db conected");})

const app= express();
app.use(express.json())

const port=process.env.PORT || 3001
app.get('/',(req,res)=>{
    res.send('hi')
})
app.get('/api/meets', async (req,res)=>{
    try {
        const meet= await meeting.find();
    res.send(meet)
    res.json({msessage:meet})

    } catch (error) {
        res.json({msessage:error})
    }
    
    // res.send(data.meet)
})
app.post("/sendmsg",(req,res)=>{
 
    const meet=new meeting(req.body)
    meet.save().then((data)=>{
        res.status(201).json(data)
    }).catch (()=>{
        res.status(500).json({msg:"error"})
    })
      })
     

app.delete('/:meetid',async (req,res)=>{
    try {
        const meetdel= await meeting.remove({_id:req.params.meetid});
    
    res.json(meetdel)

    } catch (error) {
        res.json({msessage:error})
    }
    
   
})




app.use(express.json());

app.listen(port,()=>{
    console.log( `server running at ${port}`);
})
