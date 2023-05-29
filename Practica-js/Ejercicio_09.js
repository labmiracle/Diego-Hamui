//Ejercicio Nº9 - Practica js

function addOnlyNums(...argts) {
    let total = 0;
    let encontrarNumeros = false;

    for (let i = 0; i < argts.length; i++) {
        if (typeof argts[i] === 'number') {
            total += argts[i];
            encontrarNumeros = true;

        }
    }

    if (!encontrarNumeros) {
        return 'No se registro ningun número';
    }
    return total;

}
console.assert(addOnlyNums(4, 6, 93) === 103);
console.assert(addOnlyNums(38, 'HOLA', 2, 'MUNDO', -7) === 33);
console.assert(addOnlyNums('hola') == false);