function CreateButton(button_e) {
    if(Object.values(button_e).every(value => value !== null && value !==undefined)) {
        const button = document.createElement("button");
        button.setAttribute("type", button_e["type"]);
        button.setAttribute("id", button_e["id"]);
        button.textContent = button_e["textContent"];

        return button;
    }

    else {
        console.log("[ERROR func CreateButton] >> button object element value error.");
        return 0;
    }
}

function CreateDiv(div_e) {
    if(Object.values(div_e).every(value => value !== null && value !==undefined)) {
        const div = document.createElement("div");
        div.setAttribute("id", div_e["id"]);
        div.textContent = div_e["textContent"];

        return div;
    }

    else {
        console.log("[ERROR func CreateDiv] >> div object element value error.");
        return 0;
    }
}

function CreateStyle(style) {
    const Style = document.createElement("style");
    Style.innerHTML = `
        .${style["name"]} {
            padding : ${style["padding"]}px;

            box-sizing : ${style["boxSizing"]};
            width : ${style["width"]}px;
            height : ${style["height"]}px;

            font-size : ${style["fontSize"]}px;

            background-color : ${style["backgroundColor"]};
            color: ${style["color"]};
        }
    `;

    return Style;
}

function CreateBiggerAnime(style) {
    const Style = document.createElement("style");
    Style.innerHTML = `
        .${style["name"]} {
            transition: all ${style["transition"]}s ease;
            padding : ${style["padding"]}px;

            box-sizing : ${style["boxSizing"]};
            width : ${style["width"]}px;
            height : ${style["height"]}px;

            font-size : ${style["fontSize"]}px;

            background-color : ${style["backgroundColor"]};
            color: ${style["color"]};
        }
    `;

    return Style;
}

function CreateColorAnime(style) {
    const Style = document.createElement("style");
    Style.innerHTML = `
        .${style["name"]} {
            transition: all ${style["transition"]}s ease;
            padding : ${style["padding"]}px;

            box-sizing : ${style["boxSizing"]};
            width : ${style["width"]}px;
            height : ${style["height"]}px;

            font-size : ${style["fontSize"]}px;

            background-color : ${style["backgroundColor"]};
            color: ${style["color"]};
        }
    `;

    return Style;
}

function SetEnviron(main) {
    const button01 = {
        type : "button",
        id : "DesignInput",
        textContent : "Input Design"
    };

    const button02 = {
        type : "button",
        id : "DesignRemove",
        textContent : "Remove Design"
    };

    const button03 = {
        type : "button",
        id : "Animation",
        textContent : "Animation"
    };

    const result_div = {
        id : "result",
        textContent : "This is a DIV element."
    };

    const style_div = {
        name : "style_div",
        padding : 25,
        boxSizing : "border-box",
        width : 500,
        height : 100,
        fontSize : 25,
        backgroundColor : "coral",
        color : "white"
    }

    const Anime01_div = {
        name : "anime_bigger_div",
        transition : 3,
        padding : 25,
        boxSizing : "border-box",
        width : 500,
        height : 100,
        fontSize : 25,
        backgroundColor : "pink",
        color : "white"
    }

    const Anime02_div = {
        name : "anime_color_div",
        transition : 2,
        padding : 25,
        boxSizing : "border-box",
        width : 500,
        height : 100,
        fontSize : 25,
        backgroundColor : "pink",
        color : "white"
    }

    const button01_m = CreateButton(button01);
    const button02_m = CreateButton(button02);
    const button03_m = CreateButton(button03);
    const result_div_m = CreateDiv(result_div);
    const style = CreateStyle(style_div);
    const Anime01_style = CreateBiggerAnime(Anime01_div);
    const Anime02_style = CreateColorAnime(Anime02_div);

    document.head.append(style, Anime01_style, Anime02_style);
    main.append(button01_m, button02_m, button03_m, result_div_m);
}

function AddStyle(result_div) {
    if(!result_div.classList.contains("style_div")) {
        if(result_div.classList.contains("anime_color_div" || "anime_bigger_div")) {
            if(result_div.classList.contains("anime_color_div")) {
                result_div.classList.remove("anime_color_div");
                result_div.classList.add("style_div");
            }
            else if (result_div.classList.contains("anime_bigger_div")){
                result_div.classList.remove("anime_bigger_div");
                result_div.classList.add("style_div");
            }
            else {
                
            }
        }
        else {
            result_div.classList.add("style_div");
        }
    }
    else {
        console.log("[SYSTEM func AddStyle] >> already input class");
    }
}

function RemoveStyle(result_div) {
    if(result_div.classList.contains("style_div")
        || result_div.classList.contains("anime_bigger_div")
        || result_div.classList.contains("anime_color_div")) {
        result_div.className = ``;
    }
    else {
        console.log("[SYSTEM func AddStyle] >> already remove class");
    }
}

function Animation(result_div) {
    if(result_div.classList.contains("anime_color_div" || "anime_bigger_div")) {
        if(result_div.classList.contains("anime_color_div")) {
            result_div.classList.remove("anime_color_div");
        }
        else if (result_div.classList.contains("anime_bigger_div")) {
            result_div.classList.remove("anime_bigger_div");
        }
    }
    else {
        if(result_div.classList.contains("style_div")) {
            result_div.classList.remove("style_div");
            result_div.classList.add("anime_color_div");
        }
        else {
            result_div.classList.add("anime_bigger_div");
        }
    }
}

function main() {
    const main = document.querySelector(".main_container");

    SetEnviron(main);

    const button01_event = document.querySelector("#DesignInput");
    const button02_event = document.querySelector("#DesignRemove");
    const button03_event = document.querySelector("#Animation");
    const result_div = document.querySelector("#result");

    button01_event.addEventListener("click", function() { AddStyle(result_div); });
    button02_event.addEventListener("click", function() { RemoveStyle(result_div); });
    button03_event.addEventListener("click", function() { Animation(result_div); });
}

main();