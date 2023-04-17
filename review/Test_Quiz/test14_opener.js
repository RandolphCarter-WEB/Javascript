import stateInstance from "./test14_state.js";

class CustomOpener extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).append(
            quiz14_01_opener.content.cloneNode(true)
        );
        this.openPUBtn = this.shadowRoot.querySelector("#openPopBtn");
        this.sendDataBtn = this.shadowRoot.querySelector("#sendDataBtn");
        this.SendDataInput = this.shadowRoot.querySelector("#sendDataInput");
    
        this.getDataBtn = this.shadowRoot.querySelector("#getDataBtn");
        this.getDataInput = this.shadowRoot.querySelector("#getDataInput");
    
        this.openState = {};
    }
  
    connectedCallback() {
        console.log(stateInstance.$state);

        this.openPUBtn.addEventListener("click", () => {
            window.open(
            "http://127.0.0.1:5500/javascript/review/Test_Quiz/test14_popup.html",
            "PopUp Window", "width=500px, height=300px");
        });
  
        this.sendDataBtn.addEventListener("click", () => {
            this.openState["opener"] = this.SendDataInput.value;
            stateInstance.setState(this.openState);
        });
  
        this.getDataBtn.addEventListener("click", () => {
            const getData = stateInstance.$state["popup"] ? stateInstance.$state["popup"] : "There is no Data.";
            this.getDataInput.value = getData;
        });
    }
}

customElements.define("opener-temp", CustomOpener);