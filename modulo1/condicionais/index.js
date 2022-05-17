// RESPOSTA INTERPRETAÇÃO 1
// o codigo pede um numero e verificar se o resto da divisão dele por 2
// é 0, sendo um numero par e então diz se passou no teste se for par ou
// não passou se for impar.


// o codigo 2 pede pra escolher uma fruta e mostra o preço dela. 
// se for maça. será 2,25
// se não tiver o BREAK, a função continuará a ser executada até o DEFAULT. 


// a primeira linha pede e recebe um numero do usuário.
// 


// let idade = +prompt("Digite sua idade")
//     if (idade >= 18){
//         console.log("Você pode dirigir")
//     }
//     else {console.log("Você não pode dirigir")}



// let turno = prompt.("Digite M para matutino, V para Vespertino ou N para noturno")
// if (turno == "M") {
//     console.log("Bom Dia!")
//     }
//     else if (turno == "V") {
//         console.log("Boa Tarde!")
//     }
//     else if (turno == "N") {
//         console.log("Boa Noite!")m
//     }

    
    // let turno = prompt("Digite M para matutino, V para Vespertino ou N para noturno").toUpperCase()

    // switch (turno) {
    //     case 'M':
    //         console.log("Bom Dia!")
    //     break
    //     case 'V':
    //         console.log("Boa Trade!")
    //     break
    //     case 'N':
    //         console.log("Boa Noite!")
    //     break

    //     default:
    //         break 
    // }


    let genero = prompt("Qual o genero do filme?").toLowerCase()
    let preco = +prompt("qual o preco do ingresso?")

    if (genero == 'fantasia' && preco <15 ) {
        console.log("Bom Filme!")
    }
    else {console.log("Escolha outro filme")}

    