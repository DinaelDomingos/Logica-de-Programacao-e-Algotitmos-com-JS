// criar referencia aos elementos da página.
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outPromocao");
const resp2 = document.querySelector("#outDesconto");

// criar um ouvinte de evento, para o evento submit do formulário.
frm.addEventListener("submit", (e) => {
    // obter os valores digitados no formulário.
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);
    // calcular o preço com desconto.
    const desconto = preco * 0.50;
    // calcular o valor da promoção.
    const promocao = (preco * 2) + desconto;
    // exibir a resposta.
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${promocao.toFixed(2)}`;
    resp2.innerText = `O 3º produto custa apenas R$ ${desconto.toFixed(2)}`;
    // impedir o envio do formulário.
    e.preventDefault();
});