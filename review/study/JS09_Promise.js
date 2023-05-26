function promiseForHomework(mustDo) {
    return new Promise((res, rej) => {
        setTimeout(() =>{
            console.log("doing homework");
            if(mustDo) {
                res({
                    result : "homework-result"
                });
            } else {
                rej(new Error("Too laze!!"));
            }
        }, 3000);
    });
}

const promiseA = promiseForHomework(true);
console.log("promiseA created");

const promiseB = promiseForHomework();
console.log("promiseB created");

promiseA.then(v => console.log(v.result));
promiseB.then(v => console.log(v.result)).catch(err => console.error(err));