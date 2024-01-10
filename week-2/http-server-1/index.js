console.log("Hello")

const express = require("express");
const port = process.env.PORT || 3000 ;
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello My first sever <br> same wifi <br> live chnges by nodemon  </h1>");
});

app.post('/page2', (req, res) => {
    console.log(req.headers["authorization"])
    res.send({
        msg: " 2 + 2 =4"
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


// const express = require("express");
// const app = express();
// const port = 3000;

// // Addition Logic
// app.get('/sum', (req, res) => {
//     const { a, b } = req.query;
//     if (!a || !b) {
//         return res.status(400).send('Please provide values for "a" and "b"');
//     }
//     const sum = parseFloat(a) + parseFloat(b);
//     res.send(`<h1>The sum of ${a} and ${b} is: ${sum}</h1>`);
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
