function funcA() {
    console.log(a);
}

function funcB() {
    let a = 3;
    funcA();
}

funcB();