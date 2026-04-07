import { ICommand } from "../../abstration/interfaces"

export class ExitCommand implements ICommand {
    execute() {
        console.log("Saliendo del sistema ...")
        return false
    }

}