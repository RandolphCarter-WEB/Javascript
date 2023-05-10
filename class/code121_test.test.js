const fn = require('./code121_test');

describe('isSame Num? Test', () => {
    test("[input 1] FuncA result: 1", () => {
        expect(fn.funcA(1)).toBe(11);
    });

    test("[input 2, 3] FuncB result: {a:2, b:3}", () => {
        expect(fn.funcB(2, 3)).toEqual({a:2, b:3});
    });

    test("[input 2, 3] FuncB result: {a:2, b:3}", () => {
        expect(fn.funcC(2, 3)).toEqual({a:2, b:3});
    });

    test("[input 2, 3] FuncB result: {a:2, b:3, c:undefined}", () => {
        expect(fn.funcC(2, 3)).toStrictEqual({a:2, b:3, c:undefined});
    });
});