import Component from "./core/Component.js";

import StoreView from "./pages/StoreView.js";
import UserView from "./pages/UserView.js";
import SetView from "./pages/SetView.js";

export default class MainApp extends Component {
    constructor($target) {
        super($target);
        this.$target = $target;
        this.pages = new Array();
        this.index = -1;
        this.pathname = new URL(window.location.href).pathname
        this.render();
        this.router();
    }

    render() { this.$target.innerHTML = this.template(); }
    template() {
        return `
            <section id="MenuContent">
                <button type="button" id="StoreView" class="mainBtn">GO StorePage</button>
                <button type="button" id="UserView" class="mainBtn"">GO UserPage</button>
                <button type="button" id="SetView" class="mainBtn">GO SetPage</button>
            </section>
        `;
    }

    router(idx, evt) {
        if(!evt) {
            history.replaceState({}, "HOME", this.pathname + "/");
            this.updateMain(-1);
        } else {
            history.pushState({idx:idx}, "HOME", this.pathname + `page/${idx}`);
            this.updateMain(idx);
        }
    }

    updateMain(idx) {
        if(this.index === idx) return;
        this.index = idx;

        this.pages.forEach(page => {
            page.classList.remove("expand");
            page.updatedClassList();
        });

        if(0 <= idx) {
            this.pages[idx].classList.add("expand");
            this.pages[idx].updatedClassList();
        }
    }

    moveBack() {
        if(0 < nav.state.idx) {
            this.updateMain(nav.state.idx);
        } else {
            this.updateMain(-1);
        }
    }

    connectedCallback() {
        this.pages = this.querySelectorAll("section button");
        this.pages.forEach((page, idx) => {
            page.addEventListener("click", this.router.bind(this.idx));
        });

        window.onpopstate = this.moveBack.bind(this);
    }

    disconnectedCallback() { }
}

window.addEventListener("DOMContentLoaded", (e) => {
    new MainApp($("#mainContainer"));
})