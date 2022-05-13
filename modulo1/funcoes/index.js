// RESPOSTA INTERPRETAÇÃO 1
// A - será impresso o valor 10 e depois 20. 
// B - a função seria executada porém não seria mostrado nada no console. 


// RESPOSTA INTERPRETAÇÃO 2
// A - o console pede para o usário inserir uma mensagem e retorna true ou false se tiver a palavra CENOURA nos elementos. 
// retorna TRUE para ambas as entradas. 



// RESPOSTA ESCRITA DE CODIGO 1
// A

function sobreMim() {
    console.log("Eu sou Pedro, tenho 28 anos, moro no RN e sou estudande.")
}
 sobreMim()


 // B

 function quemSou (nome, idade, endereco, profissao) {
    console.log("Eu sou", nome, ",tenho", idade, "anos, moro em", endereco, " e sou", profissao)
  }
 quemSou("Pedro",23,"Mossoro","Estudante")
  

// RESPOSTA ESCRITA DE CODIGO 2

function somar (num1, num2) {
    soma = num1 + num2
    return soma
}
    somar(5,6)
    console.log(soma)



function maior (num1,num2) {
    resul = num1 >= num2
    return resul
}
    maior(5,6)
    console.log(resul)


function par (num1) {
    resul2 =  num1 % 2 == 0
    return resul2 
}
    par(6)
    console.log(resul2)


function mensagem (frase) {
    let caracteres = frase.length
    let maiusculo = frase.toUpperCase()
    console.log(caracteres)
    console.log(maiusculo) 
}
mensagem("ola eu sou pedro")


// RESPOSTA ESCRITA DE CODIGO 3

function soma (num1, num2) {
    resultado1 = num1 + num2
    return resultado1
}
function subtracao (num1, num2) {
    resultado2 =  num1 - num2
    return resultado2
}

function multi (num1, num2) {
    resultado3 = num1 * num2
    return resultado3
}
function divisao (num1, num2) {
    resultado4 =  num1 / num2
    return resultado4
}

num1 = +prompt("Digite um numero")
num2 = +prompt("Digite outro numero")

soma(num1, num2)
console.log(resultado1)

subtracao(num1,num2)
console.log(resultado2)

multi(num1, num2)
console.log(resultado3)

divisao(num1, num2)
console.log(resultado)




// RESPOSTA CODIGO DESAFIO 1
const recebe = (parametro) => {console.log(parametro)}
recebe("oioioioi")

const soma = (num1, num2) => {num1 + num2}

soma(5,6)
console.log(soma)


// RESPOSTA CODIGO DESAFIO 2

function pitagoras(cateto1, cateto2) {
    const hipotenusa = (cateto1*cateto1) + (cateto2*cateto2) 
    const hipotenusa2 = Math.sqrt(hipotenusa)
    return hipotenusa2
}

console.log(pitagoras(3,4))
