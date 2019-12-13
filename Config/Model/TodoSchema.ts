import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    addTodo:String,
})

const todoList = mongoose.model("todolist",todoSchema)

export default todoList;