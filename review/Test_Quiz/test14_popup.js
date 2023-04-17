import stateInstance from "./test14_state.js";

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
        this.getDataInput.value = (stateInstance.$state["opener"])
        ? stateInstance.$state["opener"]
        : "There is no Data.";

        this.sendDataInput.addEventListener("input", (e) => {
            this.openState["popup"] = e.target.value
            stateInstance.setState(this.openState);
        });

        this.closePopBtn.addEventListener("click", () => {
            window.close();
        });
    }
}

customElements.define("popup-temp", CustomPopup);