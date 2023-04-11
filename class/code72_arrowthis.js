// const obj2 = {
//     name: "foo"
// }

// Object.prototype.sayHi = () => function () {
//     console.log(`Hi ${this.name}`);
// }

// obj2.sayHi();

class List {
    constructor() {
        this.list = [1, 2, 3, 4, 5]; 
    }

    funcA = (newlist) => {
        const list = [ ...this.list, ...newlist ];
        return list;
    }
}

const newList = [6, 7, 8, 9, 10]; 
const test = new List
console.log(test.funcA(newList));