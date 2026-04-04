import scanf from 'scanf';
import { IAccionadicional } from "../abstration/interfaces"
import { Estudiante, Libro, Prestamo } from "../modelsave/type"

export class View {

    constructor(
        private _studentService: IAccionadicional<Estudiante>,
        private _bookService: IAccionadicional<Libro>,
        private _loanService: IAccionadicional<Prestamo>
    ) { }

    buildMenuAplicaction(): void {
        console.log("============ Bienvenido =============")
        console.log("1. Registrar Estudiante");
        console.log("2. Listar Estudiantes");
        console.log("3. Actualizar Estudiante");
        console.log("4. Eliminar Estudiante");
        console.log("5. Buscar estudiante")
        console.log("6. Registrar Libro");
        console.log("7. Mostrar Libros");
        console.log("8. Actualizar Libro");
        console.log("9. Eliminar Libro");
        console.log("10. Buscar Libro");
        console.log("11. Prestar Libro")
        console.log("12. Devolver Libro")
        console.log("13. Mostrar Prestamos")
        console.log("14. Buscar Prestamo")
        console.log("15. Actualizar Prestamo")
        console.log("0. Salir del sistema");
        console.log()
        console.log(`Que opcion desea: `)
        const selectedOption = scanf("%s");

        this.processOptionSelected(selectedOption)
    }

    processOptionSelected(option: string): void {
        switch (option) {
            case "1":
                this.createStudent();
                this.pause()
                this.buildMenuAplicaction()
                break
            case "2":
                this.readStudents();
                this.pause()
                this.buildMenuAplicaction()
                break
            case "3":
                this.updateStudent();
                this.pause()
                this.buildMenuAplicaction()
                break
            case "4":
                this.deleteStudent();
                this.pause()
                this.buildMenuAplicaction()
                break
            case "5":
                this.findStudentById();
                this.pause()
                this.buildMenuAplicaction()
                break
            case "6":
                this.createBook()
                this.pause()
                this.buildMenuAplicaction()
                break
            case "7":
                this.readBooks()
                this.pause()
                this.buildMenuAplicaction()
                break
            case "8":
                this.updateBook()
                this.pause()
                this.buildMenuAplicaction()
                break
            case "9":
                this.deleteBook()
                this.pause()
                this.buildMenuAplicaction()
                break
            case "10":
                this.findBookById()
                this.pause()
                this.buildMenuAplicaction()
                break
            case "11":
                this.lendBook()
                this.pause()
                this.buildMenuAplicaction()
                break
            case "12":
                this.returnBook()
                this.pause()
                this.buildMenuAplicaction()
                break
            case "13":
                this.readLoans()
                this.pause()
                this.buildMenuAplicaction()
                break
            case "14":
                this.findLoanByBook()
                this.pause()
                this.buildMenuAplicaction()
                break
            case "15":
                this.updateLoan()
                this.pause()
                this.buildMenuAplicaction()
                break
            case "0":
                console.log("Saliendo del sistema...");
                return
            default:
                console.log("Opción inválida")
                this.buildMenuAplicaction()

        }
    }

    private createStudent(): void {

        const libro: Estudiante = {
            id: "",
            nombre: "",
            identificacion: "",
            grado: ""
        }

        Object.entries(libro).forEach(([key]) => {
            console.log(`Ingrese ${key}: `)
            const value = scanf("%s")
            libro[key as keyof Estudiante] = value
        })

        const status = this._studentService.create(libro)
        console.log(status ? "Estudiante creado" : "Error")
    }

    private readStudents(): void {
        const estudiantes = this._studentService.read()

        console.log("\n===== LISTADO =====")

        estudiantes.forEach(estudiante => { console.log(estudiante) })
    }

    private updateStudent(): void {
        console.log("Ingrese el ID del estudiante a actualizar: ")
        const id = scanf("%s")

        const libro: Estudiante = {
            id: id,
            nombre: "",
            identificacion: "",
            grado: ""
        }

        Object.entries(libro).forEach(([key]) => {
            console.log(`Ingrese ${key}: `)
            const value = scanf("%s")
            libro[key as keyof Estudiante] = value
        })

        const status = this._studentService.update(id, libro)
        console.log(status ? "Actualizado" : "No encontrado")
    }

    private deleteStudent(): void {
        console.log("Ingrese el ID del estudiante a eliminar: ")
        const id = scanf("%s")

        const status = this._studentService.delete(id)
        console.log(status ? "Eliminado" : "No encontrado")
    }

    private findStudentById(): void {
        console.log("Ingrese el ID del estudiante a buscar: ")
        const id = scanf("%s")

        const result = this._studentService.findbyid(id)

        if (result.length === 0) {
            console.log("Estudiante no encontrado")
            return
        }

        console.log("\n===== RESULTADO =====")
        result.forEach(estudiante => console.log(estudiante))

    }

    private createBook(): void {

        console.log("Ingrese id:")
        const id = scanf("%s")

        console.log("Ingrese titulo:")
        const titulo = scanf("%s")

        console.log("Ingrese autor:")
        const autor = scanf("%s")

        console.log("¿Disponible? (1 = sí, 0 = no):")
        const disponible = scanf("%s") === "1"

        const libro: Libro = {
            id,
            titulo,
            autor,
            disponible
        }

        const status = this._bookService.create(libro)
        console.log(status ? "Libro creado" : "Error")
    }

    private readBooks(): void {
        const libros = this._bookService.read()

        console.log("\n===== LISTADO DE LIBROS =====")

        if (libros.length === 0) {
            console.log("No hay libros registrados")
            return
        }

        libros.forEach(libro => {
            console.log(libro)
        })
    }

    private updateBook(): void {

        console.log("Ingrese el ID del libro a actualizar:")
        const id = scanf("%s")

        console.log("Ingrese nuevo titulo:")
        const titulo = scanf("%s")

        console.log("Ingrese nuevo autor:")
        const autor = scanf("%s")

        console.log("¿Disponible? (1 = sí, 0 = no):")
        const disponible = scanf("%s") === "1"

        const libro: Libro = {
            id,
            titulo,
            autor,
            disponible
        }

        const status = this._bookService.update(id, libro)
        console.log(status ? "Libro actualizado" : "No encontrado")
    }

    private deleteBook(): void {

        console.log("Ingrese el ID del libro a eliminar:")
        const id = scanf("%s")

        const status = this._bookService.delete(id)
        console.log(status ? "Libro eliminado" : "No encontrado")
    }

    private findBookById(): void {

        console.log("Ingrese el ID del libro:")
        const id = scanf("%s")

        const result = this._bookService.findbyid(id)

        if (result.length === 0) {
            console.log("Libro no encontrado")
            return
        }

        console.log("\n===== RESULTADO =====")
        result.forEach(libro => console.log(libro))
    }

    private lendBook(): void {

        console.log("Ingrese ID para el prestamo:")
        const idPrestamo = scanf("%s")

        console.log("Ingrese ID del libro:")
        const idLibro = scanf("%s")

        console.log("Ingrese ID del estudiante:")
        const idCliente = scanf("%s")

        const libro = this._bookService.findbyid(idLibro)[0]

        if (!libro) {
            console.log("Libro no existe")
            return
        }

        if (!libro.disponible) {
            console.log("Libro no disponible")
            return
        }

        const estudiante = this._studentService.findbyid(idCliente)[0]

        if (!estudiante) {
            console.log("Estudiante no existe")
            return
        }

        const prestamo: Prestamo = {
            id: idPrestamo,
            libro,
            estudiante,
            fechaPrestamo: new Date()
        }

        const status = this._loanService.create(prestamo)

        if (!status) {
            console.log("Error al prestar libro")
            return
        }

        libro.disponible = false
        this._bookService.update(libro.id, libro)

        console.log("Libro prestado correctamente")
    }

    private returnBook(): void {

        console.log("Ingrese ID del libro:")
        const idLibro = scanf("%s")

        const prestamos = this._loanService.read()

        const prestamo = prestamos.find(prestado =>
            prestado.libro.id === idLibro && !prestado.fechaDevolucion
        )

        if (!prestamo) {
            console.log("No hay préstamo activo para este libro")
            return
        }

        prestamo.fechaDevolucion = new Date()

        this._loanService.update(prestamo.id, prestamo)

        prestamo.libro.disponible = true
        this._bookService.update(prestamo.libro.id, prestamo.libro)

        console.log("Libro devuelto correctamente")
    }

    private readLoans(): void {

        const prestamos = this._loanService.read()

        console.log("\n===== PRÉSTAMOS =====")

        if (prestamos.length === 0) {
            console.log("No hay préstamos")
            return
        }

        prestamos.forEach(p => {
            console.log({
                id: p.id,
                libro: p.libro.titulo,
                estudiante: p.estudiante.nombre,
                fechaPrestamo: p.fechaPrestamo,
                fechaDevolucion: p.fechaDevolucion || "Pendiente"
            })
        })
    }

    private findLoanByBook(): void {

        console.log("Ingrese ID del libro:")
        const idLibro = scanf("%s")

        const prestamos = this._loanService.read()

        const prestamo = prestamos.find(p =>
            p.libro.id === idLibro && !p.fechaDevolucion
        )

        if (!prestamo) {
            console.log("Libro disponible (no prestado)")
            return
        }

        console.log("\n===== PRÉSTAMO ACTIVO =====")
        console.log({
            libro: prestamo.libro.titulo,
            estudiante: prestamo.estudiante.nombre,
            fecha: prestamo.fechaPrestamo
        })
    }

    private updateLoan(): void {

        console.log("Ingrese ID del préstamo:")
        const id = scanf("%s")

        const prestamos = this._loanService.read()

        const prestamo = prestamos.find(prestado => prestado.id === id)

        if (!prestamo) {
            console.log("Préstamo no encontrado")
            return
        }

        console.log("Ingrese nueva fecha devolución (YYYY-MM-DD):")
        const fecha = scanf("%s")

        prestamo.fechaDevolucion = new Date(fecha)

        const status = this._loanService.update(id, prestamo)

        console.log(status ? "Préstamo actualizado" : "Error")
    }

    pause(): void {
        console.log("\nPresione ENTER para continuar...")
        scanf("%c")
    }
}