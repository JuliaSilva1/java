function entrar(){
    var usuario = document.getElementById("nome").value
    var senha = document.getElementById("senha").value
    var nome = "adm"
    var senha1 = 123
    if (usuario == nome && senha == senha1 ){
        document.getElementById("resultado").innerHTML =`<b class= "acesso"> Acesso confirmado </b>`
    } else {
        document.getElementById("resultado").innerHTML=`<b class="negado">Acesso negado </b>`
    }
}