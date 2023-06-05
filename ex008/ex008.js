function calcularmedia() {
    var nome = document.getElementById("aluno").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value

    if (Number(nota1) > 10) {
        alert("Nota 1 não pode ser maior que 10")
        exit
    }
    if (Number(nota2) > 10) {
        alert("Nota 2 não pode ser maior que 10")
        exit
    }
    var media = (Number(nota1) + Number(nota2)) / 2
    if (media >= 7) {
        document.getElementById("resultado").innerHTML =
            `O aluno ${nome} tirou nota ${nota1} e ${nota2} sua média foi ${media} 
            <b class ="apro"> APROVADO </b>` 
    } else {
        document.getElementById("resultado").innerHTML =
            `O aluno ${nome} tirou nota ${nota1} e ${nota2} sua média foi ${media} 
            <b class ="repro"> REPROVADO </b>`
    }
}
