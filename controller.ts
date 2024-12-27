import { Request, Response } from "express";
import { db, todos } from "./connect";
import { eq } from "drizzle-orm";


export async function createToDo(req: Request, res: Response) {
    try {
        const { content } = req.body
        await db.insert(todos).values({ content: content })
        res.status(200).json({ success: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ success: false })
    }
}

export async function getTodos(req: Request, res: Response) {
    try {
        const result = await db.select().from(todos)
        console.log(result)
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ success: false })
    }
}

export async function deleteTodo(req: Request, res: Response) {
    try {
        const todo_id = req.params.todo_id
        console.log(todo_id)
        const result = await db.delete(todos).where(eq(todos.todo_id, parseInt(todo_id)))
        res.status(200).json({ success: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ success: false })
    }
}
