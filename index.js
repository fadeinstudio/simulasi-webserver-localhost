// Simulasi webserver bagian localhost
const http = require('http');
const port = 80;
const localhost = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Welcome to Localhost on Port: ' + port);
});
localhost.listen(port);
