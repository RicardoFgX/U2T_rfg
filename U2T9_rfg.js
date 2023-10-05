let terminado = false;
//Constante modelo de información
const tabla = "TRWAGMYFPDXBNJZSQVHLCKE";
let resto;
let char;

//El bucle termina una vez terminada la operación, ya sea de manera exitosa o cancelando
while (!terminado) {
    let DNI = prompt("Introduzca su DNI");
    //Si cancela el prompt se sale de la aplicación
    if (DNI === null) {
        alert("El programa se ha terminado");
        terminado = true;
    } else {
        //Opciones no validas, se ha de volver a pregutnar
        if (DNI === "" || isNaN(Number(DNI))) {
            alert("El DNI no es válido");
        } else {
            //Cálculo de la letra del DNI
            resto = DNI % 23;
            char = tabla[resto];
            alert("La letra del DNI " + DNI + " es " + char);
            terminado = true;
        }
    }
}
