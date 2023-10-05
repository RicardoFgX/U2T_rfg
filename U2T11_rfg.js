/**
 * Inventa un ejercicio con los conocimientos de JavaScript que hemos dado hasta ahora en el curso. 

¿Qué puedes usar?

Sentencias de control (bucles y condicionales)
Operadores básicos
Alert y prompt
parseInt, ParseFloat y isNaN
break y continue
Tratar cadenas como arrays.

Todo lo demás, está prohibido.

El enunciado de la tarea debe estar como comentario del código js.
 */

let contra = "";

alert("Generador de contraseñas");
let nombre = prompt("Introduzca su nombre");
if (nombre === null) {
    alert("El programa se ha cancelado");
}
for (let i = 0; i < 3; i++) {
    let letra = nombre[i];
    contra = contra + letra;
}
contra = contra + Math.floor(Math.random() * 100 + 1);
let apellido = prompt("Introduzca su primer apellido");
if (apellido === null) {
    alert("El programa se ha cancelado");
}
for (let i = 0; i < 2; i++) {
    let letra = apellido[i];
    contra = contra + letra;
}

alert("Su nueva contraseña es: " + contra)
