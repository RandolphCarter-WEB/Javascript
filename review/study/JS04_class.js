const MAX_HP = 100;

class User {
    constructor() {
        this.name = "default";
        this.hp = MAX_HP;
        this.exp = 0;
    }

    setName(name_SET) {
        this.name = name_SET;
    }
    gainHP(inputHP) {
        if(this.hp + inputHP > 100) this.hp = 100;
        else this.hp += inputHP;
    }
    gainExp(intputEXP) {
        this.exp += intputEXP;
    }
    takeHP(inputHP) {
        if(this.hp - inputHP < 0) this.hp = 0;
        else this.hp -= inputHP;
    }
    takeExp(inputExp) {
        this.exp -= inputExp;
    }
}

const User01 = new User();
console.dir(User01);
User01.setName("OST");

console.log("[View] User00 name >> " +User01.name);
console.log("[View] User00 hp >> " +User01.hp);
console.log("\n[SYSTEM] User00 HP taken 5 by system");

User01.takeHP(5);

console.log("[View] User00 hp >> " +User01.hp);

console.log("\n[SYSTEM] User00 Exp gain by system");

User01.gainExp(500);
console.log("[View] User00 exp >> " +User01.exp);
