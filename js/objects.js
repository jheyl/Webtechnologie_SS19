"use strict";

const max = { first: 'max', last: 'musterman', age: 35 };

//const if = "if"; // Verboten! 
const object = { if: "if" }; // Erlaubt

console.log(max.first); // Explizite Angabe kein Einfluss zur Laufzeit möglich 

const propertyToAccess = 'last';
console.log(max[propertyToAccess]); // Dynamischer zugriff
console.log(max['age']);

console.log(max.mother); // undefinied

max.first = 'Max August'; // zuweisung mit explizitem Zugriff auf Property
max['last'] = 'Müller-Mustermann'; // zuweisung mit dynamischem Zugriff auf Property
max.street = 'Muster-Straße'; // Zuweisung einer bislang nicht vorhandenen Property


const paula = {
    first: "Paula",
    last: "Mustermann",
    get full() {
        return `${this.first} ${this.last}`;
    }
}
console.log(paula.full);

const frieda = {
    first: "Frieda",
    last: "Mustermann",
    set full(fullName) {
        const splits = fullName.split(' ');
        this.first = splits[0];
        this.last = splits[1];
    }
}
frieda.full = 'Frieda Müller-Mustermann';


let thomas = {
    first: "Thomas",
    last: "Mustermann",
    get full() {
        return `${this.first} ${this.last}`;
    },
    set full(fullName) {
        const splits = fullName.split(' ');
        this.first = splits[0];
        this.last = splits[1];
    }
}
thomas.full = 'Thomas Müller-Mustermann';
console.log(thomas.full);


thomas = {
    first: "Thomas",
    say(speech) {
        return `${this.first}: "${speech}"`;
    }
}

console.log(thomas.say('Hello Wete Students'));

// Methoden sind normale Funktionen

console.log(typeof thomas.say); // function

// Achtung: Der Aufruf einer Methode ist nicht zu verwechseln mit
// 
thomas = {
    first: "Thomas",
    say: function say(speech) {
        return `${this.first}: "${speech}"`;
    }
}
let extractedFun = thomas.say;
//console.log(extractedFun("test")); // Erzeugt TypeError --> this = undefined 

this.first = "Hildegard";
thomas = {
    first: "Thomas",
    say: (speech) => {
        return `${this.first}: "${speech}"`;
    }
}
console.log(thomas.say("hello")); // Hildegard: "hello"

// Zuweisung der Referenz
const thomasReference = thomas;
thomasReference.first = 'Peter';
// Peter --> thomasReference und thomas zeigen auf gleiches Objekt
console.log(thomas.first); //Peter
// zurücksetzen 
thomas.first = 'Thomas';
// Flache Kopie mit Hilfe des Spread-Operators
const thomasFlatCopy = { ...thomas };
//Die Variablen zeigen nun auf unterschiedliche Objekte im Heap
thomasFlatCopy.first = 'Paul';
console.log(thomas.first); // Thomas


const phoneBook = {
    thomas: thomas
}
const phoneBookCopy = { ...phoneBook };
phoneBookCopy.mira = { first: 'Mira' };
// "phoneBook" und "phoneBookCopy" sind unterschiedliche Objekte
console.log(phoneBook.mira); //undefined
console.log(phoneBook.thomas.first); //Thomas
phoneBookCopy.thomas.first = "Peter";
// Das Objekt "thomas" ist das gleiche sowohl in "phoneBook" als auch in "phoneBookCopy"
console.log(phoneBook.thomas.first); //Peter


const a = { a: 13, b: 12, c: 11 };
const b = { a: 18, d: 12, e: 11 };
const c = { ...a, ...b };
const d = { ...b, ...a };
console.log(c); // { a: 18, b: 12, c: 11, d: 12, e: 11 }
console.log(d); // { a: 13, d: 12, e: 11, b: 12, c: 11 }

const DEFAULTS = { engine: "internal combustion", wheels: 4 };
let bmwM4 = { make: "bmw", model: "m4" };
let teslaModelS = { make: "Tesla", model: "Model S", engine: "electric" };
/// { engine:'internal combustion', wheels: 4, make:'bmw', model: 'm4' }
bmwM4 = { ...DEFAULTS, ...bmwM4 };
// { engine: 'electric', wheels: 4, make: 'Tesla', model: 'Model S' }
teslaModelS = { ...DEFAULTS, ...teslaModelS };

console.log(teslaModelS);
console.log(bmwM4);

