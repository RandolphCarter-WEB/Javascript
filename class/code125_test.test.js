const sum = require('./code125_test');

let num = 1;

beforeEach(() => {
    num = 1;
});

beforeAll(() => {
    console.log("Before all tests");
});

afterAll(() => {
    console.log("All tests passed");
});

test('[input num, 1] Output: 2', () => {
    num = sum(num, 1);
    expect(num).toBe(2);
});

test('[input num, 2] Output: 3', () => {
    num = sum(num, 2);
    expect(num).toBe(3);
});

test('[input num, 3] Output: 4', () => {
    expect(sum(num, 3)).toBe(4);
});

test('[input num, 4] Output: 5', () => {
    expect(sum(num, 4)).toBe(5);
});
