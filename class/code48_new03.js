function funcA({element, event, target}) {
    this.element = document.createElement(element);
    
    this.init = function() {
        this.element.textContent = "CLick!";
        this.element.addEventListener("click", function() {
            event();
        });

        document.getElementById(target).append(this.element);
    }
}

document.getElementById("trigger").addEventListener("click", function() {
    const object01 = {
        element : "button",
        event : function() {
            alert(`Hello there`);
        },
        target : "main"
    }

    const obj01 = new funcA(object01);
    obj01.init();
});