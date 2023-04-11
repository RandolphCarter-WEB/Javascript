class CustomElementDiv extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
        this.shadowRoot.append(quiz11_03.content.cloneNode(true));

        this.button_sort = this.shadowRoot.querySelector("#sort");
        this.button_resort = this.shadowRoot.querySelector("#reverse_sort");
    }

    //TODO: this를 조금 더 잘 써보자 심플하게
    food_sort = () => {
        // for (let i = 0; i < this.food_list.length; i++) {
        //     for (let j = i+1; j < this.food_list.length; j++) {
        //         if(this.food_list[i].textContent > this.food_list[j].textContent) {
        //             let temp = this.food_list[i].textContent;
        //             this.food_list[i].textContent = this.food_list[j].textContent;
        //             this.food_list[j].textContent = temp;
        //         }
        //     }   
        // }

        Array.from(this.shadowRoot.firstElementChild.children).sort(function (a, b) {
            return a.textContent.localeCompare(b.textContent);
        }).forEach((food_sort_element) => {  
            console.log(this.shadowRoot.firstElementChild);
            console.log(this.shadowRoot.firstElementChild.children);
            this.shadowRoot.firstElementChild.append(food_sort_element);
        });
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

        //TODO: Make reverse();
        // Array.from(this.shadowRoot.firstElementChild.children).sort(function (a, b) {
        //     return a.textContent.localeCompare(b.textContent);
        // }).forEach((food_sort_element) => {
        //     this.shadowRoot.firstElementChild.append(food_sort_element);
        // });
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