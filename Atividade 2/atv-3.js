/*
3) Criar um array contendo 7 atividades que você faz durante o dia.

a) Exibir no console as atividades na ordem inversa.
b) Selecionar e exibir no console, os elementos nas posições 3 e 6.
c) Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).
d) Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado.
*/

var atividades = ["Café da manha", "Almoço", "Estudar", "Tomar banho", "Arrumar o quarto", "Lava a louça", "Caminhar"];

console.log(atividades.reverse())
console.log(atividades[2], atividades[5])
console.log(atividades.join(" - "))
var novasAtividades = ["Jogar","Assistir"]
console.log(atividades.concat(novasAtividades))


