const prompt = require('prompt-sync')(); //  adiciona o módulo prompt-sync para entrada de dados
const num1 = Number(prompt("1º Número: ")); // solicita o primeiro número e converte para Number
const num2 = Number(prompt("2º Número: ")); // solicita o segundo número e converte para Number
const soma = num1 + num2; // realiza a soma dos dois números
console.log(`Soma é: ${soma}`); // exibe o resultado da soma