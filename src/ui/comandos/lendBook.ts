import { IAccionadicional } from "../../abstration/interfaces";
import { Estudiante,Libro, Prestamo } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class LendBookCommand implements ICommand {

    constructor(
        private _studentService: IAccionadicional<Estudiante>,
        private _bookService: IAccionadicional<Libro>,
        private _loanService: IAccionadicional<Prestamo>
      ) { }

    execute() {
        console.log("Ingrese ID para el prestamo:")
                const idPrestamo = scanf("%s")
        
                console.log("Ingrese ID del libro:")
                const idLibro = scanf("%s")
        
                console.log("Ingrese ID del estudiante:")
                const idCliente = scanf("%s")
        
                const libro = this._bookService.findbyid(idLibro)[0]
        
                if (!libro) {
                    console.log("Libro no existe")
                    return
                }
        
                if (!libro.disponible) {
                    console.log("Libro no disponible")
                    return
                }
        
                const estudiante = this._studentService.findbyid(idCliente)[0]
        
                if (!estudiante) {
                    console.log("Estudiante no existe")
                    return
                }
        
                const prestamo: Prestamo = {
                    id: idPrestamo,
                    libro,
                    estudiante,
                    fechaPrestamo: new Date()
                }
        
                const status = this._loanService.create(prestamo)
        
                if (!status) {
                    console.log("Error al prestar libro")
                    return
                }
        
                libro.disponible = false
                this._bookService.update(libro.id, libro)
        
                console.log("Libro prestado correctamente")
    }
}