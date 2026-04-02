import {Application} from "../Training/runapp/app"
import {View} from "./ui/view";
import {InMemoryService} from "./persistence/memory";

const studentService = new InMemoryService()
const bookService = new InMemoryService()
const loanService = new InMemoryService() 

const view = new View(studentService, bookService, loanService)
const app =  new Application(view);

app.start();