const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./api/routes/index');
const consoleLog = require('./consoleLog');

const server = express();

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

// use routes
server.use('/api', routes);

const config = {
  port: process.env.PORT || 8888,
};

server.get('/', (req, res) => res.send('Hello World!'));

server.listen(config.port, () => consoleLog(`Example app listening at http://localhost:${config.port}`));
