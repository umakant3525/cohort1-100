const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://umakant3525:umakant3525@assignment1.kuygwww.mongodb.net/course_signin');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchaseCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]
});


const CourseSchema = new mongoose.Schema({
    // Schema definition here

    title : String,
    description : String,
    imageLink : String ,
    price : Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}