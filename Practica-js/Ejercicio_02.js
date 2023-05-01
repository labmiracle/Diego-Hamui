//Ejercicio Nº2 - Practica js
//Escribe una función recursiva sum(arr, n) que retorne la suma de los primeros n elementos del arreglo arr

function sum(arr, n) {
    if (n <= 0) {
        return 0
    } else if (typeof n != 'number') {
        return "Error tipo de datos incorrecto"
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }
}
//prueba
console.log(sum([1, 8, 5, 6, 7], 3));
console.log(sum([1, 8, 5, 6, 7], 'diego'));
console.log(sum([1, 8, 5, 6, 7], 0));