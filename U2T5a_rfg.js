let num_alum = prompt("¿Introduzca el número de alumno que hay en el módulo?");
let sumNota = 0;

//Bucle que itera hasta introducir la nota de todos los alumnos
for(let i=1; i<=num_alum;i++){
    sumNota = prompt("Introduzca la nota final del alumno " + i)*1 + sumNota;
}
let media = sumNota/num_alum;
alert("La nota media de todo el módulo es: " + media);

//Nombre del propietario: Ricardo Fernandez Guzman