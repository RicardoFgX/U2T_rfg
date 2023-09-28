
let diaSemana = prompt("Ingresa un día de la semana:");

//Array con todos los días
let diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

//Posición que ocupa el día introducido
let orden = diasSemana.indexOf(diaSemana.toLowerCase());

//Si no es una respuesta valida se da un mensaje de error
if (orden !== -1) {
    
    //Posición que ocuparía el siguiente día en el array
    let ordenDiaSiguiente = (orden + 1) % 7;

    let diaSiguiente = diasSemana[ordenDiaSiguiente];

    console.log("El día siguiente es " + diaSiguiente);
} else {
    console.log("Día de la semana no válido. Por favor, ingresa un día válido.");
}

//Nombre del propietario: Ricardo Fernandez Guzman
