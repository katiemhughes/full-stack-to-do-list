const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: { type: String, required: true},
},
    { timestamps: true },
);

const Todo = (module.exports = mongoose.model("Todo", todoSchema));

module.exports.get = function (callback, limit) {
    Todo.find(callback).limit(limit);
};

module.exports.getTodo = function(username) {
    return Todo.findOne({todo})
    .then((user) => {
        return user;
    });
};