function num_analysis() {
    let num01 = document.getElementById("input_num01");
    let num02 = document.getElementById("input_num02");
    let result = document.getElementById("result");

    if (num01.value > num02.value) {
        if (num01.value % num02.value == 0) {
            result.innerHTML = `<h1>${num01.value}은 ${num02.value}의 배수입니다.</h1>`;
        }
        else {
            result.innerHTML = `<h1>${num01.value}은 ${num02.value}의 배수가 아닙니다.</h1>`;
        }
    }
    else {
        if (num02.value % num01.value == 0) {
            result.innerHTML = `<h1>${num02.value}은 ${num01.value}의 배수입니다.</h1>`;
        }
        else {
            result.innerHTML = `<h1>${num02.value}은 ${num01.value}의 배수가 아닙니다.</h1>`;
        }
    }
}