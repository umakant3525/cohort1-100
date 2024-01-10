const express = require("express");
const jwt = require("jsonwebtoken");
const { decode } = require("punycode");
const jwtPassword = "1234";
const PORT = 3000;
const app = express();

app.listen(PORT,console.log(`PORT is listening on ${PORT}`))

app.get("/",function(req,res){
    res.send("authantication")
})

app.use(express.json())

const ALL_USERS = [
    {
        username: "umakant@gmail.com",
        password: "123",
        name: "umakant shinde"
    },
    {
        username: "harkirat12@gmail.com",
        password: "13423",
        name: "Harkirat Singh"
    },
    {
        username: "gaurav12@gmail.com",
        password: "12344321",
        name: "Gaurav Ghuge"
    }
];

function userExists(username, password) {
    // logic for true or false
    //it is for the auth library for the all users

    let userExists = false;
    for(let i =0;i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;
}



app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our database"
        });
    }

    //this is for sign in the function 
    var token = jwt.sign({ username: username }, "shhhh");
    return res.json({
        token
    });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    try {
        const decode = jwt.verify(token, jwtPassword);
        const username = decode.username;
        // Further logic based on the decoded token

        res.json({
            users: ALL_USERS.filter(function(value){
                if(!value.username == username){
                    return false
                }
                else{
                    return true;
                }
            })
        })
        
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token" 
        });
        //console.log(err)
    }
});
