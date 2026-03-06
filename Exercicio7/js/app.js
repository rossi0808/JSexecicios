let peso = parseInt(Math.random() * 151);
let emagrecer = peso - (peso * 0.2)
let engordar = peso + (peso * 0.2)

console.log(peso);
console.log(emagrecer);
console.log(engordar);

document.getElementById("elPeso").textContent = `peso: ${peso}`;
document.getElementById("elEmagrecer").textContent = `emagrecer: ${emagrecer}`;
document.getElementById("elEngordar").textContent = `engordar: ${engordar}`;

