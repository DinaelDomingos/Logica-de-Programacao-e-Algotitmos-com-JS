const prompt = require('prompt-sync')(); // adiciona o módulo prompt-sync para entrada de dados
const salario = Number(prompt("Salário R$: ")); // solicita o salário e converte para Number
const tempo = Number(prompt("Tempo de Serviço (anos): ")); // solicita o tempo de serviço e converte para Number
const quadrienio = Math.floor(tempo / 4); // calcula o número de quadrênios completos
const aumento = salario * (quadrienio/100); // calcula o aumento com base no número de quadrênios
const novoSalario = salario + aumento; // calcula o novo salário após o aumento
console.log(`Número de Quadrênios: ${quadrienio}`); // exibe o número de quadrênios
console.log(`Salário Atual R$: ${novoSalario.toFixed(2)}`); // exibe o novo salário formatado com duas casas decimais