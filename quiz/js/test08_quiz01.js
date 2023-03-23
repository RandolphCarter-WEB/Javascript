function CreateLabel(value, text_content) {
    let label = document.createElement('label');
    label.setAttribute('for', value);
    label.textContent = text_content;

    return label;
}

function CreateSelect(id_value) {
    let select = document.createElement('select');
    select.setAttribute('id', id_value);
    select.setAttribute('name', id_value);
    SelectOfOption(select, 0, 100);

    return select;
}

function CreateOption(option_value, text_content) {
    let option = document.createElement('option');
    option.setAttribute('value', option_value);
    option.textContent = text_content;

    return option;
}

function CreateDiv(id_value) {
    let div = document.createElement('div');
    div.setAttribute('id', id_value);

    return div;
}

function SelectOfOption(select, start, end) {
    for(let i = start; i < end; i++) {
        let value = i;
        const option = CreateOption(i, i);
        select.append(option);
    }
}

function ChangeEvent(event) {
    const select = event.target;
    const select_option = select.options[select.selectedIndex];
    const result_div = document.querySelector("#result");
    result_div.textContent = select_option.textContent;
}

function main() {
    let main = document.getElementById("main_container");

    let label = CreateLabel("phone_num", "휴대폰 앞자리");
    let select = CreateSelect("phone_num");
    let result_div = CreateDiv("result");

    main.append(label, select, result_div);

    select.addEventListener("change", ChangeEvent);
}

main();