class CustomElem extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ["title"];
    }

    render() {
        this.innerHTML = `<h1>${this.title}</h1>`;
    }

    setCustomTitle() {
        document.getElementsByTagName("custom-elem")[0].setAttribute("title", "hi");
    }
    removeCustomTitle() {
        document.querySelector("custom-elem").remove();
    }

    connectedCallback() {
        this.render();

        document.querySelector("#change-wc").addEventListener("click", this.setCustomTitle);
        document.querySelector("#delete-wc").addEventListener("click", this.removeCustomTitle);
    }

    disconnectedCallback() {
        alert("bye bye");
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
        console.log("Change!");
    }
}

customElements.define("custom-elem", CustomElem);