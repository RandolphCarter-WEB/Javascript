import ItemsPlusList from "./component/itemsPlus.js";
import ItemsMinusList from "./component/itemsMinus.js";

class App {
    constructor() {
        new ItemsPlusList(document.querySelector("#plus"));
        new ItemsMinusList(document.querySelector("#minus"));
    }
}

new App();