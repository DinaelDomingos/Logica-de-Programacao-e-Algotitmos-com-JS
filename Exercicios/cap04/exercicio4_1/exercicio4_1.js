const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const tipo = (numero % 2 == 0) ? "Par" : "Ímpar"
    resp.innerText = `O número ${numero} é ${tipo}`
    // if (numero % 2 == 0) {
    //     resp.innerText = `O número ${numero} é Par`
    // } else {
    //     resp.innerText = `O número ${numero} é Ímpar`
    // }
})

frm.addEventListener("reset", () => {
    resp.innerText = ""
})