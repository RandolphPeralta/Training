import { InMemoryService } from "./src/persistence/memory";
import { Prestamo, Libro, Estudiante } from "./src/modelsave/type";
import { MenuAccion } from "./src/ui/menuAction";
import { ConsoleView } from "./src/ui/consoleView";
import { App } from "./src/runapp/appb";
import { CreateStudentCommand } from "./src/ui/comandos/createStud";
import { DeleteStudentCommand } from "./src/ui/comandos/deleteStud"
import { UpdateStudentCommand } from "./src/ui/comandos/updateStud";
import { ReadStudentCommand } from "./src/ui/comandos/readStud";
import { FindStudCommand } from "./src/ui/comandos/findbyidStud"
import { CreateBookCommand } from "./src/ui/comandos/createBook";
import { DeleteBookCommand } from "./src/ui/comandos/deleteBook"
import { UpdateBookCommand} from "./src/ui/comandos/updateBook";
import { ReadBookCommand } from "./src/ui/comandos/readBook";
import { FindBookCommand } from "./src/ui/comandos/findbyidBook";
import { LendBookCommand } from "./src/ui/comandos/lendBook";
import { ReturnBookCommand } from "./src/ui/comandos/returnBoo";
import { UpdateLoanCommand } from "./src/ui/comandos/updateLoan";
import { ReadLoanCommand} from "./src/ui/comandos/readLoan";
import { FindLoanCommand } from "./src/ui/comandos/searchLoan";
import { ExitCommand } from "./src/ui/comandos/exit";

const memorialibro = new InMemoryService<Libro>();
const memoriaestudiante = new InMemoryService<Estudiante>();
const memoriaprestamo = new InMemoryService<Prestamo>();
const menu = new MenuAccion();

menu.registrarComando(1, new CreateStudentCommand(memoriaestudiante));
menu.registrarComando(2, new DeleteStudentCommand(memoriaestudiante));
menu.registrarComando(3, new ReadStudentCommand(memoriaestudiante));
menu.registrarComando(4, new UpdateStudentCommand(memoriaestudiante));
menu.registrarComando(5, new FindStudCommand(memoriaestudiante));

menu.registrarComando(6, new CreateBookCommand(memorialibro));
menu.registrarComando(7, new DeleteBookCommand(memorialibro));
menu.registrarComando(8, new ReadBookCommand(memorialibro));
menu.registrarComando(9, new UpdateBookCommand(memorialibro));
menu.registrarComando(10, new FindBookCommand(memorialibro));

menu.registrarComando(11, new LendBookCommand(memoriaestudiante,memorialibro,memoriaprestamo));
menu.registrarComando(12, new ReturnBookCommand(memorialibro, memoriaprestamo));
menu.registrarComando(13, new ReadLoanCommand(memoriaprestamo));
menu.registrarComando(14, new FindLoanCommand(memoriaprestamo));
menu.registrarComando(15, new UpdateLoanCommand(memoriaprestamo));
menu.registrarComando(0, new ExitCommand());

const view = new ConsoleView();
const app = new App(menu, view);

app.run();