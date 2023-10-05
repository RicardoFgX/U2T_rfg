/**
 * La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los ingredientes para cada tipo de pizza aparecen a continuación.
      

        Ingredientes vegetarianos: Pimiento y Tofu.
        Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
        Realizar una aplicación web que pregunte al usuario:
        Si quiere una pizza vegetariana o no, y en función de su respuesta le muestre un menú con los ingredientes disponibles para que elija.
        Si la respuesta NO es SI o NO, debe preguntar de nuevo.
        Si el ingrediente elegido no es válido, debe pedir de nuevo introducir el ingrediente.
        Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están en todas la pizzas. 
        Al final se debe mostrar por mensaje tipo alert si la pizza elegida es vegetariana o no y todos los ingredientes que lleva.
        Si en algún momento de la aplicación se pulsa cancelar, la aplicación termina. 
        Por simplicidad, suponemos que el usuario escribe correctamente las mayúsculas y minúsculas.

 */
let pizzaTerminada = false;

while (!pizzaTerminada) {
    let respuesta = prompt("¿Quiere una pizza vegetariana?[SI/NO]");

    if (respuesta === null) {
        alert("Has cancelado la orden. La aplicación ha terminado.");
        pizzaTerminada = true;
        break;

    } else if (respuesta === "SI") {
        // Si es una pizza vegetariana, muestra los ingredientes disponibles a este tipo de pizza
        let ingredientes = prompt("Elige un ingrediente para tu pizza vegetariana: pimiento o tofu");

        if (ingredientes === null) {
            alert("Has cancelado la orden. La aplicación ha terminado.");
            pizzaTerminada=true;
        } else if (ingredientes === "pimiento" || ingredientes === "tofu") {
            // Si el ingrediente es válido, muestra la información de la pizza
            alert("Has elegido una pizza vegetariana con mozzarella, tomate y " + ingredientes);
            pizzaTerminada=true;
        } else {
            // Si el ingrediente no es válido, pide al usuario que lo introduzca de nuevo
            alert("Ingrediente no válido.");
        }
    } else if (respuesta === "NO") {
        // Si es una pizza no vegetariana, muestra los ingredientes disponibles
        let ingredientes = prompt("Elige un ingrediente para tu pizza no vegetariana: pepperoni, jamón o salmón");

        if (ingredientes === null) {
            alert("Has cancelado la orden. La aplicación ha terminado.");
            pizzaTerminada=true;
        } else if (ingredientes === "pepperoni" || ingredientes === "jamón") {
            // Si el ingrediente es válido, muestra la información de la pizza
            alert("Has elegido una pizza no vegetariana con mozzarella, tomate y " + ingredientes);
            pizzaTerminada=true;
        } else {
            // Si el ingrediente no es válido, pide al usuario que lo introduzca de nuevo
            alert("Ingrediente no válido. Por favor, elige Pepperoni, Jamón o Salmón.");
        }
    } else {
        // Si la respuesta no es válida, pide al usuario que lo introduzca de nuevo
        alert("Respuesta no válida.");
    }
}




