import Component from "./test17_Component.js";
import ImgData from "./test17_Data.js"
import * as event from "./test17_quizEvent.js"

export default class MainTable extends Component {
    constructor() {
        super();
        this.setState(ImgData);
    }

    template() {
        const items = this.$state;

        return `
            <div id="mainContainer">
                <h1 class="tableTitle">prepared foods</h1>
                <p class="tableText">prepared foods >> ${items.length}</p>

                <div id="mainTable" class="tableDiv">
                    ${items.map(({img_name, class_name, img_src}) => {
                        return `<img src="${img_src}" id=${img_name} data-class-name="${class_name}" data-location="Main">`;
                    }).join("\n")}
                </div>
            </div>
        `;
    }

    connectedCallback() {
        document.querySelectorAll("#mainTable img").forEach((element) => { event.makeDraggable(element) });

        mainTable.addEventListener("dragenter", (e) => { e.preventDefault(); }, false);
        mainTable.addEventListener("dragover", (e) => { e.preventDefault(); }, false);

        mainTable.addEventListener("drop", (e) => {
            e.preventDefault();
            event.dropItem(e, mainTable);
        })
    }
}

customElements.define("main-table", MainTable);