// na questão 1 o console irá imprimir "a. false", depois "b.false", depois "c.true " e "d. boolean"

// na questão 2 o console mostra a junção das duas strings pois não foram declaradas como number. 



// // codigo para a questão 1

// let suaIdade = prompt("Digite sua idade:")
// let idadeSeuAmigo = prompt("Digite a idade do seu melhor amigo:")

// const suaIdade2 = Number(suaIdade);
// const idadeSeuAmigo2 = Number(idadeSeuAmigo);

// let resposta = suaIdade2 > idadeSeuAmigo2;

// console.log("Sua idade é maior do que a do seu amigo?", resposta)

// console.log("a diferença de idade é:", suaIdade2 - idadeSeuAmigo2)



// // codigo para a questão 2

// let par = prompt("Digite um numero par:");
// const numeroPar = Number(par);
// console.log(numeroPar % 2)

// se o usuário digitar numero ímpar o resto da divisão será sempre 1. 


// // codigo para a questão 3

// let suaIdade = prompt("Digite sua idade em anos:")
// const idadeAnos = Number(suaIdade)

// console.log(idadeAnos *12)
// console.log(idadeAnos * 365)
// console.log(idadeAnos *365 * 24)


// codigo para a questão 4

// let resposta1 = prompt("Digite um numero")
// let resposta2 = prompt("Digite outro numero")
// const numero1 = Number(resposta1)
// const numero2 = Number(resposta2)

// console.log("O primeiro numero é maior que o segundo?", numero1 > numero2)
// console.log("O primeiro numero é igual ao segundo?", numero1 == numero2)
// console.log("O primeiro numero é divisível pelo segundo?", (numero1 % numero2) == 0 )
// console.log("O segundo numero é divisível pelo primeiro?", (numero2 % numero1) == 0 )


// // DESAFIO 1
// let consumo = Number(prompt("Quantos KWs vc consumiu?"))
// let desconto = Number(prompt("Qual o seu desconto?"))
// let valor = consumo * 0.05
// console.log("você irá pagar", valor, " reais")
// console.log("Com desconto você irá pagar:", valor - (valor* (desconto/100)), "reais")



// DESAFIO 2

let libra = Number(prompt("Quantas libras?"))

console.log( libra, "lb equivalem a", libra * 0.45359237, "Kg" )