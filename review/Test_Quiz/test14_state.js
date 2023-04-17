class State {
    constructor() {
        this.$state = {};
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
export default stateInstance.setState