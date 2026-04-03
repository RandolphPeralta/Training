import { IAccionadicional } from "../abstration/interfaces";
import { Estudiante } from "../modelsave/type";

export class StudentService implements IAccionadicional<Estudiante>{

    constructor(private memorystudent: IAccionadicional<Estudiante>){}

    create(item: Estudiante): boolean {
       return this.memorystudent.create(item)
    }
    
    read(): Estudiante[] {
        return this.memorystudent.read()
    }

    update(id: string, data: Estudiante): boolean {
        return this.memorystudent.update(id, data)
    }
    
    delete(id: string): boolean {
        return this.memorystudent.delete(id)
    }

    findbyid(id: string): Estudiante[] {
        return this.memorystudent.findbyid(id)
    }
    
}