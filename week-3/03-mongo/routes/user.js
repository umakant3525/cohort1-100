const { Router } = require("express");
const router = Router();
const mongoose = require('mongoose');
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// Signup Route
router.post('/signup', (req, res) => {
    const { username, password } = req.body;

    User.create({ username, password })
        .then(() => {
            res.json({ msg: "User is created" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ msg: "Error occurred during user creation" });
        });
});

// Courses Listing Route
router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json({ courses });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error occurred while fetching courses" });
    }
});

// Course Purchase Route
// router.post('/courses/:courseId', userMiddleware, async (req, res) => {
//     const courseId = req.params.courseId;
//     const username = req.headers.username; 

//     try {
//         const updateResult = await User.updateOne(
//             { username: username },
//             { $push: { purchaseCourses: courseId } }
//         );

//         if (updateResult.nModified > 0) {
//             res.json({ msg: "Purchase complete" });
//         } else {
//             res.status(500).json({ msg: "Failed to update purchaseCourses" });
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ msg: "Error occurred during course purchase" });
//     }
// });

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    try {
        const user = await User.findOneAndUpdate(
            { username: username },
            { $push: { purchaseCourses: courseId } },
            { new: true } // To return the updated document
        );

        if (user) {
            res.json({ msg: "Purchase complete" });
        } else {
            res.status(500).json({ msg: "Failed to update purchaseCourses" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error occurred during course purchase" });
    }
});


// Fetch Purchased Courses Route
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({ username: req.headers.username }).populate('purchaseCourses');
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.json({ courses: user.purchaseCourses });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error occurred while fetching purchased courses" });
    }
});

module.exports = router;
