export const EVENT_NAME = {
    INIT: 'INIT',
    STATE: 'STATE',
    WAGER: 'WAGER',
    ERROR: 'ERROR'
} as const; // Makes this read-only
//? Using a plain old js object is  actually great because it can't be manipulated or changed and can be used as a string or like enum value
type ObjectValues<T> = T[keyof T]; // Here we're using a generic, which won't be covered in this lesson. Here's a video however: https://www.youtube.com/watch?v=dLPgQRbVquo. Generics are Creme de la creme of TS.
export type EventType = ObjectValues<typeof EVENT_NAME> 
//? We extract via the keys here to define the type, which becomes a union of types, we get a key and what the key represents as a distinct intention