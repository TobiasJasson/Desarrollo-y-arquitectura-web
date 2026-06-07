var stringP4 = "programacion";
var stringMayuscula = stringP4.toUpperCase();
console.log("Resultado P4:", stringMayuscula);

var stringP5 = "javascript";
var primerosCinco = stringP5.substring(0, 5);
console.log("Resultado P5:", primerosCinco);

var stringP6 = "arquitectura";
var ultimosTres = stringP6.substring(stringP6.length - 3);
console.log("Resultado P6:", ultimosTres);

var stringP7 = "eSTUDIANTE";
var stringFormateado = stringP7.substring(0, 1).toUpperCase() + stringP7.substring(1).toLowerCase();
console.log("Resultado P7:", stringFormateado);

var stringP8 = "hola mundo";
var posicionEspacio = stringP8.indexOf(" ");
console.log("Resultado P8:", posicionEspacio);

var stringP9 = "computadora portatil";
var indexEspacio = stringP9.indexOf(" ");
var primerPalabra = stringP9.substring(0, indexEspacio);
var segundaPalabra = stringP9.substring(indexEspacio + 1);
var resultadoFinal = primerPalabra.substring(0, 1).toUpperCase() + primerPalabra.substring(1).toLowerCase() + " " + 
                     segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();
console.log("Resultado P9:", resultadoFinal);