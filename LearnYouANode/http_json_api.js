var http = require('http'),
    url = require('url');

var server = http.createServer(function(req, res){
    var qs = url.parse(req.url, true);

    if(qs.pathname == '/api/parsetime'){
        if(!qs.query.iso){
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({'error': 'missing iso querystring', 'qs': qs}));
        };
        var tmp = new Date(qs.query.iso),
            _time = {  
                'hour': tmp.getHours(),
                'minute': tmp.getMinutes(),
                'second': tmp.getSeconds()
            };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(_time));

        return res.end();
    } else if(qs.pathname == '/api/unixtime'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // I know ... I'm sorry for what's coming ...
        res.write(JSON.stringify({ 
            'unixtime': parseInt((new Date(qs.query.iso)).getTime().toString().slice(0, -3) + '000') 
        }));

        return res.end();
    } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ 'error': 'PATH must be /api/parsetime or /api/unixtime' }));
    };
});

server.listen(8000, function(){
    console.log('running');
});



/*
 *
-----------------------------------------------------------------

  var http = require('http')
  var url = require('url')
  
  function parsetime (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }
  
  function unixtime (time) {
    var ts = Math.floor(time.getTime() / 1000) * 1000
    return { unixtime : ts }
  }
  
  var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result
  
    if (/^\/api\/parsetime/.test(req.url))
      result = parsetime(time, res)
    else if (/^\/api\/unixtime/.test(req.url))
      result = unixtime(time, res)
  
    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
    } else {
      res.writeHead(404)
      res.end()
    }
  })
  server.listen(8001)

-----------------------------------------------------------------

 *
 */
