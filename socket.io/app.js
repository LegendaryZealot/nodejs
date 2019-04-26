var app = require('express')();
var express = require("express");
var server = require('http').Server(app);
var io = require('socket.io')(server);

var argv=process.argv.slice(2)
server.listen(argv[0]);

app.use(express.static(__dirname + '/staticRes'));

io.on('connection', function (socket) {
  console.log('websocket has connected')
  socket.emit('news', { hello: '欢迎链接' });
  socket.on('say', function (data) {
    io.emit('news', { hello: data.my });
  });
});