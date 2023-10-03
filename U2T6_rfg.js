
//Variable para controlar el juego y sus repeticiones al acabar uno
let jugar = true;
//Contador de intentos
let intentos = 0;
let numeroAleatorio = Math.floor(Math.random() * 10 + 1);
//Variable para controlar en una misma partida si se ha acertado el número
let acertado = false;

//Escritura por consola para realizar las pruebas
// console.log(numeroAleatorio);

//Solo hay dos formas de dejar de jugar, cancelando en cualquier momento algún prompt o cuando acabes una partida si cancelas
while (jugar) {
    //Mientras no se acierte el número no se termina la partida
    while (!acertado) {
        let numero = prompt("Adivina el número del 1 al 10:");
        //Si se cierra el cuadro prompt, se acaba el bucle
        if (numero === null) {
            alert("Juego cancelado.");
            break;
        }

        numero = parseInt(numero);
        //Si no es un número hay que pedirle que introduzca uno, este tipo de fallo no lo he contado como intento
        if (isNaN(numero)) {
            alert("Por favor, ingresa un número válido del 1 al 10.");
        } else {
            intentos++;

            if (numero === numeroAleatorio) {
                acertado = true;
                alert("Correcto. Adivinaste el número en " + intentos + " intentos.");    
            } else if (numero < numeroAleatorio) {
                alert("El número es mayor");
            } else {
                alert("El número es menor");
            }
        }
    }
    //Condicional para volver a jugar, en caso afirmativo, se reinician los intentos, la variable "acertado" y se da otro valor a "numeroAleatorio"
    if (confirm("¿Quieres jugar de nuevo?")) {
        intentos = 0;
        acertado = false;
        numeroAleatorio = Math.floor(Math.random() * 10 + 1);
    } else {
        jugar=false;
    }
}

//Nombre del propietario: Ricardo Fernández Guzmán


