
export class Estudante {
    public id:Number
    public name:string
    public email:string
    public data_nasc:string
    public turma_id:Number
    public hobbies:[]

    constructor(id:Number,name:string,email:string,data_nasc:string,turma_id:Number,hobbies:[]){
        this.id=id,
        this.name=name,
        this.email=email,
        this.data_nasc=data_nasc,
        this.turma_id=turma_id
        this.hobbies=hobbies
    }
  getid(){
    return this.id
  }
  getname(){
    return this.name
  }
  getemail(){
    return this.email
  }
  getData(){
    return this.email
  }
  getTurma(){
    return this.turma_id
  }
  gethobbies(){
    return this.hobbies
  }

}
    
