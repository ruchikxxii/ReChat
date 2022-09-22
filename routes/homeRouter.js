const express  = require('express')
const router = express.Router()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/messagesDB')
const messageSchema = new mongoose.Schema({
    username:String,
    content:String
})

const Message = mongoose.model('Message',messageSchema)

const getMessages = async ()=>{
    const messages = await Message.find({});
    return messages;
}

router.post("/",(req,res)=>{
    const username = req.query.username
    const message = new Message({
        username:username,
        content:req.body.content
    })
    message.save();
    res.redirect(`/home?username=${username}`)
})

module.exports = {getMessages,router};
