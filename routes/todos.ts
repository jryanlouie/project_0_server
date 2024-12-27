import express from "express"
import { createToDo, deleteTodo, getTodos } from "../controller"

const todos = express.Router()

todos.route('/').post(createToDo).get(getTodos).delete()
todos.route("/:todo_id").delete(deleteTodo)

export default todos
