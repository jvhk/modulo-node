const fs = require('fs');

const camniho = __dirname + '/arquivo.json';

//sincrono
const conteudo = fs.readFileSync(camniho, 'utf-8');
console.log(conteudo);


//async
fs.readFile(camniho,'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}: ${config.db.port}`);
});


const config = require('./arquivo.json');
console.log(config);

fs.readdir(__dirname,(err, arquivos) => {
    console.log('Conteúdo da pasta: ');
    console.log(arquivos);
})