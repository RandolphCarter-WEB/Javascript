const obj1 = {
    a: 3,

    set b(val1) {
        _b = val1;
    },

    get b() {
        return "#"+_b;
    }
}

console.dir(obj1);

const obj2 = {
    set foo (val) {
        delete this.foo;
        this.foo = val;
    },
    get foo () {
        delete this.foo;
        return this.foo = `something`;
    }
}

obj2.foo = "test";
console.log(obj2.foo);