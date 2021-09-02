//Declarativas

function miFuncion() {
    return 3;
}

//Expresión

var miFuncion = function (a,b) {

    return a + b;
}

miFuncion();
//cuando una variable es declarada dentro de una funcion solo existe dentro de la funcion esto es scope.
function nombre() {
    var miApellido = "Pocon";
    console.log(miNombre + " " + miApellido );
}
