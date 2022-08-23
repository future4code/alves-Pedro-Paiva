import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

//Exercicio 1

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from express, FUNCIONOU PEDRO")
})

//Exercicio 2

type bodyExerc2 = {
    id: number | string,
    name: string,
    phone: number, 
    email: string,
    website: string,
    posts: post[]
}

//Exercicio 3
const usuarios: bodyExerc2[] = [
    {
        id: 1,
        name: "Pedro",
        phone: 874596321, 
        email: "pedro@hotmail.com",
        website: "www.pedro.com.br",
        posts: [
            {
                postId: 1, 
                title: "meu primeiro post",
                body: "meu primeiro post, eu sou Pedro",
                userId: 1
            },
            {
                postId: 2, 
                title: "meu segundo post",
                body: "meu segundo post, eu sou Pedro",
                userId: 1
            }
        ]

 },
    {
        id: 2,
        name: "Julia Maria",
        phone: 996632578, 
        email: "Julia@hotmail.com",
        website: "www.julia.com.br",
        posts: [
            {
                postId: 3, 
                title: "meu primeiro post",
                body: "meu primeiro post, eu sou Julia",
                userId: 2
            },
            {
                postId: 4, 
                title: "meu segundo post",
                body: "meu segundo post, eu sou Julia",
                userId: 2
            }
        ]
        
    }
]

//Exercicio 4

app.get("/users", (req: Request, res: Response) => {
    console.log("funcionou uhuuu")
    res.send(usuarios)
    })
  
//Exercicio 5
type post = {
    postId: number, 
    title: string,
    body: string,
    userId: number
}

//Exercicio 7
app.get("/posts", (req: Request, res: Response)=> {
    console.log("funcionou tbm")
    const allPosts = usuarios.map((user) => {
        return user.posts
    }).flat()
    res.send(allPosts)
})

//Exercicio 8
app.get("/:usuarioId/posts", (req: Request, res: Response) => {
    const usuarioId = usuarios.id
})

app.listen(3003, () => {
    console.log("Servidor rodando em porta 3003")
})