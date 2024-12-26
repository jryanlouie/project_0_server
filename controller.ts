import { Request, Response } from "express";
import { db, todos } from "./connect";


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
