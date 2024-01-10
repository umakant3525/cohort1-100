const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    const { username, password } = req.body;

    // Check if a user with this username already exists 
    Admin.create({ username, password })
    .then(() => {
        res.json({ msg: "Admin is created" });
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ msg: "Error occurred during admin creation" });
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    const { title, description, imageLink, price } = req.body;

    // Input validation can be done here for real-world applications

    Course.create({ title, description, imageLink, price })
    .then((createdCourse) => {
        res.json({ msg: `Course is created => ${createdCourse._id}` });
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ msg: "Error occurred during course creation" });
    });
});

// router.get('/courses', adminMiddleware, (req, res) => {
//     Course.find()
//     .then((courses) => {
//         res.json({ courses });
//     })
//     .catch((err) => {
//         console.error(err);
//         res.status(500).json({ msg: "Error occurred while fetching courses" });
//     });
// });

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        const courses = await Course.find();
        res.json({ courses });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error occurred while fetching courses" });
    }
});


module.exports = router;
