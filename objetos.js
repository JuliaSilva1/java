var listaCarro =[]

// declarando um objeto e informando os atributos
//todo objetos declaro com {}
var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'Vw'
}
//para exibir o atributo do objetos faço da seguinte forma objeto.atributo
console.log (carro.ano + '-' + carro.modelo)
console.log (`${carro.ano} - ${carro.modelo}` )

//adicionando o objeto carro ao vetor listaCarro
listaCarro.push(carro)
console.log(listaCarro.length) // 1 - só existe 1 item

//novo objeto - novo carro
carro = {
    ano: '2022',
    modelo: 'Onix',
    marca:'GM'
}
//adiconando novo objeto carro ao vetor listaCarro
listaCarro.push(carro)
console.log(listaCarro.length)

for(var andar in listaCarro){
    console.log(listaCarro[andar].modelo)
}