const fn = {
    getAge1 : callback => {
        const age = 20;
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(age);
            }, 3000);
        });
    },
    getAge2 : callback => {
        const age = 20;
        return new Promise((res, rej) => {
            setTimeout(() => {
                rej("error")
            }, 3000);
        });
    }
}

module.exports = fn;