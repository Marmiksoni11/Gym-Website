// this contains 73, 74 creating and getting form data 

const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;
const path = require('path');

//for serving static files
app.use("/static",express.static("./static"))
app.use(express.urlencoded())

//PUG SPECIFIC CONTENT
app.set('view engine','pug')
app.set('views', path.join(__dirname,'views'))

//ENDPOINTS
app.get('/',(req,res)=>{
    const con = "this is the best content on the internet so far so use it wisely"
    const params = {'title': 'pubg is the best game', 'content': con}
    res.status(200).render('./index.pug',params)
})
app.post('/' ,(req,res)=>{
    // console.log(req.body)//data shows in terminal
    name= req.body.name
    age= req.body.age
    gender= req.body.gender
    address= req.body.address
    more= req.body.more
    let outputToWrite = `the name of the client is ${name},${age} years old, ${gender}, residind at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params= {'message':"your form has been submitted successfully"}  
    res.status(200).render('./index.pug',params)
    
})

app.listen(port,()=>{
    console.log(`the application is running successfully on port ${port}`);
});