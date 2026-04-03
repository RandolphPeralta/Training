import { IAccionadicional } from "../abstration/interfaces";
import { Prestamo } from "../modelsave/type";

export class LoanService implements IAccionadicional<Prestamo> {

    constructor(private memoryloan: IAccionadicional<Prestamo>){}

    create(item: Prestamo): boolean {
       return this.memoryloan.create(item)
    }
    
    read(): Prestamo[] {
        return this.memoryloan.read()
    }

    update(id: string, data: Prestamo): boolean {
        return this.memoryloan.update(id, data)
    }
    
    delete(id: string): boolean {
        return this.memoryloan.delete(id)
    }

    findbyid(id: string): Prestamo[] {
        return this.memoryloan.findbyid(id)
    }
    
}