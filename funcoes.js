calcularDobro(3)


function calcularDobro(nr) {
    dobro = nr * 2
    console.log(dobro)
}
ricardoCalculeTabuada(3)

function ricardoCalculeTabuada(nr) {
    for (var i = 1; i <= 20; i++) {
        console.log(`${nr} x ${i} = ${nr * i}`)
    }
}


var resultado = 0
resultado = calcularDobro(544076)
console.log(resultado)

function calcularDobro(nr) {
    dobro = nr * 2
    return dobro
}

function calcularMedia(nota1, nota2){
    var soma = nota1 + nota2
    var media = soma/2
    return media
}

var mediaAluno1 = calcularMedia(0,7)
console.log (`mediado aluno 1 é ${mediaAluno1}`)
var mediaAluno2 = calcularMedia(5,3)
console.log (`media de aluno 2 é ${mediaAluno2}`)

var login = 'admin'
var senha = '123'

function validarLogin(login, senha){
    if(login == '' || senha == ''){
        return false
    }
    if(login == 'admin' && senha == '123'){
        return true
    } else{
        return false
    }
}