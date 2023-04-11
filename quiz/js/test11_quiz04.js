
//TODO: remove tr => tbody
class CustomElementDiv extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
        this.shadowRoot.append(quiz11_04.content.cloneNode(true));

        this.name_button = this.shadowRoot.querySelector("#name_table");
        this.country_button = this.shadowRoot.querySelector("#country_table");

        this.name_list = this.shadowRoot.querySelectorAll("tr:not(:first-child) td:first-child");
        this.country_list = this.shadowRoot.querySelectorAll("tr:not(:first-child) td:last-child");
    }

    sort_NameElement = () => {
        for (let i = 0; i < this.name_list.length; i++) {
            for (let j = i+1; j < this.name_list.length; j++) {
                if(this.name_list[i].innerHTML > this.name_list[j].innerHTML) {
                    let temp = this.name_list[i].innerHTML;
                    this.name_list[i].innerHTML = this.name_list[j].innerHTML;
                    this.name_list[j].innerHTML = temp;
                }
            }   
        }
    }

    sort_CountryElement = () => {
        for (let i = 0; i < this.country_list.length; i++) {
            for (let j = i+1; j < this.country_list.length; j++) {
                if(this.country_list[i].innerHTML > this.country_list[j].innerHTML) {
                    [this.country_list[i].innerHTML, this.country_list[j].innerHTML] = this.country_list[j].innerHTML, this.country_list[i].innerHTML;
                    // let temp = this.country_list[i].innerHTML;
                    // this.country_list[i].innerHTML = this.country_list[j].innerHTML;
                    // this.country_list[j].innerHTML = temp;
                }
            }   
        }
    }

    connectedCallback() {
        this.name_button.addEventListener("click", () => {
            this.sort_NameElement();
        });

        this.country_button.addEventListener("click", () => {
            this.sort_CountryElement();
        });
    }
}

customElements.define("main-container", CustomElementDiv);