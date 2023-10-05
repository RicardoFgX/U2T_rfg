//La única forma de salir de la aplicación es cancelando el prompt
while (true) {
    let mensajeFinal = "";
    numDados = prompt("¿Cuantos dados quieres tirar? [Max 4]");
    //Si cancela el prompt se sale de la aplicación
    if (numDados === null) {
        alert("La aplicación se ha cancelado");
        break;
    } else {
        //Rango de números válidos
        if (numDados>=1 && numDados<=4){
        for(let i=1; i<=numDados;i++){
            //Iteración que muestra todos los dados
            mensajeFinal = mensajeFinal + " Dado " + i + ": " + Math.floor(Math.random() * 6 + 1) + "\n";
        }
    } else {
        alert("Número no valido. Ingreselo de nuevo");
    }
}
    alert(mensajeFinal);
}