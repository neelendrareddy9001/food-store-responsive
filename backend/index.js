const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({limit : "10mb"}))

const PORT = process.env.PORT || 8080
//mongosse Connections
//console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connect to Database"))
.catch((err) => console.log(err))

//schema 
const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : {
        type : String,
        unique : true
    },
    password : String,
    confirmPassword : String,
    image : String
})

//user Modal 
const userModal = mongoose.model("user", userSchema)

//Api Request
app.get("/", (req, res) => {
    res.send("Server is running")
})

app.post("/signup", (req, res) => {
    console.log(req.body)

    const {email} = req.body
    userModal.findOne({email : email},(err,result) => {
        console.log(result)
        console.log(err)
        if(result) {
            res.send({message : "Email id is already register"})
        }
        else {
            const data = userModal(req.body) 
            const save = data.save()
            res.send({message :"Successfully sign up"})
        }
    })
})

app.listen(PORT, () => console.log("Server is running at port : " + PORT)
)