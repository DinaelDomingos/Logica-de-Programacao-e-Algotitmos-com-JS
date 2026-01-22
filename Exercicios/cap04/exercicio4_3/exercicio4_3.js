const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    let tempo
    let troco
    if (valor >= 3) {
        tempo = 120
        troco = valor - 3
        resp1.textContent = `Tempo: ${tempo} minutos`
        if (troco > 0)
            resp2.textContent = `Troco: R$ ${troco.toFixed(2)}`
    } else if (valor >= 1.75) {
        tempo = 60
        troco = valor - 1.75
        resp1.textContent = `Tempo: ${tempo} minutos`
        if (troco > 0)
            resp2.textContent = `Troco: R$ ${troco.toFixed(2)}`
    } else if (valor >= 1) {
        tempo = 30
        troco = valor - 1
        resp1.textContent = `Tempo: ${tempo} minutos`
        if (troco > 0)
            resp2.textContent = `Troco: R$ ${troco.toFixed(2)}`
    } else {
        resp1.textContent = "Valor insuficiente"
        resp2.textContent = ""
    }
})

frm.addEventListener("reset", () => {
    resp1.textContent = ""
    resp2.textContent = ""
})