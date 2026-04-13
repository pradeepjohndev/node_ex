const express = require('express');
const app = express();

app.use(express.json());

const logger = require('./middleware/middleware');
app.use(logger);

const route = require('./route/route');
app.use("/notepad", route);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});