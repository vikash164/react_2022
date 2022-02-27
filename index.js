import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

 mongoose.connect("mongodb://localhost:27017/myReactMasterDB", {
// const url ='mongodb+srv://vikash:<password>@cluster0.m2z1k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    Name: String,
    Phone: Number,
    Email: String,
    Message: String
})

const User = new mongoose.model("User", userSchema)
//Routes
app.post("/contact", (req, res)=> {
    const { Name,Phone , Email, Message} = req.body
    {
        const user = new User({
            Name,
            Phone,
            Email,
            Message
        })
        user.save(err => {})

        console.log(' Data will be saved into the DB');
        data.save();
        //res.render('contact')
        res.redirect('/Home');
    
    }
})
           
    

   
    

app.listen(9002,() => {
    console.log("BE started at port 9002")
})
