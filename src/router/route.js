module.exports = function (app) {
  app.all("*", function(request, response, next) {
    console.log(99);
    // response.writeHead(200, { "Content-Type": "text/plain" });
    next();
  });
  app.get('/', function (req, res) {
    res.send('Hello world1');
  });
  app.get('/customer', function(req, res){
    res.send('customer page');
  });
  app.get('/admin', function(req, res){
    res.send('admin page');
  });
  app.get("/hello/:who", function(req, res) {
    console.log(req.params);
    res.end("Hello, " + req.params.who + ".");
  });
  app.get("*", function(request, response) {
    console.log('get');
    
    response.end("404!");
  });
};