/**
 * Prompt is used to get user input through browsers
 *
 * Prompt can take two arguments, first one is the message that we want to display to a user
 * and the second is the default value we set if the user doesn't provide one.
 *
 * When the prompt modal has pop up, if the user press "cancel" it'll return a null value
 * even if the developer has set the default value. But if the user Press "OK", then it'll will
 * return either the user's value is provided or the default value from the prompt.
 *
 * It's not recommended to used it in modern, complex website cause it's not working the same
 * in all the browser.
 *
 * if the prompt is executed it'll halt the execution of the program until the user enter a value
 *
 * The prompt's return value is of type string
 *
 * **/

prompt("What's your name :");