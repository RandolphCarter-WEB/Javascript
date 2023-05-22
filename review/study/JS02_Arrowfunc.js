const numDouble = x => x + x;
console.log("[View] Add 4 + 4 >> " +numDouble(4));

const numAdd = (a, b) => a + b;
console.log("[View] Sum 5 + 9 >> " +numAdd(5, 9));

const sum = (...rest) => {
    let total = 0;
    rest.forEach(element => total += element);

    return total;
}
console.log("[View] Sum 1 ~ 9 >> " +sum(1,2,3,4,5,6,7,8,9));