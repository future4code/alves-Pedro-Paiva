// INTEPRETAÇÃO DE CODIGO 1
// será impresso cada item do array. 

  // QUESTÃO 2 será impresso apenas o nome das pessoas do array; 

 // QUESTÃO 3 - será impresso tudo exceto o que tem Chijo. 

 

 // ESCRITA DE CODIGO 1


//  const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]


// const apenasNomes = pets.map((animais) => {
//     return animais.nome
// })
// console.log(apenasNomes)


// const apenasSalsicha = pets.filter((animais) => {
//     return animais.raca === "Salsicha"
// })
// console.log(apenasSalsicha)


// const apenasPoodles = pets.filter((animais) => {
//     if (animais.raca === "Poodle") {
//         return animais.nome
//     }
// })

// const promocao 


// CODIGO QUESTÃO 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const apenasNomes = produtos.map((produto) => {
     return produto.nome;
 })
console.log(apenasNomes)


const desconto = produtos.map((produto) => {
    return (produto.nome + produto.preco*0.95)
})
console.log(desconto)

const apenasBebidas = produtos.filter((produto) =>{
    return produto.categoria === "Bebidas"
} )
console.log(apenasBebidas)

const apenasYpe = produtos.filter((produto) => {
    
})