var listaCadastro = []
listaCadastro = JSON.parse(localStorage.getItem('bdcadastro'))
if (listaCadastro == null) {
    listaCadastro = []
}
exibir()

function cadastrar() {
    var nome = document.getElementById("nome").value
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
    var senha2 = document.getElementById("senha2").value

    if (validarCadastro(senha, senha2) == false) {
        return false
    }

    var cadastro = {
        nome: nome,
        usuario: usuario,
        senha: senha
    }
    listaCadastro.push(cadastro)
    localStorage.setItem('bdcadastro', JSON.stringify(listaCadastro))

    exibir()
}

function validarCadastro(senha, senha2) {
    if (senha != senha2) {
        alert(`senhas estão incorretas`)
        return false
    }
}

function exibir() {
    document.getElementById("resultado").innerHTML = ''
    listaCadastro.forEach((item, pos) => {
        document.getElementById("resultado").innerHTML += `<div>
        Nome: ${item.nome} -  Login: ${item.usuario}
        <img src='excluir.svg' onclick='excluirUsuario(${pos})'></div>`
    })

}
function excluirUsuario(pos){
    if(confirm('Deseja realmente excluir este usuário?')){
        listaCadastro.splice(pos, 1)
        localStorage.setItem('bdcadastro', JSON.stringify(listaCadastro))
        exibir()
    }
    
}

function limpar() {
    listaCadastro = []
    localStorage.setItem('bdcadastro', JSON.stringify(listaCadastro))
    exibir()
}