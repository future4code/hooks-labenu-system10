import { Usuario } from "../SuperClasses/Usuario";

export class Docentes extends Usuario {
  constructor(
    protected id: string,
    protected nome: string,
    protected email: string,
    protected data_nasc: string,
    public turmaId: string,
    protected especialidades: []
  ) {
    super(id, nome, email, data_nasc, turmaId);
  }
  getEspecialidades(): [] {
    return this.especialidades;
  }
}