/**
Mi aplicación es un generador de contraseñas, en el programa se introduce tu nombre y el apellido. Para la realización de la contraseña se cogen las 3 primeras letras
del nombre, seguidamente se introduce un número aleatorio del 1 al 100 y después las dos primeras letras del apellido.
 */

let contra = "";

alert("Generador de contraseñas");

let nombre = prompt("Introduzca su nombre");
//Si cancela el prompt se sale de la aplicación
if (nombre === null) {
    alert("El programa se ha cancelado");
}
//Iteración para coger las 3 primeras letras del nombre
for (let i = 0; i < 3; i++) {
    let letra = nombre[i];
    contra = contra + letra;
}
contra = contra + Math.floor(Math.random() * 100 + 1);
let apellido = prompt("Introduzca su primer apellido");
//Si cancela el prompt se sale de la aplicación
if (apellido === null) {
    alert("El programa se ha cancelado");
}
//Iteración para coger las dos primeras letras del apellido
for (let i = 0; i < 2; i++) {
    let letra = apellido[i];
    contra = contra + letra;
}

//Alerta para mostrar la contraseña generada
alert("Su nueva contraseña es: " + contra)
