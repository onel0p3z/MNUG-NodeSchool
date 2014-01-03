var myModule = require('./modular');

myModule(process.argv[2], process.argv[3], function(err, data){
    if(!err){
        console.log(data);
    } else {
        console.log(err);
    };
});

/*
-----------------------------------------------------------------

solution.js:

  var filterFn = require('./solution_filter.js')
  var dir = process.argv[2]
  var filterStr = process.argv[3]
  
  filterFn(dir, filterStr, function (err, list) {
    if (err)
      return console.error('There was an error:', err)
  
    list.forEach(function (file) {
      console.log(file)
    })
  })

-----------------------------------------------------------------

solution_filter.js:

  module.exports = function (dir, filter, callback) {
    var fs = require('fs')
    var regex = new RegExp('\\.' + filter + '$')
  
    fs.readdir(dir, function (err, list) {
      if (err)
        return callback(err)
  
      list = list.filter(function (file) {
        return regex.test(file)
      })
  
      callback(null, list)
    })
  }
  

-----------------------------------------------------------------
*/
