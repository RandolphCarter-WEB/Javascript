function CreateDiv(id_value) {
    const div = document.createElement("div");
    div.setAttribute("id", id_value);

    return div;
}

function CreateButton(id_value, value) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("id", id_value);
    button.setAttribute("value", value);
    button.textContent = "button";

    return button;
}

function ApplyCss(target_tag, width_value, height_value) {
    target_tag.style.width = width_value;
    target_tag.style.height = height_value;

    target_tag.style.backgroundImage = "url('../../../web_study/image/blog-post-01.jpg')";
    target_tag.style.backgroundRepeat = "no-repeat";
    target_tag.style.backgroundSize = "cover";
    target_tag.style.backgroundPosition = "center";

    return target_tag;
}

function MakeEnviron() {
    const main = document.querySelector("#main_container");

    const main_div = ApplyCss(CreateDiv("main_box"), "200px", "200px");
    main.append(main_div);

    for (let i = 1; i < 4; i++) {
        const button = CreateButton("button_0"+i, i);
        main.append(button);
    }
}

function ChangeCss(target_tag, button_value) {
    switch(button_value) {
        case "1":
            target_tag.style.backgroundImage = "url('../../../web_study/image/blog-post-02.jpg')";
            break;
        case "2":
            target_tag.style.backgroundImage = "url('../../../web_study/image/blog-post-03.jpg')";
            break;
        case "3":
            target_tag.style.backgroundImage = "url('../../../web_study/image/blog-post-04.jpg')";
            break;
        default:
            console.log("[ERROR ChangeCss Func] >> button_value's value have error.");
            break;
    }
}

function main() {
    MakeEnviron();

    const buttons = document.querySelectorAll("#main_container button");
    const main_div = document.querySelector("#main_box");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            ChangeCss(main_div, button.value);
        });
    });
}

main();