$(function() {
//ask for username
var FADE_TIME = 150;
var TYPING_TIMER LENGTH = 400;
var COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];


//set up socket.io
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(message){
    console.log('message: ' + message)
  })
  socket.on('chat message', function(message){
    io.emit('chat message', message);
  })
});



http.listen(3000, function(){
  console.log('Listening on *:3000');
})
})

