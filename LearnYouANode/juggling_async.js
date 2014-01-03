var http = require('http'),
    str = '';

http.get(process.argv[2], function(res){
    res.on('data', function(data){
        str += data.toString();
    });

    res.on('end', function(){
        console.log(str);   
        str = '';

        http.get(process.argv[3], function(res){
            res.on('data', function(data){
                str += data.toString();
            });

            res.on('end', function(){
                console.log(str);
                str = '';

                http.get(process.argv[4], function(res){
                    res.on('data', function(data){
                        str += data.toString();
                    });

                    res.on('end', function(){
                        console.log(str);
                    });
                });
            });
        });
    });
});

/*
-----------------------------------------------------------------

  var http = require('http')
  var bl = require('bl')
  var results = []
  var count = 0
  
  function printResults () {
    for (var i = 0; i < 3; i++)
      console.log(results[i])
  }
  
  function httpGet (index) {
    http.get(process.argv[2 + index], function (request) {
      request.pipe(bl(function (err, data) {
        if (err)
          return console.error(data)
  
        results[index] = data.toString()
        count++
  
        if (count == 3) // yay! we are the last one!
          printResults()
      }))
    })
  }
  
  for (var i = 0; i < 3; i++)
    httpGet(i)
  

-----------------------------------------------------------------
*/
