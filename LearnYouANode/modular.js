module.exports = function(path, extension, callback){
    var fs = require('fs');

    fs.readdir(path, function(err, list){
        if(err){
            callback(err, null);
        } else {
            if(extension){
                var //pattern = '.' + extension;
                    pattern = new RegExp('\\.' + extension + '$');

                list.forEach(function(i){
                    if(pattern.test(i)){
                        callback(null, i);
                    };
                });
            } else {
                list.forEach(function(i){
                    callback(null, i);
                });
            };
        };
    });
};
