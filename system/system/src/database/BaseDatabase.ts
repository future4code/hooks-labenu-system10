import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

 template-criado
export abstract class BaseDatabase{
  protected   connection = knex({

export class BaseDatabase{
  protected static  connection = knex({
 master
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      multipleStatements: true
   },
});
}

export default BaseDatabase