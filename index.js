const readline = require('readline-sync')

function parseToBin(value) {
    let codeBin = []
    let result = 0

    while(value >= 2) {
        result = value / 2
        codeBin.push(Number.parseInt(value % 2))
        value = result
    }

    codeBin.push(Number.parseInt(value))
    codeBin.reverse()
    return codeBin
}

let data = readline.question("Informe o valor a ser convertido para binario: ")

let resultBin
let codeBin
let result = ""

console.log(`${data} em código binário é: `)

for(let c=0; c < data.length; c++) {
    resultBin = parseToBin(data[c].codePointAt())
    codeBin = [...resultBin].join('')
    result += codeBin
    console.log(`${data[c]} - ${codeBin}`)
}

console.log("============================================")
console.log(`Resultado final: ${result}`)