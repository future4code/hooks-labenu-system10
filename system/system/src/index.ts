import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import {getStudent} from "./endpoints/getAllStudent"
import {createDocente} from "./endpoints/createDocente"
import {createStudent} from "./endpoints/createStudent"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)


app.get("/GetAllStudent", getStudent)

app.post("/CreateDocente", createDocente)

app.post("/CreateStudent",createStudent)