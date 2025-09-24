//================ Enums
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
// But in JS this is pretty much just an immediately invoked func expression
export enum EventName { 
    INIT,
    STATE,
    WAGER,
    ERROR
};
export enum EventName2 { 
    INIT,
    STATE,
    WAGER,
    ERROR
};
// This is an interesting thing in TS, because it'll disappear in transpiled JS, it only exists in TS, but then added inline wherever it's used
// !TS Docs say not to use this however: 
// https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls
// !Essentially a lot of edge cases regarding compilers that would be too scary for scaling
// export const enum EventName { 
//     INIT,
//     STATE,
//     WAGER,
//     ERROR
// };
export const EVENT_NAME = {
    INIT: 'INIT',
    STATE: 'STATE',
    WAGER: 'WAGER',
    ERROR: 'ERROR'
} as const; //! Using a plain old js object is  actually great because it can't be manipulated or changed and can be used as a string or like enum value
type ObjectValues<T> = T[keyof T]; // Here we're using a generic, which won't be covered in this lesson. Here's a video however: https://www.youtube.com/watch?v=dLPgQRbVquo. Generics are Creme de la creme of TS.
export type EventType = ObjectValues<typeof EVENT_NAME> //! We extract via the keys here to define the type, which becomes a union of types, we get a key and what the key represents as a distinct intention

//! LESSON VALUE: REJECT ENUMS IN TYPESCRIPT