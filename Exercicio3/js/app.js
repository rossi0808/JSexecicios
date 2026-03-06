let celcius = parseInt(Math.random()*101);
let fahrenheit = parseInt(celcius * (9/5) + 32);

console.log(celcius);
console.log(fahrenheit);

document.getElementById("elCelcius").textContent = `celcius: ${celcius}`;
document.getElementById("elFahrenheit").textContent = `fahrenheit: ${fahrenheit}`;


