let numero1 = parseInt(Math.random() * 101);
let numero2 = parseInt(Math.random() * 101);
let soma = numero1 + numero2;
let resultado;

if (soma <= 100){
    resultado = soma * 3;
    document.getElementById('resultado').textContent = `Soma = ${soma}. Menor ou igual a 100, multiplica por 3. Resultado: ${resultado}`;
}

else{
    resultado = soma * 3
    document.getElementById('resultado').textContent = `Soma = ${soma}. Maior que 100, multiplica por 5. Resultado: ${resultado}`;
}

document.getElementById('numero1').textContent = `Numero 1: ${numero1}`;
document.getElementById('numero2').textContent = `Numero 2: ${numero2}`;