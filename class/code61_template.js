// const div = document.querySelector(".div1");

// div.attachShadow({mode : "open"});
// div.shadowRoot.append(temp1.content.cloneNode(true));

class CustomTemp extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
        this.shadowRoot.append(temp1.content.cloneNode(true));
    }
}

customElements.define("custom-temp", CustomTemp);