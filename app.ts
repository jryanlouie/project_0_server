import express from "express"
import cors from "cors"
import todos from "./routes/todos"
import path from "path"
import { readFileSync } from "fs"

const app = express()
const port = process.env.PORT || 3333

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "./dist")))
const htmlContent = readFileSync(
    path.join(__dirname, "./dist/index.html"), "utf-8"
)

app.get("/", (req, res) => { res.send(htmlContent) })

app.use('/api/todos', todos)

app.listen(port, () => console.log(`Server listening on port: ${port}`))
