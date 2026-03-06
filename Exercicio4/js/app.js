let salario = 5000;
let comissao = (parseInt(Math.random()*301)*35);
let total = comissao + salario;

console.log(salario);
console.log(comissao);
console.log(total);

document.getElementById("elSalario").textContent = `salario: ${salario}`;
document.getElementById("elComissao").textContent = `comissao: ${comissao}`;
document.getElementById("elTotal").textContent = `total: ${total}`;

