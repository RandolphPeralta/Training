import { IAccionadicional } from "../abstration/interfaces";
import { Libro } from "../modelsave/type";

export class BookService implements IAccionadicional<Libro>{

    constructor(private memorybook: IAccionadicional<Libro>){}

    create(item: Libro): boolean {
       return this.memorybook.create(item)
    }
    
    read(): Libro[] {
        return this.memorybook.read()
    }

    update(id: string, data: Libro): boolean {
        return this.memorybook.update(id, data)
    }
    
    delete(id: string): boolean {
        return this.memorybook.delete(id)
    }

    findbyid(id: string): Libro[] {
        return this.memorybook.findbyid(id)
    }
    
}