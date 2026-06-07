var palabras = [
    "html", 
    "css", 
    "javascript", 
    "react", 
    "node"
];

for (var i = 0; i < palabras.length; i++) {
    alert("P19 - Palabra: " + palabras[i]);
}

for (var i = 0; i < palabras.length; i++) {
    var modificada = palabras[i].substring(0, 1).toUpperCase() + palabras[i].substring(1).toLowerCase();
    alert("P20 - Modificada: " + modificada);
}

var sentence = "";
for (var i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert("P21 - cadena: " + sentence);

var arrayNumeros = [];
for (var i = 0; i < 10; i++) {
    arrayNumeros.push(i);
}
console.log("Resultado P22:", arrayNumeros);