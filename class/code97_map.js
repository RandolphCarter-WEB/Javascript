let map1 = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
]);

console.dir(map1);
console.log(map1.keys());
console.log(map1.values());
console.log(map1.get("key1"));

for (const items of map1) {
    console.log(items);
}

const arr = [1, 2, 3, 4, 5];
const arr1 = arr.map((element) => { element + 1 });

console.log(arr1);