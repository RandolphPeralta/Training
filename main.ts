import {Application} from "../Training/runapp/app"
import {View} from "./ui/view";
import {InMemoryService} from "./persistence/memory";
import {Estudiante, Libro, Prestamos} from "./modelsave/type";

const studentService = new InMemoryService<Estudiante>()
const bookService = new InMemoryService<Libro>()
const loanService = new InMemoryService<Prestamos>() 

const view = new View(studentService, bookService, loanService)
const app =  new Application(view);

app.start();