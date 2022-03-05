let three = function(){
    let x = 3
    return x
}

let outputOfThree = three()
console.log(outputOfThree)

let tres = three
console.log(tres)
console.log(tres())

// call a function
// run a function
// execute a function
// invoke a function

let observe = function (value) {
    console.log(value)
}

observe("I have been observed")
observe(3.14)

let passThrough = function (value) {
    return value
}

// const PI = 3.14

let message = "THE RIDDLER!"

let print = function (electricity, paper, ink, documentData) { // parameters, "input variables"
    console.log(message)
    // let message = "BATMAN!"
    
    let printedPage = null
    return printedPage
}


// scope

const findSumOfNumbers = function (numbers) {
    return 2 + 5 + 1 + 3
}

let result = findSumOfNumbers ([2, 5, 1, 3])
console.assert(result === 11, {
    test: "findSumOfNumbers([2, 5, 1, 3,]);",

    expected: 11,

    result: result
});

// My Solution

const add = function (a, b) {
    return a + b;
}

const multiply = function (a, b) {

    let result = 0
    
    for (let i=0; i<b; i++) {
        result = add(result, a);
    }

    return result;
    
}

// My Unit Test

const testMultiply = function () {
    // start testing a happy path

    let result = multiply(2, 3);
    
    console.assert(result === 6, JSON.stringify({

        "test": 'multiply(2, 3)',

        "expected": 6,

        "result": result

    }));
}

testMultiply();

// function expression
// let greet = function (name) {
//     let message = "Howdy, "
//     return message + name + "!"
// }

console.log(greet("Randy"))

// function statement (including additional feature: hoisting)
function greet (name = "friend"){
    let message = "Howdy, "
    return message + name + "!"
}

console.assert(greet("Bob") === "Howdy, Bob!")
console.assert(greet("Patrick") === "Howdy, Patrick!")
console.assert(greet(undefined) === "Howdy, friend!")
console.assert(greet() === "Howdy, friend!")
console.assert(greet(null) === "Howdy, null!")