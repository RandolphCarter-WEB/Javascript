const tell = "01234567팔";
const tel2 = "987654321";

const MyRegExp1 = /^[0-9]+$/;
const MyRegExp2 = new RegExp("^[0-9]+$");

console.log(MyRegExp1.test(tell));
console.log(MyRegExp1.test(tel2));

console.log(MyRegExp2.test(tell));
console.log(MyRegExp2.test(tel2))