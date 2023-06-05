function calcular(){
    //receber o valor1
    var valor1 = document.getElementById("numero").value
    //receber o valor2
    var valor2 = document.getElementById("numero1").value
    var soma = Number(valor1) + Number(valor2)
    var subtracao = valor1 - valor2 
    var multiplicacao = valor1 * valor2
    var divicao = valor1 / valor2
    var exponecial = valor1 ** valor2
    var resto = valor1 % valor2
    document.getElementById("ResultadoCalculo").innerHTML += `${valor1} + ${valor2} = ${soma} <br> ${valor1} - ${valor2} = ${subtracao}
    <br> ${valor1} * ${valor2} = ${multiplicacao} <br> ${valor1} / ${valor2} = ${divicao} <br> ${valor1} ** ${valor2} = ${exponecial}
    <br> ${valor1} % ${valor2} = ${resto}`
    
}