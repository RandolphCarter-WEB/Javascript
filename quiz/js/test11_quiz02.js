class CustomElementDiv extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
        this.shadowRoot.append(quiz11_02.content.cloneNode(true));

        this.button_list = this.shadowRoot.querySelectorAll("[id$='ul01'], [id$='ul02']");

        this.button_delete = this.shadowRoot.querySelector("#Delete");
        this.button_remove = this.shadowRoot.querySelector("#Remove");
        this.button_refresh = this.shadowRoot.querySelector("#Refresh");

        this.buttonHandlers = {
            UpToUp_ul01 : this.UpToUp_01,
            UpToDown_ul01 : this.UpToDown_01,
            DownToUp_ul01 : this.DownToUp_01,
            DownToDown_ul01 : this.DownToDown_01,

            UpToUp_ul02 : this.UpToUp_02,
            UpToDown_ul02 : this.UpToDown_02,
            DownToUp_ul02 : this.DownToUp_02,
            DownToDown_ul02 : this.DownToDown_02
        };
    }

    UpToUp_01 = () => {
        console.log("[Ul01] >> Up to up");
        this.div_ul02.prepend(this.div_ul01.firstElementChild);
    }
    UpToDown_01 = () => {
        console.log("[Ul01] >> Up to down");
        this.div_ul02.append(this.div_ul01.firstElementChild);
    }
    DownToUp_01 = () => {
        console.log("[Ul01] >> Down to up");
        this.div_ul02.prepend(this.div_ul01.lastElementChild);
    }
    DownToDown_01 = () => {
        console.log("[Ul01] >> Down to down");
        this.div_ul02.append(this.div_ul01.lastElementChild);
    }

    UpToUp_02 = () => {
        console.log("[Ul02] >> Up to up");
        this.div_ul01.prepend(this.div_ul02.firstElementChild);
    }
    UpToDown_02 = () => {
        console.log("[Ul02] >> Up to down");
        this.div_ul01.append(this.div_ul02.firstElementChild);
    }
    DownToUp_02 = () => {
        console.log("[Ul02] >> Down to up");
        this.div_ul01.prepend(this.div_ul02.lastElementChild);
    }
    DownToDown_02 = () => {
        console.log("[Ul02] >> Down to Down");
        this.div_ul01.append(this.div_ul02.lastElementChild);
    }

    delete_element = (e) => {
        console.log("Delete element >> " + e.parentElement.parentElement);
        e.parentElement.parentElement.remove();
    }
    remove_element = (e, text) => {
        console.log("Remove element name >> " + e.closest("label").firstElementChild);
        e.closest("label").firstElementChild.textContent = text;
    }

    connectedCallback() {
        this.button_list.forEach(button => {
            button.addEventListener("click", (e) => {
                this.div_ul01 = this.shadowRoot.querySelector("#ul01");
                this.div_ul02 = this.shadowRoot.querySelector("#ul02");

                const handler = this.buttonHandlers[e.target.id];
                if (handler) { handler(); }
            });
        });

        this.button_delete.addEventListener("click", () => {
            this.checkedBox_delete = this.shadowRoot.querySelectorAll("[id^='group01']:checked, [id^='group02']:checked");
            this.checkedBox_delete.forEach(Element => {
                this.delete_element(Element);
            });
        });

        this.button_remove.addEventListener("click", () => {
            this.checkedBox_remove = this.shadowRoot.querySelectorAll("[id^='group01']:checked, [id^='group02']:checked");
            this.Input_Text = this.shadowRoot.querySelector("#TextContentInput").value;

            this.checkedBox_remove.forEach(Element => {
                this.remove_element(Element, this.Input_Text);
            });
        });

        this.button_refresh.addEventListener("click", () => {
            
        });

    }
}

customElements.define("main-container", CustomElementDiv);