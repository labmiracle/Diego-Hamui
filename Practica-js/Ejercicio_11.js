//Ejercicio Nº10 - Practica js

function onlyUniques(...argts) {
    return [...new Set(argts)];
}
console.assert(onlyUniques(1, 2, 3, 2, 1, 4, 8, 5, 6, 8).length === 0);