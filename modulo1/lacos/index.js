// RESPOSTA INTERPRETAÇÃO 1
// enquanto 








// RESPOSTA ESCRITA DE CODIGO 1

// let pets = +prompt("digite quantos animais vc tem")
// const nomesDosPets = []

// if (pets > 0) {
//     for (let i =0; i < pets; i++){
//         nomeDoPet = prompt("Digite o nome do seu pet")
//         nomesDosPets[i] = nomeDoPet
//     }
//     console.log(nomesDosPets)
// }
// else {console.log("Que pena. Voce pode adotar um pet!")}




// RESPOSTA ESCRITA DE CODIGO 2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


function imprimir(valores) {
    for (let i = 0; i < valores.length; i++) {
        console.log(valores[i])
    }
}
imprimir (arrayOriginal)



function imprimir10 (valores) {
    for (let i = 0; i < valores.length; i++) {
        console.log(valores[i]/10)
    }
}
imprimir10(arrayOriginal)



const pares = []
function apenasPares(valores) {
    
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 == 0) 
             {pares[i] = valores[i]}
        else {}
    }
    console.log(pares)
}
apenasPares(arrayOriginal)




function imprimirTudo (valores) {
    const novaArray = []
    for (let i = 0; i < valores.length; i++) {
        novaArray[i] = (`O elemento do index ${i} é ${valores[i]}`)
    }
    console.log(novaArray)
}
imprimirTudo(arrayOriginal)