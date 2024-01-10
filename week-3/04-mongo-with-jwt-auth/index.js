const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const JWT_SECRET = "umakant_server";

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Define routes for admin and user
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the JWT_SECRET variable
module.exports = JWT_SECRET;
