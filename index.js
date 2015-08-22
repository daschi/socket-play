$(function() {

//set up socket.io
var app = require('express')();
//load the http module to create an http server
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

