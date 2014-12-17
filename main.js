var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var Universe = require('./models/universe');

var universe = new Universe('Alpha');
console.log('Initialized Universe ' + universe.getName());

var clients = [];
var totalClients = 0;

setInterval(function(){
  var clientString = 'clients: ';
  clients.forEach(function(c){
    clientString += c.username;
  });
  console.log(clientString);
}, 1000);

io.on('connection', function(client){
  console.log('Client Connected.');
  client.id = ++totalClients;
  client.username = 'User ' + client.id;
  clients.push(client)
  client.emit('connected', {server: universe.getName()});
})

app.get('/', function(request, response){
  response.locals = {universe: universe.name};
  response.render('index.ejs');
});

server.listen(3000);
console.log("Listening on port 3000");