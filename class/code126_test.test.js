const obj = require('./code126_test');

beforeEach(() => console.log('[Out] beforeEach'));
afterEach(() => console.log('[Out] afterEach'));

test("[Match] name : John Doe", () => {
    expect(obj.user.name).toMatch(/^John Doe$/);
});

test("[Match] age : 30", () => {
    expect(obj.user.age).toBe(30);
});

describe("[Match] car" , () => {
    beforeEach(() => console.log("[In] beforeEach"));
    afterEach(() => console.log("[In] afterEach"));

    test("[Match] car brand : ford", () => {
            expect(obj.user.car.brand).toMatch(/^Ford$/);
        });
})