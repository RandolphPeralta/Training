import scanf from 'scanf';
import { IAccionadicional } from "../abstration/interfaces"
import { Estudiante } from "../modelsave/type"

export class View {

    constructor(private _crudService: IAccionadicional){}

    buildMenuAplicaction(): void{
        console.log("============ Bienvenido =============")
        console.log("1. Registrar Estudiante");
        console.log("2. Listar Estudiantes");
        console.log("3. Actualizar Estudiante");
        console.log("4. Eliminar Estudiante");
        console.log("5. Buscar estudiante")
        console.log("0. Salir del sistema")
        console.log()

        const selectedOption = scanf("%s");
        this.processOptionSelected(selectedOption)
    }

    processOptionSelected(option: string): void {
        switch (option){
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
    
    pause(): void {
    console.log("\nPresione ENTER para continuar...")
    scanf("%c") 
}
}

// FALTA ESCRIBIR LAS ACCIONES DEL LIBRO Y DEL PRESTAMO