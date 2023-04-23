import * as event from "./test16_quiz02Event.js"

class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = this.returnTemplate();
    }

    returnTemplate() {
        return `
            <div id="inputData">
                <input type="text" id="searchData" name="searchData" autocomplete="name">
                <div id="resultDiv"></div>
            </div>
        `;
    }

    connectedCallback() {
        searchData.addEventListener("input", (e) => { event.searchData(e, resultDiv) })
    }
}

if('customElements' in window) {
    customElements.define("search-bar", SearchBar);
}