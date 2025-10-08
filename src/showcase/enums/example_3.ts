// This is an interesting thing in TS, because it'll disappear in transpiled JS, it only exists in TS, but then added inline wherever it's used
export const enum EventName3 { 
    INIT,
    STATE,
    WAGER,
    ERROR
};

// !TS Docs say not to use this however: 
// https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls
// !Essentially a lot of edge cases regarding compilers that would be too scary for scaling