function People({name, address, num, gender}) {
    this.name = name;
    this.address = address;
    this.num = num;
    this.gender = gender;
}

People.count = 1;

const man01_info = {
    name : "OST",
    address : "deajeon",
    num : 4567,
    gender : "man"
};

const man01 = new People(man01_info);
console.log(man01);