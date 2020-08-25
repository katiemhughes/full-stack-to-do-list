const apiRouter = require("express").Router();

const todoCtrl = require("../controllers/todo-ctrl");

apiRouter.get("/todos", (req, res) => {
    res.send("You have requested a todo")
})

apiRouter.get("todos/:todo", (req, res) => {
    res.send(`You have requested for ${req.params.todo}`)
})

apiRouter.route("/todos")
    .post(addTodo)
    .get(index);

//apiRouter.route("/todos/todoname")
    //.get(sendTodo)
    //.delete(removeTodo);

//post("/", todoCtrl.createItem)
//apiRouter.get("/", todoCtrl.getTodos);

module.exports = apiRouter;