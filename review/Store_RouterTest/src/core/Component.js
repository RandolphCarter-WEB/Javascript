export default class Component {
    state; $target;
    constructor($target) {
        this.$target = $target;
        this.setUp();
        this.render();
        this.setEvent();
    }
    setUp() { }
    render () { this.$target.innerHTML = this.template(); }
    updatedClassList () {
        console.log("class Update");
        this.render();
    }
    template () { return ''; }
    setEvent () { }
    setState (newState) {
        this.state = [ ...this.state, ...newState ];
        this.render();
    }
}