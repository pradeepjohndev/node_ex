const express = require('express');
const app = express();
app.use(express.json());

const logger = require('./middleware/middleware');
app.use(logger);

const main_routes = require('./routes/main_route');
app.use("/notes", main_routes);

app.listen(3000, () => {
    console.log('server is running on port 3000');
});