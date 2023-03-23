const obj = {
    0 : "1",
    1 : "2",
    2 : "3",
    length : 3
};

for(let i = 0; i < obj.length; i++) {
    console.log(obj[i]);
}

Array.prototype.push.apply(obj, ["d"]);
console.log(obj);

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

console.log(... arr1);
console.log(1,2,3,4,5);

const copyArr1 = [... arr1];
console.log(copyArr1);

const arr2 = [1, 2, 3];
const arr3 = [4, 5, 6];

const conacatArr2 = [... arr2, ...arr3];
console.log(conacatArr2);

const concatArr3 = [... arr2, 10, ... arr3];
console.log(concatArr3);

function addArr(a, b, c) {
    console.log(a+b+c);
}

addArr(... arr2);

const obj1 = {
    name : "ost",
    age : "24"
};


const obj2 = {
    address : "daejoen"
}

const obj3 = {... obj1, ... obj2};

console.log(obj3);