import express, { Request, response, Response } from 'express'
import cors from 'cors'
import { produtos } from './data';


const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
    res.send("A API está funcionando")
})


// Cadastra novo produto com ID ALEATORIO e dados vindo do body
app.post("/produtos", (req: Request, res: Response) => {
    const { name, price } = req.body
    produtos.push({
        id: Date.now().toString(),
        name: name, 
        price: price
    })
    res.send("Produto cadastrado com sucesso!")
    res.send(produtos)
})

app.get("/produtos", (req: Request, res: Response) => {
    try {
        res.send(produtos)
    } catch (error: any) {
        res.status(response.statusCode || 500).send({ message: error.message })
          }
})

app.put("/produtos/:nomedoproduto", (req: Request, res: Response) => {
    try {
        const { price } = req.body
        const nomedoproduto = req.params.nomedoproduto
        const produto = produtos.find((produto) => {
            return produto.name === nomedoproduto
        })
        if (produto) {
          const newprice = produtos.map((produto) => {
            produto.price = price
            
            })
            return produtos = newprice
        }
                
           
            res.send("preco do produto alterado")
       

    } catch (error: any) {
        res.status(response.statusCode || 500).send({ message: error.message })
        
    }
})



app.listen(3003, function () {
    console.log("Meu servidor está rodando na porta 3003");
});