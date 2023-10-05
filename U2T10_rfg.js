/**
 * Crea una aplicación web que simule las tiradas de unos dados.

Se deben tener en cuenta los siguientes aspectos:

Lo primero que debe preguntar es cuántos dados desea tirar y obtener el resultado mediante una ventana tipo prompt.
La respuesta debe ser un número comprendido entre el 1 y el 4. En cualquier otro caso, debe volver a pedirle que introduzca un número válido.
Si le da a cancelar, el programa termina.
Para el número de dados elegido, se debe generar el número aleatorio correspondiente (recuerda que es un dado).
Todos los valores de las tiradas se deben mostrar en un mismo alert, indicado de la siguiente forma:
      Dado 1: 5   -  Dado 2: 6                 y así para todos los dados.

Finalmente tiene que volver a pedirle que introduzca el número de dados que quiere tirar y todo comienza de nuevo.
 */

let num = false;

while (!num) {
    let mensajeFinal = "";
    numDados = prompt("¿Cuantos dados quieres tirar? [Max 4]");
    if (numDados === null) {
        alert("La aplicación se ha cancelado");
        break;
    } else {
        if (numDados>=1 && numDados<=4){
        for(let i=1; i<=numDados;i++){
            let numAle = Math.floor(Math.random() * 6 + 1);
            mensajeFinal = mensajeFinal + " Dado " + i + ": " + numAle + "\n";
        }
    } else {
        alert("Número no valido. Ingreselo de nuevo");
    }
}
    alert(mensajeFinal);
}