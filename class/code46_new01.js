const obj1 = {
    name : "OST",
    address : "Deajeon",
    number : 9145
};

console.dir(obj1);

function People({name, address, num}) {
    this.name = name;
    this.address = address;
    this.num = num;
}

const man01_info = {
    name : "OST",
    address : "Deajeon",
    num : 5628
};
const woman01_info = {
    name : "PMJ",
    address : "Busan",
    num : 5468
};

const man01 = new People(man01_info);
const woman01 = new People(woman01_info);

console.dir(man01);
console.dir(woman01);