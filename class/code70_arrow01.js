const funcA = () => {
    console.log("funcA");
}
const funcB = () => console.log("funcB");
funcA();
funcB();

const funcC = function(a) {
    console.log(a);
}
const funcD = (a) => console.log(a);
const funcE = a => console.log(a);
funcC(10);
funcD(10);
funcE(10);

const funcF = a => a + 10;
console.log(funcF(10));

const funcG = (a,b) => a + b;
console.log(funcG(10, 10));