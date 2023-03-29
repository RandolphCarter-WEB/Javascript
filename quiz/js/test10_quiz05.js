class Customdiv extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode : "open"});
        this.shadowRoot.append(quiz10_05.content.cloneNode(true));

        const menu_list = this.shadowRoot.querySelectorAll(".menu li");
        const result_div = this.shadowRoot.querySelectorAll(".result div");

        menu_list.forEach(menu_element => {
            menu_element.addEventListener("click", function() {
                const target_name = "div_" + menu_element.id;

                result_div.forEach(result_element => {
                    if(result_element.style.display == "block") {
                        result_element.style.display = "none";

                        if(result_element.id == target_name) {
                            if(result_element.style.display == "none") {
                                result_element.style.display = "block";
                            }
                            else {
                                result_element.style.display = "none";
                            }
                        }
                    }
                    else {
                        if(result_element.id == target_name) {
                            if(result_element.style.display == "none") {
                                result_element.style.display = "block";
                            }
                            else {
                                result_element.style.display = "none";
                            }
                        }
                    } 
                })
            });
        });
    }
}

customElements.define("main-container", Customdiv);