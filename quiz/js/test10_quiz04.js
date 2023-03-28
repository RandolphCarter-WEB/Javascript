class Customdiv extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode : "open"});
        this.shadowRoot.append(quiz10_04.content.cloneNode(true));

        const button_list = this.shadowRoot.querySelectorAll(".menu");
        button_list.forEach(button => {
            button.addEventListener("click", function() {
                const show_div = this.querySelector("li[class$='text']");
                if(show_div.style.display == "none") {
                    show_div.style.display = "block";
                }
                else {
                    show_div.style.display = "none";
                }
            });
        });
    }
}

customElements.define("main-container", Customdiv);