function SomethingObject({a, b}) {
    this.a = a;
    this.b = b;
}

const obj = {
    a : 1,
    b : 2
}
SomethingObject.prototype.c = 4;
Object.d = 4;

const obj1 = new SomethingObject(obj);
console.log(obj1);
console.dir(obj1);

console.log(obj.c);
console.log(obj.d);