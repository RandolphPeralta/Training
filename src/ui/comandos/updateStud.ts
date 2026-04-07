import { IAccionadicional } from "../../abstration/interfaces";
import { Estudiante } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class UpdateStudentCommand implements ICommand {
  constructor(private _studentService: IAccionadicional<Estudiante>) {}

  execute() {
    console.log("Ingrese el ID del estudiante a actualizar: ")
            const id = scanf("%s")
    
            const libro: Estudiante = {
                id: id,
                nombre: "",
                identificacion: "",
                grado: ""
            }
    
            Object.entries(libro).forEach(([key]) => {
                console.log(`Ingrese ${key}: `)
                const value = scanf("%s")
                libro[key as keyof Estudiante] = value
            })
    
            const status = this._studentService.update(id, libro)
            console.log(status ? "Actualizado" : "No encontrado")

  }

}