import { ICommand } from "../abstration/interfaces";
import scanf from "scanf";

export class MenuAccion {
  private comandos: Map<number, ICommand> = new Map();

  registrarComando(opcion: number, comando: ICommand): void {
    this.comandos.set(opcion, comando);
  }

  ejecutar(opcion: number): boolean {
    const comando = this.comandos.get(opcion);

    if (!comando) {
      console.log("Opción inválida");
      return true;
    }

    if (opcion !== 0){
      comando.execute();
      this.pause();
    } else {
      comando.execute();
      return false
    }
    
    return opcion !== 0;

  }

  private pause() {
    console.log("\nPresiona ENTER para continuar...");
    scanf("%s")
  }
}