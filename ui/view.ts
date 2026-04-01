import scanf from 'scanf';
import { IAccionadicional } from "../abstration/interfaces"
import { Estudiante, Libro } from "../modelsave/type"

export class View {

    constructor(private _crudService: IAccionadicional) { }

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
        console.log("0. Salir del sistema");
        console.log()

        const selectedOption = scanf("%s");
        this.processOptionSelected(selectedOption)
    }

    processOptionSelected(option: string): void {
        switch (option) {
            case "1":
                this.createClient();
                this.pause()
                this.buildMenuAplicaction()
                break
            case "2":
                this.readClients();
                this.pause()
                this.buildMenuAplicaction()
                break
            case "3":
                this.updateClient();
                this.pause()
                this.buildMenuAplicaction()
                break
            case "4":
                this.deleteClient();
                this.pause()
                this.buildMenuAplicaction()
                break
            case "5":
                this.findClientById();
                this.pause()
                this.buildMenuAplicaction()
            case "6":
                this.createBook()
                this.pause()
                this.buildMenuAplicaction()
            case "7":
                this.readBooks()
                this.pause()
                this.buildMenuAplicaction()
            case "8":
                this.updateBook()
                this.pause()
                this.buildMenuAplicaction()
            case "9":
                this.deleteBook()
                this.pause()
                this.buildMenuAplicaction()
            case "10":
                this.findBookById()
                this.pause()
                this.buildMenuAplicaction()
            case "0":
                console.log("👋 Saliendo del sistema...");
                return
            default:
                console.log("❌ Opción inválida")
                this.buildMenuAplicaction()

        }
    }

    createClient(): void {

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

        const status = this._crudService.create(form)
        console.log(status ? "✅ Estudiante creado" : "❌ Error")
    }

    readClients(): void {
        const estudiantes = this._crudService.read<Estudiante>()

        console.log("\n===== LISTADO =====")

        estudiantes.forEach(est => {
            console.log(est)
        })
    }

    updateClient(): void {
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

        const status = this._crudService.update(id, form)
        console.log(status ? "✅ Actualizado" : "❌ No encontrado")
    }

    deleteClient(): void {
        console.log("Ingrese el ID del estudiante a eliminar: ")
        const id = scanf("%s")

        const status = this._crudService.delete(id)
        console.log(status ? "✅ Eliminado" : "❌ No encontrado")
    }

    findClientById(): void {
        console.log("Ingrese el ID del estudiante a buscar: ")
        const id = scanf("%s")

        const result = this._crudService.findbyid<Estudiante>(id)

        if (result.length === 0) {
            console.log("❌ Estudiante no encontrado")
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

        const status = this._crudService.create(form)
        console.log(status ? "✅ Libro creado" : "❌ Error")
    }

    readBooks(): void {
        const libros = this._crudService.read<Libro>()

        console.log("\n===== LISTADO DE LIBROS =====")

        if (libros.length === 0) {
            console.log("⚠️ No hay libros registrados")
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

        const status = this._crudService.update(id, form)
        console.log(status ? "✅ Libro actualizado" : "❌ No encontrado")
    }

    deleteBook(): void {

        console.log("Ingrese el ID del libro a eliminar:")
        const id = scanf("%s")

        const status = this._crudService.delete(id)
        console.log(status ? "✅ Libro eliminado" : "❌ No encontrado")
    }

    findBookById(): void {

        console.log("Ingrese el ID del libro:")
        const id = scanf("%s")

        const result = this._crudService.findbyid<Libro>(id)

        if (result.length === 0) {
            console.log("❌ Libro no encontrado")
            return
        }

        console.log("\n===== RESULTADO =====")
        result.forEach(libro => console.log(libro))
    }

    pause(): void {
        console.log("\nPresione ENTER para continuar...")
        scanf("%c")
    }
}

// FALTA ESCRIBIR LAS ACCIONES DEL LIBRO Y DEL PRESTAMO