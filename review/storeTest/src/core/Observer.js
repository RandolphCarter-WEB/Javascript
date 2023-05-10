let currentObserver = null;

export const observe = func => {
    currentObserver = func;
    func();
    currentObserver = null;
}

export const observable = Obj => {
    Object.keys(Obj).forEach(key => {
        let _value = Obj[key];
        const observers = new Set();

        Object.defineProperty(Obj, key, {
            get() {
                if(currentObserver) observers.add(currentObserver);
                return _value;
            },

            set(newValue) {
                _value = newValue;
                observers.forEach(func => func());
            }
        });
    });

    return Obj;
}