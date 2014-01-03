/*
****
var fs = require('fs');
fs.createReadStream(process.argv[2]).pipe(process.stdout);
*/

// ****
// process.stdin.pipe(process.stdout);


var through = require('through'),
    tr = through(write, end);

tr.write();
tr.end();
 
//function write (buf) { console.log(this.queue(buf).toString().toUpperCase()); }
function write (buf) { 
    //var word = this.queue(buf); console.log(word); 
    console.log(console.log(this.queue(buf).toString()));
}
//function end () { this.queue(null) }
function end () { 
    //console.log(buf);
    this.queue(null);
}

process.stdin.pipe(tr).pipe(process.stdout);
