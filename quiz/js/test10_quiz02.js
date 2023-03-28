function CreateButton({type, id, textContent}) {
    const button = document.createElement("button");
    button.setAttribute("type", type)
    button.setAttribute("id", id);
    button.textContent = textContent;

    return button;
}

function CreateDiv({id, textContent}) {
    const div = document.createElement("div");
    div.setAttribute("id", id);
    div.textContent = textContent;

    return div;
}

function CreateStyle({name, padding, width, height, fontSize, backgroundColor, color, transition}) {
    const style = document.createElement("style");
    style.innerHTML = `
        .${name} {
            padding : ${padding}px;

            width : ${width}px;
            height : ${height}px;

            font-size : ${fontSize}px;

            background-color : ${backgroundColor};
            color: ${color};

            transition: all ${transition}s ease;
        }
    `;

    return style;
}

function SetEnviron(main) {
    const button_toggle = {
        type : "button",
        id : "toggle_button",
        textContent : "class Toggle"
    };

    const div_result = {
        id : "result",
        textContent : "This is DIV element."
    }

    const style_anime = {
        name : "bigger_anime",
        transition : 3,
        padding : 25,
        width : 500,
        height : 100,
        fontSize : 25,
        backgroundColor : "coral",
        color : "white"
    }

    const button01 = CreateButton(button_toggle);
    const div01 = CreateDiv(div_result);
    const style01 = CreateStyle(style_anime);

    document.head.appendChild(style01);
    main.append(button01, div01);
}

function AnimeBigger(result_div) {
    const TF = result_div.classList.contains("bigger_anime");
    if(!TF) {
        console.log("Input");
        result_div.classList.add("bigger_anime");
    }
    else {
        console.log("Output");
        result_div.classList.remove("bigger_anime");
    }
}

function main() {
    const main = document.querySelector(".main_container");

    SetEnviron(main);

    const button = document.querySelector("#toggle_button");
    const result_div = document.querySelector("#result");

    button.addEventListener("click", function() { AnimeBigger(result_div); });
}

main();