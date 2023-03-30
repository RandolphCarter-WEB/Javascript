class CustomRedDiv extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode : "open"});
        this.shadowRoot.append(quiz11_02.content.cloneNode(true));
    }
    connectedCallback() {
    }
}

customElements.define("main-container", CustomRedDiv);