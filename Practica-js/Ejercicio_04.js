//Crea una función que reciba una frase como cadena y devuelva la palabra más larga:
function palabraMasLarga(str) {
    if (typeof str !== 'string') {
        return 'Error: Ingrese una cadena de texto'
    };
    const palabras = str.split(' ');
    let palabraLarga = '';

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraLarga.length) {
            palabraLarga = palabras[i];
        }
    }
    return palabraLarga;
}

console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');



//Crea una función que reciba una cadena y lo devuelva con todas las palabras con su 1º letra mayúscula
function primeraMayuscula(str) {
    if (typeof str !== 'string') {
        return 'Error: Ingrese una cadena de texto'
    };
    const palabras = str.split(' ');
    let palabrasMayusculas = [];

    for (let i = 0; i < palabras.length; i++) {
        const primera_LetraMayuscula = palabras[i][0].toUpperCase();
        const minisculas = palabras[i].slice(1);
        palabrasMayusculas.push(primera_LetraMayuscula + minisculas);
    }
    return palabrasMayusculas.join(' ');
}

console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha')