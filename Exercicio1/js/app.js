let numeroSorteado = parseInt(Math.random()*101);
let sucessor = numeroSorteado + 1;
let antecessor = numeroSorteado - 1;
let dobro = numeroSorteado * 2;
let metade = numeroSorteado / 2;
 

console.log(numeroSorteado);
console.log(numeroSorteado + 1);
console.log(numeroSorteado - 1);
console.log(numeroSorteado * 2);
console.log(numeroSorteado / 2);

document.getElementById("elNumeroSorteado").textContent = `numero sorteado: ${numeroSorteado}`;
document.getElementById("elSucessor").textContent = `sucessor: ${sucessor}`;
document.getElementById("elAntecessor").textContent = `antecessor: ${antecessor}`;
document.getElementById("elDobro").textContent = `dobro: ${dobro}`;
document.getElementById("elMetade").textContent = `metade: ${metade}`;

