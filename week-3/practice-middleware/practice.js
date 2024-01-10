//------------------------- 1------------------------


// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// function userMiddleware(req, res, next) {
//   const { username, password } = req.query; // assuming username and password are sent as query parameters
//   if (username !== "umakant" || password !== "pass") {
//     res.status(403).json({
//       msg: "Incorrect input"
//     });
//   } else {
//     next();
//   }
// }

// function kidneyMiddleware(req, res, next) {
//   const { kid } = req.query; // assuming kid is sent as a query parameter
//   if (kid !== "1" && kid !== "2") {
//     res.status(400).json({
//       msg: "Incorrect input"
//     });
//   } else {
//     next();
//   }
// }

// app.get("/health-check", userMiddleware, kidneyMiddleware, function (req, res) {
//   res.send("Your health is healthy");
// });






//------------------------- 2 ------------------------
//Request middleware

// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// let numofRequest = 0;

// function requestMiddleware(req, res, next) {
//     numofRequest++;
//     console.log(numofRequest);
//     next();
// }


// app.get("/requestcheck", requestMiddleware, function (req, res) {
//   res.send("We are counting request !");
// });

//------------------------- 3 ------------------------

//const express = require("express");
// const app = express();
// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// let numofRequest = 0;

// function requestMiddleware(req, res, next) {
//     numofRequest++;
//     console.log(numofRequest);
//     next();
// }


// app.get("/requestcheck", requestMiddleware, function (req, res) {
//   res.send("We are counting request !");
// });

//------------------------- 4------------------------

const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT,console.log(`Listening on ${PORT}`))

//global middleware
app.use(express.json())

app.post("/postreuest",function(req,res){
    //kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send("You have"+ kidneysLength + "kidneys")
})

app.use(function(err,re,res,next){
    errorcount++;
    res.json({
        msg : "Something went wrong handled with global catches"
    })
})

