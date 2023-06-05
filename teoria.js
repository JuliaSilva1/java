
/*Comentarios em multiplas linhas*/

//Comentario em uma unica linha

//O alert é utilizando para exibir em mensagem em popup
//alert("Olá mundo!!!")

//no console conseguimos visualizar informações
//sem exibir na página
console.log("Olá mundo!!! Utilizando Console!");

function Botaoteste() {
    alert("Você clicou no botão")
}
//Tipo de exibição de mensagem no console
console.error("Esta é uma mensagem de erro")
console.warn("Esta é uma mensagem de alerta")
console.info("Esta é uma mensagem de informação")

//declarando variaveis 
//string - conjunto de caracteres - declara com "" ou ''
var nome = "Julia"
var sobrenome = "da Silva"
//number - Todo numero em JS é do tipo number - declarar sem ""
var idade = 16
//boolean - somente recebe true ou false 
var aprovado = true

console.log(typeof nome) // comando typeof para saber o tipo do dado

console.log(nome + ' ' + sobrenome) //concatenando string com o +
//se utilizarmos o + com string ele concatena se utilizar com number soma
var n1 = 10
var n2 = 25
console.log(n1 + n2) //irá somar as 2 variaveis number (35)
var n3 = "10"
var n4 = "25"
console.log(n3 + n4)  // irá concatenar "juntar" as duas variaveis ("1025")

n1 = n2 // uma variavel pode receber o valor de outra variavel
console.log("n1 = " + 'e o n2 =' + n2)

var salario = 1200.85 // para atribuir um valor decimal utilizar . não ,
salario = salario + 200 //posso tambem somar a variavel com ele mesmo 
console.log(salario)
salario += 200 // representação mais simplificado da expressão acima
console.log(salario)

//antigamente para juntar texto e variaveis faziamos assim
console.log('Olá,' + 'Você tem' + idade + 'anos e recebe R$' + salario)
//hoje utilizamos o TemplateString forma mais simples
console.log(`Olá, ${nome} Você tem ${idade} anos e recebe R$ ${salario}`)

function BotaoNome() {
    //no prompt abre opção para digitar algo
    var nome2 = prompt('Qual é seu nome')
    //no confim abre texto com opção ok e cancel
    confirm(`Olá ${nome2}, entendeu JS?`)
}
function Botaosomar() {
    //recebendo o valor1 de um prompt
    var valor1 = prompt("Informe o valor 1:")
    //recebendo o valor2 de um prompt
    var valor2 = prompt("Informe o valor 2:")
    //variavel soma receber valor1 + valor2
    //covertendo o valor 1 e 2 de string para number
    //posso utilizar parseInt() parseFloat() ou nunber()
    var soma = Number(valor1) + Number(valor2)
    //exibir em um alert o valor de soma
    //alert(soma) 

    document.getElementById("resultadoSoma").innerHTML += `<br> A soma dos numeros ${valor1} e ${valor2} é = ${soma}`
}
function botaoCidade() {
    var nomecidade = document.getElementById("cidade").value
    document.getElementById("resultadocidade").innerHTML = nomecidade
}

//Operadores Aritméticos e ordem de precedência
//Operador de soma +
var opSoma = 5 + 2 //operador de soma
console.log(opSoma) //7  
var opSubtracao = 5 - 2 //operador de subtração
console.log(opSubtracao) //3
var opMultiplicacao = 5 * 2 //operador de multiplicação
console.log(opMultiplicacao) //10
var opDivicao = 5 / 2 //operador de divição
console.log(opDivicao) //2.5

var opExponecial = 5 ** 2 //operador de exponecial
console.log(opExponecial)
var opResto = 5 % 2 //operador de divisão resto
console.log(opResto)

//ordem de precedência 
var opPrecendencia = 5 + 3 / 2  
console.log(opPrecendencia) //6.2
var opPrecendencia2 = (5 + 2) / 2
console.log(opPrecendencia2) //4
/* 1° ()
   2° **
   3° * /
   4° %
   5° + -
*/

//constantes - o valor não pode ser alterado depois de atribuido
const pi = 3.14
//pi = 3 - se o valor for alterado dará erro no javascript

//auto atribuição
var n = 3
n = n + 3 // a variavel recebe ele mesmo + 3
n += 3 // quer dizer o mesmo que a expressão acima 

n ++ //quando precisamos somar + 1 ao valor de variavel
n-- // quando precisamos sutrair -1 ao valor de variarel


//Operadores relacionais
var n1 = 5
var n2 = 6
console.log(n1 > n2) // > maior que
console.log(n1 < n2) // < menor que
console.log(n1 >= n2) // maior ou igual que
console.log(n1 <= n2) // menor ou igual que
console.log (n1 == n2) //igual
console.log( n1 != n2) //!= não igual - diferente 

//Estrutura condicionais 
if (n1 > n2){  // varificando a condição entre parenteses 
    // se a condição for verdadeira "entra" nesse bloco
    console.log("O n1 maior que o n2")    
} else{
    // se a condiçaõ não for verdadeira "entra"nesse bloco
    console.log("O n1 não é maoir que o n2")
}
//Exemplo de condição
var minhaIdade = 15
if(minhaIdade >= 16)
{ console.log("Voce pode votar")}
else{console.log("Voce não pode votar")}

//Operadores lógicos 
//&& representa o E
var login = "adm"
var senha = "123"
//para entrar no condição TRUE as 2 condiçoes precisa ser verdadeira
if (login == "adm" && senha == "123"){
    //executa esse bloco quando as condiçoes forem TRUE
} else {
    //executa esse bloco quando as condiçoes FALSE
}
var media = 6
// operador ou -> || (pique)
//para entrar na condiçao TRUE pelo menos 1 condiçao precisa ser verdadeira
if (media == 6 || media == 5) {
    //executa esse bloco quando 1 condiçao é TRUE
} else{
    //aqui entra se todas as condiçoes forem falsas
}

//Estrutura condicionais encadeadas
if (media >=7){
    console.log("APROVADO")
} else if (media >=5){
    // podemos fazer um novo if junto com o else
    console.log("RECUPERAÇÃO")
} else if (media < 5){
    console.log("REPROVADO")
}

//debugger
//podemoes ultilizar o debugger para analisar o codigo linha a linha

//exit
//quando queremos para de excutar uma funçao do js ultilizamos o exit

//para sorteamos um valor aleatorio utilizamos o Math.random()
// e Marth.random retotna um numero decimal e precimos multiplicar
//pelo nr maximo que desejamos e somar 1 quando necessario
//o parseInt ultilizamos para obter apenas a parte a parte inteira do numero
var nrSorteado = parseInt(Math.random() * 100)+1
console.log(nrSorteado)

//Switch case
// é como se fosse varios else if de forma mais simples
var diaSemana = 3
switch(diaSemna){
     case 1:
    console.log("Hoje é domingo")
    break // para o switch case não verificar as outras opçoes

    case 2:
    console.log("Hoje é segunda")
    break

    case 3:
    console.log("Hoje é terça")
    break

    case 4:
    console.log("Hoje é quarta")
    break

    case 5:
    console.log("Hoje é quinta")
    break
    
    case 6:
    console.log("Hoje é sexta")
    break

    case 7:
    console.log("Hoje é sabado")
    break

    default:
        console.log("Dia invalido")
}

//laços de repetição WHILE (que quer dizer enquanto)
//while (condição)
//enquanto a condição do parentesses for verdadeira
//continua respentindo o codigo do bloco
var nrVidas = 5
while(nrVidas > 0){
    console.log(`você ainda tem ${nrVidas}` )
    nrVidas
}

//verificando se número é par com while
var contador = 1 //Iniciando o contador de vezes que irá executar
while (contador <= 10) { //Enquanto a condição for verdadeira
    if (contador % 2 == 0){ //condição para o contador for par
        console.log(`${contador} é par`)
    } else{
        console.log(`${contador} é impar`)
    } 
    contador ++ // Adicionamos +1 ao contador para não ficar em loop infinito
}

var cont = 1
while (cont <= 5){
    console.log (cont)
    cont ++
}

for (let cont = 1; cont <= 5; cont++){
    console.log(cont)
}
//for - laço de repetição
// 1° expressão var 1 = 1 
//(aqui eu inicio o controle de vezes)
//2° expressão 1 <= 10
// (aqui nos verificamos a condição para se 
//manter no loop)
//3° expressaõ 1++
//(aqui acrescentamos na variavel +1 vez)
//exibição 
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
