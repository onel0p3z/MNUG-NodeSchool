var fs = require('fs');

fs.readFile(process.argv[2].toString(), function(err, data){
    if(!err){
        console.log(data.toString().split('\n').length);
    };
});

/*
 * 
  var fs = require('fs')
  var file = process.argv[2]
  
  fs.readFile(file, function (err, contents) {
    var lines = contents.toString().split('\n').length
    console.log(lines)
  })
*/
