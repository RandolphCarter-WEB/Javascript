const pen = {
    body : "yellow",
    inc : 30,
    pen_status : "offline",

    toggle : function () {
        if (this.pen_status == "offline") {
            this.pen_status = "online"
            console.log("You can use this pen.");
        }
        else {
            this.pen_status = "offline";
            console.log("You cannot use this pen.");
        }
    },

    write : function () {
        if(this.pen_status == "online") {
            if(this.inc > 10) {
                this.inc -= 10;
                return "You can draw.";
            }
            else {
                console.log("This pen Cannot write without inc.");
                console.log("You need to recharge inc.");
                return "ERROR";
            }    
        }
        else {
            return "You cannot draw.";
        }
    },

    recharge : function (value) {
        if(value > 0) {
            this.inc += value;
        }
        else {
            console.log("There is no inc to recharge");
        }
    },
    
    printinc : function () {
        console.log(`this pen have ${this.inc}% inc`);
    }
};

console.log(pen.body);

console.log(pen.write());

pen.toggle();

console.log(pen.write());
console.log(pen.write());
console.log(pen.write());

pen.printinc();

console.log(pen.write());

pen.recharge(100);
pen.printinc();

console.log(pen.write());
console.log(pen.write());
console.log(pen.write());