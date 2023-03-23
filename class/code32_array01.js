let array01 = [1, 2, 3, "오승택", "S", true, false];
let array02 = [function(){}, {}];


console.log(array01);
console.log(array02);

console.log(array01.length);

console.dir(array01);

let array03 = ["a", "b", "c", "d", "e", "f"];

array03.push("g");
console.log(array03);

console.log(array03.pop());
console.log(array03.shift());

console.log(array03);

let array04 = ["a", "b", "c"];
let array05 = ["d", "e", "f"];

console.log(array04);
console.log(array05);

array04  = array04.concat(array05);

console.log(array04);

let str = array04.join(".");

console.log(str);

console.log(array04.reverse());

let array06 = [5, 1, 23, 2, 10, 6, 85, 46, 4];

console.log(array06);
console.log(array06.sort());

array06.sort()
console.log(array06);

let array07 = [1, 2, 3, 4, 5, 6, 7];
let array08 = array07.slice(0, 3);
console.log(array08);