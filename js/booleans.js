"use strict";
let b1 = "";
let someVar;
const setSomeVar = () => { someVar = b1 ? b1 : "default String" };

setSomeVar();
console.log(someVar);

b1 = "I'm a custom String";

setSomeVar();
console.log(someVar);


const primitiveType = Boolean(false);

const object = new Boolean(false);

console.log(primitiveType);
console.log(!!object);

let x = false && console.log('hello'); // keine Ausgabe
x = true && console.log('hello'); // ‘hello‘

someVar = 0;

someVar || setSomeVar();

console.log(someVar);




