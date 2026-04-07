import { IAccionadicional } from "../../abstration/interfaces";
import { Libro, Prestamo } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class DevolverLibroCommand implements ICommand {

    constructor(
        private _bookService: IAccionadicional<Libro>,
        private _loanService: IAccionadicional<Prestamo>
      ) { }

    execute() {
        console.log("Ingrese ID del libro:")
                const idLibro = scanf("%s")
        
                const prestamos = this._loanService.read()
        
                const prestamo = prestamos.find(prestado =>
                    prestado.libro.id === idLibro && !prestado.fechaDevolucion
                )
        
                if (!prestamo) {
                    console.log("No hay préstamo activo para este libro")
                    return
                }
        
                prestamo.fechaDevolucion = new Date()
        
                this._loanService.update(prestamo.id, prestamo)
        
                prestamo.libro.disponible = true
                this._bookService.update(prestamo.libro.id, prestamo.libro)
        
                console.log("Libro devuelto correctamente")
    }

}
