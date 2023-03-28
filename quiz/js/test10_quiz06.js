class Customdiv extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode : "open"});
        this.shadowRoot.append(quiz10_06.content.cloneNode(true));

        const menu_list = this.shadowRoot.querySelectorAll(".menu li");
        const result_list = this.shadowRoot.querySelectorAll(".result div");

        const color = {
            home : "red",
            news : "green",
            contact : "blue",
            about : "yellow"
        };

        menu_list.forEach(menu_element => {
            menu_element.addEventListener("click", function() {

                result_list.forEach(result_element => {
                    if(result_element.style.display == "block") {
                        result_element.style.display = "none";
                    }

                    if(result_element.classList.contains("div_"+menu_element.id)) {
                        result_element.style.display = "block";
                        
                        menu_element.style.backgroundColor = color[menu_element.id];
                        result_element.style.backgroundColor = color[menu_element.id];
                    }
                });
            });
        });
    }
}

customElements.define("main-container", Customdiv);