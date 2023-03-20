for(let a = 0; a < 100; a++) {
    (a % 2) == 0 ? console.log(`${a} is even.`) : console.log(`${a} is odd.`); 
}

console.log(`for loop is finish!`);

// function Myfunc() {
//     console.log("Hi this is Myfunc.");
// }

function Myfunc(x = 3) {
    console.log(`[${x}] Hi this is Myfunc.`);
}

Myfunc();
Myfunc(5);
Myfunc();

let result = function ReturnMyfunc() {
    console.log(`Hi this is Myfunc.`);
    return 100;
}();

console.log(result);

let result_func = function() {
    return 100;
}();

console.log(result_func);