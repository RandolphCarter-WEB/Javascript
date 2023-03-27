console.log("Global's this");
console.log(this);

console.log("Function's this");
function funcA() {
    console.log("funcA's this");
    console.log(this);
}

console.log("Object's this");
let a = {
    a1 : "123",
    b1 : "456",
    cl() {
        console.log("a object's this");
        console.log(this);
    }
};
a.cl();

console.log("Object's this in Object");
let b = {
    a1 : "789",
    b1 : "012",
    c1 : {
        a2 : "345",
        b2 : "678",
        c2() {
            console.log("c1 object's this in b object");
            console.log(this);
        },
        c3() {
            console.log("c1 object's this to b object");
            console.log();
        }
    }
};
b.c1.c2();