// const div1 = document.getElementById("div1");
// div1.append(document.getElementById("temp1").content.cloneNode(true));

class CustomDiv extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode : "open"});
        this.shadowRoot.append(temp1.content.cloneNode("true"));
    }
}

customElements.define("custom-div", CustomDiv);