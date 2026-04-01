import { IAccionadicional } from "../abstration/interfaces"

export class InMemoryService implements IAccionadicional {
    private databaseInMemory: Array<any> = []

    create<T>(item: T): boolean {
        return this.databaseInMemory.push(item) > 0
    }

    read<T>(): Array<T> {
        return this.databaseInMemory
    }

    update<T>(id: string, data: T): boolean {

        let indexResult = this.databaseInMemory.findIndex(
            (item: any) => item.id === id
        )

        if (indexResult === -1)
            return false

        this.databaseInMemory[indexResult] = data;
        return true;
    }

    delete(id: string): boolean {

        let indexResult = this.databaseInMemory.findIndex(
            (item: any) => item.id === id
        )

        if (indexResult === -1)
            return false

        this.databaseInMemory.splice(indexResult, 1)
        return true;
    }

    findbyid<T>(id: string): Array<T> {
        return this.databaseInMemory.filter((item: any) => item.id === id)
    }
}