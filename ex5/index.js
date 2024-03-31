/*
Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas.
*/
let distancia = parseFloat(prompt("Qual a distância que você deseja percorrer em Km?"));
let precoPassagem;

if (distancia <= 200) {
    precoPassagem = distancia * 0.50;
} else {
    precoPassagem = distancia * 0.45;
}

alert("O preço da sua passagem é: R$" + precoPassagem.toFixed(2));
