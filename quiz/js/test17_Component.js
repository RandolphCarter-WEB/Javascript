export default class Component extends HTMLElement {
    constructor() {
        super();
        this.$state = [];
        this.template();
        this.render();
    }

    render() { this.innerHTML = this.template(); }
    setState(newState) {
        this.$state = [ ...newState ];
        this.render();
    }
}