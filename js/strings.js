"use strict";
// normal literals 
const someString = 'string text';
const otherString = "string text";

const who = "Max";
// template literal in action
const helloMessage = `hello ${who}`;

let bool = false;
// converting boolean to String
const stringBool = String(bool);
console.log(stringBool);
// conevrt back to string
bool = Boolean(stringBool);
// bool is true now 
console.log(bool);



const obj = { a: "hallo", b: undefined, c: "someval" };
// converting an object to String
let objAsString = String(obj);
// not very useful
console.log(objAsString);
// better try: 
console.log(JSON.stringify(obj)); // but we are missing out on b
// adding override toString
obj['toString'] = function () { return `a: ${this.a}, b: ${this.b} c: ${this.c}` };
objAsString = String(obj);
console.log(objAsString);

const { a } = obj;
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}