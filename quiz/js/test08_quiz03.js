function CreateCheckBox(name_value, id_value, num) {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", name_value);
    checkbox.setAttribute("id", id_value);
    checkbox.setAttribute("value", num);

    return checkbox;
}

function CreateLabel(id_value, num) {
    let label = document.createElement("label");
    label.setAttribute('for', id_value);
    label.setAttribute("value", num);
    label.textContent = "answer"+num;

    let checkbox = CreateCheckBox("group", id_value, num);
    label.append(checkbox);

    return label
}

function CreateDiv(id_value, num) {
    let div = document.createElement("div");
    div.setAttribute("id", id_value);
    div.textContent = num + "answer is correct";

    return div;
}

function CheckedEvent(event) {
    let answer = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let result = document.querySelector("#result");

    const label = event.target;
    (+label.value === answer) ?
        result.textContent = `정답입니다!`
        : result.textContent = `정답이 아닙니다!`;
}

function AnswerList() {
    let answerlist = []
    for(let i = 0; i < 5; i++) {
        let answer;
        do {
            answer = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        } while(answerlist.includes(answer));

        answerlist[i] = answer;
    }

    return answerlist;
}

function ascending(a, b) {
    return a - b;
}

function ListSort(array) {
    let sortresult = array.slice().sort(ascending);
    return sortresult;
}

function main() {
    let main = document.querySelector("#main_container");
    let answerlist = ListSort(AnswerList());

    let id = "rd";

    for(let i = 1; i <= 10; i++) {
        let label = CreateLabel(id+i, i);

        main.append(label);
    }

    console.log(answerlist);

    document.querySelector("#btn").addEventListener("click", function() {
        let label = main.querySelectorAll('label input[type="checkbox"]:checked');
        for (let i = 0; i < answerlist.length; i++) {
            if (answerlist[i] == label[i].value) {
                main.append(CreateDiv("result", label[i].value));
            }    
        }
    });
}

main();