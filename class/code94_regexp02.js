const target = "This is a pen";
const regtext = /Is/ig;

console.log(regtext.test(target));
console.log(regtext.exec(target));

console.log(target.match(regtext));
console.log(target.replace(regtext, "are"));

console.log(target.search(regtext));
console.log(target.split(regtext));