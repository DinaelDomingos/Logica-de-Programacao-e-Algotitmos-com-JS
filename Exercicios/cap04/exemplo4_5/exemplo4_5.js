const frm = document.querySelector("form"); // obtém elementos da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();                     // evita envio do form
    const numero = Number(frm.inNumero.value);  // obtém número digitado no form
    const raiz = Math.sqrt(numero);         // calcula a raiz quadrada do número
    if (Number.isInteger(raiz)) {           // verifica se é um número inteiro
        resp.innerText = `Raiz: ${raiz}`;   // exibe a raiz exata
    } else {                                // senão   ,
        resp.innerText = `Não há raiz exata para ${numero}`;  // exibe mensagem
    }
});