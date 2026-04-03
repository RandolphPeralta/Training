import { IAccionadicional } from "../abstration/interfaces";
import { Estudiante } from "../modelsave/type";

export class StudentService implements IAccionadicional<Estudiante>{

    constructor(private memorybook: IAccionadicional<Estudiante>){}

    create(item: Estudiante): boolean {
       return this.memorybook.create(item)
    }
    
    read(): Estudiante[] {
        return this.memorybook.read()
    }

    update(id: string, data: Estudiante): boolean {
        return this.memorybook.update(id, data)
    }
    
    delete(id: string): boolean {
        return this.memorybook.delete(id)
    }

    findbyid(id: string): Estudiante[] {
        return this.memorybook.findbyid(id)
    }
    
}