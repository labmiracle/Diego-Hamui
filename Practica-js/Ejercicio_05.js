//Ejercicio Nº5 - Practica js
//Crea una función que reciba una cadena y la devuelva en camelCase

function camelize(str) {
    if (typeof str !== 'string') {
        return 'Error: Ingrese una cadena de texto'
    };

    const palabras = str.toLowerCase().split(/[\s_\-]+/);

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1)
    }
    return palabras.join('');
}

console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal')