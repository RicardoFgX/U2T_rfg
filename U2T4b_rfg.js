//Prompt que pregunta por la densidad
let densidad = prompt("¿Qué densisdad tiene el material elegido (g/cm3)?");
const dflota = 1;

//Si 'densidad' supera a 'dflota' muestra una alerta, en caso contrario muestra otra alerta
if(densidad < dflota){
    alert("Flota en el agua");
} else {
    alert("Se hunde en el agua");
}

//Nombre del propietario: Ricardo Fernández Guzmán