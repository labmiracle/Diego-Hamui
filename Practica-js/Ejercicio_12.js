//Ejercicio Nº12 - Practica js

function adivinarNumero(nivel) {
    let level;
    switch (nivel) {
        case 'inicial':
            level = 10;
            break;
        case 'intermedio':
            level = 50;
            break;
        case 'profesional':
            level = 100;
            break;
        default:
            console.log('Nivel invalido. Selecciona entre "inicial", "intermedio" o "profesional" .');
            return;
    }

    const numeroAleatorio = Math.floor(Math.random() * level + 1);
    let intentos = 0;
    console.log(`BIENVENIDO al juego de Adivinar el número (${nivel})`);

    while (true) {
        const numeroIngresado = parseInt(prompt(`Adivina el número (entre el 1 y el ${level}):`));

        if (!isNaN(numeroIngresado) && numeroIngresado >= 1 && numeroIngresado <= level) {
            intentos++;

            if (numeroIngresado < numeroAleatorio) {
                console.log('El número es mayor.');

            } else if (numeroIngresado > numeroAleatorio) {
                console.log('El número es menor.');

            } else {
                console.log(`¡FELICITACIONES! Adivinaste el número en ${intentos} intentos. ¡Fin del juego!`);
                break;
            }

        } else {
            console.log(`Error: Ingresa un número entero válido y que sea del 1 al ${level}`);
        }
    }

}
console.log('BIENVENIDO al juego de Adivinar el número!');
const nivel = prompt('Selecciona entre "inicial", "intermedio" o "profesional".');
adivinarNumero(nivel);