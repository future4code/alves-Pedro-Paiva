// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = +prompt("Digite a altura")
  const largura = +prompt("digite a largura")
  console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const ano = +prompt("Qual o ano atual?")
  const nascimento = +prompt("qual ano vc nasceu?")
  console.log(ano - nascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
     const imc = peso / (altura*altura)
     return imc; 

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("qual o seu nome?")
  const idade = +prompt("qual sua idade?")
  const email = prompt("qual o teu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("digite sua cor favorita")
  const cor2 = prompt("mais uma cor favorita")
  const cor3 = prompt("mais uma cor favorita")
  
  const favoritas =[cor1, cor2, cor3]
  console.log(favoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const texto = string.toUpperCase()
  return texto

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const totalIngressos = custo / valorIngresso;
  return totalIngressos;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
   return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ultimo = array[array.length-1];
  const primeiro = array[0];

  array[0] = ultimo
  array[array.length-1] = primeiro

  return array;
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
   const iguais = string2.toUpperCase() == string1.toUpperCase();
   return iguais;

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = +prompt("digite o ano atual")
  const anoNasci = +prompt("digite o ano de nascimento")
  const anoId = +prompt("digite o ano de emissao da id")
  
  const idade = anoAtual - anoNasci
  const idadeEmissao = anoAtual - anoId

  const jovens = idade <= 20 && idadeEmissao >= 5
  const adultos = idade > 20 && idade <= 50 && idadeEmissao >= 10
  const idosos =  idade > 50 && idadeEmissao >= 15

const renova = jovens || adultos || idosos
return console.log(renova); 

  
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multi400 = ano % 400 == 0;
  const multi4 = ano % 4 == 0 && !(ano %100 == 0);
  const naoBissexto = !multi400 && !multi4;

  const resultado = multi400 || multi4;
  return resultado;

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const deMaior = prompt("Voce tem mais de 18 anos?")
  const medio = prompt("Voce possui ensino medio completo?")
  const disponibilidade = prompt ("voce possui disponibilidade exclusiva durante os horarios do curso?")

  const validade = deMaior.includes("sim") && medio.includes("sim") && disponibilidade.includes("sim");
  return console.log(validade);

}