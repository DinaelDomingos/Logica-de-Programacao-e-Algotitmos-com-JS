const prompt = require('prompt-sync')();        // adiciona a biblioteca prompt-sync
const numero = Number(prompt("Numero (centena): ")); // lê número de entrada
if (numero < 100 || numero > 999) {
    console.log("Erro... deve ser uma centena")
    return
}
const num1 = Math.floor(numero / 100);          // obtem 1º numero
const sobra = numero % 100;                     // o que sobra (dezena)
const num2 = Math.floor(sobra / 10);           // obtem 2º numero
const num3 = sobra % 10;                     // obtem 3º numero
console.log(`Invertido: ${num3}${num2}${num1}`);      // exibe número invertido