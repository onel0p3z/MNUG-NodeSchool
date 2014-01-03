var http = require('http');

http.get(process.argv[2], function(res){
    res.setEncoding('utf8');
    res.on('data', function(data){
        console.log(data.toString());
    });
});

/*
-----------------------------------------------------------------

  var http = require('http')
  
  http.get(process.argv[2], function (request) {
    request.setEncoding('utf8')
    request.on('data', console.log)
    request.on('error', console.error)
  })

-----------------------------------------------------------------
*/
