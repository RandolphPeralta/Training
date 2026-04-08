import { IAccionadicional } from "../../abstration/interfaces";
import { Prestamo } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class ReadLoanCommand implements ICommand {
  constructor(private _loanService: IAccionadicional<Prestamo>) {}

  execute() {
    const prestamos = this._loanService.read()

        console.log("\n===== PRÉSTAMOS =====")

        if (prestamos.length === 0) {
            console.log("No hay préstamos")
            return
        }

        prestamos.forEach(p => {
            console.log({
                id: p.id,
                libro: p.libro.titulo,
                estudiante: p.estudiante.nombre,
                fechaPrestamo: p.fechaPrestamo,
                fechaDevolucion: p.fechaDevolucion || "Pendiente"
            })
        })
  }

}