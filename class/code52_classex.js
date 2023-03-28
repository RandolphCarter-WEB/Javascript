class CustomButton extends HTMLElement {
    connectedCallback() {
        const button01 = document.createElement("button");
        button01.textContent = "Button";
        this.append(button01);
    }
}

customElements.define("custom-button", CustomButton);