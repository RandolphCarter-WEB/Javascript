// import * as lc from "lower-case"

const lc = require("lower-case");

const string01 = "STRING";
const string02 = "String";

console.log(lc.lowerCase(string02));
console.log(lc.localeLowerCase(string01, "tr"));