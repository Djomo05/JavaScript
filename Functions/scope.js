/**
 *
 * Scope in programming refers to the visibility and accessibility of variables in different
 * parts of your code.
 *
 * It determines where variables can be accessed or modified.
 *
 * In JavaScript, understanding scope is crucial for writing clean, efficient, and bug-free code.
 *
 * There are three main types of scope: global scope, local scope, and block scope.
 * **/

let globalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(globalVar);
}

printGlobalVar(); // "I'm a global variable"


function greet() {
    let message = "Hello, local scope!";
    console.log(message);
}

greet(); // "Hello, local scope!"
// console.log(message); // This will throw an error


/**
 *
 * Block scope is a concept introduced with the let and const keywords in ES6. A block is any code
 * section within curly braces, {}, such as in if statements, for loops, or while loops.
 * The concept of loops will be taught in an upcoming lesson.
 *
 * **/

if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar); // "I'm in a block"
}

// console.log(blockVar); // This will throw an error
