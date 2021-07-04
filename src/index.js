const express = require('express')
const http = require('http')
var app = express();
var routes = require('./router/index');



app.use(routes)

// app.use(express.static(__dirname+'/public'))

http.createServer(app).listen(3000, function(){
  console.log('server start');
})