// RESPOSTA INTERPRETAÇÃO 1
// imprime > a. undefined
// imprime > b. null
// imprime > c. 11
// imprime > d. 3
// imprime > e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// imprime > f. 10

// RESPOSTA INTERPRETAÇÃO 2
// será impresso: SUBI NUM ONIBUS EM MIRROCOS


// // resposta ESCRITA DE CODIGO 1

const nome = prompt("Digite seu nome")
const email = prompt("Digite seu email")

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem vinda(o), ${nome}!`)


// RESPOSTA ESCRITA DE CODIGO 2

const comidas = ["pao", "arroz", "batata", "suco", "fruta"]
console.log(comidas)
console.log("Essas são minhas comidas preferidas", comidas[0])
comidas[1] = prompt("Qual sua comida preferida?")
console.log(comidas[0], "\n",comidas[1], "\n", comidas[2])



// RESPOSTA ESCRITA CODIGO 3 

const listaDeTarefas = []

listaDeTarefas[0] = prompt("Qual tarefa voce precisa realizar hoje?")
listaDeTarefas[1] = prompt("agora outra tarefa:")
listaDeTarefas[2] = prompt("só mais uma:")

console.log(`0 - ${listaDeTarefas[0]} 1 - ${listaDeTarefas[1]} 2 - ${listaDeTarefas[2]}`)

let remover = prompt("Digite o numero da tarefa que vc já realizou:")

listaDeTarefas.splice(remover, 1)

console.log(listaDeTarefas)


// RESPOSTA DO DESAFIO