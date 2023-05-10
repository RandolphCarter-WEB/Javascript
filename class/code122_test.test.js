test("null", () => {
    const n = null;
    expect(n).toBeNull();           // n === null
    expect(n).toBeUndefined();      // n === undefined
    expect(n).toBeDefined();         // n !== undefined
    expect(n).toBeTruthy();         // !!(n) == true
    expect(n).toBeFalsy();          // !!(n) == false
    //one test only have one case
});