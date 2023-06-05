var nomes = []
function exibir(){
    var recebe = document.getElementById("filme").value
    document.getElementById("resultado").innerHTML =""
    nomes.push(recebe)
    for(var i = 0;i < nomes.length; i++ ){
        document.getElementById("resultado").innerHTML += `${nomes[i]} <br>`
    }
}