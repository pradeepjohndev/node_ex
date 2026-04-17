const jwt = require('jsonwebtoken');

module.exports = ((req, res, next) => {
    console.log("Request URL:", req.url, "Method:", req.method, "Request Body:", req.body);
    next();
});

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, "mysecretkey");
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid token" });
    }
};
