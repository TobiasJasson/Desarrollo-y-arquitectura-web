var meses = [
    "Enero", 
    "Febrero", 
    "Marzo", 
    "Abril", 
    "Mayo", 
    "Junio", 
    "Julio", 
    "Agosto", 
    "Septiembre", 
    "Octubre", 
    "Noviembre", 
    "Diciembre"
];
console.log("Resultado P10:", meses[4], meses[10]);

var mesesOrdenados = meses.slice().sort();
console.log("Resultado P11:", mesesOrdenados);

meses.unshift("Inicio");
meses.push("Fin");
console.log("Resultado P12:", meses);

meses.shift();
meses.pop();
console.log("Resultado P13:", meses);

meses.reverse();
console.log("Resultado P14:", meses);

meses.reverse();
var mesesUnidos = meses.join("-");
console.log("Resultado P15:", mesesUnidos);

var mesesCopia = meses.slice(4, 11);
console.log("Resultado P16:", mesesCopia);