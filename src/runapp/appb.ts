import { MenuAccion } from "../ui/menuAction";
import { ConsoleView } from "../ui/consoleView";
import scanf from "scanf";

export class App {
  constructor(private menu: MenuAccion, private view: ConsoleView) { }

  run(): void {
    let continuar = true;

    while (continuar) {
      this.view.mensaje();
      console.log("Seleccione opción: ")
      const opcion = scanf("%d");
      continuar = this.menu.ejecutar(opcion);
    }
  }
}