const item01 = ` test test  test 
    test `;

console.log(item01);
console.log(item01.trim());
console.log(item01);
//none-destroy function

const item02 = "This sentence is test sentence for destroy function";
console.log(item02.slice(13));
console.log(item02);
console.log(item02.slice(13, 5));
console.log(item02);
//none-destroy function

const item03 = "This sentence is test sentence for destroy function";
console.log(item03.substring(13));
console.log(item03);
console.log(item03.substring(13, 10));
console.log(item03);
//none-destroy function

const item04_01 = [1,2,3];
const item04_02 = [4,5,6];
const item04_03 = [7,8,9];
console.log(item04_01.concat(item04_02));
console.log(item04_01);
console.log(item04_01.concat(item04_02, item04_03));
console.log(item04_01);
//none-destroy function

//char find => chatAt
//index find => indexOf (first)
//index find => lastIndexOf (last)

const item05 = "This Sentence is test sentence for destroy function";
console.log(item05.toUpperCase());
console.log(item05);
console.log(item05.toLowerCase());
console.log(item05);
//none-destroy function

const item06 = "0123456789";
console.log(Array.from(item06));
console.log(item06);
//none-destroy function

const item07 = "0123456789"
console.log(item07.split(""));
console.log(item07);
//none-destroy function