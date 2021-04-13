const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./novaInstancia')();
const contadorD = require('./novaInstancia')();

contadorA.inc();
contadorA.inc();

console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);