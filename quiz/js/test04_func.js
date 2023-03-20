let input_num = prompt("Imput Num");

for(let i = 0; i < input_num; i++) {
    for(let j = 0; j <= i; j++) {
        document.write("*");
    }
    document.write(`<br>`);
}

let input_num02 = prompt("Imput Num");

for(let h = 0; h < input_num02; h++) {
    for(let g = 0; g < h; g++) {
        document.write("&nbsp;");
    }
    for(let f = 0; f < input_num - h; f++) {
        document.write("*");
    }
    document.write(`<br>`);
}

let input_num03 = prompt("Imput Num01");
let input_num04 = prompt("Imput Num02");


document.write("<table>");
for(let b = input_num03; b <= input_num04; b++) {
    document.write("<tr>");
    for(let num = 1; num < 10; num++) {
        document.write(`<td>${b} x ${num} = ${b*num}</td>`);
    }
    document.write("</tr>");
}
document.write("</table>");


let input_num05 = prompt("Imput Num01");
let input_num06 = prompt("Imput Num02");


document.write("<table>");
for(let w = 0; w < 10; w++) {
    document.write("<tr>");
    for(let q = input_num05; q <= input_num06; q++) {
        (w == 0) ?
            document.write(`<td>${q}단</td>`)
            : document.write(`<td>${q} x ${w} = ${q*w}</td>`);
    }
    document.write("</tr>");
}
document.write("</table>");