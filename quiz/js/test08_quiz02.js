function CreateRadio(name_value, id_value, num) {
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", name_value);
    radio.setAttribute("id", id_value);
    radio.setAttribute("value", num);

    return radio;
}

function CreateLabel(id_value, num) {
    let label = document.createElement("label");
    label.setAttribute('for', id_value);
    label.setAttribute("value", num);
    label.textContent = "answer"+num;

    let radio = CreateRadio("group", id_value, num);
    label.append(radio);

    return label
}

function CreateDiv(id_value) {
    let div = document.createElement("div");
    div.setAttribute("id", id_value);

    return div;
}

function main() {
    let main = document.querySelector("#main_container");
    let answer = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    let id = "rd";
    let result_div = CreateDiv("result");

    for(let i = 1; i <= 10; i++) {
        let label = CreateLabel(id+i, i);

        main.append(label);
    }
    main.append(result_div);

    console.log(answer);

    document.querySelector("#btn").addEventListener("click", function() {
        let label = main.querySelector('label input[type="radio"]:checked');

        (+label.value === answer) ?
            result.textContent = `정답입니다!`
            : result.textContent = `정답이 아닙니다!`;

    });
}

main();