import { IAccionadicional } from "../../abstration/interfaces";
import { Libro } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class FindBookCommand implements ICommand {
  constructor(private _bookService: IAccionadicional<Libro>) {}

  execute() {
    console.log("Ingrese el ID del libro:")
            const id = scanf("%s")
    
            const result = this._bookService.findbyid(id)
    
            if (result.length === 0) {
                console.log("Libro no encontrado")
                return
            }
    
            console.log("\n===== RESULTADO =====")
            result.forEach(libro => console.log(libro))

  }
}