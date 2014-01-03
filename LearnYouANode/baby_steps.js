var vars = process.argv,
    sum = 0,
    len = vars.length
    i = 2;


for(i; i < len; i++){
    sum = sum + parseInt(vars[i]);
    //console.log('i', i, 'sum', sum,'parseInt(vars[i])', parseInt(vars[i]));
};

console.log(sum);
