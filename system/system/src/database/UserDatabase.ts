import BaseDatabase from "./BaseDatabase";
import { TABLE_Student } from "./tableNames";



export class UserDatabase extends BaseDatabase{
public async createStudent(){
    const result= await this.connection(TABLE_Student).select()
}
}