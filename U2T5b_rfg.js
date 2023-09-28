let acertadas = prompt("¿Cuántas preguntas ha acertado?")*1;
let falladas = prompt("¿Cuántas preguntas ha fallado?")*1;
let noContestadas = prompt("¿Cuántas preguntas no ha contestado?")*1;

if(!isNaN(acertadas) && !isNaN(falladas) && !isNaN(noContestadas)){
    //Suma total de preguntas
let total = acertadas + falladas + noContestadas;

let notaFinal = (10/total)*(acertadas-falladas);

alert("La nota final del alumno es: " + notaFinal);
}


//Nombre del propietario: Ricardo Fernandez Guzman