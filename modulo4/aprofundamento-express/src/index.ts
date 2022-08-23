import express, { Request, Response} from "express";
import cors from "cors";
import { tarefas } from "./data";
const app = express();
app.use(express.json());
app.use(cors());

//Exercicio 1
app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//Exercicio 2

type tarefas = [{
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}]

//exercicio 5 
app.post("/tarefas", (req: Request, res: Response) => {
    const { userId, title, completed } = req.body
    const user = tarefas.find((user) => user.id === userId)

    if(user) {
        tarefas.push({
            id: Date.now().toString(),
            title: title,
            completed: completed
     })
     res.send("Tarefa criada com sucesso")
    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});