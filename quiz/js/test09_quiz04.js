function CreateButton(id_value, width_value, height_value, color_value, text_content) {
    const button = document.createElement("button");

    button.setAttribute("id", id_value);
    button.setAttribute("type", "button");
    button.style.width = width_value;
    button.style.height = height_value;
    button.style.backgroundColor = color_value;
    button.textContent = text_content;

    return button;
}

function CreateDiv(id_value, width_value, height_value, color_value) {
    const div = document.createElement("div");

    div.setAttribute("id", id_value);
    div.style.width = width_value;
    div.style.height = height_value;
    div.style.backgroundColor = color_value;

    return div;
}

function SetMain(main) {
    main.style.backgroundColor = "gray";
    main.style.padding = "5rem";
}

function main() {
    const main_div = document.querySelector("#main_container");
    const make_button = CreateButton("btn", "200px", "100px", "pink", "Button_Click!");

    main_div.append(make_button);

    const button = document.querySelector("#btn");
    button.addEventListener("click", function() {
        // SetMain(main);
        let result_div = CreateDiv("result", "500px", "200px", "white");

        document.body.prepend(result_div);
    });
}

main();