// cria referência ao form e elemento onde sera exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();  // evita o envio do form

    const nome = frm.inNome.value; // obtém valores do form
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);

    let peso;              // declara a variável peso
    if (masculino) {       // se masculino (ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2);   // Math.pow = potência (eleva ao quadrado)
    } else {
        peso = 21 * Math.pow(altura, 2);
    }

    resp.innerText = `${nome}: seu peso ideal é ${peso.toFixed(2)} kg.`;  // apresenta a resposta (altera o conteúdo do elemento h3 da página)    
});

frm.addEventListener("reset", () => {
        resp.innerText = ""; // limpa o conteúdo do elemento h3 que exibe a resposta
});
