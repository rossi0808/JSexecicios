let horasTrabalhadas = parseInt(Math.random() * 151);
let dependentes = parseInt(Math.random() * 6);
let salario = (horasTrabalhadas * 168) + (dependentes * 80);
let inss = salario * 0.085;
let ir = salario * 0.05
let salarioLiquido = (salario - inss) - ir

console.log(horasTrabalhadas)
console.log(dependentes)
console.log(salario)
console.log(inss)
console.log(ir)
console.log(salarioLiquido)


document.getElementById("elHorasTrabalhadas").textContent = `horas trabalhadas: ${horasTrabalhadas}`;
document.getElementById("elDependentes").textContent = `dependentes dos funcionarios: ${dependentes}`;
document.getElementById("elSalario").textContent = `salario: ${salario}`;
document.getElementById("elInss").textContent = `inss: ${inss}`;
document.getElementById("elIr").textContent = `Ir: ${ir}`;
document.getElementById("elSalarioLiquido").textContent = `Salario Liquido: ${salarioLiquido}`;
