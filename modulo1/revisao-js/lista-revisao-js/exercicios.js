// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const novoArray = array.filter((numeros) => {
      return numeros % 2 === 0
  })
  return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novoArray = array.filter((numeros) => {
        return numeros % 2 === 0
    })
    const novoArrayElevado = novoArray.map((numeros) => {
        return numeros*numeros
    })
    return novoArrayElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let i = 0
  let maior = 0
while (i < array.length) {
    if (array[i] > maior) {
        maior = array[i]
    }
    i++
}
return maior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objeto = {maiorNumero: "", maiorDivisivelPorMenor:"", diferenca:"" }
    if (num1 > num2) {
        objeto.maiorNumero = num1
        objeto.diferenca = num1 - num2
        objeto.maiorDivisivelPorMenor = num1 % num2 ===  0
    } else {objeto.maiorNumero = num2, objeto.diferenca = num2 - num1,objeto.maiorDivisivelPorMenor = num2 % num1 ===  0}
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let menorPar = []
   let i 
   for (i = 0; i <= n; i++) {
       if(i % 2 === 0 ) 
            {menorPar[i] = i} 
   }
return menorPar
}





// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB && ladoB !== ladoC || ladoA !== ladoB && ladoB === ladoC || ladoA === ladoC && ladoC !== ladoB){
        return "Isósceles" }
        else if (ladoA !== ladoB !== ladoC)
         {return "Escaleno" }
    


}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}



// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const filmes = {nome: "", ano: "", diretor:"", atores: "",}
   filmes.nome = filme.nome
   filmes.ano = filme.ano
   filmes.diretor = filme.diretor
   filmes.atores = filme.atores
   return `Venha assistir ao filme ${filmes.nome}, de ${filmes.ano}, dirigido por ${filmes.diretor} e estrelado por ${filmes.atores}.`
    
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima =  {...pessoa, nome: "ANÔNIMO"}
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const autorizados = pessoas.filter((pessoa) => {
       return pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5  }) 
    }



// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}




// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}