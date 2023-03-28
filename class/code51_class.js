class Person {
    #country = "korean";
    constructor({name, address, num}) {
        this.name = name;
        this.address = address;
        this.num = num;
    }

    getcountry() {
        return this.#country;
    }

    setcountry(country) {
        this.#country = country;
    }

    person_info_print () {
        console.log(`${this.name}'s house is in ${this.getcountry()} ${this.address} and his number is ${this.num}.`);
    }
}

const man01_info = {
    name : "OST",
    address : "deajeon",
    num : 491
};

const man01 = new Person(man01_info);
man01.person_info_print();

man01.setcountry("japan");
man01.person_info_print();