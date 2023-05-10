test("result of 2 + 2", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(5.5);
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test("result of decimal add", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
});

test("match team include 'I'", () => {
    expect("team").not.toMatch(/I/);
});

test("Christoph isHave stop?", () => {
    expect("Christoph").toMatch(/stop/);
});