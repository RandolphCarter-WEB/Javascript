const fn = {
    funcA : a => a + 10,
    funcB : (a, b) => ({a, b}),
    funcC : (a, b) => ({a, b, c:undefined})
}

module.exports = fn;