var Turn = require('node-turn');
var server = new Turn({
  // set options
  authMech: 'long-term',
  listeningPort:443,
  debugLevel:'ALL',
  credentials: {
    username: "password"
  }
});
server.start();