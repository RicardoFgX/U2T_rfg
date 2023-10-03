/** 
 * Haz una página web que implemente un juego de encontrar un número aleatorio bajo las premisas que se explican a continuación:

La página calculará un número del 1 al 10. Utiliza para ello: 
Math.floor(Math.random() * 10 + 1);
Luego preguntará al usuario por el número mediante un prompt.
Si el usuario escribe algo que no es un número se indica el error y se vuelve a pedir el número.
Si el número escrito por el usuario es correcto, se indica que se acertó y finalizaremos el juego.
Si no, le dice si el número es menor o mayor y vuelve a preguntar cuál es.
Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego.
Al final, si se ha finalizado correctamente el juego se indica el número de intentos.
Se permite volver a jugar al usuario mediante un cuadro de confirmación.
*/

let jugar = true;

while(jugar){

    const numAl = (Math.random() * 10 + 1);
    let acertado = false;

    while(!acertado){
        console.log(numAl);
        let respuesta = prompt("¿Introduzca un número?")*1
        if(respuesta == null){
            jugar=false;
            acertado=true;
            alert("El juego se ha cancelado");
        } else {
            respuesta = parseInt(respuesta);
            if(!isNaN(respuesta)){
                if(respuesta === numAl){
                    jugar = false;
                    acertado = true;
                } else {
                    if(respuesta > numAl){
                        alert("El número es menor");
                    } else{
                        alert("El número es mayor");
                    }
                }
            }
        }
    }
    jugar = confirm("¿Quieres volver a jugar?");
}
