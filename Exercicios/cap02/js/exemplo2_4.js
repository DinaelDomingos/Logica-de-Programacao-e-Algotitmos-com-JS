// cria referência ao form e aos elementos h3 (onde sera exibida a resposta).
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for submetido/clicado.
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value); // obtém o conteúdo do campo quilo.
    const consumo = Number(frm.inConsumo.value); // obtém o conteúdo do campo consumo.

    const valor = (quilo / 1000) * consumo; // calcula o valor a ser pago.
    resp.innerText = `Preço a pagar: R$ ${valor.toFixed(2)}`; // exibe a resposta do programa.
    
    e.preventDefault(); // evita o envio do form.
});