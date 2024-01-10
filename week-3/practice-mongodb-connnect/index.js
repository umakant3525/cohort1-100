//signup --- post
//signin --- get
//users --- look datbase data


const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

mongoose.connect("url_of_connection_data")

const User = mongoose.model("Users",{
    name : String,
    email : String,
    password : String
})

get.post("/signup",async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email:username});

    //CRUD ---> create ,update ,delete, Read

    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name : name,
        email: email,
        password : password
    })
})

user.save();
res.json({
    msg : "User create successfully"
})