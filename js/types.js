"use strict";
let obj1 = { name: 'Max' };
let obj2 = { name: 'Max' };

console.log(obj1 === obj2);

let obj3 = obj1;
obj3.name = "Paula";

console.log(obj1);

obj2.lastname = "Müller";

console.log(obj2);

delete obj2.name;

console.log(obj2);

let prim1 = 1;
let prim2 = 1;

console.log(prim1 === prim2);

let prim3 = prim1;
prim1 = 6;

console.log(prim3);
