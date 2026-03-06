let nota1 = parseInt(Math.random()*101);
let nota2 = parseInt(Math.random()*101);
let nota3 = parseInt(Math.random()*101);
let nota4 = parseInt(Math.random()*101);
let mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(nota1);
console.log(nota2);
console.log(nota3);
console.log(nota4);
console.log(mediaNotas);

document.getElementById("elNota1").textContent = `nota 1: ${nota1}`;
document.getElementById("elNota2").textContent = `nota 2: ${nota2}`;
document.getElementById("elNota3").textContent = `nota 3: ${nota3}`;
document.getElementById("elNota4").textContent = `nota 4: ${nota4}`;
document.getElementById("elMediaNotas").textContent = `media notas: ${mediaNotas}`;