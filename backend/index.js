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
            res.send({message : "Email id is already register", alert : false})
        }
        else {
            const data = userModal(req.body) 
            const save = data.save()
            res.send({message :"Successfully sign up", alert : true})
        }
    })
})


//api login
app.post("/login", (req, res) => {
    console.log(req.body)
    const {email} = req.body
    userModal.findOne({email : email}, (err,result) => {
        if(result) {
        
            const dataSend = {
                _id : result._id,
                firstName : result.firstName,
                lastName : result.lastName,
                email : result.email,
                image : result.image,
            }
            console.log(dataSend);
            res.send({message : "Login is successfully done", alert : true, data : dataSend})
        }
        else {
            res.send({message : "Email is not available, please signup", alert : false})
        }
        
    })
})

//product schema section
const schemaProduct = mongoose.Schema({
    name : String,
    category : String,
    image : String,
    price : String,
    description : String,
});

//save product in data
app.post("/uploadProduct", (req,res) => {
    console.log(req.body)

    res.send({message : "Uloaded Successfuly"})
})


const productModal = mongoose.model("product", schemaProduct);

app.listen(PORT, () => console.log("Server is running at port : " + PORT)
)