import {Application} from "./src/runapp/app"
import {View} from "./src/ui/view";
import {InMemoryService} from "./src/persistence/memory";
import {Estudiante, Libro, Prestamo} from "./src/modelsave/type";
import {BookService} from "./src/services/book.service";
import {StudentService } from "./src/services/student.service";
import { LoanService } from "./src/services/loans.service";

const studentmemory = new InMemoryService<Estudiante>()
const bookmemory = new InMemoryService<Libro>()
const loanmemory = new InMemoryService<Prestamo>() 

const view = new View(studentmemory, bookmemory, loanmemory)
const app =  new Application(view);

app.start();