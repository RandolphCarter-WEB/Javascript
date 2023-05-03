let currentObserver = null;

const state = {
    a: 10,
    b: 20
};

const stateKeys = Object.keys(state);

for(const key of stateKeys) {
    let _value = state[key];
    const observers = new Set();

    Object.defineProperty(state, key, {
        get () {
            if(currentObserver) observers.add(currentObserver);
            return _value;
        },
        set (value) {
            _value = value;
            observers.forEach(observer => observer());
        }
    })
}

const sum = () => {
    currentObserver = sum;
    console.log(`a + b = ${state.a + state.b}`);
}

const minus = () => {
    currentObserver = minus;
    console.log(`a - b = ${state.a - state.b}`);
}

console.log("[ADD SUM]print default");
sum();

console.log("[setState]change state a");
state.a = 100;

console.log("[MINUS SUM]print func");
minus();

console.log("[setState]change state b");
state.b = 200;

console.log("[setState]change state a and b");
state.a = 1;
state.b = 2;