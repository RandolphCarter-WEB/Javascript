Date.prototype.yyyymmdd = function() {
    const yyyy = this.getFullYear();
    const mm = this.getMonth() < 9 ?
        `0${this.getMonth() + 1}` : this.getMonth() + 1;
    const dd = this.getDate() < 10 ?
        `0${this.getDate()}` : this.getDate();

    return `` + yyyy + mm + dd;
}

const date = new Date();
console.log(date.yyyymmdd());

const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getFullYear() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return year + month + day;
}

console.log(getDate());

const dateUTC = Date.UTC(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
);

console.log(new Date(dateUTC));

Date.daysDiff = (date1, date2) => {
    if(!(date1 instanceof Date) || !(date2 instanceof Date)) return "";

    const d1 = date1.getTime();
    const d2 = date2.getTime();

    let diff = d2 - d1;
    const s = Math.floor((diff = diff / 1000) % 60);
    const m = Math.floor((diff = diff / 60) % 60);
    const h = Math.floor((diff = diff / 60) % 24);
    const d = Math.floor(diff / 24);

    return `${d} days , ${h} hours, ${m} minutes, and ${s} seconds`;
}

let from = new Date(2000, 0 , 1);
let to = new Date(from.getFullYear() + 1, from.getMonth() + 3, from.getDate() + 5, from.getHours() + 4, from.getMinutes() + 30, from.getSeconds() + 50);

console.log("from >> " + from);
console.log("to >> " + to);
console.log(Date.daysDiff(from, to));

console.dir(Date);

const items = [1,2,3,4,5,6,7,8,9];
const item = items[Symbol.iterator]();

// while(item.next().done === false) {
//     console.dir(item.next());
// }

const map = new Map();

map.set("one", 1);
map.set("two", 2);
map.set("three", 3);

const key = map.keys();
const value = map.values();
const entries = map.entries();

console.log("Value >> " + value.next().value);
console.log("Key >> " + key.next().value);
console.log("Entries >> " + entries.next().value);

console.log("Value >> " + value.next().value);
console.log("Key >> " + key.next().value);
console.log("Entries >> " + entries.next().value);

