const express = require('express');
const app = express();

app.use(express.json());

const logger = require('./middleware/middleware');
app.use(logger);

const route = require('./route/route');
app.use("/notepad", route);

const authen = require('./route/route');
app.use("/auth", authen);

const users = require('./route/route');
const middleware = require('./middleware/middleware');
app.use("/users", middleware, users);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});