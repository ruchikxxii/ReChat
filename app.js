const express = require('express')

const app = express();

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

const messages = [
    {
        username:"Bot",
        content:"Welcome to ReChat"
    }
]

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/login.html")
})

app.post('/login',(req,res)=>{
    const username = req.body.username;
    res.redirect(`/home?username=${username}`)
})

app.get('/home',(req,res)=>{
    res.render('home',{username:req.query.username,messages:messages});
})

app.listen(3000,()=>{
    console.log("Server started on port 3000")
})