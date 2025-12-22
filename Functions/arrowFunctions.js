/**
 * But another way to write functions in JavaScript is to create an arrow function expression.
 * Here is how you can refactor the previous example to use arrow function syntax instead:
 *
 * **/

const greetings = (name) => {
    console.log("Hello, " + name + "!");
};


/**
 * If the arrow function only contains one parameter then we can remove the set parentheses
 * **/

const goodMorning = name => {
    console.log("Good morning, " + name + "!");
};


/**
 * If your arrow function has no parameters, then you must use the parentheses like this:
 * **/

const goodAfternoon = () => {
    console.log("Good afternoon!");
};


/**
 * When first learning about functions, you had to wrap the function body in curly braces.
 * But if your function body only contains a single line of code, you can remove the curly braces
 * like this:
 * **/

const goodEvening = name => console.log("Good evening, " + name + "!");
