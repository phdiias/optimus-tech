// #7DaysOfCode - Lógica JS 2/7: Variáveis

let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let linguagem = prompt("Qual linguagem você está estudando?");
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let resultado = prompt(
  `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`
);
alert(
  resultado == 1
    ? "Muito bom! Continue estudando e você terá muito sucesso."
    : "Ahh que pena... Já tentou aprender outras linguagens?"
);
