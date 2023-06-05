function calcularMedia(){
    var nome = document.getElementById("aluno").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value 

    var media = (Number(nota1) + Number (nota2))/2
    if(media >= 7){
        document.getElementById("resultado").innerHTML =
        `O aluno ${nome} tirou nota ${nota1} e ${nota2} sua media foi ${media} PASSOU DE ANO`
    } else{
        document.getElementById("resultado").innerHTML = 
        `O aluno ${nome} tirou nota ${nota1} e ${nota2} sua media foi ${media} NÃO PASSOU DE ANO`
    }
}

function Validarnota(nota1, nota2){
    if (nota1 > 10){
        alert("Nota 1 não pode ser maior que 10")
        return false
    } 
    if (nota2 > 10){
        alert("Nota 2 não pode ser maior que 10")
        return false
    }
}