import { EventName } from "./showcase/enums/example_1";
import { EventName2 } from "./showcase/enums/example_2";
import { EventName3 } from "./showcase/enums/example_3";
import { EventType } from "./showcase/enums/example_4";
import { EVENT_NAME } from "./showcase/enums/example_4";
import { MyEnum, Colors } from "./showcase/enums/example_5";

//? EXAMPLE 1 ==========================================================
//#region Example 1
console.log("=== Example 1 ===");
function log(msg: String, e: EventName){
    console.log(msg, e);
}
log('Test Example 1: ', EventName.INIT) //Does Work

// Becomes an IIFE (Immediately Invoked Function Expression) in JS
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// https://www.typescriptlang.org/docs/handbook/enums.html
// Like an arrow function, but for objects
// Is nominal which goes against the rules of typescript which is to boil down to values at runtime

// NOT NATIVE to JS
// At runtime enums behave unpredictably
// Will most likely create objects
// Most similar way to write this in TS is...
/*
    const EventName = {
        INIT: 0,
        0: 'INIT',
        STATE: 1,
        1: 'STATE'
        WAGER: 2,
        2: 'WAGER'
        ERROR: 3,
        3: 'ERROR'
    };
*/
//#endregion
//? EXAMPLE 2 ==========================================================
//#region Example 2
console.log("=== Example 2 ===");
// log('Test', EventName2.INIT) //!Does Not Work
// log('Test', 'INIT') //!Does Not Work
/*
    This is weird because we need a dot operator for a language that is a structural type system which shouldn't care about the name of things, but really only cares about its runtime values

    Enums are special in TS because it DOES care about the names of things, here enums are nominal type system, which means it does care if it's a EventName or EventName2 here

    The reason people love enums is because refactors are so easy
*/

const typeOne = {
    a: 'a',
    b: 'b'
}

const typeTwo = {
    a: 'a',
    b: 'b'
}

function takesTypeOne(param: typeof typeOne) {
    console.log(param);
}

takesTypeOne(typeOne) // Works
takesTypeOne(typeTwo) // Does Work TOO
//#endregion
//? EXAMPLE 3 ==========================================================
//#region Example 3
console.log("=== Example 3 ===");
function logAsConst(msg: String, e: EventName3){}
logAsConst('Test', EventName3.INIT) //Does Work
// logAsConst('Test', 'INIT') //Does Not Work
//#endregion
//? EXAMPLE 4 ==========================================================
//#region Example 4
console.log("=== Example 4 ===");
function logType(msg: String, e: EventType){
    console.log(msg, e);
}
logType('Test Type Example 4, string:', 'INIT') // Saves an import of a type
logType('Test Type Example 4, enum:', EVENT_NAME.INIT) // Us importing
//#endregion
//? Example 5 ===========================================================
//#region Example 5
console.log("=== Example 5 ===");
console.log(MyEnum[0]); // "A"
console.log(MyEnum[3]); // undefined (no corresponding member)
console.log(Object.keys(MyEnum)); // ["0", "1", "A", "B"]

const colorValue = 5;
const myColor: Colors = colorValue as Colors; //!No compile-time error, but 'myColor' is not a valid enum member
console.log(myColor);
console.log(Colors[myColor]);
//#endregion