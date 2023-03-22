const obj01 = {
    name : "kim",
    age: 45,
    major: "computer science"
}

for(let v in obj01) {
    console.log(`${v} : ${obj01[v]}`);
}

let obj02 = {
    name : "aaa",
    age : 45,
    address : "수원시",
    innerobj : {
        abc : "abc"
    }
};

console.log("name" in obj02);
console.log("kind" in obj02);
console.log("abc" in obj02.innerobj);

console.log(obj02.kind || "default");

with(obj02) {
    console.log(name);
    console.log(innerobj.abc);
}

delete obj01.age;
console.log(obj01.age);

delete obj02;
console.log(obj02.innerobj);
console.log(obj02.age);
console.log(obj02);