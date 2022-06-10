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


const select = document.querySelector('Select');
let paragraph = document.querySelector("#");

// Weather App

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;
    let paragraph = document.createElement('p')
    

    if (choice === 'sunny') {
        paragraph.appendChild = `<p>It is nice and sunny outside today. Wear shorts! Go to the beach, 
        or the park, and get an ice cream.</p>`;
        

    } else if (choice === 'rainy') {
        paragraph.innerHTML = `<p>Rain is falling outside; take a rain coat and an umbrella, and
        don't stay out for too long.</p>`;

    } else if (choice === 'snowing') {
        paragraph.innerHTML = `<p>The snow is coming down, it is freezing! Best to stay in with a 
        cup of hot chocolate, or build a snowman.</p>`;

    } else if (choice === 'overcast') {
        paragraph.innerHTML = `<p>It isn't raining but the sky is grey and gloomy; it could turn any minute
        so take a rain coat just in case</p>`;

    } else {
        paragraph.innerHTML = '';
    }

    

}

// Arrays
let unconventionalPets = [
    "lizard",
    "hippogryph",
    "pig",
    "cow",
    "fox",
    "capybara",
    "zebra",
    "racoon",
    "Alexa",
    "unicorn duck",
] 

for (let index = 0; index < unconventionalPets.length; index += 1) {
    let currentPet = unconventionalPets[index]
    //..
    console.log(currentPet)
}





let priceChanges = [0, -0.50, +0.25, +0.3]

let pollResponses = [true, false, true, true, false]
let whatever = [null, undefined, 0, "", NaN]

