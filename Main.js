const express = require('express');
const app = express();
app.use(express.json());

function logger(req, res, next) {
    console.log("Request URL:", req.url, "Method:", req.method);
    next();
}

app.use(logger);

app.get('/', (req, res) => {
    res.send('hello world');
})

app.post('/user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.send('user added successfully');
})

app.get("/user/:id", (req, res) => {
    res.send(req.params);
});

app.post('/post', (req, res) => {
    const query = req.query;
    console.log(query);
    res.send('query added successfully');
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})