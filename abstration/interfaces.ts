export interface IAction {
    create<T>(item: T): boolean
    read<T>(): Array<T>
    update<T>(id: string, data: T): boolean
    delete(id: string): boolean
}

export interface IAccionadicional extends IAction{
    findbyid<T>(id: string): Array<T>
}


