const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)
    let tipo

    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        resp1.textContent = "Os lados podem formar um triângulo."
        if (ladoA === ladoB && ladoB === ladoC) {
            tipo = "Equilátero"
            resp2.textContent = `Tipo: ${tipo}`
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            tipo = "Isósceles"
            resp2.textContent = `Tipo: ${tipo}`
        } else {
            tipo = "Escaleno"
            resp2.textContent = `Tipo: ${tipo}`
        }
    } else {
        resp1.textContent = "Os lados não podem formar um triângulo."
        resp2.textContent = ""
    }
})

frm.addEventListener("reset", () => {
    resp1.textContent = ""
    resp2.textContent = ""
})