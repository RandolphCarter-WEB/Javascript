function FuncA() {
    var a = 3;
    function FuncB() {
        console.log(a);
    }

    FuncB();
}

FuncA();

function funcA() {
    var a = 10;
    return function() {
        console.log(a);
    }
}

var funcB = funcA();
funcB();