import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { cliente, clientes } from './data';
const app: Express = express();
app.use(express.json());
app.use(cors());


 // CRIA O CADASTRO DE UM NOVO CLIENTE 
app.post("/users", (req: Request, res: Response) => {
    try {
        const { name, cpf, birthdate } = req.body
        const newClient: cliente = {
            name, 
            cpf,
            birthdate,
            saldo: 0,
            extrato: []
        }
    clientes.push(newClient)
    res.send("Cadastro efetuado com sucesso!")

    } catch (error: any) {
        res.status(401).send({ messagem: error.message });
    }
})

// PEGA TODOS OS CLIENTES CADASTRADOS

app.get("/users", (req: Request, res: Response) => {
    res.send(clientes)
})

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

//PEGA O SALDO DO CLIENTE

app.get("/users/saldo", (req: Request, res:Response) => {
    try {
        
        const { name, cpf } = req.body
        const cliente = clientes.find((cliente) => {
            return cliente.name === name && cliente.cpf === cpf
        })
       
       res.send(cliente)
        
    } catch (error: any) {
        res.status(404).send({ message: error.message });
    }
})