var a = null;
var b = 50;
var c = 55;

(a ?? undefined) ? console.log(a) : console.log("a는 null이나 undefined 입니다.");
(b ?? undefined) ? console.log(b) : console.log("b는 null이나 undefined 입니다.");