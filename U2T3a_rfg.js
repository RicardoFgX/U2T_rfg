

        let operacion1 = 10 == 10;
        alert("La operación 10 == 10 es " + operacion1);

        let operacion2 = 10 === 10;
        alert("La operación 10 === 10 es " + operacion2);

        let operacion3 = 10 === 10.0;
        alert("La operación 10 === 10.0 es " + operacion3);

        let operacion4 = "Laura" == "laura";
        alert("La operación 'Laura' == 'laura' es " + operacion4);

        let operacion5 = "Laura" > "laura";
        alert("La operación “Laura” > “laura” es " + operacion5);

        let operacion6 = "Laura" < "laura";
        alert("La operación 'Laura' < 'laura' es " + operacion6);

        let operacion7 =  "123" == 123;
        alert("La operación '123' == 123 es " + operacion7);

        let operacion8 = "123" === 123;
        alert("La operación '123' === 123 es " + operacion8);

        let operacion9 = parseInt("123") === 123;
        alert("La operación parseInt('123') === 123 es " + operacion9);

        /*Nombre del propietario: Ricardo Fernández Guzmán
        Con las diferentes operaciones, podemos observar las cualidades que presentan
        los diferentes simbolos de comparación.
        Una operción importante a analizar es la tercera, se trata de un numero entero y un número decimal,
        a esto, la igualdad estricta establece que son iguales ya en verdad se trata del mismo numero.
        Las comparaciones de caracteres(operacion 5 y 6) nos demuestran que se comparan segun el codigo ASCII del
        caracter, por tanto 'Laura' < 'laura' ya que las minusculas van antes que las mayusculas en la
        clasificación ASCII.
        Sin embargo la igualdad estricta tiene en cuenta cuando se trata de una cadena y cuando se trata de un número
        (operación  8)
        */