const express = require("express");
const cors = require("cors");  // Add this import
const app = express();
const PORT = 3000;

const { todo } = require("./db");
const { createTodo, updateTodo } = require("./types");

app.use(express.json());
app.use(cors());  // Enable CORS

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("I am ready with the server for todo ");
});

app.post("/todo", async (req, res) => {
    const creatPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(creatPayLoad);  // Validation of the input
    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs ",
        });
        return;
    }
    // Put it in MongoDB
    await todo.create({
        title: creatPayLoad.title,
        description: creatPayLoad.description,
        completed: false,
    });
    res.json({
        msg: "Todo created successfully ",
    });
});

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({ todos });
});

app.put("/completed", async (req, res) => {
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);  // Validation of the input
    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs ",
        });
        return;
    }
    // Update and put it in MongoDB
    await todo.updateOne(
        { _id: req.body.id },
        { $set: { completed: true } }
    );
    res.json({
        msg: "Todo marked as completed ",
    });
});
