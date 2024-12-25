import express from "express"

const app = express()
const port = process.env.PORT || 3333

app.get("/", (req, res) => { res.send("welcome") })

app.listen(port, () => console.log(`Server listening on port: ${port}`))
