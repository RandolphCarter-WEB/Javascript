function funcA(a, b, c, funcname) {
    console.log(a, b, c);
    console.log(this);

    let umm = Object.keys(this).includes(funcname);
    if(umm) {
        console.log("suc to include " + funcname + " func");
        console.log(this[funcname]());
;    }
    else {
        console.log("fail to include " + funcname + " func");
    }
}

const a = {
    a1 : 1,
    a2 : 2,
    a3 : 3,
    UMMA() {
        return 2;
    }
};

const b = {
    b1 : 4,
    b2 : 5,
    b3 : 6,
    UMMB() {
        return 1;
    }
};

console.log("this is func in null object");
funcA.call(null, a.a1, a.a2, a.a3, "UMMA");
funcA.call(null, b.b1, b.b2, b.b3, "UMMB");
console.log("\n");

console.log("this is func in \"\" object");
funcA.call("", a.a1, a.a2, a.a3, "UMMA");
funcA.call("", b.b1, b.b2, b.b3, "UMMB");
console.log("\n");

console.log("this is func in String object");
funcA.call(String, a.a1, a.a2, a.a3, "UMMA");
funcA.call(String, b.b1, b.b2, b.b3, "UMMB");
console.log("\n");

console.log("this is func in object");
funcA.call(a, a.a1, a.a2, a.a3, "UMMA");
funcA.call(b, b.b1, b.b2, b.b3, "UMMB");
console.log("\n");

console.log("this is func in object");
let A = funcA.bind(a, a.a1, a.a2);
let B = funcA.bind(b, b.b1, b.b2, b.b3);

A(a.a3, "UMMA");
B("UMMB");
console.log("\n");

console.log("this is func in object with this.value");
funcA.call(a, this.a1, this.a2, this.a3, "UMMA");
funcA.call(b, this.b1, this.b2, this.b3, "UMMB");
console.log("\n");

console.log("this is object value in func");
funcA(a.a1, a.a2, a.a3, "UMMA");
funcA(b.b1, b.b2, b.b3, "UMMB");