// function funcC() {
//     console.log("funcC!");
// }

// function funcB(funcC) {
//     console.log("funcB!");
//     return funcC();
// }

// function funcA(funcC, funcB) {
//     console.log("funcA!");
//     return funcB(funcC, funcB);
// }

// funcA(funcB, funcC);

setTimeout(function() {
    console.log("First Running Func");
    return setTimeout(function () {
        console.log("Second Running Func");
        return setTimeout(function () {
            console.log("Third Running Func");
        }, 5000)
    }, 3000)
}, 2000);