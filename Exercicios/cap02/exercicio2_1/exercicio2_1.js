// Uma farmácia esta fazendo uma promoção de medicamentos. Na compra de um medicamento, o cliente leva outro igual de graça. Faça um programa que receba o nome e o preço do medicamento e mostre a promoção da farmácia.

// criar as referencias aos elementos da página
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outPromocao");
const resp2 = document.querySelector("#outPreco");

// criar um ouvinte de evento, para o evento submit do formulário
frm.addEventListener("submit", (e) => {
    // obter os valores digitados no formulário
    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value);
    // calcular o preço da promoção
    const promocao = Math.floor(preco * 2);
    // exibir as respostas   
    resp1.innerText = `Promoção de ${medicamento}`;
    resp2.innerText = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`;

    // impedir o envio do formulário
    e.preventDefault();
});