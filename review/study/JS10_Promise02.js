function doJob(name, person) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(person.stamina > 50) {
                person.stamina -= 30;
                res({
                    result : `${name} successfully`
                });
            } else {
                rej(new Error(`${name} failed`));
            }
        }, 1000);
    });
}

const harin = {stamina : 100};

// doJob("work", harin)
//     .then(v => {
//         console.log(v.result);
//         harin.stamina -= v.loss;
//         return doJob("study", harin);
//     })
//     .then(v => {
//         console.log(v.result);
//         harin.stamina -= v.loss;
//         return doJob("work", harin);
//     })
//     .then(v => {
//         console.log(v.result);
//         harin.stamina -= v.loss;
//         return doJob("study", harin);
//     })
//     .catch(err => {
//         console.error(err);
//     });

const excute = async () => {
    try {
        let v = await doJob("work", harin);
        console.log(v.result);
        v = await doJob("study", harin);
        console.log(v.result);
        v = await doJob("work", harin);
        console.log(v.result);
        v = await doJob("study", harin);
        console.log(v.result);
        v = await doJob("work", harin);
        console.log(v.result);
    } catch (e) {
        console.log(e);
    }
}

excute();
