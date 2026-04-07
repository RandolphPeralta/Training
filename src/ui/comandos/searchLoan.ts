import { IAccionadicional } from "../../abstration/interfaces";
import { Prestamo } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class BuscarPrestamoCommand implements ICommand {

    constructor(
        private _loanService: IAccionadicional<Prestamo>
      ) { }

    execute() {
        console.log("Ingrese ID del libro:")
                const idLibro = scanf("%s")
        
                const prestamos = this._loanService.read()
        
                const prestamo = prestamos.find(p =>
                    p.libro.id === idLibro && !p.fechaDevolucion
                )
        
                if (!prestamo) {
                    console.log("Libro disponible (no prestado)")
                    return
                }
        
                console.log("\n===== PRÉSTAMO ACTIVO =====")
                console.log({
                    libro: prestamo.libro.titulo,
                    estudiante: prestamo.estudiante.nombre,
                    fecha: prestamo.fechaPrestamo
                })

    }

}