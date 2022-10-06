import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_Student } from "../database/tableNames"
import { Estudante } from "../models/Estudante"

export const createStudent=async(req:Request,res:Response)=>{
    let errorCode:number=400  
    try{
        const name=req.body.name
        const email=req.body.email
        const data_nasc=req.body.data_nasc
        const hobbies=req.body.hobbies
        if(!name|| !email ||!data_nasc||!hobbies){
            throw new Error("Error no Body ")
        }
        const criandoStudent=new Estudante(
            Date.now(),
            name,
            email,
            data_nasc,
            Date.now(),
            hobbies,
            
        )
        await connection(TABLE_Student).insert({
            id:criandoStudent.getid(),
            name:criandoStudent.getname(),
            email:criandoStudent.getemail(),
            data_nasc:criandoStudent.getData(),
            turma_id:criandoStudent.getTurma(),
            hobbies:criandoStudent.gethobbies(),

        })
        res.status(201).send({message:"Criado Com Sucesso",})

        

    }catch(error:any){
        res.status(errorCode).send({message:error.message})

    }
    
}