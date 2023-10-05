const MODELO = "MeGustaProgramar"
let validUsuario = false;
let validContra = false;
let contrasena = "";
let usuario;

//Hasta que no se introduzca un usuario válido no deja pasar a introducir la contraseña
while (!validUsuario) {
    usuario = prompt("Introduzca el nombre:");
    //Si cancela el prompt se cancela la aplicación y se sale de la aplicación
    if (usuario === null) {
        alert("La aplicación se ha terminado");
        validUsuario=true;
    } else {
        if (usuario != "") {
            validUsuario = true;
        } else {
            alert("Introduzca un usuario válido");
        }
    }
}

//Hasta que no se introduzca una contraseña válida no deja pasar a la contraseña
while (!validContra && validUsuario) {
    contrasena = prompt("Introduzca la contraseña");
    //Si cancela el prompt se cancela la aplicación y se sale de la aplicación
    if (usuario === null) {
        alert("La aplicación se ha terminado");
        break;
    } else {
        if (contrasena === MODELO) {
            validContra = true;
        } else {
            alert("La contraseña introducida no es correcta")
        }
    }
}
//Si se ha introducido bien el usuario y la contraseña se da un mensaje de confirmación
if (validContra && validUsuario) {
    alert("Se ha almacenado correctamente la información");
}



