import { IAccionadicional } from "../../abstration/interfaces";
import { Estudiante } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class CreateStudentCommand implements ICommand {
  constructor(private _studentService: IAccionadicional<Estudiante>) {}

  execute() {
    const libro: Estudiante = {
                id: "",
                nombre: "",
                identificacion: "",
                grado: ""
            }
    
            Object.entries(libro).forEach(([key]) => {
                console.log(`Ingrese ${key}: `)
                const value = scanf("%s")
                libro[key as keyof Estudiante] = value
            })
    
            const status = this._studentService.create(libro)
            console.log(status ? "Estudiante creado" : "Error")

  }


}