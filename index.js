"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scanf_1 = require("scanf");
// Ejemplo: Pedir un nombre (string) y una edad (number)
console.log("Ingresa tu nombre:");
var nombre = (0, scanf_1.default)('%s');
console.log("Ingresa tu edad:");
var edad = (0, scanf_1.default)('%d');
console.log("Hola ".concat(nombre, ", el pr\u00F3ximo a\u00F1o tendr\u00E1s ").concat(Number(edad) + 1, " a\u00F1os."));
