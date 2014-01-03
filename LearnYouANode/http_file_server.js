var http = require('http'),
    fs = require('fs');

var server = http.createServer(function(req, res){
    fs.createReadStream(process.argv[2]).pipe(res);
});

server.listen(8000, function(){
    console.log('running...');
});

/*
-----------------------------------------------------------------

  var http = require('http')
  var fs = require('fs')
  
  var server = http.createServer(function (req, res) {
    fs.createReadStream(process.argv[2]).pipe(res)
  })
  server.listen(8001)

-----------------------------------------------------------------
*/
