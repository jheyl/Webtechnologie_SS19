"use strict";
// Funktions Deklaration (statement)
function echt1(a, b, c) {

}
//anonyme Funktion (expression)
const echt2 = function (a, b, c) {

}
//benannte Funktion (expression)
const echt3 = function someName(a, b, c) {

}

function add(x, y) {
    return x + y;
}

add(1, 2); // returns 3

const obj = { someMethode: add };
obj.someMethode(1, 2);

const inst = new add();


const arrow = (x, y) => { return x + y };
const arrow1 = (x, y) => x + y;

arrow(1, 2);

class MyClass { constructor(name) { this.name = name; } }
const myInstance = new MyClass('Paul');

console.log(myInstance);

const counter = {
    count: 0,
    countArray(someArr) {
        this.count = 0;
        someArr.forEach(function (element) {
            // this.count++; //kein Zugriff auf Element
        });
    }
}

counter.countArray([1, 2, 3, 4, 5, 6, 7, 8]); // TypeError: Cannot read property 'count' of undefined  */


const counter2 = {
    count: 0,
    countArray(someArr) {
        this.count = 0;
        someArr.forEach((element) => { this.count++ }); // This-Kontext wird von Methode übernommen
    }
}

counter2.countArray([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(counter2.count); // 8

function test(a, b, c) {
    console.log(arguments);
    console.log(this.name + a);
}

test.call({ name: "hello" }, "a", "b", "c")

