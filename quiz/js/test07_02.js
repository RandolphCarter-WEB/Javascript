document.querySelector("#btn").addEventListener("click", function() {
    let user_input = document.querySelector("#txt1");
    let com_input = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let result = document.querySelector("#result");

    let win = (user_input.value == "1" && com_input == 3) ||
                (user_input.value == "2" && com_input == 1) ||
                (user_input.value == "3" && com_input == 2);

    let ez_win = (com_input%3 + 1) == user_input;

    //let draw = user_input.value == com_input;

    let lose = (user_input.value == "1" && com_input == 2) ||
                (user_input.value == "2" && com_input == 3) ||
                (user_input.value == "3" && com_input == 1);

    //let ez_lose = (user_input%3 + 1) == com_input;

    if(win) {
        result.innerHTML = "You Win!";
    }
    else if (draw) {
        result.innerHTML = "Draw try again.";
    }
    else if (lose) {
        result.innerHTML = "You Lose!";
    }
    else {
        result.innerHTML = "ERROR.";
    }
});