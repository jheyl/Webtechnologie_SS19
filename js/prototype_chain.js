
"use strict";

const proto = {
    protoProp: 'hello '
};
const obj = {
    __proto__: proto,
    objProp: "world"
};

console.log(obj.protoProp + obj.objProp);


obj.protoProp = "what a ";
console.log(obj.protoProp + obj.objProp); //what a world 
console.log(proto.protoProp); //hello

obj.__proto__.protoProp = "what a ";

console.log(proto.protoProp); //what a 


class Person {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return `${this.name} is a wete Student!`;
    }
}
const jane = new Person('jane');
console.log(Object.getPrototypeOf(jane)); // Person 
console.log(jane.describe());

console.log({ ...Person.prototype });

function OldPerson(name) {
    this.name = name;
}
OldPerson.prototype.describe = function describe() {
    return `${this.name} isn't a wete Student anymore!`;
}
const oldJane = new OldPerson('jane');
console.log(Object.getPrototypeOf(oldJane)); // >ldPerson 
console.log(oldJane.describe());


class Foo {
    constructor(name) {
        this.name = name;
    }
    static doSomething() {
        return "did Something";
    }
}

console.log(Foo.doSomething());


class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade
    }
    describe() {
        return super.describe() + ` And has the grade ${this.grade}`;
    }
}
const studentJane = new Student("jane", 1);
console.log(studentJane.describe()); //jane is a wete Student!


const Branded = S => class extends S {
    setBrand(brand) {
      this._brand = brand;
      return this;
    }
    getBrand() {
      return this._brand;
    }
};
  
class Car extends Baranded(Object) {

}


