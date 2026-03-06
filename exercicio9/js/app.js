let numero = parseInt(Math.random() * 101);
let resultado;

console.log(numero);
console.log(resultado);


if (numero % 2 === 0) {
    resultado = numero * numero;
    document.getElementById("elNumero").textContent = `Número sorteado: ${numero} (Par)`;
    document.getElementById("elResultado").textContent = `Quadrado do número: ${resultado}`;
}
    
    else {
    resultado = numero * numero * numero;
    document.getElementById("elNumero").textContent = `Número sorteado: ${numero} (Ímpar)`;
    document.getElementById("elResultado").textContent = `Cubo do número: ${resultado}`;
}