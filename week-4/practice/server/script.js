//http://localhost:3000/sum?a=53&b=3

//http://localhost:3000/interest?principal=100&rate=5&time=2

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());

app.get("/" , function(req,res){
    res.send("Hi this server is for trial purpose ")
})

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal); 
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.send({
    total: total,
    interest: interest,
  })

});

app.listen(PORT,console.log(`Listening on : ${PORT}`))
