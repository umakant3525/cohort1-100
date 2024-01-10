const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT,console.log(`Listening on the ${PORT}`));

function ageChecker(req,res,next){
    const age = req.query.age;

    if(age > 18){
        next();
    }else{
        res.status(403).send("Acces denied do to less age")
    }
}

//here is no need of middlewre 
app.get("/ride1",function(req,res){
    res.send("You rode the 1st ride")
})

// can check for only one middleware
app.get("/ride2",ageChecker,function(req,res){
    res.send("You rode the 2nd ride")
})

app.use(ageChecker);
//below this all routes compulsary have to check age middleware


app.get("/ride3",function(req,res){
    res.send("You rode the 3rd ride")
})

app.get("/ride4",function(req,res){
    res.send("You rode the 4th ride")
})

