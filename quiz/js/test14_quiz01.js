class State {
    constructor() {
        this.$state = {opener: "", popup: ""};
    }

    setState(newState) {
        this.$state = { ...this.$state, ...newState };
    }
}

export const stateQuiz = new State;
  
class CustomOpener extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).append(quiz14_01_opener.content.cloneNode(true));
        this.openPUBtn = this.shadowRoot.querySelector("#openPopBtn");
        this.sendDataBtn = this.shadowRoot.querySelector("#sendDataBtn");
        this.SendDataInput = this.shadowRoot.querySelector("#sendDataInput");
    
        this.getDataBtn = this.shadowRoot.querySelector("#getDataBtn");
        this.getDataInput = this.shadowRoot.querySelector("#getDataInput");
    
        this.openState = {};
    }
  
    connectedCallback() {
        this.openPUBtn.addEventListener("click", () => {
            const popup = window.open("", "PopUp Window", "width=500px, height=300px");
            const popUpTemp = document.createElement("popup-temp");
  
            popUpTemp.getDataInput.value = (stateQuiz.$state["opener"])
            ? stateQuiz.$state["opener"]
            : "There is no Data.";
  
            popup.document.body.append(popUpTemp);

            // const popupRoot = popup.document.body.querySelector("popup-temp");
            // const closePopupBtn = popupRoot.shadowRoot.querySelector("#closePopBtn");
            // closePopupBtn.addEventListener("click", () => {
            //     popup.close();
            // });
        });
  
        this.sendDataBtn.addEventListener("click", () => {
            this.openState["opener"] = this.SendDataInput.value;
            stateQuiz.setState(this.openState);
        });
  
        this.getDataBtn.addEventListener("click", () => {
            this.getDataInput.value = stateQuiz.$state["popup"];
        });
    }
}
  
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

customElements.define("opener-temp", CustomOpener);
customElements.define("popup-temp", CustomPopup);