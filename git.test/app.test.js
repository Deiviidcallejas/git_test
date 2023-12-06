const {
    raizCuadrada,
    esPar,
    celsiusToFahrenheit,
    maximoDeDosNumeros,
    numeroAleatorio,
} = require('./app.js');

test('La raíz cuadrada de 16 es 4', () => {
    expect(raizCuadrada(16)).toBe(4);
});

test('7 no es un número par', () => {
    expect(esPar(7)).toBe(false);
});

test('La conversión de 0 grados Celsius a Fahrenheit es 32', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
});

test('El máximo entre 15 y 9 es 15', () => {
    expect(maximoDeDosNumeros(15, 9)).toBe(15);
});

test('Generar un número aleatorio entre 5 y 20', () => {
    const randomNumber = numeroAleatorio(5, 20);
    expect(randomNumber).toBeGreaterThanOrEqual(5);
    expect(randomNumber).toBeLessThanOrEqual(20);
});
