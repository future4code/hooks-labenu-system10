import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_docente } from "../database/tableNames"
import { docente } from "../models/Docente"

export const createDocente=async(req:Request,res:Response)=>{
  let ErrorCode:number=400
  try{
    
    const name=req.body.name
    const email=req.body.email
    const data_nasc=req.body.data_nasc
    const especialidade=req.body.especialidade
    if(!name||!email||!data_nasc||!especialidade){
        throw new Error("Erro no Body De uma olhadinha ")

    }
    const criandoDocente=new docente (
        Date.now(),
        name,
        email,
        data_nasc,
        Date.now(),
        especialidade
    )
    await connection(TABLE_docente).insert({
        id:criandoDocente.getId(),
        name:criandoDocente.getName(),
        data_nasc:criandoDocente.getData_nasc(),
        turma_id:criandoDocente.getData_id(),
        especialidade:criandoDocente.getEspecialidade()
        

    })
    res.status(201).send({message:"Criado Com Sucesso",})

  }catch(error:any){
    res.status(ErrorCode).send({message:error.message})

  }

}