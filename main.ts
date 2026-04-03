import {Application} from "./src/runapp/app"
import {View} from "./src/ui/view";
import {InMemoryService} from "./src/persistence/memory";
import {Estudiante, Libro, Prestamos} from "./src/modelsave/type";
import {BookService} from "./src/services/book.service";
import { StudentService } from "./src/services/student.service";

const studentmemory = new InMemoryService<Estudiante>()
const bookmemory = new InMemoryService<Libro>()
const loanService = new InMemoryService<Prestamos>() 

const bookservice = new BookService(bookmemory)
const studentservice = new StudentService(studentmemory)

const view = new View(studentservice, bookservice, loanService)
const app =  new Application(view);

app.start();