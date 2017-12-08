#!/usr/bin/env node


/**
 * Module dependencies.
 */




var app = require('../app');
var debug = require('debug')('githubissues:server');
var http = require('http');
var fs = require('fs');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

/**
 * Create HTTPS server.
 */
/*
var server = https.createServer({
  key: fs.readFileSync("./config/sslcerts/key.pem"),
  cert: fs.readFileSync("./config/sslcerts/cert.pem")
}, app);
*/
/**
 * Listen on provided port, on all network interfaces.
 */

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


// And create the websocket server
var io = require("socket.io")(server);

// This is called every time a client is conneting
// the socket is for the client that connects
io.on('connection', function (socket) {
  // When a client call for login
  socket.on("login", function(data) {

    // Save the username in the socket object
    var welcomeMessage = "Welcome" + data.msg;

    // This is sent to the one client that connected
    socket.emit("welcome", {message: welcomeMessage});
    var data = {title: "Issue two", body: "This is the issue content", link:"github.com", numberOfComments:"23", createdAt: new Date(), updatedAt: new Date(), author: "JOHAN"};
    socket.emit("issue", data);

    //LISTA MED alla issues
    //socket.emit("");
  });
  //socket.webHook
});



/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

