let x = parseInt(Math.random() * 101);
let a = parseInt(Math.random() * 101);
let b = parseInt(Math.random() * 101);
let c = parseInt(Math.random() * 101);
let resultado = x * x * a + b * x + c;

console.log(x, a, b, c, resultado);

document.getElementById("elX").textContent = `O elemento X é: ${x}`;
document.getElementById("elA").textContent = `O elemento A é: ${a}`;
document.getElementById("elB").textContent = `O elemento B é: ${b}`;
document.getElementById("elC").textContent = `O elemento C é: ${c}`;
document.getElementById("elResultado").textContent = `O resultado da equação AX2 + BX + C: ${resultado}`;

