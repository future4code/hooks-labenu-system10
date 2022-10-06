
export class Docente{
    public id:Number
    public name:string
    public email:string
    public data_nasc:string
    public turma_id:Number
    public especialidade:["JS","CSS","React","Typescript","POO"]
    
    constructor(id:Number,name:string,email:string,data_nasc:string,turma_id:Number,especialidade:[]){
        this.id=id,
        this.name=name,
        this.email=email,
        this.data_nasc=data_nasc,
        this.turma_id=turma_id,
        especialidade
    }

    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getEmail(){
        this.email
    }
    getData_nasc(){
        this.data_nasc
    }
    getData_id(){
        return this.turma_id
    }
    getEspecialidade(){
        this.especialidade
    }
}
