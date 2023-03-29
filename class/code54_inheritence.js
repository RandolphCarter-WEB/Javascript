function Person({name, age}) {
    this.name = name || "None";
    this.age = age || "None";
}
Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.getAge = function() {
    return this.age;
}

function Employee({name, age, position}) {
    this.name = name || "None",
    this.age = age || "None",
    this.position = position || "None"
}
Employee.prototype.getPosition = function() {
    return this.position;
}