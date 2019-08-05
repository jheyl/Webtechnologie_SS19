"use strict";

/* 
let arr = [1, 2, 3, 4, 5, 'some String'];
//console.log(typeof arr); //object
//console.log(arr[0]); // 1
arr[500] = 'hello';
//console.log(arr[300]);
delete arr[0];
arr.forEach(k => console.log(k));
 */
/* arr = [1, 2, 3];
console.log(arr.length); //3
arr[500] = "";
console.log(arr.length); //501
arr.push('d');
console.log(arr.length); //502
arr.length = 1; // löscht alle Elemente deren Index > 0 ist
console.log(arr[1]); //undefined
 */

/* const arr1 = ['a', 'b'];
const arr2 = arr1;
arr2[5] = "hallo";
console.log(arr1); // false

let a1 = ['a', 'b'];
let a2 = ['b', 'c'];
a2 = ["hallo", ...arr1, ...a1, ...a2]; // prepend a1 <- neue Referenz
console.log(a2);
a2 = [...a1, 'd', 'e']; //append elements <- neue Referenz */

/* let numbers = [1, 2, 3, 4, 5];
let doubleNumber = numbers.map((item) => item * 2);
console.log(doubleNumber); //[ 2, 4, 6, 8, 10 ]
console.log(numbers); // [ 1, 2, 3, 4, 5 ] --> unverändert



let evenNumbers = numbers.filter((item) => item % 2 == 0);
console.log(evenNumbers); //[ 2, 4 ]

let unsortedNumbers = [5, 3, 4, 2, 1];
unsortedNumbers.sort();
console.log(unsortedNumbers); // [ 1, 2, 3, 4, 5 ]

let unsortedObjects = [{ age: 12 }, { age: 13 }, { age: 8 }, { age: 2 }, { age: 1 }];
unsortedObjects.sort((a, b) => a.age - b.age);
console.log(unsortedObjects); //[ { age: 1 }, { age: 2 }, { age: 8 }, { age: 12 }, { age: 13 } ]

let fillArray = new Array(30);
fillArray.fill(0);
console.log(fillArray); */

let ages = new Array(39);
ages.fill({ age: 9, name: 'tim' });
function getRandom() {
    return Math.floor(Math.random() * Math.floor(90));
}

ages = ages.map(k => ({ ...k, age: getRandom(), name: 'Paula' }));
console.log(ages);

const totalAge = ages.reduce((prev, curr, i, arr) => prev + curr.age, 0);

console.log(totalAge);