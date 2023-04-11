let one, two, three;
const arr1 = [1, 2, 3];

[one, two, three] = arr1;
console.log(one, two, three);

let obj = { one: "1", two: "2" };
console.log(obj);

let five, six;

({five, six} = { one: "1", two: "2"});

let { width: w = 100, height : h = 200, title} = { title: "menu" };
console.log(w, h, title);

let option = {
    size: {width: 100, height: 200},
    item: ["cake", "Donut"],
    extra: true
};

funcA = ({size: {width, height}, item: [item1, item2], extra}) => {
    console.log(width, height, item1, item2, extra);
};

funcA(option);