import Component from "../core/Component.js";

export default class ItemsList extends Component {
    template() {
        const items = this.state;

        return `
            <div id="itemList">
                ${items.map((item, index) => {
                    return `item : ${index} <button type="button" class="removeBtn" data-key="${item}">remove</button>`;
                }).join("\n")};
            </div>
        `;
    }

    setEvent() {
        removeBtn.addEventListener("click", ({ target }) => {
            const key = target.dataset.key;
            const items = this.state;
            items.splice(key, 1);
            this.setState(items);
        });
    }
}