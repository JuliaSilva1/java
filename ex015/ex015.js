function gerador() {
    document.getElementById("resultado").innerHTML = ""
    
    var mul = 1
    while (mul <= 10) {
        var conta = nr * mul
        document.getElementById("resultado").innerHTML += `${nr} X ${mul} = ${conta} <br>`
        mul++
    }
}