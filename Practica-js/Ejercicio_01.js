//Ejercicio Nº1 - Practica js

/*En el juego de golf, cada hoyo tiene un par, cuyo significado es el número promedio degolpes que se espera que haga un golfista para meter la bola en un hoyo y así completar
el juego. Dependiendo de qué tan por encima o por debajo del par estén tus golpes, existe
un apodo diferente.*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];

function golfScore(par, strokes) {
    if (par <= 0 || strokes <= 0 || par == "" || strokes == "" || (typeof par != "number") || (typeof strokes != "number")) {
        return " Los numero ingresados son incorrectos, por favor reintente nuevamente."

    } else if (strokes === 1) {
        return names[0];

    } else if (strokes <= (par - 2)) {
        return names[1];

    } else if (strokes === (par - 1)) {
        return names[2];

    } else if (strokes === par) {
        return names[3];

    } else if (strokes === (par + 1)) {
        return names[4];

    } else if (strokes === (par + 2)) {
        return names[5];

    } else if (strokes >= (par + 3)) {
        return names[6];
    }

}
console.log(golfScore(5, 4));

golfScore(5, 4);