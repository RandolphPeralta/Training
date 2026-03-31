export interface IAccion {
    create<T>(item: T): boolean
    read<T>(): Array<T>
    update<T>(id: string, data: T): boolean
    delete(id: string): boolean
}
export interface Accionadicional extends IAccion{
    findbyid<T>(id: string): Array<T>
}


