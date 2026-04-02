export interface IAction<T> {
    create(item: T): boolean
    read(): Array<T>
    update(id: string, data: T): boolean
    delete(id: string): boolean
}

export interface IAccionadicional<T> extends IAction<T>{
    findbyid(id: string): Array<T>
}


