import scanf from 'scanf';

// Ejemplo: Pedir un nombre (string) y una edad (number)
console.log("Ingresa tu nombre:");
const nombre = scanf('%s');

console.log("Ingresa tu edad:");
const edad = scanf('%d');

console.log(`Hola ${nombre}, el próximo año tendrás ${Number(edad) + 1} años.`);