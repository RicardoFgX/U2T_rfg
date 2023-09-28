
let respuesta = prompt("Esta seguro de que quiere hacer esto?");

//Si se ha escrito algo en el mensaje del prompt carga un mensaje, en caso de cancelar el cuadro prompt cargará otro.
if (respuesta != null) {
    alert("Ha respondido " + respuesta);
} else {
    alert("Ha reusado a contestar")
}

//Nombre del propietario: Ricardo Fernández Guzmán