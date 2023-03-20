const buttons_num = document.querySelectorAll(".Number_input div");
const buttons_ops = document.querySelectorAll(".Operator_input div");

let isDisabled = false;

buttons_num.forEach(button => {
    button.addEventListener("click", () => {
        if (!isDisabled) {
            Input_Number(button.getAttribute("value"));
            button.disabled = true;
            isDisabled = true;

            setTimeout(() => {
                button.disabled = false;
                isDisabled = false;
            }, 100);
        }
    });
});

buttons_ops.forEach(button => {
    button.addEventListener("click", () => {
        if (!isDisabled) {
            Input_Operator(button.getAttribute("value"));
            button.disabled = true;
            isDisabled = true;

            setTimeout(() => {
                button.disabled = false;
                isDisabled = false;
            }, 100);
        }
    })
})