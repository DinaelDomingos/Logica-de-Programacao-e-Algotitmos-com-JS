const prompt = require('prompt-sync')(); //  adiciona o módulo prompt-sync para entrada de dados
const veiculo = prompt("Veículo: "); // solicita o modelo do veículo
const preco = Number(prompt("Preço R$: ")); // solicita o preço do veículo e converte para Number
const entrada = preco * 0.50; // calcula o valor da entrada (50% do preço)
const parcela = (preco - entrada) / 12; // calcula o valor das 12 parcelas restantes
console.log(`Promoção: ${veiculo}`); // exibe as respostas 
console.log(`Entrada de R$ ${entrada.toFixed(2)}`);
console.log(`+ 12x de R$ ${parcela.toFixed(2)}`);