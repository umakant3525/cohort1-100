const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const JWT_SECRET = require("../solution/index"); 
const jwt = require("jsonwebtoken");

const router = Router();

// Admin Routes

// Route for creating a new admin
router.post('/signup', (req, res) => {
    const { username, password } = req.body;

    // Create a new admin with provided username and password
    Admin.create({ username, password })
        .then(() => {
            res.json({ msg: "Admin is created" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ msg: "Error occurred during admin creation" });
        });
});

// Route for admin signin
router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find an admin with the given username
        const user = await Admin.findOne({ username });

        // If an admin with the provided username exists
        if (user) {
            // Generate a JWT token with the username and send it as a response
            const token = jwt.sign({ username }, JWT_SECRET);
            res.json({ token });
        } else {
            // If the username does not exist, return an unauthorized status
            res.status(401).json({
                msg: "Incorrect email or password"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Route for creating courses (accessible only to admins)
router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

// Route for fetching courses (accessible only to admins)
router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;
