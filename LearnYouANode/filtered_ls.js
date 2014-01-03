var fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
    if(err){
        console.log(err);
    } else {
        if(process.argv[3]){
            var extension = process.argv[3].toString(),
                //pattern = '.' + extension;
                pattern = new RegExp('\\.' + extension + '$');

            list.forEach(function(i){
                if(pattern.test(i)){
                    console.log(i);
                };
            });
        } else {
            list.forEach(function(i){
                console.log(i);
            });
        };
    };
});



/*
-----------------------------------------------------------------

  var fs = require('fs')
  var regex = new RegExp('\\.' + process.argv[3] + '$')
  
  fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
      if (regex.test(file))
        console.log(file)
    })
  })

-----------------------------------------------------------------
*/
