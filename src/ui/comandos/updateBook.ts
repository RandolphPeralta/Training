import { IAccionadicional } from "../../abstration/interfaces";
import { Libro } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class UpdateStudentCommand implements ICommand {
  constructor(private _bookService: IAccionadicional<Libro>) {}

  execute() {
    console.log("Ingrese el ID del libro a actualizar:")
            const id = scanf("%s")
    
            console.log("Ingrese nuevo titulo:")
            const titulo = scanf("%s")
    
            console.log("Ingrese nuevo autor:")
            const autor = scanf("%s")
    
            console.log("¿Disponible? (1 = sí, 0 = no):")
            const disponible = scanf("%s") === "1"
    
            const libro: Libro = {
                id,
                titulo,
                autor,
                disponible
            }
    
            const status = this._bookService.update(id, libro)
            console.log(status ? "Libro actualizado" : "No encontrado")
  }
}
