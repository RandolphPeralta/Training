import { IAccionadicional } from "../../abstration/interfaces";
import { Prestamo } from "../../modelsave/type";
import scanf from 'scanf';
import { ICommand } from "../../abstration/interfaces";

export class UpdateLoanCommand implements ICommand {
    constructor(private _loanService: IAccionadicional<Prestamo>) { }

    execute() {
        console.log("Ingrese ID del préstamo:")
        const id = scanf("%s")

        const prestamos = this._loanService.read()

        const prestamo = prestamos.find(prestado => prestado.id === id)

        if (!prestamo) {
            console.log("Préstamo no encontrado")
            return
        }

        console.log("Ingrese nueva fecha devolución (YYYY-MM-DD):")
        const fecha = scanf("%s")

        prestamo.fechaDevolucion = new Date(fecha)

        const status = this._loanService.update(id, prestamo)

        console.log(status ? "Préstamo actualizado" : "Error")
    }
}
