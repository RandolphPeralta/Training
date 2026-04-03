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
    id: string,
    idLibro: string, 
    idCliente: string, 
    fechaPrestamo: Date; 
    fechaDevolucion?: Date;
}

export type Prestamo = {
    id: string,
    libro: Libro,
    estudiante: Estudiante,
    fechaPrestamo: Date; 
    fechaDevolucion?: Date;
}