import {IAccion} from "../abstration/interfaces"

export class InMemoryService implements IAccion {
    private databaseInMemory: Array<any> = []

    create<T>(playload: T): boolean {
        return this.databaseInMemory.push(playload) > 0
    }
    read<T>(): Array<T> {
        return this.databaseInMemory
    }
    update<T>(id: string, data: T): boolean {
        let status = true;
        let indexResult = this.databaseInMemory.findIndex(([key, value]) => id === value)

        if (indexResult === -1)
            status = false

        this.databaseInMemory[indexResult] = data;
        return status;
    }
    delete(id: string): boolean {
        let status = true;
        let indexResult = this.databaseInMemory.findIndex(([key, value]) => id === value)

        if (indexResult === -1)
            status = false

        this.databaseInMemory.splice(indexResult, 1)
        return status;
    }

    findbyid<T>(id: string) {
        this.databaseInMemory
        // Toca completar la logica
    }
    
}