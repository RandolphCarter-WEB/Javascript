import { observable, observe } from "./observer.js";

export default class Component {
    state; props; $target;
    constructor($target, props) {
        this.$target = $target;
        this.props = props;
        this.setUp();
    }

    setUp() {
        this.state = observable(this.initState());
        observe(() => {
            this.render();
            this.setEvent();
            this.mounted();
        });
    }

    render() { this.$target.innerHTML = this.template(); }
    template() { return ``; }

    initState() { return {}; }
    setEvent() { }
    mounted() { }
}