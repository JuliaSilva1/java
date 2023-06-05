var listaCadastro = []
listaCadastro = JSON.parse(localStorage.getItem('bdcadastro'))
if (listaCadastro == null){
    listaCadastro = []
}


function botaoEntrar(){
    var usuario = document.getElementById("nome").value
    var senha = document.getElementById("senha").value

    listaCadastro.forEach (item =>{
        if(usuario == item.usuario  && senha == item.senha){
            alert('Login feito com sucesso')
            return true
        }
    })

    alert('Senha ou usuário incorreto')

}

