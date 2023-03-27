const arr1 = [];
arr1.push("a");

console.dir(arr1);
//arr1.prototype.a1 = 1;

arr1.__proto__.a1 = 3;
arr1.__proto__.funcA = function() {
    console.log("Arr prototype function");
}

console.log(arr1.a1);
arr1.funcA();

function funcB() {
    const arr1 = [];
    arr1.__proto__.pa1 = 10;

}

funcB();
