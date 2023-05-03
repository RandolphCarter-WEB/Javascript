import ItemsList from "./component/items.js";

class App {
    constructor() {
        new ItemsList(document.querySelector("#app"));
    }
}

new App();