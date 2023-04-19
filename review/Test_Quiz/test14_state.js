class State {
    constructor() {
        this.$state = {opener: "", popup: ""};
    }

    setState(newState) {
        this.$state = { ...this.$state, ...newState };
        console.log(this.$state);
    }

    getState() {
        return this.$state;
    }
}

const stateInstance = new State();
export default stateInstance