var http = require('http'),
    map = require('through2-map');

var server = http.createServer(function(req, res){
    if(req.method == 'POST'){
        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res);
    };
});

server.listen(8000);

/*
-----------------------------------------------------------------

  var http = require('http')
  var map = require('through2-map')
  
  var server = http.createServer(function (req, res) {
    if (req.method != 'POST')
      return res.end('send me a POST\n')
  
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  })
  
  server.listen(8001)

-----------------------------------------------------------------
*/
