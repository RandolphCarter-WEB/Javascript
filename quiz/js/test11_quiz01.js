class CustomRedDiv extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode : "open"});
        this.shadowRoot.append(quiz11_01.content.cloneNode(true));

        this.main = this.shadowRoot.querySelector(".red_div");
        this.Delete_func = this.Delete_func.bind(this);
    }

    Delete_func() {
        this.main.remove();
    }

    connectedCallback() {
        const button = this.shadowRoot.querySelector("#delete_icon");

        button.addEventListener("click", this.Delete_func);
    }
}

customElements.define("main-container", CustomRedDiv);