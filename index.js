"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scanf_1 = require("scanf");
console.log("Introduce un número y un texto (ej. 10 hola):");
// Lee un entero (%d) y una cadena (%s)
var result = (0, scanf_1.sscanf)('%d', '%s');
console.log(result); // Devuelve un objeto: { '0': 10, '1': 'hola' }
