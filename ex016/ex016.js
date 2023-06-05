function gerador() {
    document.getElementById("resultado").innerHTML = ""
    var nr = document.getElementById("numero").value
    for (var mul = 1; mul <= 10; mul++){
        var conta = nr * mul
    document.getElementById("resultado").innerHTML += `${nr} X ${mul} = ${conta} <br>`}
}
