var contador2 =1
function aumentar(){
    document.getElementById("resultado").innerHTML = ""
    contador2++
    for (var contador = 1; contador <= contador2; contador++) {
        document.getElementById("resultado").innerHTML += `<img src="coração-mario.png" alt="" width="100px">`        
    }
}
function diminuir (){
    document.getElementById("resultado").innerHTML = ""
    contador2--
    for (var contador = 1; contador <= contador2; contador++) {
    document.getElementById("resultado").innerHTML += `<img src="coração-mario.png" alt="" width="200px">`
} 
if (contador2 <= 0){
    document.getElementById("mario").innerHTML = `<img src="game-over.gif" alt="" width="400px">`
} 
}