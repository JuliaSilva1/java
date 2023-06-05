function verificar(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    if (idade >=18){
        document.getElementById("resultado").innerHTML =`<b class= "pode">Parábens ${nome}, você já pode dirigir</b> <br><img src="cnh.jpg">`
    } else {
        document.getElementById("resultado").innerHTML = ` <b class="nao" >Parábens ${nome}, você ainda não pode dirigir </b><br><img src="cnh2.jpg">`
    }
}