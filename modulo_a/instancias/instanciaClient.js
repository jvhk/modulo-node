const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./novaInstancia')();
const contadorD = require('./novaInstancia')();

contadorA.inc();
contadorA.inc();

console.log(contadorA.valor, contadorB.valor); // output: 3 3

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor); // output: 3 1