function exibir() {
    document.getElementById("resultado").innerHTML = ""
    var contador = document.getElementById("numero").value
    for (var imagem = 1; imagem <= contador ; imagem++) {
        document.getElementById("resultado").innerHTML += ` <img src="coração.jfif">`
    }
}