export type Libro = {
    id: string
    titulo: string
    autor: string
    disponible: boolean
}

export type Estudiante = {
    id: string
    nombre: string,
    identificacion: string
    grado: string
}

export type Prestamos = {
    idLibro: string,
    idCliente: string
}