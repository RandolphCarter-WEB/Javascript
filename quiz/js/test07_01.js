function GameStart() {
    let user_input = document.getElementById("user_input");
    let result = document.getElementById("result");

    let com_input = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch(user_input.value) {
        case "1":
            if(com_input == 3) {
                result.innerHTML = "You win!";
                break;
            }
            else if (com_input == 2) {
                result.innerHTML = "You Lose!";
                break;
            }
            else if (com_input == 1) {
                result.innerHTML = "Draw try again.";
                break;
            }
            else {
                console.log("ERROR");
                return;
            }

        case "2":
            if(com_input == 3) {
                result.innerHTML = "You Lose!";
                break;
            }
            else if (com_input == 2) {
                result.innerHTML = "DRAW try again.";
                break;
            }
            else if (com_input == 1) {
                result.innerHTML = "You Win!";
                break;
            }
            else {
                console.log("ERROR");
                return;
            }

        case "3":
            if(com_input == 3) {
                result.innerHTML = "DRAW try again!";
                break;
            }
            else if (com_input == 2) {
                result.innerHTML = "You win!";
                break;
            }
            else if (com_input == 1) {
                result.innerHTML = "You Lose!";
                break;
            }
            else {
                console.log("ERROR");
                return;
            }
        default:
            console.log("ERROR");
    }
}