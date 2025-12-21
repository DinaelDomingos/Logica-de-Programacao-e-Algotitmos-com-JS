// cria referência ao form e aos elementos de resposta (pelo sei id).
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um "ouvinte" de evento, acionado quando o botão submit for submetido/clicado.
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value; // obtém o conteúdo do campo veículo.
    const preco = Number(frm.inPreco.value); // obtém o conteúdo do campo preço.

    const entrada = preco * 0.50; // calcula o valor da entrada (50% do preço).
    const parcela = (preco * 0.50) / 12; // calcula o valor da parcela (50% do preço dividido em 12x).

    // exibe as respostas do programa.
    resp1.innerText = `Promoção: ${veiculo}`;
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;
    resp3.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`;

    e.preventDefault(); // evita o envio do form.
});