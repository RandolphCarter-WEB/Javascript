function ButtonActive() {
    let input_num = document.getElementById("input_num");
    let result = document.getElementById("result");

    (input_num.value % 2) == 0 ?
        (result.innerHTML = `<h1>[${input_num.value}] This num is even.</h1>`)
        : (result.innerHTML = `<h1>[${input_num.value}] This num is odd.</h1>`);
}