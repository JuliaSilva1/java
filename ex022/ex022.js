var nomes = []
var links = []
function cadastrar(){
    var recebe = document.getElementById("filme").value
    var recebe2 = document.getElementById("link").value

    document.getElementById("resultado").innerHTML =""
    nomes.push(recebe)
    links.push(recebe2)

    for(var i = 0;i < nomes.length; i++ ){
        document.getElementById("resultado").innerHTML += `<div>${nomes[i]} <br> <img src="${links[i]}" class="imagem"></div>`
    }
   
}
function indicar(){
    var indi = parseInt(Math.random() * links.length) 
    document.getElementById("resultado").innerHTML = `<div><img src="${links[indi]}" class="imagem"> <br> ${nomes[indi]}</div>`
}