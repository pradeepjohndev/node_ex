module.exports = (req, res, next) => {
    console.log("Request URL:", req.url, "Method:", req.method, "Request Body:", req.body);
    next();
}