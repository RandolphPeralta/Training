import scanf from 'scanf';
import { IAccion } from "../abstration/interfaces"
import { Estudiante } from "../modelsave/type"

export class View {

    constructor(private _crudService: IAccion){}

    buildMenuAplicaction(): void{
        console.log("============ Bienvenido =============")
        console.log("1. Registrar Estudiante");
        console.log("2. Listar Estudiantes");
        console.log("3. Actualizar Estudiante");
        console.log("4. Eliminar Estudiante");
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
                this.buildMenuAplicaction
                break
            case "3":
                this.updateClient();
                this.pause()
                this.buildMenuAplicaction
                break
            case "4":
                this.deleteClient();
                this.pause()
                this.buildMenuAplicaction()
                break
            case "0":
                // TOCA PONER EL BOTON DE SALIR Y EL BOTON DE ENCONTRAR POR ID
                
        }
    }

    // ✅ CREATE usando Object.entries
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

    // ✅ READ
    readClients(): void {
        const estudiantes = this._crudService.read<Estudiante>()

        console.log("\n===== LISTADO =====")

        estudiantes.forEach(est => {
            console.log(est)
        })
    }

    // ✅ UPDATE usando Object.entries
    updateClient(): void {
        const id = String(scanf("%s","Ingrese el ID del estudiante a actualizar: "))

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

    // ✅ DELETE
    deleteClient(): void {
        const id = String(scanf("Ingrese el ID del estudiante a eliminar: "))

        const status = this._crudService.delete(id)
        console.log(status ? "✅ Eliminado" : "❌ No encontrado")
    }
    
    pause(): void {
    console.log("\nPresione ENTER para continuar...")
    scanf("%c") // espera un carácter (ENTER)
}
}