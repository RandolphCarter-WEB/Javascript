class CustomElementDiv extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
        this.shadowRoot.append(quiz11_03.content.cloneNode(true));

        this.button_sort = this.shadowRoot.querySelector("#sort");
        this.button_resort = this.shadowRoot.querySelector("#reverse_sort");
        this.food_list = this.shadowRoot.querySelectorAll("#food_list li");
    }

    food_sort = () => {
        for (let i = 0; i < this.food_list.length; i++) {
            for (let j = i+1; j < this.food_list.length; j++) {
                if(this.food_list[i].textContent > this.food_list[j].textContent) {
                    let temp = this.food_list[i].textContent;
                    this.food_list[i].textContent = this.food_list[j].textContent;
                    this.food_list[j].textContent = temp;
                }
            }   
        }
    }

    food_resort = () => {
        for (let i = 0; i < this.food_list.length; i++) {
            for (let j = i+1; j < this.food_list.length; j++) {
                if(!(this.food_list[i].textContent > this.food_list[j].textContent)) {
                    let temp = this.food_list[i].textContent;
                    this.food_list[i].textContent = this.food_list[j].textContent;
                    this.food_list[j].textContent = temp;
                }
            }   
        }
    }

    connectedCallback() {
        this.button_sort.addEventListener("click", () => {
            this.food_sort();
        });

        this.button_resort.addEventListener("click", () => {
            this.food_resort();
        });
    }
}

customElements.define("main-container", CustomElementDiv);