//The middleware which allows us to send this token in the header when we want to access a protected route

const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
    //Get token from header
    const token = req.header("x-auth-token");

    //Check if token doesn't exists
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        //Attach the user object got from token to the req object so that we can use it in the route
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};
