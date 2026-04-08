import { IAccionadicional } from "../../abstration/interfaces";
import {Libro} from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class CreateBookCommand implements ICommand {
  constructor(private _bookService: IAccionadicional<Libro>) {}

  execute() {
    console.log("Ingrese id:")
            const id = scanf("%s")
    
            console.log("Ingrese titulo:")
            const titulo = scanf("%s")
    
            console.log("Ingrese autor:")
            const autor = scanf("%s")
    
            console.log("¿Disponible? (1 = sí, 0 = no):")
            const disponible = scanf("%s") === "1"
    
            const libro: Libro = {
                id,
                titulo,
                autor,
                disponible
            }
    
            const status = this._bookService.create(libro)
            console.log(status ? "Libro creado" : "Error")

  }

}