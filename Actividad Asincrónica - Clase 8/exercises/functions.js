function sumaBasica(a, b) {
    return a + b;
}
var resultadoSuma = sumaBasica(10, 15);
console.log("Resultado P23:", resultadoSuma);

function sumaValidada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        alert("P24 - Error: Uno de los parámetros no es un número.");
        return NaN;
    }
    return a + b;
}
console.log("Resultado P24:", sumaValidada(10, "hola"));

function validateInteger(numero) {
    return Number.isInteger(numero);
}
console.log("Resultado P25:", validateInteger(5), validateInteger(5.5));


function sumaEnteros(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        alert("P26 - Error: Uno de los parámetros no es un número.");
        return NaN;
    }
    
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        alert("P26 - Error: Al menos uno de los números tiene decimales. Se redondearán.");
        return Math.round(a) + Math.round(b);
    }

    return a + b;
}

console.log("Resultado P26:", sumaEnteros(10.3, 15.8));


function verificarEntero(numero) {
    return Number.isInteger(numero);
}

function sumaConFuncionSeparada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        alert("P27 - Error: Parámetros inválidos.");
        return NaN;
    }
    
    if (!verificarEntero(a) || !verificarEntero(b)) {
        alert("P27 - Error: Al menos uno de los números tiene decimales. Se redondearán.");
        return Math.round(a) + Math.round(b);
    }

    return a + b;
}

console.log("Resultado P27:", sumaConFuncionSeparada(10.3, 15.8));