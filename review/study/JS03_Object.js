const MAX_HP = 10;

const UserInterface = {
    name : "default",
    hp : MAX_HP,
    exp : 0,
    gainHp : function(value) {
        this.hp+= value;
    },
    gainExp : function(value) {
        this.exp+= value;
    },
    takeHp : function() {
        this.hp--;
    },
    takeExp : function() {
        this.exp--;
    }
}

//Input Proto Value is not good code.
let User = [
    {
        name : "OST",
        __proto__ : UserInterface
    }
];
console.log("[SYSTEM] User Track");
console.log("[View] User00 name >> " +User[0].name);
console.log("[View] User00 hp >> " +User[0].hp);
console.log("\n[SYSTEM] User00 HP taken 5 by system");

for(let i = 0; i < 5; i++) {
    User[0].takeHp();
}

console.log("[View] User00 hp >> " +User[0].hp);

console.log("\n[SYSTEM] User00 Exp gain by system");

User[0].gainExp(500);
console.log("[View] User00 exp >> " +User[0].exp);

//Be good
function UserAnother(name_SET) {
    this.name = name_SET;
    this.hp = MAX_HP;
    this.exp = 0;

    this.gainHP = (value) => {
        this.hp += value;
    }
    this.takeHP = () => {
        this.hp--;
    }
    this.gainEXP = (value) => {
        this.exp += value;
    }
    this.takeEXP = () => {
        this.exp--;
    }
};

const User01 = new UserAnother("OST");
console.log(User01);

console.log("\n[SYSTEM] User00 HP taken 5 by system");

for(let i = 0; i < 5; i++) {
    User01.takeHP();
}

console.log("[View] User00 hp >> " +User01.hp);

console.log("\n[SYSTEM] User00 Exp gain by system");

User01.gainEXP(500);
console.log("[View] User00 exp >> " +User01.exp);
console.dir(User01);
console.dir(User[0]);

//Use ProtoType is not good
//This way use so many resource