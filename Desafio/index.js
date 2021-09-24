/*

*/

const mensagemSecreta = [
  'Aprender',
  'não',
  'é',
  'o',
  'sobre',
  'que',
  'você',
  'consegue',
  'facilmente',
  'na',
  'primeira',
  'vez',
  'mas',
  'sobre',
  'o',
  'que',
  'você',
  'pode',
  'descobrir.',
  '- 2015',
  'Chris',
  'Pine',
  'Aprenda',
  'JavaScript',
]

mensagemSecreta.pop()
mensagemSecreta.push("a", "programar")
mensagemSecreta[mensagemSecreta.indexOf("facilmente")] = "certo"
mensagemSecreta.shift()
mensagemSecreta.unshift("Programação")

var index = mensagemSecreta.indexOf("consegue")
var indexO = mensagemSecreta.indexOf("o")

mensagemSecreta.splice(indexO, 1)
mensagemSecreta.splice(index, 5, "sabe")

console.log(mensagemSecreta)

console.log(mensagemSecreta.join(" "))


