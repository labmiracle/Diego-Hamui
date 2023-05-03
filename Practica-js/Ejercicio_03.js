/*Ejercicio Nº3 - Practica js

Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol.
Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento,
velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva el número de días que tardará la planta en medir la alturaDeseada.  
*/



function diasParaAlcanzarAltura(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {

    if (velocidadCrecimiento <= 0 || velocidadDecrecimiento <= 0 || alturaDeseada <= 0) {
        return 'Error tipo de datos: ingrese sólo números enteros positivos'

    } else if (typeof velocidadCrecimiento !== 'number' || typeof velocidadDecrecimiento !== 'number' || typeof alturaDeseada !== 'number') {
        return 'Error tipo de datos: la función sólo admite números y que sean enteros'

    } else {
        let alturaActual = 0;
        let numDias = 0;

        while (alturaActual < alturaDeseada) {

            alturaActual += velocidadCrecimiento;
            numDias++;

            if (alturaActual >= alturaDeseada) {
                break;
            }
            alturaActual -= velocidadDecrecimiento;

        }
        return numDias;

    }
}


console.log(diasParaAlcanzarAltura(1, 8, 69));