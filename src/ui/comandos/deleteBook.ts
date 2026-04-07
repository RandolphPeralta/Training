import { IAccionadicional } from "../../abstration/interfaces";
import { Libro } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class DeleteStudentCommand implements ICommand {
    constructor(private _bookService: IAccionadicional<Libro>) { }

    execute() {
        console.log("Ingrese el ID del libro a eliminar:")
        const id = scanf("%s")

        const status = this._bookService.delete(id)
        console.log(status ? "Libro eliminado" : "No encontrado")
    }
}