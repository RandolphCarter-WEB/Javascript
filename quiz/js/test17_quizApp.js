import MainTable from "./test17_quizMainDiv.js";
import SelectTable from "./test17_quizTableDiv.js";

class App{
    constructor() {
        this.mainTable = new MainTable();

        this.meelTable = new SelectTable();
        this.meelTable.setTitle("meels");

        this.drinkTable = new SelectTable();
        this.drinkTable.setTitle("drink");

        this.dessertTable = new SelectTable();
        this.dessertTable.setTitle("dessert");
    }
}

const appClass = new App();
const app = document.querySelector("#app")
app.append(appClass.mainTable, appClass.meelTable, appClass.drinkTable, appClass.dessertTable);