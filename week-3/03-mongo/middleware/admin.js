const { Admin } = require("../db/index");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Extract username and password from headers or request body based on your setup
    const username = req.headers.username; // Change this to match the header key where username is provided
    const password = req.headers.password; // Change this to match the header key where password is provided

    // Check if username and password are present
    if (!username || !password) {
        return res.status(403).json({ msg: "Username or password not provided" });
    }

    // Validate admin from the Admin DB
    Admin.findOne({ username, password })
        .then(function (admin) {
            if (admin) {
                next(); // Move to the next middleware or route handler
            } else {
                res.status(403).json({ msg: "Invalid username or password" });
            }
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({ msg: "Error occurred while checking admin credentials" });
        });
}

module.exports = adminMiddleware;
