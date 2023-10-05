/**
 * Crea una aplicación web para que dado el número del DNI, obtenga la letra asociada.

Se deben tener en cuenta los siguientes aspectos:

Por simplicidad y hasta que avancemos en los conceptos de JavaScript, supondremos que mientras que no quede vacío, el número de DNI introducido es válido. 
Dado el número, el algoritmo para calcular la letra del NIF es:
        - Calcular el resto de dividir el número del DNI por 23.

         - La letra del NIF corresponde al carácter obtenido de la cadena “TRWAGMYFPDXBNJZSQVHLCKE” en función del valor del resto (ver Tabla 1).

El nº del DNI se pide mediante un prompt y la letra se muestra con una ventana tipo alert.
Recuerda que en una cadena de caracteres, podemos obtener el caracter que se encuentra en una determinada posición, utilizando los [] (pe. en nombre="Pedro", nombre[0]="P", nombre[4]="o").
 */

let terminado = false;
let tabla = "TRWAGMYFPDXBNJZSQVHLCKE";
let resto;
let char;

while (!terminado) {
    let DNI = prompt("Introduzca su DNI");
    if (DNI === null) {
        alert("El programa se ha terminado");
        terminado = true;
    } else {
        if (DNI === "" || isNaN(Number(DNI))) {
            alert("El DNI no es válido");
        } else {
            resto = DNI % 23;
            char = tabla[resto];
            alert("La letra del DNI " + DNI + " es " + char);
            terminado = true;
        }
    }
}
