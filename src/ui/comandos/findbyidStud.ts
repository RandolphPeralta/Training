import { IAccionadicional } from "../../abstration/interfaces";
import { Estudiante } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class FindStudCommand implements ICommand {
  constructor(private _studentService: IAccionadicional<Estudiante>) {}

  execute() {
    console.log("Ingrese el ID del estudiante a buscar: ")
            const id = scanf("%s")
    
            const result = this._studentService.findbyid(id)
    
            if (result.length === 0) {
                console.log("Estudiante no encontrado")
                return
            }
    
            console.log("\n===== RESULTADO =====")
            result.forEach(estudiante => console.log(estudiante))

  }

}