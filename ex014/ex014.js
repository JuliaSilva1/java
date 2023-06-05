function sortear(){
    document.getElementById("resultado").innerHTML = ""
    var sorteio = 1
    while(sorteio <= 6){
        var nrSorteado = parseInt(Math.random()*60) +1
        document.getElementById("resultado").innerHTML += `${nrSorteado}  `
        sorteio ++ 
    }
}