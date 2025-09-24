import { EventName, EventName2, EventType, EVENT_NAME } from "./showcase/sc_enums";

function log(msg: String, e: EventName){

}
function logType(msg: String, e: EventType){
    console.log(msg, e);
}

log('Test', EventName.INIT) //Does Work
// log('Test', EventName2.INIT) //!Does Not Work
// Does Not Work
/*
    This is weird because we need a dot operator for a language that is a structural type system which shouldn't care about the name of things, but really only cares about its runtime values

    Enums are special in TS because it DOES care about the names of things, here enums are nominal type system, which means it does care if it's a EventName or EventName2 here

    The reason people love enums is because refactors are so easy
*/
// log('Test', 'INIT') 

logType('Test Type', 'INIT') // Saves an import of a type
logType('Test Type', EVENT_NAME.INIT) // Us importing