import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import {createStudent} from "./endpoints/CreateStudentadd"
import {getStudent} from "./endpoints/GetAllStudent"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)

app.post("/createStudent",createStudent)

app.get("/GetAllStudent",getStudent)

