import {Application} from "../Training/runapp/app"
import {View} from "./ui/view";
import { InMemoryService } from "./persistence/memory";

const app =  new Application(
    new View(new InMemoryService)
);

app.start();