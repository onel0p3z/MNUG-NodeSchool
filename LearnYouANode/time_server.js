var net = require('net');

var server = net.createServer(function(socket){
    var d = new Date(),
        dte = d.toLocaleDateString().split('/'),
        _date = '';

    //dte = dte[2] + '-' + dte[0] + '-' + (dte[1] >= 10? dte[1]:'0'+ dte[1]);
    dte = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + (d.getDate() >= 10? d.getDate():'0'+d.getDate().toString());
        
    //_date = d.toISOString().slice(0,d.toISOString().indexOf('T')) + ' ' + d.toTimeString().slice(0,5);
    _date = dte + ' ' + d.toTimeString().slice(0,5);
    socket.write(_date);
    socket.end('\n');
});

server.listen(8000);

/*
-----------------------------------------------------------------

  var net = require('net')
  
  function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
  }
  
  function now () {
    var d = new Date()
    return d.getFullYear() + '-'
      + zeroFill(d.getMonth() + 1) + '-'
      + zeroFill(d.getDate()) + ' '
      + zeroFill(d.getHours()) + ':'
      + zeroFill(d.getMinutes())
  }
  
  var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
  })
  server.listen(8001)
  

-----------------------------------------------------------------
*/
