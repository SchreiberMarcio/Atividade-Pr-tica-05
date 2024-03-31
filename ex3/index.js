/*
Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!
*/

let valorInicial = parseInt(prompt("Digite o primeiro Valor:"));
let valorFinal = parseInt(prompt("Digite o último Valor:"));
let incremento = parseInt(prompt("Digite o incremento:"));
let contagem = "Contagem: ";

for (let i = valorInicial; i < valorFinal; i += incremento) {
  contagem += i + " ";
}

contagem += "Acabou!";
console.log(contagem);
