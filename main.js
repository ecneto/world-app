var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


var Universe = require('./objects/universe');
var MapZone = require('./objects/map_zone');
var Ball = require('./objects/ball');

var universe = new Universe('Alpha');
console.log('Initialized Universe ' + universe.getName());

var zones = [new MapZone("Red Zone", 0)];
zones.forEach( function(zone){
    universe.addZone(zone);
  });

zones[0].addActor(new Ball("@Soccer Ball", 3, 3, 1));
zones[0].addActor(new Ball("%Basket Ball", 7, 5, 3));
zones[0].addActor(new Ball(".Bouncy Ball", 5, 6, 1));
zones[0].addActor(new Ball("&Foot Ball", 7, 2, 1));

universe.start();


var clients = [];
var totalClients = 0;

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