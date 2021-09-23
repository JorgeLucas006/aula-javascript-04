/*
1) Criar um array com valores numéricos:  25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56.

a) Coloque eles em ordem crescente.
b) Exibir no Console.
*/

var numeros = [25,23,11,55,30,6,4,21,34,89,56];

console.log(numeros.sort(function(a, b) {
  return a - b;
}));