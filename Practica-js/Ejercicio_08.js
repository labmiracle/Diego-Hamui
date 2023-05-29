//Ejercicio Nº8 - Practica js

function sum(...argts) {
    let total = 0;
    for (numero of argts) {
        if (typeof numero != 'number') {
            return 'Ingrese sólo números';
        } else {
            total += numero;
        }
    }
    return total;
}

console.assert(sum(2, 4, 5, -8) === 3);