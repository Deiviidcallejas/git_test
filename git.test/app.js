function raizCuadrada(numero) {
  return Math.sqrt(numero);
}

console.log(raizCuadrada(9)); // Expected output: 3
function esPar(numero) {
  return numero % 2 === 0;
}

console.log(esPar(10)); // Expected output: true
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(25)); // Expected output: 77
function maximoDeDosNumeros(num1, num2) {
  return Math.max(num1, num2);
}

console.log(maximoDeDosNumeros(8, 12)); // Expected output: 12
function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(numeroAleatorio(1, 10)); // Expected output: A random number between 1 and 10

  
module.exports = {
    raizCuadrada,
    esPar,
    maximoDeDosNumeros,
    celsiusToFahrenheit,
    numeroAleatorio,
};