// RESPOSTA INTERPRETAÇÃO 1
// será impresso Matheus Nachtergaele e Virginia Cavendish, globo e 14h. 

// RESPOSTA INTERPRETAÇÃO 2
// será impresso:  juca, 3, SRD, depois juba, 3, SRD e depois jubo, 3, SRD
// os 3 pontos copiam a estrutura de outro objeto já declarado. 

// RESPOSTA INTERPRETAÇÃO 3
//  será impresso: false pois caio NÃO é backender e UNDEFINED pois n existe altura declarada no objeto. 


// RESPOSTA ESCRITA DE CODIGO 1

const pessoa = {
    nome: "Pedro",
    apelido: ["Pedrinho", "Pepe", "peter"], 
}

function chamar() {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]} ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}`)
}
chamar(pessoa)

const outrosApelidos = {...pessoa}
outrosApelidos.apelido[0] = "Emanuel"
outrosApelidos.apelido[1] = "baixinho"
outrosApelidos.apelido[2] = "paiva";

chamar(outrosApelidos)

// RESPOSTA ESCRITA DE CODIGO 2

const pessoa = {
    nome: "Pedro",
    idade: 28,
    profissao: "Dev"
}

function resultado() {
    let informacoes
    informacoes = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length ]
     return informacoes
}
resultado(pessoa)


// RESPOSTA ESCRITA CODIGO 3

let carrinho = []

const fruta1 = {
    nome: "Melancia",
    disponivel: true, 
}

const fruta2 = {
    nome: "laranja",
    disponivel: false, 
}
const fruta3 = {
    nome: "acerola",
    disponivel: true, 
}

function selecionadas(fruta) {
    carrinho.push(fruta)
    
}

selecionadas(fruta1)
selecionadas(fruta2)
selecionadas(fruta3)

console.log(carrinho)


// CODIGO DESAFIO 1

function perguntas() {
    nome = prompt("Digite seu nome")
    idade = +prompt("Digite sua idade")
    profissao = prompt("Digite sua profissao")

    const dados = {
        nome, idade, profissao
    }

    console.log(dados)
    console.log(typeof(dados))
}
perguntas()


// CODIGO DESAFIO 2

const filme1 = {
    ano: 2014,
    nome: "O diabo veste prada"
}

const filme2 ={
    ano: 2022,
    nome: "O soldado que não existiu"
}

function lancados(primeiro, segundo) {
    resposta1 =  primeiro.ano < segundo.ano
    resposta2 = primeiro.ano == segundo.ano
    return resposta1, resposta2
}

lancados(filme1, filme2)

console.log("O primeiro filme foi lançado antes do segundo? ", resposta1)
console.log("O primeiro filme foi lançado no mesmo ano do segundo? ", resposta2)