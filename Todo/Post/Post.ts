import express from "express"
const routes: express.Router = express.Router();
import todolist from './../../Config/Model/TodoSchema'


routes.get("/get", (req: express.Request, res: express.Response) => {
    res.send({ mess: "jhal dab chokra" })
})

routes.post('/createTodo', async (req: express.Request, res: express.Response) => {
    const createTodo = await new todolist(req.body)
    createTodo.save()
        .then(() => {
            res.send({ message: "Todo Ache wyo" });
        })
        .catch((err) => {
            console.log(err);
        })
})




routes.delete('/delteTodo', async (req: express.Request, res: express.Response) => {
    await todolist.findOneAndDelete(req.body).then(() => {
        res.send({ message: "Todo Ache wyo" });
    })
        .catch((err) => {
            console.log(err);
        })
})


routes.put('/updateTodo', async (req: express.Request, res: express.Response) => {
    await todolist.findOneAndUpdate(req.body, { addTodo: "Qayoom2" }).then(() => {
        res.send({ message: "Todo Ache wyo" });
    })
        .catch((err) => {
            console.log(err);
        })
})

routes.get('/gettodo', async (req: express.Request, res: express.Response) => {
    let allTodo = await todolist.find()
    res.send({ message: allTodo });
})

module.exports = routes;