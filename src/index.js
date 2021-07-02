const express = require('express')
var app = express();
var routes = require('./router/route')(app);

app.use(function(request, response, next) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("404 error!\n");
  console.log(request);
  console.log(response);
  console.log("In comes a " + request.method + " to " + request.url);
  // next();
});

// app.use(function(request, response, next) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end("Hello world2!\n");
//   next()
// });

let server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});