import { drizzle } from "drizzle-orm/node-postgres"
import { pgTable, serial, varchar } from "drizzle-orm/pg-core"
import pg from "pg"

const Pool = pg.Pool

const connectionString = 'postgresql://postgres:ivmmLrLElxyMGRqntirwJCbZxkaODwlN@autorack.proxy.rlwy.net:12819/railway'

export const pool = new Pool(
    { connectionString }
)

export const db = drizzle(pool)

export const todos = pgTable('todos', {
    todo_id: serial('todo_id').primaryKey(),
    content: varchar("content")
})