import scanf from 'scanf';
import { IAccionadicional } from "../abstration/interfaces"
import { Estudiante, Libro, Prestamos } from "../modelsave/type"

export class View {

    constructor(
        private _studentService: IAccionadicional<Estudiante>,
        private _bookService: IAccionadicional<Libro>,
        private _loanService: IAccionadicional<Prestamos>
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
            case "0":
                console.log("Saliendo del sistema...");
                return
            default:
                console.log("Opción inválida")
                this.buildMenuAplicaction()

        }
    }

    createStudent(): void {

        const form: Estudiante = {
            id: "",
            nombre: "",
            identificacion: "",
            grado: ""
        }

        Object.entries(form).forEach(([key]) => {
            console.log(`Ingrese ${key}: `)
            const value = scanf("%s")
            form[key as keyof Estudiante] = value
        })

        const status = this._studentService.create(form)
        console.log(status ? "Estudiante creado" : "Error")
    }

    readStudents(): void {
        const estudiantes = this._studentService.read()

        console.log("\n===== LISTADO =====")

        estudiantes.forEach(estudiante => { console.log(estudiante) })
    }

    updateStudent(): void {
        console.log("Ingrese el ID del estudiante a actualizar: ")
        const id = scanf("%s")

        const form: Estudiante = {
            id: id,
            nombre: "",
            identificacion: "",
            grado: ""
        }

        Object.entries(form).forEach(([key]) => {
            console.log(`Ingrese ${key}: `)
            const value = scanf("%s")
            form[key as keyof Estudiante] = value
        })

        const status = this._studentService.update(id, form)
        console.log(status ? "Actualizado" : "No encontrado")
    }

    deleteStudent(): void {
        console.log("Ingrese el ID del estudiante a eliminar: ")
        const id = scanf("%s")

        const status = this._studentService.delete(id)
        console.log(status ? "Eliminado" : "No encontrado")
    }

    findStudentById(): void {
        console.log("Ingrese el ID del estudiante a buscar: ")
        const id = scanf("%s")

        const result = this._studentService.findbyid(id)

        if (result.length === 0) {
            console.log("Estudiante no encontrado")
            return
        }

        console.log("\n===== RESULTADO =====")
        result.forEach(est => console.log(est))

    }

    createBook(): void {

        console.log("Ingrese id:")
        const id = scanf("%s")

        console.log("Ingrese titulo:")
        const titulo = scanf("%s")

        console.log("Ingrese autor:")
        const autor = scanf("%s")

        console.log("¿Disponible? (1 = sí, 0 = no):")
        const disponible = scanf("%s") === "1"

        const form: Libro = {
            id,
            titulo,
            autor,
            disponible
        }

        const status = this._bookService.create(form)
        console.log(status ? "Libro creado" : "Error")
    }

    readBooks(): void {
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

    updateBook(): void {

        console.log("Ingrese el ID del libro a actualizar:")
        const id = scanf("%s")

        console.log("Ingrese nuevo titulo:")
        const titulo = scanf("%s")

        console.log("Ingrese nuevo autor:")
        const autor = scanf("%s")

        console.log("¿Disponible? (1 = sí, 0 = no):")
        const disponible = scanf("%s") === "1"

        const form: Libro = {
            id,
            titulo,
            autor,
            disponible
        }

        const status = this._bookService.update(id, form)
        console.log(status ? "Libro actualizado" : "No encontrado")
    }

    deleteBook(): void {

        console.log("Ingrese el ID del libro a eliminar:")
        const id = scanf("%s")

        const status = this._bookService.delete(id)
        console.log(status ? "Libro eliminado" : "No encontrado")
    }

    findBookById(): void {

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

    lendBook(): void {

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

        const prestamo: Prestamos = {
            idLibro,
            idCliente,
            fechaPrestamo: new Date()
        }

        const status = this._loanService.create(prestamo)

        if (!status) {
            console.log("Error al prestar libro")
            return
        }

        libro.disponible = false
        this._bookService.update(idLibro, libro)

        console.log("Libro prestado correctamente")
    }

    returnBook(): void {

        console.log("Ingrese ID del libro a devolver:")
        const idLibro = scanf("%s")

        const prestamos = this._loanService.read()

        const prestamo = prestamos.find(p =>
            p.idLibro === idLibro && !p.fechaDevolucion
        )

        if (!prestamo) {
            console.log("No hay préstamo activo para este libro")
            return
        }

        prestamo.fechaDevolucion = new Date()

        this._loanService.update(idLibro, prestamo)

        const libro = this._bookService.findbyid(idLibro)[0]

        if (libro) {
            libro.disponible = true
            this._bookService.update(idLibro, libro)
        }

        console.log("Libro devuelto correctamente")
    }

    pause(): void {
        console.log("\nPresione ENTER para continuar...")
        scanf("%c")
    }
}