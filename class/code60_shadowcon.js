class CustomInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode : "open"});

        this.h1 = document.createElement("h1");
        this.h1.textContent = "Hi";

        this.p1 = document.createElement("p");
        this.p1.textContent = "this is shadow dom";

        this.input = document.createElement("input");
        this.input.setAttribute("type", "text");
    }

    connectedCallback() {
        this.shadowRoot.append(this.h1, this.p1, this.input);
    }
}

customElements.define("custom-container", CustomInput);