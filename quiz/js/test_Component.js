export default class Component {
    $target;

    constructor ($target) {
        this.$target = $target;
        this.setEvent();
        this.render();
    }

    template() { return ``; }
    render () {
        this.$target.innerHTML = this.template();
    }

    setEvent() { }
}