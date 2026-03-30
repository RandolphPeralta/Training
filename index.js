"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scanf_1 = require("scanf");
// Lectura simple
console.log('Por favor ingresa tu nombre:');
var nombre = (0, scanf_1.default)('%s');
console.log('Por favor ingresa tu edad:');
var edad = (0, scanf_1.default)('%d');
console.log("Nombre: ".concat(nombre, ", Edad: ").concat(edad));
