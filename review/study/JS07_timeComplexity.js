const list01 = [1,2,3];
list01.push(4,5,6,7,8,9);
console.log(list01);
//time Complex = > O(1)

const list02 = [2,3,4];
list02.unshift(1);
console.log(list02);
//배열의 재배치
//time Complex => O(n)

const list03 = [1,2,3,4];
list03.splice(2, 1);
console.log(list03);
list03.splice(2, 0, 6);
console.log(list03);
//time Complex => O(n)

const list04_01 = [1,2,3];
const list04_02 = [4,5,6];
console.log(list04_01.concat(list04_02));
console.log(list04_01);
//time Complex => O(n)

const list05 = [2,3,1,6,7,8,4,5,9];
console.log(list05);
list05.sort();
console.log(list05);
//time Complex => O(n log n)
//destroy function

const list06 = [1,2,3,4,5,6,7,8,9];
console.log(list06.join(""));
console.log(list06);
//time Complex => O(n)
//none-destroy function

const list07 = [1,2,3,4,5,6,7,8];
console.log(list07.pop());
console.log(list07);
//time Complex => O(1)
//destroy function

const list08 = [1,2,3,4,5,6,7,8,9];
console.log(list08.shift());
console.log(list08);
//time Complex => O(n)
//destroy function

const list09 = [1,2,3,4,5,6,7,8,9];
const list09_01 = list09.slice(0,3);
console.log(list09_01);
console.log(list09);
console.log(list09.slice(0, 3));
console.log(list09);
//time Complex => O(n)
//none-destroy function

const list10 = [1,2,3,4,5,6,7,8,9];
console.log(list10.splice(4,0,"hi"));
console.log(list10);
console.log(list10.splice(4, 1));
console.log(list10);
//time Complex => O(n)
//destroy function

const list11 = [1,2,3,4,5,6,7,8,9];
list11.reverse();
console.log(list11);
//time Complex => o(n)
//destroy function

const list12 = [1,2,3,4,5,1,2,3,4,1,2,3,4];
const result01 = list12.some(element => element === 5);
console.log(result01);
//time Complex => O(n)
//none-destroy function

const list13 = [1,2,3,4,5,6,7,8,9];
console.log(list13.filter(element => element >= 5));
console.log(list13);
//time Complex => O(n)
//none-destroy function

const list14 = [1,2,3,4,5,6,7,8,9];
console.log(list14.every(element => element > 0));
console.log(list14);
//time Complex => O(n)
//none-destroy function

const list15 = [1,2,3,4,5,6,7,8,9];
console.log(list15.find(element => element === 5));
console.log(list15);
//time Complex => O(n)
//none-destroy function

const list16 = [1,2,3,1,2,3,1,2,3];
const result02 = list16.reduce(
    (num, element) => {
            if(element === 3) ++num;
            return num;
        }, 0);

console.log(result02);
console.log(list16);
//time Complex => O(n)
//none-destroy function

const list17 = [1,2,3,[4,5,6], [1,2,3], [8,9,7]];
const result03 = list17.reduce(
    (acc, element) => {
                return acc.concat(element);
        },[]);
console.log(result03);
//time Complex => O(n)
//none-destroy function

const dic01 = {
    name : "default",
    age : 20
}

console.log(Object.entries(dic01));
console.log(dic01);
//time Complex => O(n)
//none-destroy function

const dic02 = {
    name : "default",
    userName : "default",
    age : 20
}
Object.seal(dic02);
console.log(dic02);
dic02.commit = "default";
console.log(dic02);
//기존의 객체를 잠궈버림.

const dic03 = {
    one : 1,
    two : 2,
    three : 3,
    four : 4
}
const dic03_01 = {
    five : 5,
    six : 6,
    seven : 7
}
let result04 ={};
Object.assign(result04, dic03, dic03_01);
console.log(result04);
console.log(dic03);
console.log(dic03_01);
//destroy function

const dex = 531;
console.log(dex.toString(2));
console.log(dex.toString(8));
console.log(dex.toString(16));
console.log(dex);
//another this is not 10
console.log(parseInt(dex.toString(2), 16));
console.log(parseInt(dex.toString(2), 8));

