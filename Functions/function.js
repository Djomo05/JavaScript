/**
 * A function is a piece of code that take something as input and then do some operations
 * and then return the result.
 *
 * We can have a naming function: when we create a function an provide its name after the
 * key word function.
 *
 * We can have an anonymous function: When we create a function without providing him a name and assign
 * it to a variable.
 *
 * The default return value of a function if no return statement is specified is "undefined"
 *
 * **/

// Naming function
function greeting(){
    console.log('Hello, Landry');
}

// anonymous function
const morning = function () {
    console.log("Good morning!");
}

greeting();
morning();