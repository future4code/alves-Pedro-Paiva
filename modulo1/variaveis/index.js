// primeiro vai imprimir no console o numero 10 e depois 10 e 5
// irá imprimir tres vezes o 10 pois todas as variaveis estão com esse valor
// variavel p pode ser horasDia e variavel t pode ser valorDia

let nome 
let idade

console.log(typeof nome, typeof idade)

// foi impresso undefined pq não colocamos nada na variavel, então não sabe seu tipo

nome = prompt("Oi, qual o seu nome?") 
idade = prompt("Qual sua idade?")

console.log(typeof nome, typeof idade)


// agora ele identificou as duas variaveis como strings

console.log("Olá", nome, "voce tem", idade, "anos.")

// resposta da questão 2 

let azul = prompt("Você esta usando roupa azul hoje?")
let limpa = prompt("sua roupa está limpa?")
let trocar = prompt("voce precisar trocar de roupa?")

console.log("Voce esta usando roupa azul hoje?", azul)
console.log("sua roupa está limpa?", limpa)
console.log("voce precisa trocar de roupa?", trocar)

// resposta da questão 3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let c = a
a = b 
b = c 

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10