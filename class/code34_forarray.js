let arr1 = [1, 2, 3, 4, 5];

for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (let i of arr1) {
    console.log(i);
}

let arr2 = ["item1", "item2", "item3", "item4", "item5"];

arr2.forEach(function(item, index) {
    console.log(`${index} : ${item}`);
});

delete arr1[2];

arr2.forEach(function(item, index) {
    console.log(`${index} : ${item}`);
});

console.log(arr1);