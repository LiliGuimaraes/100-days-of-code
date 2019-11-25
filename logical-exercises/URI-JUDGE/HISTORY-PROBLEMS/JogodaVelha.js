const readlines = require("readline")

// stdin are functions to treat data input during process execution

const r1 = readlines.createInterface({
    input: process.stdin,
    output: process.stdin
})


r1.question(`Digite o tamanho do tabuleiro`, boardSize => {
    r1.prompt()
})