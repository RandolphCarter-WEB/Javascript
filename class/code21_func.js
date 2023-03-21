function funcA(x) {
    console.log("This is A function.");
    console.log(typeof x);
    // console.log(typeof x());
    console.log(x());
}

function funcB(num) {
    console.log("This is B function.");
    return num+1;
}

funcA(funcB);
console.log(typeof funcB);
console.log(typeof funcB());

function funcC() {
    return function() {
        console.log("This is return C function.");
    };
}

const funcD = funcC();


function funcE(a, b, c, d, e = 10) {
    console.log(a, b, c, d, e);
}

funcE(1, 2, 3);
funcE(1, 2, 3, 4, 5);

function funcF(a, b, c, d, ...rest) {
    console.log(a, b, c, d, rest);
}

funcF(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcG(val1, val2, ...rest) {
    console.log(val1, val2, rest);
}

let val01 = 5;
let val02 = 7;
let val03 = 10;
let val04 = 3;
let val05 = 9;
let val06 = 999;

funcG(val01, val02, val03, val04, val05, val06);