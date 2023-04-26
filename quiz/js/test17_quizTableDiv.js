import Component from "./test17_Component.js";
import ImgData from "./test17_Data.js"
import * as event from "./test17_quizEvent.js"

export default class SelectTable extends Component {
    constructor() {
        super();
        this.title = "";
    }

    setTitle(inputText) {
        this.title = inputText;
        this.render();
    }

    template() {
        const selectFood = this.title;
        const items = this.$state;

        return `
            <div id="${selectFood}">
                <h3>${selectFood}</h3>
                <div id="${selectFood}Table" class="tablDiv">
                    ${items.map(({img_name, class_name, img_src}) => {
                        return `<img src="${img_src}" id=${img_name} data-class-name="${class_name}">`;
                    }).join("\n")}
                </div>
            </div>
        `;
    }

    connectedCallback() {
        const tableName = document.querySelector("#" + this.title + "Table");
        const tableItems = document.querySelectorAll("#" + this.title + "Table");

        tableItems.forEach((element) => { event.makeDraggable(element) });

        tableName.addEventListener("dragenter", (e) => { e.preventDefault(); }, false);
        tableName.addEventListener("dragover", (e) => { e.preventDefault(); }, false);

        tableName.addEventListener("drop", (e) => {
            e.preventDefault();
            if(e.dataTransfer.getData("data-class-name") === this.title) { event.dropItem(e, tableName); }
            else { alert(`${e.dataTransfer.getData("data-class-name")} cannot drop on ${this.title}.`)}
        })
    }
}

customElements.define("select-table", SelectTable)