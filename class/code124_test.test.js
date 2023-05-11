const fn = require('./code124_test');

test("[After 3s] result 20(resolve)", () => {
    fn.getAge1().then(age => {
        expect(age).toBe(20);
    });
});

test("[After 3s] result 20(resolve)", () => {
    return expect(fn.getAge1()).resolves.toBe(20);
});

test("[After 3s] result 20(reject)", () => {
    return expect(fn.getAge2()).rejects.toMatch(/error/);
});

test("[After 3s] result 20(reject)", async () => {
    await expect(fn.getAge1()).resolves.toBe(20);
});