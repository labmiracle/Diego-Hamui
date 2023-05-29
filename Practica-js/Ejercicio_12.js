//Ejercicio Nº12 - Practica js

function adivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 10);
    let intentos = 0;
    console.log('BIENVENIDO al juego de Adivinar el número!');

    while (true) {

        const numeroIngresado = parseInt(prompt('Adivina el número (entre el 1 y el 10):'));
        if (!isNaN(numeroIngresado) && numeroIngresado >= 1 && numeroIngresado <= 10) {
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
            prompt('Error: Ingresa un número entero válido y que sea del 1 al 10.');
        }
    }

}
console.log('BIENVENIDO al juego de Adivinar el número!');
adivinarNumero();