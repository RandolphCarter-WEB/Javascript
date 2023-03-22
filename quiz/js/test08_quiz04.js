function CreateDiv(id_value) {
    let div = document.createElement("div");
    div.setAttribute("id", id_value);

    return div;
}

function CreateInput(id_value) {
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", id_value);

    return input;
}

function CreateButton(id_value) {
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("id", id_value);
    button.textContent = "Click";

    return button;
}

function CreateUl(main, num) {
    let ul = document.createElement("ul");
    let div = CreateDiv("reasult");

    for (let i = 0; i < num; i++) {
        CreateLi(ul, i);
    }

    main.append(div);
    div.append(ul);
}

function CreateLi(ul, num) {
    let li = document.createElement("li");
    li.textContent = "TEXT " + ++num;

    ul.append(li);
}



function main() {
    let main = document.querySelector("#main_container");

    let input_div = CreateDiv("input_div");
    let input = CreateInput("input_num");
    let button = CreateButton("btn");

    main.append(input_div);
    input_div.append(input, button);

    document.querySelector("#btn").addEventListener("click", function() {
        CreateUl(main, +input.value);
    });
}

main();