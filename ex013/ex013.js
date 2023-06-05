function sortear() {
    var mes = parseInt(Math.random() * 13) + 1
    var nome = document.getElementById("nome").value
    switch (mes) {
        case 1:
            document.getElementById("resultado").innerHTML += `Você ${nome} irá casar no mês de janeiro <br>`
            break

        case 2:
            document.getElementById("resultado").innerHTML += `Você ${nome}  irá casar no mês de fevereiro <br>`
            break

        case 3:
            document.getElementById("resultado").innerHTML += `Você ${nome}  irá casar no mês de março <br>`
            break

        case 4:
            document.getElementById("resultado").innerHTML += `Você ${nome}  irá casar no mês de abril <br>`
            break

        case 5:
            document.getElementById("resultado").innerHTML += `Você ${nome}  irá casar no mês de maio <br>`
            break

        case 6:
            document.getElementById("resultado").innerHTML += `Você ${nome}  irá casar no mês de junho <br>`
            break

        case 7:
            document.getElementById("resultado").innerHTML += `Você ${nome}  irá casar no mês de julho <br>`
            break

        case 8:
            document.getElementById("resultado").innerHTML += `Você ${nome}  irá casar no mês de agosto <br>`
            break

        case 9:
            document.getElementById("resultado").innerHTML += `Você ${nome}  irá casar no mês de setembro <br>`
            break

        case 10:
            document.getElementById("resultado").innerHTML += `Você ${nome}  irá casar no mês de outubro <br>`
            break

        case 11:
            document.getElementById("resultado").innerHTML += `Você ${nome}  irá casar no mês de novembro <br>`
            break

        case 12:
            document.getElementById("resultado").innerHTML += `Você ${nome}  irá casar no mês de dezembro <br>`
            break
        default:
            document.getElementById("resultado").innerHTML += `Você ${nome}  não vai casar <br>`
    }
}