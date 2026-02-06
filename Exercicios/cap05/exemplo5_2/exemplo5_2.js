const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {       // "escuta" evento submit do form
    e.preventDefault()                        // evita envio do form
    const numero = Number(frm.inNumero.value) // obtém o número informado
    let resposta = `Entre ${numero} e 1: `  // String para montar a resposta
    for (let i = numero; i > 1; i--) {     // cria um for decrescente
        resposta = `${resposta + i} , ` /* resposta acumula números (e virgulas)*/       
    }
    resposta = `${resposta} 1.` // finaliza a resposta com o número 1
    resp.innerText = resposta    // exibe a resposta na página
})

frm.addEventListener("reset", () => {
    frm.inNumero.value = "" // limpa o conteúdo do campo
    resp.innerText = ""     // limpa o conteúdo da resposta
    frm.inNumero.focus()    // posiciona o cursor no campo
})