let user = {};
Object.defineProperty(user, "name", {
    get: () => {
        if(!this._name) return "default";
        else return this._name;
    },
    set: (newName) => {
        if(!newName) console.log("Can\'t set name");
        else this._name = newName;
    }
});

Object.defineProperty(user, "age", {
    get: () => {
        if(!this._age) return null;
        else return this._age;
    },
    set: (newAge) => {
        if(!newAge) console.log("Can\'t set age");
        else this._age = newAge;
    }
});

console.log("[SYSTEM] starting");
console.log("[View] User set");
console.log("[View] User name >> " + user.name);
console.log("[View] User age >> " + user.age);

console.log("\n[SYSTEM] Setting User");
user.name = "OST";
user.age = 20;

console.log("[View] User name >> " + user.name);
console.log("[View] User age >> " + user.age);

console.log("\n[SYSTEM] Setting User");
user.name = undefined;
user.age = null;

console.log("[View] User name >> " + user.name);
console.log("[View] User age >> " + user.age);