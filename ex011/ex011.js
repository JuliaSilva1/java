function verificar(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    if(idade >= 18 && idade <=65){
        document.getElementById("resultado").innerHTML =
        `Você ${nome} é obrigado a votar`
    }
    else if (idade >=16 && idade <=17 || idade >=66){
        document.getElementById("resultado").innerHTML =
         `Você ${nome} não obrigado a votar`
    }
   else {
    document.getElementById("resultado").innerHTML =
    `Você ${nome} não pode votar`
   }
}