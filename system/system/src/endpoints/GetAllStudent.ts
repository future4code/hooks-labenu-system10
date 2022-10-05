import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_Student } from "../database/tableNames"
import { Estudante } from "../models/CreateStudent"

export const getStudent=async(req:Request,res:Response)=>{
    let errorCode:number=400
    try{
        const result=await connection(TABLE_Student).select()
        res.status(200).send({Estudante:result})

    }catch(error){
        res.status(errorCode).send({ message: error.message })

    }

}