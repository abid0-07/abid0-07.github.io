const path = require('path');
const express = require('express');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const routes = require('./routes/routes');
const db = require('./data/database');

const app = express();

// Set up live-reload middleware
app.use(connectLivereload());

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.use(routes);

// Error-handling middleware
app.use(function (error, req, res, next) {
  console.log(error);
  res.status(500).send('something went wrong');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Set up livereload to watch for changes in the 'public' directory
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'), path.join(__dirname, 'views'));

// Notify the browser about changes after server connection
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});
