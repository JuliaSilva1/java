var sorteio = parseInt(Math.random() * 100) + 1
var tentativas = 0
function chutar() {
    var chute = prompt("chute o número")
    tentativas++

    if (chute == sorteio) {
        document.getElementById("resultado").innerHTML +=
            `<b class = "acertou"> Parabéns, você acertou! ${sorteio} em ${tentativas} tentativas <br>`
    }
    else if (chute > sorteio) {
        document.getElementById("resultado").innerHTML +=
            `<b> Você chutou ${chute}, eu pensei em um número menor <br>`

        if (tentativas >= 5) {
            alert("GANHE OVER, N° DE TENTATIVAS EXCEDIDAS")
        }
        else if (chute < sorteio) {
            document.getElementById("resultado").innerHTML +=
                `<b> Você chutou ${chute}, eu pensei em um numéro maior <b> <br>`
        }
    }
    function novo() {
        tentativas = 0
        document.getElementById("resultado").innerHTML = ""
    }
}
