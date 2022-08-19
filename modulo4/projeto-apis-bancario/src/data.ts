export type cliente = {
    name: string,
    cpf: number,
    birthdate: number, 
    saldo: number, 
    extrato: extrato[]
}

export type extrato = {
    valor: number,
    date: number, 
    description: string
}

export const clientes: cliente[] = [
    
]