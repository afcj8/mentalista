let numeroSecreto = parseInt(Math.random() * 11)
let tentativas = 3

document.getElementById("jogar").disabled = true

function chutar() {
    const chute = parseInt(document.getElementById("valor").value)
    const resultado = document.getElementById("resultado")

    if (chute > 10 || chute < 0) {
        resultado.innerHTML = "Por favor, digite um número de 0 a 10"
    } else if (chute == numeroSecreto) {
        resultado.innerHTML = "Parabéns, você acertou!"

        document.getElementById("chute").disabled = true
        document.getElementById("jogar").disabled = false

    } else if (chute > numeroSecreto) {
        tentativas = tentativas - 1
        resultado.innerHTML = `Ops, o número é menor do que ${chute}. Resta ${tentativas} tentativa.`
    } else if (chute < numeroSecreto) {
        tentativas = tentativas - 1
        resultado.innerHTML = `Ops, o número é maior do que ${chute}. Resta ${tentativas} tentativa.`
    }

    if (tentativas == 0) {
        resultado.innerHTML = `Game Over. O número sorteado foi: ${numeroSecreto}`

        document.getElementById("chute").disabled = true
        document.getElementById("jogar").disabled = false
    }
}

function jogarNovamente() {
    numeroSecreto = parseInt(Math.random() * 11)
    tentativas = 3
    resultado.innerHTML = ""
    valor.value = ""

    document.getElementById("chute").disabled = false
    document.getElementById("jogar").disabled = true
}