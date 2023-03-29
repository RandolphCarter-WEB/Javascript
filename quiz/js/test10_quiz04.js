class Customdiv extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode : "open"});
        this.shadowRoot.append(quiz10_04.content.cloneNode(true));

        const button_list = this.shadowRoot.querySelectorAll(".menu");
        button_list.forEach(button => {
            button.addEventListener("click", function() {
                const show_div = this.querySelector("li[class$='text']");
                if(show_div.style.maxHeight) {
                    show_div.style.maxHeight = null;
                    show_div.style.padding = "0 2rem";
                }
                else {
                    show_div.style.maxHeight = (show_div.scrollHeight+100)+"px";
                    show_div.style.padding = "2rem";
                }
            });
        });
    }
}

customElements.define("main-container", Customdiv);