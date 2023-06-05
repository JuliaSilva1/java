function exibir(){
    var filmes = ['Meu malvado favorito', 'Bob esponja', 'Minions', 'Guardiões da galáxia', 'Gente grande']
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("resultado").innerHTML +=`Posição no vetor ${i} - ${filmes[i]} <br>`
    }  
}