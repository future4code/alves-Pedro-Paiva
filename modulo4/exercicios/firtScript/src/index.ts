console.log("hello world")
const numeronovo: number[] = [12,12,13,15]
console.log(numeronovo)

// type pessoa = {
// 	nome: string,
// 	idade: number
// }
// const pessoa1: pessoa = {
// 	nome: "Pedro",
// 	idade: 28 }
// console.log(pessoa1)

type carro = {
    marca: string,
    capacidade: number,
    flex: boolean
}
const onix: carro = {
    marca: "chevrolet", 
    capacidade: 45,
    flex: true
}
const carros: carro[] = [onix]

console.table(carros)