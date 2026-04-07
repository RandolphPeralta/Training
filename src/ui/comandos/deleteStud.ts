import { IAccionadicional } from "../../abstration/interfaces";
import { Estudiante } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class EliminarEstudianteCommand implements ICommand {
  constructor(private _studentService: IAccionadicional<Estudiante>) {}

  execute() {
    console.log("Ingrese el ID del estudiante a eliminar: ")
            const id = scanf("%s")
    
            const status = this._studentService.delete(id)
            console.log(status ? "Eliminado" : "No encontrado")

  }

}