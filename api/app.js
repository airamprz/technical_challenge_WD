const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('./config/cors.config');
app.use(cors);

const routes = require('./config/routes.config');
app.use('/', routes);

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));