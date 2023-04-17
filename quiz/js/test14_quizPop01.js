import {stateQuiz} from "./test14_quiz01.js"

class CustomPopup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).append(
            quiz14_01_popup.content.cloneNode(true)
        );
  
        this.getDataInput = this.shadowRoot.querySelector("#getDataInput");
        this.sendDataInput = this.shadowRoot.querySelector("#sendDataInput");

        this.closePopBtn = this.shadowRoot.querySelector("#closePopBtn");
  
        this.openState = {};
    }
  
    connectedCallback() {
        this.sendDataInput.addEventListener("input", (e) => {
            this.openState["popup"] = e.target.value ? e.target.value : "There is no Data.";
            stateQuiz.setState(this.openState);
        });

        this.closePopBtn.addEventListener("click", () => {
            console.log();
        });
    }
}

customElements.define("popup-temp", CustomPopup);