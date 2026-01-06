const prompt = require('prompt-sync')(); //  adiciona o módulo prompt-sync para entrada de dados
const peso = Number(prompt("Peso da Ração (kg): ")); // solicita o peso em kg
const consumo = Number(prompt("Consumo diário (gr): ")); // solicita o consumo diário em gramas
const duracao = peso * 1000 / consumo; // calcula o número de dias que a ração dura
const sobra = (peso * 1000) % consumo; // calcula a sobra de ração em gramas
console.log(`Duração: ${Math.floor(duracao)} dias`);
console.log(`Sobra: ${sobra} gramas`);