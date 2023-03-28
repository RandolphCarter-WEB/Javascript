function Cos1(param1) {
    this.param1 = param1;
    // this.param2 = function() {
    //     console.log("Hello");
    // };
    //this is not good at active
}

Cos1.prototype.param2 = function() {
    console.log("hello");
    console.log(this.param1);
};

const obh1 = new Cos1("aaa");
const obh2 = new Cos1("bbb");
const obh3 = new Cos1("ccc");

console.dir(obh1);
obh1.param2();
console.log("\n");

console.dir(obh2);
obh2.param2();
console.log("\n");

console.dir(obh3);
obh3.param2();
console.log("\n");

