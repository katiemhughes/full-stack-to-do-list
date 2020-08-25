const { addTodo } = require("../models/todo-model");
const Todo = require("../models/todo-model");

exports.addTodo = function (req, res, next) {
    const { todo } = req.body;

    Todo.findOne({todo}, (err, todo) => {
        if(err) return next(err);

        if(todo)
            res.status(400).json({message: {msgBody: "Task already exists", msgError: true}});
        else {
            const newTodo = new Todo({todo});

            newTodo.save(err => {
                if(err) return next(err)
                else
                    res.status(201).json({message: {msgBody: "Task successfully added!", msgError: false}});
            });
        }
    });
}

exports.index = function (req, res, next) {
    Todo.get(function (err, todos) {
        if(err) return next(err);
        res.json({
            status: "Success",
            message: "Tasks retrieved successfully",
            data: todos
        });
    });
};

exports.sendTodo = function (req, res, next) {
    getTodo(req.params.todo)
    .then(todo => {
        if (todo === null) {
            res.status(400).send({msg: "Invalid entry"})
        } else {
            res.status(200).send({todo});
        }
    })
    .catch(next)
}

exports.removeTodo = async (req, res, next) => {
    const todoExists = await Todo.exists({ todo: req.params.todo })
    if (!todoExists) {
        res.status(400).send({msg: "Task does not exist"})
    } else {
        Todo.findOneAndRemove(
            {todo: req.params.todo}, function (err) {
                if (err) return res.status(400).send({msg: "Invalid task"});
                res.json({
                    status: "Success",
                    message: "Task successfully deleted"
                });
            });
    }
}
