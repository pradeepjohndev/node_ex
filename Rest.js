const express = require('express');
const app = express();
app.use(express.json());

const users = [];

app.use((req, res, next) => {
    console.log("Request URL:", req.url, "Method:", req.method, "Request Body:", req.body);
    next();
});

app.post('/users', (req, res) => {
    const user = req.query;
    users.push(user);
    res.send('user added successfully ');
    console.log(users);
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;
    users[id] = updatedUser;

    res.send("User updated");
});

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users.splice(id, 1);

    res.send("User deleted");
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});