//declarando um array vazio
var meuVetor = []

//criando vetores com dados
var numeros = [4, 1, 18, 2, 7]
var nomes = ['Silva', 'Marcos', 'Sandra']
var novoVetor = [30, 'SESI', true]

//acessando os dados de um vetor
console.log(nomes[1])
console.log(novoVetor[1])

//verificando o tamanho do vetor
console.log(numeros.length)

//indice
var frutas = ['Maça', 'Laranja', 'Pera', 'Morango', 'Uva']
for (var i = 0; i < frutas.length; i++) {
    //coloco o i no indice das frutas para pegar o
    //valor de cade indice do vetor
    console.log(frutas[i])
}

//adicionando novo valor no final do valor 
frutas.push('Abacaxi')
console.log(frutas.length)
console.log(frutas)

var novaLista = []   //[]
novaLista.push ('limão')
console.log(novaLista)   //['limão']
novaLista.push('Melancia')
console.log(novaLista) //['limão', melancia]

novaLista[0] = 'Melão'
console.log(novaLista) //['melao', 'melancia']
novaLista[1] = 'banana'
console.log(novaLista) //['melão', 'banana']
novaLista.push('melancia') 
console.log(novaLista)  //['limão', 'banana', 'melancia']

for(var i=0; i < frutas.length; i++){
    console.log(frutas[i])
}

// for in -> não preciso inicializar uma variavel de contador do loop
for(var indice in novaLista){
    console.log(indice + ' - ' + novaLista[indice])
}

//metodo forEach de um vetor percorre e retorna todos os elementos do vetor
novaLista.forEach(frutas =>{
    console.log(frutas)
})

//o método forEach - significa para cada item do vetor 
//dentro do parenteses colocamos a variável que irá
//receber o conteúdo de cada liha do vetor 
//e com o => {} informamos o bloco que irá executar para
//cada linha 
frutas.forEach ( item => {
    console.log ('Item pelo forEach',item)
} )

//quando precisamos do indice também o colocamos entre ()
//assim como no exemplo abaixo
frutas.forEach ( (item, indice) => {
    console.log ('Item pelo forEach com posição', indice, item)
} )