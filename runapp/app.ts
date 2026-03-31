import {View} from "../ui/view"

export class Application {

    constructor(private _view: View){}

    start(): void {
        this._view.buildMenuAplicaction();
    }
}
