// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Sentence-1");
//         resolve(2);
//     }, 2000);
// }).then(val => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Sentence-${val}`);
//             resolve(3);
//         }, 2000);
//     })
// }).then(val2 => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Sentence-${val2}`);
//         }, 2000);
//     })
// });

function timeoutLogic(num, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Sentence ${num}`);
            resolve(num+1);
        }, timer);
    });
}

async function test() {
    funcA = () => {
        Promise.all([
            new Promise(resolve => setTimeout(() => resolve(1), 3000)),
            new Promise(resolve => setTimeout(() => resolve(2), 2000)),
            new Promise(resolve => setTimeout(() => resolve(3), 1000))
        ]).then((val) => {
            console.log(val);
        });
    }

    await timeoutLogic(1, 2000);
    await funcA();
    await timeoutLogic(2, 2000);
    await timeoutLogic(3, 2000);
}

test();