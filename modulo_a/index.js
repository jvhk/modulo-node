const http = require('http');

http.createServer((req, res) => {
    res.write('Bom dia');
    res.end();
}).listen(3001);

console.log('after bomdia');

const exportedVar = require('./exportar');
console.log(exportedVar);