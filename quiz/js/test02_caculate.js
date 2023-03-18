let number = document.getElementById("calculator_data");
let num01_input = document.getElementById("num01");
let work_input = document.getElementById("work");

let num01 = null;
let num02 = null;
let work = null;

function reset_data() {
    number.value = "";
}

function reset_num() {
    num01 = null;
    num02 = null;
}

function Input_Value(num) {
    if((typeof num) == "number") {
        number.value += String(num);
        console.log(number.value);
    }
    else if ((typeof num) == "string") {
        number.value += num;
        console.log(number.value);
    }
    else {
        console.log(`ERROR[func Input_Value]>> Type Error`);
    }
    
}

function Check_Num(value) {
    work = value;

    if (num01 == null) {
        num01 = number.value;
        num01_input.value = num01;
        reset_data();
    }
    else if (num01 != null) {
        num02 = number.value;
        num01 = calculator(work);
        num01_input.value = num01;
        reset_data();
    }
    else {
        console.log(`ERROR[func Check_Num]>> num01 Value Error`);
    }
}

function calculator(work) {
    if (work_input.tagName === "INPUT") {
        work_input.value = work;
    }
    switch(work) {
        case '+':
            return parseInt(num01) + parseInt(num02);
        case '-':
            return parseInt(num01) - parseInt(num02);
        case '/':
            return parseInt(num01) / parseInt(num02);
        case '%':
            return parseInt(num01) % parseInt(num02);
        case 'x':
            return parseInt(num01) * parseInt(num02);
        default:
            console.log(`ERROR[func calculator]>> Operator Error`);
    }
}

function Input_Number(value) {
    switch(value) {
        case "1":
            Input_Value(1);
            break;
        case "2":
            Input_Value(2);
            break;
        case "3":
            Input_Value(3);
            break;
        case "4":
            Input_Value(4);
            break;
        case "5":
            Input_Value(5);
            break;
        case "6":
            Input_Value(6);
            break;
        case "7":
            Input_Value(7);
            break;
        case "8":
            Input_Value(8);
            break;
        case "9":
            Input_Value(9);
            break;
        case "0":
            Input_Value(0);
            break;
        case "00":
            Input_Value("00");
            break;
        case ".":
            Input_Value(".");
            break;
        default:
            console.log(`ERROR[func Input_Number]>> Button Input Error`);
            break;
    }
}

function Input_Operator(value) {
    switch(value) {
        case "%":
            Check_Num(value);
            break;
        case "RS":
            reset_data();
            num01_input.value = "";
            work_input.value = "";

            reset_num();
            break;
        case "x":
            Check_Num(value);
            break;
        case "/":
            Check_Num(value);
            break;
        case "+":
            Check_Num(value);
            break;
        case "-":
            Check_Num(value);
            break;
        case "=":
            num02 = number.value;
            number.value = calculator(work);
            reset_num();
            break;
        default:
            console.log(`ERROR[func Input_Operator]>> Button Input Error`);
            break;
    }
}