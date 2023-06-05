function solution(str) {
    let XNum = str.split(" ").reduce((acc, val) => {
        if(val.includes("x")) {
            const XNum = val.slice(0, -1);
            if(XNum !== "") {
                return acc + parseInt(XNum);
            } else {
                return acc + 1;
            }
        } else {
            return acc;
        }
    }, 0);

    let Num = str.split(" ").reduce((acc, val) => {
        if(!val.includes("x") && !val.includes("+")) {
            return acc + parseInt(val);
        } else {
            return acc;
        }
    }, 0);

    if(XNum != 0 && Num != 0) {
        return (XNum == 1) ?
            "x + " + Num : XNum + "x + " + Num;
    } else if (XNum != 0 && Num == 0) {
        return (XNum == 1) ?
            "x" : XNum + "x";
    } else {
        return Num.toString();
    }
}