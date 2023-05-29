//Ejercicio Nº10 - Practica js

function combineTwoArrays(array_1, array_2) {
    return [...array_1, ...array_2];
}
console.assert(combineTwoArrays([1, 'hola', 'como'], [2, 3, 'estas']).length === 0);