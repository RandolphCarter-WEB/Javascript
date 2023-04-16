new Promise(function (resolve) {
    setTimeout(function () {
        console.log("first Sentence");
        resolve("This is first Promise Sentence.");
    }, 3000);
}).then(val => {
    console.log(val);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second Sentence");
            resolve("This is second promise Sentence.");
        }, 500);
    }).then(val2 => {
        console.log(val2);
        return 1;
    }).then(val3 => {
        console.log(val3);
    });
});

funcA = () => {
    setTimeout(() => {
        console.log("This is funcA.");
    },2000);
}

funcB = () => {
    setTimeout(() => {
        console.log("This is funcB.");

        setTimeout(() => {
            console.log("This is funcB with return func.");
        }, 500);
    }, 3000);
}

funcC = () => {
    setTimeout(() => {
        console.log("This is funcC.");
    },3000);
}

funcA();
funcB();
funcC();

console.log("This is out of function.");