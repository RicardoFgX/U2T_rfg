/**
 * Queremos realizar una aplicación web que pida al usuario un nombre y una contraseña. 
 * Pediremos ambos datos con cuadros de entrada de texto de tipo prompt (aunque no sea el mejor método, 
 * pero de momento no podemos utilizar otro sistema).

Suponemos que el usuario está introduciendo esta información para darse de alta en algún servicio. 
La contraseña será visible (no es lo ideal, lógicamente, pero estamos aún empezando a trabajar con JavaScript).

El nombre de usuario no puede estar vacío, en ese caso, indicaremos el error y pediremos de nuevo el nombre.
La contraseña será : "MeGustaProgramar". Respetando las mayúsculas y minúsculas. 
Si la contraseña no es correcta, pediremos que la introduzca de nuevo. Cuando lo cumpla, indicaremos con un mensaje que se ha almacenado correctamente la información.
Ante cualquier cancelación en los cuadros, la aplicación termina y lo indicaremos con un mensaje de alerta.
 */

const PASS = "MeGustaProgramar"
let validUser = false;
let validPass = false;
let contrasena = "";
let usuario;

while (!validUser) {
    usuario = prompt("Introduzca el nombre:");
    if (usuario === null) {
        alert("La aplicación se ha terminado");
        break;
    } else {
        if (usuario != "") {
            validUser = true;
        } else {
            alert("Introduzca un usuario válido");
        }
    }
}

while (!validPass && validUser) {
    contrasena = prompt("Introduzca la contraseña");
    if (usuario === null) {
        alert("La aplicación se ha terminado");
        break;
    } else {
        if (contrasena === PASS) {
            validPass = true;
        } else {
            alert("La contraseña introducida no es correcta")
        }
    }
}
if (validPass && validUser) {
    alert("Se ha almacenado correctamente la información");
}



