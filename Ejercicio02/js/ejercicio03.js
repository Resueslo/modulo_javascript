var array =  [10,40,30,20,15,5];

var numeroMenor = Math.min(...array);
var numeroMayor = Math.max(...array);

console.log("****** EJERCICIO 03 *****");
console.log("Arreglo Ordenado: ", array.sort(function(a, b){return a - b}));
console.log("Número Menor: ", numeroMenor);
console.log("Número Mayor: ", numeroMayor);
