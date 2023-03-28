class CustomUl extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode : "open"});
        this.shadowRoot.append(quiz10_03.content.cloneNode("true"));

        const li_list = this.shadowRoot.querySelectorAll("#menu li");
        li_list.forEach(element_list => {
            element_list.addEventListener("click", function() {
                li_list.forEach(li_element => {
                    if(li_element.classList.contains("On_click")) {
                        li_element.classList.remove("On_click");
                    }
                })
                element_list.classList.add("On_click");
            });
        });
    }
}

customElements.define("main-container", CustomUl);