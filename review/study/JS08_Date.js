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