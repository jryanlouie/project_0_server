import express from "express"
import { createToDo } from "../controller"

const todos = express.Router()

todos.route('/').post(createToDo)

export default todos