const static = require('node-static');
const http = require('http');

const file = new static.Server('./www');

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(8082);
