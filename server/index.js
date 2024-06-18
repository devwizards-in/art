// setting up an Express.js server

require('dotenv').config();               // imports and configures the dotenv module, allowing the application to use environment variables stored in a .env file
const express = require('express');       // imports the Express.js framework, web application framework for Node.js
const chalk = require('chalk');           // Chalk is a library used for styling terminal output with colors and formatting
const cors = require('cors');             // f-end varun data gayala vaparlay
const helmet = require('helmet');         // collection of middleware functions to help secure Express apps by setting various HTTP headers (application la secured thevato)

const keys = require('./config/keys');    // This line imports the configuration keys from a file named keys.js located in the config directory.
const routes = require('./routes');       // imports the routes module, which contains the various route handlers for the API endpoints
const socket = require('./socket');       // imports the socket module, which likely sets up WebSocket functionality for real-time communication between the client and the server
const setupDB = require('./utils/db');    // imports a function named setupDB from the utils directory, which is likely responsible for setting up the database connection

const { port } = keys;                    //  extracts the port property from the keys object, which presumably contains configuration settings.
const app = express();                    //  creates an instance of the Express application

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true
  })
);
app.use(cors());
setupDB();
require('./config/passport')(app);
app.use(routes);

const server = app.listen(port, () => {
  console.log(
    `${chalk.green('✓')} ${chalk.blue(
      `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )}`
  );
});

socket(server);
