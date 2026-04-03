import { ISave } from "../abstration/interfaces";
import { Prestamos } from "../modelsave/type";

export class LoanService implements ISave<Prestamos>{
  prestamos: Array<any> = [];

  create<Prestamo>(prestamo: Prestamo): boolean {
    this.prestamos.push(prestamo);
    return true;
  }

  delete(idLibro: string): boolean {
    const index = this.prestamos.findIndex(libroprestado => libroprestado.idLibro === idLibro);
    if (index === -1)
      return false;

    this.prestamos.splice(index, 1);
    return true;
  }
  
}