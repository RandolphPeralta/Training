export interface ISave<T> {
    create(item: T): boolean
    delete(id: string): boolean
}

export interface IAction<T> extends ISave<T> {
    read(): Array<T>
    update(id: string, data: T): boolean
}

export interface IAccionadicional<T> extends IAction<T> {
    findbyid(id: string): Array<T>
}