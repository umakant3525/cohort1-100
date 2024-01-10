// const express = require("express");
// const app = express();
// const PORT = 3000;

// function sumofNum(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// app.get("/", function(req, res) {
//     //http://localhost:3000/?n=20
//     const n = req.query.n
//     const result = sumofNum(n); 
//     res.send(`Sum: ${result}`);
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



//-------In memory array -----srever for the hospital 
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberofKidneys = johnKidneys.length;
    const healthyKidneys = johnKidneys.filter(kidney => kidney.healthy);
    const numofHealthyKidneys = healthyKidneys.length;
    const numberofunHealthyKidneys = numberofKidneys - numofHealthyKidneys;

    res.json({
        numberofKidneys: numberofKidneys,
        numberofHealthyKidneys: numofHealthyKidneys,
        numberofunHealthyKidneys: numberofunHealthyKidneys
    });
});

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;

    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done....!"
    });
});

app.put("/", function(req, res) {
    users[0].kidneys = users[0].kidneys.map(kidney => {
        return { ...kidney, healthy: true };
    });
    res.json({
        msg: "Update Done....!"
    });
});

app.delete("/", function(req, res) {
    users[0].kidneys = users[0].kidneys.filter(kidney => kidney.healthy);
    res.status(200).json({
        msg: "Delete Done....!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

