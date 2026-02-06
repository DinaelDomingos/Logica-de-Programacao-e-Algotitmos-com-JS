const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {       // "escuta" evento submit do form
    e.preventDefault()                        // evita envio do form
    const numero = Number(frm.inNumero.value) // obtém o número informado
    let resposta = ""     // variável do tipo String, parac oncatenar a resposta
    // cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for (let i = 1; i <= 10; i++) {
        // a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
        resposta = resposta + `${numero} x ${i} = ${numero * i}\n`
        // resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
    }
    // o conteúdo de pre é alteado para exibir a tabuado do número
    resp.innerText = resposta    // exibe a resposta na página
})

frm.addEventListener("reset", () => {
    frm.inNumero.value = "" // limpa o conteúdo do campo
    resp.innerText = ""     // limpa o conteúdo da resposta
    frm.inNumero.focus()    // posiciona o cursor no campo
})