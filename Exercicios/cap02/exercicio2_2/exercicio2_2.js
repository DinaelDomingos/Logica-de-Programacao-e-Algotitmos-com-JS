// criar as referencias aos elementos da página
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outTotal");

// criar um ouvinte de evento, para o evento submit do formulário
frm.addEventListener("submit", (e) => {
    // obter os valores digitados no formulário
    const preco = Number(frm.inValor.value);
    const tempo = Number(frm.inTempo.value);
    // calcular o total a pagar
    const total = Math.ceil(tempo / 15) * preco;
    // exibir a resposta
    resp1.innerText = `Total a Pagar: R$ ${total.toFixed(2)}`;
    // impedir o envio do formulário
    e.preventDefault();
});