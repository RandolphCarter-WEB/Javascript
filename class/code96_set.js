const List01 = [1, 2, 3, 4, 5];
const Object01 = {1: "1", 2: "2", 3: "3", 4: "4"};

const setList01 = new Set(List01);
const setObjKey01 = new Set(Object.keys(Object01));
const setObjValue01 = new Set(Object.values(Object01));

console.dir("List Set >> "+setList01);
console.dir("Object Set >> "+setObjKey01);
console.dir("Object Set >> "+setObjValue01);

for (const items of setList01) {
    console.log(items);
}

for (const items of setObjKey01) {
    console.log(items);
}

for (const items of setObjValue01) {
    console.log(items);
}

const elementSet = setList01.values();

console.log(elementSet.next());
console.log(elementSet.next());
console.log(elementSet.next());

setList01.forEach((element, index) => {
    console.log(element, index);
});