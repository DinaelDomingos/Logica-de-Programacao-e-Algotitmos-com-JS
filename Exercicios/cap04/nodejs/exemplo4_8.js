const prompt = require('prompt-sync')();        // adiciona a biblioteca prompt-sync
const valor = Number(prompt("Valor da Compra R$: ")); // lê valor da compra
const aux = Math.floor(valor / 20);                  // aux = nº de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;    // operador ternário para definir parcelas
const valorParcela = valor / parcelas;                // calcula valor da parcela
console.log(`Pode pagar em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`);      // exibe nº de parcelas