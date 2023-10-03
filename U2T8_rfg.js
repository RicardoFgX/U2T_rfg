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

let ingVeg = ["pimiento", "tofu"];
let ingNVeg = ["peperoni", "jamón", "salmón"];
let listaIng = "\n";
let validIng = false;
let ingCorrecto;


let respuesta = prompt("¿Quiere una pizza vegetariana?[SI/NO]");

if (respuesta === "si") {
    for (let i = 0; i < ingVeg.length; i++) {
        listaIng = listaIng + "->" + ingVeg[i] + "\n";
    }
    console.log(listaIng);

    while (!validIng) {
        let ingrediente = prompt("Que ingrediente quiere añadir:" + listaIng);
        ingCorrecto = ingVeg.indexOf(ingrediente)
        if (ingCorrecto !== -1) {
            validIng = true;
            alert("La pizza elegida es vegetariana y sus ingredientes son mozzarella, tomate y " + ingrediente);
        } else {
            alert("El ingrediente no es válido");
        }
    }

} else {
    if (respuesta === "no") {
        for (let i = 0; i < ingNVeg.length; i++) {
            listaIng = listaIng + "->" + ingNVeg[i] + "\n";
        }
        console.log(listaIng);

        while (!validIng) {
            let ingrediente = prompt("Que ingrediente quiere añadir:" + listaIng);
            ingCorrecto = ingNVeg.indexOf(ingrediente)
            if (ingCorrecto !== -1) {
                validIng = true;
                alert("La pizza elegida no es vegetariana y sus ingredientes son mozzarella, tomate y " + ingrediente);
            } else {
                alert("El ingrediente no es válido");
            }
        }
    }
}

