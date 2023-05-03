class Store {
    #state;
    #observers = new Set();
    constructor(state) {
        this.#state = state;
        Object.keys(state).forEach(key => Object.defineProperty(this, key, {
            get: () => {
                console.log(`[Key : ${key}]Current Value >> ${this.#state[key]}`);
                return this.#state[key];
            },
            set: (value) => {
                console.log(`[Key : ${key}]Change Value >> ${value}`);
            }
        }));
    }

    setState(newState) {
        this.#state = { ...this.#state, ...newState };
        this.noticeSub();
    }

    setSubcrive(subcriver) {
        this.#observers.add(subcriver);
    }

    noticeSub() {
        this.#observers.forEach(fn => fn());
    }
}

class Sub {
    #fn;
    constructor(ToDo) {
        this.#fn = ToDo;
    }

    subcrive(publisher) {
        publisher.setSubcrive(this.#fn);
    }
}

const state = new Store({a: 10, b: 20});

const addCalculate = new Sub(() => console.log(`a + b = ${state.a + state.b}`));
const starCalculate = new Sub(() => console.log(`a * b = ${state.a * state.b}`));

addCalculate.subcrive(state);
starCalculate.subcrive(state);

console.log("notice func!");
state.noticeSub();

console.log("change state!");
state.setState({a: 100});
state.setState({a: 4, b: 3});