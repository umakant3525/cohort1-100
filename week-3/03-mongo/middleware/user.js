const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
    const username = req.headers.username; // Change this to match the header key where username is provided
    const password = req.headers.password; // Change this to match the header key where password is provided

    if (!username || !password) {
        return res.status(403).json({ msg: "Username or password not provided" });
    }

    try {
        const user = await User.findOne({ username, password });
        if (user) {
            next(); // Move to the next middleware or route handler
        } else {
            res.status(403).json({ msg: "Invalid username or password" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error occurred while checking user credentials" });
    }
}

module.exports = userMiddleware;
