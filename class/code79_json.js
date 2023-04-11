let a = {
    "name": "응애",
    "age" : "응애"
};

let a_str = JSON.stringify(a);
let b_par = JSON.parse(a_str);

console.log(a_str);
console.log(a);

console.log(b_par);