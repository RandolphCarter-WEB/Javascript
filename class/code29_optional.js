const obj1 = {};
obj1.address = {};
obj1.address.street = {};
obj1.address.findStreet = function () {
    console.log(`Find street auto.`);
}

obj1.address.street = `mafo-street`;

console.log(obj1?.address?.street);

obj1?.address?.findStreet?.();